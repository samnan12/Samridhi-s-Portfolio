export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  category: string;
  year: string;
  role: string;
  tools: string[];
  images: string[];
  featured: boolean;
  externalLink?: string;
  process?: string[];
  challenges?: string[];
  results?: string[];
}

export interface AboutInfo {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  skills: string[];
  experience: {
    title: string;
    company: string;
    duration: string;
    description: string;
  }[];
  philosophy: string;
}

export const aboutInfo: AboutInfo = {
  name: "Samridhi Nandwani",
  role: "Interaction Designer",
  tagline: "Crafting meaningful digital experiences through thoughtful design",
  bio: "I'm a passionate interaction designer with a keen eye for detail and a love for creating user-centered experiences. With a background in design and technology, I specialize in translating complex problems into intuitive, beautiful solutions.",
  skills: [
    "User Experience Design",
    "User Interface Design", 
    "Prototyping",
    "User Research",
    "Design Systems",
    "Figma",
    "Adobe Creative Suite",
    "Framer",
    "Principle",
    "After Effects"
  ],
  experience: [
    {
      title: "Interaction Designer",
      company: "Freelance",
      duration: "2023 - Present",
      description: "Working with startups and established companies to create engaging digital experiences."
    },
    {
      title: "UI/UX Designer",
      company: "Design Studio",
      duration: "2022 - 2023", 
      description: "Led design projects for web and mobile applications, focusing on user-centered design principles."
    }
  ],
  philosophy: "I believe great design happens at the intersection of empathy, creativity, and technology. Every pixel, every interaction, and every user journey should be intentional and meaningful."
};

