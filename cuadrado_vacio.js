// Importamos la función `question` de la biblioteca readline-sync
const { question } = require("readline-sync");

// Definimos una función llamada `generarcuadrado` que toma un parámetro `num`
function generarcuadrado(num){
    // Inicializamos una variable `result` como una cadena de texto vacía
    let result = '';

    // Iniciamos un bucle que se ejecuta `num` veces
    for(let i = 0; i < num; i++){
        // Verificamos si estamos en la primera o última fila del cuadrado
        if(i === 0 || i === num - 1){
            // Si es así, agregamos una fila de `+` al resultado
            result += '+' .repeat(num) + '\n';
        }
        else{
            // Si no, agregamos una fila con un `+` en el inicio, espacios en el medio y otro `+` al final
            result += '+' + ' '.repeat(num - 2) + '+' + '\n'
        }
    }

    // Devolvemos el resultado, que es el patrón del cuadrado
    return result;
}

// Preguntamos al usuario por un número y lo almacenamos en la variable `num`
const num = question('Por favor, ingresa un número:');

// Llamamos a la función `generarcuadrado` con el número proporcionado por el usuario
// y almacenamos el resultado en la variable `cuadrado`
const cuadrado = generarcuadrado(Number(num));

// Imprimimos el resultado en la consola
console.log(cuadrado);
