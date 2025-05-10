

const apiKey = '1gmFgtZpiABHDXM0RfJw8e9OkNdP1rB2';

//fetch viene incluido
fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    .then((res)=>{
        return res.json()
    })
    .then((body)=>{
        console.log({body})
    })
    .catch((err)=> {
        console.info(err)
    });