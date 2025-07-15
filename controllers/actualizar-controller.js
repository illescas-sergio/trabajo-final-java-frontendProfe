import { clientServices } from "../service/client-service.js";

const formulario = document.querySelector("[data-form]");

const url = new URL(window.location);
const id = url.searchParams.get('id');

const obtenerInformacion = () => {
    

    if(id === null){
        window.location.href = "/screens/error.html"
    }


    // const nombreProducto = document.querySelector("[data-nombre]");
    

    clientServices.detalleProducto(id).then(producto => {
        nombre.value = producto.nombreProducto;
        precio.value = producto.precioProducto;
        descripcion.value = producto.descripcionProducto;
    })
    .catch((err) => console.log(err));
}

obtenerInformacion();

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;
    
    clientServices.actualizarProducto(nombre, precio, descripcion, id)
    .then(() => {
        window.location.href = "/screens/edicion_concluida.html";
    })
    .catch((err) => console.log(err));
})




