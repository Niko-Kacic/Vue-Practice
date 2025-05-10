import type { GIFResponse } from "../interfaces/gif.response";


const apiKey = '1gmFgtZpiABHDXM0RfJw8e9OkNdP1rB2';

//fetch viene incluido
fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    .then((res)=>{
        return res.json()//Se usa json() para transforma la respuesta que viene como ReadableStream y tomar lo que interesa
    })
    .then((body:GIFResponse)=>{
        console.log(body.data.images.downsized_medium.url);
    })
    .catch((err)=> {
        console.info(err)
    });