import {clientServices} from "../service/client-service.js";

const crearNuevaLinea = (nombreProducto, precioProducto, descripcionProducto, id) => {

    const linea = document.createElement("tr")
    const contenido =
    `
        <td data-td>${nombreProducto}</td>
        <td>${descripcionProducto}</td>
        <td>${precioProducto}</td>
        <td>
            <ul class="table__button-control">
                <li>
                    <a
                        href="../screens/editar_producto.html?id=${id}"
                        class="simple-button simple-button--edit"
                        >Editar</a
                    >
                </li>
                <li>
                    <button
                        class="simple-button simple-button--delete"
                        type="button"
                        id="${id}"
                    >
                    Eliminar
                    </button>
                </li>
            </ul>
        </td>
        <td>
            <a href="../screens/detalle_producto.html?id=${id}" class="simple-button padding-left">Detalle</a>
        </td>
    `
    linea.innerHTML = contenido;

    const btn = linea.querySelector('button');
    btn.addEventListener('click', () => {
        const id = btn.id;
            
        // contenedor del modal
        const modalContainer = document.querySelector('.modal-container');

        // control del modal
        const modalCloseButton = document.querySelector('#close-modal'); 
        const modalConfirmButton = document.querySelector('#confirm-delete');
        const modalCancelButton = document.querySelector('#cancel-delete');

        // Función mostrar modal
        function showModal() {
            modalContainer.classList.remove('modal--close'); 
        }

        showModal()

        // Función ocultar modal
        function hideModal() {
            modalContainer.classList.add('modal--close'); 
        }

        // 5. Agrega Event Listeners para cerrar el modal
        modalCloseButton.addEventListener('click', hideModal);
        modalCancelButton.addEventListener('click', hideModal);

        // 6. Lógica para el botón de confirmar (eliminar)
        modalConfirmButton.addEventListener('click', () => {
            
            clientServices.eliminarProducto(id).then(respuesta => {
                console.log(respuesta);
            }).then(() =>  window.location.href = '../screens/productos.html')
            .catch(err => alert("Ocurrió un error"));
            
            // Aquí es donde iría tu lógica para ELIMINAR el producto
            console.log('¡Producto eliminado!');
            // Después de la eliminación (o si cancela), ocultamos el modal
            hideModal();
});
        
    });
   

    return linea;
}

const table = document.querySelector("[data-table]");

clientServices.listarProductos().then(data => {
    console.log(data)
    data.forEach(({nombreProducto, precioProducto, descripcionProducto, id}) => {
        const nuevaLinea = crearNuevaLinea(nombreProducto, precioProducto, descripcionProducto, id);
        table.appendChild(nuevaLinea);
    });
})
.catch(err => console.log(err));


