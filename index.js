// Ejercicio 1:
// Diseña un algoritmo que cuente las veces que aparece una determinada letra en una frase

function cantidadLetra(str, letter) {
    let resultado = 0;
    str = str.split("");   // string => array
    for (let i=0; i<str.length; i++) {   // contador iteraciones
        if (str[i]==letter) {   // compara valor array con valor letra
            resultado++;   // suma resultado si comparacion TRUE
        };
    };
    return resultado;
};

/* INTENTO CONTAR MAYUS && MINUS
function cantidadLetra(str, letter) {
    let resultado = 0;
    let str_lower = str.toLowerCase();  // string => minusculas
    let letter_lower = letter.toLowerCase(); // string letter => minusculas
    str_lower = str.split(""); // string => array
    for (let i=0; i<str_lower.length; i++) { // contador iteraciones
        if (str_lower[i]==letter_lower) { // compara valor array con valor letra
            resultado++; // suma resultado si comparacion TRUE
        }
    }
    return resultado;
}
*/



// Ejercicio 2:
// Diseña un algoritmo que imprima los números impares entre un número dado por el usuario y los siguientes 50 números

function contar(num1) {
    let resultado = [];   // array donde introduciremos los numeros impares
        for (let i=0; i<=50; i++) {   //contador de 50 posiciones
            num1++   // suma un valor al numero dado
            if (num1%2!==0) {resultado.push(num1)}   //si el numero es impar lo introduce en la array
        };
        console.log(resultado);
    };







