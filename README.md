# Trabajo Práctico 02: Catálogo de Juegos de Mesa

## Descripción
Este proyecto es una aplicación informática de consola diseñada para administrar y procesar información de manera automática. El programa toma un archivo de datos con información sobre juegos de mesa guardada en un formato llamado JSON, analiza cada uno de los registros y los transforma para generar un reporte de texto limpio, ordenado y fácil de leer para cualquier usuario. Todo este proceso se realiza de forma eficiente y segura, asegurando que la computadora realice las tareas en el orden correcto sin bloquearse.

## Instalación
Para poder ejecutar este proyecto en tu computadora, es necesario realizar una preparación previa. Seguí estos pasos sencillos:

1. **Instalar Node.js:** Asegurate de tener instalado Node.js en tu sistema, ya que es el entorno que permite ejecutar este tipo de aplicaciones.
2. **Descargar el proyecto:** Descargá o cloná el repositorio con los archivos de la aplicación en una carpeta de tu computadora.
3. **Instalar dependencias:** Abrí una terminal o consola de comandos, posicionate dentro de la carpeta raíz del proyecto y ejecutá el siguiente comando para descargar de forma automática los componentes necesarios para su funcionamiento:
   'bash
   npm install'

## Ejecución
Una vez completada la instalación, podés interactuar con la aplicación ejecutando los siguientes comandos en tu terminal desde la carpeta raíz:

* **Para iniciar el programa y generar el informe:**
  'bash
  npm start'

  Al ejecutarlo, verás el catálogo ordenado directamente en tu pantalla junto con un mensaje que confirma el éxito de la operación. Al mismo tiempo, notarás que se crea una nueva carpeta en el proyecto con el informe guardado.

* **Para verificar que el código no tenga errores de sintaxis:**
  'bash
  npm run check'
  

## Estructura del proyecto
La aplicación se encuentra organizada de manera sumamente prolija. Cada archivo y carpeta tiene una única función asignada para evitar confusiones y hacer que el sistema sea fácil de mantener:

* "datos/": Carpeta que funciona como un depósito de almacenamiento, donde se encuentra el archivo "juegos.json" con la información original de los juegos de mesa (título, año, categorías, etc.).
* "src/": Carpeta que contiene el "motor" o código fuente del programa, dividido en tres archivos:
  * "archivos.js": Se encarga exclusivamente de las tareas físicas de lectura y escritura, es decir, de abrir el archivo de datos y de guardar el informe final.
  * "juegos.js": Funciona como un procesador que toma la información en bruto y la convierte en un texto formateado, estético y amigable para el lector.
  * "index.js:" Es el coordinador principal de la aplicación; se encarga de dar la orden de inicio, conectar el procesador con el lector, y avisar en pantalla si todo salió bien o si ocurrió un problema.
* "salida/": Carpeta generada automáticamente por el programa donde se guarda el reporte final llamado "catalogo-juegos.txt" (al descargar el proyecto, ésta carpeta se la puede eliminar sin problema).
* ".gitignore": Un archivo de configuración que le indica al sistema qué archivos o carpetas son privados o innecesarios y no deben subirse a internet.
* "package.json" y "package-lock.json": Documentos de texto que contienen la ficha técnica del proyecto y la lista de herramientas externas que se necesitan para que funcione.

## Flujo asíncrono
En la informática, las tareas que involucran leer o escribir archivos en el disco duro de la computadora suelen demorar un tiempo. Si el programa intentara hacer todo en un solo instante, la computadora podría "congelarse" mientras espera que el disco termine su trabajo. 

Para evitar esto, este proyecto utiliza un mecanismo llamado **flujo asíncrono** mediante las funciones "async" y "await". Esto significa que cuando el programa solicita leer la base de datos o guardar el informe, "pausa" momentáneamente esa tarea específica y le permite a la computadora seguir procesando otras acciones sin quedarse estancada. Una vez que el disco responde con los datos listos, el programa retoma el hilo exactamente donde lo dejó, garantizando una experiencia fluida y eficiente.

