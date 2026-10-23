/* Arrays */

//length: Esta propiedad devuelve la longitud (tamaño) de una matriz:
const frutas = ["Manzana", "Pera", "Banano", "Fresa", "Mango"];

console.log(frutas.length);

// Esta propiedad también se puede utilizar para establecer la longitud de una matriz:
// frutas.length = 2;
// console.log(frutas);

//toString(): Este método devuelve los elementos de una matriz como una cadena separada por comas.
/* Cada objeto JavaScript tiene un toString()método.

Este toString()método es utilizado internamente por JavaScript cuando un objeto necesita ser mostrado como texto (como en HTML) o cuando un objeto necesita ser utilizado como una cadena de texto. */

let miLista = frutas.toString();
console.log(miLista);

//JavaScript Array at()
//ES2022 introduced the array method at():
/* 
El método at() devuelve un elemento indexado de un array. 
El método at() devuelve lo mismo que [].

Muchos lenguajes permiten, negative bracket indexingpor ejemplo, [-1], acceder a elementos desde el final de un objeto/matriz/cadena.

Esto no es posible en JavaScript, porque [] se usa para acceder tanto a arrays como a objetos. obj[-1] se refiere al valor de la clave -1, no a la última propiedad del objeto.

Este at()método se introdujo en ES2022 para solucionar este problema.
*/

// let fruta = frutas.at(2);
// let fruta = frutas[2];
// console.log(fruta);

/* 
Este join()método también combina todos los elementos de la matriz en una cadena de texto.
Se comporta igual que toString(), pero además puedes especificar el separador:

Popping and Pushing

Cuando se trabaja con matrices, es fácil eliminar elementos y añadir otros nuevos.
Esto es lo que significa hacer estallar y empujar:
Extraer elementos de un array o insertarlos en un array.
*/

document.getElementById("demo").innerHTML = frutas.join(" * ");

/* Array pop */
//El pop()método devuelve el valor que fue "extraído":
let agregarFruta = frutas.pop();
console.log(agregarFruta);
console.log(frutas);

/* Array push */
/*
push(): Este método añade un nuevo elemento a un array (al final):
push(): El método devuelve la nueva longitud del array: 
*/

// push():Este método añade un nuevo elemento a un array (al final):
const numeros = [42, 7, 19, 88, 3, 56, 21, 74, 9, 33];
console.log(numeros);
numeros.push(100);

// push(): El método devuelve la nueva longitud del array:
console.log(numeros);
console.log(`Longitud: ${numeros.push(20)}`);

/* 
Elementos cambiantes
El desplazamiento es equivalente a la eliminación de un elemento, pero se trabaja sobre el primer elemento en lugar del último. 
*/
// shift(): Este método elimina el primer elemento del array y "desplaza" todos los demás elementos a un índice inferior.
numeros.shift();
console.log(numeros); //Elimina el numero 42 o sea el primer indice[0] = 42 nuevo array=[7,19,88,3,56,21,74,9,33,100,20]

// unshift(): Este método agrega un nuevo elemento a un array (al principio) y "desplaza" los elementos más antiguos:
numeros.unshift(200);
console.log(numeros); // el 200 pasa a ocupar el indice[0] y los demas se desplazan [200,7,19,88,3,56,21,74,9,33,100,20]

//El unshift()método devuelve la nueva longitud del array:
console.log(`Nueva longitud: ${numeros.unshift(300)}`);

/* 
Elementos cambiantes
Se accede a los elementos de la matriz utilizando su número de índice :

Los índices de los arreglos comienzan en 0:

[0] es el primer elemento del array,
[1] es el segundo
[2] es el tercero...
*/
const palabras = [
  "sol",
  "río",
  "montaña",
  "café",
  "luna",
  "árbol",
  "mar",
  "viento",
];

console.log(`Indice: ${palabras[0]}`);

//Longitud de la matriz
//length: Esta propiedad proporciona una manera sencilla de agregar un nuevo elemento a una matriz:

console.log(`Longitud de la matriz: ${palabras.length}`);

/*
 Array isArray()
 ECMAScript 5 (JavaScript 2009) añadió el nuevo método Array.isArray()a JavaScript: 
*/
console.log(Array.isArray(palabras));

//Eliminar array de JavaScript()
/*
Advertencia !
El uso delete() de hojas undefined deja huecos en la matriz.
Utilice pop() o shift() en su lugar. 
*/
console.log(`La primer palabra es: ${palabras[0]}`);
delete palabras[0];
console.log(`La primer palabra es: ${palabras[0]}`);

/* 
Combinación de matrices (concatenación)
En los lenguajes de programación, la concatenación significa unir cadenas de caracteres de extremo a extremo.

La concatenación de "nieve" y "bola" da como resultado "bola de nieve".

Concatenar matrices significa unir matrices de extremo a extremo.
*/

// concat(): Este método crea un nuevo array fusionando (concatenando) arrays existentes:
const colores = [
  "rojo",
  "azul",
  "verde",
  "amarillo",
  "morado",
  "naranja",
  "negro",
  "blanco",
];
const animales = [
  "perro",
  "gato",
  "caballo",
  "tortuga",
  "águila",
  "delfín",
  "conejo",
  "zorro",
];
const paises = [
  "Colombia",
  "Perú",
  "Chile",
  "Brasil",
  "México",
  "Argentina",
  "Ecuador",
  "Uruguay",
];

const mix = colores.concat(animales);
console.log(mix);

/* 
concat(): Este método no modifica los arreglos existentes. Siempre devuelve un nuevo arreglo.
concat(): El método puede aceptar cualquier número de argumentos de tipo array.
*/

