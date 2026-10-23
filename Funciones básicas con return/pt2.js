/* Ejercicio 1: El Inventario de Pociones
Crea una función contarPociones(inventario) que reciba un array de strings y devuelva cuántas pociones hay (solo cuenta las que incluyan la palabra "poción").

Ejemplos:

contarPociones(["poción roja", "espada", "poción azul", "escudo"]) → 2

contarPociones(["espada", "escudo"]) → 0

Pista: Usa un for para recorrer el array, y dentro un if con .includes("poción"). 
Incrementa un contador. */

function contarPociones(inventario) {
  let contador = 0;

  for (let i = 0; i < inventario.length; i++) {
    const element = inventario[i];
    if (element.includes("poción")) {
      contador++;
    }
  }
  return contador;
}

console.log(contarPociones(["poción roja", "espada", "poción azul", "escudo"]));
console.log(contarPociones(["espada", "escudo"]));
console.log(contarPociones([]));

/* Ejercicio 2: La Calculadora de Descuentos en Cadena
Crea una función aplicarDescuentos(precio, descuentos) que reciba un precio y un array de porcentajes, y aplique cada descuento uno tras otro. Devuelve el precio final redondeado.

Ejemplos:

aplicarDescuentos(100, [10, 20]) → 72 (100 - 10% = 90, 90 - 20% = 72)

aplicarDescuentos(200, [50]) → 100

Pista: Usa un for para recorrer el array de descuentos, y dentro actualiza el precio aplicando el descuento. Al final, Math.round. */

function aplicarDescuentos(precio, descuentos) {
  for (let i = 0; i < descuentos.length; i++) {
    const element = descuentos[i];
    const descuento = element / 100;
    precio = precio - precio * descuento;
  }
  return Math.round(precio);
}

console.log(aplicarDescuentos(100, [10, 20]));
console.log(aplicarDescuentos(200, [50]));
console.log(aplicarDescuentos(100, []));

/* Ejercicio 3: El Filtro de Nombres Largos
Crea una función filtrarNombresLargos(nombres, longitudMinima) que devuelva un nuevo array con solo los nombres que tengan esa longitud o más.

Ejemplos:

filtrarNombresLargos(["Ana", "Sebastián", "Luis", "Maximiliano"], 7) → ["Sebastián", "Maximiliano"]

filtrarNombresLargos(["Yo", "Tú"], 5) → []

Pista: Crea un array vacío resultado. Recorre con un for. Si el nombre cumple la condición, haz .push(). */

function filtrarNombresLargos(nombre, longitudMinima) {
  const resultado = [];
  for (let i = 0; i < nombre.length; i++) {
    const element = nombre[i];

    if (element.length >= longitudMinima) {
      resultado.push(element);
    }
  }
  return resultado;
}
console.log(
  filtrarNombresLargos(["Ana", "Sebastián", "Luis", "Maximiliano"], 7),
);
console.log(filtrarNombresLargos(["Yo", "Tú"], 5));
console.log(filtrarNombresLargos([""], 2));

/* Ejercicio 4: El Simulador de Dados
Crea una función tirarDados(cantidad) que simule tirar cantidad de dados de 6 caras y devuelva un array con los resultados.

Ejemplos:

tirarDados(3) → [4, 2, 6] (aleatorio)

tirarDados(1) → [5] (aleatorio)

Pista: Crea un array vacío. Usa un for desde 0 hasta cantidad. Dentro, genera un número aleatorio entre 1 y 6 con Math.floor(Math.random() * 6) + 1, y haz .push(). */
console.log("..............////......");
function tirarDados(cantidad) {
  const output = [];

  for (let i = 0; i < cantidad; i++) {
    const numeroAleatorio = Math.floor(Math.random() * 6) + 1;
    output.push(numeroAleatorio);
  }

  return output;
}

console.log(tirarDados(3));
console.log(tirarDados(1));
console.log(tirarDados(0));

