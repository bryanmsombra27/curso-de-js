const  arreglo = [1,"hola mundo",{},'',[1,2]];

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
