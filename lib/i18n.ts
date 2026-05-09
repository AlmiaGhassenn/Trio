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
     team: {
       name: string
       role: string
       initials: string
       color: string
     }[]
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
     mobileViewMessage: string
     openInNewTab: string
     close: string
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
     teamAvatars: {
       initials: string
       color: string
     }[]
   }
  footer: {
    tagline: string
    copyright: string
  }
   testimonials: {
     titleLine1: string
     titleHighlight: string
     subtitle: string
     items: {
       quote: string
       name: string
       title: string
       company: string
       initials: string
       color: string
     }[]
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
     submitting: string
     errorDefault: string
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
        "We are a creative digital agency based in Bizerte,Tunisia. A small but powerful team of three specialised in web development, video editing, social media management, and branding design. We help businesses grow online through modern websites, engaging content, and strategic digital solutions that deliver real results",
      startProject: "Start a Project",
      seeWork: "See Our Work",
      statsProjects: "Projects",
      statsSatisfaction: "Satisfaction",
      statsCountries: "Services",
      scroll: "Scroll",
    },
    about: {
      titleLine1: "A Small Team",
      titleHighlight: "A Big Impact",
      paragraph1:
        "Looking for a digital agency in Bizerte, Tunisia? Trio provides professional web development, branding design, video editing, and social media management services for businesses looking to grow their online presence and attract more clients.",
      paragraph2: "Unlike large agencies with complicated processes, our team of three works directly with clients to create impactful digital experiences that strengthen brands and drive real results online.No middlemen. No unnecessary complexity. Just creative solutions, personalized collaboration, and high-quality work designed to help your business stand out in Tunisia and beyond.",
      paragraph3: "Fresh perspectives, modern tools, and a hunger to prove ourselves. We're new, but we deliver like veterans.",
      remoteReady: "Remote Ready",
      established: "Est. 2024",
      statement: "\"We don't just build projects. We build partnerships.\"",
      team: [
        {
          name: "Almia Ghassen",
          role: "Web Developer",
          initials: "AG",
          color: "bg-primary",
        },
        {
          name: "Safa Salaaoui",
          role: "Social Media Manager and Graphic Designer",
          initials: "SS",
          color: "bg-blue-500",
        },
        {
          name: "Ghassen ben salem",
          role: "Video Editor",
          initials: "G",
          color: "bg-orange-500",
        },
      ],
    },
    services: {
      headerLine1: "Four Services.",
      headerHighlight: "One Unified Vision.",
      subtext: "Everything you need to build, launch, and grow your brand all under one roof.",
      items: [
        {
          number: "01",
          title: "Web Development Tunisia",
          description:
            "Responsive websites, optimized performance, and creative digital experiences designed for businesses in Tunisia.",
          tags: ["FullStack Development", "E-commerce", "Wordpress", "SEO"],
        },
        {
          number: "02",
          title: "Professional Video Editing Tunisia",
          description:
            "Engaging edits, cinematic visuals, and social media content designed to elevate your brand online in tunisia.",
          tags: ["Reels", "Brand Films", "After Effect", "Ad Creatives"],
        },
        {
          number: "03",
          title: "Social Media Management Tunisia",
          description: "Content creation, strategy, and visual storytelling designed to grow your brand across social media platforms in Tunisia.",
          tags: ["Strategy", "Content", "Community Management", "Growth", "Ads"],
        },
        {
          number: "04",
          title: "Modern Branding Design Tunisia",
          description:
            "Creative visual identities, logo design, and branding solutions crafted to help businesses grow and stand out in Tunisia.",
          tags: ["Logo Design", "Brand Identity", "UI/UX", "Guidelines","Social Media Creatives"],
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
      mobileViewMessage: "View this project on desktop for the best experience, or use the button below to open it in a new tab.",
      openInNewTab: "Open in new tab →",
      close: "Close",
    },
    cta: {
      badge: "We're Currently Accepting New Projects",
      titleLine1: "Ready to",
      titleHighlight: "Grow?",
      subtext:
        "Let's build something great together. Whether you need a new website, a brand refresh, or a social media strategy we're here to help.",
      startProject: "Start a Project",
      bookCall: "Book a Free Call",
      responseTime: "Typical response time: under 24 hours",
      joinClients: "Join 30+ happy clients",
      teamAvatars: [
        { initials: "RM", color: "bg-emerald-500" },
        { initials: "SA", color: "bg-orange-500" },
        { initials: "LJ", color: "bg-blue-500" },
      ],
    },
    footer: {
      tagline: "Three Minds. One Vision.",
      copyright: "TRIO Agency. All rights reserved.",
    },
    testimonials: {
      titleLine1: "What Our",
      titleHighlight: "Clients",
      subtitle: "Don't just take our word for it. Here's what the people we've worked with have to say.",
      items: [
        {
          quote: "Working with TRIO elevated our brand online. Their video editing and social media management services brought our content to life, increased our visibility, and helped us connect with our audience in a more impactful way.",
          name: "Ramzi Ben Messaoud",
          title: "CEO",
          company: "Crep N More",
          initials: "RM",
          color: "bg-emerald-500",
        },
        {
          quote: "Working with TRIO felt like having an in-house team. They understood our vision from day one and delivered beyond expectations.The website they built not only looks stunning but actually converts visitors into customers.",
          name: "Sabrine",
          title: "Founder",
          company: "Symphonies Des Pierres",
          initials: "SA",
          color: "bg-orange-500",
        },
        {
          quote: "TRIO created high-performing social media content and ad campaigns that not only boosted our online presence but also helped generate more sales and customer inquiries.",
          name: "Layel Jilani",
          title: "CO Founder",
          company:"BookGod Tn",
          initials: "LJ",
          color: "bg-blue-500",
        },
      ],
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
      submitting: "Sending...",
      errorDefault: "Failed to send email. Please try again.",
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
      team: [
        {
          name: "Almia Ghassen",
          role: "Développeur Web",
          initials: "AG",
          color: "bg-primary",
        },
        {
          name: "Safa Salaaoui",
          role: "Gestionnaire de réseaux sociaux et graphiste",
          initials: "SS",
          color: "bg-blue-500",
        },
        {
          name: "Ghassen ben salem",
          role: "Monteur vidéo",
          initials: "G",
          color: "bg-orange-500",
        },
      ],
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
      mobileViewMessage: "Consultez ce projet sur ordinateur pour une meilleure expérience, ou utilisez le bouton ci-dessous pour l'ouvrir dans un nouvel onglet.",
      openInNewTab: "Ouvrir dans un nouvel onglet →",
      close: "Fermer",
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
      teamAvatars: [
        { initials: "SM", color: "bg-emerald-500" },
        { initials: "MC", color: "bg-orange-500" },
        { initials: "ER", color: "bg-blue-500" },
      ],
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
      items: [
        {
          quote: "TRIO a complètement transformé notre présence en ligne. Le site web qu'ils ont construit est non seulement magnifique, mais convertit également les visiteurs en clients.",
          name: "Sarah Mitchell",
          title: "PDG",
          company: "Luxe Properties",
          initials: "SM",
          color: "bg-emerald-500",
        },
        {
          quote: "Travailler avec TRIO, c'est comme avoir une équipe interne. Ils ont compris notre vision dès le premier jour et ont livré bien au-delà de nos attentes.",
          name: "Marcus Chen",
          title: "Fondateur",
          company: "Vibe Studios",
          initials: "MC",
          color: "bg-orange-500",
        },
        {
          quote: "Notre engagement sur les réseaux sociaux a augmenté de 340 % en seulement trois mois. TRIO sait comment créer du contenu qui résonne.",
          name: "Emily Rodriguez",
          title: "Directrice Marketing",
          company: "GrowthHive",
          initials: "ER",
          color: "bg-blue-500",
        },
      ],
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
      submitting: "Envoi...",
      errorDefault: "Échec de l'envoi de l'e-mail. Veuillez réessayer.",
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
