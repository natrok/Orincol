export interface ServiceArea {
  title: string;
  description: string;
}

export interface ServicePillar {
  title: string;
  slug: string;
  description: string;
  areas: ServiceArea[];
}

export const services: ServicePillar[] = [
  {
    title: "Consultoría",
    slug: "consultoria",
    description: "Convertimos retos técnicos en decisiones claras y accionables.",
    areas: [
      { title: "Estudios y diseños", description: "Bases técnicas para planear con precisión." },
      { title: "Estructuración de proyectos", description: "Alcance, costos y riesgos bajo control." },
      { title: "Gerencia de proyectos", description: "Coordinación integral de recursos y equipos." },
    ],
  },
  {
    title: "Construcción",
    slug: "construccion",
    description: "Construimos infraestructura que funciona hoy y permanece mañana.",
    areas: [
      { title: "Obras civiles", description: "Ejecución rigurosa para activos durables." },
      { title: "Urbanismo", description: "Espacios conectados, seguros y eficientes." },
      { title: "Movimiento de tierras", description: "Preparación precisa para cada proyecto." },
    ],
  },
  {
    title: "Interventoría",
    slug: "interventoria",
    description: "Cuidamos el estándar técnico, contractual y humano de cada obra.",
    areas: [
      { title: "Supervisión técnica", description: "Verificación permanente de calidad y avance." },
      { title: "Control contractual", description: "Información oportuna para decisiones transparentes." },
      { title: "Control de costos", description: "Seguimiento financiero con visión de proyecto." },
    ],
  },
  {
    title: "Alquiler",
    slug: "alquiler",
    description: "Disponibilizamos equipos confiables para que la operación no se detenga.",
    areas: [
      { title: "Maquinaria amarilla", description: "Equipos para excavación y movimiento de material." },
      { title: "Equipos de compactación", description: "Rendimiento consistente en cada capa." },
      { title: "Logística de equipos", description: "Entrega y soporte según el frente de trabajo." },
    ],
  },
];
