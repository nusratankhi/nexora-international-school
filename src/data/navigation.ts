import { NavItem } from "@/types";

export const mainNavigation: NavItem[] = [
  {
    label: "Home",
    href: "#hero",
  },
  {
    label: "About Us",
    href: "#about",
    children: [
      { label: "About Nexora", href: "#about", description: "Learn about our vision, philosophy, and history" },
      { label: "Principal's Welcome", href: "#principal", description: "A warm message from Dr. Evelyn Reed" },
      { label: "Why Choose Nexora", href: "#why-choose-us", description: "Our unique educational pillars & advantages" },
      { label: "Campus & Infrastructure", href: "#facilities", description: "World-class learning environment" },
    ],
  },
  {
    label: "Academics",
    href: "#academics",
    children: [
      { label: "Early Years (Ages 3-5)", href: "#academics", description: "Play-based inquiry & foundational discovery" },
      { label: "Primary Education (Grades 1-5)", href: "#academics", description: "Core literacy, numeracy & holistic growth" },
      { label: "Secondary Education (Grades 6-10)", href: "#academics", description: "Rigorous academic inquiry & critical thinking" },
      { label: "Higher Secondary (Grades 11-12)", href: "#academics", description: "University prep, AP/IB pathways & leadership" },
    ],
  },
  {
    label: "Admissions",
    href: "#admissions",
    children: [
      { label: "Admissions Overview", href: "#admissions", description: "Enrollment criteria for academic year 2025-2026" },
      { label: "How to Apply", href: "#admissions", description: "Step-by-step application guidance" },
      { label: "Tuition & Financial Aid", href: "#admissions", description: "Transparent fee structures & merit scholarships" },
      { label: "Schedule Campus Visit", href: "#contact", description: "Experience our vibrant campus in person" },
    ],
  },
  {
    label: "Our Campus",
    href: "#facilities",
    children: [
      { label: "Campus Facilities", href: "#facilities", description: "Smart classrooms, labs, library & auditorium" },
      { label: "Sports & Recreation", href: "#facilities", description: "Olympic-grade athletic fields & indoor complex" },
      { label: "Safety & Security", href: "#features", description: "24/7 surveillance, nurse station & secure access" },
    ],
  },
  {
    label: "Gallery",
    href: "#gallery",
    children: [
      { label: "Campus Life", href: "#gallery", description: "Daily student experiences and community events" },
      { label: "Classroom Activities", href: "#gallery", description: "Hands-on projects, STEM labs and presentations" },
      { label: "Sports & Arts", href: "#gallery", description: "Tournaments, theatrical shows and exhibitions" },
    ],
  },
  {
    label: "News & Events",
    href: "#news",
    children: [
      { label: "School News", href: "#news", description: "Latest achievements and community updates" },
      { label: "Upcoming Events", href: "#news", description: "Competitions, parent seminars and festivals" },
      { label: "Academic Announcements", href: "#news", description: "Examination schedules and holiday calendars" },
    ],
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export const portalLinks = [
  { label: "Student Portal", href: "#portal-modal", id: "student" },
  { label: "Parent Portal", href: "#portal-modal", id: "parent" },
  { label: "Teacher Login", href: "#portal-modal", id: "teacher" },
];

export const footerQuickLinks = [
  { label: "Home", href: "#hero" },
  { label: "About Us", href: "#about" },
  { label: "Academics", href: "#academics" },
  { label: "Admissions", href: "#admissions" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact Us", href: "#contact" },
];

export const footerProgramsLinks = [
  { label: "Academic Programs", href: "#academics" },
  { label: "School Facilities", href: "#facilities" },
  { label: "News & Events", href: "#news" },
  { label: "Admission Information", href: "#admissions" },
  { label: "Why Choose Nexora", href: "#why-choose-us" },
  { label: "Student Life & Clubs", href: "#gallery" },
];
