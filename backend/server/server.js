const http = require('http');
const fs = require('fs');
const path = require('path');

/**
 * create Server so we can first compute Data.
 */
const server = http.createServer();

server.on('request', (req, res) => {
    let params = new URL(req.url, `http://${req.headers.host}`);
    let statusCode = 200;
    
    console.log(req.url);
    let contentTypes ={
        text: 'plain/text',
        html: 'text/html',
        css: 'text/css',
        js: 'application/javascript',
        json: 'application/json',
        ico: 'image/ico',
        map: "plain/text"
    }
    if(!params.searchParams.has('g'))
    {
        if(req.url === '/')
        {
            res.writeHead(statusCode, {"content-Type": contentTypes.html});
        }
        else 
        {
            res.writeHead(statusCode, {"content-Type": contentTypes[contentTypes.hasOwnProperty(path.extname(req.url).split('.')[1]) ? path.extname(req.url).split('.')[1] : contentTypes.text]})
        }
        
        res.write(fs.readFileSync(`../../build${req.url === '/' ? '/index.html' : req.url}`, 'utf-8', (err) => {console.log(err)}));
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
                res.writeHead(statusCode, {"content-Type": "Application/JSON"})
                res.write(data);
            }
            else if(!fileExists)
            {
                statusCode = 404;
                res.writeHead(statusCode, {"content-type": "plain/text"});
                res.write("couldn't find File")
            }
        }
        else if(!doesGet)
        {
            const newProfile = {};
            for(const [key, value] of params.searchParams.entries())
            {
                newProfile[key] = value;
            }
            let response = "File already exists";
            if(!fileExists)
            {
                fs.writeFileSync(`../userData/${newProfile.name}.json`, JSON.stringify(newProfile));
                response = "successful";
                res.writeHead(statusCode, {"content-type": "plain/text"});
            }
            res.write(response);
        }
        
        res.end();
    }
})


server.listen(8000);