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
        img.nW(src='@/assets/curso/t3-ic1.svg', alt='imagen decorativa') 
      .bloque-texto-b.color-secundario.p-4
        .bloque-texto-b__texto
          i.fas.fa-quote-left
          p <b><i>Xcode</i></b> es un entorno de desarrollo integrado (IDE) para <b><i>macOS</i></b> que contiene un completo conjunto de herramientas para desarrolladores, permite crear apps para <b><i>Mac, iPhone, iPad, Apple Watch y Apple TV. Xcode.</i></b> Combina las funcionalidades de diseño de interfaz de usuario, programación, pruebas, depuración y envío a App Store en un flujo de trabajo unificado.
          i.fas.fa-quote-right
    .col-lg-6  


    #t_2_1.titulo-segundo
      .h2 2.1  Instalación

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
