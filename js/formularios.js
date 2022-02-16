//funcion para desplegar mensajes de error/ exito
function crearMensaje(texto,clase,padre){
    const divAlerta = document.querySelector(".alert");
    
 if(divAlerta  && divAlerta.classList.contains("alert")){
     console.log(true)
     return;
 }
    const div = document.createElement("div");

    div.classList.add("alert",clase);
    div.textContent = texto;
    div.classList.add(padre.split("#")[1]);

    document.querySelector(padre).append(div)
    
}

//forma 1 para referenciar a los inputs de HTML para poder controlar el valor que contienen muy usada para cuando los campos  son 1 maximo 5
// const nombre = document.querySelector("#nombre");
// const email = document.querySelector("#email");
// const boton = document.querySelector("#boton");

//forma 1 una vez se le de click al boton procedemos a manipular la informacion de los formularios
// boton.addEventListener("click",()=>{

//validando por campos vacios
//     if(nombre.value.trim() == "" && email.value.trim() == "" ){
//         return;
//     }
        //obteniendo el valor que tiene cada input del formulario
//     console.log(nombre.value)
//     console.log(email.value)
// })
//////////////////////////////////////////////////////////////////////



//forma 2 para controlar los campos de un formulario en esta forma solo basta con hacer referencia al formulario para poder trabajar con todos los valores de los formularios
const form = document.querySelector("#form");

//para que funcione debemos referenciar siempre al evento submit y pasarle el evento como parametro
form.addEventListener("submit",(e)=>{
    e.preventDefault();

    console.log(e.target)
    //se obtiene cada uno de los valores de los campos
    const nombre = e.target.nombre.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const valido = new RegExp(/(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/);

     const esValido =   valido.test(password);

     console.log(esValido);
    //forma 2 de hacer una validacion por campos vacios si cualquiera de esos valores es un string vacio no permite que el codigo se siga ejecutando, hasta que todos los campos del formulario sean validos, es decir que contengan informacion
    // if(nombre.trim() == "" || email.trim() == "" || password.trim() == "" ){
    //  return;

    // }


    //brindando retroalimentacion al usuario en caso de que el campo nombre este vacio
    if(nombre.trim() =="" ){
        crearMensaje("el campo nombre es obligatorio","alert-danger","#campo-nombre")
        return
    }
    
    //brindando retroalimentacion al usuario en caso de que el campo email este vacio
    if(email.trim() =="" ){
        crearMensaje("el campo email es obligatorio","alert-danger","#campo-email")
        return 
    }
    
    //brindando retroalimentacion al usuario en caso de que el campo password este vacio y no cumple con la expresion regular(REGEX )
    if(!esValido  ){
         crearMensaje(`La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.
         NO puede tener otros símbolos.`,"alert-danger","#campo-password")

        return
    }





   //revisando que los campos contengan valores
   console.log(nombre)
   console.log(email)
   console.log(password)
})

//obteniendo la referencia de todos los inputs del formulario
const inputs = document.querySelectorAll("input");

//colocando un EventListener de tipo keyDown a cada uno de los inputs del formulario 
inputs.forEach(input =>{
    
    
    // console.log(input)
    
    input.addEventListener("keydown",(e)=>{
        //seleccionando a los mensajes de error
        const errorMsgNombre = document.querySelector(".campo-nombre");
        const errorMsgEmail = document.querySelector(".campo-email");
        const errorMsgPassword = document.querySelector(".campo-password");
        // console.log(e)
        // console.log(errorMsgNombre)

            //si el mensaje existe en el DOM y ademas nos encontramos dentro del elemento input cuyo atributo es el "nombre" entonces al momento de escribir en el elimina el mensaje de error 
            if(errorMsgNombre  && input.id == "nombre" ){
                errorMsgNombre.remove()
            }   
              //si el mensaje existe en el DOM y ademas nos encontramos dentro del elemento input cuyo atributo es el "email" entonces al momento de escribir en el elimina el mensaje de error 
            if(errorMsgEmail  && input.id == "email" ){
                errorMsgEmail.remove()
            }

              //si el mensaje existe en el DOM y ademas nos encontramos dentro del elemento input cuyo atributo es el "password" entonces al momento de escribir en el elimina el mensaje de error 
            if(errorMsgPassword  && input.id == "password" ){
                errorMsgPassword.remove()
            }
            //verificando en que campo nos encontramos una vez comencemos a presionar las teclas del teclado en los inputs
        // console.log(input.id )

    })

})


//forma de manejar los formularios utilizando el helper campos
// form.addEventListener("submit",(e)=>{
//     e.preventDefault();

//     const datos =campos(e);

//     console.log(datos)

// })










