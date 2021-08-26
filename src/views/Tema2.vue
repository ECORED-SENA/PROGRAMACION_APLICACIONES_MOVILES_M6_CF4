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
      .py-3.py-md-4(titulo="Simulador")
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
              ul.lista-ul
                li  
                  i.fas.fa-check
                  p.mb-0 A continuación, puede <b>profundizar sobre el lenguaje de programación Swift<b> de forma más detallada, para esto se invita a que visite la página:
              a.anexo.mb-4.mb-lg-0(href="https://developer.apple.com/documentation/cloudkit/enabling_cloudkit_in_your_app" target="_blank")
                .anexo__icono
                  //-img(src='@/assets/template/icono-link.svg')
                .anexo__texto
                  p <b>Enlace web.</b> https://docs.swift.org/swift-book/LanguageGuide/TheBasics.html



    Separador
    br
    br
    #t_2_2.titulo-segundo
      .h2 2.2  Configuración


    #t_2_3.titulo-segundo
      .h2 2.3  SwiftUI





</template>

<script>
export default {
  name: 'Tema2',
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
