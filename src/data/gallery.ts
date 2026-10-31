import { GalleryItem } from "@/types";

export const galleryItems: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Senior Science Exhibition & Experiments",
    category: "Classroom Activities",
    image: "/images/gallery/gallery-1.jpg",
    caption: "Students conducting chemistry titrations and optical laser experiments under faculty supervision."
  },
  {
    id: "gal-2",
    title: "Annual Sports Day Sprint Championships",
    category: "Sports",
    image: "/images/gallery/gallery-2.jpg",
    caption: "Track athletes competing in the 100-meter sprint finals amidst roaring house cheers."
  },
  {
    id: "gal-3",
    title: "Vibrant Campus Central Courtyard",
    category: "Campus Life",
    image: "/images/gallery/gallery-3.jpg",
    caption: "Students collaborating, reading, and relaxing under the shaded porticos during lunch recess."
  },
  {
    id: "gal-4",
    title: "International Peace & Cultural Day Ensemble",
    category: "Cultural Programs",
    image: "/images/gallery/gallery-4.jpg",
    caption: "The student orchestra and choir performing the world symphony in native attire."
  },
  {
    id: "gal-5",
    title: "Robotics Club Automated Rover Showcase",
    category: "Classroom Activities",
    image: "/images/gallery/gallery-5.jpg",
    caption: "Grade 9 coding club testing their autonomous obstacle-avoidance Mars rover prototype."
  },
  {
    id: "gal-6",
    title: "Grand Graduation & Valedictorian Ceremony",
    category: "Annual Events",
    image: "/images/gallery/gallery-6.jpg",
    caption: "Class of 2025 tossing caps in the air as they celebrate receiving international diplomas."
  },
  {
    id: "gal-7",
    title: "Inter-House Football Tournament Finals",
    category: "Sports",
    image: "/images/gallery/gallery-7.jpg",
    caption: "Exciting moment as Nexora Eagles score the winning goal during the championship final."
  },
  {
    id: "gal-8",
    title: "Visual Arts & Sculpture Studio Showcase",
    category: "Campus Life",
    image: "/images/gallery/gallery-8.jpg",
    caption: "Inspiring student paintings and clay sculptures displayed during the annual arts promenade."
  }
];

export const galleryCategories: ('All' | GalleryItem['category'])[] = [
  'All',
  'Campus Life',
  'Classroom Activities',
  'Sports',
  'Cultural Programs',
  'Annual Events'
];
