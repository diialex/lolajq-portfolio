export type SeriesId = 'cuerpo' | 'intervencion' | 'calzado' | 'formacion';

export type GalleryItem = {
  src: string;              // imagen principal (portada)
  images?: string[];        // fotos adicionales para ciclar al hover
  video?: {
    src: string;            // ruta del vídeo
    poster?: string;        // opcional, si no se usa `src` como poster
  };
  caption?: string;
  group?: string;
};

export type CaseStudy = {
  slug: string;                 // 'bota-alta'
  name: string;                 // 'Bota alta'
  category: 'Tacones' | 'Botas' | 'Deportivas';
  inspiration?: string[];       // imágenes de referencia (varias)
  sketch?: string[];            // bocetos
  result?: string[];            // resultados finales
  model3d?: string;             // ruta a un .glb opcional
  notes?: string;               // 1 frase de contexto
};

export type ProjectVideo = {
  src: string;
  poster: string;
  caption?: string;
  aspect?: 'video' | 'portrait' | 'square';
};

export type GalleryLayout = 'editorial' | 'masonry' | 'split' | 'full-bleed';

export type ProjectDisplay = 'editorial' | 'grid' | 'sketch' | 'case-study';

export type Project = {
  slug: string;
  title: string;
  year: string;
  category: string;
  description: string;
  longDescription?: string;
  cover: string;
  coverAspect?: string;
  coverSequence?: string[];      // (reservado, no se usa aún)
  display?: ProjectDisplay;
  caseStudies?: CaseStudy[];
  gallery?: GalleryItem[];
  galleryLayout?: GalleryLayout; // zigzag = 'editorial'
  videos?: ProjectVideo[];
  size: 'small' | 'large' | 'tall';
};

export type Series = {
  id: SeriesId;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  projects: Project[];
};

