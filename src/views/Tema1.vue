<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Construcción del Backend de la aplicación web

    .bloque-texto-a.color-secundario.mb-5.caja_flotante_azul(data-aos="fade-up")
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          figure.p-5
            img.imagen_flotante_animada(src="@/assets/curso/tema1/1.svg")
        .col-lg-8
          .bloque-texto-a__texto.p-4.caja_escalada_hover
            p Se inicia con una estructura de proyecto MEAN (Mongo, Express, Angular y Node.js) para el proyecto que abarca tanto el Front-end como el Backend. Para la instalación de las primeras herramientas como Node.js y Express en la sección material complementario de este documento encontrará la guía de instalación de Node.js y de Express.  A continuación, se incluye una figura que representa de manera general el proceso de codificación de software.

    p.mt-5(data-aos="fade-up" style="padding-left: 12px;border-left:4px #4DD0E1 solid;") #[strong Figura 2] Codificación software

    figure.mt-5.col-md-9.m-auto(data-aos="fade-up")
      img.image_floating(src="@/assets/curso/tema1/2.svg")
    figcaption.mt-4.col-md-5(data-aos="fade-up") Nota. Codificación en lenguaje de desarrollo de software.

    br
    .mt-5.titulo-segundo#t_1_1
      h2 1.1 Instalación y configuración de herramientas de Node.js

    p(data-aos="fade-up") Se utiliza el Visual Studio Code (VS Code) con la siguiente estructura de directorios que se muestra en la figura 3 para el Backend.

    p.mt-5(data-aos="fade-up" style="padding-left: 12px;border-left:4px #4DD0E1 solid;") #[strong Figura 3] Estructura de directorios Backend

    figure.col-md-5.m-auto.mt-5
      img.image_floating(data-aos="fade-left" src="@/assets/curso/tema1/3.svg")
    figcaption.mt-5.col-md-5(data-aos="fade-up") Nota. Estructura de directorios del proyecto.

    p.mt-5(data-aos="fade-up") Como se observa en la figura anterior se crea la carpeta GESTION-EMPLEADOS, que será la principal o raíz del proyecto. Dentro de esta se crea la carpeta backend, en la cual se crean otros directorios y archivos como se alcanza a apreciar en la figura. De tal forma, que esta será la estructura que apoyará el desarrollo de la base de la aplicación.

    p.mt-3(data-aos="fade-up") Una vez creadas las carpetas y archivos como lo son controllers, models, routes, database.js e index.js, se abre la terminal del VS Code y se digita el siguiente comando para crear un proyecto Node.js, como se muestra en el ejemplo de la siguiente figura:

    p.mt-5
      span.h4.p-3.text-white.text-center(data-aos="fade-up" style="background-color:#21214B;border-radius:10px;") npm init --yes

    p.mt-5(data-aos="fade-up" style="padding-left: 12px;border-left:4px #4DD0E1 solid;") #[strong Figura 4] Terminal de VS Code

    figure.mt-5.col-md-10.m-auto
      img.image_floating(data-aos="fade-right" src="@/assets/curso/tema1/4.svg")
    figcaption.mt-4.col-md-5(data-aos="fade-up") Nota. Terminal de VS Code iniciando proyecto con Node.js.

    p.mt-5(data-aos="fade-up") Una vez creado el proyecto se requiere todas las bondades del framework de Node.js, para lo cual se hace necesario Express, que va a generar una serie de componentes que ayudarán mucho al desarrollo de esta aplicación; por lo tanto, se instala Express con la siguiente línea de comandos desde el terminal del VS Code:

    p.mt-5
      span.h4.p-3.text-white.text-center(data-aos="fade-up" style="background-color:#21214B;border-radius:10px;") npm install express

    br
    .mt-5.titulo-segundo#t_1_2
      h2 1.2 Desarrollo del index.js

    p(data-aos="fade-up") El siguiente paso es iniciar con el desarrollo del archivo principal del Backend, que se llama index.js como se muestra en la siguiente figura, (puede descargar el contenido de estas instrucciones en el archivo index.js disponible en la carpeta anexos).

    .col-md-4.mt-5(data-aos="fade-right")
        a.anexo.mb-4(:href="obtenerLink('downloads/index.js')" target="_blank" download)
          .anexo__icono
            img(src="@/assets/template/icono-zip.svg")
          .anexo__texto
            p Descargar archivo
            p #[strong index.js]

    p.mt-5(data-aos="fade-up" style="padding-left: 12px;border-left:4px #4DD0E1 solid;") #[strong Figura 5] Estructura index.js

    .mt-5.p-5(style="background-color:#21214B" data-aos="fade-up")
      p.text-white.mb-0 const express = require('express') 
      p.mb-0.text-white const morgan = require('morgan'); 
      p.mb-0.text-white const cors = require('cors'); 
      p.mb-0.text-white const app = express(); // la constante app tendrá ahora todo el funcionamiento del servidor 
      p.mb-0.text-white const { mongoose } = require('./database'); // no se quiere todo el archivo sino la conexión
      p.mb-0.text-white /** * Se crea una REST API, es la manera de decirle al servidor que reciba y envíe datos  */ 
      p.mb-0.text-white // Configuraciones 
      p.mb-0.text-white app.set('port', process.env.PORT || 3000); 
      p.mb-0.text-white app.use(morgan('dev')); 
      p.mb-0.text-white app.use(express.json()); // método que ayuda a convertir el código para que el servidor pueda entender lo que viene del cliente. 
      p.mb-0.text-white app.use(cors({origin: 'http://localhost:4200'})); // método para comunicar con el cliente 
      p.mb-0.text-white // rutas de nuestro servidor 
      p.mb-0.text-white app.use('/api/empleados',require('./routes/empleado.routes')); 
      p.mb-0.text-white // Iniciando el servidor
      p.mb-0.text-white app.listen(app.get('port'), () => {// esta es una mejor manera de configurar el puerto 
      p.mb-0.text-white console.log('server activo en el puerto', app.get('port')); 
      p.mb-0.text-white });

    figcaption.mt-3.col-md-4(data-aos="fade-up") Nota. Código completo archivo index.js.

    p.mt-5(data-aos="fade-up") En la figura anterior se aprecia el código del archivo index.js para el proyecto, por lo cual en la medida del avance de este componente se irá explicando cada línea de código que se requiera ejecutar. En ese sentido, se inicia con el requerimiento de Express y se almacena en una constante en JavaScript llamada Express. De esta forma se tendrá el acceso a todo el funcionamiento del servidor con la línea de código:

    p.mt-5
      span.h4.p-3.text-white.text-center(data-aos="fade-up" style="background-color:#21214B;border-radius:10px;") const app = express();

    p.mt-5(data-aos="fade-up") Una vez creada la constante app, se pasa a la configuración del puerto por donde va a escuchar y a recibir el servidor todo tipo de solicitudes por parte del cliente, según se muestra en la siguiente línea:

    p.mt-5
      span.h4.p-3.text-white.text-center(data-aos="fade-up" style="background-color:#21214B;border-radius:10px;") app.set(‘port’, process.env.PORT || 3000);

    p.mt-5(data-aos="fade-up") De este modo, set es para crear una variable que va a ser accedida desde cualquier parte de la aplicación, por lo que la estructura es la siguiente (nombre var, valor); process es porque cuando se despliegue la app no se va a tener la opción de definir el puerto, sino que el mismo servicio de la nube ayudará a definirlo, en el caso de que el puerto 3000 esté ocupado.

    p.mt-3(data-aos="fade-up") Con el fin de revisar los cambios en el servidor de manera automática se tiene planeada la instalación de algunas herramientas que harán más fácil el desarrollo sobre Node.js, por lo que se instala Nodemon (Vortexbird, 2017) como una utilidad que monitorea de manera constante los cambios en el código fuente que se está desarrollando y de manera automática reinicia el servidor. Por lo tanto, la línea de código utilizada en la terminal de VS Code es:

    p.mt-5
      span.h4.p-3.text-white.text-center(data-aos="fade-up" style="background-color:#21214B;border-radius:10px;") npm install nodemon –D

    p.mt-5(data-aos="fade-up") Esto quiere decir que Nodemon será instalado como una dependencia de desarrollo y no como dependencia general del proyecto. Por lo que se configura el archivo package.json según se muestra en la siguiente figura (puede descargar el contenido de estas instrucciones en el archivo package.json disponible en la carpeta), y se inicia a ejecutar el servidor con la siguiente línea de comando:

    p.mt-5
      span.h4.p-3.text-white.text-center(data-aos="fade-up" style="background-color:#21214B;border-radius:10px;") npm run dev

    .col-md-4.mt-5(data-aos="fade-right")
        a.anexo.mb-4(:href="obtenerLink('downloads/package.json')" target="_blank" download)
          .anexo__icono
            img(src="@/assets/template/icono-zip.svg")
          .anexo__texto
            p Descargar archivo
            p #[strong package.json]

    p.mt-5(data-aos="fade-up" style="padding-left: 12px;border-left:4px #4DD0E1 solid;") #[strong Figura 6] Estructura package.json

    .mt-5.p-5(style="background-color:#21214B" data-aos="fade-up")
      p.text-white.mb-0 {
      p.text-white.mb-0(style="padding-left:10px;") “name”: “gestion-empleados”,
      p.text-white.mb-0(style="padding-left:10px;") “version”: “1.0.0”,
      p.text-white.mb-0(style="padding-left:10px;") “description”: “”,
      p.text-white.mb-0(style="padding-left:10px;") “main”: “index.js”,
      p.text-white.mb-0(style="padding-left:10px;") “scripts”: {
      p.text-white.mb-0(style="padding-left:20px;") “dev”: “nodemon BackEnd/index.js”
      p.text-white.mb-0(style="padding-left:10px;") },
      p.text-white.mb-0(style="padding-left:10px;") “keywords”: [],
      p.text-white.mb-0(style="padding-left:10px;") “author”: “”,
      p.text-white.mb-0(style="padding-left:10px;") “license”: “ISC”,
      p.text-white.mb-0(style="padding-left:10px;") “dependencies”: {
      p.text-white.mb-0(style="padding-left:20px;") “cors”: “^2.8.5”,
      p.text-white.mb-0(style="padding-left:20px;") “express”: “^4.17.1”,
      p.text-white.mb-0(style="padding-left:20px;") “mongoose”: “^5.12.14”,
      p.text-white.mb-0(style="padding-left:20px;") “Morgan”: “^1.10.0”
      p.text-white.mb-0(style="padding-left:10px;") },
      p.text-white.mb-0(style="padding-left:10px;") “devDependencies”: {
      p.text-white.mb-0(style="padding-left:20px;") “nodemon”: “^2.0.7”
      p.text-white.mb-0(style="padding-left:10px;") }
      p.text-white.mb-0 }

    figcaption.mt-3.col-md-4(data-aos="fade-up") Nota. Código completo archivo package.json.

    p.mt-5(data-aos="fade-up") Ahora, se construyen las Middleware dentro del archivo de index.js como se puede apreciar en la figura anterior, encargadas de procesar los datos, es decir, cuando se solicitan o envían al servidor. Al respecto, el servidor debe entender los datos que le llegan del cliente (AngularJS toma los datos del cliente y los envía en formato JSON) y es por eso que se necesita algún tipo de conversión, por lo que se requiere del uso del formato JSON ejecutando la siguiente instrucción:

    p.mt-5
      span.h4.p-3.text-white.text-center(data-aos="fade-up" style="background-color:#21214B;border-radius:10px;") app.use(express.json());

    p.mt-5(data-aos="fade-up") Con el fin de observar la transacción de mensajes por consola se tiene una herramienta útil llamada morgan, que ayuda a mirar en consola lo que el usuario está solicitando. Esta herramienta es opcional para el desarrollo de la aplicación, no obstante se deja la línea de comando para su instalación y utilización:

    p.mt-5
      span.h4.p-3.text-white.text-center(data-aos="fade-up" style="background-color:#21214B;border-radius:10px;") npm install Morgan

    p.mt-5
      span.h4.p-3.text-white.text-center(data-aos="fade-up" style="background-color:#21214B;border-radius:10px;") app.use(morgan(‘dev’));


    br
    .mt-5.titulo-segundo#t_1_3
      h2 1.3 Configuración e instalación de la bbase de datos MongoDB

    p(data-aos="fade-up") A continuación, se realizará la conexión de la aplicación del servidor a la base de datos, por lo que se inicia a configurar y a instalar los recursos necesarios antes de iniciar a desarrollar. En ese sentido, se instala MongoDB de manera persistente en el equipo de desarrollo, para lo cual se deja información para su instalación en la sección material complementario de este documento. La siguiente figura representa de manera general el diagrama entidad-relación de una base de datos.

    p.mt-5(data-aos="fade-up" style="padding-left: 12px;border-left:4px #4DD0E1 solid;") #[strong Figura 7] Diagrama entidad-relación

    figure.mt-5.col-md-7.m-auto
      img.image_floating(src="@/assets/curso/tema1/5.svg" data-aos="fade-right")

    figcaption.mt-4.col-md-6(data-aos="fade-left") Nota. Esquema general diagrama entidad-relación base de datos. Pixabay (2016).

    p.mt-5(data-aos="fade-up") En la siguiente figura se muestra la imagen que representa el inicio del proceso de instalación de MongoDB.

    p.mt-5(data-aos="fade-up" style="padding-left: 12px;border-left:4px #4DD0E1 solid;") #[strong Figura 8] MongoDB

    figure.mt-5.col-md-8.m-auto
      img.image_floating(src="@/assets/curso/tema1/6.svg" data-aos="fade-right")

    figcaption.mt-4.col-md-3(data-aos="fade-left") Nota. Panel de control MongoDB.

    p.mt-5(data-aos="fade-up") De igual manera, a nivel opcional se instala la extensión de MongoDB dentro del entorno de VS Code, permitiendo tener una integralidad para el desarrollo, estas herramientas facilitan la celeridad en el proceso de construcción de sistemas de software. Por lo tanto, en el material de apoyo se dejará información para acceder a la guía para la instalación de esta extensión, denominada extensión VS Code y MongoDB.  La siguiente figura muestra de qué manera se visualiza dicha extensión dentro del entorno de desarrollo.

    p.mt-5(data-aos="fade-up" style="padding-left: 12px;border-left:4px #4DD0E1 solid;") #[strong Figura 9] Extensión MongoDB

    figure.mt-5.col-md-6.m-auto
      img.image_floating(src="@/assets/curso/tema1/7.svg" data-aos="fade-right")

    figcaption.mt-4.col-md-4(data-aos="fade-left") Nota. Visualización extensión MongoDB en VS Code.

    p.mt-5(data-aos="fade-up") Posteriormente, y con el fin de realizar la conexión a la base de datos y definir la estructura de los datos de la aplicación a desarrollar, o lo que técnicamente se conoce como esquemas, se instala la herramienta Mongoose con la siguiente línea de comando desde la terminal de VS Code:

    p.mt-5
      span.h4.p-3.text-white.text-center(data-aos="fade-up" style="background-color:#21214B;border-radius:10px;") npm install mongoose

    br
    .mt-5.titulo-segundo#t_1_4
      h2 1.4 Configuración de database.js

    p(data-aos="fade-up") Con todas las herramientas necesarias para la conexión de la aplicación a la base de datos se empieza a desarrollar y a configurar sobre el archivo database.js. (Puede descargar el contenido de estas instrucciones en el archivo database.js disponible en la carpeta anexos).

    .col-md-4.mt-4(data-aos="fade-right")
        a.anexo.mb-4(:href="obtenerLink('downloads/database.js')" target="_blank" download)
          .anexo__icono
            img(src="@/assets/template/icono-zip.svg")
          .anexo__texto
            p Descargar archivo
            p #[strong database.js]

    p.mt-5(data-aos="fade-up" style="padding-left: 12px;border-left:4px #4DD0E1 solid;") #[strong Figura 10] Estructura database.js

    .mt-4.p-5(style="background-color:#21214B" data-aos="fade-up")
      p.text-white.mb-0 const mongoose = require(‘mongoose’); 
      p.text-white.mb-0(style="padding-left:10px;") const URI = ‘mongodb://localhost/empleados’; 
      p.text-white.mb-0(style="padding-left:10px;") mongoose.connect(URI)
      p.text-white.mb-0(style="padding-left:20px;") .then(db => console.log(‘DB is connected’))
      p.text-white.mb-0(style="padding-left:20px;") .catch(err => console.error(err));  
      p.text-white.mb-0 module.exports = mongoose;

    figcaption.mt-4.col-md-4(data-aos="fade-left")  Nota. Código completo archivo database.js.

    p.mt-5(data-aos="fade-up") Con respecto al código del archivo database.js, allí se indica que es necesario que el módulo se conecte a MongoDB, por eso aparece Mongoose. Así, al llamarse al módulo se almacena en una constante, por otra parte, se define la dirección de la conexión de la base de datos en una constante denominada URI y, se utiliza una promesa para obtener la información de la base de datos y corroborar si hay conexión o no.

    p.mt-3(data-aos="fade-up") Por ser un módulo que se utiliza en toda la aplicación se exporta. De esta forma la constante Mongoose devolverá la conexión.

    p.mt-3(data-aos="fade-up") De manera adicional se puede observar que en el archivo index.js, se invoca o llama el archivo database.js en el cual se especifica que lo que se requiere es la conexión. En este sentido, solo resta probar si la conexión está activa, por lo que se inicia el servidor con la línea de comando npm run dev, vista anteriormente. A continuación, se muestra en la figura el resultado de la terminal del VS Code:

    p.mt-5(data-aos="fade-up" style="padding-left: 12px;border-left:4px #4DD0E1 solid;") #[strong Figura 11] Respuesta de la terminal

    figure.mt-4.col-md-5.m-auto
      img.image_floating(src="@/assets/curso/tema1/8.svg" data-aos="fade-right")

    figcaption.col-md-5.mt-4(data-aos="fade-left") Nota. Respuesta conexión a base de datos funcionando.

    br
    .mt-5.titulo-segundo#t_1_5
      h2 1.5 Configuración de las rutas del proyecto con Node.js

    p(data-aos="fade-up") El siguiente paso es configurar las rutas o URL por donde se van a enviar o recibir los datos, por lo que se crea un archivo llamado empleado.route.js dentro de la carpeta routes (puede descargar el contenido de estas instrucciones en el archivo empleado.route.js disponible en la carpeta anexos). En este primer apartado lo que se quiere es revisar en primera instancia es el funcionamiento de las rutas, por lo que a manera de prueba se tiene el código que se muestra en la siguiente figura:

    .col-md-4.mt-4(data-aos="fade-right")
        a.anexo.mb-4(:href="obtenerLink('downloads/empleado.route.js')" target="_blank" download)
          .anexo__icono
            img(src="@/assets/template/icono-zip.svg")
          .anexo__texto
            p Descargar archivo
            p #[strong empleado.route.js]

    p.mt-5(data-aos="fade-up" style="padding-left: 12px;border-left:4px #4DD0E1 solid;") #[strong Figura 12] Estructura ejemplo empleado.route.js

    .mt-4.p-5.col-md-10(style="background-color:#21214B" data-aos="fade-up")
      p.text-white.mb-0 /**
      p.text-white.mb-0 * Vamos a crear rutas del servidor
      p.text-white.mb-0 * creamos un módulo por eso utilizamos express
      p.text-white.mb-0 * vamos a utilizar como nuestra rest api para 
      p.text-white.mb-0 * enviar y recibir datos en formato json
      p.text-white.mb-0 */
      p.text-white.mb-0 const express = require(‘express’);
      p.text-white.mb-0 const router = express.Router();
      p.text-white.mb-0 /* generamos un ejemplo cuando le soliciten 
      p.text-white.mb-0 algo al servidor por el método GET **/  
      p.text-white.mb-3 router.get(‘/‘, (req, res) => {
      p.text-white.mb-0(style="padding-left:15px;") res.json({
      p.text-white.mb-0(style="padding-left:25px;") status: ‘API REST funcionando’
      p.text-white.mb-0(style="padding-left:15px;") });
      p.text-white.mb-0 })  
      p.text-white.mb-0 module.exports = router;

    figcaption.mt-3.col-md-7(data-aos="fade-up") Nota. Código completo archivo empleado.route.js para comprobar el funcionamiento de las rutas.

    p.mt-5(data-aos="fade-up") De manera adicional se puede observar el archivo index.js, en el cual se establece la ruta por donde se van a recibir o enviar los datos desde el servidor que para el caso de estudio será #[strong http://localhost:3000/api/empleados], de tal forma se observa que para la definición de esta ruta se hace necesario requerir el archivo empleado.routes.js ejecutando la siguiente instrucción:

    p.mt-5
      span.h4.p-3.text-white.text-center(data-aos="fade-up" style="background-color:#21214B;border-radius:10px;") app.use(‘/api/empleados’,require(‘./routes/empleado.routes’));

    p.mt-5(data-aos="fade-up") Al hacer el llamado en el servidor se vería de la siguiente manera:

    p.mt-5(data-aos="fade-up" style="padding-left: 12px;border-left:4px #4DD0E1 solid;") #[strong Figura 13] Respuesta del servidor

    figure.mt-4.col-md-6.m-auto
      img.image_floating(src="@/assets/curso/tema1/9.svg" data-aos="fade-right")

    figcaption.mt-4.col-md-3(data-aos="fade-left")  Nota. Vista desde un navegador.

    p.mt-5(data-aos="fade-up") Ya visto un ejemplo del funcionamiento de las rutas es necesario comprender su comportamiento, por lo que cada solicitud debe ir asociada a una ruta, y esta a su vez a un intercambio de información o de datos, es decir, de interacción con la BD. En ese sentido, es más que necesario la construcción del modelo empleado.js con datos específicos para los empleados dentro de la carpeta models (puede descargar el contenido de estas instrucciones en el archivo empleado.js disponible en la carpeta anexos).

    .col-md-4.mt-4(data-aos="fade-right")
        a.anexo.mb-4(:href="obtenerLink('downloads/empleado.js')" target="_blank" download)
          .anexo__icono
            img(src="@/assets/template/icono-zip.svg")
          .anexo__texto
            p Descargar archivo
            p #[strong empleado.js]

    p.mt-5(data-aos="fade-up" style="padding-left: 12px;border-left:4px #4DD0E1 solid;") #[strong Figura 14] Estructura empleado.js 

    .mt-4.p-5.col-md-10(style="background-color:#21214B" data-aos="fade-up")
      p.text-white.mb-0 const mongoose = require(‘mongoose’);
      p.text-white.mb-3 const {Schema} = mongoose;
      p.text-white.mb-0 const EmpleadoSchema = new Schema({
      p.text-white.mb-0(style="padding-left:25px")    name: {type:String, require:true},
      p.text-white.mb-0(style="padding-left:25px")    position: {type:String, require:true},
      p.text-white.mb-0(style="padding-left:25px")    office: {type:String, require:true},
      p.text-white.mb-0(style="padding-left:25px")    salary: {type:Number, require:true},
      p.text-white.mb-3 });
      p.text-white.mb-0 module.exports = mongoose.model(‘Empleado’, EmpleadoSchema);

    figcaption.mt-3.col-md-4(data-aos="fade-left") Nota. Código completo archivo empleado.js.

    p.mt-5(data-aos="fade-up") Se requiere Mongoose y se almacena en una constante denominada de la misma forma, que se utilizará para definir los esquemas de datos, para lo cual se empiezan a modelar con su información, nombre, cargo, entre otros. En ese sentido, Mongoose le dice a MongoDB cómo va a lucir la estructura de empleados.

    br
    .mt-5.titulo-segundo#t_1_6
      h2 1.6 Desarrollo de controladores para la API REST

    p(data-aos="fade-up") Una de las mejores prácticas para estructurar una aplicación cuando va en crecimiento es el uso de los controladores. Estos se encargan de definir los métodos y acciones que necesitan las rutas. Por lo tanto, se crea el archivo empleado.controller.js dentro de la carpeta controllers (puede descargar el contenido de estas instrucciones en el archivo empleado.controller.js disponible en la carpeta anexos).

    .col-md-4.mt-4(data-aos="fade-right")
        a.anexo.mb-4(:href="obtenerLink('downloads/empleado.controller.js')" target="_blank" download)
          .anexo__icono
            img(src="@/assets/template/icono-zip.svg")
          .anexo__texto
            p Descargar archivo
            p #[strong empleado.controller.js]

    p.mt-5(data-aos="fade-up" style="padding-left: 12px;border-left:4px #4DD0E1 solid;") #[strong Figura 15] Estructura controlador empleado

    .mt-4.p-5.col-md-10(style="background-color:#21214B" data-aos="fade-up")
      p.text-white.mb-0 /**
      p.text-white.mb-0 * Se coloca el controlador como un objeto y luego se exporta como
      p.text-white.mb-0 * se requiere primero el modelo empleado
      p.text-white.mb-3 */
      p.text-white.mb-0 const Empleado = require(‘../models/empleado’);
      p.text-white.mb-3 const empleadoCtrl = {};
      p.text-white.mb-0 /**
      p.text-white.mb-3  * DEFINO LOS MÉTODOS  */
      p.text-white.mb-0 //Obtener todos los empleados
      p.text-white.mb-0 empleadoCtrl.getEmpleados = async (req, res) => {
      p.text-white.mb-0(style="padding-left:25px")   const empleados = await Empleado.find();
      p.text-white.mb-0(style="padding-left:25px")   res.json(empleados);   
      p.text-white.mb-3 }                    
      p.text-white.mb-3 // Crear empleados
      p.text-white.mb-0 empleadoCtrl.createEmpleados = async (req, res) => { 
      p.text-white.mb-0(style="padding-left:25px")    const empleado = new Empleado(req.body);
      p.text-white.mb-0(style="padding-left:25px")    await empleado.save();    
      p.text-white.mb-0(style="padding-left:25px")    res.json({
      p.text-white.mb-0(style="padding-left:35px")        ‘status’: ‘Empleado guardado’
      p.text-white.mb-0(style="padding-left:25px")    });
      p.text-white.mb-3 }
      p.text-white.mb-0 //Conseguir un único empleado 
      p.text-white.mb-0 empleadoCtrl.getUnicoEmpleado = async (req, res) => {     
      p.text-white.mb-0(style="padding-left:25px") const empleadoUnico = await Empleado.findById(req.params.id); 
      p.text-white.mb-0(style="padding-left:25px") res.json(empleadoUnico);
      p.text-white.mb-3 }
      p.text-white.mb-0 //Actualizar empleado
      p.text-white.mb-0 empleadoCtrl.editarEmpleado = async (req, res) =>  {
      p.text-white.mb-0(style="padding-left:25px") const { id } = req.params; 
      p.text-white.mb-0(style="padding-left:25px") const emepleadoEdit = {  
      p.text-white.mb-0(style="padding-left:35px")     name: req.body.name,
      p.text-white.mb-0(style="padding-left:35px")     position: req.body.position,
      p.text-white.mb-0(style="padding-left:35px")     office: req.body.office,
      p.text-white.mb-0(style="padding-left:35px")     salary: req.body.salary
      p.text-white.mb-0(style="padding-left:25px") };
      p.text-white.mb-0(style="padding-left:25px") await Empleado.findByIdAndUpdate(id, {$set: emepleadoEdit}, {new:  true}); 
      p.text-white.mb-0(style="padding-left:25px") res.json({status: 'Empleado Actualizado'});
      p.text-white.mb-3 }
      p.text-white.mb-0 // Eliminar empleado 
      p.text-white.mb-0 empleadoCtrl.eliminarEmpleado = async (req, res) => {
      p.text-white.mb-0(style="padding-left:35px") await Empleado.findByIdAndDelete(req.params.id);
      p.text-white.mb-0(style="padding-left:35px") res.json({status: 'Empleado Eliminado'});
      p.text-white.mb-3 }
      p.text-white.mb-0 //exporto el módulo
      p.text-white.mb-0 module.exports = empleadoCtrl;

    figcaption.mt-3.col-md-5(data-aos="fade-up") Nota. Código completo archivo empleado.controller.js.

    div.mt-5
      p(data-aos="fade-up") Se inicia explicando de manera sucinta el código presentado anteriormente. En primera instancia se requiere el modelo realizado denominado empleado.js, por lo cual se almacena en una constante Empleado.

      p.mt-3(data-aos="fade-up") Por otra parte, en cada uno de los métodos se utilizan funciones nativas y nuevas de JavaScript. En ese sentido, es necesario recordar que antes se utilizaban las funciones de tipo callback, que existían como parámetros de los métodos, después aparecieron las promesas con la función then, pero ahora existen funciones que están dedicadas a realizar de manera más eficiente el procesamiento de los datos y mejorar los tiempos de respuesta como lo son #[strong async] y #[strong await] que hacen parte de la última versión de JavaScript.

      p.mt-3(data-aos="fade-up") Para el método de #[strong obtener empleados] se utiliza la función async, la cual entrega en formato json todo lo que encuentre de empleados. Por eso se utiliza la función await, porque se espera que se vaya a tardar un poco en esta actividad de buscar. En ese sentido, se utiliza uno de los métodos intrínsecos del modelo Empleado que para este caso es find().

      p.mt-3(data-aos="fade-up") Además, el método de crear empleado tiene una naturaleza similar al anterior, solo que en este método se crea una nueva instancia de empleado #[strong new Empleado]. De esta forma lo que seguiría es guardar ese nuevo registro con #[strong save()]. Es importante anotar que hasta el momento no se ha creado la base de datos en MongoDB, pero apenas se almacena un registro se crea la base de datos.

      p.mt-3(data-aos="fade-up") Para el método de editar empleado presenta una sintaxis interesante, en primer lugar se escribe de otra forma para capturar el id del usuario que se quiere actualizar { id }, además crea una constante #[strong empleadoEdit] para pasarle los datos traídos del cliente y finalmente se utiliza await, para dar una espera en la acción de encontrar por id y actualizar a través de la función set, que se utilizará para modificar los datos en última instancia.

      p.mt-3(data-aos="fade-up") Finalmente, lo que se hace al crear un módulo es exportarlo para que sea utilizado en cualquier parte de la aplicación. A continuación, se definen las rutas, por lo que se configura y desarrolla la lógica de esta sección en el archivo empleados.routes.js dentro de la carpeta routes (puede descargar el contenido de estas instrucciones en el archivo empleados.routes.js disponible en la carpeta anexos).

    p.mt-5(data-aos="fade-up" style="padding-left: 12px;border-left:4px #4DD0E1 solid;") #[strong Figura 16] Código de la ruta empleado

    .mt-4.p-5.col-md-10(style="background-color:#21214B" data-aos="fade-up")
      p.text-white.mb-0 /**
      p.text-white.mb-0 *
      p.text-white.mb-0 * creamos un módulo por eso utilizamos express
      p.text-white.mb-3 */
      p.text-white.mb-0 const express = require(‘express’);
      p.text-white.mb-0 const router = express.Router();
      p.text-white.mb-3 const empleadoCtrl = require(‘../controllers/empleado.controller’);
      p.text-white.mb-0 router.get(‘/‘, empleadoCtrl.getEmpleados); // Rutas más limpias (obtener empleados)
      p.text-white.mb-0 router.post(‘/‘, empleadoCtrl.createEmpleados);//guardar
      p.text-white.mb-0 router.get(‘/:id’, empleadoCtrl.getUnicoEmpleado);// obtiene un único empleado
      p.text-white.mb-0 router.put(‘/:id’,empleadoCtrl.editarEmpleado);   //Actualizar datos (uno a la vez)
      p.text-white.mb-3 router.delete(‘/:id’, empleadoCtrl.eliminarEmpleado);
      p.text-white.mb-0 module.exports = router;

    figcaption.mt-3.col-md-4(data-aos="fade-up")  Nota. Código completo archivo empleados.routes.js.

    p.mt-5(data-aos="fade-up") Con respecto al código anterior se observa que se requiere el uso del controlador, por lo que se almacena en una constante llamada empleadoCtrl, y de esta forma se pueden utilizar todos los métodos de este, es decir, la gestión o CRUD sobre el empleado.

    p.mt-3(data-aos="fade-up") En ese sentido, se observa que el objeto router llama a cada uno de los métodos por defecto de petición HTTP como GET, POST, PUT, entre otros, asociados a los métodos realizados con el controlador. De manera que se tienen rutas mucho más limpias y apoyadas con la buena práctica del uso del controlador.

    br
    .mt-5.titulo-segundo#t_1_7
      h2 1.7 Realización de pruebas de la API REST con Postman

    p(data-aos="fade-up") Una vez finalizada la construcción tanto del modelo, controlador y rutas, se dispone a generar las pruebas respectivas para evaluar el funcionamiento de la API REST; por lo tanto, se utilizará la herramienta Postman. En la sección material complementario de este documento encontrará la guía para su instalación.

    p.mt-3(data-aos="fade-up") Se inicia insertando datos, por lo que utilizará el método POST, el cual llamará a la ruta para crear empleados.

    p.mt-5(data-aos="fade-up" style="padding-left: 12px;border-left:4px #4DD0E1 solid;") #[strong Figura 17] Pruebas con Postman

    figure.mt-4.col-md-7.m-auto
      img.image_floating(src="@/assets/curso/tema1/10.svg" data-aos="fade-right")

    figcaption.mt-3.col-md-4(data-aos="fade-up") Nota. Parámetros y respuesta usando Postman.

    p.mt-5(data-aos="fade-up") En la figura anterior se pueden apreciar los datos que se envían al servidor, dado que Postman permite realizar esa emulación del cliente. Los datos que se envían están acordes al esquema definido en el modelo de empleado.js, como lo son name, position, office y salary. La respuesta en consola, que se programa como status es que el Empleado ha sido guardado.

    p.mt-3(data-aos="fade-up") En este orden de ideas, es necesario revisar la base de datos y verificar que efectivamente se ha guardado la información y si realmente MongoDB la ha creado.

    p.mt-3(data-aos="fade-up") En la siguiente figura se presenta la imagen que representa la interfaz gráfica de MongoDB y el resultado de verificación de la creación de la base de datos.

    p.mt-5(data-aos="fade-up" style="padding-left: 12px;border-left:4px #4DD0E1 solid;") #[strong Figura 18] Panel MongoDB

    figure.mt-4.col-md-5.m-auto
      img.image_floating(src="@/assets/curso/tema1/11.svg" data-aos="fade-right")

    figcaption.mt-3.col-md-6(data-aos="fade-up") Nota. Panel de MongoDB que muestra la base de datos empleados creada.

    p.mt-5(data-aos="fade-up") La siguiente figura muestra el resultado de la verificación de un registro de empleado almacenado en MongoDB.

    p.mt-5(data-aos="fade-up" style="padding-left: 12px;border-left:4px #4DD0E1 solid;") #[strong Figura 19]  Registro de empleado almacenado en MongoDB 

    figure.mt-4.col-md-8.m-auto
      img.image_floating(src="@/assets/curso/tema1/12.svg" data-aos="fade-right")

    figcaption.mt-3.col-md-6(data-aos="fade-up") Nota. Verificación en MongoDB de información guardada.

    p.mt-5(data-aos="fade-up") Como es evidente la API REST funciona correctamente, se ha creado la base de datos empleado y se tiene almacenado el primer registro del empleado Santiago. De igual forma, se evidencia para los demás métodos  HTTP, GET, PUT o DELETE que también funcionan, por lo cual se realiza la invitación a probar el API con Postman.

    p.mt-3(data-aos="fade-up") Hasta este punto se ha realizado el desarrollo del Backend, por lo que hasta el momento se tiene la base de datos lista para poder generar ahora la construcción del Front-end, el cual será el que “dialogará” con el servidor. De esta forma se presenta a continuación una figura que ilustra la estructura general del proyecto.

    p.mt-5(data-aos="fade-up" style="padding-left: 12px;border-left:4px #4DD0E1 solid;") #[strong Figura 20] Resumen estructura del proyecto web

    figure.mt-4
      img.image_floating(src="@/assets/curso/tema1/13.svg" data-aos="fade-right")

    figcaption.mt-3.col-md-5(data-aos="fade-up")  Nota. Esquema de comunicación Backend – Front-end.


