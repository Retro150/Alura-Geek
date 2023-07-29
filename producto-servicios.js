//get

const listaProductos = () => {
    fetch("http:/localhost:3000/productos").then
    (respuesta => respuesta.json()).
    catch(Error => console.log(error))
}

//post

const crearProductos = ()