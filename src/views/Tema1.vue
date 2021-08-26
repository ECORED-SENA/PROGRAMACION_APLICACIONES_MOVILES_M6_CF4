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
    .row.mb-5
      .col-lg-2
        figure
          img(src='@/assets/curso/t1-ic6.svg', alt='imagen decorativa')    

      .col-lg-10
        p.mb-5  Son aquellos en donde se almacena la información por medio de variables y constantes, por ejemplo, si queremos almacenar un texto se necesita un tipo de dato <i>String</i>, y si se quiere almacenar un valor numérico se necesita un tipo de dato <i>Int</i>.
        p.mb-5  En <b>el lenguaje de programación Swift</b> se encuentran los tipos de datos básicos que se enuncian en la siguiente tabla:
        figcaption.customCaption.mb-2 <b>Tabla</b> <i>Tipos de datos básicos en Swift</i>
        .tabla-b.color-acento-contenido.mb-5
          table
            tr
              th Int
              td Número entero de 32 <i>bits</i> con un rango de entre -2.147.483.648 y 2,147,483,647.
            tr
              th Double
              td Número flotante de 64 <i>bits</i> con hasta 15 decimales de precisión.
            tr
              th Float
              td Número flotante de 32 <i>bits</i> con hasta 6 decimales de precisión.
            tr
              th Bool
              td Número booleano que puede ser 0 <i>(false)</i> o 1 <i>(true).</i>
            tr
              th String
              td Cadena de caracteres, tratada internamente con una matriz (array) de ellos.

    .row.mb-5
      .col-lg-8
        p.mb-3  Las constantes y variables presentes en los tipos de datos relacionan valores, recordando que una constante es un elemento de datos con nombre  y con un valor predefinido, mientras que una variable es un elemento de datos con nombre cuyo valor puede cambiar durante el curso de la ejecución de un programa. 
        p.mb-3  <b>Constantes y variables</b> son segmentos de memoria que asocian un nombre con un valor de un tipo en particular, cuando se establece un valor en una constante este no se puede cambiar, mientras que una variable permite cambiar su valor en tiempo de ejecución.
        p.mb-3  Encontrando elementos particulares en cada una de estas, tal como puede verse a continuación:
      .col-lg-4
    TabsC.color-primario.mb-5
      .py-3.py-md-4(titulo="Declaración de constantes y variables")
        .row.mb-5
          .col-md-6.mb-4.mb-md-0.p-4
            h4 Declaración de constantes y variables
            p En el lenguaje Swift las constantes y variables se deben declarar antes de ser usadas, para declarar una constante se usa la palabra reservada let y para declarar una variable se utiliza la palabra reservada var.
        
          .col-md-6
            figcaption.customCaption.mb-2 <b>Ejemplo</b>  Declaración de constante
            .tarjeta.tarjeta--gris.p-4
              figure
                img.nW(src='@/assets/curso/t1-c1.svg', alt='Ejmplo de codigo')
        .row.mb-5.justify-content-center
          .col-lg-10
            .cajon.color-primario.p-4
              p.mb-0  Las constantes no pueden cambiar su valor inicial, si se le asigna otro valor a edad o nombre genera un error.       

      .py-3.py-md-4(titulo="Declaración de variable")
        .row.mb-5
          .col-md-6.mb-4.mb-md-0.p-4
            h4 Declaración de variable
            p Las variables sí pueden cambiar su valor, en el ejemplo se ve en que el valor inicial de la variable es Nirvana y después se le cambia el valor por Romeo.
        
          .col-md-6
            figcaption.customCaption.mb-2 <b>Ejemplo</b>  Declaración de variable
            .tarjeta.tarjeta--gris.p-4
              figure
                img.nW(src='@/assets/curso/t1-c2.svg', alt='Ejmplo de codigo')
        .row.mb-5.justify-content-center
          .col-lg-10
            .cajon.color-primario.p-4
              p.mb-0  Las constantes no pueden cambiar su valor inicial, si se le asigna otro valor a edad o nombre genera un error.       

      .py-3.py-md-4(titulo="Nomenclatura de variables y constantes")
        .row.mb-5
          .col-md-6.mb-4.mb-md-0.p-4
            h4 Nomenclatura de variables y constantes
            p.mb-3 En Swift se deben cumplir las siguientes reglas para el nombramiento de constantes y variables.
            ul.lista-ul
              li
                i.fas.fa-check
                | Los nombres de las constantes o variables no pueden contener caracteres de espacio en blanco, símbolos matemáticos, flechas o caracteres especiales.
              li
                i.fas.fa-check
                | No pueden comenzar con un número, aunque los números pueden incluirse en otros lugares dentro del nombre, en el medio o al final.
              li
                i.fas.fa-check
                | No se puede declarar una constante o variable de un cierto tipo, dos veces con el mismo nombre o cambiar el tipo de dato para almacenar valores de un tipo diferente.

          .col-md-6
            figcaption.customCaption.mb-2 <b>Ejemplo</b> 
            .tarjeta.tarjeta--gris.p-4
              figure
                img.nW(src='@/assets/curso/t1-c3.svg', alt='Ejmplo de codigo')

      .py-3.py-md-4(titulo="Nomenclatura de variables y constantes")
        .row.mb-5
          .col-md-6.mb-4.mb-md-0.p-4
            h4 Función print
            p.mb-3 Es una función global que permite imprimir uno o varios valores que contienen las constantes o las variables.
            ul.lista-ul
              li
                i.fas.fa-check
                | Los nombres de las constantes o variables no pueden contener caracteres de espacio en blanco, símbolos matemáticos, flechas o caracteres especiales.
              li
                i.fas.fa-check
                | No pueden comenzar con un número, aunque los números pueden incluirse en otros lugares dentro del nombre, en el medio o al final.
              li
                i.fas.fa-check
                | No se puede declarar una constante o variable de un cierto tipo, dos veces con el mismo nombre o cambiar el tipo de dato para almacenar valores de un tipo diferente.

          .col-md-6
            figcaption.customCaption.mb-2 <b>Ejemplo</b> 
            .tarjeta.tarjeta--gris.p-4
              figure
                img.nW(src='@/assets/curso/t1-c4.svg', alt='Ejmplo de codigo')
    
    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.color-secundario.p-4.mb-5
          p.mb-0  <b>Nota.</b> Swift no requiere que escriba un punto y coma (;) después de cada declaración en su código, a diferencia de muchos otros lenguajes.



    Separador
    br
    br
    #t_1_3.titulo-segundo
      h2  1.3  Operadores básicos
    .row.justify-content-center.mb-5
      .col-lg-8    
        .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-3.mb-lg-0
              figure.mb-5(data-aos="flip-left", data-aos-delay='0')
                img.nW(src='@/assets/curso/t1-ic7.svg', alt='Imagen Decorativa') 
            .col-lg-9
              .bloque-texto-a__texto.p-4
                p.mb-0  Los operadores son los símbolos que se utilizan para <b>asignar, comparar o combinar valores,</b> a continuación, podrá observar los tipos de operadores básicos:
    TabsA.color-acento-botones.mb-5
      .tarjeta.color-primario.p-4(titulo="Operadores de asignación")
        .row
          .col-lg-2
            figure
              img.nW(src='@/assets/curso/t1-ic8.svg', alt='icono decorativo')
          .col-lg-10
            h4 Operadores de asignación
            p (=) se encarga de inicializar o de actualizar un valor.
            figcaption.customCaption Ejemplo
            .tarjeta.tarjeta--gris.p-4
              figure
                img.nW(src='@/assets/curso/c1.png', alt='Ejemplo de codigo')

      .tarjeta.color-primario.p-4(titulo="Operadores aritméticos")
        .row
          .col-lg-2
            figure
              img.nW(src='@/assets/curso/t1-ic9.svg', alt='icono decorativo')
          .col-lg-10
            h4 Operadores aritméticos
            .row
              .col-lg-4
                ul.lista-ul
                  li
                    i.fas.fa-check
                    | Suma (+)
                  li
                    i.fas.fa-check
                    | Resta (-)
                  li
                    i.fas.fa-check
                    | Multiplicación (*)
              .col-lg-4
                ul.lista-ul
                  li
                    i.fas.fa-check
                    | División (/)
                  li
                    i.fas.fa-check
                    | Módulo (%)
                   
            figcaption.customCaption Ejemplo
            .tarjeta.tarjeta--gris.p-4
              
              figure
                img.nW(src='@/assets/curso/c2.png', alt='Ejemplo de codigo')

      .tarjeta.color-primario.p-4(titulo="Operadores de comparación")
        .row
          .col-lg-2
            figure
              img.nW(src='@/assets/curso/t1-ic10.svg', alt='icono decorativo')
          .col-lg-10
            h4 Operadores de comparación
            .row
              .col-lg-4
                ul.lista-ul
                  li
                    i.fas.fa-check
                    | Igual a ( )a == b
                  li
                    i.fas.fa-check
                    | No es igual a ( )a !=
                  li
                    i.fas.fa-check
                    | Mayor que ( )a > b
              .col-lg-4
                ul.lista-ul
                  li
                    i.fas.fa-check
                    | Menor que ( )a < b
                  li
                    i.fas.fa-check
                    | Mayor o igual a ( )a >= b
                  li
                    i.fas.fa-check
                    | Menor o igual a ( )a <= b  
                   
            figcaption.customCaption Ejemplo
            .tarjeta.tarjeta--gris.p-4
              
              figure
                img.nW(src='@/assets/curso/c3.png', alt='Ejemplo de codigo')




    Separador
    br
    br
    #t_1_4.titulo-segundo
      h2  1.4 Condicionales
    .row.mb-5
      .col-lg-2
         figure
          img.nW(src='@/assets/curso/t1-ic11.svg', alt='imagen decorativa')
      .col-lg-10
        p.mb-3  <i><b>Swift</b></i> proporciona dos formas determinadas para trabajar con condicionales en su código, la declaración <i><b>if</b></i> y la declaración <b><i>switch</i></b>.
        p.mb-3  La declaración <i><b>if</b></i> usualmente se trabaja cuando se necesita evaluar condiciones simples, mientras que <i><b>switch</b></i>  se adapta mejor a condiciones con múltiples respuestas.
    
    h3.titulo-tercero Estructura condicional <i>if</i> simple
    .row.mb-5.justify-content-center
      .col-lg-8
        .tarjeta.tarjeta--gris.p-4.mb-5  
          figure
            img.nW(src='@/assets/curso/p1.png', alt='Ejemplo de codigo')

        figcaption.customCaption.text-bold.mb-3 Ejemplo
        .tarjeta.tarjeta--gris.p-4
          figure
            img.nW(src='@/assets/curso/p2.png', alt='Ejemplo de codigo')

    .row.mb-5.justify-content-center
      .col-lg-10
        .cajon.color-secundario.p-4.mb-5(data-aos="flip-up")
          p.mb-0  El ejemplo anterior verifica si la edad es mayor o igual a 18, si se cumple imprime un mensaje informando que es mayor de edad, en caso contrario no se imprime ningún mensaje.

        p.mb-5  El condicional if contiene declaraciones alternativas como la cláusula else que se utiliza cuando la condición es falsa, para el ejemplo anterior no se ejecutaba ninguna acción si la condición era falsa, con la cláusula else se puede realizar esta verificación así:
    
    figcaption.customCaption.mb-3 <b>Ejemplo</b> cláusula <i>else</i>
    .row.mb-5.justify-content-center
      .col-lg-8
        .tarjeta.tarjeta--gris.p-4
          figure
            img.nW(src='@/assets/curso/p3.png', alt='Ejemplo de codigo')

    .row.mb-5
      .col-lg-6
        .cajon.color-secundario.p-4
          p.mb-0 Para este ejemplo se ejecuta una de las dos instrucciones.

    h3.titulo-tercero Switch
    p.mb-5  Una declaración switch considera un valor y lo compara con varios de los valores de coincidencia posibles, ejecutando un bloque de código en el cual encuentra la coincidencia, esto quiere decir que compara un valor con uno o más valores del mismo tipo.
    
    figcaption.customCaption.mb-3 <b>Sintaxis</b>
    .row.mb-5.justify-content-center
      .col-lg-8
        .tarjeta.tarjeta--gris.p-4
          figure
            img.nW(src='@/assets/curso/p4.png', alt='Ejemplo de codigo')

    figcaption.customCaption.mb-3 <b>Ejemplo:</b>
    .row.mb-5.justify-content-center
      .col-lg-8
        .tarjeta.tarjeta--gris.p-4
          figure
            img.nW(src='@/assets/curso/p5.png', alt='Ejemplo de codigo')

    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.color-secundario.p-4
          p.mb-0 El ejemplo anterior compara los días de la semana, el resultado que imprime es Tercer día de la semana porque la variable día coincide con el valor que tiene este mensaje.


    Separador
    br
    br

    #t_1_5.titulo-segundo
      h2  1.5 Ciclos
    .row.mb-5
      .col-lg-2
        figure
          img.nW(src='@/assets/curso/t1-ic-12.svg', alt='imagen decorativa')
      .col-lg-10
        p.mb-3 Los ciclos o bucles iteran elementos de rangos de números, matrices o caracteres de una cadena sobre una secuencia. Entre los bucles más utilizados se encuentra el ciclo <i><b>for</b></i> y el ciclo <i><b>while</b></i>.
    
    h3.titulo-tercero Estructura ciclo <i>for</i>

    .row.mb-5.justify-content-center
      .col-lg-8
        .tarjeta.tarjeta--gris.p-4.mb-5  
          figure
            img.nW(src='@/assets/curso/p6.png', alt='Ejemplo de codigo')

        figcaption.customCaption.text-bold.mb-3 Ejemplo
        .tarjeta.tarjeta--gris.p-4.mb-5
          figure
            img.nW(src='@/assets/curso/p7.png', alt='Ejemplo de codigo')

        .cajon.color-secundario.p-4.mb-5
          p.mb-0  El ejemplo muestra una iteración de los números del 0 al 5, imprimiendo cada valor, a diferencia de otros lenguajes y, cómo la condicional if en swift no requiere de paréntesis. 
        
        .row.justify-content-center.mb-5
          .col-lg-8
            .tarjeta.tarjeta--gris.p-4.mb-5
              figure
                img.nW(src='@/assets/curso/p8.png', alt='Ejemplo de codigo')
    
    h3.titulo-tercero Estructura ciclo <i>while</i>
    ul.lista-ul
      li
        i.fas.fa-check
        p Una declaración <i><b>while</b></i> hace un proceso de iteración hasta que la condición sea falsa.
      li
        i.fas.fa-check
        p El uso de este tipo de bucles se hace normalmente cuando no se conoce el número de iteraciones.
    .row.justify-content-center.mb-5
      .col-lg-8
        .tarjeta.tarjeta--gris.p-4.mb-5
          figure
            img.nW(src='@/assets/curso/p9.png', alt='Ejemplo de codigo')

    figcaption.customCaption.text-bold.mb-3 Ejemplo
    .row.justify-content-center.mb-5
      .col-lg-8
        .tarjeta.tarjeta--gris.p-4.mb-5(data-aos="flip-up", data-aos-delay='0')
          figure
            img.nW(src='@/assets/curso/p10.png', alt='Ejemplo de codigo')
        .tarjeta.tarjeta--gris.p-4.mb-5(data-aos="flip-down", data-aos-delay='0')
          figure
            img.nW(src='@/assets/curso/p11.png', alt='Ejemplo de codigo')
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
                  p.mb-0 A continuación, puede profundizar sobre el lenguaje de programación Swift de forma más detallada, para esto se invita a que visite la página: 
              a.anexo.mb-4.mb-lg-0(href="https://docs.swift.org/swift-book/LanguageGuide/TheBasics.html " target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p <b>Enlace web.</b> Enlace web. https://docs.swift.org/swift-book/LanguageGuide/TheBasics.html 







  
</template>

<script>
export default {
  name: 'Tema1',

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
