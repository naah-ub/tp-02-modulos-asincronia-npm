// Librerias
const path = require("node:path");
const pc = require("picocolors");

// Importar modulos propios mediante rutas relativas
const { leerJson, escribirTexto } = require("./archivos.js");
const { crearInforme } = require("./juegos.js");

// Construccion de la ruta de salida y datos
const rutaDatos = path.join(__dirname, "..", "datos", "juegos.json");
const rutaSalida = path.join(__dirname, "..", "salida", "catalogo-juegos.txt");

// Funcion main
async function main() {
    try {
        console.log(pc.cyan("Leyendo archivo..."));
        const actividades = await leerJson(rutaDatos);
        const informe = crearInforme(actividades);
        await escribirTexto(rutaSalida, informe);
        console.log(informe);
        console.log(pc.green(`Libreria generada en: ${rutaSalida}`));
    } catch (error) {
        console.error(pc.red(`No se pudo generar la librería de juegos: ${error.message}`));
        process.exitCode = 1;
    }
}

main();