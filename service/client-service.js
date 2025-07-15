
const listarProductos = () => fetch("http://localhost:8080/api/productos/").then(respuesta =>  respuesta.json());

const crearProducto = (nombreProducto, precioProducto, descripcionProducto) => {
        return fetch("http://localhost:8080/api/productos/", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({nombreProducto, precioProducto, descripcionProducto})
        })
}

const eliminarProducto = (id) => {
    
        return fetch(`http://localhost:8080/api/productos/${id}`, {
            method: "DELETE",
        });
}

const actualizarProducto = (nombreProducto, precioProducto, descripcionProducto, id) => {

        return fetch(`http://localhost:8080/api/productos/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({nombreProducto, precioProducto, descripcionProducto})
        })
        .then(respuesta => respuesta)
        .catch(err => console.log(err));
}

const detalleProducto = (id) => {
    return fetch(`http://localhost:8080/api/productos/${id}`).then(respuesta => respuesta.json());
};

export const clientServices = {
    listarProductos,
    crearProducto,
    eliminarProducto,
    detalleProducto,
    actualizarProducto
};
