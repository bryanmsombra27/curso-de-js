//promesa
const suma = (numero) =>{


        // console.log(numero)
        //esta parte es lo que le indica que trabajara como si fuera una promesa
        return new Promise( (resolve, reject) => {

            setTimeout(()=>{
                
            if(numero < 10){
                resolve(numero += 1);
            }else{
                reject(new  Error("El numero ingresado es mayor a 10") )
            }

            }, 1000)
            

        })

}

//promesa que recibe un valor, si es menor a 10 incrementa su valor en uno y el valor es mayor a 10 retorna un error, este codigo es asyncrono lo que quiere decir que no bloquea el codigo y permite que otros elementos sean ejecutados y una vez termina ese proceso, verifica que la promesa se haya resuelto ya sea de manera positiva  o negativa
suma(15).then(value  =>{
    console.log(value)

}).catch( p =>{
    console.log(p)
});



console.log("hola mundo")