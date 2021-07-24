<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Construcción del Front-end de la aplicación web

    .bloque-texto-a.color-secundario.mb-5.caja_flotante_azul(data-aos="fade-up")
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          figure.p-5
            img.imagen_flotante_animada(src="@/assets/curso/tema2/1.svg")
        .col-lg-8
          .bloque-texto-a__texto.p-4.caja_escalada_hover
            p Para esta sección se plantea generar una sola vista, la cual corresponde al formulario de registro de empleados, por esta razón no es necesario generar sketch o maquetación para evaluar la novación entre distintos componentes. No obstante, se emplean buenas prácticas de diseño amparadas en las técnicas y tecnologías como Materialize, que dará alcance a varias reglas de estilo para los sistemas interactivos de software.

    p.mt-5(data-aos="fade-up") En la siguiente figura se muestra una representación gráfica de ejemplo de un Front-end.

    p.mt-5(data-aos="fade-up" style="padding-left: 12px;border-left:4px #4DD0E1 solid;") #[strong Figura 21] Ejemplo interfaz gráfica

    figure.mt-5.col-md-9.m-auto(data-aos="fade-up")
      img.image_floating(src="@/assets/curso/tema2/2.svg")
    figcaption.mt-4.col-md-5(data-aos="fade-up") Nota. Ejemplo interfaz gráfica Front-end.

    br
    br
    .mt-5.titulo-segundo#t_2_1
      h2 2.1 Instalación y configuración de AngularJS

    p(data-aos="fade-up") Se inicia instalando AngularJS a través de Angular CLI, que permite generar una plataforma para la creación de proyectos Angular utilizando el comando ng, por lo tanto, para la instalación se recurre a la línea de comando npm. El paso a paso de la instalación y para mayor información se puede encontrar en la sección de material complementario de este documento con el nombre de Guía de instalación Angular CLI. Para iniciar la instalación, se ejecuta la siguiente instrucción, su salida se puede evidenciar en la siguiente figura.

    p.mt-5
      span.h4.p-3.text-white.text-center(data-aos="fade-up" style="background-color:#21214B;border-radius:10px;") npm install -g @angular/cli

    p.mt-5(data-aos="fade-up" style="padding-left: 12px;border-left:4px #4DD0E1 solid;") #[strong Figura 22]  Instalación de Angular CLI

    figure.mt-4.col-md-9.m-auto
      img.image_floating(data-aos="fade-right" src="@/assets/curso/tema2/3.svg")
    figcaption.mt-3.col-md-5(data-aos="fade-up")  Nota. Terminal de VS Code. Instalación de Angular CLI.

    p.mt-5(data-aos="fade-up") Ahora, se inicia un proyecto de Angular llamado Front-end, por lo que desde la consola de comandos se escribe:

    p.mt-5
      span.h4.p-3.text-white.text-center(data-aos="fade-up" style="background-color:#21214B;border-radius:10px;") ng new frontend

    p.mt-5(data-aos="fade-up") El resultado en la estructura de directorios del proyecto se muestra en la siguiente figura:

    p.mt-5(data-aos="fade-up" style="padding-left: 12px;border-left:4px #4DD0E1 solid;") #[strong Figura 23] Estructura de directorios del proyecto

    figure.mt-4.col-md-5.m-auto
      img.image_floating(data-aos="fade-right" src="@/assets/curso/tema2/4.svg")
    figcaption.mt-3.col-md-5(data-aos="fade-up")  Nota. Estructura de directorios del proyecto del Front-end.

    p.mt-5(data-aos="fade-up") A continuación, se debe ingresar a la carpeta del Front-end e iniciar el servidor digitando la terminal del VS Code de la siguiente línea de comandos:

    p.mt-5
      span.h4.p-3.text-white.text-center(data-aos="fade-up" style="background-color:#21214B;border-radius:10px;") ng serve

    p.mt-5(data-aos="fade-up") Es importante recordar que para ingresar por la terminal a la carpeta de Front-end se hace con el comando cd, es decir, #[strong cd Frontend/]

    p.mt-3(data-aos="fade-up") Una vez dentro de la carpeta #[strong Front-end] se ejecuta el comando #[strong ng serve], por lo que ejecuta un servidor de desarrollo para Angular. En ese sentido, el servidor se inicializa en el puerto 4200 (http://localhost:4200/), como se muestra en la siguiente figura:

    p.mt-5(data-aos="fade-up" style="padding-left: 12px;border-left:4px #4DD0E1 solid;") #[strong Figura 24] Estado servidor Front-end

    figure.mt-4.col-md-11.m-auto
      img.image_floating(data-aos="fade-right" src="@/assets/curso/tema2/5.svg")
    figcaption.mt-3.col-md-5(data-aos="fade-up") Nota. Verificación ejecución servidor en el puerto 4200.

    br
    .mt-5.titulo-segundo#t_2_2
      h2 2.2 Generación de código con ng

    p(data-aos="fade-up") Después de iniciado el servidor  Angular, se revisa la estructura de directorios de este framework, que, aunque son muchos archivos, únicamente es necesario concentrarse en la carpeta que se encuentra en la ruta frontend/src/app, de esta forma en la carpeta app se realizará todo el código que se necesita para el proyecto. 

    p.mt-3(data-aos="fade-up") De manera adicional, para dar coherencia al proyecto, dentro de la carpeta app se crean 3 carpetas más, que son models, services y components para tener definido el proyecto, tal como se muestra en la siguiente figura:

    p.mt-5(data-aos="fade-up" style="padding-left: 12px;border-left:4px #4DD0E1 solid;") #[strong Figura 25] Estructura de directorios

    figure.mt-4.col-md-4.m-auto
      img.image_floating(data-aos="fade-right" src="@/assets/curso/tema2/6.svg")
    figcaption.mt-3.col-md-3(data-aos="fade-up") Nota. Proyecto Front-end.

    p.mt-5(data-aos="fade-up") Haciendo uso de una de las características del framework se genera el código ingresando a las carpetas que se acaban de crear y en cada una se ejecutan las siguientes líneas de código respectivamente:

    .cajon.color-acento-botones.p-5.mt-5.caja_flotante_rosada
      ul.lista-ul.lista__1
        li(data-aos="fade-up")
          i.fas.fa-check
          |  Dentro la carpeta components se genera un componente llamado empleados con Angular CLI:
        li
          p.mt-4
            span.h4.p-3.text-white.text-center(data-aos="fade-up" style="background-color:#21214B;border-radius:10px;") ng g c empleados

        li.mt-4(data-aos="fade-up")
          i.fas.fa-check
          |  Dentro la carpeta models se crea la clase empleado con:
        li
          p.mt-4
            span.h4.p-3.text-white.text-center(data-aos="fade-up" style="background-color:#21214B;border-radius:10px;") ng g class empleado

        li.mt-4(data-aos="fade-up")
          i.fas.fa-check
          |  Dentro de la carpeta services se crea un servicio llamado empleado con la siguiente línea:
        li
          p.mt-4
            span.h4.p-3.text-white.text-center(data-aos="fade-up" style="background-color:#21214B;border-radius:10px;") ng g s empleado

    p.mt-5(data-aos="fade-up") Para mayor precisión con relación a las instrucciones ejecutadas, en las siguientes figuras se muestra la evidencia de las operaciones realizadas:

    p.mt-5(data-aos="fade-up" style="padding-left: 12px;border-left:4px #4DD0E1 solid;") #[strong Figura 26] Salida terminal VS Code

    figure.mt-4.col-md-11.m-auto
      img.image_floating(data-aos="fade-right" src="@/assets/curso/tema2/7.svg")
    figcaption.mt-3.col-md-6(data-aos="fade-up")  Nota. Ejemplo de generación de código a través de la terminal de VS Code.

    p.mt-5(data-aos="fade-up" style="padding-left: 12px;border-left:4px #4DD0E1 solid;") #[strong Figura 27] Componentes generados automáticamente

    figure.mt-4.col-md-5.m-auto
      img.image_floating(data-aos="fade-right" src="@/assets/curso/tema2/8.svg")
    figcaption.mt-3.col-md-4(data-aos="fade-up") Nota. Representación de componentes generados.

    br
    .mt-5.titulo-segundo#t_2_3
      h2 2.3 Incorporación de Materialize al proyecto web

    p(data-aos="fade-up") Se incorpora Materialize al proyecto por medio de la inclusión de los CDN (red de distribución de contenidos) de hojas de estilos, JavaScript e iconos en el documento index.html del Front-end, por lo que la ruta al archivo es FrontEnd/src/index.html (puede descargar el contenido de estas instrucciones en el archivo index.html disponible en la carpeta anexos). En la figura 28 puede ver este proceso.

    .col-md-4.mt-4(data-aos="fade-right")
        a.anexo.mb-4(:href="obtenerLink('downloads/index.html')" target="_blank" download)
          .anexo__icono
            img(src="@/assets/template/icono-zip.svg")
          .anexo__texto
            p Descargar archivo
            p #[strong index.html]

    p.mt-5(data-aos="fade-up" style="padding-left: 12px;border-left:4px #4DD0E1 solid;") #[strong Figura 28] Incorporación de los CDN de Materialize

    .mt-4.p-5.col-md-11(style="background-color:#21214B" data-aos="fade-up")
      p.text-white.mb-0 &lt;!doctype html&gt;
      p.text-white.mb-0 &lt;html lang=“en”&gt;
      p.text-white.mb-0 &lt;head&gt;
      p.text-white.mb-0(style="padding-left:15px;") &lt;meta charset=“utf-8”&gt;
      p.text-white.mb-0(style="padding-left:15px;") &lt;title&gt;FrontEnd&lt;/title&gt;
      p.text-white.mb-0(style="padding-left:15px;") &lt;base href=“/“&gt;
      p.text-white.mb-0(style="padding-left:15px;") &lt;meta name=“viewport” content=“width=device-width, initial-scale=1”&gt;
      p.text-white.mb-0(style="padding-left:15px;") &lt;link rel=“icon” type=“image/x-icon” href=“favicon.ico”&gt;
      p.text-white.mb-0(style="padding-left:15px;") &lt;link rel=“stylesheet” href=“https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css”&gt;
      p.text-white.mb-0(style="padding-left:15px;") &lt;link href=“https://fonts.googleapis.com/icon?family=Material+Icons” rel=“stylesheet”&gt;
      p.text-white.mb-0 &lt;/head&gt;
      p.text-white.mb-0 &lt;body&gt;
      p.text-white.mb-0(style="padding-left:15px;") &lt;app-root&gt;&lt;/app-root&gt;
      p.text-white.mb-3(style="padding-left:15px;") &lt;script src=“https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js”&gt;&lt;/script&gt;
      p.text-white.mb-0 &lt;/body&gt;
      p.text-white.mb-0 &lt;/html&gt;

    figcaption.mt-3.col-md-4(data-aos="fade-up") Nota. Código completo archivo index.html.

    br
    .mt-5.titulo-segundo#t_2_4
      h2 2.4 Configuración de app.component.html

    p(data-aos="fade-up") Ahora se inicia con la modificación del archivo app.component.html, dado que en este archivo se llaman los componentes de la aplicación que para el caso de estudio propuesto se denomina empleados. Este cambio se ilustra a continuación (puede descargar el contenido de estas instrucciones en el archivo app.component.html disponible en la carpeta anexos):

    .col-md-4.mt-4(data-aos="fade-right")
        a.anexo.mb-4(:href="obtenerLink('downloads/app.component.html')" target="_blank" download)
          .anexo__icono
            img(src="@/assets/template/icono-zip.svg")
          .anexo__texto
            p Descargar archivo
            p #[strong app.component.html]

    p.mt-5(data-aos="fade-up" style="padding-left: 12px;border-left:4px #4DD0E1 solid;") #[strong Figura 29] Estructura app.component.html

    .mt-4.p-5.col-md-11(style="background-color:#21214B" data-aos="fade-up")
      p.text-white.mb-0  &lt;nav class=“nav-wrapper blue”&gt;
      p.text-white.mb-0(style="padding-left:15px")   &lt;div class=“container”&gt;
      p.text-white.mb-0(style="padding-left:15px")     &lt;a href=“/“ class=“brand-logo”&gt;GESTIÓN DE EMPLEADOS&lt;/a&gt;
      p.text-white.mb-3(style="padding-left:15px")   &lt;/div&gt;
      p.text-white.mb-3 &lt;/nav&gt;
      p.text-white.mb-0 &lt;div class=“container p-4”&gt;
      p.text-white.mb-3(style="padding-left:15px")   &lt;app-empleados&gt;&lt;/app-empleados&gt;
      p.text-white.mb-0 &lt;/div&gt;

    figcaption.col-md-5.mt-3(data-aos="fade-up")  Nota. Código completo archivo app.component.html.

    p.mt-5(data-aos="fade-up") En la figura anterior se observa que se adiciona la etiqueta &lt;app-empleados&gt;, indicando que se hará uso de ese componente.

    br
    .mt-5.titulo-segundo#t_2_5
      h2 2.5 Configuración de los módulos app.modules.ts

    p(data-aos="fade-up") A continuación, se configura uno de los archivos más importantes del proyecto, y es por el cual se cargan los módulos de la aplicación, por ello, es necesario entender la naturaleza de la aplicación que se está desarrollando, porque así se definirán qué módulos son necesarios para el óptimo funcionamiento de la aplicación.

    p.mt-3(data-aos="fade-up") La aplicación caso de estudio será la adición de empleados utilizando un API REST, por lo que es evidente el uso de un formulario en la interfaz y además de la comunicación que debe tener el Front-end con el servidor. Por lo tanto, se cargan los módulos de formularios y de cliente HTTP en el archivo app.modules.ts (puede descargar el contenido de estas instrucciones en el archivo app.module.ts disponible en la carpeta anexos), este proceso se muestra en la siguiente figura.

    .col-md-4.mt-4(data-aos="fade-right")
        a.anexo.mb-4(:href="obtenerLink('downloads/app.modules.ts')" target="_blank" download)
          .anexo__icono
            img(src="@/assets/template/icono-zip.svg")
          .anexo__texto
            p Descargar archivo
            p #[strong app.modules.ts]

    p.mt-5(data-aos="fade-up" style="padding-left: 12px;border-left:4px #4DD0E1 solid;") #[strong Figura 30] Código del archivo app module

    .mt-4.p-5.col-md-11(style="background-color:#21214B" data-aos="fade-up")
      p.text-white.mb-0 import { NgModule } from ‘@angular/core’;
      p.text-white.mb-0 import { BrowserModule } from ‘@angular/platform-browser’;
      p.text-white.mb-0 import {FormsModule} from ‘@angular/forms’; 
      p.text-white.mb-3 import { HttpClientModule } from ‘@angular/common/http’;
      p.text-white.mb-0 import { AppRoutingModule } from ‘./app-routing.module’;
      p.text-white.mb-0 import { AppComponent } from ‘./app.component’;
      p.text-white.mb-3 import { EmpleadosComponent } from ‘./components/empleados/empleados.component’;
      p.text-white.mb-0 @NgModule({
      p.text-white.mb-0(style="padding-left:25px")   declarations: [
      p.text-white.mb-0(style="padding-left:35px")     AppComponent,
      p.text-white.mb-0(style="padding-left:35px")     EmpleadosComponent
      p.text-white.mb-0(style="padding-left:25px")   ],
      p.text-white.mb-0(style="padding-left:25px")   imports: [
      p.text-white.mb-0(style="padding-left:35px")     BrowserModule,
      p.text-white.mb-0(style="padding-left:35px")     FormsModule,
      p.text-white.mb-0(style="padding-left:35px")     AppRoutingModule,
      p.text-white.mb-3(style="padding-left:35px")     HttpClientModule
      p.text-white.mb-0(style="padding-left:25px")   ],
      p.text-white.mb-0(style="padding-left:25px")   providers: [],
      p.text-white.mb-0(style="padding-left:25px")   bootstrap: [AppComponent]
      p.text-white.mb-0 })
      p.text-white.mb-0 export class AppModule { }

    figcaption.col-md-4.mt-3(data-aos="fade-up")   Nota. Código completo archivo app.module.ts


    br
    .mt-5.titulo-segundo#t_2_6
      h2 2.6 Configuración del modelo empleado.ts

    p(data-aos="fade-up") Una vez realizada la configuración en los módulos de la aplicación se inicia la construcción del modelo de la aplicación, por lo que se empieza la codificación dentro del archivo #[strong empleado.ts] cuya ruta es models/empleado.ts

    p.mt-3(data-aos="fade-up") Dentro de este archivo se define la estructura de datos que está asociada a lo que describió en el Backend. En la figura que aparece a continuación, se presenta el archivo empleado.ts (puede descargar el contenido de estas instrucciones en el archivo empleado.ts disponible en la carpeta anexos).

    .col-md-4.mt-4(data-aos="fade-right")
        a.anexo.mb-4(:href="obtenerLink('downloads/empleado.ts')" target="_blank" download)
          .anexo__icono
            img(src="@/assets/template/icono-zip.svg")
          .anexo__texto
            p Descargar archivo
            p #[strong empleado.ts]

    p.mt-5(data-aos="fade-up" style="padding-left: 12px;border-left:4px #4DD0E1 solid;") #[strong Figura 31] Código del modelo empleado

    .mt-4.p-5.col-md-11(style="background-color:#21214B" data-aos="fade-up")
      p.text-white.mb-0 export class Empleado {
      p.text-white.mb-0(style="padding-left:10px") constructor(_id = “”, name = “”, position = “”, office = “”, salary = 0) {
      p.text-white.mb-0(style="padding-left:35px")     this._id = _id;
      p.text-white.mb-0(style="padding-left:35px")     this.name = name;
      p.text-white.mb-0(style="padding-left:35px")     this.position = position;
      p.text-white.mb-0(style="padding-left:35px")     this.office = office;
      p.text-white.mb-0(style="padding-left:35px")     this.salary = salary;
      p.text-white.mb-3(style="padding-left:20px")   }
      p.text-white.mb-0(style="padding-left:10px") _id: string; // Sub guión id porque los datos van a venir de MOngodb
      p.text-white.mb-0(style="padding-left:10px") name: string;
      p.text-white.mb-0(style="padding-left:10px") position: string;
      p.text-white.mb-0(style="padding-left:10px") office: string;
      p.text-white.mb-3(style="padding-left:10px") salary: number;
      p.text-white.mb-0 }

    figcaption.mt-3.col-md-4(data-aos="fade-up")   Nota. Código completo archivo empleado.ts

    p.mt-5(data-aos="fade-up") En la figura anterior se definen los parámetros que serán utilizados para el envío de datos hacia el servidor; por lo tanto, se comienza con la inicialización de las variables a través de un constructor y con la declaración del tipo de datos de cada una.

    br
    .mt-5.titulo-segundo#t_2_7
      h2 2.7 Creación del servicio empleado.service.ts

    p(data-aos="fade-up") El objetivo general de este lado del proyecto es agregar esos datos ya definidos a la REST API, y se enfocan los esfuerzos a generar ese servicio, por lo que ahora se desarrollará el archivo empleado.service.ts. El servicio permite definir tan solo los métodos que pueden ser reutilizados en cualquier parte de la aplicación, en este caso son funciones que van a acceder para hacer la gestión sobre los datos como agregar, eliminar, editar, entre otros.

    p.mt-3(data-aos="fade-up") A continuación, se enseña el código del archivo empleado.service.ts (puede descargar el contenido de estas instrucciones en el archivo empleado.service.ts disponible en la carpeta anexos):

    .col-md-4.mt-4(data-aos="fade-right")
        a.anexo.mb-4(:href="obtenerLink('downloads/empleado.service.ts')" target="_blank" download)
          .anexo__icono
            img(src="@/assets/template/icono-zip.svg")
          .anexo__texto
            p Descargar archivo
            p #[strong empleado.service.ts]

    p.mt-5(data-aos="fade-up" style="padding-left: 12px;border-left:4px #4DD0E1 solid;") #[strong Figura 32] Código del servicio empleado

    .mt-4.p-5.col-md-11(style="background-color:#21214B" data-aos="fade-up")
      p.text-white.mb-0 import { Injectable } from ‘@angular/core’;
      p.text-white.mb-0 import { HttpClient } from ‘@angular/common/http’;
      p.text-white.mb-3 import { Empleado } from ‘../models/empleado’;
      p.text-white.mb-0 @Injectable({
      p.text-white.mb-0(style="padding-left:25px")   providedIn: ‘root’
      p.text-white.mb-0 })
      p.text-white.mb-3 export class EmpleadoService {
      p.text-white.mb-0(style="padding-left:25px")   selectedEmpleado: Empleado;
      p.text-white.mb-0(style="padding-left:25px")   empleados : Empleado[];
      p.text-white.mb-3(style="padding-left:25px")   readonly URL_API = ‘http://localhost:3000/api/empleados’;
      p.text-white.mb-0(style="padding-left:25px")   constructor(private http: HttpClient) {
      p.text-white.mb-0(style="padding-left:35px")     this.selectedEmpleado = new Empleado();
      p.text-white.mb-0(style="padding-left:35px")      this.empleados = [];
      p.text-white.mb-3(style="padding-left:25px")    }
      p.text-white.mb-0(style="padding-left:25px")   getEmpleados(){
      p.text-white.mb-0(style="padding-left:35px")     return this.http.get(this.URL_API);
      p.text-white.mb-3(style="padding-left:25px")   }
      p.text-white.mb-0(style="padding-left:25px")   PostEmpleado(Empleado:Empleado){
      p.text-white.mb-0(style="padding-left:35px")     return this.http.post(this.URL_API, Empleado);
      p.text-white.mb-3(style="padding-left:25px")   }
      p.text-white.mb-0(style="padding-left:25px")   putEmpleado(Empleado:Empleado){
      p.text-white.mb-0(style="padding-left:35px")     return this.http.put(this.URL_API +  `/${Empleado._id}`, Empleado);// 
      p.text-white.mb-3(style="padding-left:25px")   }
      p.text-white.mb-0(style="padding-left:25px")   deleteEmpleado(_id: string) { // Solo se necesita el id, no todo lo del empleado
      p.text-white.mb-3(style="padding-left:35px")    return this.http.delete(this.URL_API + `/${_id}`);// utilizamos el método delete
      p.text-white.mb-3(style="padding-left:25px")   }
      p.text-white.mb-0 }

    figcaption.col-md-5.mt-3(data-aos="fade-up")  Nota. Código completo archivo empleado.service.ts.

    p.mt-5(data-aos="fade-up") En la anterior figura se observa la importancia de haber definido primeramente el módulo #[strong empleado.ts], de esta forma se tiene una estructura establecida de datos, y es por eso que se importa el modelo, además también se ha dado alcance a la comunicación con el servidor a través de la modificación que se hizo en el archivo #[strong app.modules.ts] con la incorporación del módulo HTTPClient.

    p.mt-3(data-aos="fade-up") Por otra parte, se establece como atributo de solo lectura la URL de la API a la cual se conectará el cliente, en este caso es la URL del servidor ya realizado en la primera sección de este componente que es #[strong http://localhost:3000/empleados]

    p.mt-3(data-aos="fade-up") Ahora, se sigue con la definición de los métodos para la gestión de los datos de empleado, así que se generan 4 métodos como #[strong getEmpleados, PostEmpleados, putEmpleado, deleteEmpleado]. Para el caso de estudio se revisa el método de PostEmpleado que recibe como parámetro un objeto de tipo Empleado, así que el retorno es la adición de un nuevo empleado, (se envían todos los datos) a través del método HTTP como lo es POST.

    p.mt-5
      span.h4.p-3.text-white.text-center(data-aos="fade-up" style="background-color:#21214B;border-radius:10px;") return this.http.post(this.URL_API, Empleado);

    p.mt-5(data-aos="fade-up") Debe observar bien que en cada método se envíe la URL del servidor y los datos necesarios con relación al método.

    br
    .mt-5.titulo-segundo#t_2_8
      h2 2.8 Desarrollo del componente empleados.components.ts

    p(data-aos="fade-up") Ya definidos los servicios es necesario abordar la lógica del componente, por lo que ahora se debe enfocar los esfuerzos en el archivo empleados.components.ts, por lo que el archivo en mención se presenta a continuación (puede descargar el contenido de estas instrucciones en el archivo empleados.components.ts disponible en la carpeta anexos):

    .col-md-4.mt-4(data-aos="fade-right")
        a.anexo.mb-4(:href="obtenerLink('downloads/empleados.components.ts')" target="_blank" download)
          .anexo__icono
            img(src="@/assets/template/icono-zip.svg")
          .anexo__texto
            p Descargar archivo
            p #[strong empleados.components.ts]

    p.mt-5(data-aos="fade-up" style="padding-left: 12px;border-left:4px #4DD0E1 solid;") #[strong Figura 33] Código del componente empleados

    .mt-4.p-5.col-md-11(style="background-color:#21214B" data-aos="fade-up")
      p.text-white.mb-0 import { Component, OnInit } from ‘@angular/core’;
      p.text-white.mb-0 import { EmpleadoService } from “../../services/empleado.service”;
      p.text-white.mb-0 import { NgForm } from ‘@angular/forms’;
      p.text-white.mb-3 import { Empleado } from ‘src/app/models/empleado’;
      p.text-white.mb-0 declare var M: any;
      p.text-white.mb-0 @Component({
      p.text-white.mb-0(style="padding-left:20px;")   selector: ‘app-empleados’,
      p.text-white.mb-0(style="padding-left:20px;")   templateUrl: ‘./empleados.component.html’,
      p.text-white.mb-0(style="padding-left:20px;")   styleUrls: [‘./empleados.component.css’],
      p.text-white.mb-0(style="padding-left:20px;")   providers: [EmpleadoService]
      p.text-white.mb-0 })
      p.text-white.mb-3 export class EmpleadosComponent implements OnInit {
      p.text-white.mb-0(style="padding-left:20px;")   constructor(public empleadoService: EmpleadoService) { }
      p.text-white.mb-0(style="padding-left:20px;")   ngOnInit(): void {
      p.text-white.mb-0(style="padding-left:20px;")   }
      p.text-white.mb-0(style="padding-left:20px;")   agregarEmpleado(form?: NgForm) {
      p.text-white.mb-0(style="padding-left:25px;")     this.empleadoService.PostEmpleado(form?.value)
      p.text-white.mb-0(style="padding-left:35px;")       .subscribe(res => {
      p.text-white.mb-0(style="padding-left:40px;")         this.resetForm(form);
      p.text-white.mb-0(style="padding-left:40px;")         M.toast({html: ‘Guardado satisfactoriamente’});
      p.text-white.mb-0(style="padding-left:35px;")       });
      p.text-white.mb-0(style="padding-left:20px;")   }
      p.text-white.mb-0(style="padding-left:20px;")   resetForm(form?: NgForm) { // Limpiar el formulario, recibe un formulario como parametro
      p.text-white.mb-0(style="padding-left:25px;")     if (form) {
      p.text-white.mb-0(style="padding-left:35px;")       form.reset();
      p.text-white.mb-0(style="padding-left:35px;")       this.empleadoService.selectedEmpleado = new Empleado();
      p.text-white.mb-0(style="padding-left:25px;")     }
      p.text-white.mb-0(style="padding-left:20px;")   }
      p.text-white.mb-0 }

    figcaption.col-md-5.mt-3(data-aos="fade-up") Nota. Código completo archivo empleados.component.ts.

    p.mt-5(data-aos="fade-up") En la figura anterior se muestra la importancia de haber creado y/o configurado con anticipación los módulos y archivos para la construcción de este componente, por lo que para el natural funcionamiento de este se hace necesario #[strong EmpleadoServices], el modelo empleado y el módulo ya definido como lo es NgForm.

    p.mt-3(data-aos="fade-up") Una vez se importan estos módulos se enfocan los esfuerzos en los métodos; para el caso de estudio tendrá el método de agregar empleado. Al respecto toma como parámetro la existencia de datos del formulario, al ser verdadero, se llama al método del servicio empleado (el cual ya fue construido anteriormente) #[strong PostEmpleado] y le entrega los valores para que sean llevados al servidor y que sean almacenados en la base de datos de MongoDB.

    p.mt-3(data-aos="fade-up") De manera adicional, como ejemplo de este componente, se agrega un plus y es que en cada adición de datos en el formulario, este se pueda limpiar de manera automática, por lo que se incorpora una función llamada #[strong reset Form], en la cual como su nombre lo indica lo que hace es resetear o limpiar los campos del formulario a través de la función intrínseca reset().

    p.mt-3(data-aos="fade-up") Finalmente, para mejorar la interfaz se adiciona un complemento de Materialize, Toast, que no es más que una notificación, que se utiliza para indicarle al usuario que el empleado se ha guardado de manera correcta.

    br
    .mt-5.titulo-segundo#t_2_9
      h2 2.9 Desarrollo de la interfaz HTML empleados.component.html

    p(data-aos="fade-up") Después de definir la lógica del componente empleado lo único que hace falta es la construcción del formulario, por lo que se apunta ahora al desarrollo del archivo empleados.component.html que se muestra a continuación (puede descargar el contenido de estas instrucciones en el archivo empleados.component.html disponible en la carpeta anexos):

    .col-md-4.mt-4(data-aos="fade-right")
        a.anexo.mb-4(:href="obtenerLink('downloads/empleados.component.html')" target="_blank" download)
          .anexo__icono
            img(src="@/assets/template/icono-zip.svg")
          .anexo__texto
            p Descargar archivo
            p #[strong empleados.component.html]

    p.mt-5(data-aos="fade-up" style="padding-left: 12px;border-left:4px #4DD0E1 solid;") #[strong Figura 34] Código HTML del componente empleado

    .mt-4.p-5.col-md-11(style="background-color:#21214B" data-aos="fade-up")
      p.text-white.mb-0  &lt;div class=“container”&gt;
      p.text-white.mb-0(style="padding-left:10px;")     &lt;div class=“row”&gt;
      p.text-white.mb-0(style="padding-left:15px;")         &lt;div class=“col s5”&gt;
      p.text-white.mb-0(style="padding-left:20px;")             &lt;div class=“card”&gt;
      p.text-white.mb-0(style="padding-left:25px;")                 &lt;div class=“card-content”&gt;
      p.text-white.mb-0(style="padding-left:30px;")                     &lt;form #empleadoForm=“ngForm” (ngSubmit)=“agregarEmpleado(empleadoForm)”>
      p.text-white.mb-0(style="padding-left:35px;")                         &lt;div class=“row”&gt;
      p.text-white.mb-0(style="padding-left:40px;")                             &lt;div class=“input-field col-s12”&gt;
      p.text-white.mb-0(style="padding-left:45px;")                                 &lt;input type=“text” name=“name” #name=“ngModel” [(ngModel)]=“empleadoService.selectedEmpleado.name” placeholder=“Ingrese su nombre”&gt;
      p.text-white.mb-0(style="padding-left:35px;")                             &lt;/div&gt;
      p.text-white.mb-0(style="padding-left:35px;")                             &lt;div class=“input-field col-s12”&gt;
      p.text-white.mb-0(style="padding-left:40px;")                                 &lt;input type=“text” name=“position” #position=“ngModel” [(ngModel)]=“empleadoService.selectedEmpleado.position” placeholder=“Ingrese su cargo”&gt;
      p.text-white.mb-0(style="padding-left:35px;")                             &lt;/div&gt;
      p.text-white.mb-0(style="padding-left:35px;")                             &lt;div class=“input-field col-s12”&gt;
      p.text-white.mb-0(style="padding-left:40px;")                                 &lt;input type=“text” name=“office” #office=“ngModel” [(ngModel)]=“empleadoService.selectedEmpleado.office” placeholder=“Ingrese su lugar de trabajo”&gt;
      p.text-white.mb-0(style="padding-left:35px;")                             &lt;/div&gt;
      p.text-white.mb-0(style="padding-left:35px;")                             &lt;div class=“input-field col-s12”&gt;
      p.text-white.mb-0(style="padding-left:20px;")     &lt;input type=“text” name=“salary” #salary=“ngModel” [(ngModel)]=“empleadoService.selectedEmpleado.salary” placeholder=“Ingrese su salario”&gt;
      p.text-white.mb-0(style="padding-left:35px;")                              &lt;/div&gt;
      p.text-white.mb-0(style="padding-left:35px;")                              &lt;div class=“card-action”&gt;
      p.text-white.mb-0(style="padding-left:35px;")                                  &lt;div class=“input-field col s12”&gt;
      p.text-white.mb-0(style="padding-left:40px;")                                      &lt;button class=“btn right” (click)=“resetForm(empleadoForm)”&gt;Limpiar &lt;/button&gt;
      p.text-white.mb-0(style="padding-left:40px;")                                      &lt;button class=“btn”&gt;Guardar &lt;/button&gt;                                    
      p.text-white.mb-0(style="padding-left:35px;")                                  &lt;/div&gt;
      p.text-white.mb-0(style="padding-left:30px;")                              &lt;/div&gt;
      p.text-white.mb-0(style="padding-left:25px;")                          &lt;/div&gt;
      p.text-white.mb-0(style="padding-left:20px;")                      &lt;/form&gt;
      p.text-white.mb-0(style="padding-left:15px;")                  &lt;/div&gt;
      p.text-white.mb-0(style="padding-left:10px;")              &lt;/div&gt;
      p.text-white.mb-0(style="padding-left:10px;")         &lt;/div&gt;
      p.text-white.mb-0(style="padding-left:10px;")         &lt;div class=“col s7”&gt;
      p.text-white.mb-0(style="padding-left:10px;")         &lt;/div&gt;
      p.text-white.mb-0(style="padding-left:10px;")     &lt;/div&gt;
      p.text-white.mb-0  &lt;/div&gt;


    figcaption.mt-3.col-md-5(data-aos="fade-up")  Nota. Código completo archivo empleados.component.html.

    p.mt-5(data-aos="fade-up") En el código anterior se muestra la estructura base de un formulario en HTML, el cual es sujeto a clases y reglas provistas por Materialize para dar una mejora de apariencia a la interfaz, de manera adicional se presentan 4 inputs en los cuales el usuario debe digitar y, al final se presentan 2 botones, uno es  de enviar y el otro de limpiar el formulario. Al respecto hay una línea de código a la que se hace mención:

    p.mt-5
      span.h4.p-3.text-white.text-center(data-aos="fade-up" style="background-color:#21214B;border-radius:10px;") &lt;form #empleadoForm=“ngForm” (ngSubmit)=“agregarEmpleado(empleadoForm)”&gt;

    p.mt-5(data-aos="fade-up") La cual define que todos los campos del formulario serán almacenados en una sola variable y son estos campos los que serán procesados por el método agregarEmpleado, método que fue definido anteriormente en el componente de empleado.

    br
    .mt-5.titulo-segundo#t_2_10
      h2 2.10 Probando la aplicación completa. Proyecto web terminado

    p(data-aos="fade-up") Ya finalizada la codificación de cada uno de los archivos del Front-end es necesario revisar cómo ha quedado la aplicación; no obstante, este paso no se hace al final, sino que por lo sucinto de este componente se presenta en esta instancia, ya que como buena práctica, en cada bloque de desarrollo o línea debe revisarse el resultado obtenido, es decir, trabajar de manera paralela.

    p.mt-4(data-aos="fade-up") #[strong Una muestra de la interfaz de la aplicación se ilustra en la siguiente figura:]

    p.mt-5(data-aos="fade-up" style="padding-left: 12px;border-left:4px #4DD0E1 solid;") #[strong Figura 36] Registro empleado

    figure.mt-4.col-md-4.m-auto(data-aos="fade-up")
      img.image_floating(src="@/assets/curso/tema2/9.svg")
    figcaption.mt-4.col-md-5(data-aos="fade-up") Nota. Ejemplo ingreso datos de un empleado.

    p.mt-5(data-aos="fade-up") Al momento de dar clic en guardar se almacena la información y se muestra la notificación de Materialize Toast, indicando que el usuario se ha guardado exitosamente y además se limpia el formulario por la función reset(), tal como se puede observar en la figura 37.

    p.mt-5(data-aos="fade-up" style="padding-left: 12px;border-left:4px #4DD0E1 solid;") #[strong Figura 37]  Notificación Toast de Materialize

    figure.mt-4.col-md-11.m-auto(data-aos="fade-up")
      img.image_floating(src="@/assets/curso/tema2/10.svg")
    figcaption.mt-4.col-md-4(data-aos="fade-up") Nota. Ejemplo notificación Toast.

    p.mt-5(data-aos="fade-up") Para verificar que los datos incorporados en el formulario se hayan almacenado de manera correcta en la base de datos empleado de MongoDB se utilizará el panel de control de la MongoDB, como se muestra en las siguientes figuras:

    p.mt-5(data-aos="fade-up" style="padding-left: 12px;border-left:4px #4DD0E1 solid;") #[strong Figura 38]  Panel de control de MongoDB

    figure.mt-4.col-md-9.m-auto(data-aos="fade-up")
      img.image_floating(src="@/assets/curso/tema2/11.svg")
    figcaption.mt-4.col-md-5(data-aos="fade-up") Nota. Verificación registro de información de empleados.

    p.mt-5(data-aos="fade-up" style="padding-left: 12px;border-left:4px #4DD0E1 solid;") #[strong Figura 39]  Evidencia de registro en MongoDB

    figure.mt-4.col-md-8.m-auto(data-aos="fade-up")
      img.image_floating(src="@/assets/curso/tema2/12.svg")
    figcaption.mt-4.col-md-5(data-aos="fade-up") Nota. Verificación registro de información de un empleado.

    p.mt-5(data-aos="fade-up") En las anteriores figuras se puede evidenciar que los datos se guardan de manera correcta en la base de datos, indicando que la aplicación desde el Front-end funciona de manera idónea, así como la API REST del proyecto; con lo que se culmina este componente.

    p.mt-3(data-aos="fade-up") Se espera que haya sido de aprendizaje el uso de tecnologías tanto del lado del cliente como del lado del servidor, este es uno de los ejercicios más completos y precisos que se pueden realizar en materia de esta disciplina del desarrollo web. En ese sentido, se exhorta a seguir estudiando más alternativas sobre este tipo de desarrollos que son muy demandados en la industria del software.

    p.mt-3(data-aos="fade-up") Finalmente, se comparte en el material de apoyo todo el proyecto web realizado desde la plataforma de Gitlab, se encuentra con el nombre de Proyecto web.

