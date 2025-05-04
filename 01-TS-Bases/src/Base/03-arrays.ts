
const numberArr = [1, 2, 3, 4, 5]; //as const se puede agregar cambien para sea solo lectura;

numberArr.push(6);

console.log(numberArr);

//Se puede crear un array con union de tipos con pipe
const numberArr2: (number|string)[] = [...numberArr]; //Igual que con obj se puede usar spread
numberArr2.push(7);
console.log(numberArr2);

export{}