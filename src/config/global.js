export default {
  global: {
    componenteFormativo:
      'Construir aplicativo según las características de la arquitectura iOS',
    descripcionCurso:
      'En este componente formativo se abordan los conceptos clave para el diseño y desarrollo de aplicaciones móviles nativas, como sus elementos, vistas, maquetación de entornos de desarrollo, lenguajes etc.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Lenguaje <i>Swift</i>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Características',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Tipos de datos',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Operadores básicos',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Condicionales',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Ciclos',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Entorno de desarrollo <i>Xcode</i>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Instalación',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Configuración',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: '<i>SwiftUI</i>',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Persistencia de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: '<i>Core data</i>',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: '<i>Cloudkit</i>',
            hash: 't_3_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia: 'Apple. (2021). Apple Books. <i>An all-new chapter</i>',
      link: 'https://www.apple.com/apple-books',
    },
    {
      referencia: 'Developer. (2021). <i>Enabling cloudkit in your app.</i>',
      link:
        'https://developer.apple.com/documentation/cloudkit/enabling_cloudkit_in_your_app',
    },
    {
      referencia: 'Developer. (2021). Soporte para desarrolladores.',
      link: 'https://developer.apple.com/es/support',
    },
    {
      referencia:
        'Developer. (2021). <i>SwiftUI essentials creating and combining views.</i>',
      link:
        'https://developer.apple.com/tutorials/swiftui/creating-and-combining-views',
    },
    {
      referencia:
        'Swift - Apple (CO). (2021). Swift. Un poderoso lenguaje al alcance de todos para crear increíbles apps.',
      link: 'https://www.apple.com/co/swift',
    },
  ],
  glosario: [
    {
      termino: 'Cocoa',
      significado:
        'Es un <i>framework</i> que permite el desarrollo de aplicaciones nativas para macOS.',
    },
    {
      termino: 'WWDC',
      significado:
        'Es la Conferencia Mundial de Desarrolladores de Apple, uno de los eventos tecnológicos más importantes del calendario.',
    },
  ],
  complementario: [
    {
      texto:
        'Aplicación <i>Xcode</i>: MoureDev by Brais Moure. (2020). Xcode: cómo crear una app (para principiantes tutorial) [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=MyzZnIR5gC4',
    },
    {
      texto:
        'Bases de datos cloud: Developer. (2021). <i>Designing and creating a cloudkit database.</i>',
      tipo: 'Página oficial',
      link:
        'https://developer.apple.com/documentation/cloudkit/designing_and_creating_a_cloudkit_database',
    },
    {
      texto: 'Cloudkit: Developer. (2021). Enabling cloudkit in your app. ',
      tipo: 'Página',
      link:
        'https://developer.apple.com/documentation/cloudkit/enabling_cloudkit_in_your_app',
    },
    {
      texto:
        'Condicionales: Swift. (2021). Conceptos básicos: el lenguaje de programación Swift 5.5.',
      tipo: 'Pagina',
      link: 'https://docs.swift.org/swift-book/LanguageGuide/TheBasics.htm',
    },
    {
      texto: 'Core data: Mastermoviles. (2021). <i>El stack de Core data.</i>',
      tipo: 'Video',
      link:
        'https://mastermoviles.gitbook.io/persistencia-en-dispositivos-m-viles-ios/intro-2/3.2_stack',
    },
    {
      texto:
        'Core data: MSAFT.Industries. (2018). <i>Programando Core data en iOS [video]. YouTube. </i>',
      tipo: 'Video',
      link:
        'https://mastermoviles.gitbook.io/persistencia-en-dispositivos-m-viles-ios/intro-2/3.2_stack',
    },
    {
      texto:
        'Instalación Xcode: Programando, A. &. (2020). Paso 3 - Descarga, instalación y configuración simple Xcode [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=xTy6BWV4NR8',
    },
    {
      texto:
        'Swift - Apple (CO). (2021). <i>Swift. Un poderoso lenguaje al alcance de todos para crear increíbles apps.</i>',
      tipo: 'Página oficial',
      link: 'https://www.apple.com/co/swift',
    },
    {
      texto:
        '<i>SQLITE:</i> Luisi, A. (2016). Xcode programación (parte 1) - Conexión a base de datos SQLITE [video].',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=k4GK4MmE4Ag&t=27s',
    },
    {
      texto:
        'AdnanTech. (2021). <i>Create, read, update and delete from SQLite - Swift & Swift UI.</i>',
      tipo: 'Video',
      link:
        'https://adnan-tech.com/create-read-update-and-delete-from-sqlite-swift-swift-ui',
    },
    {
      texto:
        '<i>SwiftUI</i>: Developer. (2021). SwiftUI essentials creating and combining views. ',
      tipo: 'Página oficial',
      link:
        'https://developer.apple.com/tutorials/swiftui/creating-and-combining-views',
    },
    {
      texto:
        'Tipos de datos: Apple Coding. (2016). Swift 2, Lección 1, variables, constantes, inferencia y colecciones.',
      tipo: 'Página',
      link:
        'https://applecoding.com/cursos/leccion-1-variables-constantes-inferencia-colecciones',
    },
    {
      texto: 'Xcode: ‎Xcode. (2021). <i>Vista previa de Mac App Store.</i>',
      tipo: 'Página',
      link: 'https://apps.apple.com/es/app/xcode/id497799835?ls=1&mt=12',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zulema León',
        cargo: 'Experta temática',
        centro:
          'Centro de Teleinformática y Producción Industrial',
      },
      {
        nombre: 'María Inés Machado López',
        cargo: 'Diseñadora instruccional',
        centro:
          'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Alix Cecilia Chinchilla Rueda',
        cargo: 'Evaluadora instruccional',
        centro:
          'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Diseñadora y evaluadora instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Nombre 1', 'Nombre 2'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
