// 1
/* Ejercicio 1: El Saludo del Gremio
Crea una función saludar(nombre) que devuelva un string con el formato:
"¡Bienvenido al gremio, [nombre]!"
Ejemplos:

saludar("Goku") → "¡Bienvenido al gremio, Goku!"

saludar("Vegeta") → "¡Bienvenido al gremio, Vegeta!"

Pista: Solo necesitas return y concatenar strings con + o template literals (`).*/

function saludarNombre(nombre) {
  return `¡Bienvenido al gremio, ${nombre}!`;
}

console.log(saludarNombre("Goku"));
console.log(saludarNombre("Vegeta"));

/* Ejercicio 2: El Doble y el Triple
Crea una función dobleYTriple(numero) que devuelva un string con el doble y el triple separados por coma:

text
"[doble], [triple]"
Ejemplos:

dobleYTriple(5) → "10, 15"

dobleYTriple(10) → "20, 30"

Pista: El doble es numero * 2. El triple es numero * 3. */

function dobleYTriple(numero) {
  const doble = numero * 2;
  const triple = numero * 3;
  return `${doble}, ${triple}`;
}

console.log(dobleYTriple(5));
console.log(dobleYTriple(10));

/* Ejercicio 3: La Calculadora de Propinas
Crea una función calculadoraPropinas(total, porcentaje) que devuelva la propina redondeada al entero más cercano.

Ejemplos:

calculadoraPropinas(100, 15) → 15 (100 * 0.15 = 15)

calculadoraPropinas(50, 20) → 10 (50 * 0.20 = 10)

calculadoraPropinas(77, 15) → 12 (77 * 0.15 = 11.55 → 12)

Pista: Multiplica el total por porcentaje / 100, y usa Math.round. */

function calculadoraPropinas(total, porcentaje) {
  const calcular = (total * porcentaje) / 100;
  const redondear = Math.round(calcular);

  return redondear;
}

console.log(calculadoraPropinas(100, 15));
console.log(calculadoraPropinas(50, 20));
console.log(calculadoraPropinas(77, 15));

/* Ejercicio 4: El Conversor de Pulgadas
Crea una función pulgadasACentimetros(pulgadas) que convierta pulgadas a centímetros (1 pulgada = 2.54 cm) y redondee al entero más cercano.

Ejemplos:

pulgadasACentimetros(10) → 25

pulgadasACentimetros(20) → 51

Pista: Multiplica por 2.54 y usa Math.round. */

function pulgadasACentimetros(pulgadas) {
  const convert = pulgadas * 2.54;
  const redondear = Math.round(convert);
  return redondear;
}

console.log(pulgadasACentimetros(10));
console.log(pulgadasACentimetros(20));

/* Ejercicio 5: El Portero de la Discoteca
Crea una función puedeEntrar(edad) que devuelva true si la persona tiene 18 años o más, y false si no.

Ejemplos:

puedeEntrar(20) → true

puedeEntrar(17) → false

puedeEntrar(18) → true

Pista: Usa if (edad >= 18) { return true; } else { return false; }. O incluso más corto: return edad >= 18;.

⚽ Analogía: Es el portero de la discoteca. Solo deja entrar a los mayores de 18. */

function puedeEntrar(edad) {
  return edad >= 18;
}

console.log(puedeEntrar(20));
console.log(puedeEntrar(17));
console.log(puedeEntrar(18));

/* Ejercicio 6: El Termómetro Loco
Crea una función describirTemperatura(grados) que devuelva:

"Congelado" si es menor a 0.

"Frío" si está entre 0 y 15.

"Agradable" si está entre 16 y 25.

"Caluroso" si es mayor a 25.

Ejemplos:

describirTemperatura(-5) → "Congelado"

describirTemperatura(10) → "Frío"

describirTemperatura(20) → "Agradable"

describirTemperatura(30) → "Caluroso"

Pista: Usa if / else if / else. Piensa el orden de las condiciones. ⚽ Analogía: Es como el clima en un videojuego. Dependiendo de la temperatura, cambia el efecto en pantalla. */

function describirTemperatura(grados) {
  if (grados < 0) {
    return "Congelado";
  } else if (grados >= 0 && grados <= 15) {
    return "Frío";
  } else if (grados >= 16 && grados <= 25) {
    return "Agradable";
  } else if (grados >= 25) {
    return "Caluroso";
  }
}

console.log(describirTemperatura(-5)); //Congelado
console.log(describirTemperatura(10)); //Frio
console.log(describirTemperatura(20)); //Agradable
console.log(describirTemperatura(30)); //Caluroso
console.log("/////////////////////////////");
console.log(describirTemperatura(0));
console.log(describirTemperatura(15));
console.log(describirTemperatura(16));
console.log(describirTemperatura(25));
console.log(describirTemperatura(25.5)); // ← Este lo habría pillado
console.log(describirTemperatura(25.9)); // ← Y este

/* Ejercicio 7: La Aprobación del Examen
Crea una función estadoExamen(nota) que devuelva:

"Sobresaliente" si la nota es 9 o 10.

"Notable" si es 7 u 8.

"Bien" si es 6.

"Suspenso" si es menor a 6.

Ejemplos:

estadoExamen(10) → "Sobresaliente"
estadoExamen(8)  → "Notable"
estadoExamen(6)  → "Bien"
estadoExamen(4)  → "Suspenso"

Pista: Usa if / else if / else y piensa el orden de mayor a menor.

⚽ Analogía: Es como la clasificación de un torneo: Champion, Europa League, Conference, descenso. */

