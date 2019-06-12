// Crea tres variables para almacenar la información necesaria.
var cantidad;
var total;

// Asignar valores a las variables precio y cantidad.
precio = 5;
cantidad = 14;
// 
total = precio * cantidad;

// Calcula el total multiplicando el precio por cantidad.
var el = document.getElementById('costo');
el.textContent = '$' + total;

/* 
NOTE:textContent no funciona en IE8 o anteriores
Puede usar innerHTML, pero tenga en cuenta los problemas de seguridad en p228-231
el.innerHTML = '$' + total; 
*/