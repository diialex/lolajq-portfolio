export type SeriesId = 'cuerpo' | 'intervencion' | 'calzado' | 'formacion';

export type GalleryItem = {
  src: string;
  caption?: string;
  group?: string;   // Para subcategorías: "Botas" | "Tacones" | "Deportivas"
};

export type ProjectVideo = {
  src: string;
  poster: string;
  caption?: string;
  aspect?: 'video' | 'portrait' | 'square';
};

export type Project = {
  slug: string;
  title: string;
  year: string;
  category: string;          // "Dibujo" | "Modelaje" | "Objeto" | "Prenda" | "Calzado" | "Académico"
  description: string;       // corta, aparece en el card
  longDescription?: string;  // larga, aparece en la página de detalle
  cover: string;             // thumbnail de la home
  gallery?: GalleryItem[];
  videos?: ProjectVideo[];
  size: 'small' | 'large' | 'tall';
};

export type Series = {
  id: SeriesId;
  number: string;            // "01", "02"...
  title: string;
  subtitle: string;
  description: string;       // intro de la serie en la home
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
        gallery: [],
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
        title: 'Abanicos pintados a mano',
        year: '2024',
        category: 'Objeto',
        description:
          'Serie de abanicos intervenidos como ejercicio de exploración del color y el gesto. El abanico como extensión simbólica del cuerpo.',
        longDescription:
          'Serie de abanicos intervenidos y pintados a mano como ejercicio de exploración del color, el gesto y el objeto. El abanico se entiende como complemento estético y extensión simbólica del cuerpo dentro del lenguaje de la moda.',
        cover: '/images/projects/abanicos/cover.jpg',
        gallery: [],
        videos: [],
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
        cover: '/images/projects/prendas-modificadas/cover.jpg',
        gallery: [],
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
        description:
          'Doce botas y calzados conceptuales, con su inspiración, bocetos y resultado final. Sesiones fotográficas con algunas de las piezas.',
        longDescription:
          'Proyecto de investigación y diseño en torno al tacón como objeto simbólico de la feminidad. A partir de un TFG en Bellas Artes se explora la relación entre cuerpo, deseo, consumo y estética, utilizando el tacón como punto de partida para el desarrollo de diseños conceptuales y aplicaciones en moda. La serie incluye doce piezas con su respectiva inspiración, bocetos, resultado final y sesiones fotográficas.',
        cover: '/images/projects/tacones/cover.jpg',
        gallery: [
          // Ejemplo de uso con subcategorías:
          // { src: '/images/projects/tacones/botas-01.jpg', group: 'Botas', caption: 'Bota alta en piel' },
          // { src: '/images/projects/tacones/tacones-01.jpg', group: 'Tacones' },
          // { src: '/images/projects/tacones/deportivas-01.jpg', group: 'Deportivas' },
        ],
        videos: [],
        size: 'large',
      },
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
        gallery: [],
        size: 'tall',
      },
    ],
  },
];

export const allProjects = series.flatMap((s) => s.projects);

export const getProjectBySlug = (slug: string) =>
  allProjects.find((p) => p.slug === slug);