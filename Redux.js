//Redux es un patrón de arquitectura de datos que permite manejar el estado de la aplicación de una manera predecible. 
//Está pensado para reducir el número de relaciones entre componentes de la aplicación y mantener un flujo de datos sencillo.

//En resumen, estos son los beneficios que aporta la aplciación del patrón de Redux.
//Arquitectura escalable de datos, Mayor control sobre el flujo de datos y el estado de la aplicación.
//Estado global e inmutable.

El ( State ) El estado en Redux es un único objeto Javascript, organizado en modo de árbol (como JSON), que contiene todos los datos que la aplicación va a manejar.

El estado de una aplicación podría parecerse a algo como:

{
  heroe: "Super Yo",
  supervillanosPreferidos: ["Joker", "Magneto"],
  vidas: 5,
  nivel: 1
}

function reducers(state, action) {
  switch (action.type) {
    case 'INCREMENTAR_NIVEL':
      // Ejecutar la lógica
      // Devolver un nuevo estado
    case 'DECREMENTAR_NIVEL':
      // ...
    default:
      return state
  }
}
