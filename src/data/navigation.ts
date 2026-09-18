export interface NavigationItem {
  label: string;
  href: string;
  description?: string;
  children?: NavigationItem[];
}

export interface FooterColumn {
  title: string;
  links: NavigationItem[];
}

export const headerNavigation: NavigationItem[] = [
  { label: "Nosotros", href: "/nosotros/" },
  {
    label: "Servicios",
    href: "/servicios/",
    children: [
      {
        label: "Consultoría",
        href: "/servicios/consultoria/",
        description: "Decisiones técnicas para proyectos sólidos.",
      },
      {
        label: "Construcción",
        href: "/servicios/construccion/",
        description: "Ejecución precisa de infraestructura.",
      },
      {
        label: "Interventoría",
        href: "/servicios/interventoria/",
        description: "Control, calidad y transparencia en obra.",
      },
      {
        label: "Alquiler",
        href: "/servicios/alquiler/",
        description: "Equipos listos para el siguiente frente.",
      },
    ],
  },
  { label: "Proyectos", href: "/proyectos/" },
  { label: "Contacto", href: "/contacto/" },
];

export const footerNavigation: FooterColumn[] = [
  {
    title: "Explorar",
    links: [
      { label: "Nosotros", href: "/nosotros/" },
      { label: "Servicios", href: "/servicios/" },
      { label: "Proyectos", href: "/proyectos/" },
    ],
  },
  {
    title: "Servicios",
    links: [
      { label: "Consultoría", href: "/servicios/consultoria/" },
      { label: "Construcción", href: "/servicios/construccion/" },
      { label: "Interventoría", href: "/servicios/interventoria/" },
      { label: "Alquiler", href: "/servicios/alquiler/" },
    ],
  },
  {
    title: "Contacto",
    links: [
      { label: "Bogotá D.C., Colombia", href: "/contacto/" },
      { label: "Escríbenos", href: "mailto:info@orincol.com" },
      { label: "LinkedIn", href: "https://www.linkedin.com/" },
    ],
  },
];
