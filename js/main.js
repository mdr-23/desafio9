
//Clase
class Producto {
        constructor(id, nombre, precio) {
                this.id = parseInt(id);
                this.nombre = nombre;
                this.precio = parseFloat(precio);
        }
}
//Instancio los objetos y asocio al array
const productos = [];

productos.push(new Producto(1, "Camiseta", 7500));
productos.push(new Producto(2, "Short", 4500));
productos.push(new Producto(3, "Medias", 1500));
productos.push(new Producto(4, "Camiseta de entrenamiento", 5000));
productos.push(new Producto(5, "Campera", 9000));

//Interfaz HTML
for (const producto of productos) {
        let div = document.createElement("div");
        div.innerHTML = `<h2>${producto.nombre}</h2>
                        </h3>${producto.precio}</h3>
                        <button id='${producto.id}' class="btnCompra">COMPRAR</button>`;
        document.body.appendChild(div);
}
//Botones
const botones = document.getElementsByClassName('btnCompra');

console.log(botones);
botones[0].addEventListener('click', ()=>{
        alert("COMPRADO");
})

//Array vacío donde almaceno los elementos
const carrito = [];

//Función botón compra
function compraManejador(){
        //Obtengo el producto
        const seleccionado = productos.find(producto => producto.id == this.id);
        console.log(seleccionado)
        
        //Carrito
        carrito.push(seleccionado);
        
        //Salida del carrito
        let innerCarrito = '';
        for (const producto of carrito) {
                innerCarrito += `<p>${producto.nombre} - $ ${producto.precio}</p>` 
        }
        const divCarrito = document.getElementById('carrito');
        divCarrito.innerHTML = innerCarrito;
}

for (const boton of botones) {
       boton.addEventListener("click", compraManejador);  
}
