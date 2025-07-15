import { clientServices } from "../service/client-service.js";

const url = new URL(window.location);
const id = url.searchParams.get('id');

const crearLineaDetalle = (obj) => {

    const linea = document.createElement("tr")
    const contenido =
    `
        <td data-td>${obj.nombreProducto}</td>
        <td>${obj.descripcionProducto}</td>
        <td>${obj.precioProducto}</td>

    `
    linea.innerHTML = contenido;

    return linea;
}

const table = document.querySelector("[data-table]");

clientServices.detalleProducto(id).then(data => {
    console.log(data)
    const nuevaLinea = crearLineaDetalle(data);
        table.appendChild(nuevaLinea)
})
.catch(err => console.log(err));

