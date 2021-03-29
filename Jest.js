 //Se usa para testear todo el código JavaScript incluyendo aplicaciones React. Una de las filosofías de Jest es proporcionar una experiencia integrada.

Nota: babel-jest se instala automáticamente al instalar Jest y transforma los archivos si una configuración de babel existe en tu proyecto.
Para evitar este comportamiento, puede restablecer explícitamente la opción de configuración de transform:

// package.json
{
  "jest": {
    "transform": {}
  }
}
