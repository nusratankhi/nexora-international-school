export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
}

export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  icon: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
}

export interface AcademicProgram {
  id: string;
  title: string;
  ageGroup: string;
  grade: string;
  description: string;
  image: string;
  highlights: string[];
  features: string[];
}

export interface FacilityItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  capacity?: string;
  features: string[];
}

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface NewsItem {
  id: string;
  title: string;
  category: 'School News' | 'Upcoming Events' | 'Academic Announcements';
  date: string;
  author: string;
  excerpt: string;
  image: string;
  featured?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Campus Life' | 'Classroom Activities' | 'Sports' | 'Cultural Programs' | 'Annual Events';
  image: string;
  caption: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  relationship: string;
  quote: string;
  rating: number;
  image: string;
}

export interface HeroSlide {
  id: string;
  badge: string;
  headingPrefix: string;
  headingHighlight: string;
  headingSuffix: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  image: string;
  floatingTag?: string;
}
