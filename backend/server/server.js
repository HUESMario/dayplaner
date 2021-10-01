const http = require('http');
const fs = require('fs');

/**
 * create Server so we can first compute Data.
 */
const server = http.createServer();

server.on('request', (req, res) => {
    let params = new URL(req.url, `http://${req.headers.host}`);
    
    if(!params.searchParams.has('g'))
    {
        res.writeHead(200, {"content-type":"text/html"});
        res.write('<p>nothing to see Here.</p>');
        res.end();
    }
    else 
    {
        const doesGet = params.searchParams.get('g') === "true";
        const file = `../userData/${params.searchParams.get('f') || params.searchParams.get('name')}.json`;
        const fileExists = fs.existsSync(file);

        if(doesGet)
        {
            
            if(fileExists)
            {
                const data = fs.readFileSync(file, 'utf-8');
                res.writeHead(200, {"content-Type": "Application/JSON"})
                res.write(data);
            }
            else if(!fileExists)
            {
                res.writeHead(404, {"content-type": "plain/text"});
                res.write("couldn't find File")
            }
        }
        else if(!doesGet)
        {
            const newProfile = {
                name: params.searchParams.get('name'),
                age: params.searchParams.get('age'),
                living: params.searchParams.get('living'),
            }
            let response = "";
            if(newProfile.name && newProfile.age && newProfile.living)
            {
                if(!fileExists)
                {
                    fs.writeFileSync(`../userData/${newProfile.name}.json`, JSON.stringify(newProfile));
                    response = "successful";
                    res.writeHead(200, {"content-type": "plain/text"});
                }
            }
            res.write(response);
        }
        
        res.end();
    }
})


server.listen(8000);