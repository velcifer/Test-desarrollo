//Webpack es un empaquetador de módulos, es decir, te permite generar un achivo único con todos aquellos módulos que necesita tu aplicación para funcionar. 
//Para hacerte una idea, te permite meter todos tus archivos javascript en un único archivo, llamémoslo bundle.js.

La parte basica de webpack es definir la 'Entrada' y 'Salida?

//  webpack.config.js 
module.exports = {
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: __dirname
    }
};
