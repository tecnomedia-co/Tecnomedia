/* =====================================================
CONFIGURACIÓN
===================================================== */

// Número de WhatsApp de Tecnomedia
// Cambia este número por el número real.
// IMPORTANTE: incluir código de país, sin + ni espacios.

const WHATSAPP_NUMBER = "573206094921";

/* =====================================================
CATÁLOGO DE PRODUCTOS
===================================================== */

// AQUÍ AGREGAS TUS PRODUCTOS MANUALMENTE.

const productos = [

 
{
    id: 1,
    nombre: "Lenovo IdeaPad 3",
    categoria: "Portátiles",
    precio: 1899000,
    imagen: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80",
    descripcion: "Portátil Lenovo ideal para trabajo, estudio y uso diario."
},

{
    id: 2,
    nombre: "HP 15",
    categoria: "Portátiles",
    precio: 2199000,
    imagen: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80",
    descripcion: "Portátil HP de 15 pulgadas para trabajo y entretenimiento."
},

{
    id: 3,
    nombre: "Monitor 24 pulgadas",
    categoria: "Monitores",
    precio: 699900,
    imagen: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80",
    descripcion: "Monitor Full HD de 24 pulgadas."
},

{
    id: 4,
    nombre: "Mouse inalámbrico",
    categoria: "Accesorios",
    precio: 89900,
    imagen: "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=800&q=80",
    descripcion: "Mouse inalámbrico para computador portátil o de escritorio."
},

{
    id: 5,
    nombre: "Teclado inalámbrico",
    categoria: "Accesorios",
    precio: 129900,
    imagen: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
    descripcion: "Teclado inalámbrico para oficina y hogar."
},

{
    id: 6,
    nombre: "iPhone",
    categoria: "Celulares",
    precio: 2999000,
    imagen: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=800&q=80",
    descripcion: "Smartphone de última generación."
},

{
    id: 7,
    nombre: "PC Gamer",
    categoria: "Computadores",
    precio: 4599000,
    imagen: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=800&q=80",
    descripcion: "Computador de escritorio para gaming y alto rendimiento."
},

{
    id: 8,
    nombre: "Audífonos Bluetooth",
    categoria: "Accesorios",
    precio: 199900,
    imagen: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    descripcion: "Audífonos inalámbricos Bluetooth."
},

{
    id: 9,
    nombre: "Tablet Lenovo",
    categoria: "Tablets",
    precio: 530000,
    imagen: "imagenes/Tablet.jpg",
    descripcion: "Pantalla 8'' Ram 4GB Rom 64GB Wifi."
},

{
    id: 10,
    nombre: "Audífonos Bluetooth",
    categoria: "Accesorios",
    precio: 199900,
    imagen: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    descripcion: "Audífonos inalámbricos Bluetooth."
},

{
    id: 11,
    nombre: "Audífonos Bluetooth",
    categoria: "Accesorios",
    precio: 199900,
    imagen: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    descripcion: "Audífonos inalámbricos Bluetooth."
},

{
    id: 12,
    nombre: "Audífonos Bluetooth",
    categoria: "Accesorios",
    precio: 199900,
    imagen: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    descripcion: "Audífonos inalámbricos Bluetooth."
},

{
    id: 13,
    nombre: "Audífonos Bluetooth",
    categoria: "Accesorios",
    precio: 199900,
    imagen: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    descripcion: "Audífonos inalámbricos Bluetooth."
},

{
    id: 14,
    nombre: "Audífonos Bluetooth",
    categoria: "Accesorios",
    precio: 199900,
    imagen: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    descripcion: "Audífonos inalámbricos Bluetooth."
},

{
    id: 15,
    nombre: "HP 15",
    categoria: "Portátiles",
    precio: 2199000,
    imagen: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80",
    descripcion: "Portátil HP de 15 pulgadas para trabajo y entretenimiento."
},

{
    id: 16,
    nombre: "HP 15",
    categoria: "Portátiles",
    precio: 2199000,
    imagen: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80",
    descripcion: "Portátil HP de 15 pulgadas para trabajo y entretenimiento."
}

];

/* =====================================================
CARRITO
===================================================== */

let carrito = JSON.parse(
localStorage.getItem("tecnomedia_carrito")
) || [];

/* =====================================================
ELEMENTOS HTML
===================================================== */

