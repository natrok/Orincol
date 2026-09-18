export type ProjectCategory =
  | "Construcción"
  | "Consultoría"
  | "Interventoría"
  | "Alquiler";

export interface Project {
  title: string;
  slug: string;
  category: ProjectCategory;
  location: string;
  image: string;
  summary: string;
  isExample: true;
}

export const projects: Project[] = [
  {
    title: "[PROYECTO DE EJEMPLO] Centro logístico del norte",
    slug: "centro-logistico-del-norte",
    category: "Construcción",
    location: "Cundinamarca, Colombia",
    image: "/images/projects/centro-logistico.svg",
    summary: "Estructura y urbanismo para una operación logística de alto desempeño.",
    isExample: true,
  },
  {
    title: "[PROYECTO DE EJEMPLO] Corredor vial sostenible",
    slug: "corredor-vial-sostenible",
    category: "Interventoría",
    location: "Antioquia, Colombia",
    image: "/images/projects/corredor-vial.svg",
    summary: "Seguimiento técnico y control de calidad para conectar comunidades.",
    isExample: true,
  },
  {
    title: "[PROYECTO DE EJEMPLO] Diagnóstico de infraestructura",
    slug: "diagnostico-de-infraestructura",
    category: "Consultoría",
    location: "Valle del Cauca, Colombia",
    image: "/images/projects/diagnostico.svg",
    summary: "Lectura técnica del activo para priorizar inversiones y mantenimiento.",
    isExample: true,
  },
  {
    title: "[PROYECTO DE EJEMPLO] Equipos para movimiento de tierra",
    slug: "equipos-movimiento-de-tierra",
    category: "Alquiler",
    location: "Bogotá D.C., Colombia",
    image: "/images/projects/equipos.svg",
    summary: "Maquinaria disponible para mantener el ritmo de cada frente de trabajo.",
    isExample: true,
  },
];
