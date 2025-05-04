
// function greetPerson(name:string){

//     return `Hola, ${name}`
// }

const sayHelloTo = (name:string)=> {

    return `Hello to ${name}`;
}

const sayByeTo = (name:string) => `Bye bye ${name}`

const getUser = (uid: string) => ({
    //Al tener una arrowFunction un return de un obj, se debe hacer entre ()
        uid,//cuamdo una property apunta a un parametro con mismo nombre, se puede colocar soloa una vez
        username: 'Tony001'
    })


console.log(sayHelloTo('Niko'));
console.log(sayByeTo('Pepe'));
console.log(getUser('ABC-123'));