const productGrid = document.getElementById("productGrid");

const searchInput = document.getElementById("searchInput");

const searchButton = document.getElementById("searchButton");

const cartButton = document.getElementById("cartButton");

const closeCart = document.getElementById("closeCart");

const cartPanel = document.getElementById("cartPanel");

const cartOverlay = document.getElementById("cartOverlay");

const cartItems = document.getElementById("cartItems");

const cartCount = document.getElementById("cartCount");

const cartTotal = document.getElementById("cartTotal");

const checkoutButton = document.getElementById("checkoutButton");

const productResult = document.getElementById("productResult");

/* =====================================================
FORMATO DE PRECIOS
===================================================== */

function formatoPrecio(precio) {

 
return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0
}).format(precio);
 

}

/* =====================================================
MOSTRAR PRODUCTOS
===================================================== */

function mostrarProductos(lista) {

 
productGrid.innerHTML = "";

if (lista.length === 0) {

    productGrid.innerHTML = `
        <p class="empty-cart">
            No encontramos productos.
        </p>
    `;

    productResult.textContent =
        "No se encontraron productos.";

    return;
}


productResult.textContent =
    `${lista.length} producto${lista.length !== 1 ? "s" : ""}`;


lista.forEach(producto => {

    const card = document.createElement("article");

    card.className = "product-card";

    card.innerHTML = `

        <img
            src="${producto.imagen}"
            alt="${producto.nombre}"
            class="product-image"
            loading="lazy"
        >

        <div class="product-info">

            <span class="product-category">
                ${producto.categoria}
            </span>

            <h3 class="product-name">
                ${producto.nombre}
            </h3>

            <p class="product-description">
                ${producto.descripcion}
            </p>

            <div class="product-price">
                ${formatoPrecio(producto.precio)}
            </div>

            <button
                class="add-cart"
                onclick="agregarAlCarrito(${producto.id})"
            >
                <i class="fa-solid fa-cart-plus"></i>
                Agregar al carrito
            </button>

        </div>
    `;

    productGrid.appendChild(card);

});
 

}

/* =====================================================
AGREGAR AL CARRITO
===================================================== */

function agregarAlCarrito(id) {

 
const producto = productos.find(
    producto => producto.id === id
);

if (!producto) return;


const productoExistente = carrito.find(
    item => item.id === id
);


if (productoExistente) {

    productoExistente.cantidad++;

} else {

    carrito.push({

        id: producto.id,

        nombre: producto.nombre,

        precio: producto.precio,

        imagen: producto.imagen,

        cantidad: 1

    });

}


guardarCarrito();

mostrarCarrito();

abrirCarrito();
 

}

/* =====================================================
GUARDAR CARRITO
===================================================== */

function guardarCarrito() {

 
localStorage.setItem(
    "tecnomedia_carrito",
    JSON.stringify(carrito)
);
 

}

/* =====================================================
MOSTRAR CARRITO
===================================================== */

function mostrarCarrito() {

 
cartItems.innerHTML = "";


if (carrito.length === 0) {

    cartItems.innerHTML = `
        <div class="empty-cart">
            <i class="fa-solid fa-cart-shopping"></i>

            <p>
                Tu carrito está vacío.
            </p>
        </div>
    `;

    cartCount.textContent = "0";

    cartTotal.textContent = "$0";

    return;
}


carrito.forEach(item => {

    const elemento = document.createElement("div");

    elemento.className = "cart-item";

    elemento.innerHTML = `

        <img
            src="${item.imagen}"
            alt="${item.nombre}"
            class="cart-item-image"
        >

        <div class="cart-item-info">

            <div class="cart-item-name">
                ${item.nombre}
            </div>

            <div class="cart-item-price">
                ${formatoPrecio(item.precio)}
            </div>

            <div class="cart-controls">

                <button
                    onclick="cambiarCantidad(${item.id}, -1)"
                >
                    -
                </button>

                <span>
                    ${item.cantidad}
                </span>

                <button
                    onclick="cambiarCantidad(${item.id}, 1)"
                >
                    +
                </button>

                <button
                    class="remove-item"
                    onclick="eliminarDelCarrito(${item.id})"
                >
                    <i class="fa-solid fa-trash"></i>
                </button>

            </div>

        </div>
    `;

    cartItems.appendChild(elemento);

});


actualizarTotales();
 

}

