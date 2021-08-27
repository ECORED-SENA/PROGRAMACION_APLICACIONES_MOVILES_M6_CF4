<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span  2
      h1 Entorno de desarrollo <i>Xcode</i>
    .row
      .col-lg-6
        figure.mb-5(data-aos="flip-left")
          img.nW(src='@/assets/curso/t2-ic1.png', alt='imagen decorativa') 
        .wrap-phrase
          p <b><i>Xcode</i></b> es un entorno de desarrollo integrado (IDE) para <b><i>macOS</i></b> que contiene un completo conjunto de herramientas para desarrolladores, permite crear apps para <b><i>Mac, iPhone, iPad, Apple Watch y Apple TV. Xcode.</i></b> Combina las funcionalidades de diseño de interfaz de usuario, programación, pruebas, depuración y envío a App Store en un flujo de trabajo unificado.

      .col-lg-6  
        figure.mb-5(data-aos="fade-up")
          img.nW(src='@/assets/curso/t2-i1.png', alt='imagen decorativa') 
    
    p.mb-5  Las características de desarrollo de Xcode las podrá visualizar a continuación:
    TabsC.color-primario.mb-5
      .py-3.py-md-4(titulo="Simulador")
        .row.mb-5
          .col-md-6
            figure
              img.nW(src='@/assets/curso/t2-i3-0.png', alt='Ejmplo de codigo')       
          .col-md-6.mb-4.mb-md-0.p-4
            h4 Simulador
            p Proporciona una rápida simulación para las pruebas en entornos de dispositivos iPhone, iPad, Apple Watch y Apple Tv con diferentes versiones de sistemas operativos para cuando no se tenga un dispositivo físico disponible.
      .py-3.py-md-4(titulo="Instruments")
        .row.mb-5
          .col-md-6
            figure
              img.nW(src='@/assets/curso/t2-i3.png', alt='Ejmplo de codigo')       
          .col-md-6.mb-4.mb-md-0.p-4
            h4 Instruments
            p Facilita una herramienta de análisis de la aplicación que permite encontrar problemas de memoria y mejora el rendimiento de la aplicación.
        
      .py-3.py-md-4(titulo="Modelos de aprendizaje automático")
        .row.mb-5
          .col-md-6
            figure
              img.nW(src='@/assets/curso/t2-i4.png', alt='Ejmplo de codigo')       
          .col-md-6.mb-4.mb-md-0.p-4
            h4 Modelos de aprendizaje automático
            p Por medio del uso del <b><i>Create ML</i></b> permite crear y entrenar modelos personalizados de aprendizaje automático, por ejemplo, puede entrenar modelos para que reconozca zapatos mostrándole una variedad de imágenes de estos.

      .py-3.py-md-4(titulo="Reality Composer")
        .row.mb-5
          .col-md-6
            figure
              img.nW(src='@/assets/curso/t2-i4.png', alt='Ejmplo de codigo')       
          .col-md-6.mb-4.mb-md-0.p-4
            h4 Reality Composer
            p Ofrece una herramienta que permite construir objetos 3D y experiencias de realidad aumentada (AR).




    #t_2_1.titulo-segundo
      .h2 2.1  Instalación
    .row.mb-5
      .col-lg-2
        figure
          img.nW(src='@/assets/curso/t2-ic2.svg', alt='Ejmplo de codigo')
      .col-lg-10
        p.mb-5  La descarga del entorno de desarrollo <b>Xcode</b> se realiza a través de la <b>Mac App Store</b>.
        p.mb-5  En la siguiente tabla puede ver los requisitos mínimos para su instalación:
        figcaption.customCaption.mb-3 <b>Tabla</b> Versiones recientes de <b>Xcode</b> y requisitos para instalación
        .tabla-a.color-primario.mb-5.zebra(data-aos="fade-up")
          table.text-center
            thead
              tr
                th Versión de Xcode
                th Mínimo SO requerido
                th Arquitectura
            tbody
              tr
                td Xcode 13 beta
                td macOS Big Sur 11.3
                td x86_64<br>armv7<br>armv7s<br>arm64<br>arm64e 
              tr
                td Xcode 12.5.1
                td macOS Big Sur 11
                td x86_64<br>armv7<br>armv7s<br>arm64<br>arm64e 
              tr
                td Xcode 12.4
                td macOS Catalina 10.15.4 (Mac basado en Intel) <br> macOS Big Sur 11 (Mac de silicona de Apple)
                td x86_64<br>armv7<br>armv7s<br>arm64<br>arm64e 
              tr
                td Xcode 12.3
                td macOS Catalina 10.15.4 (Mac basado en Intel)<br> macOS Big Sur 11 (Mac de silicona de Apple)
                td x86_64<br>armv7<br>armv7s<br>arm64<br>arm64e 
              tr
                td Xcode 12
                td macOS Catalina 10.15.4
                td x86_64<br>armv7<br>armv7s<br>arm64<br>arm64e                

              tr
                td Xcode 11.7
                td macOS Catalina 10.15.2
                td x86_64<br>armv7<br>armv7s<br>arm64<br>arm64e

    .row.mb-5.justify-content-center
      .col-lg-10
        .tarjeta.color-turquesa.p-4
          .row
            .col-lg-2
              figure.mb-5(data-aos="flip-left")
                img(src='@/assets/curso/t3-i5.svg', alt='imagen decorativa') 
            .col-lg-10
              p.mb-5  A continuación, puede <b>profundizar sobre el lenguaje de programación Swift</b> de forma más detallada, para esto se invita a que visite la página:
              a.anexo.mb-4.mb-lg-0(href=" https://docs.swift.org/swift-book/LanguageGuide/TheBasics.html" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p <b>Enlace web.</b>  https://docs.swift.org/swift-book/LanguageGuide/TheBasics.html 






    Separador
    br
    br
    #t_2_2.titulo-segundo
      h2 2.2  Configuración
    
    .row.justify-content-center.mb-5
      .col-lg-10    
        .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-3.mb-4.mb-lg-0
              figure.mb-5(data-aos="flip-left")
                img.nW(src='@/assets/curso/t1-logo.svg', alt='Imagen Decorativa') 
            .col-lg-9
              .bloque-texto-a__texto.p-4
                p.mb-3 Antes de iniciar un proyecto se debe preparar la información de la configuración que permite la identificación de la aplicación y del desarrollador, para lo que debe tener en cuenta estos ítems:

    h3.titulo-tercero Switch
    TabsA.color-acento-botones.mb-5
      .tarjeta.color-primario.p-4(titulo="Nombre del proyecto")
        .row.justify-content-center.align-items-center
          .col-lg-12.mb-5
            h4 Nombre del proyecto
            p.mb-0 El nombre que se utiliza cuando se configura el proyecto es el mismo nombre que figurará cuando instale la aplicación en el dispositivo.
          .col-lg-7
            figure.mb-5(data-aos="flip-right")
              img.nW(src='@/assets/curso/t2-i7-0.png', alt='imagen decorativa') 

      .tarjeta.color-primario.p-4(titulo="Identificador de organización")
        .row.justify-content-center.align-items-center
          .col-lg-12.mb-5
            h4 Identificador de organización
            p.mb-0 Hace parte del id del paquete, el identificador es una cadena de DNS inversa que identifica de forma exclusiva a la empresa.
          .col-lg-7
            figure.mb-5(data-aos="flip-right")
              img.nW(src='@/assets/curso/t2-i7.png', alt='imagen decorativa') 
      .tarjeta.color-primario.p-4(titulo="Nombre de la organización")
        .row.justify-content-center.align-items-center
          .col-lg-12.mb-5
            h4 Nombre de la organización
            p.mb-0 Se define para derechos de autor el archivo fuente y el nombre de encabezado va a tener el nombre de la empresa.
          .col-lg-10
            figure.mb-5(data-aos="flip-right")
              img.nW(src='@/assets/curso/t2-i8.png', alt='imagen decorativa') 

    p.mb-5(data-aos="fade-up")  Una vez preparada la información y la identificación de la aplicación y del desarrollador podrá proceder a la creación de un proyecto, para dar inicio a un proyecto en Xcode se selecciona la ruta que se muestra en la siguiente figura:
    h3.titulo-tercero Archivo>Nuevo>Proyecto
    .row.justify-content-center.mb-5
      .col-lg-6
        figcaption.customCaption <b>Figura 1</b>Creación de proyecto en Xcode
        figure.mb-5(data-aos="flip-right")
          img.nW(src='@/assets/curso/d1.png', alt='Ejemplo de creacion de proyecto X-code') 
        figcaption https://developer.apple.com/documentation/xcode/creating-an-xcode-project-for-an-app

    p.mb-5  Cuando se crea un proyecto la ventana que muestra la figura 1 solicita seleccionar la plataforma que para el ejemplo es <p><i>iOS</i></p> y la plantilla.
    p.mb-5 En la figura 2 se configura la información preparada anteriormente como nombre, identificador, lenguaje, selección en la interfaz de usuario <p><i>SwiftUI</i></p>.
    .row.justify-content-center.mb-5
      .col-lg-6
        figcaption.customCaption <b>Figura 2</b> <i>Configuración de proyecto en Xcode</i>
        figure.mb-5(data-aos="flip-right")
          img.nW(src='@/assets/curso/d2.png', alt='Ejemplo de creacion de proyecto X-code') 
        figcaption https://apple.co/3suZfli

    .row.mb-5
      .col-lg-6 
        .cajon.color-secundario.p-4
          p.mb-0 <b>Ventana principal:</b> en ella se encuentran los recursos y archivos necesarios para construir la aplicación.   
    p.mb-5  <b>Partes de la ventana:</b> téngalas en cuenta de acuerdo con el siguiente listado:

    SlyderB.mb-5(:datos="datosSlyder")

    p.mb-5  En la figura 3 puede observar la presentación de la ventana principal de Xcode.
    .row.justify-content-center.mb-5
      .col-lg-6
        figcaption.customCaption <b>Figura 2</b> <i>Partes de la ventana principal de Xcode</i>
        figure.mb-5(data-aos="fade-up")
          img.nW(src='@/assets/curso/d3.png', alt='Ejemplo de creacion de proyecto X-code') 
        figcaption https://docs-assets.developer.apple.com/published/7df07db6e97c54d87701e9fa161ef946/10300/creating-an-xcode-project-for-an-app-3@2x.png

    Separador
    br
    br

    #t_2_3.titulo-segundo
      h2 2.3  SwiftUI
    .row.mb-5
      .col-lg-7
        p.mb-4  Es un marco que sirve para desarrollar la aplicación por medio de una vista previa interactiva que puede ser visualizada a medida que el usuario diseña su interfaz. Cada que se realiza un cambio Xcode lo actualiza en el código fuente, así que cuando se editan atributos en el inspector, se agrega el código que le corresponde al archivo fuente.
        p.mb-5  Una de las características de <b><i>SwiftUI</i></b> es su diseño adaptativo y debido a su estructura sencilla puede incorporar de forma sencilla generadores de código de herramientas como adobe XD, que crean generadores de código que traducen un diseño a código para programador.
        .cajon.color-secundario.p-4
          p.mb-0 El funcionamiento de <b><i>SwiftUI</i></b> se da en las últimas versiones de los sistemas de Apple, debido a que está cargado en el sistema operativo, como se muestra en la siguiente figura.
      .col-lg-5
        figure.mb-5(data-aos="fade-left")
          img.nW(src='@/assets/curso/t1-g1.svg', alt='imagen decorativa') 
    
    .row.justify-content-center.mb-5
      .col-lg-6
        figcaption.customCaption <b>Figura 4</b> <i>SwiftUI</i>
        figure.mb-5(data-aos="flip-right")
          img.nW(src='@/assets/curso/g2.png', alt='Ejemplo de creacion de interfaz SwiftUI') 
        figcaption https://i.blogs.es/bc4cb2/screenshot-2019-06-04-at-20.38.41-2-/1366_2000.jpg

    p.mb-5  Lo primero que se debe seleccionar al crear un proyecto con <b><i>Swift</i></b>  es el fichero llamado <b><i>ContentView</i></b>, que se encarga de crear la pantalla de inicio con código, el cual contiene una estructura que incluye la variable <b><i>body</i></b> que se encarga de devolver diferentes constructores.  
    .row.justify-content-center.mb-5
      .col-lg-8
        .tarjeta.tarjeta--gris.p-4.r-0
          figure(data-aos="flip-up")
            img.nW(src='@/assets/curso/t2-cod1.png', alt='Ejemplo de creacion de interfaz SwiftUI') 

    p.mb-5  Lo que se encuentra dentro del <b><i>body</i></b>   es un constructor que crea un texto y lo ubica en el centro de la pantalla, si se quisiera, por ejemplo, agregar la propiedad de negrita al texto, solo hay que agregar la función <b><i>bold().</i></b> Así:  
    .row.justify-content-center.mb-5
      .col-lg-8
        .tarjeta.tarjeta--gris.p-4.r-0
          figure(data-aos="flip-up")
            img.nW(src='@/assets/curso/t2-cod-2.png', alt='Ejemplo de creacion de interfaz SwiftUI') 

    p.mb-5  Mostrando el texto <b><i>Hello World</i></b>  en negrita como lo muestra la figura 5. 
    .row.justify-content-center.mb-5
      .col-lg-2
        figcaption.customCaption <b>Figura 5</b> <i>SwiftUI Hello Word</i>
        figure.mb-5(data-aos="flip-right")
          img.nW(src='@/assets/curso/t2-end.png', alt='ejemplo SwiftUI Hello Word') 
        figcaption https://bit.ly/3D6jfzU

    .row.mb-5.justify-content-center
      .col-lg-10
        .tarjeta.color-turquesa.p-4
          .row
            .col-lg-2
              figure.mb-5(data-aos="flip-left")
                img(src='@/assets/curso/t3-i5.svg', alt='imagen decorativa') 
            .col-lg-10
              p.mb-5  Para ver los pasos de creación de un nuevo proyecto y la exploración de lienzos visite los anexos del archivo nombrado como <b>“Creación proyecto y exploración lienzo”</b>, y si desea profundizar y conocer más sobre vistas, se invita a que consulte el enlace
              a.anexo.mb-4.mb-lg-0(href="https://developer.apple.com/tutorials/swiftui/creating-and-combining-views" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p <b>Enlace web.</b> https://developer.apple.com/tutorials/swiftui/creating-and-combining-views




</template>
<script>
export default {
  name: 'Tema2',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Navigator área',
        texto:
          '(área de navegación)<br>Permite ver y seleccionar la estructura de archivos del proyecto.',
        imagen: require('@/assets/curso/t2-s1.jpg'),
      },
      {
        titulo: 'Editor area',
        texto:
          '(área de edición)<br>Muestra el contenido de los archivos a editar.',
        imagen: require('@/assets/curso/t2-s2.jpg'),
      },
      {
        titulo: 'Inspector area',
        texto:
          '(inspector de área)<br>Permite visualizar los atributos para editar las propiedades de un archivo o elemento de la interfaz.',
        imagen: require('@/assets/curso/t2-s3.jpg'),
      },
      {
        titulo: 'Toolbar',
        texto:
          '(barra de herramientas)<br>Permite crear y ejecutar la aplicación en un dispositivo, usando el emulador o un dispositivo real.',
        imagen: require('@/assets/curso/t2-s4.jpg'),
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
