import { Categoria } from '../interfaces/categorias';

export const CATEGORIAS: Categoria[] = [
  {
    nombre: 'Manicure',
    id: 250,
    imgUrl: 'https://nailsandco.com.ar/wp-content/uploads/2019/05/Nails_web_home-01.png',
    productos: [
      {
        id: 1,
        nombre: 'Manicure Express',
        duracion:'15 minutos',
        precio: 2220,
        incluye: ['Limado, pulido y esmaltado.'],
        imagen:
          'https://nailsandco.com.ar/wp-content/uploads/2019/05/Nails_web_servicios_manucure-express-1.png',
      },
      {
        id: 2,
        nombre: 'Manicure Basic',
        duracion:'30 minutos',
        precio: 3330,
        incluye: ['Limado', 'cutícutla','esmaltado e hidratación con crema de almendras.'],
        imagen:
          'https://nailsandco.com.ar/wp-content/uploads/2019/05/Nails_web_servicios_manucure-express-copia-1.png',
      },
      {
        id: 3,
        nombre: 'Manicure Premium',
        duracion:'50 minutos',
        precio: 44440,
        incluye: ['Liamdo', 'cutícula', 'esmaltado', 'exfoliación con exfolinates naturales y masajes naturales'],
        imagen:
          'https://nailsandco.com.ar/wp-content/uploads/2019/05/Nails_web_servicios_manucure-express-copia-2-1.png',
      },
    ],
  },
  {
    nombre: 'Pedicure',
    id: 1,
    imgUrl:
      'https://nailsandco.com.ar/wp-content/uploads/2019/05/Nails_web_home-02.png',
    productos: [
      {
        id: 4,
        nombre: 'PODOESTÉTICA',
        duracion:'50 minutos',
        precio: 1000,
        incluye: ['Limado', 'cutícula', 'y esmaltado', 'Utilización del bisturí para eliminar durezas y terminaciones con torno para darle una forma delicada y perfecta.'],
        imagen:
          'https://nailsandco.com.ar/wp-content/uploads/2019/05/Nails_web_servicios_manucure-express-copia-5-1.png',
      },
      {
        id: 5,
        nombre: 'Pedicure Basic',
        duracion:'30 minutos',
        precio: 1200,
        incluye: ['Limado', 'cutícula', 'esmaltado e hidatración con crema de almendras'],
        imagen:
          'https://nailsandco.com.ar/wp-content/uploads/2019/05/Nails_web_servicios_manucure-express-copia-4-1.png',
      },
      {
        id: 6,
        nombre: 'Pedicure Premium',
        duracion:'50 minutos',
        precio: 1300,
        incluye: ['Limado', 'cutícula', 'esmaltado', ' exfoliación con exfoliantes naturales y masajes con aceites tibios. Utilización del torno para limar impurezas y durezas.'],
        imagen:
          'https://nailsandco.com.ar/wp-content/uploads/2019/05/Nails_web_servicios_manucure-express-copia-3-1.png',
      },
    ],
  },
  {
    nombre: 'Esmaltados',
    id: 2,
    imgUrl:
      'https://nailsandco.com.ar/wp-content/uploads/2019/05/Nails_web_home-03.png',
    productos: [
      {
        id: 7,
        nombre: 'Esmaltado Semipermanente',
        duracion:'1 hora',
        precio: 800,
        incluye: ['Uñas brillantes y perfectas de 15 a 20 días con nuestros esmaltes Nails Gel. ESMALTADO SEMI-PERMANENTE no lleva limado de la superficie y se retira simplemente con Nails&Co Remover, rico en aceites especiales que ayudan al cuidado de las uñas.'],
        imagen: 'https://nailsandco.com.ar/wp-content/uploads/2019/05/Nails_web_servicios_manucure-express-copia-6-1.png',
      },
      {
        id: 8,
        nombre: 'Esmaltado con Decoración',
        duracion:'1 hora y media',
        precio: 800,
        incluye: ['En Nails&Co podés darle un toque final a tus uñas con nuestro servicio de DECORACIÓN. Nuestras Nails Artist están capacitadas para realizar el diseño qué más te guste, tus uñas no sólo van a ser perfectas, sino también ¡únicas!'],
        imagen:
          'https://www.cronica.com.ar/__export/1653520801548/sites/cronica/img/2021/06/17/chocotorta_2_crop1623944104124.jpg_792575817.jpg',
      },
      {
        id: 9,
        nombre: 'Esmaltado Shine',
        duracion:'20 minutos',
        precio: 800,
        incluye: ['¡Disfruta de la duración y el brillo tipo gel en una fórmula fácil de esmaltar! El sistema profesional de esmalte de larga duración OPI Infinite Shine de 3 pasos proporciona un color intenso y duradero que no requiere luz para su curado.'],
        imagen:
          'https://assets.elgourmet.com/wp-content/uploads/2023/03/cover_ipk5fgqbdh_eg-pf-platos-turron-de-avena-hi-03.jpg',
      },
    ],
  },
  {
    nombre: 'Otros servicios',
    id: 3,
    imgUrl:
      'https://nailsandco.com.ar/wp-content/uploads/2019/05/Nails_web_home-04.png',
    productos: [
      {
        id: 10,
        nombre: 'Servicio Uñas esculpidas',
        duracion:'25 minutos',
        precio: 100,
        incluye: ['Las uñas esculpidas son una gran solución para dejar de dañar tus uñas y qué crezcan sanas y fuertes. Se les dá la forma y extensión qué el cliente prefiera. Tus manos se verán perfectas y naturales instantáneamente.'],
        imagen:
          'https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/3040004_f.jpg',
      },
      {
        id: 11,
        nombre: 'Servicio VIP',
        duracion:'30 minutos',
        precio: 100,
        incluye: ['Disfrutá en todas las sucursales Nails&Co de nuestro servicio VIP, especialmente pensado para vos, porque tu tiempo es importante, te hacemos manos y pies juntos, reduciendo así la duración del turno a la mitad. ¡Manos y pies perfectos en 30 minutos!'],
        imagen:
          'https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/3040783_f.jpg',
      },
      {
        id: 12,
        nombre: 'Servicio Beauty',
        duracion:'Una hora',
        precio: 100,
        incluye: ['Seguimos creciendo para vos, por eso ahora vas a encontrar en locales Nails&Co especializados el nuevo espacio BEAUTY, con servicios exclusivos para tu rostro y cuerpo: Perfilado de cejas, Tinte y permanente de pestañas, higiene facial, masajes, depilación y mucho más.'],
        imagen:
          'https://carrefourar.vtexassets.com/arquivos/ids/332920/7790895648670_E02.jpg?v=638212197029330000',
      },
    ],
  },
];
