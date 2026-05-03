export type Project = {
  title: string
  category: string
  description: string
  gradient: string
  pattern: string
  year: string
  services: string[]
  highlights: string[]
  author?: string
  portfolioUrl?: string
  image?: string
}

export const projects: Project[] = [
  {
    title: "Almia Ghassen",
    category: "Web Development",
    description: "Creative web development portfolio showcasing modern design and interactive experiences.",
    gradient: "from-emerald-500/20 to-cyan-500/20",
    pattern: "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]",
    year: "2025",
    services: ["UI/UX", "Frontend", "Interactive Design"],
    highlights: [
      "Innovative web solutions with cutting-edge technologies.",
      "Responsive and performant designs across all devices.",
      "Interactive animations and modern user experiences.",
    ],
    author: "Almia Ghassen",
    portfolioUrl: "https://my-pro-portfolio-three.vercel.app",
    image: "/Almia_ghassen_thumm.png",
  },
  {
    title: "Vibe Studios",
    category: "Branding & Design",
    description: "Complete brand identity for a creative production studio.",
    gradient: "from-orange-500/20 to-red-500/20",
    pattern: "bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))]",
    year: "2024",
    services: ["Brand Strategy", "Logo Design", "Visual System"],
    highlights: [
      "Full visual identity system across digital and print.",
      "On-brand messaging and marketing alignments for launches.",
      "Designed to support high-end client acquisition and retention.",
    ],
  },
  {
    title: "GrowthHive",
    category: "Social Media",
    description: "Social media strategy that increased engagement by 340%.",
    gradient: "from-blue-500/20 to-purple-500/20",
    pattern: "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]",
    year: "2025",
    services: ["Strategy", "Content", "Community"],
    highlights: [
      "Editorial calendar and campaign sequences for measurable growth.",
      "High-converting visual templates and audience-led messaging.",
      "Cross-platform momentum boosting brand awareness and leads.",
    ],
  },
  {
    title: "Pulse Fitness",
    category: "Video Editing",
    description: "Dynamic video campaign for a fitness brand launch.",
    gradient: "from-pink-500/20 to-rose-500/20",
    pattern: "bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))]",
    year: "2024",
    services: ["Video Production", "Editing", "Motion Graphics"],
    highlights: [
      "High-impact campaign reels for social and paid media.",
      "Fast turnaround with brand-driven motion design.",
      "Boosted launch engagement with dynamic storytelling.",
    ],
  },
]
