const { link } = require('fs');
const http = require('http')

class api {
    api(link){
        this.#link = link;
    }

    #link;
}

function getProfile(name) {
    let url = new URL('http://localhost:8000/'); 

    url.searchParams.set('f', name);
    url.searchParams.set('g', true);
    http.get(url.href, async (res) => {

        let chunk = "";
        res.on('data', (buffer) => {
            chunk += buffer;
        });

        await res.on('end', () => {
            if(res.statusCode !== 404)
            {   
                console.log(JSON.parse(chunk));
            }
        })
    })
}
function setProfile(name, age, living) {
    let url = new URL('http://localhost:8000/'); 

    url.searchParams.set('name', name);
    url.searchParams.set('age', age);
    url.searchParams.set('living', living);
    url.searchParams.set('g', false);
    http.get(url.href, async (res) => {
        let response = []
        res.on('data', (chunk) => {
            response.push(chunk);
        })

        res.on('end', () => {
            console.log(response.join(''));
        })
    })
}
getProfile('Mario')
setProfile('Denis', 25, 'Herne, Germany')