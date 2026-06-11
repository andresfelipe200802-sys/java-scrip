function saludar() {
    console.log("hola");
}

saludar();

//saludar con parametros 
function saludo(nombre) {
    console.log(`hola ${nombre}`);
}

saludo("carlos");

//funcion con retorno 
function sumar(a, b){
    return a + b;
}

let resultado = sumar(5, 8);
console.log(resultado);