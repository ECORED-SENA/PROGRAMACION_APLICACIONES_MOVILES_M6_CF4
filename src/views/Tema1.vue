<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span  1
      h1 Lenguaje Swift

    .row.justify-content-center.mb-5
      .col-lg-10    
        .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-3.mb-4.mb-lg-0
              figure.mb-5(data-aos="flip-left", data-aos-delay='0')
                img.nW(src='@/assets/curso/t1-i1.svg', alt='Imagen Decorativa') 
            .col-lg-9
              .bloque-texto-a__texto.p-4
                p.mb-3 <b>El lenguaje de programación Swift fue creado por Apple</b> para el desarrollo de aplicaciones exclusivamente para iOS, Mac, Apple TV y Apple Watch.
                p.mb-0  <b>Swift es un sucesor de los lenguajes C y Objective-C,</b> incluye primitivas de bajo nivel como tipos, control de flujo y operadores. También proporciona funciones orientadas a objetos como clases, protocolos y genéricos, lo que les da a los desarrolladores de Cocoa y Cocoa Touch el rendimiento y la potencia que exigen.
        .cajon.color-acento-contenido.p-4
          p.mb-0  Aunque su creación fue en el año 2010 fue presentado en el 2014 en la WWDC, inicialmente el lenguaje usado para desarrollar aplicaciones era Objective-C, pero en el año 2014 Switf se convirtió en el nuevo lenguaje de código abierto, siendo este un lenguaje fácil de escribir, rápido, eficiente y seguro. 
    
    #t_1_1.titulo-segundo
      h2  1.1  Características
    p.mb-5  Las modernas características que incluye Swift deslumbran a los desarrolladores, principalmente por el fácil manejo que tiene en su funcionamiento, por ello, se invita a que revise el siguiente listado, en el que se indican algunas de estas:
    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Código abierto" :icono="require('@/assets/curso/t1-ic1.svg')")
        .row.justify-content-center
          .col-md-4
            figure
              img(src='@/assets/curso/t1-i0.jpg', alt='imagen decorativa')        
          .col-md-6.mb-4.mb-md-0
            h4 Código abierto
            p Switf proporciona una gran comunidad de apoyo y una variedad de herramientas de terceros.
        
      .py-4.py-md-5(titulo="Sintaxis concisa pero expresiva" :icono="require('@/assets/curso/t1-ic2.svg')")
        .row.justify-content-center
          .col-md-4
            figure
              img.shadow-box(src='@/assets/curso/t1-i1-1.jpg', alt='imagen decorativa')        
          .col-md-6.mb-4.mb-md-0
            h4 Sintaxis concisa pero expresiva
            p Al ser <i><b>Switf</b></i> un lenguaje muy conciso requiere menos código para realizar una misma tarea.

      .py-4.py-md-5(titulo="Sintaxis concisa pero expresiva" :icono="require('@/assets/curso/t1-ic3.svg')")
        .row.justify-content-center
          .col-md-4
            figure
              img.shadow-box(src='@/assets/curso/t1-i2.jpg', alt='imagen decorativa')        
          .col-md-6.mb-4.mb-md-0
            h4 Código seguro por su diseño
            p <i><b>Switf</b></i> proporciona medidas de seguridad para evitar errores y mejorar la legibilidad.

      .py-4.py-md-5(titulo="Ejecución de código a gran velocidad" :icono="require('@/assets/curso/t1-ic4.svg')")
        .row.justify-content-center
          .col-md-4
            figure
              img.shadow-box(src='@/assets/curso/t1-i3.jpg', alt='imagen decorativa')        
          .col-md-6.mb-4.mb-md-0
            h4 Ejecución de código a gran velocidad
            p La sintaxis y gramática simplificada de Switf permite un proceso de desarrollo rápido, haciéndolo un lenguaje limpio y más fácil de leer y escribir. 

      .py-4.py-md-5(titulo="Fácil de escalar" :icono="require('@/assets/curso/t1-ic5.svg')")
        .row.justify-content-center
          .col-md-4
            figure
              img.shadow-box(src='@/assets/curso/t1-i4.jpg', alt='imagen decorativa')        
          .col-md-6.mb-4.mb-md-0
            h4 Fácil de escalar
            p Permite el aumento de nuevas características según las necesidades, haciéndolo mucho más fácil de escalar.





    Separador
    br
    br
    #t_1_2.titulo-segundo
      h2  1.2  Tipos de datos


    Separador
    br
    br
    #t_1_3.titulo-segundo
      h2  1.3  Operadores básicos

    Separador
    br
    br
    #t_1_4.titulo-segundo
      h2  1.4 Condicionales

    Separador
    br
    br
    #t_1_5.titulo-segundo
      h2  1.5 Ciclos









    //- El componente "Muestras" tiene las aplicaciones de todos los componentes de la base
    //- se encuentra en src/components/Muestras.vue
    //- Una vez el componente "Muestras" no se necesite 
    //- Se debe borrar el "import Muestras from '../components/Muestras'" y en "components" en "<script"
    //- esto evitará que se compile en la carpeta final de distribución
    Muestras
  
</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
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
