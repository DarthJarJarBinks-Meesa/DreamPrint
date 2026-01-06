import heroImage from '@assets/generated_images/diverse_students_collaborating_on_3d_printing_project.png';
import pencilHolder from '@assets/generated_images/3d_printed_geometric_pencil_holder.png';
import keychain from '@assets/generated_images/3d_printed_custom_keychain.png';
import phoneStand from '@assets/generated_images/3d_printed_phone_stand.png';

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
      imageUrl: "https://placehold.co/600x600/222222/FFF?text=Bottle+Opener", // Placeholder
      category: "Accessibility"
    },
    {
      id: 5,
      title: "Bridge Truss Model",
      description: "Educational model demonstrating structural engineering principles.",
      creatorName: "EngTeacher",
      sourceName: "Thingiverse",
      sourceUrl: "https://www.thingiverse.com",
      imageUrl: "https://placehold.co/600x600/222222/FFF?text=Bridge+Truss",
      category: "STEM"
    },
    {
      id: 6,
      title: "Planetary Gear Set",
      description: "Mechanical toy showing gear ratios and motion transfer.",
      creatorName: "GearHead",
      sourceName: "Thingiverse",
      sourceUrl: "https://www.thingiverse.com",
      imageUrl: "https://placehold.co/600x600/222222/FFF?text=Gears",
      category: "STEM"
    }
  ],
  faqs: [
    { question: "Who can participate?", answer: "Our programs are currently open to elementary students in our partner school districts in Evanston, IL." },
    { question: "Do I need a 3D printer?", answer: "No! We provide all the printing services. Students just need access to a computer or tablet for design." },
    { question: "Is it free?", answer: "Yes, all our programs and materials are 100% free for participating families." },
    { question: "How can I volunteer?", answer: "We accept Northwestern University students for mentor roles and community members for logistical support." }
  ]
};
