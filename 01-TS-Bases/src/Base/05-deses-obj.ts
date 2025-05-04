
interface Hero {
    name: string;
    age: number;
    codeName: string;
    power?: string;
}

interface createHeroArgs {
    name: string;
    age: number;
    codeName: string;
    power?: string;
}


export const person: Hero = {
    name: 'Tony',
    age: 45,
    codeName: 'Ironman',
};

//const {age, name, power = 'No tiene poder'} = person //Puede ser objeto o Raay

//console.log(age, name, power);

const createHero = ({name, age, codeName, power}: createHeroArgs) =>({
    id: 12234,
    name: name,
    age: age,
    codeName: codeName,
    powe: power ?? 'No tiene poder' //el doble ?? es como ||, solo que tiee más consideraciones con valores null, void, etc.
})

console.log(createHero(person))