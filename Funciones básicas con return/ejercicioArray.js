function whosPaying(names) {
  // 1. Calcular cuántos nombres hay
  const numeroPersonas = names.length;
  //2. Generar un índice aleatorio entre 0 y (cantidad - 1)
  const randomPosicionPersona = Math.floor(Math.random() * numeroPersonas);
  //3. Guardar el nombre en una variable usando el índice
  const nombreElegido = names[randomPosicionPersona];
  //4. Retornar el string formateado
  return `${nombreElegido} is going to buy lunch today!`;
}

console.log(whosPaying(["Angela", "Ben", "Jenny", "Michael", "Chloe"]));
