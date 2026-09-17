document.getElementById("anio").textContent = new Date().getFullYear();

var boton = document.getElementById("toggleButton");
var lista = document.getElementById("listaHabilidades");

console.log("Habilidades listadas:", lista.children.length);

boton.addEventListerner("click", function(){
    lista.classList.toggle("oculto");
});
