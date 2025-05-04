

const characters:string[] = ['Goku','Veggeta','Trunks', 'Goten'];

const [ g, v, t, g2 ] = characters;//La destruturación es posicional acorde al index del array
            //Pero con cada coma se salta al siguien elemento
console.log( g,v,t,g2); 


const returnArr = () => {
    return[123, 'ABC'] as const;//se usa para devolver valores que no va cambiar
}

//en la destructuración el primer arg sera número y segundo string.
 const [numbers, letters] = returnArr();

console.log(numbers, letters);