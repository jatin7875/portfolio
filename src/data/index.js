// ─── PERSONAL INFO ────────────────────────────────────────────────
export const personal = {
  name: 'Jatin Lanjewar',
  tagline: 'AVAILABLE FOR HIRE',
  roles: ['Full Stack Developer', 'Problem Solver', 'Java Programmer'],
  bio1: "I’m Jatin Lanjewar, a MERN Stack Developer focused on building modern, scalable web applications. Currently pursuing B.Tech in Computer Science (Data Science), I combine full-stack development with strong DSA skills in Java to create efficient and user-centric digital products. I love participating in hackathons, exploring AI-powered applications, and continuously learning new technologies.",
  bio2: "When I'm not coding, you'll find me contributing to open-source projects, exploring new technologies, or competing in hackathons. I believe great software is built at the intersection of logic and creativity.",
  email: 'lanjewarjatin18@email.com',
  github: 'https://github.com/jatin7875',
  linkedin: 'https://linkedin.com/in/https://www.linkedin.com/in/jatin-lanjewar-547697316/',
  instagram: 'https://www.instagram.com/jatiinx_03?igsh=MXJnZjd3ajQxeDI1YQ==',
  stats: [
    //{ value: 3, label: 'Years Exp' },
    { value: 6, label: 'Projects' },
    { value: 9, label: 'Technologies' },
    { value: 6, label: 'Hackathons' },
  ],
}

// ─── SKILLS ───────────────────────────────────────────────────────
export const skillCards = [
  { icon: '⚡', title: 'Frontend', desc: 'React, Next.js,HTML,CSS Tailwind CSS, and modern web APIs.', active: true },
  { icon: '🔧', title: 'Backend',  desc: 'Node.js, Express, Python, Django, REST & GraphQL APIs.' },
  { icon: '🗄️', title: 'Databases', desc: ' MongoDB,Firebase.' },
  { icon: '☁️', title: 'DevOps',   desc: ' AWS, CI/CD pipelines and Git workflows.' },
]

export const techStack = [
  { name: 'React',      color: '#61DAFB' },
  { name: 'Next.js',    color: '#ffffff' },
  { name: 'TypeScript', color: '#3178C6' },
  { name: 'Node.js',    color: '#339933' },
  { name: 'Python',     color: '#3776AB' },
  { name: 'Java', color: '#4169E1' },
  { name: 'MongoDB',    color: '#47A248' },
  //{ name: 'Docker',     color: '#2496ED' },
  //{ name: 'AWS',        color: '#FF9900' },
  //{ name: 'Redis',      color: '#DC382D' },
  //{ name: 'GraphQL',    color: '#E10098' },
  { name: 'Tailwind',   color: '#06B6D4' },
  { name: 'Git',        color: '#F05032' },
  //{ name: 'Linux',      color: '#FCC624' },
  //{ name: 'Figma',      color: '#F24E1E' },
  { name: 'C',      color: '#00599C' },
]

