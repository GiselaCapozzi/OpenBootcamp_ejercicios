const fechaActual = new Date();
console.log(fechaActual);

const nacimiento = new Date(1989, 02, 23);
console.log(nacimiento);

const comparaFechas = fechaActual.getDate() > nacimiento.getDate();
console.log(comparaFechas);

const diaNacimiento = nacimiento.getDate();
console.log(diaNacimiento);

const mesNacimiento = nacimiento.getMonth() + 1;
console.log(mesNacimiento);

const anioNacimiento = nacimiento.getFullYear();
console.log(anioNacimiento);