export const series: Series[] = [
  {
    id: 'cuerpo',
    number: '01',
    title: 'El cuerpo como origen',
    subtitle: 'Investigación artística y corporal',
    description:
      'Estudio del cuerpo humano desde dos miradas complementarias: el dibujo como herramienta de análisis y la experiencia de habitarlo como modelo.',
    projects: [
      {
        slug: 'investigacion-artistica',
        title: 'Investigación artística',
        year: '2023 — 2025',
        category: 'Dibujo',
        description:
          'Serie de bocetos y figurines centrados en el estudio del cuerpo, la proporción, el gesto y el movimiento como base del proceso creativo.',
        longDescription:
          'A través del dibujo se exploran siluetas, volúmenes y posibles aplicaciones al diseño de moda, utilizando el cuerpo como base del proceso creativo. La serie reúne figurines, estudios anatómicos y bocetos de trabajo.',
        cover: '/images/projects/investigacion-artistica/plastic_cover.png',
        galleryLayout: 'editorial',
        gallery: [
          { src: '/images/projects/investigacion-artistica/01-boceto-figurin.png'},
          { src: '/images/projects/investigacion-artistica/02-boceto-figurin.png'},
          { src: '/images/projects/investigacion-artistica/03-boceto-figurin.png'},
          { src: '/images/projects/investigacion-artistica/04-boceto-figurin.png'},
          { src: '/images/projects/investigacion-artistica/05-boceto-figurin.png'},
          { src: '/images/projects/investigacion-artistica/07-boceto-figurin.png'},
          { src: '/images/projects/investigacion-artistica/09-boceto-figurin.png'},
          { src: '/images/projects/investigacion-artistica/10-boceto-figurin.png'},
          { src: '/images/projects/investigacion-artistica/11-boceto-figurin.png'},
        ],
        size: 'large',
      },
      {
        slug: 'corporal',
        title: 'Investigación corporal',
        year: '2019 — 2025',
        category: 'Modelaje',
        description:
          'Trabajo como modelo en proyectos de publicidad y moda. Comprensión del comportamiento de la prenda sobre el cuerpo en movimiento.',
        longDescription:
          'Etapa como modelo en varios proyectos de publicidad y moda. Esta experiencia ha permitido comprender el comportamiento de las prendas sobre el cuerpo en movimiento, la importancia del estilismo y la construcción de una imagen. Refuerza el interés por el diseño de moda desde una mirada práctica y visual, entendiendo el cuerpo como punto de partida del diseño.',
        cover: '/images/projects/gato.jpg',
        galleryLayout: 'editorial',
        gallery: [],
        size: 'tall',
      },
    ],
  },
  {
    id: 'intervencion',
    number: '02',
    title: 'Intervención y materia',
    subtitle: 'Objetos y prendas transformadas',
    description:
      'La intervención como método: tomar un objeto existente y reescribirlo. Exploración del color, el gesto y la estructura desde la manipulación directa.',
    projects: [
      {
        slug: 'abanicos',
        display: 'grid',
        title: 'Abanicos pintados a mano',
        year: '2024',
        category: 'Objeto',
        description: 'Serie de abanicos intervenidos como ejercicio de exploración del color y el gesto. El abanico como extensión simbólica del cuerpo.',
        longDescription: 'Serie de abanicos intervenidos y pintados a mano como ejercicio de exploración del color, el gesto y el objeto. El abanico se entiende como complemento estético y extensión simbólica del cuerpo dentro del lenguaje de la moda.',
        cover: '/images/projects/abanicos/schiaparelli-01.png',
    gallery: [
      {
        src: '/images/projects/abanicos/acabanicoSenses.jpg',
        images: [
          '/images/projects/abanicos/01b.webp',
          '/images/projects/abanicos/01c.webp',
        ],
        video: { src: '/videos/abanicos/acabanicoSenses.mp4' },
        caption: 'Abanico I — Serie Schiaparelli',
      },
      {
        src: '/images/projects/abanicos/blackFlowers02.jpg',
        video: { src: '/videos/abanicos/blackFlowers02.mp4' },
        caption: 'Abanico II — Flores negras',
      },
      {
        src: '/images/projects/abanicos/flamencoLightBrown.jpg',
        video: { src: '/videos/abanicos/flamencoLightBrown.mp4' },
        caption: 'Abanico III — Feria de Abril 2025',
      },
      {
        src: '/images/projects/abanicos/lightBrown2.jpeg',
        caption: 'Abanico IV — Light Brown',
      },
      {
        src: '/images/projects/abanicos/parkLightBlue.jpg',
        video: { src: '/videos/abanicos/parkLightBlue.mp4' },
        caption: 'Abanico V — Blue Park',
      },
      {
        src: '/images/projects/abanicos/lightBlue.webp',
        caption: 'Abanico VI — Light Blue',
      },
      {
        src: '/images/projects/abanicos/brown.webp',
        caption: 'Abanico VII — Brown',
      },
      {
        src: '/images/projects/abanicos/nightLightBrown.jpg',
        video: { src: '/videos/abanicos/nightLightBrown.mp4' },
        caption: 'Abanico VIII — Night Brown',
      },
      {
        src: '/images/projects/abanicos/brown2.webp',
        caption: 'Abanico IX — Brown II',
      },
    ],
        size: 'small',
      },
      {
        slug: 'prendas-modificadas',
        title: 'Prendas modificadas',
        year: '2024',
        category: 'Prenda',
        description:
          'Modificación e intervención de prendas existentes mediante pintura, decoloración y alteración estructural.',
        longDescription:
          'Proyecto de modificación e intervención de prendas existentes mediante técnicas de pintura, decoloración y alteración de la estructura original. El objetivo es experimentar con la prenda como soporte creativo y reflexionar sobre la personalización y la transformación dentro de la moda.',
        cover: '/images/projects/prendas-modificadas/01.png',
        coverAspect: 'aspect-[5/8]', 
        galleryLayout: 'editorial',
        gallery: [
          { src: '/images/projects/prendas-modificadas/pantalones.png'},
        ],
        videos: [],
        size: 'small',
      },
    ],
  },
  {
    id: 'calzado',
    number: '03',
    title: 'Los tacones',
    subtitle: 'TFG · Bellas Artes',
    description:
      'Investigación y diseño en torno al tacón como objeto simbólico de la feminidad. Doce piezas que exploran la relación entre cuerpo, deseo, consumo y estética.',
    projects: [
      {
        slug: 'tacones',
        title: 'Los tacones',
        year: '2023',
        category: 'Calzado',
        description: '...',
        longDescription: '...',
        cover: '/images/projects/calzado/bitterSweet.png',
        display: 'case-study',
        caseStudies: [
          {
            slug: 'bota-alta',
            name: 'Bota alta',
            category: 'Botas',
            notes: 'Tacón inspirado en el neoplasticismo de Piet Mondrian, trasladando el lenguaje pictórico al diseño de calzado a través del color y la geometría.',
            inspiration: [
              '/images/projects/calzado/inspoRaya.jpg',
              '/images/projects/calzado/inspoRaya1.jpg',
              '/images/projects/calzado/inspoRaya2.jpg',
            ],
            sketch: [
              '/images/projects/calzado/bocetoRaya1.jpg',
            ],
            result: [
              '/images/projects/calzado/resultRaya.png',
            ],
            model3d: '/models/trenraya-model.glb',
          },
          {
            slug: 'bota-pacman',
            name: 'Pacman-Boot',
            category: 'Botas',
            notes: 'Diseño de bota inspirado en el videojuego Pac-Man y la estética de los años 80, utilizando el color y la cultura pop como referencia visual aplicada al calzado.',
            inspiration: [
              '/images/projects/calzado/inspoPacman.jpg',
              '/images/projects/calzado/inspoPacman1.jpg',
              '/images/projects/calzado/inspoPacman2.jpg',
            ],
            sketch: [
              '/images/projects/calzado/bocetoPacman.jpg',
            ],
            result: [
              '/images/projects/calzado/resultPacman.jpg',
            ],
            model3d: '/models/pacman-model.glb',
          },
          {
            slug: 'adidas-heel',
            name: 'Tacon Adidas',
            category: 'Tacon',
            notes: 'Tacón tipo stiletto desarrollado a partir del diálogo entre el calzado deportivo y la feminidad clásica, fusionando lo urbano con el diseño de moda.',
            inspiration: [
              '/images/projects/calzado/inspoAdidas.jpg',
              '/images/projects/calzado/inspoAdidas1.jpg',
              '/images/projects/calzado/inspoAdidas2.jpg',
            ],
            sketch: [
              '/images/projects/calzado/bocetoAdidas1.jpg',
            ],
            result: [
              '/images/projects/calzado/resultAdidas.png',
            ],
            model3d: '/models/adidas-model.glb',
          },
          {
            slug: 'belle-hari',
            name: 'Tacon Belle Hari',
            category: 'Tacon',
            notes: 'Sandalia de tacón inspirada en la identidad estética de la marca española Bellehari, explorando la relación entre elegancia, diseño contemporáneo y funcionalidad.',
            inspiration: [
              '/images/projects/calzado/inspoBellehari.jpg',
              '/images/projects/calzado/inspoBellehari1.jpg',
              '/images/projects/calzado/inspoBellehari2.jpg',
            ],
            sketch: [
              '/images/projects/calzado/bocetoBellehari.jpg',
            ],
            result: [
              '/images/projects/calzado/resultBellehari.jpg',
            ],
            model3d: '/models/bellehari-model.glb',
          },
          {
            slug: 'basquiat',
            name: 'Tacon Basquiat',
            category: 'Tacon',
            notes: 'Tacón inspirado en la obra de Jean-Michel Basquiat, trasladando el lenguaje expresivo y pictórico del arte urbano al diseño de calzado',
            inspiration: [
              '/images/projects/calzado/inspoBasquiat.jpg',
              '/images/projects/calzado/inspoBasquiat.png',
              '/images/projects/calzado/inspoBasquiat1.jpg',
            ],
            sketch: [
              '/images/projects/calzado/bocetoBasquiat.jpg',
            ],
            result: [
              '/images/projects/calzado/resultBasquiat.jpg',
            ],
            model3d: '/models/bellehari-model.glb',
          },
          {
            slug: 'flamingo',
            name: 'Tacon Flamenco',
            category: 'Tacon',
            notes: 'Tacón que fusiona la silueta clásica Luis XV con elementos de la cultura flamenca, combinando tradición, ornamentación y diseño contemporáneo.',
            inspiration: [
              '/images/projects/calzado/inspoFlamenq.jpg',
              '/images/projects/calzado/inspoFlamenq1.jpg',
              '/images/projects/calzado/inspoFlamenq2.jpg',
            ],
            sketch: [
              '/images/projects/calzado/bocetoFlamenq.jpg',
            ],
            result: [
              '/images/projects/calzado/resultFlamenq.jpg',
            ],
            model3d: '/models/flamenqued-model.glb',
          },
          {
            slug: 'schiaparelli',
            name: 'Tacon schiaparelli',
            category: 'Tacon',
            notes: 'Diseño de tacón inspirado en el surrealismo de Elsa Schiaparelli, explorando la relación entre moda, arte y objeto simbólico.',
            inspiration: [
              '/images/projects/calzado/inspoSchiaparelli.jpg',
              '/images/projects/calzado/inspoSchiaparelli.png',
              '/images/projects/calzado/inspoSchiaparelli1.png',
            ],
            sketch: [
              '/images/projects/calzado/bocetoSchiaparelli.jpg',
            ],
            result: [
              '/images/projects/calzado/resultSchiaparelli.jpg',
            ],
            model3d: '/models/flamenqued-model.glb',
          }

        
          // ... hasta 9
        ],
        size: 'large',
      }
    ],
  },
  {
    id: 'formacion',
    number: '04',
    title: 'Formación CEAC',
    subtitle: 'Pruebas de acceso',
    description:
      'Ejercicios para las pruebas de acceso al Grado de Diseño de Moda. Propuestas de moodboard, diseño de prenda y equipación deportiva.',
    projects: [
      {
        slug: 'ceac',
        title: 'Pruebas CEAC',
        year: '2022',
        category: 'Académico',
        description:
          'Tres ejercicios que aplican conceptos creativos y funcionales al diseño de moda y equipación deportiva.',
        longDescription:
          'Ejercicios realizados para las pruebas de acceso al Grado de Diseño de Moda en CEAC, donde se desarrollan propuestas de moodboard, diseño de prenda y equipación deportiva, aplicando conceptos creativos y funcionales.',
        cover: '/images/projects/ceac/cover.jpg',
        galleryLayout: 'editorial',
        gallery: [],
        size: 'tall',
      },
    ],
  },
];

export const allProjects = series.flatMap((s) => s.projects);

export const getProjectBySlug = (slug: string) =>
  allProjects.find((p) => p.slug === slug);