
 const input =  document.querySelector("#campo");
const formulario =  document.querySelector("#form");
const hijo =document.querySelector("#hijo");
const abuelo =document.querySelector(".abuelo");

//evento que se dispara cuando se pierde el foco del elemento
input.addEventListener("blur", function() {


    input.style.outline = "5px solid red";
   

    })
//////////////////////////////////////////////////////////////


//evento que se dispara cuando se coloca el enfoque en el elemento
  input.addEventListener("focus", function() {

     input.style.outline = "5px solid blue";
   
  })
//////////////////////////////////////////////////////////////


  //evento que se dispara cuando cambia el input la interaccion del evento resulta visible cuando se realiza atraves de una accion de submit 
  input.addEventListener("change", function(e) {

    console.log(e)
     console.log("este evento se dispara cada que se envie la informacion a un formulario")
   
    })
//////////////////////////////////////////////////////////////


    //evento que se dispara cuando se realiza un doble click
  input.addEventListener("dblclick", function(e) {
  
     console.log("este evento se dispara cada que se envie la informacion a un formulario")
   
  })
//////////////////////////////////////////////////////////////


  //evento que se dispara cuando se presiona una tecla del teclado, tambien se dispara cuando se deja presionada la tecla
  input.addEventListener("keydown", function(e) {
      console.log(e)
  })
//////////////////////////////////////////////////////////////


  //evento que se dispara cuando la tecla deja de ser precionada
  input.addEventListener("keyup", function(e) {
     console.log(e)
 })
//////////////////////////////////////////////////////////////


 //evento que se dispara cuando el mouse deja el elemento seleccionado
 input.addEventListener("mouseout", function(e) {
     console.log(e)
     console.log("se dispara cuando pase el mouse por encima del elemento")
 })
//////////////////////////////////////////////////////////////


 //evento que se dispara cuando se le pasa el mouse por encima del elemento
 input.addEventListener("mouseover", function(e) {
    console.log(e)
    console.log("se dispara cuando pase el mouse por encima del elemento")
})

//////////////////////////////////////////////////////////////


    //se dispara cuando se realiza el envio de la informacion 
 formulario.addEventListener("submit", function(e) {
     e.preventDefault(); //accion que elimina por defecto el comportamiento natural de las redirecciones

     console.log(e)

 })

//////////////////////////////////////////////////////////////


//TRAVERSING THE DOM: podemos seleccionar y manipular otros elementos de html partiendo de un elemento selecccionado
// console.log(hijo)
// console.log(hijo.parentElement.previousElementSibling);

// hijo.parentElement.style.background = "red";
// console.log(hijo.parentElement.parentElement);

// console.log(abuelo.children);
// console.log(abuelo.children[0]);

//////////////////////////////////////////////////////////////


//concatenar strings vs template strings
const cadenaDeCaracteres = "esta es una cade de caracteres";
 console.log(cadenaDeCaracteres + "lorem ipsum dolor sit amet, consectetur adipiscing elit" );
const nuevaCadenda = `lorem ipsum dolor ${cadenaDeCaracteres} `;
console.log(nuevaCadenda);

//concatenar strings forma 1
const url = 'http://localhost:8080/' + 'valor dinamico' + "/api/" + 1;

const  numeroDinamico = 5;

//concatenar strings forma 2 
const url2 = `http://localhost:8080/${nuevaCadenda}/api/${numeroDinamico}` + '/valor estatico';


console.log(url);
console.log(url2);


