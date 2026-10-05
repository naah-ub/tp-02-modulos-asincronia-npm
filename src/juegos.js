function formatearActividad(libreriaJuegos) {
    const disponibilidad = libreriaJuegos.disponible ? "Disponible" : "No disponible";
    const categoriasTexto = libreriaJuegos.categorias.join(", ");
    return `        N° de Juego: ${libreriaJuegos.indice}
                    Título: ${libreriaJuegos.titulo}
                    Estudio: ${libreriaJuegos.editorial}
                    Año: ${libreriaJuegos.anio}
                    Disponible: ${disponibilidad}
                    Jugadores Maximos y minimos: ${libreriaJuegos.jugadoresMax} - ${libreriaJuegos.jugadoresMin}
                    Categorias: ${categoriasTexto}

                    ============================
                    `;
}

function crearInforme(actividades) {
    const lineas = actividades
        .map((act, i) => ({ ...act, indice: i + 1 }))
        .map(formatearActividad);
    return `LIBRERIA DE JUEGOS
    ===============
    Cantidad de juegos: ${actividades.length}
    
    ${lineas.join("\n")}
    `;
}

module.exports = { crearInforme };