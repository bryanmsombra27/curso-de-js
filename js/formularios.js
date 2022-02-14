//funcion para desplegar mensajes de error/ exito
function crearMensaje(texto,clase,padre){
    const div = document.createElement("div");

    div.classList.add("alert",clase);
    div.textContent = texto;
    div.classList.add("mensaje");

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

    //forma 2 de hacer una validacion por campos vacios si cualquiera de esos valores es un string vacio no permite que el codigo se siga ejecutando, hasta que todos los campos del formulario sean validos, es decir que contengan informacion
   if(nombre.trim() == "" || email.trim() == "" || password.trim() == "" ){
    crearMensaje("campos vacios","alert-danger","#form")
    return;
   }
   //revisando que los campos contengan valores
   console.log(nombre)
   console.log(email)
   console.log(password)
})











