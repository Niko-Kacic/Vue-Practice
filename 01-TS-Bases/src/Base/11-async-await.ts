import { giphyApi } from "./10-axios";
import type { GIFResponse } from '../interfaces/gif.response';

export const getImage = async()=>{//async transforma la funciona, en una que regresa una promesa

  try{

      const resp = await giphyApi.get<GIFResponse>('/random')
      return resp.data.data.images.downsized_large.url;
    } catch(err){
        throw 'URL no encontrada'
    } 
}

// export const getImagePromise = ()=>{//Mismo resultado que con async
//     return new Promise( resolve =>{
//         resolve('https://url-de-sitio/image1.jpg')
//     });
// }


getImage()
    .then( url => console.log({url}))
    .catch(err => console.log(err))
//console.log(getImagePromise());