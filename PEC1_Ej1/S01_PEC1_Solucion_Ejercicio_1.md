## La aparición de `HTML5/CSS3/JS` ha supuesto el nacimiento del desarrollo front-end moderno. (0.75 puntos)

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
