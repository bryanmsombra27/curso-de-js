import suma from "./funciones.js"; //importacion por defecto

import {array1 as arreglo } from "./main.js"; //importacion utilizando un alias

import * as todo from "./app.js"; //importacion de todo el contenido del archivo utilizando un alias como referencia para acceder a los metodos

const array1 = [];

//llamado a las funciones importadas de los archivos
console.log(suma(10,5));
// console.log(expresionDeFuncion(15,5));
console.log(array1)
console.log(arreglo)
console.log(todo.arreglo)