</template>

<script>
export default {
  name: 'Tema2',
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
  background-color: #FFF8E2
.lista-ol--separador li, .lista-ul--separador li
  border-bottom: none !important
.bloque-texto-a
  background-color: #F3F9FF !important
.item_round
  background-color: rgb(255, 202, 40)
  padding: 7px 17px 7px 17px
  font-size: 33px
  font-weight: bold
  border-radius: 50%
.titulo-segundo:after
  border-color: #FFCA28 !important
.image__1
  position: absolute
  right: 90px
  width: auto
  top: 10rem
  height: 25rem
@media (max-width: 950px)
  .image__1
    position: inherit
.lista__1 i
  color: #FFA726
@font-face
  font-family: "Inconsolata"
  src: url("/fonts/courier-new_[allfont.es].ttf")
.anexo *
  color: #12263f !important
.container__tabs__1 .card
  border:0 !important
.container__tabs__1 .card-header
  background-color: #F3F9FF !important
  border-top: 10px #B4E2F8 solid
.container__tabs__1 .nav-link
  color: #1565C0 !important
  background-color: #f3f9ff !important
  border-top: 1px #B2E6FF solid !important
  border-radius: 0px !important
.container__tabs__1.nav-pills
  border-top: 9px #B4E2F8 solid !important
.container__tabs__1 .nav-link:first-child
  border-top:0px !important
.container__tabs__1 .nav-link.active
  font-weight:bold !important
.container__tabs__1 .card-body
  padding: 0px
.tarjeta__interactiva,.tarjeta__interactiva:hover
  cursor: pointer
  transition: transform 0.5s linear
  -o-transition: transform 0.5s linear
  -ms-transition: transform 0.5s linear
  -moz-transition: transform 0.5s linear
  -webkit-transition: transform 0.5s linear
.cont_uno
  transition: opacity 1s ease-out
  transition: transform 0.5s linear
  -o-transition: transform 0.5s linear
  -ms-transition: transform 0.5s linear
  -moz-transition: transform 0.5s linear
  -webkit-transition: transform 0.5s linear
.cont_dos
  transition: opacity 1s ease-out
  transition: transform 0.5s linear
  -o-transition: transform 0.5s linear
  -ms-transition: transform 0.5s linear
  -moz-transition: transform 0.5s linear
  -webkit-transition: transform 0.5s linear
.cajon.color-secundario:before
  background-color: #039BE5
</style>
