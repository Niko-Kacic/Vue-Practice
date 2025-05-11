import axios from 'axios';
import { GIFResponse } from '../interfaces/gif.response';

const apiKey = '1gmFgtZpiABHDXM0RfJw8e9OkNdP1rB2';


export const giphyApi = axios.create({ //Esto crea una instancia de axios con create() para trabajar directamente con la API de giphy 
   
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        api_key: apiKey,
    }
}); 




// giphyApi.get<GIFResponse>('/random')
//     .then( res => console.log(res.data.data.images.downsized_large.url))
//     .catch( err => console.log( err))
