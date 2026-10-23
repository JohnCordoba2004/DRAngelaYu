//Bloque A: if / else y comparadores

/* Ejercicio 11: Calculadora de IMC
calcularIMC(peso, altura) → peso / (altura * altura), y devuelve un mensaje:
menos de 18.5 → "Bajo peso", de 18.5 a 24.9 → "Peso normal", 25 o más → "Sobrepeso"
calcularIMC(70, 1.75) → "Peso normal" */

function calcularIMC(peso, altura) {
  const imc = peso / (altura * altura);

  /* if (isNaN(imc)) {
    return "Datos inválidos";
  } */

  if (peso <= 0 || altura <= 0 || isNaN(imc)) {
    return "Datos inválidos";
  }

  if (imc < 18.5) {
    return "Bajo peso";
  } else if (imc >= 18.5 && imc < 25) {
    return "Peso normal";
  } else {
    return "Sobrepeso";
  }
}
console.log(calcularIMC(70, 1.75)); //Peso normal
console.log(calcularIMC(50, 1.8)); // "Bajo peso"
console.log(calcularIMC(100, 1.7)); // "Sobrepeso"
console.log(calcularIMC(74, 2)); // IMC exacto de 18.5 → "Peso normal"
console.log(calcularIMC(100, 2)); // IMC exacto de 25   → "Sobrepeso"
console.log(calcularIMC(72, 2)); // IMC de 18          → "Bajo peso"
console.log(calcularIMC(76.4, 1.75)); // IMC ≈ 24.95
console.log(calcularIMC()); // "Datos inválidos"
console.log(calcularIMC("")); // "Datos inválidos"
console.log(calcularIMC(70, 0)); // "Datos inválidos"
console.log(calcularIMC(70, -1.75)); // "Datos inválidos"
console.log(calcularIMC(70, 1.75)); // "Peso normal" (no debe romperse)
console.log("//////////////////////");
/* Ejercicio 12: Año Bisiesto
esBisiesto(anio) → true/false.
Regla: divisible entre 4, pero si es divisible entre 100 solo cuenta si también lo es entre 400.
esBisiesto(2024) → true, esBisiesto(1900) → false, esBisiesto(2000) → true */
// function esBisiesto(anio) {
//   if (anio % 400 === 0) {
//     return true;
//   } else if (anio % 100 === 0) {
//     return false;
//   } else if (anio % 4 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
function esBisiesto(anio) {
  return (anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0;
}
console.log(esBisiesto(2000)); // true
console.log(esBisiesto(1900)); // false
console.log(esBisiesto(2024)); // true
console.log(esBisiesto(2023)); // false

/* Ejercicio 13: FizzBuzz
fizzBuzz(n) → array del 1 al n, pero: múltiplos de 3 → "Fizz", de 5 → "Buzz", de ambos → "FizzBuzz".
fizzBuzz(15) termina en [..., 13, 14, "FizzBuzz"] */
console.log("......../////........../");

function fizzBuzz(n) {
  //Agregar un array vacio
  const resultado = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      resultado.push("FizzBuzz");
    } else if (i % 3 === 0) {
      resultado.push("Fizz");
    } else if (i % 5 === 0) {
      resultado.push("Buzz");
    } else {
      resultado.push(i);
    }
  }
  return resultado;
}
console.log(fizzBuzz(15)); //[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz"]
console.log(fizzBuzz(0)); //[]
console.log(fizzBuzz(1)); //[1]
console.log(fizzBuzz(-1)); //[]
console.log(fizzBuzz("")); //[]

/* Ejercicio 14: Clasificador de Notas
clasificarNota(nota) → "Excelente" (4.5 a 5), "Bueno" (3.5 a 4.4), "Aprobado" (3 a 3.4), "Reprobado" (menos de 3), e "Inválida" si es menor que 0 o mayor que 5. */

