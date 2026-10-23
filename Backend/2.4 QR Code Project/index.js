/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

// 1. Creamos una función asíncrona
async function generarQR() {
  try {
    // 2. Esperamos a que el usuario responda
    const respuesta = await inquirer.prompt([
      {
        type: "input",
        name: "url",
        message: "¿Qué URL quieres convertir en QR?",
      },
    ]);

    // Ahora 'respuesta.url' SÍ existe. Podemos usarla.
    console.log("Generando QR para:", respuesta.url);

    // 3. Generamos la imagen (¡DENTRO de la función!)
    const qrStream = qr.image(respuesta.url, { type: "png" });
    qrStream.pipe(fs.createWriteStream("qr_img.png"));

    // 4. Guardamos el texto (¡DENTRO de la función!)
    fs.writeFile("URL.txt", respuesta.url, (err) => {
      if (err) {
        console.error("Hubo un error al guardar:", err);
      } else {
        console.log("¡URL guardada con éxito en URL.txt!");
      }
    });
  } catch (error) {
    console.error("Algo salió mal:", error);
  }
}

// Ejecutamos la función
generarQR();
