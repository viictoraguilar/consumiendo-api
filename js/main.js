const cargarAPIBtn = document.querySelector('#cargarAPI')
cargarAPIBtn.addEventListener('click', obtenerDatosAPI)

function obtenerDatosAPI() {
  const urlAPI = 'https://picsum.photos/list'

  fetch(urlAPI)
    .then(respuesta => respuesta.json())
    .then(resultado => imprimirHTML(resultado))
}

function imprimirHTML(datos) {
  const contenido = document.querySelector('#app')

  let html = ''

  datos.forEach(perfil => {
    const {author, author_url ,post_url} = perfil

    html += `
      <p>Author: ${author}</p>
      <a href="${author_url}" target="_blank">Ver información del autor</a>
      <a href="${post_url}" target="_blank">Ver imagen</a>
    `
  });

  contenido.innerHTML = html

}
