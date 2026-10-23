/* 🔥 Pack 2: Ejercicios avanzados (Ahora con objetos y lógica más compleja)

🥉 Nivel 1: Refuerzo
Ejercicio 1: El Ranking del Torneo
Crea una función calcularPuntos(resultados) que reciba un array de strings ("victoria", "empate", "derrota") y devuelva la puntuación total.

Victoria = 3 puntos

Empate = 1 punto

Derrota = 0 puntos

Ejemplos:

calcularPuntos(["victoria", "empate", "derrota"]) → 4

calcularPuntos(["victoria", "victoria", "victoria"]) → 9

calcularPuntos(["derrota", "derrota"]) → 0

Pista: Usa un for para recorrer el array, y dentro un if/else if/else para sumar los puntos según el resultado.*/

/* Ejercicio 2: El Buscador de Números Primos
Crea una función esPrimo(numero) que devuelva true si el número es primo (solo divisible entre 1 y él mismo), y false si no.

Ejemplos:

esPrimo(7) → true

esPrimo(10) → false

esPrimo(1) → false

esPrimo(2) → true

Pista:

Si numero <= 1, return false.

Usa un for desde i = 2 hasta i < numero.

Si numero % i === 0, no es primo. Puedes hacer return false directamente.

Si el bucle termina sin encontrar divisores, return true.

⚽ Analogía: Un número primo es como un portero que no deja pasar a nadie. No se puede dividir de forma exacta por ningún número (excepto 1 y él mismo).*/

/*🥈 Nivel 2: Objetos + Lógica
Ejercicio 3: El Inventario del RPG
Crea una función sumarInventario(inventario) que reciba un array de objetos con { nombre: string, cantidad: number } y devuelva un objeto con la cantidad total por nombre.

Ejemplos:

sumarInventario([{nombre: "poción", cantidad: 3}, {nombre: "espada", cantidad: 1}, {nombre: "poción", cantidad: 2}]) → {poción: 5, espada: 1}

sumarInventario([{nombre: "escudo", cantidad: 2}]) → {escudo: 2}

Pista:

Crea un objeto vacío total = {}.

Recorre el array con un for.

Si total[item.nombre] ya existe, súmale. Si no, inicialízalo en item.cantidad.

Pista clave: total[nombre] = (total[nombre] || 0) + cantidad. */

/*Ejercicio 4: El Mejor Jugador
Crea una función mejorJugador(jugadores) que reciba un array de objetos { nombre: string, goles: number, asistencias: number } y devuelva el nombre del jugador con más puntos.

Puntos = goles * 3 + asistencias

Ejemplos:

mejorJugador([{nombre: "Messi", goles: 10, asistencias: 5}, {nombre: "Cristiano", goles: 8, asistencias: 4}]) → "Messi" (35 vs 28)

mejorJugador([{nombre: "Neymar", goles: 1, asistencias: 1}]) → "Neymar"

Pista:

Declara mejor = "" y puntosMax = 0.

Recorre el array con un for.

Calcula los puntos del jugador actual.

Si supera a puntosMax, actualiza mejor y puntosMax.

Devuelve mejor. */

/*🥇 Nivel 3: Lógica avanzada
Ejercicio 5: La Pirámide de Mario
Crea una función piramide(n) que devuelva un array de strings formando una pirámide de n niveles.

Ejemplos:

piramide(3) → [" * ", " *** ", "*****"]

piramide(1) → ["*"]

piramide(5) → [" * ", " *** ", " ***** ", " ******* ", "*********"]

Pista:

Crea un array vacío resultado.

Usa un for desde i = 1 hasta i <= n.

En cada nivel, la cantidad de asteriscos es 2 * i - 1.

La cantidad de espacios a cada lado es n - i.

Construye el string: " ".repeat(espacios) + "*".repeat(asteriscos) + " ".repeat(espacios).

Haz .push() al array.

🎮 Analogía: Es como en Minecraft cuando construyes una pirámide bloque a bloque. Cada nivel tiene más bloques que el anterior.

Ejercicio 6: El Cifrado César
Crea una función cifrarCesar(texto, desplazamiento) que desplace cada letra del texto desplazamiento posiciones en el alfabeto. Ignora números, espacios y símbolos.

Ejemplos:

cifrarCesar("abc", 1) → "bcd"

cifrarCesar("xyz", 3) → "abc" (da la vuelta al alfabeto)

cifrarCesar("hola mundo", 2) → "jqnc owpfq"

Pista:

Guarda el alfabeto: "abcdefghijklmnopqrstuvwxyz".

Recorre el texto con un for.

Por cada letra: encuentra su índice en el alfabeto, súmale el desplazamiento, y usa % 26 para no salirte del rango.

Si es espacio, déjalo tal cual.

Construye el nuevo string.

📺 Analogía: Es como el cifrado que usaban los romanos para enviar mensajes secretos. Cada letra se corre X posiciones. Si el enemigo intercepta el mensaje, no lo entiende.

🏆 Nivel 4: Jefe Final
Ejercicio 7: El Torneo de Cartas
Crea una función jugarTorneo(cartas1, cartas2) que compare dos mazos de cartas y devuelva el ganador.

Cada carta es { valor: number, palo: string }.

Se comparan de a una: mayor valor gana la ronda. Empate si son iguales.

Devuelve { jugador1: X, jugador2: Y, empates: Z }.

Ejemplos:

jugarTorneo([{valor: 10}, {valor: 5}], [{valor: 8}, {valor: 5}]) → {jugador1: 1, jugador2: 0, empates: 1}

jugarTorneo([{valor: 3}], [{valor: 9}]) → {jugador1: 0, jugador2: 1, empates: 0}

Pista:

Crea un objeto resultado = {jugador1: 0, jugador2: 0, empates: 0}.

Recorre ambos arrays con un for (asumiendo mismo tamaño).

Compara cartas1[i].valor con cartas2[i].valor.

Incrementa el contador correspondiente.

Ejercicio 8: La Matriz Transpuesta
Crea una función transponer(matriz) que reciba una matriz (array de arrays) y devuelva su transpuesta (filas se convierten en columnas).

Ejemplos:

transponer([[1, 2, 3], [4, 5, 6]]) → [[1, 4], [2, 5], [3, 6]]

transponer([[1, 2], [3, 4], [5, 6]]) → [[1, 3, 5], [2, 4, 6]]

Pista:

Crea un array vacío resultado.

Recorre las columnas de la matriz original: for (let i = 0; i < matriz[0].length; i++).

Dentro, crea una fila nueva fila = [].

Recorre las filas de la matriz original: for (let j = 0; j < matriz.length; j++).

Haz .push(matriz[j][i]) a la fila.

Haz .push(fila) al resultado.

🎮 Analogía: Es como girar un tablero de ajedrez 90 grados. Lo que era una fila, ahora es una columna, y viceversa. */
