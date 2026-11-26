/**
 * Single source of truth for all portfolio content.
 * Keeping copy here (instead of inside JSX) makes the pages easy to update
 * without touching layout code.
 */

import heroImage from '../assets/hero-bg.jpg';
import tokenProjectImage from '../assets/project-token.jpg';
import registrationProjectImage from '../assets/project-registration.jpg';
import portfolioProjectImage from '../assets/project-portfolio.jpg';
import serviceWebImage from '../assets/service-web.svg';
import serviceFrontendImage from '../assets/service-frontend.svg';
import serviceDatabaseImage from '../assets/service-database.svg';
import serviceSupportImage from '../assets/service-support.svg';

export const profile = {
  firstName: 'Wu Yi',
  legalName: 'Wu Yi',
  role: 'Software Engineering Technician',
  tagline: 'I turn ideas into clean, dependable interfaces.',
  location: 'Suzhou, Jiangsu, China',
  heroImage,
  school: 'Suzhou Centennial College',
  program: 'Software Technology · Software Engineering Technician',
  email: 'wuamy646@gmail.com',
  phone: '+86 180 1292 9976',
  github: 'https://github.com/amyw102',
  resumeFile: 'resume/WuYi-Resume.pdf',
  mission:
    'My mission is to build software that feels effortless to use. I care about clear structure, readable code and interfaces that respect the person on the other side of the screen — and I keep learning until the details are right.',
  intro:
    'I am a third-year Software Technology student at Suzhou Centennial College, working towards a career in front-end and database development. I enjoy the part of development where logic meets design: wiring up a React component, shaping a database query, or fixing the one CSS rule that finally makes a layout click.',
};

export const stats = [
  { value: '3+', label: 'Projects shipped' },
  { value: '6', label: 'Portfolio pages' },
  { value: 'Jun 2027', label: 'Expected graduation' },
];

