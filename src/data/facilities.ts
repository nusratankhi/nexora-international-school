import { FacilityItem } from "@/types";

export const facilitiesData: FacilityItem[] = [
  {
    id: "classrooms",
    title: "Modern Classrooms",
    category: "Academic Infrastructure",
    description: "Acoustically treated, climate-controlled digital classrooms equipped with 4K interactive display panels, ergonomic modular seating, and natural daylight.",
    image: "/images/facilities/modern-classrooms.jpg",
    capacity: "25 Students per classroom",
    features: ["Interactive 4K Smart Boards", "Ergonomic Modular Seating", "High-speed Wi-Fi 6", "Climate Control"]
  },
  {
    id: "science-lab",
    title: "Science Laboratory",
    category: "STEM & Research",
    description: "Three independent, university-standard physics, chemistry, and biology research spaces equipped with digital fume hoods and precision optical sensors.",
    image: "/images/facilities/science-lab.jpg",
    capacity: "35 Students per lab",
    features: ["Safety Fume Hoods & Eye Showers", "Binocular Microscopes", "Vernier Data Collection Sensors", "Chemical Resistant Workbenches"]
  },
  {
    id: "computer-lab",
    title: "Computer Laboratory",
    category: "STEM & Research",
    description: "Dual state-of-the-art computer labs with high-performance workstations for coding, Python, robotics modeling, 3D printing, and digital media production.",
    image: "/images/facilities/computer-lab.jpg",
    capacity: "40 Workstations",
    features: ["Dual-boot Core i7 Workstations", "3D Printers & Arduino Kits", "Fiber Optic Gigabit Backbone", "Industry Standard Design Software"]
  },
  {
    id: "library",
    title: "Knowledge Library",
    category: "Resource Center",
    description: "A welcoming, bi-level learning commons harboring over 25,000 physical volumes, global digital research journal databases, and cozy quiet reading pods.",
    image: "/images/facilities/library.jpg",
    capacity: "120 Readers",
    features: ["JSTOR & EBSCO Digital Subscriptions", "Silent Study Carrels", "Children's Storytelling Nook", "Automated RFID Book Lending"]
  },
  {
    id: "playground",
    title: "Playground & Sports Complex",
    category: "Athletics & Fitness",
    description: "Expansive green synthetic grass football pitch, basketball and tennis courts, 200m running track, and sheltered age-appropriate adventure play stations.",
    image: "/images/facilities/playground.jpg",
    capacity: "500+ Spectators & Athletes",
    features: ["FIFA-Certified Turf Pitch", "Synthetic Rubber Sprint Track", "Full-court Basketball Arena", "Shaded Play Swings & Climbers"]
  },
  {
    id: "auditorium",
    title: "Multipurpose Auditorium",
    category: "Arts & Assemblies",
    description: "A grand 800-seat performing arts theater complete with professional theatrical lighting rigs, surround acoustics, green rooms, and orchestra pit.",
    image: "/images/facilities/auditorium.jpg",
    capacity: "800 Seated Guests",
    features: ["Motorized Stage Drapery", "DMX Lighting Rigs & Soundcraft Audio", "High-lumen Laser Projection", "Wheelchair Accessible Seating"]
  }
];