</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicador: true,
    modal1: false,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
  methods: {},
}
</script>
<style lang="sass">
.image_floating
  filter: drop-shadow(5px 14px 5px rgba(0,0,0,.25))
.titulo-principal__numero span
  color: #31326F !important
.titulo-principal__numero
  background-color: #FFCA28 !important

@keyframes float
  0%
    filter: drop-shadow(0 5px 15px rgba(0,0,0,0.2))
    transform: translatey(0px)
  50%
    filter: drop-shadow(26px 9px 1px rgba(0, 0, 0, 0.09))
    transform: translatey(-20px)
  100%
    filter: drop-shadow(0 5px 15px rgba(0,0,0,0.2))
    transform: translatey(0px)
.imagen_flotante_animada
  filter: drop-shadow(0 5px 15px rgba(0,0,0,0.2))
  transform: translatey(0px)
  animation: float 6s ease-in-out infinite
.caja_flotante
  -webkit-box-shadow: -11px 10px 0px -1px #f3f3f3
  -moz-box-shadow: -11px 10px 0px -1px #f3f3f3
  box-shadow: -11px 10px 0px -1px #f3f3f3
.caja_escalada_hover
  transition: transform 0.5s linear
  -o-transition: transform 0.5s linear
  -ms-transition: transform 0.5s linear
  -moz-transition: transform 0.5s linear
  -webkit-transition: transform 0.5s linear
