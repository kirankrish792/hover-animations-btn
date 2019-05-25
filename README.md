# Website con increibles efectos para botones
Puedes acceder a la pagina pinchando [aqui]{https://javiluli.github.io/Hover-animations-btn/}
Tambien puedes visitar el repositorio [aqui]{https://github.com/javiluli/hover-animations-btn}

## Un sitio web típico necesita
- CSS styles
- A template engine
- Javascript files
- Custom Fonts

## Consideraciones
- La entrada de tus archivos está dentro de la carpeta: `src`
- La carpeta webpack es para configurar webpack.

## Instalar dependencias de node.js
- Instalar dependencias de node.js: `npm i`

## Scripts creados para dev
- Borra y crea el proyecto en produccion:
  - Se inicia con:  `npm run buid'`
  - `"build": "rimraf dist && webpack --config webpack/webpack.config.js -p",`

- Iniciar un servidor local para desarrollo:
  - Se inicia con: `npm start`
  - `"start": "webpack-dev-server --config webpack/webpack.config.js -d"`

