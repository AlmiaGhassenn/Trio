export type Locale = "en" | "fr"

export const supportedLocales: Locale[] = ["en", "fr"]
export const defaultLocale: Locale = "en"

export type Translations = {
  nav: {
    about: string
    services: string
    work: string
    projects: string
    process: string
    contact: string
    talk: string
    languageLabel: string
  }
  hero: {
    badge: string
    titleLine1: string
    titleHighlight: string
    subtext: string
    startProject: string
    seeWork: string
    statsProjects: string
    statsSatisfaction: string
    statsCountries: string
    scroll: string
  }
  about: {
    titleLine1: string
    titleHighlight: string
    paragraph1: string
    paragraph2: string
    paragraph3: string
    remoteReady: string
    established: string
    statement: string
  }
  services: {
    headerLine1: string
    headerHighlight: string
    subtext: string
    items: {
      number: string
      title: string
      description: string
      tags: string[]
    }[]
  }
  process: {
    titleLine1: string
    titleHighlight: string
    subtitle: string
    steps: {
      number: string
      title: string
      description: string
    }[]
  }
  marquee: string[]
  portfolio: {
    title: string
    highlight: string
    description: string
    viewAll: string
    viewProject: string
  }
  cta: {
    badge: string
    titleLine1: string
    titleHighlight: string
    subtext: string
    startProject: string
    bookCall: string
    responseTime: string
    joinClients: string
  }
  footer: {
    tagline: string
    copyright: string
  }
  testimonials: {
    titleLine1: string
    titleHighlight: string
    subtitle: string
  }
  bookingModal: {
    title: string
    subtitle: string
    stepLabel: string
    monthLabel: string
    selectTimeLabel: string
    fullName: string
    email: string
    phoneOptional: string
    messageOptional: string
    confirm: string
    agreement: string
    placeholderName: string
    placeholderEmail: string
    placeholderPhone: string
    placeholderMessage: string
    close: string
    emailSubject: string
  }
  projectsPage: {
    label: string
    title: string
    subtitle: string
    back: string
    services: string
    highlights: string
    allProjects: string
  }
}

