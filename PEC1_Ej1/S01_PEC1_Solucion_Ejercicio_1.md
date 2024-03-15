## 1. La aparición de `HTML5/CSS3/JS` ha supuesto el nacimiento del desarrollo front-end moderno. (0.75 puntos)

### ¿Cuál es la ventaja del uso de etiquetas semánticas? Nombra y explica al menos 3 de estas ventajas.

La semántica es la rama de la lingüística que estudia el significado de las palabras. En html, la llegada de HTML5 supuso y gran salto en el uso de la semántica y etiquetas que antes podían no significar nada como `<div>` fueron siendo sustituidas por etiquetas con más significado como `<header>`, `<section>`, `<article>`, etc.

Entre las ventajas de etiquetas semánticas destacaría las siguientes:

- **Legibilidad para el desarrollador.** Al tener un significado, se entiende mucho más rápido el tipo de información o la estructura.
- **Accesibilidad**. Para los lectores de pantalla o los usuarios que utilizan lectores de pantalla también les resulta más fácil identificar el contenido ya que estas etiquetas ofrecen información estructural y aportan así una mejor experiencia de usuario.

- **Mejor SEO** Los motores de búsqueda entienden mejor la estructura y contenido de la página, por lo que puede ayudar a mejorar el posicionamiento.

### Cita al menos 3 APIs HTML5 y explica brevemente su funcionalidad.

- **API de Geolocalización** Esta API nos permite obtener la ubicación del usuario a través del navegador del dispositivo. Por razones de privacidad, el usuario debe dar el consentimiento de compartir su ubicación. A través de esta API se pueden obtener informaciones tales como latitud, longitud, altitud, hacia qué dirección está orientado el dispositivo, velocidad a la que se mueve el dispositivo o la precisión de la latitud y longitud.
- **Web Storage API (API de almacenamiento)** Mediante esta API el navegador puede almacenar información de tipo clave/valor. Permite almacenar hast 5 MB de datos. Puede utilizar dos mecanismos para almacenar datos:
  - _localStorage_ (almacenamiento local): almacena los datos en un espacio de almacenamiento local y seguirán estando disponibles incluso si se cierra el navegador.
  - _sessionStorage_ (almacenamiento de sesión): almacena los datos en un espacio de almacenamiento local al igual que localStorage, per a diferencia de la primera, cuando cerremos el navegador se perderá la información.
- **Notifications API (API de notificación)** Esta API permite que las páginas web controlen la visualización de notificaciones. Permiten mostrar una ventana o cuadro emergente que está fuera de la ventana de navegación y aparecerá encima de todas ellas en un nivel superior. Esta API necesita permiso para poder utilizarla.

### Cita qué opción ofrece CSS3 para conseguir que se apliquen diferentes estilos CSS sobre el mismo elemento en su visualización en diferentes dispositivos (diferentes tamaños de pantalla).

Existen varias opciones para poder controlar los estilos de un elemento según el dipositivo.

- **Media queries** Las media queries permiten dar estilos según el dispositivo de salida. Estas media queries suelen estar basadas muchas veces en el ancho o alto de pantalla, pero también pueden cambiar el estilo dependiendo del tipo de dispositivo de salida como por ejemplo impresión o pantalla.
- **Unidades de medida relativas** Estas unidades pueden ser _%_, _em_ (tamaño de fuente relativo al padre), _rem_ (tamaño de fuente relativo al elemento raíz), _vw_(medida relativa al ancho de pantalla) o _vh_ (medida relativa al alto de pantalla).
- **Flexbox y CSS Grid** Mediante Flexbox y Grid se crean sistemas reticulares con un comportamiento predefinido que permite que los elementos se "reordenen" o fluyan según este comportamiento. <br>_Flexbox_ fue ideado para el diseño en una dimensión en el que los elementos fluyen según un eje principal, que puede ser vertical u horizontal.<br>CSS Grid también puede fluir y adaptarse a diferentes anchos de pantalla sin necesidad de utilizar _media queries_ utilizando la función CSS _minmax_

### Cita al menos 4 de las características principales de TypeScript (importante superset de JavaScript que trataremos en el siguiente capítulo).

- **Tipado estático** Se puede declarar el tipo de dato de las variable o parámetros de función. Al ser estático, el tipo de dato no puede variar según avanza la ejecución del código y esto ayuda a detectar errores. Por ejemplo, a una variable de tipo número, luego no se le podrá atribuir un valor de tipo _string_ porque dará error.
- **Compila a javascript** Typescript no se ejecuta en navegadores, para que pueda ser ejecutado debe ser compilado a Javascript.
- **Uso de interfaces** Las interfaces definen la estructura de un objeto definiendo propiedades y métodos de este objeto. Su comportamiento es parecido a si creáramos un tipo de dato que luego en la ejecución, typescript puede comprobar para mantener coherencia.
- **Inferencia de tipos** Typescript es capaz de detectar el tipo de dato de una variable por lo que no sería necesario especificar siempre el tipo de dato.

