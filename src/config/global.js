export default {
  global: {
    Name: 'Impacto variables ambientales en agroecosistemas',
    Description:
      'La biodiversidad en agroecosistemas es clave para la sostenibilidad agrícola, integrando flora, fauna y bioindicadores del suelo. Su gestión adecuada favorece la producción, seguridad alimentaria y control biológico. Variables agroclimáticas, calidad del agua y suelo influyen en el desarrollo agrícola. La matriz de priorización permite evaluar impactos y optimizar el manejo ambiental en agroecosistemas.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Biodiversidad en agroecosistemas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Inventarios y evaluación',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Gestión entre servicios ecosistémicos y biodiversidad',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Tipos de coberturas vegetales',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Bioindicadores',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Definición de las variables ambientales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Variables agroclimáticas',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Definición de las variables ambientales del agua',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Definición variables ambientales para calidad del suelo',
            hash: 't_2_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
  complementario: [
    {
      tema: 'Definición de variables ambientales del agua y del suelo',
      referencia:
        'IDEAM. (2018). <em>Protocolo de monitoreo del agua. Ministerio de Ambiente y Desarrollo Sostenible</em>.',
      tipo: 'Documento PDF',
      link:
        'https://corpouraba.gov.co/wp-content/uploads/2.-PROTOCOLO_MONITOREO_AGUA_IDEAM.pdf',
    },
    {
      tema: 'Marco normativo de la Producción Agropecuaria Ecológica',
      referencia:
        'Ministerio de Agricultura y Desarrollo Rural. (2024). <em>Política Pública de Agroecología</em>.',
      tipo: 'Página web',
      link:
        'https://www.minagricultura.gov.co/Normatividad/Resoluciones/Anexo%20T%C3%A9cnico%20-%20Lineamientos%20de%20Pol%C3%ADtica%20P%C3%BAblica.pdf ',
    },
    {
      tema: 'Marco normativo de la Producción Agropecuaria Ecológica',
      referencia:
        'FAO. (2021). <em>Documento propuesta de lineamientos de política pública en agroecología para Colombia</em>.',
      tipo: 'Página web',
      link:
        'http://sembrandocapacidades.fao.org.co/wp-content/uploads/2021/11/V-FINAL-DOCUMENTO-POLITICA-PUBLICA-ESPAN%CC%83OL-V-WEB.pdf ',
    },
  ],
  glosario: [
    {
      termino: 'Calidad de agua',
      significado:
        'resultado de comparar las características físicas, químicas y microbiológicas encontradas en el agua con el contenido de las normas que regulan la materia.',
    },
    {
      termino: 'Calidad del suelo',
      significado:
        'capacidad del suelo para funcionar dentro de los límites de un ecosistema natural o manejado, sostener la productividad de las plantas y los animales, mantener o mejorar la calidad del aire y del agua, y sostener la salud humana y el hábitat.',
    },
    {
      termino: 'Materia orgánica',
      significado:
        'componente esencial en los ecosistemas y suelos agrícolas, fundamental para la fertilidad del suelo y la sostenibilidad de los agroecosistemas.',
    },
    {
      termino: 'Priorización de variables',
      significado:
        'selección de variables ambientales que pueden incidir en el desarrollo de un agroecosistema y que se priorizan mediante una matriz que determina el grado de importancia.',
    },
    {
      termino: 'Variables <em>In Situ</em>',
      significado:
        'variables que se deben medir en el lugar donde se realizará el muestreo, ya sea de agua o de suelo.',
    },
    {
      termino: 'Variables ambientales',
      significado:
        'representación cualitativa o cuantitativa asignada a un aspecto ambiental, que permite observar algún tipo de variación al realizar la medición. El propósito de la medición es conocer la afectación o impacto de las actividades productivas del agroecosistema sobre el medio ambiente y cómo estas variables pueden afectar a otras con las que están relacionadas.',
    },
    {
      termino: 'Vertimiento',
      significado:
        'descarga final a un cuerpo de agua, a un alcantarillado o al suelo, de elementos, sustancias o compuestos contenidos en un medio líquido. ',
    },
  ],
  referencias: [
    {
      referencia:
        'Fernández, L. (2020). Bioindicadores: qué son, tipos y ejemplos. <em>Ecología Verde</em>. ',
      link:
        'https://www.ecologiaverde.com/bioindicadores-que-son-tipos-y-ejemplos-2846.html',
    },
    {
      referencia:
        'Fundación Grupo Cajamar. (2024). <em>Textura y estructura del suelo</em>. ',
      link:
        'https://www.plataformatierra.es/innovacion/indicadores-salud-del-suelo-claves-cultivo-exitoso-sostenible',
    },
    {
      referencia:
        'Holt, E., & Miller, S. (2010). Bioindicators: Using organisms to measure environmental impacts. <em>Nature Education Knowledge</em>, 3(10), 8. ',
      link:
        'https://www.nature.com/scitable/knowledge/library/bioindicators-using-organisms-to-measure-environmental-impacts-16821310/',
    },
    {
      referencia:
        'Instituto de Hidrología, Meteorología y Estudios Ambientales [IDEAM]. (2009). <em>Proporción de la superficie cubierta por diferentes tipos de coberturas</em>.',
      link:
        'https://bart.ideam.gov.co/indiecosistemas/ind/suelos_tierras/hm/HM_proporcion_diferentes_coberturas.pdf',
    },
    {
      referencia:
        'Instituto de Hidrología, Meteorología y Estudios Ambientales [IDEAM]. (2018). <em>Protocolo de monitoreo del agua</em>. Ministerio de Ambiente y Desarrollo Sostenible. ',
      link:
        'https://corpouraba.gov.co/wp-content/uploads/2.-PROTOCOLO_MONITOREO_AGUA_IDEAM.pdf',
    },
    {
      referencia:
        'Jiménez, R., & González-Quiñones, V. (2006). La calidad de los suelos como medida para su conservación. <em>Edafología</em>, 13(3), 125-138.',
      link: 'http://edafologia.ugr.es/revista/tomo13c/articulo125.pdf',
    },
    {
      referencia:
        'Masera, O., Astier, M., & López-Ridaura, S. (2000). <em>Sustentabilidad y manejo de recursos naturales: El marco de evaluación MESMIS</em>. GIRA, Mundi-Prensa, Instituto de Ecología-UNAM. ',
      link:
        'https://www.researchgate.net/profile/Marta-Astier/publication/299870632_Sustentabilidad_y_manejo_de_recursos_naturales_El_Marco_de_evaluacion_MESMIS/links/57068f7f08aea3d280211802/Sustentabilidad-y-manejo-de-recursos-naturales-El-Marco-de-evaluacion-MESMIS.pdf',
    },
    {
      referencia:
        'Metroflor-Agro. (2017). <em>La importancia de la biodiversidad en el funcionamiento de los agroecosistemas: caso floricultura</em>. ',
      link:
        'https://www.metroflorcolombia.com/la-importancia-de-la-biodiversidad-en-el-funcionamiento-de-los-agroecosistemas-caso-floricultura/',
    },
    {
      referencia:
        'Ministerio de Agricultura y Desarrollo Rural. (2024). <em>Política pública de agroecología</em>. ',
      link: '',
    },
    {
      referencia:
        'Organización de las Naciones Unidas para la Alimentación y la Agricultura [FAO]. (2018). <em>Agricultura sostenible y biodiversidad: un vínculo indisociable</em>.',
      link:
        'https://openknowledge.fao.org/server/api/core/bitstreams/cd6cfec5-06f5-437a-a17e-c51cdc320f5a/content',
    },
    {
      referencia:
        'Organización de las Naciones Unidas para la Alimentación y la Agricultura [FAO]. (2021). <em>Documento propuesta de lineamientos de política pública en agroecología para Colombia</em>. ',
      link: 'http://sembrandocapacidades.fao.org.co',
    },
    {
      referencia:
        'Organización de las Naciones Unidas para la Alimentación y la Agricultura [FAO]. (2025). <em>Generalidades</em>.',
      link:
        'https://www.fao.org/fishery/static/FAO_Training/FAO_Training/General/x6706s/x6706s01.htm',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Líder del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermudez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Deya Maritza Cortes Enríquez ',
          cargo: 'Experto temático',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yerson Fabian Zarate Saavedra',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Robinson Javier Ordoñez Barreiro',
          cargo: 'Desarrollador <em>fullstack</em>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Andrés Felipe Guevara Ariza',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'GESTORES DE REPOSITORIO',
      autores: [
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Raúl Mosquera Serrano',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