const dictionaries: Record<Locale, Translations> = {
  en: {
    nav: {
      about: "About",
      services: "Services",
      work: "Work",
      projects: "Projects",
      process: "Process",
      contact: "Contact",
      talk: "Let's Talk",
      languageLabel: "Language",
    },
    hero: {
      badge: "3 Specialists. 4 Services. Real Results.",
      titleLine1: "We Build Brands",
      titleHighlight: "That Actually Work",
      subtext:
        "A small but mighty team of three, delivering web development, video editing, social media management, and branding design that drives real results.",
      startProject: "Start a Project",
      seeWork: "See Our Work",
      statsProjects: "Projects",
      statsSatisfaction: "Satisfaction",
      statsCountries: "Countries",
      scroll: "Scroll",
    },
    about: {
      titleLine1: "A Small Team.",
      titleHighlight: "A Big Impact.",
      paragraph1:
        "We're not a massive agency with endless layers of bureaucracy. We're three passionate specialists who work directly with you to craft brands, websites, and content that actually moves the needle.",
      paragraph2: "No middlemen. No fluff. Just great work, delivered with care.",
      paragraph3: "Fresh perspectives, modern tools, and a hunger to prove ourselves. We're new, but we deliver like veterans.",
      remoteReady: "Remote Ready",
      established: "Est. 2024",
      statement: "\"We don't just build projects. We build partnerships.\"",
    },
    services: {
      headerLine1: "Four Services.",
      headerHighlight: "One Unified Vision.",
      subtext: "Everything you need to build, launch, and grow your brand — all under one roof.",
      items: [
        {
          number: "01",
          title: "Web Development",
          description:
            "Custom websites and web applications built with cutting-edge technology. From landing pages to complex e-commerce platforms.",
          tags: ["Next.js", "React", "E-commerce", "CMS", "SEO"],
        },
        {
          number: "02",
          title: "Video Editing",
          description:
            "Compelling video content that captures attention and drives engagement across all platforms.",
          tags: ["Reels", "Brand Films", "Motion Graphics", "Ad Creatives"],
        },
        {
          number: "03",
          title: "Social Media",
          description: "Strategic management and growth across Instagram, TikTok, and LinkedIn.",
          tags: ["Strategy", "Content", "Community", "Growth"],
        },
        {
          number: "04",
          title: "Branding & Design",
          description:
            "Complete brand identities that make lasting impressions. From logos to comprehensive brand guidelines.",
          tags: ["Logo Design", "Brand Identity", "UI/UX", "Guidelines"],
        },
      ],
    },
    process: {
      titleLine1: "Simple,",
      titleHighlight: "Transparent",
      subtitle: "No surprises. No hidden steps. Just a clear path from idea to launch.",
      steps: [
        {
          number: "01",
          title: "Discovery",
          description:
            "Understanding your goals in a kickoff call. We dive deep into your vision, audience, and objectives.",
        },
        {
          number: "02",
          title: "Strategy",
          description:
            "Roadmap, timeline, and pricing. We create a clear plan tailored to your needs and budget.",
        },
        {
          number: "03",
          title: "Execution",
          description:
            "Our trio works, you get regular updates. Transparent progress with room for your feedback.",
        },
        {
          number: "04",
          title: "Launch",
          description:
            "Delivery, launch, and post-launch support. We ensure everything runs smoothly and stick around.",
        },
      ],
    },
    marquee: ["Web Development", "Video Editing", "Social Media Management", "Branding & Design"],
    portfolio: {
      title: "Selected",
      highlight: "Work",
      description:
        "A showcase of projects that demonstrate our capabilities across all four services.",
      viewAll: "View All Projects",
      viewProject: "View Project",
    },
    cta: {
      badge: "We're Currently Accepting New Projects",
      titleLine1: "Ready to",
      titleHighlight: "Grow?",
      subtext:
        "Let's build something great together. Whether you need a new website, a brand refresh, or a social media strategy — we're here to help.",
      startProject: "Start a Project",
      bookCall: "Book a Free Call",
      responseTime: "Typical response time: under 24 hours",
      joinClients: "Join 40+ happy clients",
    },
    footer: {
      tagline: "Three Minds. One Vision.",
      copyright: "TRIO Agency. All rights reserved.",
    },
    testimonials: {
      titleLine1: "What Our",
      titleHighlight: "Clients",
      subtitle: "Don't just take our word for it. Here's what the people we've worked with have to say.",
    },
    bookingModal: {
      title: "Book a Free Call",
      subtitle: "Choose a time that works for you",
      stepLabel: "Select your preferred time slot",
      monthLabel: "April 2026",
      selectTimeLabel: "Select time slot",
      fullName: "Full Name",
      email: "Email",
      phoneOptional: "Phone (optional)",
      messageOptional: "Message (optional)",
      confirm: "Confirm Booking",
      agreement: "By booking, you agree to a 30-minute consultation call",
      placeholderName: "Alex Chen",
      placeholderEmail: "alex@example.com",
      placeholderPhone: "+1 (555) 000-0000",
      placeholderMessage: "What would you like to discuss?",
      close: "Close modal",
      emailSubject: "Free Consultation - TRIO Agency",
    },
    projectsPage: {
      label: "Our Work",
      title: "All Projects",
      subtitle:
        "Explore the full portfolio of projects, with case study details for every service we deliver.",
      back: "Back to Home",
      services: "Services",
      highlights: "Highlights",
      allProjects: "All Projects",
    },
  },
  fr: {
    nav: {
      about: "À propos",
      services: "Services",
      work: "Réalisations",
      projects: "Projets",
      process: "Processus",
      contact: "Contact",
      talk: "Discutons",
      languageLabel: "Langue",
    },
    hero: {
      badge: "3 spécialistes. 4 services. Des résultats concrets.",
      titleLine1: "Nous construisons des marques",
      titleHighlight: "Qui fonctionnent vraiment",
      subtext:
        "Une petite équipe de trois experts en développement web, montage vidéo, gestion des réseaux sociaux et branding, avec des résultats concrets.",
      startProject: "Commencez un projet",
      seeWork: "Voir notre travail",
      statsProjects: "Projets",
      statsSatisfaction: "Satisfaction",
      statsCountries: "Pays",
      scroll: "Faites défiler",
    },
    about: {
      titleLine1: "Une petite équipe.",
      titleHighlight: "Un grand impact.",
      paragraph1:
        "Nous ne sommes pas une agence massive avec des couches interminables de bureaucratie. Nous sommes trois spécialistes passionnés qui travaillent directement avec vous pour créer des marques, des sites Web et du contenu qui font vraiment la différence.",
      paragraph2: "Pas d'intermédiaires. Pas de fioritures. Juste un excellent travail, livré avec soin.",
      paragraph3: "Des perspectives fraîches, des outils modernes et une volonté de faire nos preuves. Nous sommes nouveaux, mais nous travaillons comme des vétérans.",
      remoteReady: "Travail à distance",
      established: "Depuis 2024",
      statement: "\"Nous ne construisons pas seulement des projets. Nous construisons des partenariats.\"",
    },
    services: {
      headerLine1: "Quatre services.",
      headerHighlight: "Une vision unifiée.",
      subtext: "Tout ce dont vous avez besoin pour construire, lancer et développer votre marque — le tout sous un même toit.",
      items: [
        {
          number: "01",
          title: "Développement Web",
          description:
            "Sites web et applications personnalisées construits avec des technologies de pointe. Des pages de destination aux plateformes e-commerce complexes.",
          tags: ["Next.js", "React", "E-commerce", "CMS", "SEO"],
        },
        {
          number: "02",
          title: "Montage Vidéo",
          description:
            "Contenu vidéo percutant qui capte l'attention et génère de l'engagement sur toutes les plateformes.",
          tags: ["Reels", "Films de marque", "Motion Graphics", "Créa publicitaires"],
        },
        {
          number: "03",
          title: "Réseaux Sociaux",
          description: "Gestion stratégique et croissance sur Instagram, TikTok et LinkedIn.",
          tags: ["Stratégie", "Contenu", "Communauté", "Croissance"],
        },
        {
          number: "04",
          title: "Branding & Design",
          description:
            "Identités de marque complètes qui laissent une impression durable. Du logo aux guidelines.",
          tags: ["Logo", "Identité visuelle", "UI/UX", "Guidelines"],
        },
      ],
    },
    process: {
      titleLine1: "Simple,",
      titleHighlight: "Transparent",
      subtitle: "Pas de surprises. Pas d'étapes cachées. Juste un chemin clair de l'idée au lancement.",
      steps: [
        {
          number: "01",
          title: "Découverte",
          description:
            "Comprendre vos objectifs lors d'un appel de lancement. Nous plongeons dans votre vision, votre audience et vos objectifs.",
        },
        {
          number: "02",
          title: "Stratégie",
          description:
            "Feuille de route, calendrier et tarification. Nous créons un plan clair adapté à vos besoins et votre budget.",
        },
        {
          number: "03",
          title: "Exécution",
          description:
            "Notre trio travaille, vous recevez des mises à jour régulières. Un progrès transparent avec de la place pour votre feedback.",
        },
        {
          number: "04",
          title: "Lancement",
          description:
            "Livraison, lancement et support post-lancement. Nous veillons à ce que tout fonctionne bien et restons disponibles.",
        },
      ],
    },
    marquee: ["Développement Web", "Montage Vidéo", "Réseaux Sociaux", "Branding & Design"],
    portfolio: {
      title: "Travail",
      highlight: "Sélectionné",
      description:
        "Une sélection de projets qui démontrent nos compétences dans les quatre services.",
      viewAll: "Voir tous les projets",
      viewProject: "Voir le projet",
    },
    cta: {
      badge: "Nous acceptons actuellement de nouveaux projets",
      titleLine1: "Prêt à",
      titleHighlight: "Grandir ?",
      subtext:
        "Construisons quelque chose de formidable ensemble. Que vous ayez besoin d'un nouveau site, d'une refonte de marque ou d'une stratégie réseaux sociaux — nous sommes là pour vous aider.",
      startProject: "Commencez un projet",
      bookCall: "Réservez un appel gratuit",
      responseTime: "Temps de réponse typique : moins de 24 heures",
      joinClients: "Rejoignez plus de 40 clients satisfaits",
    },
    footer: {
      tagline: "Trois esprits. Une vision.",
      copyright: "TRIO Agency. Tous droits réservés.",
    },
    testimonials: {
      titleLine1: "Ce que disent",
      titleHighlight: "nos clients",
      subtitle:
        "Ne vous fiez pas seulement à notre parole. Voici ce que disent les personnes avec qui nous avons travaillé.",
    },
    bookingModal: {
      title: "Réservez un appel gratuit",
      subtitle: "Choisissez un moment qui vous convient",
      stepLabel: "Sélectionnez votre créneau horaire préféré",
      monthLabel: "Avril 2026",
      selectTimeLabel: "Sélectionnez un créneau horaire",
      fullName: "Nom complet",
      email: "Email",
      phoneOptional: "Téléphone (facultatif)",
      messageOptional: "Message (facultatif)",
      confirm: "Confirmer la réservation",
      agreement: "En réservant, vous acceptez un appel de consultation de 30 minutes",
      placeholderName: "Alex Chen",
      placeholderEmail: "alex@example.com",
      placeholderPhone: "+1 (555) 000-0000",
      placeholderMessage: "De quoi souhaitez-vous discuter ?",
      close: "Fermer la fenêtre",
      emailSubject: "Consultation gratuite - TRIO Agency",
    },
    projectsPage: {
      label: "Notre travail",
      title: "Tous les projets",
      subtitle:
        "Explorez le portfolio complet des projets, avec des détails pour chaque service que nous proposons.",
      back: "Retour à l'accueil",
      services: "Services",
      highlights: "Points forts",
      allProjects: "Tous les projets",
    },
  },
}

export function getDictionary(locale: string): Translations {
  return dictionaries[supportedLocales.includes(locale as Locale) ? (locale as Locale) : defaultLocale]
}
