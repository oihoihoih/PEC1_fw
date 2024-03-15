# PEC 1 Oihane Chourraut

- **Login UOC:** ochourraut
- **Nombre y apellidos:** Oihane Chourraut Yurramendi
- **Breve descripción de lo realizado en esta PEC** dificultades, mejoras realizadas, si hay que tener algo en cuenta a la hora de corregir/ejecutar la practica o cualquier aspecto que queráis destacar.

## PEC1_Ej1

Escribir algún comentario

## PEC1_EJ2

Después de haber seguido el vídeo e implementado el formulario siguiendo el vídeo y añadido los campos y validaciones requeridas en el ejercicio he querido centrarme en la accesibilidad del formulario. Para ello he hecho lo siguiente:

- HTML semántico. He revisado las etiquetas del html del vídeo y cambiado donde me ha parecido que se podía mejorar, evitando el uso excesivo de divs (Por ejemplo, he sustituído el div con clase "container" por la etiqueta "main").
- Añadido aria-label en la etiqueta form para dar información a usuarios invidentes
- En el primer input ("username") he añadido la propiedad autofocus
- Añadir Required en todos los campos. Para ello, he añadido una nota informativa, y he añadido un asterisco con el título required para que los lectores de pantalla lo puedan leer

Además de esto, también he completado la etiqueta input con el atributo name.

Lo siguiente que he querido hacer es activar el feedback al pasar de un input a otro, ya que creo que la experiencia de usuario es más positiva.

Al intentar implementarlo, me he dado cuenta de que con el método de validación que daba el vídeo, tendría que ir especificando la validación a implementar en cada input, por lo que he decidido cambiar el enfoque, de esta manera, se utiliza la validación proporcionada en html para crear un objeto validationOptions que valida mediante el uso de los atributos del elemento input.

Fuente: https://youtu.be/iyngFd6f8ko?feature=shared