## Dependencias
Para mejorar la presentación visual del programa en la pantalla, este proyecto utiliza una única herramienta externa llamada:

* **picocolors:** Es una biblioteca de código que se encarga de pintar los textos en la consola de comandos. Gracias a ella, cuando el programa finaliza correctamente, los mensajes de éxito se muestran en un color verde llamativo, y si ocurre un imprevisto (como la falta de un archivo), el mensaje de error se destaca en color rojo para captar la atención del usuario de inmediato.

---

## Preguntas

### 1. ¿Qué responsabilidad tiene cada módulo?
Cada módulo tiene una tarea única y bien definida para que el código sea ordenado y escalable:
* El módulo de **archivos** se encarga solo del contacto con el disco duro (leer el JSON y escribir el TXT de salida). No sabe nada sobre qué es un juego de mesa.
* El módulo de **juegos** es un transformador conceptual. Recibe datos crudos de juegos y los convierte en un texto elegante. No sabe de dónde salen los datos ni cómo se guardan.
* El módulo **index** es el director de orquesta. Conecta a los dos anteriores, maneja las rutas de las carpetas y gestiona qué pasa si algo sale bien o mal a nivel general.

### 2. ¿Qué diferencia existe entre exportar una función y ejecutarla?
* **Exportar una función** significa ponerla a disposición de otros archivos del proyecto, como cuando guardamos una herramienta en una caja de herramientas compartida para que cualquiera pueda usarla en el futuro.
* **Ejecutar una función** significa darle la orden de que empiece a trabajar en ese preciso instante en el código para resolver una acción concreta.

### 3. ¿Qué representa la promesa devuelta por fs.readFile?
Representa un "compromiso" o una promesa de que la computadora va a realizar la lectura del archivo en el futuro. Como leer del disco lleva tiempo, el sistema nos devuelve este objeto inmediatamente diciendo: *"Te prometo que voy a buscar este archivo; cuando termine, te aviso si lo encontré con éxito o si fallé en el intento"*.

### 4. ¿Por qué await se utiliza dentro de una función async?
La palabra clave "await" le ordena al programa que se detenga y espere pacientemente a que una promesa (como la lectura de un archivo) se resuelva. Por cuestiones de diseño del lenguaje JavaScript, para poder usar esta pausa controlada, es obligatorio que la función que la contiene esté marcada como "async" (asíncrona), indicándole al sistema que esa función en particular tiene permitido pausarse y reanudarse.

### 5. ¿Qué errores pueden llegar al catch de main?
Al bloque "catch" pueden llegar todos los imprevistos que interrumpan el flujo normal del programa, por ejemplo:
* Que el archivo "juegos.json" no exista en la carpeta correspondiente o que la ruta esté mal escrita.
* Que el archivo JSON tenga un error de escritura (como una coma de más o una llave mal cerrada) y el programa no pueda interpretarlo.
* Que la computadora no tenga permisos del sistema operativo para crear la carpeta "salida" o escribir el archivo de informe final.

### 6. ¿Por qué se publican package.json y package-lock.json, pero no node_modules?
* Los archivos "package.json" y "package-lock.json" son livianos y contienen la "receta de cocina" con las instrucciones exactas de qué herramientas necesita el proyecto para funcionar.
* La carpeta "node_modules" contiene las herramientas físicas ya descargadas. Es una carpeta sumamente pesada, que cambia según el sistema operativo de cada usuario y que ralentizaría compartir el proyecto. Al publicar solo la "receta", cualquier otra persona puede reconstruir la carpeta entera en segundos ejecutando "npm install".

### 7. ¿Para qué se utiliza picocolors y por qué figura en dependencies?
"picocolors" se utiliza para colorear el texto que se imprime en la pantalla de la consola, haciendo la interfaz más amigable. Figura en la sección de "dependencies" porque es una herramienta indispensable para que el usuario final vea la aplicación tal como fue diseñada cuando el programa se ejecute en producción (a diferencia de las herramientas de desarrollo que solo usa el programador mientras escribe el código).
