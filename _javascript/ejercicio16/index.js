const parrafos = document.querySelectorAll('.parrafo');
const secciones = document.querySelectorAll('.seccion');
const tacho = document.querySelector('.imagen-fantasma');

parrafos.forEach(parrafo => {
  parrafo.addEventListener('dragstart', e => {
    parrafo.classList.add('dragging');
    e.dataTransfer.setData('id', parrafo.id);
  })

  parrafo.addEventListener('dragend', () => {
    parrafo.classList.remove('dragging');
  })
})

secciones.forEach(seccion => {
  seccion.addEventListener('dragover', e => {
    e.preventDefault();
    // e.dataTransfer.dropEffect = 'move';
    // e.dataTransfer.dropEffect = 'link';
    e.dataTransfer.dropEffect = 'copy'; // copy por defecto
  })
  seccion.addEventListener('drop', e => {
    const id_parrafo = e.dataTransfer.getData('id');
    // console.log("Parrafo id: " + id_parrafo);
    const parrafo = document.getElementById(id_parrafo);
    seccion.appendChild(parrafo);
  })
})

tacho.addEventListener('dragover', (event) => {
	event.preventDefault()
	event.dataTransfer.dropEffect = 'copy'
})

tacho.addEventListener('drop', (event) => {
	const idParrafo = event.dataTransfer.getData('id')
	document.getElementById(idParrafo).remove()
})