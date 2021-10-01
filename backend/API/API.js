const http = require('http')
const superagent = require('superagent');

class api {
    //public:
    api(link){
        this.#link = link;
    }
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

    setProfile(name, age, living) {
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

    //private:
    #link;
}

const Api = new api('http://localhost:8000/')
Api.setProfile('Denis', 25, 'Herne, Germany')
const test = async () => {
    console.log(await Api.getProfile('Denis'));
}
test();