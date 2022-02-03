//funcion declarada
function  suma(a,b){
    return  a+ b;
}
////////////////////////////////////////////////////////

//expresion de funcion
const expresionDeFuncion = function(a,b){
    return a- b
}
////////////////////////////////////////////////////////


//expresion de funcion usando funcion de flecha
const funcionDeFlecha = (a,b) => {
    const  resultado = a *b
     return resultado;
}
////////////////////////////////////////////////////////


//atajo para retornar un resultado utilizando una funcion de flecha
const funcionDeFlechaCorta = (a,b) => a / b;
////////////////////////////////////////////////////////


//atajo para retornar un resultado utilizando una funcion de flecha cuando solo recibe un solo parametro
const funcionDeFlechaCortaSinParentesis = a => a;
////////////////////////////////////////////////////////


//funcion IIFE(Inmediatly Invoke Function Expression)(Expresion de Funcion que se ejecuta de manera Inmerdiata): esta funcion se caracteriza porque en cuanto se define la funcion es ejecutada automaticamente esta declaracion es usada en el estandar de EcmaScript 6 en adelante
(()=>{
    console.log("este contenido se va amostrar dentro de esta funcion IIFE")
})();
////////////////////////////////////////////////////////



//antigua declaracion de la funcion IIFE usando estandar EcmaScript 5 e inferior
(function(){

})();
////////////////////////////////////////////////////////


//Mandando A LLamar cada una de las funciones declaradas
// console.log(suma(5,2) );
// console.log(expresionDeFuncion(5,2) );
//  console.log(funcionDeFlecha(5,2) );
// console.log(funcionDeFlechaCorta(10,2) );
// console.log(funcionDeFlechaCortaSinParentesis(20) );