function clasificarNota(nota) {
  if (typeof nota !== "number" || nota < 0 || nota > 5 || isNaN(nota)) {
    return "Nota invalida";
  }

  if (nota >= 4.5) {
    return "Excelente";
  } else if (nota >= 3.5) {
    return "Bueno";
  } else if (nota >= 3) {
    return "Aprobado";
  } else {
    return "Reprobado";
  }
}
console.log(clasificarNota(5)); //Excelente
console.log(clasificarNota(6)); //Nota invalida
console.log(clasificarNota(3.5)); //Bueno
console.log(clasificarNota(4.4)); //Bueno
console.log(clasificarNota(4.45)); //Bueno
console.log(clasificarNota(4.2)); //Bueno
console.log(clasificarNota(3.4)); //Aprobado
console.log(clasificarNota(3)); //Aprobado
console.log(clasificarNota(2.9)); //Reprobado
console.log(clasificarNota(1)); //Reprobado
console.log(clasificarNota(0)); //Reprobado
console.log(clasificarNota()); //Nota invalida
console.log(clasificarNota(-2)); //Nota invalida
console.log(clasificarNota(-1)); //Nota invalida
console.log(clasificarNota("")); //Nota invalida
console.log(clasificarNota("asddas")); //Nota invalida

//Bloque B: aleatorios
/* Ejercicio 15: Calculadora del Amor
calculadoraAmor(nombre1, nombre2) → un porcentaje aleatorio entre 1 y 100 y un mensaje:
más de 70 → "¡Son almas gemelas!", entre 30 y 70 → "Hay química", menos de 30 → "Mejor amigos". */
console.log("........//.....//");
function calculadoraAmor(name1, name2) {
  const aleatorio = Math.floor(Math.random() * 100) + 1;
  let mensaje = "";
  if (aleatorio > 70) {
    mensaje = "¡Son almas gemelas!";
  } else if (aleatorio >= 30) {
    //Entre 30 y 70 hay quimica
    mensaje = "Hay química";
  } else {
    mensaje = "Mejor amigos";
  }
  return `El porcentaje de amor entre ${name1} y ${name2} es del ${aleatorio}% y su resultado es: ${mensaje}`;
}

console.log(calculadoraAmor("John", "Maria"));

/* Ejercicio 16: ¿Quién Paga el Almuerzo?
quienPaga(nombres) → elige un nombre al azar del array.
Pista: la posición aleatoria sale de Math.floor(Math.random() * nombres.length). */

function quienPaga(nombres) {
  //Indice al azar
  const nombreAleatorio = Math.floor(Math.random() * nombres.length);
  //
  const nombrePaga = nombres[nombreAleatorio];
  // return
  return `Quien paga: ${nombrePaga}`;
}
const nombres = ["Ana", "Luis", "Pedro", "Mia"];
console.log(quienPaga(nombres));

//Bloque C: arrays
/* Ejercicio 17: Sin Duplicados
quitarDuplicados(lista) → array sin elementos repetidos, respetando el orden.
quitarDuplicados([1, 2, 2, 3, 1]) → [1, 2, 3]
Pista: .includes() te dice si un elemento ya está en el array. */

function quitarDuplicados(lista) {
  const resultado = []; //Array vacio

  //Ciclo
  for (let i = 0; i < lista.length; i++) {
    const numeroActual = lista[i];
    if (!resultado.includes(numeroActual)) {
      resultado.push(numeroActual);
    }
  }

  return resultado;
}

const numeros = [1, 2, 2, 3, 1];
console.log(quitarDuplicados(numeros));
console.log(quitarDuplicados([]));
console.log(quitarDuplicados(["a", "b", "a"]));

/* Ejercicio 18: Invertir sin reverse
invertirArray(lista) → el array al revés, sin usar .reverse().
invertirArray([1, 2, 3]) → [3, 2, 1] */

function invertirArray(lista) {
  const resultado = []; //Array vacio
  for (let i = lista.length - 1; i >= 0; i--) {
    const invertido = lista[i];
    resultado.push(invertido);
  }
  return resultado;
}
const numInvertidos = [1, 2, 3];
console.log(invertirArray(numInvertidos));
console.log(invertirArray([]));
console.log(invertirArray([7]));

/* Ejercicio 19: Pares e Impares
separarParesImpares(numeros) → { pares: [...], impares: [...] }
Pista: el operador % te dice si un número es par. */

