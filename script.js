let productos = [
{name:"Producto Ejemplo",precio:10},
{name:"Auriculares Bluetooth",precio:29.99},
{name:"Mouse Gamer",precio:15.50}
];

let carrito = [];
let total = 0;

function mostrarProductos(){
let cont = document.getElementById("productos-container");
cont.innerHTML = "";
productos.forEach((p,i)=>{
cont.innerHTML+=`
<div class="product">
<h3>${p.nombre}</h3>
<p>${p.precio}€</p>
<button onclick="addCart(${i})">Añadir al carrito</button>
</div>`;
});
}
mostrarProductos();

function addCart(i){
carrito.push(productos[i]);
total += productos[i].precio;
document.getElementById("cart-count").innerText = carrito.length;
document.getElementById("cart-total").innerText = total.toFixed(2);
document.getElementById("paypal-amount").value = total.toFixed(2);
}

function scrollProductos(){
document.getElementById("productos").scrollIntoView();
}

const faders = document.querySelectorAll(".fade");
window.addEventListener("scroll",()=>{
const trigger = window.innerHeight*0.8;
faders.forEach(el=>{
if(el.getBoundingClientRect().top < trigger){
el.classList.add("show");
}
});
});