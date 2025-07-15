import {clientServices} from "../service/client-service.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const nombreProducto = document.querySelector("[data-nombreProducto]").value;
    const precioProducto = document.querySelector("[data-precioProducto]").value;
    const descripcionProducto = document.querySelector("[data-descripcionProducto]").value;

    clientServices.crearProducto(nombreProducto, precioProducto, descripcionProducto).then(() => {
        window.location.href = "./registro_completado.html";
    })
    .catch(err => console.log(err))
})

