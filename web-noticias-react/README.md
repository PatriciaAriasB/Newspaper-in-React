# Página de Noticias

Este proyecto es una aplicación web desarrollada con React que utiliza la News API para mostrar noticias. La aplicación implementa React Router para navegar entre diferentes páginas y cuenta con los siguientes componentes principales:

- **Header**: Encabezado de la aplicación que incluye la navegación entre las distintas secciones.
- **Home**: Página de inicio de la aplicación, con una temática libre.
- **Form**: Formulario para crear una nueva noticia. Los datos del formulario se guardan localmente en el almacenamiento del navegador.
- **ListNews**: Página que muestra una lista detallada de noticias obtenidas de la API.

## Funcionalidades

- **Navegación**: Utiliza React Router para permitir la navegación entre las páginas `/home`, `/form` y `/Newlist`.
- **Formulario de Alta de Noticia**: Permite al usuario crear una nueva noticia ingresando el título, la descripción y la fuente de la noticia. Los datos del formulario se almacenan localmente en el almacenamiento del navegador.
- **Listado de Noticias**: Muestra una lista detallada de noticias obtenidas de la API de News API.
- **Contexto**: Utiliza Context de React para gestionar el estado global de la aplicación y compartir datos entre los diferentes componentes.
- **Estilos con SASS**: Utiliza SASS para los estilos de la aplicación, lo que permite una mejor organización y mantenimiento del código CSS.

## Estructura del Proyecto

El proyecto está estructurado con los siguientes directorios y archivos:


Por supuesto, aquí tienes el archivo README.md con los ajustes solicitados:

markdown
Copiar código
# Página de Noticias

Este proyecto es una aplicación web desarrollada con React que utiliza la News API para mostrar noticias. La aplicación implementa React Router para navegar entre diferentes páginas y cuenta con los siguientes componentes principales:

- **Header**: Encabezado de la aplicación que incluye la navegación entre las distintas secciones.
- **Home**: Página de inicio de la aplicación, con una temática libre.
- **Form**: Formulario para crear una nueva noticia. Los datos del formulario se guardan localmente en el almacenamiento del navegador.
- **ListNews**: Página que muestra una lista detallada de noticias obtenidas de la API.

## Funcionalidades

- **Navegación**: Utiliza React Router para permitir la navegación entre las páginas `/home`, `/form` y `/list`.
- **Formulario de Alta de Noticia**: Permite al usuario crear una nueva noticia ingresando el título, la descripción y la fuente de la noticia. Los datos del formulario se almacenan localmente en el almacenamiento del navegador.
- **Listado de Noticias**: Muestra una lista detallada de noticias obtenidas de la API de News API.
- **Contexto**: Utiliza Context de React para gestionar el estado global de la aplicación y compartir datos entre los diferentes componentes.
- **Estilos con SASS**: Utiliza SASS para los estilos de la aplicación, lo que permite una mejor organización y mantenimiento del código CSS.

## Estructura del Proyecto

El proyecto está estructurado con los siguientes directorios y archivos:

components/
|-- Header/
|-- Home/
|-- Form/
|-- ListNews/
|-- Footer/
context/
|-- GlobalState.js
scss/
|-- styles.scss
App.js
index.js


## Instalación

1. Clona este repositorio en tu máquina local.
2. En el directorio del proyecto, ejecuta `npm install` para instalar todas las dependencias.
3. Una vez instaladas las dependencias, ejecuta `npm start` para iniciar la aplicación en el entorno de desarrollo.

¡Explora las últimas noticias con esta aplicación de Noticias! Si tienes alguna pregunta o comentario, no dudes en contactarme.

## Autora

Patricia Arias Burdeos

