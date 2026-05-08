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
    title: "Safa Salaaoui",
    category: "Branding, Design & Social Media",
    description: "Complete brand identities and social media strategies that drive engagement and growth.",
    gradient: "from-orange-500/20 to-purple-500/20",
    pattern: "bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))]",
    year: "2024",
    services: ["Brand Strategy", "Logo Design", "Visual System", "Content Strategy", "Community Growth"],
    highlights: [
      "Full visual identity systems across digital and print media.",
      "Strategic social media management with 340% engagement boost.",
      "On-brand messaging and high-converting visual templates.",
      "Cross-platform campaigns that increase brand awareness.",
    ],
    author: "Safa Salaaoui",
    portfolioUrl: "https://drive.google.com/drive/folders/1jR4-HgyN6VflNriLyUmt_BW8v6Kr6YdG?usp=sharing",
    image: "/safa-thumbnail.jpg",
  },
  {
    title: "Ghassen ben salem",
    category: "Video Editing",
    description: "Dynamic video campaigns and motion graphics that captivate audiences.",
    gradient: "from-pink-500/20 to-rose-500/20",
    pattern: "bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))]",
    year: "2024",
    services: ["Video Production", "Editing", "Motion Graphics"],
    highlights: [
      "High-impact campaign reels for social and paid media.",
      "Fast turnaround with brand-driven motion design.",
      "Boosted launch engagement with dynamic storytelling.",
    ],
    author: "Ghassen ben salem",
    portfolioUrl: "https://drive.google.com/drive/folders/1MUY3FZX_mFhLxlOfrPRHAbk2eX78b3gj?usp=sharing",
    image: "/ghassen-thumbnail.jpg",
  },
]
