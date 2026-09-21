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
    title: "[PROYECTO DE EJEMPLO] Sistema de alcantarillado",
    slug: "sistema-de-alcantarillado",
    category: "Construcción",
    portfolioCategory: "Obras hidráulicas",
    location: "[DATOS PENDIENTES]",
    image: alcantarillado,
    summary: "Registro visual de una intervención de infraestructura sanitaria.",
    isExample: true,
  },
  {
    title: "[PROYECTO DE EJEMPLO] Vías y espacio público",
    slug: "vias-y-espacio-publico",
    category: "Construcción",
    portfolioCategory: "Vías",
    location: "[DATOS PENDIENTES]",
    image: viasEspacioPublico,
    summary: "Registro visual de trabajos de pavimentación y espacio público.",
    isExample: true,
  },
  {
    title: "[PROYECTO DE EJEMPLO] Edificaciones",
    slug: "edificaciones",
    category: "Construcción",
    portfolioCategory: "Edificaciones",
    location: "[DATOS PENDIENTES]",
    image: edificaciones,
    summary: "Registro visual de ejecución de cimentaciones y estructuras.",
    isExample: true,
  },
  {
    title: "[PROYECTO DE EJEMPLO] Estructura hidráulica",
    slug: "estructura-hidraulica",
    category: "Construcción",
    portfolioCategory: "Obras hidráulicas",
    location: "[DATOS PENDIENTES]",
    image: estructuraHidraulica,
    summary: "Registro visual de una estructura hidráulica en fase de ejecución.",
    isExample: true,
  },
];
import type { ImageMetadata } from "astro";
import alcantarillado from "../assets/projects/sistema-de-alcantarillado/cover.jpg";
import edificaciones from "../assets/projects/edificaciones/cover.jpg";
import estructuraHidraulica from "../assets/projects/estructura-hidraulica/cover.jpg";
import viasEspacioPublico from "../assets/projects/vias-y-espacio-publico/cover.jpg";
