# Webpack Multimedia Workflow

## Un sitio web típico necesita
- CSS styles
- A template engine
- Javascript files
- Custom Fonts

## Este Webpack workflow permite
- Carga y compilar Pug a HTML y minificarlo
- Carga y compilar SCSS a CSS y minificarlo
- Carga tipografias/fonts woff, woff2, ttf & eot
- Carga imagenes Gif, jpg y png y minifica el peso
- Carga archivos SVG
- Carga Archivos Mp3 y Mp4

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

 