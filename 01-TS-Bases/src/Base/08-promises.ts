
console.log('Inicio');


new Promise((resolve, reject)=>{
//Cuerpo de la promesa

    reject('No se cumplio la promesa');

}).then ((message)=>{
    console.log(message);
}).catch((errMesagge)=>{
    console.log(errMesagge);
}).finally(()=> console.log('Fin promesa'))



console.log('Final');