// Librerias
const fs = require("node:fs/promises");
const path = require("node:path");

// Funcion asincrona
async function leerJson(ruta) {
    // Lee e interpreta el JSON
    const texto = await fs.readFile(ruta, "utf8");
    return JSON.parse(texto);
}

// Funcion asincrona
async function escribirTexto(ruta, contenido) {
    // Creo la carpeta
    await fs.mkdir(path.dirname(ruta), { recursive: true });
    // Escribo texto
    await fs.writeFile(ruta, contenido, "utf8");
}

module.exports = {
    leerJson,
    escribirTexto,
};