.caja_escalada_hover:hover
  transition: transform .5s ease
  transform: scale(1.06)
.fade-in-image
  animation: fadeIn 3s
  -webkit-animation: fadeIn 3s
  -moz-animation: fadeIn 3s
  -o-animation: fadeIn 3s
  -ms-animation: fadeIn 3s
@keyframes fadeIn
  0%
    opacity: 0
  100%
    opacity: 1
.tarjeta--azul
  background-color: #DBFBFF !important
.tarjeta-avatar-b > img
  min-width: 16%
  max-width: 16%
  top: -9%
.caja_flotante_azul
  box-shadow: -11px 10px 0px -1px #f1fcfd
.caja_flotante_rosada
  box-shadow: -11px 10px 0px -1px #fff6f6
.cajon.color-acento-botones
  background-color: #FFE7C4
.bloque-texto-a.color-secundario
  background-color: #F3F9FF !important
.title__tab_1 .pre
  background-color: #FFCA28
  padding: 1rem 1.5rem 1rem 1.5rem
  border-radius: 50%
  color: inherit
  font-weight: bold
  font-size: 1.3rem
  position: relative
  left: calc(100% - 147%)
  top: 2.3rem
.title__tab_1 .title
 background-color: #4DD0E1
 padding: 1rem 1rem 1rem 2rem
 border-radius: 30px
.title__tab_1
  transition: transform 0.4s linear
  -o-transition: transform 0.4s linear
  -ms-transition: transform 0.4s linear
  -moz-transition: transform 0.4s linear
  -webkit-transition: transform 0.4s linear
.title__tab_1:hover
  transition: transform .4s ease
  transform: scale(1.1)
.nav-link
  border: none !important
.nav-link.active .title__tab_1 .pre

.nav-link.active .title__tab_1 .title
  color: white
  background-color: #1565C0
</style>
