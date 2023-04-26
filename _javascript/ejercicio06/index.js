let compra = ['Detergente', 'Manteca', 'Jugo', 'Harina', 'Huevos'];
compra.push('Aceite de Girasol');
// compra.pop();
compra.splice(compra.length - 1, 1);
console.log(compra);

const pelisFav = [
  {
    titulo: 'Harry Potter y las Reliquias de la Muerte',
    director: 'David Yates',
    fecha: 2010
  },
  {
    titulo: 'Los Miserables',
    director: 'Tom Hooper',
    fecha: 2012
  },
  {
    titulo: 'Scream',
    director: 'Wes Craven',
    fecha: 1996
  }
];

const pelisPosterior = pelisFav.filter(peli => peli.fecha < 2010);
console.log(pelisPosterior);

const directorPelis = pelisFav.map(peli => peli.director);
console.log(directorPelis);

const tituloPelis = pelisFav.map(peli => peli.titulo);
console.log(tituloPelis);

const titulosDirectores = directorPelis.concat(tituloPelis);
console.log(titulosDirectores);

const propagacion = [...directorPelis, ...tituloPelis];
console.log(propagacion);