import type{ Hero } from '../data/heroes';
import {getHeroByID} from './07-imp-exp';


// console.log('Inicio')


// new Promise((resolve, reject)=>{
//Cuerpo de la promesa

//     reject('No se cumplio la promesa');

// }).then ((message)=>{
//     console.log(message);
// }).catch((errMesagge)=>{
//     console.log(errMesagge);
// }).finally(()=> console.log('Fin promesa'))


// console.log('Final');


const getHeroByIdAsync = (id: number):Promise<Hero>=>{ 
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{

            const hero = getHeroByID(id);

            hero ? resolve(hero):reject(`Heroe con id: ${id} no encontrado`);
          
        }, 1500)
    })
}

getHeroByIdAsync(200)
    .then ( (hero)=>{
        console.log(`El nombre es`, hero.name)
    }).catch(errmsg => alert(errmsg))
