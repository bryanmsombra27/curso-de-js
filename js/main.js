
//METODO CONCAT: concatena dos o mas arreglos
const array1 = ['a', 'b', 'c','g'];
const array2 = ['d', 'e', 'f'];

const array3 = array1.concat(array2);
// console.log(array3);
/////////////////////////////////


//METODO FILL: primer parametro es lo que se va a cambiar
const array4 = [1, 2, 3, 4,5,10,15,20,6];
//reemplaza el valor desde una posicion inicial hasta una posicion final
//segundo parametro es la posicion inicial dentro del arreglo
//tercer parametro es la posicion final dentro del arreglo

// console.log(array4.fill(6,2,3));
/////////////////////////////////



//METODO FILTER: retornar un nuevo arreglo con los valores que coincidan dentro de la condicion
const numeros = [1, 2, 3, 4,5,10,15,20,6];
const filtro = numeros.filter( function(value){
    // console.log(numero)
    if(value > 10){
        return value
    }
});
// console.log(filtro);
////////////////////////////////////////////////////////////////




//METODO FIND: encuentra el primer valor del arreglo que coincida con la condicion dada
const array5 = [5, 12, 4, 4, 125];   
const encontrado = array5.find(function(value){
    if(value > 20){
        return value;
    }
});
// console.log(encontrado);
//////////////////////////////////////////////////////



//METODO FINDINDEX:encuentra la posicion en la que se encuentra el valor que cumple la condicion
const array6 = [5, 12, 4, 4, 125];
const encontradoPorPosicion = array6.findIndex(function(value){
    if(value > 20){
        return value;
    }
});
// console.log(encontradoPorPosicion);
//////////////////////////////////////////////////////



//METODO FLAT: este metodo retorna un nuevo arreglo donde todos los valores se encuentran en el mismo nivel de iteracion
const arreglo2 =[1,2,3,4,[5,6,7,8,[9,10,11]] ];
const arreglo3 = arreglo2.flat(2);
// console.log(arreglo2[4][4][0])
//  console.log(arreglo3);
//////////////////////////////////////////////////////
