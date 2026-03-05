let usuario="Daikelsilva";
let contraseña="VentasDIKKMDaikel";

function login(){
let u=document.getElementById("user").value;
let p=document.getElementById("pass").value;
if(u===usuario && p===contraseña){
document.getElementById("panel").style.display="block";
}else{
alert("Acceso denegado");
}
}

function crearProducto(){
let nombre=document.getElementById("nombre").value;
let precio=parseFloat(document.getElementById("precio").value);
if(!nombre || isNaN(precio)){alert("Rellena correctamente"); return;}
productos.push({nombre,precio});
alert("Producto añadido correctamente");
document.getElementById("nombre").value="";
document.getElementById("precio").value="";
mostrarProductos(); // Actualiza la página principal
}