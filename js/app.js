const  arreglo = [1,"hola mundo",{},'',[1,2]];


//deestructuracion de arreglos:se asigna a cada una de los nombres de las variables una posicion del arreglo
const [n,v,p] =arreglo;


// FORMAS DE ITERAR UN ARREGLO
//forma 1
for(let i = 0; i < arreglo.length; i++){

        // console.log(arreglo[i]);
}
//forma 2
arreglo.forEach(function(valor){
    // console.log(valor + ' valor de cada una de las posiciones');

});

//forma 3
for(let i of arreglo){
    // console.log(i)
}


//definiendo un objeto literal(objeto personalizado)
const persona = {
    nombre:"Bryan",
    apellido:"Ochoa",
    edad:25,
    hobbies:['ver peliculas','escuchar musica','ir al cine'],
    estudiar: function(){
        console.log('estoy estudiando js')
    },
   "propiedad-especial":50
}

//ACCEDIENDO A CADA UNA DE LAS PROPIEDADES DEL OBJETO
// console.log(persona.apellido)
// console.log(persona.edad)
// console.log(persona.hobbies)
// console.log(persona);

//SEGUNDA FORMA PARA ACCEDER A LAS PROPIEDADES DE UN OBJETO
// console.log(persona["propiedad-especial"]);


//destructuracion de objetos: forma corta de acceder a los valores correspondientes a las llaves(propiedades) del objeto persona
const {nombre,hobbies} = persona;

//  console.log(persona["nombre"]);
//  console.log(persona.nombre);
// console.log(hobbies);