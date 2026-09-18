export type ProjectCategory =
  | "Construcción"
  | "Consultoría"
  | "Interventoría"
  | "Alquiler";

export type PortfolioCategory =
  | "Edificaciones"
  | "Obras hidráulicas"
  | "Vías"
  | "Interventoría";

export interface Project {
  title: string;
  slug: string;
  category: ProjectCategory;
  portfolioCategory: PortfolioCategory;
  location: string;
  image: ImageMetadata;
  summary: string;
  isExample: true;
}

export const projects: Project[] = [
  {
    title: "[PROYECTO DE EJEMPLO] Centro logístico del norte",
    slug: "centro-logistico-del-norte",
    category: "Construcción",
    portfolioCategory: "Edificaciones",
    location: "Cundinamarca, Colombia",
    image: centroLogistico,
    summary: "Estructura y urbanismo para una operación logística de alto desempeño.",
    isExample: true,
  },
  {
    title: "[PROYECTO DE EJEMPLO] Corredor vial sostenible",
    slug: "corredor-vial-sostenible",
    category: "Interventoría",
    portfolioCategory: "Vías",
    location: "Antioquia, Colombia",
    image: corredorVial,
    summary: "Seguimiento técnico y control de calidad para conectar comunidades.",
    isExample: true,
  },
  {
    title: "[PROYECTO DE EJEMPLO] Diagnóstico de infraestructura",
    slug: "diagnostico-de-infraestructura",
    category: "Consultoría",
    portfolioCategory: "Obras hidráulicas",
    location: "Valle del Cauca, Colombia",
    image: diagnostico,
    summary: "Lectura técnica del activo para priorizar inversiones y mantenimiento.",
    isExample: true,
  },
  {
    title: "[PROYECTO DE EJEMPLO] Equipos para movimiento de tierra",
    slug: "equipos-movimiento-de-tierra",
    category: "Alquiler",
    portfolioCategory: "Vías",
    location: "Bogotá D.C., Colombia",
    image: equipos,
    summary: "Maquinaria disponible para mantener el ritmo de cada frente de trabajo.",
    isExample: true,
  },
];
import type { ImageMetadata } from "astro";
import centroLogistico from "../assets/projects/centro-logistico.svg";
import corredorVial from "../assets/projects/corredor-vial.svg";
import diagnostico from "../assets/projects/diagnostico.svg";
import equipos from "../assets/projects/equipos.svg";
