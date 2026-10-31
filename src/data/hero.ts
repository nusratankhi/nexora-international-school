import { HeroSlide } from "@/types";

export const heroSlides: HeroSlide[] = [
  {
    id: "slide-1",
    badge: "Welcome to Nexora International School",
    headingPrefix: "Building a Brighter",
    headingHighlight: "Together",
    headingSuffix: "Future",
    description: "At Nexora International School, we nurture young minds, inspire dreams, and empower students to achieve excellence in academics and life.",
    primaryCta: { label: "Get Admission", href: "#admissions" },
    secondaryCta: { label: "Explore Our School", href: "#about" },
    image: "/images/hero/hero-girl.png",
    floatingTag: "Dream Big\nAchieve More"
  },
  {
    id: "slide-2",
    badge: "World-Class Cambridge & International Curriculum",
    headingPrefix: "Inspiring Leaders &",
    headingHighlight: "Innovators",
    headingSuffix: "Global",
    description: "Cultivating critical inquiry, moral integrity, and collaborative problem-solving across world-standard academic disciplines.",
    primaryCta: { label: "Explore Academics", href: "#academics" },
    secondaryCta: { label: "Campus Tour", href: "#facilities" },
    image: "/images/hero/hero-stem.png",
    floatingTag: "Excellence in\nEvery Step"
  },
  {
    id: "slide-3",
    badge: "Admissions Open for Academic Year 2025–2026",
    headingPrefix: "Where Passions Turn Into",
    headingHighlight: "Excellence",
    headingSuffix: "True",
    description: "Join a vibrant community of lifelong learners supported by modern digital laboratories, arts academies, and competitive athletic fields.",
    primaryCta: { label: "Apply Online", href: "#admissions" },
    secondaryCta: { label: "Meet Faculty", href: "#why-choose-us" },
    image: "/images/hero/hero-sports.png",
    floatingTag: "Nurturing Minds\nInspiring Hearts"
  }
];
