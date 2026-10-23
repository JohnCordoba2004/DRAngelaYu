/* Ejercicio 8: El Mayor del Array
Crea una función encontrarMayor(numeros) que devuelva el número más grande de un array.

Ejemplos:
encontrarMayor([3, 9, 2, 7]) → 9
encontrarMayor([-5, -1, -8]) → -1

Pista: guarda en una variable el primer número y recorre el array. Si encuentras uno más grande, actualiza la variable.
Ojo: no uses Math.max, la idea es que lo hagas con un for. */

function encontrarMayor(numeros) {
  let mayor = numeros[0];
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
      mayor = numeros[i];
    }
  }
  return mayor;
}

console.log(encontrarMayor([3, 9, 2, 7])); //9
console.log(encontrarMayor([-5, -1, -8])); //-1
console.log(encontrarMayor([0, 100, -1])); //100
console.log(encontrarMayor([""])); //Vacio
console.log(encontrarMayor([])); //undefined
console.log("........../........./");
/* Ejercicio 9: Contador de Palabras
Crea una función contarPalabras(frase) que devuelva cuántas palabras tiene una frase.

Ejemplos:
contarPalabras("me gusta programar") → 3
contarPalabras("hola") → 1
contarPalabras("") → 0

Pista: .split(" ") convierte el string en un array de palabras. Cuidado con el caso de la frase vacía. */

function contarPalabras(frase) {
  // 1. miro la caja: ¿está vacía?
  if (frase === "") {
    return frase.length; // 2. miro la caja: ¿cuánto mide?
  }
  const palabras = frase.split(" "); // 3. miro la caja: la corto en palabras
  return palabras.length;
}

console.log(contarPalabras("me gusta programar")); // 3
console.log(contarPalabras("hola")); // 1
console.log(contarPalabras("hola mundo")); // 2
console.log(contarPalabras("")); // el enunciado pide 0

/* Ejercicio 10: Contar Repetidos
Crea una función contarRepetidos(lista) que reciba un array de strings y devuelva un objeto con cuántas veces aparece cada uno.

Ejemplos:
contarRepetidos(["gato", "perro", "gato"]) → { gato: 2, perro: 1 }
contarRepetidos([]) → {}

Pista: es parecido al contador de vocales, pero acá el objeto empieza vacío. Piensa qué haces la primera vez que ves un elemento y qué haces las siguientes veces. */

function contarRepetidos(lista) {
  const conteo = {};
  for (let i = 0; i < lista.length; i++) {
    const element = lista[i].toLowerCase();
    if (element in conteo) {
      conteo[element]++;
    } else {
      conteo[element] = 1;
    }
  }
  return conteo;
}

console.log(contarRepetidos(["gato", "perro", "gato"]));
console.log(contarRepetidos([]));
