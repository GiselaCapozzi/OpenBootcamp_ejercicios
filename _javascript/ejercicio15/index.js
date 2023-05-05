const nombre = 'Gisela';
const apellido = 'Capozzi';

const persona = {
  nombre,
  apellido
}

sessionStorage.setItem('inicio-session', JSON.stringify(persona));

console.log(JSON.parse(sessionStorage.getItem('inicio-session')));

localStorage.setItem('nombre-local', JSON.stringify(persona));

console.log(JSON.parse(localStorage.getItem('nombre-local')));

const now = new Date()
document.cookie = `datos=${JSON.stringify(datos)};expires=${new Date(now.getTime() + 2 * 60000)}`;