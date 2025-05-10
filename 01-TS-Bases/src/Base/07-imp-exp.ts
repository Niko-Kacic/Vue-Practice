                //Al importar es bueno colocar el type, para la transpilación no lo considere
import heroes, { type Owner } from "../data/heroes";
//En el import de heroes, se trae la const por default de data
//En cambio con {owners} se debe traer por destr ya que se exporta como array

export const getHeroByID = (id:number)=>{
   return heroes.find( hero => hero.id === id);
}


//console.log(getHeroByID(100));

export const getHeroByOwner = (owner:Owner)=>{//Se agrega tipado extricto de Owner
    return heroes.filter(hero => hero.owner === owner )??{};
}

console.log(getHeroByOwner('DC'));
console.log(getHeroByOwner('Marvel'));