const mixs = colores.concat(animales, paises);
console.log(mixs);

// Este concat()método también puede aceptar cadenas de texto como argumentos:

const arr1 = ["a", "b", "c"];
const myChild = arr1.concat("Peter");
console.log(myChild);

/* Copiar array dentro de () */
// copyWithin():Este método copia los elementos de un array a otra posición dentro del mismo:
// Copiar al índice 2 todos los elementos del índice 0:
paises.copyWithin(2, 0);
console.log(paises);

//Copiar al índice 2 los elementos desde el índice 0 hasta el 2:
console.log(".........");
console.log(animales);
animales.copyWithin(2, 0, 2);
console.log(animales);

/* copyWithin():Este método sobrescribe los valores existentes.

copyWithin():Este método no añade elementos al array.

copyWithin():Este método no modifica la longitud del array. */

/* Aplanar una matriz
Aplanar una matriz es el proceso de reducir la dimensionalidad de una matriz.

El aplanamiento resulta útil cuando se desea convertir una matriz multidimensional en una matriz unidimensional. */

/* Array plano de JavaScript()
ES2019 introdujo el método flat() de Array.

flat():Este método crea una nueva matriz con elementos de submatrices concatenados hasta una profundidad especificada. */

const myArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const newArr = myArr.flat();
console.log(newArr);

/* Matriz plana de JavaScript (flatMap())
ES2019 añadió el flatMap()método Array a JavaScript.

Este flatMap()método primero mapea todos los elementos de una matriz y luego crea una nueva matriz aplanando la matriz original. */
const numbers = [42, 7, 19, 88, 3, 56, 21, 74, 9, 33];
const newArr2 = numbers.flatMap((x) => `${x} x 10: ${[x * 10]} <br/>`);
document.getElementById("demo-2").innerHTML = newArr2.join(" ");

/* 
Empalme y segmentación de matrices
Este splice()método añade nuevos elementos a un array.

Este slice()método extrae una porción de una matriz. */

/* JavaScript Array splice()
Este splice()método se puede utilizar para agregar nuevos elementos a una matriz: */

const comidas = [
  "arepa",
  "empanada",
  "sancocho",
  "bandeja paisa",
  "ajiaco",
  "tamal",
  "buñuelo",
  "changua",
];

// comidas.splice(2, 0, "hamburguesa", "pizza");
// console.log(comidas);
/* El primer parámetro (2) define la posición donde se deben agregar (insertar) nuevos elementos .
El segundo parámetro (0) define cuántos elementos deben eliminarse .
El resto de los parámetros ("Lemon", "Kiwi") definen los nuevos elementos que se añadirán .
El splice()método devuelve un array con los elementos eliminados: */
// comidas.splice(2, 2, "Hamburguesa", "Pizza");
// console.log(comidas);
/* 
El primer parámetro (2) define la posición donde se deben agregar (insertar) nuevos elementos.
El segundo parámetro (2) define cuántos elementos deben eliminarse . sancocho y bandeja paisa
*/

/* Uso de splice() para eliminar elementos
Con una configuración de parámetros inteligente, puede utilizarla splice()para eliminar elementos sin dejar "huecos" en la matriz:*/
/* El primer parámetro (0) define la posición donde se deben agregar (insertar) nuevos elementos.
El segundo parámetro (1) define cuántos elementos deben eliminarse .
El resto de los parámetros se omiten. No se añadirán nuevos elementos. */
// comidas.splice(0, 1);
// console.log(comidas);

/* Matriz de JavaScript toSpliced()
ES2023 añadió el método Array toSpliced() como una forma segura de combinar elementos de un array sin alterar el array original.

La diferencia entre el nuevo método toSpliced() y el antiguo método splice() es que el nuevo método crea un nuevo array, manteniendo el array original sin cambios, mientras que el antiguo método modificaba el array original.

viejo:modificaba el array original.
nuevo:crea un nuevo array, manteniendo el array original sin cambios
*/

const spliced = comidas.toSpliced(0, 1);
console.log(comidas);
document.getElementById("demo-3").innerHTML = spliced;

/* Segmento de matriz de JavaScript()
Este slice()método extrae una parte de un array y la convierte en un nuevo array: */

//Extraer una parte de una matriz comenzando desde el elemento 1 ("Naranja"):
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1);
// console.log(citrus);

/* Este slice()método crea un nuevo array.
Este slice()método no elimina ningún elemento del array de origen. */
//Extraer una parte de una matriz comenzando desde el elemento 3 ("Apple"):
// const citrus = fruits.slice(3);
// console.log(citrus);

/* El slice()método puede tomar dos argumentos como slice(1, 3).

A continuación, el método selecciona elementos desde el argumento inicial hasta el argumento final (sin incluirlo). */

// const citrus = fruits.slice(1, 3);
// console.log(citrus);

//Si se omite el argumento final, como en los primeros ejemplos, el slice() método descarta el resto del array.

const citrus = fruits.slice(2);
console.log(citrus);

/* 
toString() automático
JavaScript convierte automáticamente un array en una cadena separada por comas cuando se espera un valor primitivo.
Esto siempre ocurre cuando intentas mostrar una matriz.
Estos dos ejemplos producirán el mismo resultado: */

const profesiones = [
  "médico",
  "ingeniero",
  "profesor",
  "chef",
  "piloto",
  "abogado",
  "arquitecto",
  "diseñador",
];

//Todos los objetos JavaScript tienen un método toString().
document.getElementById("demo-4").innerHTML = profesiones.toString();
document.getElementById("demo-4").innerHTML = profesiones;
