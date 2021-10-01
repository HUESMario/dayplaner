const http = require('http')
const superagent = require('superagent');

class api {
    //public:
    /**
     * get Profile of {name} User 
     * @param {string} name Name of User we want to get Data from.
     */
    getProfile(name) {
        return new Promise(function(resolve, reject)
        {
            let url = new URL('http://localhost:8000/'); 
            url.searchParams.set('f', name);
            url.searchParams.set('g', true);
            superagent.get(url.href).then((object) => {resolve(JSON.parse(object.text))}).catch((e) => {reject(e)})
        })
    }

    /**
     * 
     * @param {object} toSend 
     */
    setProfile(toSend) {
    let url = new URL('http://localhost:8000/'); 

    for(const [key, value] of Object.entries(toSend))
    {
        url.searchParams.set(key, value);
    }
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

}

const Api = new api('http://localhost:8000/')
const toSend = {
    name: 'Mario',

}
Api.setProfile(toSend)
const test = async () => {
    console.log(await Api.getProfile('Denis'));
}
test();