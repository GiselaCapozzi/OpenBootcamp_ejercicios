function esUnaFuncion() {
  if (true) console.log(true)
  else console.log(false)
}

esUnaFuncion();

////////////////
const ejecutarPromesa = new Promise((resolve, reject) => {
  if (true) {
    setTimeout(() => {
      resolve()
      console.log('Me ejecute')
    },  5000);
  } else {
    reject();
  }
})

ejecutarPromesa
  .then(() => console.log('Promesa ejecutada'))
  .catch(error => console.log(error))

///////////////////
function* generadoraIndices() {
  let indice = 2;
  while (true) {
    indice += 2;
    if (indice === 20) return indice;
    yield indice;
  }
}

const indice = generadoraIndices();

console.log(indice.next().value);
console.log(indice.next().value);
console.log(indice.next().value);
console.log(indice.next().value);
console.log(indice.next().value);
console.log(indice.next().value);
console.log(indice.next().value);
console.log(indice.next().value);
console.log(indice.next().value);
console.log(indice.next().value);