## 2. El lenguaje CSS es muy rígido, poco práctico y ordenado a la hora de programar. Para evitar este problema se han creado los preprocesadores CSS, que ofrecen evidentes ventajas (0.5 puntos)

### • Cita al menos 2 de estos preprocesadores.

- **SASS**
- **LESS**

### • Cita al menos 4 ventajas que ofrecen estos preprocesadores.

Hace unos años, los preprocesadores ofrecían algunas características que CSS no disponía y suponían una ventaja con respecto a CSS. En los últimos años muchas de estas características han sido incorporadas a CSS3 y no estoy segura de ver claramente las ventajas de uso de estos procesadores hoy en día. Algunas de las características/ventajas de estos procesadores con respecto a CSS son:

- **Código mejor organizado** Permite la separación del código en varios archivos, mejorando así la organización.
- **Facilidad de mantenimiento** Permiten una organización modular de los estilos, y esto hace que sea más fácil de mantener y trabajar en el código.
- **Reutilización del código** Al tener el código dividido y utilizar algunas características como el uso de variables o los mixins, el código resultante es más reutilizable y evita la repetición de estilos.
- **Características del lenguaje** Estos preprocesadores permitieron el uso de variables, mixins, funciones o anidamiento. Todo ello contribuía a una optimización del código, su legibilidad y mantenimiento.

### • Explica brevemente en qué consisten los sourcemaps.

Al desarrollar una aplicación web es una buena práctica combinar y comprimir el código Javascript y CSS. Esto mejora su rendimiento, pero dificulta su lectura y si se necesita hacer algún cambio, es difícil de leer. Para evitar esta situación está el sourcemap. Al generar el código optimizado, se genera también un sourcemap que contiene la información acerca de la relación entre el código generado y el original y permite a los desarrolladores depurar el código más fácilmente porque mantiene información como los nombres de los archivos fuente, líneas de código correspondientes y las columnas originales.

### • Explica qué es un transpilador.

Es un tipo de compilador que traduce un lenguaje fuente a otro lenguaje fuente. Por ejemplo, puede transpilar de TypeScript a JavaScript o de SASS a CSS para que los navegadores puedan interpretar el lenguaje.

## 3. El flujo de trabajo profesional en front-end hace indispensable el uso de herramientas como controles de versiones y herramientas de gestión de módulos (0.75 puntos).

### • Cita al menos dos sistemas de control de versiones y dos herramientas de gestión de módulos.

- Sistemas de control de versiones:
  - Git
  - CVS
  - Apache Subversion
  - Mercurial
- Herramientas de gestión de módulos:
  - Node.js y npm
  - Webpack
  - Parcel

### • Cita y explica al menos 3 comandos de Git.

- **git init** Sirve para crear un nuevo repositorio o reinicializar uno ya existente en el directorio actual. Al ejecutar el comando, se creará una carpeta (invisible en mac) .git en el lugar que hayamos apuntado en la terminal.
- **git status** Muestra el estado actual del _working directory_ y del _staging area_ permitiendo ver si hay archivos modificados en el _working directory_ que puedan añadirse al _staging area_ o si hay archivos en el _staging area_ que puedan ser commiteados.
- **git add** Con este comando git prepara los archivos con cambios para almacenarlos en el _staging area_

### • Cita y explica brevemente las características más definitorias de WebPack.

Webpack es un empaquetador de módulos (_bundler_), permite generar un archivo único con todos los módulos que necesita la aplicación para funcionar. Las aplicaciones web están compuestas por varios archivos js, css, etc. que al mismo tiempo están interrelacionados entre ellos. Esta herramienta empaqueta, transforma y optimiza los recursos necesarios para su funcionamiento.

Algunas de sus características principales son:

- **Empaquetado de módulos** Puede empaquetar diferentes módulos utilizados por los desarrolladores en paquetes facilitando así la gestión de las dependencias y la organización del código permitiendo un desarrollo modular.
- **Code splitting** Esta característica permite dividir el código en varios paquetes que se pueden cargar bajo demanda reduciendo así la cantidad de datos que deben descargarse y el tiempo de carga.
- **Hot module replacement** Permite actualizar automáticamente los cambios en un módulo sin necesidad de recargar la página.
- **Tree shaking** Elimina el código muerto que no se utiliza reduciendo el tamaño del archivo y mejorando los tiempos de carga.
