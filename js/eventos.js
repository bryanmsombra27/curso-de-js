const boton = document.querySelector("#boton");

boton.addEventListener("focus",()=>{
    console.log("focus")
    boton.style.outline = "5px solid red"
})

boton.addEventListener("blur",()=>{
    console.log("focus")
    boton.style.outline = "none"
})