const form = document.querySelector('[data-form]')

form.addEventListener("submit", (evento) => {
    evento.preventDefault()

    const url = document.querySelector('[data-url]').value
    const nombre = document.querySelector('[data-nombre]').value
    const categoria = document.querySelector('[data-categoria]').value
    const precio = document.querySelector('[data-precio]').value

    produtosServicios.crearProducto(url,nombre,categoria,precio)
    .then(respuesta => {
        window.location.href = ".../paginaerror"
        console.log(respuesta)
    }).catch(Error => {
        console.log(Error)
    })
})