function estadoExamen(nota) {
  if (nota === 9 || nota === 10) {
    return "Sobresaliente";
  } else if (nota === 7 || nota === 8) {
    return "Notable";
  } else if (nota === 6) {
    return "Bien";
  } else {
    return "Suspenso";
  }
}
console.log("/////////////////////");
console.log(estadoExamen(10));
console.log(estadoExamen(8));
console.log(estadoExamen(6));
console.log(estadoExamen(4));

console.log(estadoExamen(7));
console.log(estadoExamen(9));

/* Ejercicio 8: El Detective de URLs
Crea una función clasificarURL(url) que devuelva:

"youtube" si el string contiene "youtube.com".

"tiktok" si contiene "tiktok.com".

"unsupported" si no contiene ninguno.

Ejemplos:

clasificarURL("https://www.youtube.com/watch?v=abc") → "youtube"

clasificarURL("https://www.tiktok.com/@user") → "tiktok"

clasificarURL("https://www.google.com") → "unsupported"

Pista: Usa el método .includes() de los strings. Ejemplo: url.includes("youtube.com").

⚽ Analogía: Es como el ejercicio del getProvider que ya hiciste con lookup table, pero ahora con if / else. */

function clasificarURL(url) {
  if (url.includes("youtube.com")) {
    return "youtube";
  } else if (url.includes("tiktok.com")) {
    return "tiktok";
  } else {
    return "unsupported";
  }
}
console.log("/////////////////////////////////");
console.log(clasificarURL("https://www.youtube.com/watch?v=abc"));
console.log(clasificarURL("https://www.tiktok.com/@user"));
console.log(clasificarURL("https://www.google.com"));

/* Ejercicio 9 (Jefe final): El IMC con Categoría
Combina lo que ya sabes. Crea una función categoriaIMC(peso, altura) que:

Calcule el IMC (peso / altura²).

Redondee el resultado.

Devuelva una categoría según el IMC:

Menos de 18.5 → "Bajo peso"

Entre 18.5 y 24.9 → "Normal"

Entre 25 y 29.9 → "Sobrepeso"

30 o más → "Obesidad"

Ejemplos:

categoriaIMC(50, 1.7) → IMC 17 → "Bajo peso"

categoriaIMC(70, 1.75) → IMC 23 → "Normal"

categoriaIMC(90, 1.8) → IMC 28 → "Sobrepeso"

categoriaIMC(100, 1.7) → IMC 35 → "Obesidad"

Pista: Primero calcula el IMC. Luego usa if / else if / else con el valor calculado.

⚽ Analogía: Es como la clasificación de un jugador según su rendimiento. Dependiendo del número, sube de categoría o baja. */

function categoriaIMC(peso, altura) {
  const calcularIMC = peso / Math.pow(altura, 2);

  if (calcularIMC < 18.5) {
    return "Bajo peso";
  } else if (calcularIMC >= 18.5 && calcularIMC <= 24.9) {
    return "Normal";
  } else if (calcularIMC >= 25 && calcularIMC <= 29.9) {
    return "Sobrepeso";
  } else if (calcularIMC >= 30) {
    return "Obesidad";
  }
}

console.log("////////////////////////////");
console.log(categoriaIMC(50, 1.7));
console.log(categoriaIMC(70, 1.75));
console.log(categoriaIMC(90, 1.8));
console.log(categoriaIMC(100, 1.7));

/* Ultimo o sea el mas reciente jajaj */
/* Crea una función esFinDeSemanaValido(dia, tienePlan) que devuelva true si:

Es sábado O domingo, Y tiene un plan.

dia puede ser "sabado", "domingo", "lunes", etc.

Ejemplos:

esFinDeSemanaValido("sabado", true) → true

esFinDeSemanaValido("lunes", true) → false

esFinDeSemanaValido("domingo", false) → false

esFinDeSemanaValido("lunes", false) → false

Pista: Combina || y &&. Usa paréntesis para agrupar: 
return (dia === "sabado" || dia === "domingo") && tienePlan;*/

function esFinDeSemanaValido(dia, tienePlan) {
  return (dia === "sabado" || dia === "domingo") && tienePlan;
}

console.log("///////////////////////////");
console.log(esFinDeSemanaValido("sabado", true));
console.log(esFinDeSemanaValido("lunes", true));
console.log(esFinDeSemanaValido("domingo", false));
console.log(esFinDeSemanaValido("lunes", false));

console.log("/////////////");

function isLeap(year) {
  if (year % 4 === 0) {
    // Es divisible por 4, hay que comprobar las excepciones
    if (year % 100 === 0) {
      //Es divisible por 100 ¿Se salva con el 400?
      if (year % 400 === 0) {
        return "Leap year.";
      } else {
        return "Not leap year.";
      }
    } else {
      //Es divisible por 4 pero no por 100
      return "Leap year.";
    }
  } else {
    //No es divisible por 4
    return "Not leap year.";
  }
}

console.log(isLeap(1989));
console.log(isLeap(2000));