function separarParesImpares(numeros) {
  //1.Se crea el organizador con los dos objetos vacios
  const organizarParesEImpares = {
    pares: [],
    impares: [],
  };

  // Revisa si NO es un array
  if (!Array.isArray(numeros)) {
    return "Invalido: Debes pasar una lista de números";
  }

  //2. Ciclo
  for (let i = 0; i < numeros.length; i++) {
    const numeroActual = numeros[i];

    //prueba opcional
    if (!Number.isInteger(numeroActual)) {
      continue;
    }

    //3. if decide en que objeto guardarlo
    if (numeroActual % 2 === 0) {
      organizarParesEImpares.pares.push(numeroActual); //Va a pares
    } else {
      organizarParesEImpares.impares.push(numeroActual); //Va a impares
    }
  }

  //4. Devolvemos el objeto completo
  return organizarParesEImpares;
}

//ejmplo de uso
const pruebaNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pruebaNum2 = [0];
console.log(separarParesImpares(pruebaNum));
console.log(separarParesImpares(pruebaNum2));
console.log(separarParesImpares(""));
console.log(separarParesImpares([-3]));

//Bloque D y E: while, for y Fibonacci
/* Ejercicio 20: Cuenta Regresiva
cuentaRegresiva(n) → array desde n hasta 1, hecho con un while.
cuentaRegresiva(5) → [5, 4, 3, 2, 1] */

function crearNumeros(limite) {
  // 1. Crear un array vacío
  const myArr = [];
  // 2. Crear el contador
  let contador = 1;
  // 3. Repetir con while
  while (contador <= limite) {
    // 4. Añadir números con push()
    myArr.push(contador);
    contador++;
  }
  // 5. Devolver el array
  return myArr;
}
console.log(crearNumeros(4));

function cuentaRegresiva(n) {
  //Array vacio
  const resultado = [];
  //Contador
  let i = n.length - 1;

  //Ciclo
  while (i >= 0) {
    //Añadir al array vacio con push()
    resultado.push(n[i]);
    i--;
  }

  return resultado;
}

console.log(cuentaRegresiva(["🍎", "🍌", "🍇"]));
console.log(cuentaRegresiva([10, 20, 30, 40]));
console.log(cuentaRegresiva([]));

/* Ejercicio 21: Suma de Dígitos
sumarDigitos(numero) → suma de sus dígitos, sin convertirlo a string si puedes.
sumarDigitos(1234) → 10
Pista: % 10 te da el último dígito, y Math.floor(n / 10) lo quita. */
function sumarDigitos(numero) {
  let suma = 0; //1234
  while (numero > 0) {
    const extraer = numero % 10; //4 ultimo digito el 1234
    suma += extraer; // 0 + 4 = 4, extraer contiene el ultimo digito
    numero = Math.floor(numero / 10); // 123 /10 = 12
  }
  return suma;
}

console.log(sumarDigitos(1234));
console.log(sumarDigitos(0));
console.log(sumarDigitos(-123));
console.log(sumarDigitos(12.5));

/* Ejercicio 22: Fibonacci Reto
esFibonacci(numero) → true si el número aparece en la serie de Fibonacci.
esFibonacci(8) → true, esFibonacci(10) → false
Pista: usa lo que ya hiciste en tu generador. */
function esFibonacci(numero) {
  // 1. Inicializar los dos primeros números de Fibonacci
  if (numero === 0 || numero === 1) return true;
  let a = 0;
  let b = 1;
  let siguiente = a + b;

  // 2. Mientras el número que vamos calculando sea menor o igual al objetivo
  while (siguiente <= numero) {
    // 3. Si el número actual es igual a numero
    if (siguiente === numero) {
      return true;
    }
    // 4. Calcular el siguiente número de Fibonacci
    a = b; //pasa a ser 1
    b = siguiente; // 1
    siguiente = a + b; // 2
  }

  // 6. Si no lo encontramos
  return false;
}

console.log(esFibonacci(8)); //true
console.log(esFibonacci(10)); //false
