class Estudiante {
  constructor(nombre, asignaturas) {
    this.nombre = nombre;
    this.asignaturas = asignaturas;
  }

  obtenDatos() {
    return {
      nombre: this.nombre,
      asignaturas: this.asignaturas
    }
  }
};

const nuevoEstudiante = new Estudiante('Albina', ['Javascript', 'HTML', 'CSS']);

console.log(nuevoEstudiante.obtenDatos());