export const skillGroups = [
  {
    title: 'Front-end',
    skills: ['React', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Responsive design'],
  },
  {
    title: 'Back-end & data',
    skills: ['Java', 'JDBC', 'MySQL', 'REST basics', 'Relational design'],
  },
  {
    title: 'Tools',
    skills: ['Git & GitHub', 'VS Code', 'Postman', 'Figma', 'Linux CLI'],
  },
];

export const projects = [
  {
    id: 'token-selling',
    index: '01',
    title: 'Token Selling Application',
    subtitle: 'Academic group project · 4-person team',
    year: '2025',
    image: tokenProjectImage,
    role: 'Front-end & database developer',
    summary:
      'A desktop marketplace where users buy, sell and track digital tokens. I built the transaction dashboard, connected the Java front end to a MySQL database, and handled validation for buy/sell orders.',
    outcome:
      'Delivered a working demo with role-based login, live balance updates and a transaction history view. The team finished two weeks ahead of the deadline and received full marks for functionality.',
    highlights: ['Role-based login', 'Live balance dashboard', 'Transaction history'],
    tech: ['Java', 'JavaFX', 'MySQL', 'JDBC'],
    mediaNote: 'Interface concept mockup',
  },
  {
    id: 'course-registration',
    index: '02',
    title: 'Course Registration System',
    subtitle: 'Database & Java coursework',
    year: '2024',
    image: registrationProjectImage,
    role: 'Solo developer',
    summary:
      'A console-and-web hybrid registration tool for a small college department. Students browse available courses, enrol within seat limits, and administrators manage course records.',
    outcome:
      'Designed a normalised MySQL schema (students, courses, enrolments) and wrote the Java DAO layer. Seat-limit checks reduced invalid enrolments to zero during testing.',
    highlights: ['Normalised schema', 'Seat-limit validation', 'Admin CRUD'],
    tech: ['Java', 'MySQL', 'JDBC', 'HTML/CSS'],
    mediaNote: 'Interface concept mockup',
  },
  {
    id: 'portfolio-site',
    index: '03',
    title: 'Personal Portfolio Website',
    subtitle: 'React · COMP229 Assignment 2',
    year: '2026',
    image: portfolioProjectImage,
    role: 'Designer & developer',
    summary:
      'The site you are browsing now: a six-page React portfolio with a custom identity, client-side routing, responsive layouts and a contact form that captures submissions and returns the visitor home.',
    outcome:
      'Built from scratch with reusable components and a single content data file. Fully responsive from 360px phones to widescreen desktops, with accessible labels and keyboard-friendly navigation.',
    highlights: ['6 routed pages', 'Custom SVG logo', 'Working contact form'],
    tech: ['React', 'React Router', 'CSS3', 'Vite'],
    mediaNote: 'Interface concept mockup',
    link: 'https://github.com/amyw102/react-portfolio',
  },
];

export const education = [
  {
    period: 'Sep 2021 — Jun 2024',
    expected: 'High school diploma · completed',
    institution: 'Nanjing Yuhua Tai High School',
    qualification: 'Senior Secondary Diploma (High School Graduation Certificate)',
    location: 'Nanjing, Jiangsu, China',
    description:
      'General senior-secondary education from grade 10 to grade 12, completed with the national high school graduation certificate. Three years of steady coursework — mathematics, languages and sciences — built the study habits I now rely on for programming.',
  },
  {
    period: 'Sep 2024 — Present',
    expected: 'Junior year · Expected June 2027',
    institution: 'Suzhou Centennial College',
    qualification: 'Diploma in Software Technology (Software Engineering Technician)',
    location: 'Suzhou, Jiangsu, China',
    description:
      'Three-year diploma programme covering programming fundamentals, data structures, database applications and web front-end development. Now in my third year, focusing on React-based interfaces and database-backed applications.',
    coursework: [
      'Programming Fundamentals',
      'Data Structures',
      'Database Applications',
      'Web Front-end Development',
      'Web Application Development (COMP229)',
    ],
  },
];

export const experience = [
  {
    period: 'Jul 2024 — Sep 2024 · weekends & holidays',
    role: 'Teaching Assistant',
    organisation: 'Xinsilu Education Training Centre',
    location: 'Suzhou, Jiangsu, China',
    description:
      'Supported the lead teacher at a community after-school centre, tutoring pupils in grades 1–3 and keeping the classroom running smoothly.',
    responsibilities: [
      'Tutored Chinese, maths and English homework for pupils in grades 1–3.',
      'Adapted explanations to individual learning difficulties and helped pupils work through problems step by step.',
      'Organised reading sessions and educational games that built study habits and teamwork.',
      'Kept simple records of pupils’ progress and shared feedback with parents and the lead teacher.',
    ],
  },
];

export const certifications = [
  {
    title: 'IELTS Academic · Overall 6.5',
    issuer: 'British Council / IDP',
    year: 'Current',
    note: 'English proficiency across reading, listening, writing and speaking; continuing weekly practice.',
  },
  {
    title: 'College English Test Band 4 (CET-4)',
    issuer: 'National College English Testing Committee',
    year: 'Completed',
    note: 'Passed the national university English examination.',
  },
  {
    title: 'Web Application Development (COMP229)',
    issuer: 'Suzhou Centennial College',
    year: '2026 — in progress',
    note: 'React fundamentals, component architecture, routing and deployment.',
  },
];

export const services = [
  {
    id: 'web',
    number: '01',
    title: 'Web Development',
    description:
      'Responsive marketing sites and small web apps built with React, semantic HTML and modern CSS — fast to load and easy to maintain.',
    deliverables: ['Landing pages', 'Multi-page sites', 'Deployment setup'],
    icon: 'browser',
    image: serviceWebImage,
    imageAlt: 'Illustration of a responsive marketing page inside a browser window',
  },
  {
    id: 'frontend',
    number: '02',
    title: 'Front-end & UI',
    description:
      'Turning wireframes into pixel-clean interfaces with reusable components, sensible spacing and motion that supports the content.',
    deliverables: ['Component libraries', 'Design systems', 'Accessibility pass'],
    icon: 'layers',
    image: serviceFrontendImage,
    imageAlt: 'Illustration of layered interface cards being assembled',
  },
  {
    id: 'backend',
    number: '03',
    title: 'Java & Databases',
    description:
      'Reliable back-end logic and tidy MySQL schemas: CRUD services, validation, and queries that stay readable as the data grows.',
    deliverables: ['Schema design', 'JDBC / DAO layers', 'Data validation'],
    icon: 'database',
    image: serviceDatabaseImage,
    imageAlt: 'Illustration of a database stack beside a query result table',
  },
  {
    id: 'support',
    number: '04',
    title: 'Technical Support',
    description:
      'Debugging, code review and documentation for student teams or small businesses that need a second pair of eyes.',
    deliverables: ['Bug fixing', 'Code review', 'Setup & handover'],
    icon: 'wrench',
    image: serviceSupportImage,
    imageAlt: 'Illustration of a terminal window with passing checks and a wrench',
  },
];

export const processSteps = [
  { number: '01', title: 'Listen', text: 'Understand the goal, the audience and the constraints before writing a line of code.' },
  { number: '02', title: 'Plan', text: 'Sketch the structure, choose the stack and agree on what “done” looks like.' },
  { number: '03', title: 'Build', text: 'Ship in small, tested increments with clear commits and readable components.' },
  { number: '04', title: 'Hand over', text: 'Document the setup, walk through the result and leave room for easy updates.' },
];
