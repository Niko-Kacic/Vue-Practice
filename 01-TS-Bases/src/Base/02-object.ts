//Los objetos en contsantes no se pueden definir como un nuevo objeto bajo mismo nombre
//Pero si se puede apuntar a sus propiedades y cambiar algún valor

export const person = {
    lastName: 'Stark',
    age: 45,
    address: {
        city: 'New York',
        zip: 51323,
        lat: 14.23232,
        lng: 34.56672
    }
} //as const; //Con esta linea se crea el objeto literal solo lectura y no se puede modificar sus propertys 

// person.age = 55;

const person2 = person;

person2.lastName = 'Parker';

console.log(person);
console.log(person2);//Ejemplo alterar obj inicial por referencia 

//Una opción es unsar spread operator, 
// pero si quisieramos cambiar el sub ojeto, afectaría al dereferencia
const person3 = {...person};

person3.lastName = 'Barnnes';
console.log(person3)  ;

//Desde el 2022 JS agrego la funcion structuredClone() clona sin alterar la referencia
const person4 = structuredClone(person);
person4.address.city = 'LA';
person4.lastName = 'Murdock'
console.log(person4)