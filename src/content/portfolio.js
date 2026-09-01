export const siteLinks = {
  github: "https://github.com/emij7",
  linkedin: "https://www.linkedin.com/in/ignacio-emiliano-juarez/",
  email: "juarezignacioemiliano@gmail.com",
};

// Change this flag to true when the public resume is ready.
export const resumeLink = {
  enabled: false,
  href: "/resume.pdf",
};

export const primaryStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Laravel",
];

export const stackGroups = [
  {
    id: "frontend",
    title: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Material UI",
      "Tailwind CSS",
    ],
  },
  {
    id: "backend",
    title: "Backend",
    items: ["Node.js", "Laravel", "REST APIs", "GraphQL", "tRPC"],
  },
  {
    id: "data",
    title: "Data",
    items: ["MySQL", "MariaDB", "Prisma", "Firebase", "Supabase"],
  },
  {
    id: "mobile",
    title: "Mobile",
    items: ["React Native", "Expo"],
  },
  {
    id: "tools",
    title: "Tools / Infrastructure",
    items: ["Git", "GitHub", "GitHub Actions", "Vercel"],
  },
];

export const portfolioContent = {
  en: {
    locale: "en",
    nav: {
      home: "Home",
      experience: "Experience",
      projects: "Projects",
      about: "About",
      contact: "Contact",
      resume: "Resume",
      menu: "Open navigation",
      close: "Close navigation",
    },
    hero: {
      eyebrow: "Argentina · Web + mobile · End-to-end delivery",
      name: "Ignacio Emiliano Juarez",
      roles: ["Software Engineer", "Full Stack Developer"],
      description:
        "I build web and mobile applications from idea to production, working across frontend, backend, databases, integrations and deployment.",
      projectsCta: "View projects",
      contactCta: "Contact me",
      signature: "Engineering with a distinct point of view",
      scope: ["Requirements", "Architecture", "Production"],
    },
    experience: {
      eyebrow: "Experience",
      title: "Building and owning real products.",
      intro:
        "Hands-on experience across the full software lifecycle, with end-to-end ownership of full-stack products in production.",
      current: "Current role",
      items: [
        {
          company: "Kaizen Software",
          role: "Full Stack Developer",
          period: "Apr 2023 — Present",
          featured: true,
          summary:
            "Development and maintenance of web and mobile applications for different clients, often taking solutions from initial requirements through production.",
          points: [
            "Frontend delivery with React, Next.js, TypeScript, Material UI and Tailwind CSS.",
            "Backend services, APIs and integrations with Laravel, Node.js, GraphQL and tRPC.",
            "Data modeling, authentication, permissions and business logic across SQL, Prisma, Firebase and Supabase.",
            "React Native and Expo development, deployment, scheduled processes and production troubleshooting.",
            "Requirement analysis, estimation, architecture decisions and end-to-end ownership.",
            "Previous team coordination and technical guidance; daily AI-assisted implementation, analysis and debugging.",
          ],
        },
        {
          company: "Freelance",
          role: "Software Developer",
          period: "Jan 2023 — Jan 2024",
          summary:
            "Autonomous development of web applications for local businesses and institutions, including production systems built with React and Firebase.",
          points: [
            "Requirements, implementation, deployment and maintenance.",
            "Direct ownership of complete product workflows.",
          ],
        },
        {
          company: "Drivendevs",
          role: "Frontend Developer",
          period: "Jan 2022 — Jan 2023",
          summary:
            "Product interface work across fintech, rehabilitation software and WordPress projects in an international remote environment.",
          points: [
            "Interfaces and components for a digital wallet.",
            "UI and functionality for a Flutter muscle rehabilitation application.",
            "Client meetings, requirements gathering and remote collaboration.",
          ],
        },
        {
          company: "Algolica",
          role: "Frontend Web Developer",
          period: "Oct 2021 — Nov 2021",
          summary: "React, React Native and UI development.",
          compact: true,
        },
      ],
    },
    projects: {
      eyebrow: "Selected projects",
      title: "Software running in production.",
      intro:
        "A selection of public products and anonymized client work. Company-owned source code remains private.",
      visit: "Visit live site",
      privateCompanyCode: "Private company code",
      privateSourceCode: "Private source code",
      production: "In production",
      featured: [
        {
          id: "municipality",
          name: "Municipality of Villa Mercedes — Digital Platform",
          type: "Public digital ecosystem",
          url: "https://villamercedes.gov.ar/",
          description:
            "End-to-end development of the municipality’s public website, private content manager, backend/API and mobile application.",
          details: [
            "Pixel-perfect Next.js implementation from supplied designs",
            "Private administration and content management platform",
            "Node.js APIs and Instagram content processing",
            "React Native + Expo mobile app with Firebase push notifications",
            "Deployment, maintenance and production troubleshooting",
          ],
          stack: ["Next.js", "Node.js", "React Native", "Expo", "Firebase"],
          visual: ["Public web", "Admin", "API", "Mobile"],
          variant: "ecosystem",
          prominent: true,
        },
        {
          id: "pre-enrollment",
          name: "Instituto Sagrado Corazón — Pre-Enrollment System",
          type: "Enrollment workflow",
          url: "https://preinscripciones.sagradocorazonweb.ar/",
          description:
            "A real pre-enrollment system currently used in production, delivered end to end from the application workflow to Firebase and deployment.",
          details: [
            "Complete multi-step enrollment workflow",
            "Firebase backend and data management",
            "Vercel deployment and production maintenance",
          ],
          stack: ["React", "Firebase", "Vercel"],
          codePrivacy: "source",
          visual: ["Apply", "Validate", "Store", "Review"],
          variant: "workflow",
        },
        {
          id: "institutional",
          name: "Instituto Sagrado Corazón — Institutional Website",
          type: "Institutional platform",
          url: "https://sagradocorazonweb.ar/",
          description:
            "Development and ongoing maintenance of the institution’s public website and content experience.",
          details: ["Public-facing website", "Firebase services", "Vercel deployment"],
          stack: ["React", "Firebase", "Vercel"],
          codePrivacy: "source",
          visual: ["Content", "Community", "Information"],
          variant: "website",
        },
      ],
      privateTitle: "Private professional work",
      privateIntro:
        "Representative case studies, intentionally anonymized to protect client and company information.",
      privateItems: [
        {
          name: "Business Management Platform",
          description:
            "Customer accounts, invoicing, credit notes, stock, inventory, suppliers, permissions, dashboards and reporting.",
          stack: ["React", "Laravel", "MySQL / MariaDB", "REST APIs"],
        },
        {
          name: "Construction Management Platform",
          description:
            "Projects, budgets, suppliers, tasks, statuses, dashboards and operational workflows.",
          stack: ["React", "Laravel", "MySQL / MariaDB"],
        },
        {
          name: "CRM & Administrative Platforms",
          description:
            "CRM workflows, documents, dashboards, forms, authentication, permissions, integrations, scheduled tasks and maintenance.",
          stack: ["React", "Next.js", "Laravel", "Node.js", "GitHub Actions"],
        },
      ],
    },
    stack: {
      eyebrow: "Technology",
      title: "A focused full-stack toolkit.",
      intro:
        "My core stack leads the work. The wider toolkit supports delivery across product, data, mobile and infrastructure.",
      core: "Core stack",
    },
    about: {
      eyebrow: "About",
      title: "More than frontend delivery.",
      aiNote: "AI-assisted development is part of my daily engineering workflow.",
      paragraphs: [
        "I’m a Software Engineer and Full Stack Developer from Argentina focused on building web and mobile applications.",
        "I enjoy taking ownership of projects and features from initial requirements through production. My day-to-day work regularly includes backend services, databases, integrations, deployments and production troubleshooting.",
        "I have previously coordinated development teams and contributed to technical and architecture decisions.",
      ],
      ownership: "From requirements to production",
      cycle: [
        "Requirements",
        "Architecture",
        "Frontend",
        "Backend",
        "Data",
        "Integrations",
        "Deployment",
        "Maintenance",
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Let’s build something useful.",
      text:
        "For product work, engineering opportunities or freelance projects, the best way to reach me is by email or LinkedIn.",
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
      sendEmail: "Send an email",
      connect: "Connect on LinkedIn",
      viewCode: "View GitHub profile",
    },
    footer: "Designed and built by Ignacio Emiliano Juarez.",
  },
  es: {
    locale: "es",
    nav: {
      home: "Inicio",
      experience: "Experiencia",
      projects: "Proyectos",
      about: "Sobre mí",
      contact: "Contacto",
      resume: "CV",
      menu: "Abrir navegación",
      close: "Cerrar navegación",
    },
    hero: {
      eyebrow: "Argentina · Web + mobile · Desarrollo end-to-end",
      name: "Ignacio Emiliano Juarez",
      roles: ["Software Engineer", "Full Stack Developer"],
      description:
        "Desarrollo aplicaciones web y mobile desde la idea hasta producción, trabajando en frontend, backend, bases de datos, integraciones y deployment.",
      projectsCta: "Ver proyectos",
      contactCta: "Contactarme",
      signature: "Ingeniería con una mirada propia",
      scope: ["Requerimientos", "Arquitectura", "Producción"],
    },
    experience: {
      eyebrow: "Experiencia",
      title: "Construcción y ownership de productos reales.",
      intro:
        "Experiencia práctica en todo el ciclo de desarrollo, con ownership end-to-end de productos full stack en producción.",
      current: "Rol actual",
      items: [
        {
          company: "Kaizen Software",
          role: "Full Stack Developer",
          period: "Abr 2023 — Actualidad",
          featured: true,
          summary:
            "Desarrollo y mantenimiento de aplicaciones web y mobile para distintos clientes, llevando frecuentemente soluciones desde los requerimientos iniciales hasta producción.",
          points: [
            "Frontend con React, Next.js, TypeScript, Material UI y Tailwind CSS.",
            "Servicios backend, APIs e integraciones con Laravel, Node.js, GraphQL y tRPC.",
            "Modelado de datos, autenticación, permisos y lógica de negocio con SQL, Prisma, Firebase y Supabase.",
            "Desarrollo con React Native y Expo, deployments, procesos programados y resolución de incidentes en producción.",
            "Análisis de requerimientos, estimaciones, decisiones de arquitectura y ownership end-to-end.",
            "Experiencia previa coordinando equipos y acompañando técnicamente; uso diario de IA para implementar, analizar y depurar.",
          ],
        },
        {
          company: "Freelance",
          role: "Software Developer",
          period: "Ene 2023 — Ene 2024",
          summary:
            "Desarrollo autónomo de aplicaciones web para comercios e instituciones locales, incluyendo sistemas productivos con React y Firebase.",
          points: [
            "Requerimientos, implementación, deployment y mantenimiento.",
            "Responsabilidad directa sobre flujos completos de producto.",
          ],
        },
        {
          company: "Drivendevs",
          role: "Frontend Developer",
          period: "Ene 2022 — Ene 2023",
          summary:
            "Trabajo de interfaces de producto en fintech, software de rehabilitación y proyectos WordPress dentro de un entorno remoto internacional.",
          points: [
            "Interfaces y componentes para una billetera digital.",
            "UI y funcionalidad para una aplicación Flutter de rehabilitación muscular.",
            "Reuniones con clientes, relevamiento de requerimientos y colaboración remota.",
          ],
        },
        {
          company: "Algolica",
          role: "Frontend Web Developer",
          period: "Oct 2021 — Nov 2021",
          summary: "React, React Native y desarrollo de interfaces.",
          compact: true,
        },
      ],
    },
    projects: {
      eyebrow: "Proyectos seleccionados",
      title: "Software funcionando en producción.",
      intro:
        "Una selección de productos públicos y trabajo profesional anonimizado. El código empresarial permanece privado.",
      visit: "Visitar sitio",
      privateCompanyCode: "Código empresarial privado",
      privateSourceCode: "Código fuente privado",
      production: "En producción",
      featured: [
        {
          id: "municipality",
          name: "Municipalidad de Villa Mercedes — Plataforma Digital",
          type: "Ecosistema digital público",
          url: "https://villamercedes.gov.ar/",
          description:
            "Desarrollo end-to-end del sitio público municipal, gestor privado de contenidos, backend/API y aplicación mobile.",
          details: [
            "Implementación pixel-perfect en Next.js a partir de diseños entregados",
            "Plataforma privada de administración y gestión de contenido",
            "APIs en Node.js y procesamiento de contenido de Instagram",
            "App React Native + Expo con notificaciones push mediante Firebase",
            "Deployment, mantenimiento y troubleshooting en producción",
          ],
          stack: ["Next.js", "Node.js", "React Native", "Expo", "Firebase"],
          visual: ["Web pública", "Admin", "API", "Mobile"],
          variant: "ecosystem",
          prominent: true,
        },
        {
          id: "pre-enrollment",
          name: "Instituto Sagrado Corazón — Sistema de Preinscripción",
          type: "Flujo de inscripciones",
          url: "https://preinscripciones.sagradocorazonweb.ar/",
          description:
            "Sistema real de preinscripciones actualmente utilizado en producción, desarrollado de punta a punta desde el workflow hasta Firebase y el deployment.",
          details: [
            "Flujo completo de inscripción en múltiples pasos",
            "Backend y gestión de datos con Firebase",
            "Deployment en Vercel y mantenimiento productivo",
          ],
          stack: ["React", "Firebase", "Vercel"],
          codePrivacy: "source",
          visual: ["Inscribir", "Validar", "Guardar", "Revisar"],
          variant: "workflow",
        },
        {
          id: "institutional",
          name: "Instituto Sagrado Corazón — Sitio Institucional",
          type: "Plataforma institucional",
          url: "https://sagradocorazonweb.ar/",
          description:
            "Desarrollo y mantenimiento continuo del sitio público y la experiencia de contenidos de la institución.",
          details: ["Sitio web público", "Servicios Firebase", "Deployment en Vercel"],
          stack: ["React", "Firebase", "Vercel"],
          codePrivacy: "source",
          visual: ["Contenido", "Comunidad", "Información"],
          variant: "website",
        },
      ],
      privateTitle: "Trabajo profesional privado",
      privateIntro:
        "Casos representativos anonimizados intencionalmente para proteger información de clientes y empresas.",
      privateItems: [
        {
          name: "Plataforma de Gestión Empresarial",
          description:
            "Clientes, cuentas corrientes, facturación, notas de crédito, stock, inventario, proveedores, permisos, dashboards y reportes.",
          stack: ["React", "Laravel", "MySQL / MariaDB", "REST APIs"],
        },
        {
          name: "Plataforma de Gestión de Obras",
          description:
            "Proyectos, presupuestos, proveedores, tareas, estados, dashboards y flujos operativos.",
          stack: ["React", "Laravel", "MySQL / MariaDB"],
        },
        {
          name: "CRM y Plataformas Administrativas",
          description:
            "Flujos CRM, documentos, dashboards, formularios, autenticación, permisos, integraciones, tareas programadas y mantenimiento.",
          stack: ["React", "Next.js", "Laravel", "Node.js", "GitHub Actions"],
        },
      ],
    },
    stack: {
      eyebrow: "Tecnología",
      title: "Un toolkit full stack enfocado.",
      intro:
        "Mi stack principal lidera el trabajo. El conjunto más amplio acompaña la entrega en producto, datos, mobile e infraestructura.",
      core: "Stack principal",
    },
    about: {
      eyebrow: "Sobre mí",
      title: "Más que desarrollo frontend.",
      aiNote: "El desarrollo asistido por IA forma parte de mi flujo diario de ingeniería.",
      paragraphs: [
        "Soy Software Engineer y Full Stack Developer de Argentina, enfocado en construir aplicaciones web y mobile.",
        "Disfruto tomar ownership de proyectos y funcionalidades desde los requerimientos iniciales hasta producción. Mi trabajo cotidiano incluye servicios backend, bases de datos, integraciones, deployments y resolución de problemas productivos.",
        "Anteriormente coordiné equipos de desarrollo y participé en decisiones técnicas y de arquitectura.",
      ],
      ownership: "De requerimientos a producción",
      cycle: [
        "Requerimientos",
        "Arquitectura",
        "Frontend",
        "Backend",
        "Datos",
        "Integraciones",
        "Deployment",
        "Mantenimiento",
      ],
    },
    contact: {
      eyebrow: "Contacto",
      title: "Construyamos algo útil.",
      text:
        "Para productos, oportunidades de ingeniería o proyectos freelance, podés contactarme por email o LinkedIn.",
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
      sendEmail: "Enviar un email",
      connect: "Contactar por LinkedIn",
      viewCode: "Ver perfil de GitHub",
    },
    footer: "Diseñado y desarrollado por Ignacio Emiliano Juarez.",
  },
};
