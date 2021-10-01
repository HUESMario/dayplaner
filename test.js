const superagent = require('superagent');

const { parse } = require('node-html-parser');

const gifs = (link) => {
    return new Promise(function(resolve, reject)
        {
            let url = new URL(link); 

            superagent.get(url.href).then((object) => {resolve(object.text)}).catch((e) => {reject(e)})
        })
    }
    const test = async () => {
        
        const pageStr = await gifs();
        const pageHTML = parse(pageStr);
        console.log(pageHTML.querySelector('#single-gif-container').querySelector('img').attributes.src);
    }
    test();