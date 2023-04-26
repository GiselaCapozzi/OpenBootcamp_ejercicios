const misDatos = {
  nombre: 'Gisela',
  apellido: 'Capozzi',
  edad: 34,
  altura: 1.58,
  isDeveloper: true
};

var miEdad = misDatos.edad;
console.log(miEdad);

const datos = [];

for (let valor in misDatos) {
  datos.push(misDatos[valor]);
}
console.log(datos);

const datosAmigos = [
  {
    nombre: 'Chuni',
    apellido: 'Garcia',
    edad: 30,
    altura: 1.56,
    isDeveloper: false
  },
  {
    nombre: 'Albina',
    apellido: 'Perez',
    edad: 25,
    altura: 1.64,
    isDeveloper: true
  }
];

const union = datosAmigos.concat(misDatos);
console.log(union);

const ordenEdad = union.sort((a, b) => a.edad - b.edad);
console.log(ordenEdad);

// const ordenNombre = union.sort((a, b) => a.nombre > b.nombre ? 1 : a.nombre < b.nombre ? -1 : 0);
// console.log(ordenNombre);
