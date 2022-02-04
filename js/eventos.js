const title = document.querySelector("#titulo"); 
const title2 = document.querySelector(".titulo"); 
const title3 = document.querySelectorAll(".titulo");

console.log(title)
//referencias al DOM
const boton = document.querySelector("#boton");
const contenido = document.querySelector("#contenido");

//Evento DOMContentLoaded es utilizado para escuchar el momento en el que el HTML termina de ser renderizado para poder manipularlo con js
// window.addEventListener('DOMContentLoaded',function (){



//     console.log("DOM se ha cargado");
// });



//otra forma de manejar el evento DOMContentLoaded
// window.addEventListener('DOMContentLoaded', () =>{
//     console.log("DOM se ha cargado");
// })



//otra forma de manejar el evento DOMContentLoaded
// const domHandler = () =>{
//     console.log("DOM se ha cargado");
// }

// window.addEventListener('DOMContentLoaded',domHandler)

//crear un elemento de manera dinamica al reaccionar al evento Click en un boton
boton.addEventListener("click",()=>{
    const p = document.createElement("p");
    p.textContent =" texto creado de manera dinamica";


    contenido.append(p);
});


