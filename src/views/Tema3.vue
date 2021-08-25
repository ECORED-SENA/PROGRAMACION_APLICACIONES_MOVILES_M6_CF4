<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span  3
      h1 Persistencia de datos

    .row.justify-content-center.mb-5
      .col-lg-8    
        .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              figure.mb-5(data-aos="flip-left", data-aos-delay='0')
                img.nW(src='@/assets/curso/t3-i1.svg', alt='Imagen Decorativa') 
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p La mayoría de las aplicaciones tienen como requisito la persistencia de los datos que lo componen, almacenamiento de preferencias del usuario en el sistema, hasta bases de datos relacionales con grandes datos.
      
    p.mb-5  Las principales opciones para la persistencia de datos son:
    .tarjeta--container.row.mb-5.justify-content-center
      .col-lg-5.tarjeta.c1.p-5
        .row.justify-content-center.mb-4.p-5.text-center
          .col-6
            figure.mb-5(data-aos="flip-left", data-aos-delay='0')
              img.h180(src='@/assets/curso/t3-i2.svg', alt='Imagen Decorativa')
          h3 Sistema predeterminado

      .col-lg-5.tarjeta.c2.p-5
        .row.justify-content-center.mb-4.p-5.text-center
          .col-6
            figure.mb-5(data-aos="flip-right", data-aos-delay='100')
              img(src='@/assets/curso/t3-i3.svg', alt='imagen decorativa')     
          h3 SQLite
    .cajon.color-primario.p-4.mb-5
      .h4 Sistema predeterminado
      p.mb-3  Se refiere a una colección de listas de propiedades, estas se almacenan en la carpeta Biblioteca en una carpeta de preferencias.
      p.mb-0  <b><i>UserDefaults</i></b> es un mecanismo de Swift que se utiliza para almacenar pequeñas cantidades de datos.
    .row.mb-5.justify-content-center
      .col-lg-8
        figcaption.customCaption  Ejemplo
        .bg-soft-gray.p-3
          figure.mb-5(data-aos="flip-left", data-aos-delay='0')
            img.nW(src='@/assets/curso/t3-c1.svg', alt='Imagen Decorativa')
    .row.mb-5.justify-content-center
      .col-lg-10
        .cajon.color-secundario.p-4.mb-5
          .h4.text-it userDefaults.synchronize()
          p.mb-3  Almacena valores utilizando clave- valor, las líneas de código de la configuración de valores define el tipo de dato y el nombre de la llave con la cual se llamarán los datos, para el ejemplo: 
          p.mb-0  <b><i>userDefaults.setBool(true, forKey: "Key1")</i></b> está configurando una entrada de valor de tipo <b><i>booleano</i></b> y el nombre de la llave será key1.
    
    p.mb-5  El archivo<b> XML</b> queda almacenado en el disco en la ruta que se muestra en la siguiente figura:
    
    .row.mb-5.justify-content-center
      .col-lg-4
        figcaption.customCaption  <b>Figura 6</b> Persistencia de datos userDefaults
        figure.mb-5(data-aos="flip-right")
          img(src='@/assets/curso/t3-i4.png', alt='imagen decorativa') 
        figcaption  <a href='https://bit.ly/3swEV30' target='_blank'>https://bit.ly/3swEV30</a>

    .cajon.color-secundario.p-4.mb-5
      .h4.text-it SQLite
      p.mb-3  Es una biblioteca que trabaja con bases de datos relacionales que está basado en <b><i>SQL</i></b>, entre sus principales características se encuentra que es muy ligera, portátil y liviana.
    
    p.mb-5  A continuación, se nombran los principales componentes que se necesitan para el manejo de bases de datos <b><i>SQLite</i></b>.
    p.mb-5  Lo primero que se realiza para la creación de un proyecto usando <b><i>SQLite</i></b> es agregar la librería manualmente teniendo en cuenta:
    //-- Aqui viene el card


    .row.mb-5.justify-content-center
      .col-lg-10
        .tarjeta.color-turquesa.p-4
          .row
            .col-lg-2
              figure.mb-5(data-aos="flip-right")
                img(src='@/assets/curso/t3-i5.svg', alt='imagen decorativa') 
            .col-lg-10
              ul.lista-ul
                li  
                  i.fas.fa-check
                  p.mb-0 Puede informarse de los pasos sobre <i><b>SQLite</b></i>, de forma detallada, visitando el enlace que encuentra a continuación:
              a.anexo.mb-4.mb-lg-0(href="https://adnan-tech.com/create-read-update-and-delete-from-sqlite-swift-swift-ui" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p <b>Enlace web.</b> https://adnan-tech.com/create-read-update-and-delete-from-sqlite-swift-swift-ui
              Br
              ul.lista-ul
                li  
                  i.fas.fa-check
                  p.mb-0 Si desea observar un ejemplo completo sobre la <b>creación de bases de datos</b>, se invita a consultar el siguiente enlace:
              a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=k4GK4MmE4Ag&t=27s" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p <b>Enlace web.</b> https://www.youtube.com/watch?v=k4GK4MmE4Ag&t=27s


    #t_3_1.titulo-segundo
      h2  Core data
    .row.mb-5
      .col-lg-8
        p.mb-5  Es un ORM (object relational mapper) que permite almacenar datos de forma persistente y después recuperarlos, la ventaja de usar Core data es que maneja objetos en lugar de datos sin procesar como filas en SQLite o datos para el caso de un archivo XML.
        .cajon.color-secundario.p-4
          p.mb-3  El uso de memoria en Core data a diferencia del de <b><i>SQLite</i></b> es mayor al igual que el espacio físico.
          p.mb-3  Core data realiza todos los procesos que se hacen manualmente en <b><i>SQLite</i></b> de forma automática, lo que permite agilidad en el código.
          p.mb-0  Una de sus principales características es que <b><i>Xcode</i></b> tiene integrado el editor de modelos <b><i>Core data</i></b>, que permite modelar el modelo de datos por medio de la interfaz gráfica, como se muestra en la siguiente figura.
      .col-lg-4
        figure.mb-5(data-aos="flip-right")
          img(src='@/assets/curso/t3-i6.svg', alt='imagen decorativa') 
    .row.mb-5.justify-content-center
      .col-lg-4
        figcaption.customCaption  <b>Figura 6</b> <i>Editor de modelos Core data</i>
        figure.mb-5(data-aos="fade-left")
          img.shadow-box(src='@/assets/curso/t3-i7.png', alt='imagen decorativa') 
        figcaption  <a href='https://bit.ly/3swgGC6' target='_blank'>https://bit.ly/3swgGC6</a>

    .row.mb-5.justify-content-center
      .col-lg-10
        .tarjeta.color-turquesa.p-4
          .row
            .col-lg-2
              figure.mb-5(data-aos="flip-left")
                img(src='@/assets/curso/t3-i5.svg', alt='imagen decorativa') 
            .col-lg-10
              ul.lista-ul
                li  
                  i.fas.fa-check
                  p.mb-0 En el siguiente enlace podrá observar un ejemplo de la utilización de <i><b> Core data</b></i> paso a paso:
              a.anexo.mb-4.mb-lg-0(href="https://mastermoviles.gitbook.io/persistencia-en-dispositivos-m-viles-ios/intro-2/3.2_stack" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p <b>Enlace web.</b> https://mastermoviles.gitbook.io/persistencia-en-dispositivos-m-viles-ios/intro-2/3.2_stack
              Br
              ul.lista-ul
                li  
                  i.fas.fa-check
                  p.mb-0 Igualmente se invita a consultar el siguiente video, en el que podrá profundizar respecto al tema <i><b>Core data: </b></i>
              a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=2Za19Z60aRk" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p <b>Enlace web.</b> https://www.youtube.com/watch?v=2Za19Z60aRk





    Separador
    br
    br
    #t_3_2.titulo-segundo
      h2  Cloudkit
    .row.justify-content-center.mb-5
      .col-lg-8    
        .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-2.mb-4.mb-lg-0
              figure.mb-5(data-aos="flip-left", data-aos-delay='0')
                img.nW(src='@/assets/curso/t3-i8.svg', alt='Imagen Decorativa') 
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p Es una plataforma que permite el almacenamiento de datos estructurados en todos los dispositivos y en la web, una de sus principales novedades es la capacidad de flexibilidad, potencia y administración, como se muestra en la figura 8.
  
    .row.mb-5.justify-content-center
      .col-lg-8
        figcaption.customCaption  <b>Figura 8</b> <i>Cloudkit</i>
        figure.mb-5(data-aos="flip-left")
          img(src='@/assets/curso/t3-i9.png', alt='imagen decorativa') 
        figcaption  <a href='https://developer.apple.com/icloud/cloudkit/ ' target='_blank'>https://developer.apple.com/icloud/cloudkit/ </a>

    h3.titulo-tercero Características de Cloudkit
    p.mb-5  Entre sus características se encuentran:
    TabsA.color-acento-botones.mb-5
      .tarjeta.color-primario.p-4(titulo="Sincronización automática")
        .row.justify-content-center.align-items-center
          .col-lg-2
            figure.mb-5(data-aos="flip-right")
              img.nW(src='@/assets/curso/t3-ic1.svg', alt='imagen decorativa') 
          .col-lg-8
            h4 Sincronización automática
            p.mb-0 Permite la sincronización sin ningún inconveniente en la web y en <i><b>iOS, macOS, WatchOS, tvOs.</b></i>
      .tarjeta.color-primario.p-4(titulo="Datos encriptados")
        .row.justify-content-center.align-items-center
          .col-lg-2
            figure.mb-5(data-aos="flip-right")
              img.nW(src='@/assets/curso/t3-ic2.svg', alt='imagen decorativa') 
          .col-lg-8
            h4 Datos encriptados
            p.mb-0 Asegura el resguardo de los datos, permitiendo configurar como privados los datos en la base de datos que se requieren que se cifren, afianzando la protección de los datos en el almacenamiento y en el envío de su aplicación.

      .tarjeta.color-primario.p-4(titulo="Privacidad protegida")
        .row.justify-content-center.align-items-center
          .col-lg-2
            figure.mb-5(data-aos="flip-right")
              img.nW(src='@/assets/curso/t3-ic3.svg', alt='imagen decorativa') 
          .col-lg-8
            h4 Privacidad protegida
            p.mb-0 Permite un análisis y depuración de las aplicaciones sin exponer los datos personales del usuario.

      .tarjeta.color-primario.p-4(titulo="Automatización")
        .row.justify-content-center.align-items-center
          .col-lg-2
            figure.mb-5(data-aos="flip-right")
              img.nW(src='@/assets/curso/t3-ic4.svg', alt='imagen decorativa') 
          .col-lg-8
            h4 Automatización
            p.mb-0 Permite automatizar de una forma muy sencilla los procesos de desarrollo.
    p.mb-5  La consola de <i>Cloudkit</i> contiene un panel de control que permite:
    .row.justify-content-center.align-items-center
      .col-lg-10
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
          .row(titulo="Bases de datos")
            .col-md-6.mb-4.mb-md-0 
              p Permite crear estructuras de bases de datos que se almacenan en la nube para ser accedidas por aplicaciones.
            .col-md-6
              figure
                img(src='@/assets/curso/t3-i11.png', alt='imagen decorativa')

          .row(titulo="Telemetría")
            .col-md-6.mb-4.mb-md-0 
              p Permite medir la confiabilidad de las aplicaciones.
            .col-md-6
              figure
                img.shadow-box(src='@/assets/curso/t3-i12.png', alt='imagen decorativa')

          .row(titulo="Registros del servidor")
            .col-md-6.mb-4.mb-md-0 
              p Analiza y evalúa el rendimiento de las aplicaciones.
            .col-md-6
              figure
                img.shadow-box(src='@/assets/curso/t3-i13.png', alt='imagen decorativa')
    .row
      .col-lg-7
        .cajon.color-secundario.p-4.mb-5
          p <b>Nota.</b> Para ingresar a la consola debe contar con un <b>ID de programador de Apple.</b>
    .row.mb-5.justify-content-center
      .col-lg-10
        .tarjeta.color-turquesa.p-4
          .row
            .col-lg-2
              figure.mb-5(data-aos="flip-left")
                img(src='@/assets/curso/t3-i5.svg', alt='imagen decorativa') 
            .col-lg-10
              ul.lista-ul
                li  
                  i.fas.fa-check
                  p.mb-0 En el siguiente enlace encontrará información respecto a la configuración y habilitación de <i><b> Cloudkit:</b></i>
              a.anexo.mb-4.mb-lg-0(href="https://developer.apple.com/documentation/cloudkit/enabling_cloudkit_in_your_app" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p <b>Enlace web.</b> https://developer.apple.com/documentation/cloudkit/enabling_cloudkit_in_your_app
              Br
              ul.lista-ul
                li  
                  i.fas.fa-check
                  p.mb-0 Para crear bases de datos en <i><b> Cloudkit:</b></i> puede consultar el siguiente enlace, en el que  encontrará información detallada al respecto: 
              a.anexo.mb-4.mb-lg-0(href="https://developer.apple.com/documentation/cloudkit/designing_and_creating_a_cloudkit_database" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p <b>Enlace web.</b> https://developer.apple.com/documentation/cloudkit/designing_and_creating_a_cloudkit_database

              ul.lista-ul
                li  
                  i.fas.fa-check
                  p.mb-0 Finalmente, podrá consultar el material de estudio dispuesto, que sirve para el estudio de las unidades vistas en el módulo, a través de los siguientes enlaces:
              a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=MyzZnIR5gC4" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p <b>Enlace web.</b> https://www.youtube.com/watch?v=MyzZnIR5gC4



</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
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
