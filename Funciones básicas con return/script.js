function bmiCalculator(weight, height) {
  // 1. Calcula height² con Math.pow
  const calcularHeight = Math.pow(height, 2);
  // 2. Divide weight entre el resultado
  const dividirWeight = weight / calcularHeight;
  // 3. Redondea con Math.round
  const redondear = Math.round(dividirWeight);
  // 4. Devuelve el resultado con return
  return redondear;
}

console.log(bmiCalculator(65, 1.8));

// 2
/* function calculadoraDescuento(precio, porcentaje) {
  const descuento = precio * (porcentaje / 100);
  const restar = precio - descuento;
  const redondearPrecio = Math.round(restar);
  return redondearPrecio;
}*/

// Version Compacta
function calculadoraDescuento(precio, porcentaje) {
  return Math.round(precio - precio * (porcentaje / 100));
}

console.log(calculadoraDescuento(100, 15));

//3
function puedeConducir(edad, tieneCarnet) {
  return edad >= 18 && tieneCarnet === true;
}
console.log(puedeConducir(20, true));
console.log(puedeConducir(17, true));
console.log(puedeConducir(20, false));

//
