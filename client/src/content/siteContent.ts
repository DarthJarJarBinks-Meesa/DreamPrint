import heroImage from '@assets/generated_images/diverse_students_collaborating_on_3d_printing_project.png';
import pencilHolder from '@assets/generated_images/3d_printed_geometric_pencil_holder.png';
import keychain from '@assets/generated_images/3d_printed_custom_keychain.png';
import phoneStand from '@assets/generated_images/3d_printed_phone_stand.png';
import placeholder1 from '@assets/generated_images/3d_print_abstract_placeholder_1.png';
import placeholder2 from '@assets/generated_images/3d_print_abstract_placeholder_2.png';
import placeholder3 from '@assets/generated_images/3d_print_abstract_placeholder_3.png';
import placeholder4 from '@assets/generated_images/3d_print_abstract_placeholder_4.png';

export const siteContent = {
  hero: {
    headline: "DreamPrint turns imagination into opportunity.",
    subheadline: "We partner with underserved elementary students and families to bring career dreams to life through hands-on 3D design and 3D-printed models—supported by Northwestern University volunteers.",
    image: heroImage,
    ctaPrimary: "See What We Do",
    ctaSecondary: "Get Involved"
  },
  mission: {
    short: "Closing the opportunity gap through 3D printing, mentorship, and tangible career exploration.",
    whyMatters: [
      "Access to advanced technology is often limited by zip code.",
      "Early exposure to STEM builds confidence and future career interest.",
      "Mentorship connects students to role models and new possibilities."
    ]
  },
  stats: [
    { value: "250+", label: "Students Served" },
    { value: "5", label: "School Partners" },
    { value: "40+", label: "NU Volunteers" },
    { value: "500+", label: "Prints Delivered" }
  ],
  timeline: [
    {
      year: "Historical Context",
      title: "Redlining & Segregation",
      description: "Housing policies and redlining in the 20th century created segregated neighborhoods, directly impacting property tax bases that fund local schools."
    },
    {
      year: "Systemic Impact",
      title: "Resource Disparities",
      description: "Schools in historically underfunded districts often lack budget for enrichment programs, advanced technology, and extracurriculars that wealthy districts take for granted."
    },
    {
      year: "The Gap",
      title: "Exposure & Networks",
      description: "It's not just about funding; it's about exposure. Students lack access to professional networks and tangible examples of STEM careers, widening the 'imagination gap'."
    },
    {
      year: "Our Response",
      title: "DreamPrint Initiative",
      description: "We intervene early (elementary age) to provide free access to 3D printing technology, mentorship from university students, and a curriculum that validates their dreams."
    }
  ],
  whatWeDo: {
    process: [
      { step: 1, title: "Dream", description: "Students identify a career aspiration or a problem they want to solve." },
      { step: 2, title: "Design", description: "Using Tinkercad, they learn to manipulate shapes to create 3D models." },
      { step: 3, title: "Print", description: "We 3D print their creations, turning digital ideas into physical reality." },
      { step: 4, title: "Reflect", description: "Students present their work, building confidence and communication skills." }
    ],
    curriculum: [
      { title: "Shape Manipulation", description: "Learning the basics of combining and cutting geometric forms." },
      { title: "Personalized Artifacts", description: "Designing name tags, keychains, and bag charms to build ownership." },
      { title: "Functional Tools", description: "Engineering phone stands, pencil holders, and household organizers." },
      { title: "Team Challenges", description: "Collaborative design sprints to solve specific prompts." }
    ]
  },
  projects: [
    {
      id: 1,
      title: "Geometric Pencil Holder",
      description: "A modern, faceted design that prints without supports. exploring vase mode concepts.",
      creatorName: "DesignStudioX",
      sourceName: "Thingiverse",
      sourceUrl: "https://www.thingiverse.com",
      imageUrl: pencilHolder,
      category: "Everyday"
    },
    {
      id: 2,
      title: "Custom Name Keychain",
      description: "Personalized dual-color print using filament swapping techniques.",
      creatorName: "MakerMom",
      sourceName: "Thingiverse",
      sourceUrl: "https://www.thingiverse.com",
      imageUrl: keychain,
      category: "Art"
    },
    {
      id: 3,
      title: "Minimalist Phone Stand",
      description: "Functional print designed for stability and varied viewing angles.",
      creatorName: "TechPrint3r",
      sourceName: "Thingiverse",
      sourceUrl: "https://www.thingiverse.com",
      imageUrl: phoneStand,
      category: "Tools"
    },
    {
      id: 4,
      title: "Accessible Bottle Opener",
      description: "Assistive device to help open twist-off caps with less grip strength.",
      creatorName: "AccessDesign",
      sourceName: "Thingiverse",
      sourceUrl: "https://www.thingiverse.com",
      imageUrl: placeholder1,
      category: "Accessibility"
    },
    {
      id: 5,
      title: "Bridge Truss Model",
      description: "Educational model demonstrating structural engineering principles.",
      creatorName: "EngTeacher",
      sourceName: "Thingiverse",
      sourceUrl: "https://www.thingiverse.com",
      imageUrl: placeholder2,
      category: "STEM"
    },
    {
      id: 6,
      title: "Planetary Gear Set",
      description: "Mechanical toy showing gear ratios and motion transfer.",
      creatorName: "GearHead",
      sourceName: "Thingiverse",
      sourceUrl: "https://www.thingiverse.com",
      imageUrl: placeholder3,
      category: "STEM"
    },
    {
      id: 7,
      title: "Braille Learning Tile Set",
      description: "Tactile tiles designed to help students learn the Braille alphabet through touch.",
      creatorName: "InclusiveMaker",
      sourceName: "Thingiverse",
      sourceUrl: "https://www.thingiverse.com",
      imageUrl: placeholder4,
      category: "Accessibility"
    },
    {
      id: 8,
      title: "Fraction Circle Kit",
      description: "Visual aid for understanding parts of a whole, perfect for elementary math.",
      creatorName: "MathWhiz",
      sourceName: "Thingiverse",
      sourceUrl: "https://www.thingiverse.com",
      imageUrl: placeholder1,
      category: "STEM"
    },
    {
      id: 9,
      title: "Adjustable Tablet Stand",
      description: "Versatile stand for tablets used during 3D design sessions.",
      creatorName: "WorkSpacePro",
      sourceName: "Thingiverse",
      sourceUrl: "https://www.thingiverse.com",
      imageUrl: placeholder2,
      category: "Tools"
    },
    {
      id: 10,
      title: "Self-Watering Planter",
      description: "A dual-container system that keeps plants hydrated using wicking action.",
      creatorName: "GreenThumb3D",
      sourceName: "Thingiverse",
      sourceUrl: "https://www.thingiverse.com",
      imageUrl: placeholder3,
      category: "Everyday"
    },
    {
      id: 11,
      title: "Modular Desk Organizer",
      description: "Interlocking bins for sorting stationery and design tools.",
      creatorName: "CleanDesk",
      sourceName: "Thingiverse",
      sourceUrl: "https://www.thingiverse.com",
      imageUrl: placeholder4,
      category: "Everyday"
    },
    {
      id: 12,
      title: "Human Cell Anatomy Model",
      description: "Cross-section of a cell with labeled organelles for biology class.",
      creatorName: "BioPrint",
      sourceName: "Thingiverse",
      sourceUrl: "https://www.thingiverse.com",
      imageUrl: placeholder1,
      category: "STEM"
    },
    {
      id: 13,
      title: "One-Handed Jar Opener",
      description: "Mountable wedge tool to help open jars with minimal effort.",
      creatorName: "EasyAccess",
      sourceName: "Thingiverse",
      sourceUrl: "https://www.thingiverse.com",
      imageUrl: placeholder2,
      category: "Accessibility"
    },
    {
      id: 14,
      title: "Low-Poly Animal Statues",
      description: "Artistic minimalist animal figures exploring geometric simplification.",
      creatorName: "PolyArtist",
      sourceName: "Thingiverse",
      sourceUrl: "https://www.thingiverse.com",
      imageUrl: placeholder3,
      category: "Art"
    },
    {
      id: 15,
      title: "Stackable Measurement Spoons",
      description: "Accurate kitchen tools designed for compact storage.",
      creatorName: "HomeMaker",
      sourceName: "Thingiverse",
      sourceUrl: "https://www.thingiverse.com",
      imageUrl: placeholder4,
      category: "Everyday"
    },
    {
      id: 16,
      title: "Solar System Scale Model",
      description: "Miniature planets with proportional sizes for classroom displays.",
      creatorName: "SpaceCadet",
      sourceName: "Thingiverse",
      sourceUrl: "https://www.thingiverse.com",
      imageUrl: placeholder1,
      category: "STEM"
    },
    {
      id: 17,
      title: "Sign Language Alphabet Rings",
      description: "Wearable rings featuring letters in American Sign Language.",
      creatorName: "SignBridge",
      sourceName: "Thingiverse",
      sourceUrl: "https://www.thingiverse.com",
      imageUrl: placeholder2,
      category: "Accessibility"
    },
    {
      id: 18,
      title: "Wall-Mounted Bike Hook",
      description: "Heavy-duty printed bracket for vertical bicycle storage.",
      creatorName: "CycleStorage",
      sourceName: "Thingiverse",
      sourceUrl: "https://www.thingiverse.com",
      imageUrl: placeholder3,
      category: "Tools"
    },
    {
      id: 19,
      title: "Abstract Kinetic Sculpture",
      description: "Balanced moving parts that explore physics and artistic form.",
      creatorName: "MotionArt",
      sourceName: "Thingiverse",
      sourceUrl: "https://www.thingiverse.com",
      imageUrl: placeholder4,
      category: "Art"
    },
    {
      id: 20,
      title: "Cable Management Clips",
      description: "Simple adhesive-friendly clips to organize messy charging cords.",
      creatorName: "TechTidy",
      sourceName: "Thingiverse",
      sourceUrl: "https://www.thingiverse.com",
      imageUrl: placeholder1,
      category: "Everyday"
    },
    {
      id: 21,
      title: "Periodic Table Cubes",
      description: "Individual cubes for each element with engraved atomic data.",
      creatorName: "ChemTeacher",
      sourceName: "Thingiverse",
      sourceUrl: "https://www.thingiverse.com",
      imageUrl: placeholder2,
      category: "STEM"
    },
    {
      id: 22,
      title: "Universal Handle Extender",
      description: "Tool to make small knobs and handles easier to grip for seniors.",
      creatorName: "CarePrint",
      sourceName: "Thingiverse",
      sourceUrl: "https://www.thingiverse.com",
      imageUrl: placeholder3,
      category: "Accessibility"
    },
    {
      id: 23,
      title: "Desktop Fidget Spinner",
      description: "Customizable bearing-based toy for focus and stress relief.",
      creatorName: "FocusPrints",
      sourceName: "Thingiverse",
      sourceUrl: "https://www.thingiverse.com",
      imageUrl: placeholder4,
      category: "Everyday"
    },
    {
      id: 24,
      title: "Voronoi Pattern Vase",
      description: "Ornate decorative vase utilizing complex organic patterns.",
      creatorName: "OrganicDesigner",
      sourceName: "Thingiverse",
      sourceUrl: "https://www.thingiverse.com",
      imageUrl: placeholder1,
      category: "Art"
    },
    {
      id: 25,
      title: "Laptop Stand Risers",
      description: "Ergonomic clips to elevate laptops for better airflow and posture.",
      creatorName: "ErgoPrints",
      sourceName: "Thingiverse",
      sourceUrl: "https://www.thingiverse.com",
      imageUrl: placeholder2,
      category: "Tools"
    },
    {
      id: 26,
      title: "Telescoping Pencil Case",
      description: "Expandable container that fits different lengths of art supplies.",
      creatorName: "ArtPack",
      sourceName: "Thingiverse",
      sourceUrl: "https://www.thingiverse.com",
      imageUrl: placeholder3,
      category: "Everyday"
    },
    {
      id: 27,
      title: "Wind Turbine Model",
      description: "Functional assembly showing how wind energy is captured.",
      creatorName: "EcoEngineer",
      sourceName: "Thingiverse",
      sourceUrl: "https://www.thingiverse.com",
      imageUrl: placeholder4,
      category: "STEM"
    },
    {
      id: 28,
      title: "Adaptive Key Turner",
      description: "Leveled grip to make turning keys in locks significantly easier.",
      creatorName: "HomeAssist",
      sourceName: "Thingiverse",
      sourceUrl: "https://www.thingiverse.com",
      imageUrl: placeholder1,
      category: "Accessibility"
    },
    {
      id: 29,
      title: "Lithophane Picture Frame",
      description: "Backlit frame designed to hold 3D-printed light-based photos.",
      creatorName: "PhotoMaker",
      sourceName: "Thingiverse",
      sourceUrl: "https://www.thingiverse.com",
      imageUrl: placeholder2,
      category: "Art"
    },
    {
      id: 30,
      title: "Headphone Hanger",
      description: "Under-desk mount to keep workspace clean and organized.",
      creatorName: "StudioSetup",
      sourceName: "Thingiverse",
      sourceUrl: "https://www.thingiverse.com",
      imageUrl: placeholder3,
      category: "Tools"
    },
    {
      id: 31,
      title: "DNA Double Helix Model",
      description: "Color-coded bases for teaching genetics and molecular biology.",
      creatorName: "GeneticsLab",
      sourceName: "Thingiverse",
      sourceUrl: "https://www.thingiverse.com",
      imageUrl: placeholder4,
      category: "STEM"
    },
    {
      id: 32,
      title: "Braille Dice Set",
      description: "Standard 6-sided dice with tactile numbering for accessible gaming.",
      creatorName: "GameAccess",
      sourceName: "Thingiverse",
      sourceUrl: "https://www.thingiverse.com",
      imageUrl: placeholder1,
      category: "Accessibility"
    },
    {
      id: 33,
      title: "Wall Mount Controller Stand",
      description: "Minimalist cradle for storing gaming controllers on the wall.",
      creatorName: "GamerPrints",
      sourceName: "Thingiverse",
      sourceUrl: "https://www.thingiverse.com",
      imageUrl: placeholder2,
      category: "Everyday"
    },
    {
      id: 34,
      title: "Geodesic Sphere Lamp",
      description: "Intricate geometric lampshade that creates beautiful shadows.",
      creatorName: "LightDesign",
      sourceName: "Thingiverse",
      sourceUrl: "https://www.thingiverse.com",
      imageUrl: placeholder3,
      category: "Art"
    },
    {
      id: 35,
      title: "Socket Wrench Organizer",
      description: "Custom labeled tray to keep various tool sizes sorted.",
      creatorName: "ShopTools",
      sourceName: "Thingiverse",
      sourceUrl: "https://www.thingiverse.com",
      imageUrl: placeholder4,
      category: "Tools"
    },
    {
      id: 36,
      title: "Compass and Protractor Set",
      description: "Functional geometry tools designed for durability in classrooms.",
      creatorName: "SchoolPrint",
      sourceName: "Thingiverse",
      sourceUrl: "https://www.thingiverse.com",
      imageUrl: placeholder1,
      category: "STEM"
    }
  ],
  faqs: [
    { question: "Who can participate?", answer: "Our programs are currently open to elementary students in Chicago and the Greater Chicago area." },
    { question: "Do I need a 3D printer?", answer: "No! We provide all the printing services. Students just need access to a computer or tablet for design." },
    { question: "Is it free?", answer: "Yes, all our programs and materials are 100% free for participating families." },
    { question: "How can I volunteer?", answer: "We accept all community members for mentor roles and logistical support." }
  ]
};