/* Ejercicio 5: El Detector de Palíndromos
Crea una función esPalindromo(texto) que devuelva true si el texto se lee igual al derecho y al revés (ignorando mayúsculas y espacios).

Ejemplos:

esPalindromo("anita lava la tina") → true

esPalindromo("hola mundo") → false

esPalindromo("reconocer") → true

Pista:

Limpia el texto: .toLowerCase() y .replace(/ /g, "") (quita espacios).

Crea una versión invertida: recorre el string al revés con un for y ve concatenando en un nuevo string.

Compara si el original limpio es igual al invertido. */

console.log(".........//////.....");

function esPalindromo(texto) {
  const limpiarTexto = texto.toLowerCase().replace(/ /g, "");
  let invertida = "";

  for (let i = limpiarTexto.length - 1; i >= 0; i--) {
    invertida += limpiarTexto[i];
  }
  return limpiarTexto === invertida;
}

console.log(esPalindromo("anita lava la tina"));
console.log(esPalindromo("hola mundo"));
console.log(esPalindromo("reconocer"));
console.log(esPalindromo("Anita lava la tina"));
console.log(esPalindromo(""));

/* Ejercicio 6: El Contador de Vocales
Crea una función contarVocales(texto) que devuelva un objeto con el conteo de cada vocal.

Ejemplos:

contarVocales("hola mundo") → {a: 1, e: 0, i: 0, o: 2, u: 1}

contarVocales("murcielago") → {a: 1, e: 1, i: 1, o: 1, u: 1}

Pista:

Crea un objeto {a: 0, e: 0, i: 0, o: 0, u: 0}.

Recorre el texto con un for.

Si el carácter es una vocal, incrementa su contador en el objeto. */

console.log("........./.....");
function contarVocales(texto) {
  const vocales = { a: 0, e: 0, i: 0, o: 0, u: 0 };

  for (let i = 0; i < texto.length; i++) {
    const letra = texto[i].toLowerCase();
    if (letra in vocales) {
      vocales[letra]++;
    }
  }
  return vocales;
}

// console.log(contarVocales(""));
console.log(contarVocales("hola mundo"));
console.log(contarVocales("murcielago"));
console.log(contarVocales("mUrcIElAgO"));

/* Ejercicio 7: La Caja Registradora (GTA Style)
Crea una función calcularVuelto(precio, pago) que devuelva un array con los billetes/monedas a devolver, de mayor a menor denominación.

Denominaciones disponibles: [100, 50, 20, 10, 5, 2, 1] (como en Colombia, aproximado).

Ejemplos:

calcularVuelto(30, 100) → [50, 20] (vuelto = 70, se devuelve 50 + 20)

calcularVuelto(87, 100) → [10, 2, 1] (vuelto = 13, se devuelve 10 + 2 + 1)

calcularVuelto(100, 100) → []

Pista:

Calcula el vuelto: pago - precio.

Crea un array vacío resultado.

Recorre el array de denominaciones con un for.

Mientras el vuelto sea mayor o igual a la denominación, resta esa denominación del vuelto y haz .push(denominacion).

⚽ Analogía: Es como cuando compras algo en una tienda y te devuelven el cambio. El cajero siempre intenta darte la menor cantidad de billetes posible. Tú tienes que simular ese comportamiento. */

console.log("............./....././");
function calcularVuelto(precio, pago) {
  const denominaciones = [100, 50, 20, 10, 5, 2, 1];
  let vuelto = pago - precio;
  const resultado = [];

  for (let i = 0; i < denominaciones.length; i++) {
    const denominacion = denominaciones[i];
    while (vuelto >= denominacion) {
      vuelto -= denominacion;
      resultado.push(denominacion);
    }
  }

  return resultado;
}

console.log(calcularVuelto(30, 100));
console.log(calcularVuelto(87, 100));
console.log(calcularVuelto(100, 100));