// ─── PROJECTS ─────────────────────────────────────────────────────
export const projects = [
{
num: '01',
title: 'FinVise AI Dashboard',
desc: 'FinVise AI is an AI-powered stock market analysis dashboard designed to help beginner investors analyze stocks listed on the NSE. Users can search for stocks to view real-time charts, 50-day and 200-day SMA indicators, sentiment analysis using VADER NLP, and the latest news. The platform also includes an AI chatbot for stock-related queries.',
tech: ['React.js','Tailwind CSS','FastAPI','Python','yFinance API','Grok API','GNews API','JavaScript'],
github: 'https://github.com/jatin7875/technova-project',
live: 'https://technova-project.vercel.app/'
},

{
num: '02',
title: 'Wanderlust',
desc: 'Wanderlust is an Airbnb-inspired full-stack web application built with the MERN stack that allows users to explore and list vacation properties. It includes authentication, property listing management, image uploads, and a review system, following MVC architecture with proper validations.',
tech: ['HTML','CSS','JavaScript','Node.js','MongoDB','Express.js'],
github: 'https://github.com/jatin7875/WanderLust',
live: 'https://wanderlust-8-8122.onrender.com/listings'
},

{
num: '03',
title: 'QuickGPT',
desc: 'QuickGPT is an AI-powered chatbot web application that enables users to generate text and AI images through a modern interface. It integrates the OpenAI API and includes a credit-based payment system using Stripe and webhooks.',
tech: ['React.js','JavaScript','OpenAI API','Node.js','Stripe API','Stripe Webhooks','Express.js','MongoDB'],
github: 'https://github.com/jatin7875/QuickGPT-By-Jatin',
live: 'https://quick-gpt-jatin.vercel.app/'
},

{
num: '04',
title: 'Weather App',
desc: 'A responsive React.js application that allows users to check real-time weather by entering a city name. It displays temperature, humidity, and weather conditions using a weather API.',
tech: ['React.js','JavaScript','CSS','Weather API'],
github: 'https://github.com/jatin7875/Weather-React-App',
live: 'https://weather-react-app-ten-murex.vercel.app/'
},

{
num: '05',
title: 'Dabangg C 2.0 Event Website',
desc: 'A modern React.js website developed for a college event to showcase event details, schedules, and updates with a clean UI and smooth navigation.',
tech: ['React.js','JavaScript','Tailwind CSS'],
github: 'https://github.com/jatin7875/dabangg-c-launchpad-main',
live: 'https://dabangg-c-jatin.vercel.app/'
},

{
num: '06',
title: 'Amazon & Spotify UI Clones',
desc: 'Frontend clones of Amazon and Spotify built using HTML and CSS during early web development learning to practice layouts, UI design, and responsive styling.',
tech: ['HTML','CSS'],
github: 'https://github.com/jatin7875/Amezon-clone-Front_End_Projects',
github2: 'https://github.com/jatin7875/Spotify-clone-Front_End_Projects'
}
]

// ─── EXPERIENCE ───────────────────────────────────────────────────
export const experience = [
  //{ date: 'July 2025 — Present', role: 'Full Stack Developer', company: 'TechCorp Inc. · Full-time', desc: 'Built and maintained 3 production web apps serving 50k+ users. Led migration from monolith to microservices. Mentored 2 junior developers.' },
  { date: 'Aug 2025 — Sep 2025', role: 'Full Stack Developer Intern', company: 'Prodigy InfoTech· Internship', desc: 'Full Stack Web Development Intern – Prodigy InfoTech Completed a 1-month internship at Prodigy InfoTech, where I worked on full-stack web development projects and gained hands-on experience building real-world web applications' },
  //{ date: '2022 — 2023', role: 'Freelance Developer', company: 'Self-employed', desc: 'Delivered 8 client projects including e-commerce sites, landing pages, and custom web tools. 100% client satisfaction rate.' },
]

// ─── CERTIFICATES & AWARDS ────────────────────────────────────────
export const certificates = [
  { icon: '🌟', title: 'LeetCode 50+', platform: 'LeetCode', desc: 'Solved 50+ problems on LeetCode using Java, practicing key DSA concepts such as arrays, strings, recursion, and bit manipulation, which helped strengthen my problem-solving ability, algorithmic thinking, and coding efficiency for technical interviews and competitive programming.', color: '#FFA116', year: '2026' },
  { icon: '🏆', title: 'TCS CodeVita Season 13 (Round 2)', platform: 'TCS CodeVita', desc: 'Cleared Round 1 & Round 2 of TCS CodeVita Season 13 and achieved AIR 3263, solving algorithmic problems using Java and applying strong DSA and competitive programming skills.', color: '#FFD700', year: '2025' },
  { icon: '🎓', title: 'DSA(Java) & MERN Stack Development', platform: 'Apna Collage', desc: 'Completed MERN Stack Development and DSA (Java) course from Apna College, learning full-stack development and core DSA concepts using Java.', color: '#0056D2', year: '2024-2025' },
  { icon: '⚡', title: 'Hackathon', platform: 'Hackathon', desc: 'Participated in 5+ hackathons, securing Top 10 positions in 3 events, showcasing strong innovation, teamwork, and rapid development skills.', color: '#e8490f', year: '2024-2026' },
  //{ icon: '🐍', title: 'Python for ML', platform: 'Coursera', desc: 'IBM Machine Learning with Python — completed with distinction.', color: '#3776AB', year: '2023' },
  //{ icon: '☁️', title: 'AWS Certified', platform: 'Amazon Web Services', desc: 'AWS Cloud Practitioner Essentials certification.', color: '#FF9900', year: '2024' }
]
