// Resume Data - Structured content from David Mensah's CV

export const personalInfo = {
  name: "David Mensah",
  title: "Full Stack Web Developer",
  location: "Leeds, United Kingdom",
  email: "davidmensah0605@gmail.com",
  phone: "07572926145",
  linkedin: "linkedin.com/davidmensah0605",
  portfolio: "Portfolio",
};

export const professionalSummary =
  "Full Stack Web Developer with 3 years of hands-on experience building performant, accessible React and WordPress solutions. Skilled in React.js, TypeScript, JavaScript, HTML5, CSS3 and Tailwind, with demonstrated results including a 45% page-load reduction and improved WCAG compliance through semantic HTML and ARIA. Rapid learner who translates stakeholder requirements into API-integrated, responsive interfaces and produces clear documentation and training to support smooth platform adoption.";

export const stats = [
  {
    num: 3,
    text: "Years of Experience",
  },
  {
    num: 45,
    text: "Performance Improvement (%)",
  },
  {
    num: 89,
    text: "WCAG Compliance (%)",
  },
  {
    num: 6,
    text: "Major Projects Delivered",
  },
];

export const experience = [
  {
    id: 1,
    company: "Ashcroft Education",
    location: "Remote",
    position: "Freelance WordPress Developer",
    duration: "Nov 2025 - Feb 2026",
    type: "contract",
    achievements: [
      "Designed and delivered a custom WordPress-based course enrolment platform using LearnPress LMS, integrating a secure student portal and Calendly API within a 7-week delivery cycle",
      "Engineered performance optimisation strategies, reducing page load times by 45% through caching, asset minification, and image compression",
      "Improved platform accessibility to 89% WCAG compliance by implementing semantic HTML, ARIA attributes, and keyboard navigation support",
      "Led stakeholder engagement through weekly sprint reviews, translating business requirements into scalable technical solutions",
      "Provided onboarding documentation and training sessions to ensure seamless platform adoption and operational continuity",
    ],
  },
  {
    id: 2,
    company: "PHOENIX Healthcare Distribution Ltd",
    location: "Wakefield",
    position: "Warehouse Operative",
    duration: "",
    type: "full-time",
    achievements: [
      "Coordinated logistics operations in a regulated pharmaceutical distribution environment, ensuring compliance with SOPs and accuracy standards",
      "Managed inventory handling and dispatch workflows within strict performance targets and quality benchmarks",
      "Maintained detailed operational documentation to support traceability and audit requirements",
      "Collaborated cross-functionally to optimise order processing efficiency and minimise fulfilment errors",
      "Consistently met productivity KPIs in a high-volume, time-sensitive environment",
    ],
  },
];

export const education = [
  {
    id: 1,
    institution: "Solent University Southampton",
    location: "Manchester, United Kingdom",
    degree: "BSc (Hons) Computer Science",
    duration: "May 2022 - Jun 2026",
    type: "degree",
    details: {
      specialization: "Web Design and Software Development",
      keyModules: ["Web Technologies", "UX Strategies", "Data Science"],
      dissertation: {
        title: "Vulnerability Detection System",
        technologies: ["Python", "Docker", "TensorFlow", "Pandas", "NumPy"],
      },
    },
  },
];

export const certifications = [
  {
    id: 1,
    name: "IT Support Professional",
    issuer: "Google",
    duration: "Jan 2021 - May 2021",
    icon: "support",
  },
  {
    id: 2,
    name: "Analytics for Power Users",
    issuer: "Google",
    duration: "Aug 2023 - Sep 2023",
    icon: "analytics",
  },
];

export const skills = {
  frontend: {
    title: "Frontend",
    icon: "code",
    items: [
      { name: "React.js", level: 90 },
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 95 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Responsive Design", level: 95 },
      { name: "Accessibility", level: 90 },
    ],
  },
  state: {
    title: "State Management",
    icon: "database",
    items: [
      { name: "Context API", level: 90 },
      { name: "Redux", level: 80 },
    ],
  },
  backend: {
    title: "Backend & Database",
    icon: "server",
    items: [
      { name: "Node.js", level: 80 },
      { name: "Express", level: 75 },
      { name: "PostgreSQL", level: 75 },
      { name: "MySQL", level: 80 },
      { name: "SQLite", level: 85 },
      { name: "Firestore", level: 85 },
    ],
  },
  cms: {
    title: "CMS & Platforms",
    icon: "layout",
    items: [
      { name: "WordPress", level: 90 },
      { name: "Vercel", level: 90 },
      { name: "Netlify", level: 85 },
    ],
  },
  tools: {
    title: "Tools & DevOps",
    icon: "wrench",
    items: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 90 },
      { name: "Postman", level: 85 },
      { name: "Vite", level: 85 },
      { name: "Docker", level: 70 },
    ],
  },
  design: {
    title: "Design",
    icon: "palette",
    items: [
      { name: "Figma", level: 95 },
      { name: "Adobe Illustrator", level: 80 },
    ],
  },
};

export const projects = [
  {
    name: "Event Management System",
    description: "Full-stack event booking platform with real time availability updates",
    features: [
      "Session based authentication and protected routing",
      "Interactive mapping with OpenStreetMap and Leaflet",
      "Scalable frontend architecture with reusable React components",
      "Mobile-first design approach",
    ],
  },
  {
    name: "Online Pharmacy Marketplace",
    description: "Full-stack pharmacy marketplace for real-time online medication ordering",
    features: [
      "Secure authentication with NextAuth.js and role-based access control",
      "Interactive geolocation mapping with React Leaflet",
      "Form validation with React Hook Form and Context API",
      "Optimized Firebase Firestore queries and batch updates",
    ],
  },
  {
    name: "VLE Classroom System",
    description: "Virtual Learning Environment with course management and student enrolment",
    features: [
      "Course management, student enrolment, progress tracking",
      "React components for course browsing, scheduling, certificates",
      "Notification/feedback toast system",
      "Admin dashboard for settings, fees, backup",
      "Supabase for authenticated real-time data backend",
    ],
  },
  {
    name: "Family Management System",
    description: "Full-stack family management application with interactive D3 family tree",
    features: [
      "Secure authentication with bcrypt + JWT and role-based permissions",
      "Responsive UI using shadcn/ui and Tailwind CSS",
      "Stripe payments and Cloudinary media uploads",
      "Deployed to Vercel with DB migrations and automated scripts",
    ],
  },
];
