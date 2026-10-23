console.log("Hello From Node!");

function par(numero) {
  let output = [];

  for (let i = 0; i < numero.length; i++) {
    if (numero[i] % 2 === 0) {
      output.push(numero[i]);
    }
  }

  return output;
}

const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(par(num));

function parV2(numero) {
  let objeto = {
    par: [],
    impar: [],
  };

  if (!Array.isArray(numero)) {
    return "Invalido: Debe pasar una lista de numeros";
  }

  //ciclo
  for (let n = 0; n < numero.length; n++) {
    const element = numero[n];

    if (!Number.isInteger(element)) {
      continue;
    }

    if (element % 2 === 0) {
      objeto.par.push(element);
    } else {
      objeto.impar.push(element);
    }
  }
  return objeto;
}

const numV2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numV3 = [0];
console.log(parV2(numV2));
console.log(parV2(numV3));
console.log(parV2("asdasd"));
console.log(parV2(""));
console.log(parV2("  "));
console.log(parV2([-3]));