/* =====================================================
CAMBIAR CANTIDAD
===================================================== */

function cambiarCantidad(id, cambio) {

 
const item = carrito.find(
    producto => producto.id === id
);

if (!item) return;


item.cantidad += cambio;


if (item.cantidad <= 0) {

    carrito = carrito.filter(
        producto => producto.id !== id
    );

}


guardarCarrito();

mostrarCarrito();
 

}

/* =====================================================
ELIMINAR PRODUCTO
===================================================== */

function eliminarDelCarrito(id) {

 
carrito = carrito.filter(
    producto => producto.id !== id
);

guardarCarrito();

mostrarCarrito();
 

}

/* =====================================================
ACTUALIZAR TOTALES
===================================================== */

function actualizarTotales() {

 
let cantidadTotal = 0;

let precioTotal = 0;


carrito.forEach(item => {

    cantidadTotal += item.cantidad;

    precioTotal +=
        item.precio * item.cantidad;

});


cartCount.textContent = cantidadTotal;

cartTotal.textContent =
    formatoPrecio(precioTotal);
 

}

/* =====================================================
ABRIR CARRITO
===================================================== */

function abrirCarrito() {

 
cartPanel.classList.add("active");

cartOverlay.classList.add("active");
 

}

/* =====================================================
CERRAR CARRITO
===================================================== */

function cerrarCarrito() {

 
cartPanel.classList.remove("active");

cartOverlay.classList.remove("active");
 

}

/* =====================================================
BUSCADOR
===================================================== */

function buscarProductos() {

 
const texto =
    searchInput.value
        .toLowerCase()
        .trim();


if (!texto) {

    mostrarProductos(productos);

    return;
}


const resultados = productos.filter(producto =>

    producto.nombre
        .toLowerCase()
        .includes(texto)

    ||

    producto.categoria
        .toLowerCase()
        .includes(texto)

    ||

    producto.descripcion
        .toLowerCase()
        .includes(texto)

);


mostrarProductos(resultados);
 

}

/* =====================================================
FILTRAR POR CATEGORÍA
===================================================== */

function filtrarCategoria(categoria) {

 
if (categoria === "Todos") {

    mostrarProductos(productos);

    return;
}


const resultados = productos.filter(
    producto =>
        producto.categoria === categoria
);


mostrarProductos(resultados);
 

}

/* =====================================================
PEDIDO POR WHATSAPP
===================================================== */

function realizarPedido() {

 
if (carrito.length === 0) {

    alert("Tu carrito está vacío.");

    return;
}


let mensaje =
    "Hola, Tecnomedia. Quiero realizar el siguiente pedido:%0A%0A";


let total = 0;


carrito.forEach(item => {

    const subtotal =
        item.precio * item.cantidad;

    total += subtotal;


    mensaje +=
        `• ${item.nombre} x${item.cantidad} - ${formatoPrecio(subtotal)}%0A`;

});


mensaje +=
    `%0A*Total: ${formatoPrecio(total)}*`;


const url =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${mensaje}`;


window.open(url, "_blank");
 

}

/* =====================================================
EVENTOS
===================================================== */

searchInput.addEventListener(
"input",
buscarProductos
);

searchButton.addEventListener(
"click",
buscarProductos
);

cartButton.addEventListener(
"click",
function(event) {

 
    event.preventDefault();

    abrirCarrito();

}
 

);

closeCart.addEventListener(
"click",
cerrarCarrito
);

cartOverlay.addEventListener(
"click",
cerrarCarrito
);

checkoutButton.addEventListener(
"click",
realizarPedido
);

/* CATEGORÍAS */

document
.querySelectorAll("[data-category]")
.forEach(enlace => {

 
    enlace.addEventListener(
        "click",
        function(event) {

            event.preventDefault();

            const categoria =
                this.dataset.category;

            filtrarCategoria(categoria);

        }
    );

});
 

/* =====================================================
MI CUENTA
===================================================== */

document
.getElementById("accountButton")
.addEventListener("click", function(event) {

 
    event.preventDefault();

    alert(
        "La sección Mi cuenta estará disponible próximamente."
    );

});
 

/* =====================================================
INICIALIZAR
===================================================== */

mostrarProductos(productos);

mostrarCarrito();