export const projects: Project[] = [
  {
    id: "project-1",
    title: "E-commerce Mobile App",
    description: "A comprehensive mobile shopping experience designed to increase user engagement and conversion rates. The app features intuitive navigation, personalized recommendations, and seamless checkout flow.",
    shortDescription: "Mobile shopping app with personalized recommendations and seamless checkout",
    category: "Mobile Design",
    year: "2024",
    role: "Lead UX/UI Designer",
    tools: ["Figma", "Principle", "After Effects", "Sketch"],
    images: ["/images/project1-1.jpg", "/images/project1-2.jpg", "/images/project1-3.jpg"],
    featured: true,
    externalLink: "https://dribbble.com/shots/example",
    process: [
      "User research and persona development",
      "Information architecture and user flow mapping", 
      "Wireframing and prototyping",
      "Visual design and design system creation",
      "Usability testing and iteration"
    ],
    challenges: [
      "Simplifying complex product catalog navigation",
      "Creating trust signals for new users",
      "Optimizing for various screen sizes and devices"
    ],
    results: [
      "40% increase in user engagement",
      "25% improvement in conversion rates",
      "4.8/5 user satisfaction score"
    ]
  },
  {
    id: "project-2", 
    title: "SaaS Dashboard Redesign",
    description: "Complete redesign of a complex analytics dashboard to improve data visualization and user workflow efficiency. The new design reduces cognitive load while increasing actionable insights.",
    shortDescription: "Analytics dashboard redesign for improved data visualization and workflow",
    category: "Web Design",
    year: "2024",
    role: "UX Designer",
    tools: ["Figma", "Framer", "Principle", "Miro"],
    images: ["/images/project2-1.jpg", "/images/project2-2.jpg"],
    featured: true,
    process: [
      "Stakeholder interviews and requirements gathering",
      "Current state analysis and pain point identification",
      "Information architecture restructuring",
      "Data visualization design patterns",
      "Interactive prototyping and testing"
    ],
    challenges: [
      "Managing information density without overwhelming users",
      "Creating intuitive data filtering and comparison tools",
      "Ensuring accessibility across different user skill levels"
    ],
    results: [
      "60% reduction in time to complete key tasks",
      "35% increase in daily active users",
      "Significant improvement in user task completion rates"
    ]
  },
  {
    id: "project-3",
    title: "Brand Identity & Website",
    description: "End-to-end brand identity creation for a sustainable fashion startup, including logo design, brand guidelines, and responsive website design that reflects the company's eco-conscious values.",
    shortDescription: "Complete brand identity and website for sustainable fashion startup",
    category: "Brand Design",
    year: "2023",
    role: "Brand & Web Designer", 
    tools: ["Adobe Illustrator", "Figma", "After Effects", "Webflow"],
    images: ["/images/project3-1.jpg", "/images/project3-2.jpg", "/images/project3-3.jpg"],
    featured: true,
    externalLink: "https://behance.net/gallery/example",
    process: [
      "Brand strategy and positioning workshops",
      "Logo design and brand identity development",
      "Brand guidelines and asset creation",
      "Website wireframing and design",
      "Development handoff and quality assurance"
    ],
    challenges: [
      "Communicating sustainability values through design",
      "Creating a premium feel while maintaining accessibility",
      "Ensuring brand consistency across all touchpoints"
    ],
    results: [
      "Strong brand recognition within target market",
      "40% increase in website engagement",
      "Successful launch with positive customer feedback"
    ]
  },
  {
    id: "project-4",
    title: "Mobile Banking App",
    description: "Redesigned mobile banking experience focusing on security, accessibility, and user trust. The app simplifies complex financial operations while maintaining the highest security standards.",
    shortDescription: "Secure and accessible mobile banking experience redesign",
    category: "Mobile Design",
    year: "2023",
    role: "Senior UX Designer",
    tools: ["Figma", "Principle", "Maze", "Optimal Workshop"],
    images: ["/images/project4-1.jpg", "/images/project4-2.jpg"],
    featured: false,
    process: [
      "Comprehensive user research and journey mapping",
      "Security and compliance requirement analysis",
      "Accessibility audit and improvement planning",
      "Prototype development and usability testing",
      "Design system creation and implementation"
    ],
    challenges: [
      "Balancing security with user experience",
      "Ensuring accessibility for users with disabilities",
      "Simplifying complex financial workflows"
    ],
    results: [
      "50% reduction in support tickets",
      "Improved accessibility compliance scores",
      "Higher user satisfaction and trust metrics"
    ]
  },
  {
    id: "project-5",
    title: "Healthcare Platform UI",
    description: "User interface design for a telemedicine platform that connects patients with healthcare providers. The design prioritizes clarity, empathy, and ease of use during critical health situations.",
    shortDescription: "Telemedicine platform UI focusing on clarity and empathy",
    category: "Web Design", 
    year: "2023",
    role: "UI Designer",
    tools: ["Figma", "Principle", "Adobe XD", "InVision"],
    images: ["/images/project5-1.jpg", "/images/project5-2.jpg", "/images/project5-3.jpg"],
    featured: false,
    process: [
      "Healthcare user research and empathy mapping",
      "Medical workflow analysis and optimization",
      "Accessibility and inclusive design implementation",
      "Visual design and component library creation",
      "Usability testing with real users"
    ],
    challenges: [
      "Designing for users in stressful health situations",
      "Ensuring HIPAA compliance in design decisions",
      "Creating intuitive interfaces for users of all ages"
    ],
    results: [
      "Improved patient satisfaction scores",
      "Reduced appointment scheduling errors",
      "Positive feedback from healthcare providers"
    ]
  },
  {
    id: "project-6",
    title: "Design System Creation",
    description: "Comprehensive design system development for a growing tech company, including component library, design tokens, and documentation to ensure consistency across all products.",
    shortDescription: "Comprehensive design system with component library and documentation",
    category: "Design Systems",
    year: "2022",
    role: "Design Systems Lead",
    tools: ["Figma", "Storybook", "Zeroheight", "Git"],
    images: ["/images/project6-1.jpg", "/images/project6-2.jpg"],
    featured: false,
    process: [
      "Audit of existing design patterns and inconsistencies",
      "Design token definition and naming conventions",
      "Component library development and documentation",
      "Developer handoff and implementation guidelines",
      "Training and adoption across design and engineering teams"
    ],
    challenges: [
      "Creating scalable and maintainable design tokens",
      "Ensuring developer adoption and implementation",
      "Balancing flexibility with consistency"
    ],
    results: [
      "50% reduction in design-to-development time",
      "Improved consistency across all products",
      "Successful adoption by 20+ designers and developers"
    ]
  }
];

export const featuredProjects = projects.filter(project => project.featured);
