//Next.js es un pequeño framework construido sobre React.js que viene a ayudar a reducir esta fatiga. ¿Cómo? Next nos permite, instalando una sola dependencia, 
//tener configurado todo lo que necesitamos para crear una aplicación de React usando Babel, Webpack, server render y muchas otras técnicas como HMR o separación de código 
//y… ¡hasta hace más fácil hacer deploy de nuestras aplicaciones!


import React, { Component } from'react';
import Link from'next/link';

classAboutPageextendsComponent{
	staticasync getInitialProps() {
		return { name: 'Julio' };
	}

	render() {
		return (
			<main>
				<h1>About {this.props.name}h1>
				<Linkprefetchhref="/">
					<a>Ir a <em>/em>a>
				Link>
				<stylejsx>{`
					h1 { color: blue; }
				`}style>
			main>
		);
	}
}

exportdefault AboutPage;
