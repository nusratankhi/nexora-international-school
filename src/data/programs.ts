import { AcademicProgram } from "@/types";

export const academicPrograms: AcademicProgram[] = [
  {
    id: "early-years",
    title: "Early Years Foundation",
    ageGroup: "Ages 3 – 5 Years",
    grade: "Playgroup • Nursery • Kindergarten",
    description: "An inquiry-based, joyful learning environment that nurtures curiosity, emotional confidence, linguistic agility, and early motor and cognitive milestones.",
    image: "/images/programs/early-years.jpg",
    highlights: [
      "Play-Based Inquiry Curriculum",
      "Multisensory Phonics & Early Math",
      "Creative Art & Movement Expression",
      "1:8 Teacher-to-Student Ratio"
    ],
    features: [
      "Dedicated sensory motor rooms",
      "Nature discovery garden",
      "Social-emotional learning framework",
      "Safe child-height learning pods"
    ]
  },
  {
    id: "primary-education",
    title: "Primary Education",
    ageGroup: "Ages 6 – 10 Years",
    grade: "Grade 1 through Grade 5",
    description: "Building strong conceptual foundations in STEM, languages, and humanities, enriched with collaborative project-based learning and creative problem solving.",
    image: "/images/programs/primary-education.jpg",
    highlights: [
      "Cambridge Primary Framework",
      "Integrated STEM & Coding Modules",
      "Bi-lingual Communication Mastery",
      "Hands-on Science Laboratories"
    ],
    features: [
      "Interactive smart touch boards",
      "Guided reading and literacy circles",
      "Robotics and math Olympiad training",
      "Daily physical education & sports"
    ]
  },
  {
    id: "secondary-education",
    title: "Secondary Education",
    ageGroup: "Ages 11 – 15 Years",
    grade: "Grade 6 through Grade 10",
    description: "Fostering analytical rigor, independent scholarship, research capabilities, and ethical leadership in preparation for international board credentials.",
    image: "/images/programs/secondary-education.jpg",
    highlights: [
      "Cambridge Lower Secondary & IGCSE",
      "Comprehensive Science Laboratories",
      "Debate, MUN & Global Perspectives",
      "Personalized Academic Mentorship"
    ],
    features: [
      "Specialized physics, chemistry & bio labs",
      "Leadership council opportunities",
      "Electives in coding & graphic arts",
      "Standardized benchmark testing"
    ]
  },
  {
    id: "higher-secondary",
    title: "Higher Secondary Education",
    ageGroup: "Ages 16 – 18 Years",
    grade: "Grade 11 & Grade 12 (AS & A Levels)",
    description: "Pre-university excellence offering tailored academic pathways in Science, Commerce, and Humanities with dedicated worldwide university admissions guidance.",
    image: "/images/programs/higher-secondary.jpg",
    highlights: [
      "Cambridge International A-Levels",
      "Global University Placement Cell",
      "Advanced Research & Capstone Projects",
      "Internships & Social Impact Initiatives"
    ],
    features: [
      "1-on-1 career counselling and SAT/IELTS prep",
      "Ivy League & Russell Group guidance",
      "University recommendation support",
      "Student research publication opportunities"
    ]
  }
];

export const statisticsData = [
  {
    id: "students",
    value: 2500,
    suffix: "+",
    label: "Happy Students",
    icon: "GraduationCap"
  },
  {
    id: "teachers",
    value: 200,
    suffix: "+",
    label: "Qualified Teachers",
    icon: "Users"
  },
  {
    id: "success",
    value: 95,
    suffix: "%",
    label: "Success Rate",
    icon: "Trophy"
  },
  {
    id: "years",
    value: 15,
    suffix: "+",
    label: "Years of Excellence",
    icon: "Building"
  }
];

export const keyFeaturesData = [
  {
    id: "curriculum",
    title: "Modern Curriculum",
    subtitle: "Global Standards",
    description: "Internationally aligned curriculum integrating Cambridge standards with dynamic 21st-century competencies.",
    icon: "BookOpen"
  },
  {
    id: "smart-learning",
    title: "Smart Learning",
    subtitle: "Digital Classrooms",
    description: "Interactive smart boards, high-speed digital infrastructure, and blended multimedia learning environments.",
    icon: "Laptop"
  },
  {
    id: "teachers",
    title: "Expert Teachers",
    subtitle: "Dedicated Faculty",
    description: "Experienced, passionate, and globally certified educators dedicated to inspiring every individual student.",
    icon: "Users"
  },
  {
    id: "holistic",
    title: "Holistic Development",
    subtitle: "Sports & Arts",
    description: "Balanced cultivation of athletic discipline, performing arts, musical creativity, and leadership initiatives.",
    icon: "Trophy"
  },
  {
    id: "safe-campus",
    title: "Safe Campus",
    subtitle: "Secure Environment",
    description: "Round-the-clock security monitoring, secure access control, full campus medical infirmary, and caring pastoral staff.",
    icon: "ShieldCheck"
  }
];

export const whyChooseUsData = [
  {
    id: "faculty",
    title: "Qualified Faculty",
    description: "Over 200+ certified educators possessing international credentials and proven commitment to mentoring future achievers.",
    icon: "Award"
  },
  {
    id: "student-centered",
    title: "Student-Centered Learning",
    description: "Customized learning pathways that honor distinct learning styles, strengths, and personal academic trajectories.",
    icon: "UserCheck"
  },
  {
    id: "modern-environment",
    title: "Modern Learning Environment",
    description: "Ergonomic furniture, climate-controlled spaces, high-tech science labs, and digitally connected educational spaces.",
    icon: "Sparkles"
  },
  {
    id: "extracurricular",
    title: "Extracurricular Activities",
    description: "More than 30+ vibrant student clubs ranging from Robotics, Debate, and Model UN to Drama, Chess, and Swimming.",
    icon: "Compass"
  },
  {
    id: "individual-support",
    title: "Individual Student Support",
    description: "Dedicated remedial coaches, psychological counseling, and structured advisory sessions ensuring no child falls behind.",
    icon: "HeartHandshake"
  },
  {
    id: "character",
    title: "Character Development",
    description: "Deep-seated values of integrity, empathy, community service, and global citizenship woven into everyday campus life.",
    icon: "Smile"
  }
];
