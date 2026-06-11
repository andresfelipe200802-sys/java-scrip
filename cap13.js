//seleccionar el boton
let boton = document.querySelector("#btn");

//evento de click
boton.addEventListener("click", function(){
    console.log("click detectado");
});

//evento mouseover
boton.addEventListener("mouseover", function(){
    console.log("mouse encima");
});

//seleccionar el input
let input = document.querySelector("#nombre");

//evento del input
input.addEventListener("input", function(){
    console.log(input.value);
});