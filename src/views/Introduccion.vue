<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    figure
      img.imagen_flotante_animada(src="@/assets/curso/introduccion/1.svg")

    p.mt-5(data-aos="fade-up") En este componente formativo se abordarán los conceptos y técnicas que apoyarán el desarrollo de una aplicación web de manera completa, es decir, se realizará el Backend y Front-end de la aplicación, de esta forma se podrá observar la comunicación, intercambio y procesamiento de la información de estos dos componentes, por lo que se iniciará con la instalación de herramientas y recursos del lado del servidor, que gestionará la base o plataforma para el despliegue de la aplicación del lado del cliente.  En la segunda parte de este documento se da alcance a la construcción de la aplicación web Responsive, que consumirá la API REST ya realizada en el servidor.

    p.mt-4(data-aos="fade-up") Esto permitirá tener un mayor conocimiento sobre las tecnologías web actuales, especialmente en el uso de las técnicas del lenguaje, los recursos para probar y testear la aplicación, las nuevas formas de sintaxis de algunos lenguajes, los componentes y módulos que harán el trabajo más fácil a los desarrolladores. En últimas palabras este componente apoya de manera significativa el primer paso para generar competencias y habilidades con el fin de generar nuevas aplicaciones web.

    p.mt-5(data-aos="fade-up") #[strong La siguiente figura representa el esquema general de comunicación entre la aplicación (Front-end) y el servidor (Backend).]

    p.mt-5(data-aos="fade-up" style="padding-left: 12px;border-left:4px #4DD0E1 solid;") #[strong Figura 1] Esquema Front-end – Backend

    figure.mt-5
      img.image_floating(data-aos="fade-up" src="@/assets/curso/introduccion/2.svg")
      figcaption.col-md-5 Nota. Esquema general de comunicación Front-end – Backend.

    p.mt-5(data-aos="fade-up") Asimismo, en el siguiente video podrá encontrar información complementaria sobre los elementos, características y componentes del Front-end y Backend.

    .tarjeta.text-white.p-4.mt-5.caja_flotante_azul.col-md-11(data-aos="fade-up" style="background: linear-gradient(rgb(41 123 220), rgb(20 63 112));")
      .row.justify-content-around.align-items-center
        .col-4.col-sm-2.col-lg-2
          img.imagen_flotante_animada(src="@/assets/curso/introduccion/3.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              .h4.mb-0 ¿Qué es BACKEND y FRONTEND?
              p.mt-2 EDteam. (2020). ¿Qué es Backend y Front-end? (guía completa) [video]. YouTube.
            .col-sm-auto
              a.boton.boton--b.color-acento-secundario(href="https://youtu.be/50RbVujPPGs" target="_blank")
                span(style="color: #12263F !important;") Ver video
                i.fas.fa-video(style="color: #12263F !important;")


</template>

<script>
export default {
  name: 'Introduccion',
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
  filter: drop-shadow(19px 14px 5px #e4e4e4)
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
</style>
