//antigua manera de seleccionar elementos de HTML usando JS
const titulo = document.getElementById('titulo'); //id unico
const titulo2 = document.getElementsByClassName('titulo'); //muchos elementos que coincidan con la clase  
const titulo3 = document.getElementsByTagName("h1"); // muchos elementos HTML que coincidan con la etiqueta h1


// console.log(titulo)
// console.log(titulo2[0])
// console.log(titulo3[0])
////////////////////////////////////////////////////////


//nueva forma de seleccionar elementos de HTML usando JS, utiliza sintaxis de CSS para acceder a los id usando el #  y de  . para identificar a las clases de los elementos de HTML

const title = document.querySelector("#titulo"); //devuelve un elemento que coincida con el id, el id es unico para cada elemento de HTML y si se llegara a repetir el id solo retorna el primero que coincida
const title2 = document.querySelector(".titulo"); //devuelve un elemento que coincida con la clase especificada
const title3 = document.querySelectorAll(".titulo"); //devuelve los elementos que coincidan con la clase especificada

// console.log(title2)

//manipulacion dinamica de las clases de CSS con JS
title.classList.add("activo");
title.classList.remove("activo");

// console.log(title3.forEach(titulo => console.log(titulo)))
const div = document.querySelector("#contenido");

console.log(div);

//CREAR ELEMENTOS DEL DOM
const p = document.createElement("p");

p.textContent = "lorem ipsum";

console.log(p);

//Anadir elementos al DIV
div.append(p);

//eliminar elementos del DOM
p.remove();



