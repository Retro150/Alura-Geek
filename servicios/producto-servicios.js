//get

const listaProductos = () => {
    fetch("http:/localhost:3000/productos").then
    (respuesta => respuesta.json()).
    catch(Error => console.log(error))
}

//post

const crearProductos = (ImagenUrl, Nombre, Categoria, Precio) => {
    fetch('http:/localhost:3000/productos', {
     method : "POST",
     headers: {
        "Content-type": "application/json" 
        },
        body: JSON.stringify({
            ImagenUrl,
            Nombre,
            Categoria,
            Precio
        })
    }).then(respuesta => {
        if(respuesta.ok){
            return respuesta.ok
        }
    })
    throw new Error("No se pudo crear el Producto")
}

export const productosServicios = {
    listaProductos,
    crearProductos
}