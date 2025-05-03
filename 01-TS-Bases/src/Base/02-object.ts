//Los objetos en contsantes no se pueden definir como un nuevo objeto bajo mismo nombre
//Pero si se puede apuntar a sus propiedades y cambiar algún valor

const person = {
    lastName: 'Stark',
    age: 45,
    address: {
        city: 'New York',
        zip: 51323,
        lat: 14.23232,
        lng: 34.56672
    }
} //as const; //Con esta linea se crea el objeto literal solo lectura y no se puede modificar sus propertys 

person.age = 55;