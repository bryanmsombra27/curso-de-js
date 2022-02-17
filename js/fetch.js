// //promesa
// const suma = (numero) =>{


//         // console.log(numero)
//         //esta parte es lo que le indica que trabajara como si fuera una promesa
//         return new Promise( (resolve, reject) => {

//             setTimeout(()=>{
                
//             if(numero < 10){
//                 resolve(numero += 1);
//             }else{
//                 reject(new  Error("El numero ingresado es mayor a 10") )
//             }

//             }, 1000)
            

//         })

// }

// //promesa que recibe un valor, si es menor a 10 incrementa su valor en uno y el valor es mayor a 10 retorna un error, este codigo es asyncrono lo que quiere decir que no bloquea el codigo y permite que otros elementos sean ejecutados y una vez termina ese proceso, verifica que la promesa se haya resuelto ya sea de manera positiva  o negativa
// suma(15).then(value  =>{
//     console.log(value)

// }).catch( p =>{
//     console.log(p)
// });



// console.log("hola mundo")

const contenedor = document.querySelector("#contenedor")

//ATRIBUTOS PERSONALIZADOS (data- ="") : utilizados para colocar nuestros propios valores que ocupamos para realizar alguna interaccion con el elemento

//renderiza los registros que nos devuelve el backend
function crearCartas(arreglo) {

    contenedor.innerHTML = "";
    arreglo.forEach((urlImg, i) => {

        contenedor.innerHTML += `
        <div class="col">
        <div class="card">
          <img src="${urlImg}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <button class="btn btn-primary" data-id="${i}" >Borrar</button>
            </div>
        </div>
      </div>
        
        `;
        //colocando un eventListener a cada uno de los elementos de boton para que al momento de darle click pueda eliminar la cartaz
        const botones = document.querySelectorAll("button");

        botones.forEach(boton =>{

            boton.addEventListener("click",(e)=>{
                    const {id} = e.target.dataset;
                console.log(id)

                 const nuevoArreglo = arreglo.filter((img,i)  =>  i != id)

                 crearCartas(nuevoArreglo);

            })

        } )



    });


}   




//es utilizado para comunicarse entre servidores, muy utilizado a la hora de trabajar el desarrollo frontend muy independiente del desarrollo backend de esta manera si requieres de traer registros de algun servidor el fetch trabaja con base a promesas 

//el primer parametro hace referencia a el endpoint con el que queremos comunicarnos para obtener la informacion

//en la primera promesa  obtenemos la respuesta comunmente demoninado como objeto response  el cual es un indicativo de  la respuesta que nos da el servidor una vez nos conectamos a el  para poder manipular su respuesta con js debemos convertir esa informacion al formato json para poder manipular la respuesta

//la segunda promesa es un indicativo de que la informacion fue convertida con exito y ya podemos manipularla para realziar cualquier interaccion con el frontend en este caso utilizaremos las imagenes que nos responde para colocarlas dentro de las cartas
 fetch("https://dog.ceo/api/breeds/image/random/3").then((response)=>{
 
     return response.json()
 } ).then(data =>{   
     console.log(data)

     crearCartas(data.message);

 } ).catch(error =>{
     console.log(error)
 })


//ASYNC/AWAIT esta forma es una opcion para trabajar las promesas  
 //para usarlo en la definicion de la funcion debemos colocar la palabra reservada async  que es un indicativo de que se trabajaran promesas

 //el await solo aplica a funciones que retornan o trabajan como promesas, en este caso el fetch siempre retornar una promesa por lo que  siempre que se utilice esta forma  el await se declara antes de la funcion fetch lo que le indica que debe esperar a que el fetch se resuelva 

 //el resultado nos devolvera una respuesta que a su vez es otra promesa por lo que el proceso de conversion tambien es considerado una promesa asique igualmente debemos esperar a que ese proceso termine y para ello se coloca la palabra reservada await antes del metodo de conversion a json

 //finalmente obtendremos la respuesta convertida a un objeto de js por lo que podemos manipular la informacion del backend a nuestra imaginacion

// const  traerRegistrosDeloBackend = async()=>{   
//     try {
        
//         const res = await fetch("https://dog.ceo/api/breeds/image/rand2m/3");
//         const data = await res.json();
    
//          crearCartas(data.message);

//     } catch (error) {

//         console.log(error)
//     }




// } 


// traerRegistrosDeloBackend();



