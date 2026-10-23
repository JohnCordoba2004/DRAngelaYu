//recorrer un array vacio
let miArray = [];

for (let i = 1; i <= 5; i++) {
  miArray.push(i);
}

console.log(miArray);

//ahora con funciones array numerico
function generarNumeros(limite) {
  let resultado = []; // 1. Creamos el array vacío adentro

  for (let i = 1; i <= limite; i++) {
    resultado.push(i); // 2. llenamos el array en cada vuelta
  }
  return resultado; // 3.Retornamos el array lleno
}

console.log(generarNumeros(5));

// array string
function transformarAMayusculas(listaOriginal) {
  let listaNueva = []; // Array vacío listo para llenarse

  for (let i = 0; i < listaOriginal.length; i++) {
    listaNueva.push(listaOriginal[i].toUpperCase());
  }

  return listaNueva;
}

// Así la usas:
let alumnos = ["juan", "maria", "pedro"];
let alumnosProcesados = transformarAMayusculas(alumnos);

console.log(alumnosProcesados); // Resultado: ["JUAN", "MARIA", "PEDRO"]

/**
 * 💡 CHULETA: EL PELIGRO DE USAR `array.length` EN UN ARRAY VACÍO
 */

// =====================================================================
// ❌ CASO 1: Intentar RECORRER un array vacío (No importa si esperas números o strings)
// =====================================================================
function intentarLlenarMal() {
  let miArray = []; // El array está vacío, por lo tanto miArray.length es 0

  // 🚨 El ciclo dice: "Empieza en 0 y sigue MIENTRAS i sea menor que 0"
  // Como 0 NO es menor que 0, el ciclo ¡NUNCA ENTRA! Da cero vueltas.
  for (let i = 0; i < miArray.length; i++) {
    miArray.push("este código nunca se ejecuta");
  }

  return miArray; // Te devuelve el array exactamente igual de vacío: []
}

// =====================================================================
//  CASO 2: Llenar un array NUMÉRICO desde cero (Necesitas un número límite)
// =====================================================================
function llenarNumerico(limite) {
  let miArray = [];

  // Aquí NO usas el array para controlar el ciclo. Usas el número "limite".
  for (let i = 1; i <= limite; i++) {
    miArray.push(i); // Guarda números: 1, 2, 3...
  }
  return miArray; // Resultado con cantidad fija: [1, 2, 3, 4, 5]
}

// =====================================================================
//  CASO 3: Llenar un array basándote en OTRO array (Aquí SÍ usas .length)
// =====================================================================
function copiarStrings(listaDeOrigen) {
  let miArray = []; // Este empieza vacío

  // 💡 AQUÍ SÍ usas .length, pero del array que YA TIENE DATOS (listaDeOrigen)
  for (let i = 0; i < listaDeOrigen.length; i++) {
    miArray.push(listaDeOrigen[i] + " ✨"); // Modifica o copia el string
  }
  return miArray;
}

// Ejemplo de uso para el Caso 3:
// const nombres = ["ana", "luis"];
console.log(copiarStrings(["Ana", "Luis"]));

/**
 * 💡 CHULETA: FILTRAR DATOS CON UN 'IF' DENTRO DE UN 'FOR'
 *
 * El ciclo 'for' revisa todos los elementos uno por uno,
 * el 'if' evalúa la condición y el '.push()' solo guarda los que la cumplen.
 */

// ============================================================
// Ejemplo 1: Filtrar Números (Guardar solo los números PARES)
// ============================================================
function filtrarNumerosPares(listaNumeros) {
  let pares = []; // Array vacío que se irá llenando

  for (let i = 0; i < listaNumeros.length; i++) {
    // El 'if' evalúa si el número actual es par (residuo de la división entre 2 es cero)
    if (listaNumeros[i] % 2 === 0) {
      pares.push(listaNumeros[i]); // SÓLO si es par, se agrega al array
    }
  }

  return pares;
}

// Ejemplo de uso:
const numerosMezclados = [2, 4, 6, 8];
console.log(filtrarNumerosPares(numerosMezclados));
// Resultado: [2, 4, 6, 8]

// ============================================================
// Ejemplo 2: Filtrar Strings (Guardar nombres cortos, menos de 5 letras)
// ============================================================
function filtrarNombresCortos(listaNombres) {
  let nombresCortos = []; // Array vacío

  for (let i = 0; i < listaNombres.length; i++) {
    // El 'if' revisa el largo (.length) del string actual
    if (listaNombres[i].length < 5) {
      nombresCortos.push(listaNombres[i]); // Se agrega si tiene 4 letras o menos
    }
  }

  return nombresCortos;
}

// Ejemplo de uso:
const amigos = ["Ana", "Alejandro", "Luis", "Carlos", "Mia"];
console.log(filtrarNombresCortos(amigos));
// Resultado: ["Ana", "Luis", "Mia"]

function calcularEnvio(peso) {
  // 💡 EL GUARDIA ESCANEA: "Si el tipo de dato NO ES un número..."
  // (En JavaScript, "No es igual" se escribe !==)
  if (typeof peso !== "number") {
    return "Error: ¡Esto no es un número válido! 🚨";
  }

  // Si pasa de aquí, estamos 100% seguros de que es un número real
  if (peso > 50) {
    return "Envío costoso";
  } else {
    return "Envío económico";
  }
}

//Invertido
function desarmarAlReves(torre) {
  let cajaVacia = []; // 1. Empezamos con la caja vacía

  // 💡 EL CICLO AL REVÉS:
  // Empieza en el último índice (torre.length - 1),
  // sigue mientras i sea mayor o igual a 0,
  // y va restando de uno en uno (i--)
  for (let i = torre.length - 1; i >= 0; i--) {
    const vasoActual = torre[i];

    // Lo metemos en nuestra caja vacía
    cajaVacia.push(vasoActual);
  }

  return cajaVacia;
}

// Ejemplo de uso:
const miTorre = ["Vaso 1", "Vaso 2", "Vaso 3"];
console.log(desarmarAlReves(miTorre));
// Resultado: ["Vaso 3", "Vaso 2", "Vaso 1"]

///1. FILTRO: Si no es un número entero válido, lo ignoramos y seguimos
// if (!Number.isInteger(numeroActual)) { continue; }

// Revisa si NO es un array... (En JS se usa Array.isArray)
/* if (!Array.isArray(numeros)) {return "Invalido: Debes pasar una lista de números";} */

//While
// while = comprobar → ejecutar → actualizar → comprobar otra vez.
// ⚠️ Si no hay una salida posible, puedes crear un ciclo infinito.

//con arrays
/* Hay una regla fundamental:
array.length te dice cuántos elementos existen.
array.length - 1 te da el último índice.
array[i] te permite acceder al elemento de la posición i. */

/* 
const frutas = ["manzana", "banano", "uvas"];
let i = 0;
while (i < frutas.length) {
  console.log(frutas[i]);
  i++;
} */

//Sumar los dígitos de un número
function sumarDigitos(numero) {
  let suma = 0;

  while (numero > 0) {
    const digito = numero % 10; // Extrae el último dígito
    suma += digito; // Acumula el dígito
    numero = Math.floor(numero / 10); // Elimina el último dígito
  }

  return suma; // Devuelve la suma final
}
