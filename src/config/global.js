export default {
  global: {
    componenteFormativo: 'Construcción aplicación web',
    descripcionCurso:
      'En este componente formativo se realizará una aplicación web completa (Backend y Front-end). Se utilizarán tecnologías del lado del servidor como Node.js, MongoDB, Express y del lado del cliente AngularJS y Materialize. La aplicación consumirá un API REST con el propósito de hacer el registro de empleados en una empresa.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
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
        titulo: 'Construcción del Backend de la aplicación web',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Instalación y configuración de herramientas de Node.js',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Desarrollo del index.js',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Configuración e instalación de la bbase de datos MongoDB',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Configuración de database.js',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Configuración de las rutas del proyecto con Node.js',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Desarrollo de controladores para la API REST',
            hash: 't_1_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.7',
            titulo: 'Realización de pruebas de la API REST con Postman',
            hash: 't_1_7',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Construcción del Front-end de la aplicación web',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Instalación y configuración de AngularJS',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Generación de código con ng',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Incorporación de Materialize al proyecto web',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Configuración de app.component.html',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Configuración de los módulos app.modules.ts',
            hash: 't_2_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.6',
            titulo: 'Configuración del modelo empleado.ts',
            hash: 't_2_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.7',
            titulo: 'Creación del servicio empleado.service.ts',
            hash: 't_2_7',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.8',
            titulo: 'Desarrollo del componente empleados.components.ts',
            hash: 't_2_8',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.9',
            titulo: 'Desarrollo de la interfaz HTML empleados.component.html',
            hash: 't_2_9',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.10',
            titulo: 'Probando la aplicación completa. Proyecto web terminado',
            hash: 't_2_10',
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
      referencia: 'Vortexbird. (2017). Nodemon.',
      link: 'https://vortexbird.com/nodemon/',
    },
  ],
  glosario: [
    {
      termino: 'Async',
      significado:
        'cuando se llama a una función async, se devuelve un elemento de tipo promesa o promise. Cuando la función async devuelve un valor, la promesa resolverá con el valor devuelto. Si la función async genera una excepción o algún valor, la promesa se rechazará con el valor generado.',
    },
    {
      termino: 'Await',
      significado:
        ' una función async puede contener una expresión await, de hecho es una buena práctica.  Para lo cual pausa la ejecución de la función asíncrona y espera la resolución de la promesa pasada y, a continuación, reanuda la ejecución de la función async y devuelve el valor resuelto.',
    },
    {
      termino: 'CDN',
      significado:
        'una red de distribución de contenido. Es un tipo de sistema informático en red, el cual consiste en distribuir o repartir parte de la información en diferentes servidores. De esta forma el usuario recibe el contenido de la página del servidor más cercano.',
    },
    {
      termino: 'Middleware',
      significado:
        ' una middleware en Node.js es un bloque de código completo que se ejecuta entre la petición que hace el usuario (request) hasta que la petición llega al servidor.',
    },
    {
      termino: 'Promise',
      significado:
        ' el objeto promise (promesa) es usado para computaciones asíncronas. Así que una promesa representa un valor que puede estar disponible ahora o más adelante.',
    },
  ],
  complementario: [
    {
      texto:
        'EDteam. (2020). ¿Qué es Backend y Front-end? (guía completa) [video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/50RbVujPPGs',
    },
    {
      texto: 'MongoDB. (2021). Install MongoDB Community Edition on Windows.',
      tipo: 'Instalador',
      link:
        'https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/',
    },
    {
      texto:
        'Coding, G. (2020). Cómo instalar Node.js en Windows 10 [video]. YouTube. ',
      tipo: 'Video',
      link: 'https://youtu.be/BgtB31gXkoA',
    },
    {
      texto: 'Angular. (2021). Installing Angular CLI.',
      tipo: 'Página web',
      link: 'https://angular.io/cli',
    },
    {
      texto:
        'Limitless Minds. (2019).  Instalación Postman y prueba de los métodos GET [video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=440yQGvINkk',
    },
    {
      texto: 'Materializecss. (2021). Getting Started - Materialize. ',
      tipo: 'Página web',
      link: 'https://materializecss.com/getting-started.html ',
    },
    {
      texto:
        'Developer Soapbox. (2020). How to use Visual Studio Code as your MongoDB IDE [video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=wM7NJtQ0F6U',
    },
    {
      texto: 'GitLab. (2021). Gestion-empleados. ',
      tipo: 'Software',
      link: 'https://gitlab.com/jonathanga/gestion-empleados',
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
        nombre: 'Henry Eduardo Bastidas Paruma',
        cargo: 'Experto temático',
        centro:
          'Centro de teleinformática y producción industrial - Regional Cauca',
      },
      {
        nombre: 'Peter Emerson Pinchao Solís',
        cargo: 'Experto temático',
        centro:
          'Centro de teleinformática y producción industrial - Regional Cauca',
      },
      {
        nombre: 'Oscar Absalón Guevara',
        cargo: 'Diseñador instruccional',
        centro: 'Centro de Gestión Industrial',
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
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Carlos Julián Ramírez Benítez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Luis Jesús Pérez Madariaga',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
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
