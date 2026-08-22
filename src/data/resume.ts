// Structured content sourced from "Resume Daksh Sawhney.docx.pdf" (src/info)
import type { SectionKey } from '../components/Sidebar'

export const profile = {
  name: 'Daksh Sawhney',
  initials: 'DS',
  // Drop a portrait in later: import the file above and set photo to it, e.g.
  //   import portrait from '../info/daksh-portrait.jpg'
  //   photo: portrait,
  photo: '' as string,
  tagline: 'Computational Mathematics & Quantitative Finance',
  school: 'Inventure Academy',
  location: 'Bangalore, India',
  grade: 'Grade 12 · Cambridge A Level',
  email: 'dakshsawhney2008@gmail.com',
  objective:
    'High school student specialising in computational mathematics and quantitative finance. I translate abstract problems into structured models and test them in real environments.',
  bio: [
    'Built Persifolio, an AI-based investment app and market simulator used by 4,000+ young professionals to learn budgeting, portfolio construction, and risk management.',
    'Published research on digital payment adoption in the International Journal of Social Science and Economic Research (IJSSER). Completing AS and A Level Further Mathematics in a single year.',
    'Outside academics: competitive athlete (basketball, shot put) and environmental entrepreneur — raised corporate funding to plant 100,000+ trees across six sites in Bangalore.',
  ],
  interests: [
    'Algorithmic modelling',
    'Quantitative analysis',
    'Financial instability & systemic risk',
  ],
  qualities: ['Curious', 'Enterprising', 'Collaborative', 'Persistent'],
  currentlyBuilding: 'Persifolio v2 & RSI-India dynamical systems research',
}

export type Stat = {
  label: string
  unit: string
  section: SectionKey
} & ({ value: string } | { target: number; prefix?: string; suffix?: string; indian?: boolean })

export const tickerStats: Stat[] = [
  { label: 'PERSIFOLIO', target: 4000, suffix: '+', unit: 'users', section: 'projects' },
  { label: 'TREES PLANTED', target: 100000, suffix: '+', unit: 'across 6 sites', section: 'experience' },
  { label: 'FUNDING RAISED', target: 500000, prefix: '₹', indian: true, unit: 'corporate', section: 'experience' },
  { label: 'RESEARCH PAPERS', target: 3, unit: '1 published', section: 'research' },
  { label: 'PATENT', value: 'Filed', unit: 'Indian Patent Journal', section: 'projects' },
  { label: 'HACKATHON', value: 'National Winner', unit: 'Harvard, 2026', section: 'awards' },
]

export const heroStats: Stat[] = [
  { label: 'People reached', target: 4000, suffix: '+', unit: 'via Persifolio', section: 'projects' },
  { label: 'Trees planted', target: 100000, suffix: '+', unit: '7 plantation drives', section: 'experience' },
  { label: 'Funding raised', target: 500000, prefix: '₹', indian: true, unit: 'corporate sponsors', section: 'experience' },
]

export const quickFacts = {
  currently: 'A Level & AS Level Further Mathematics — completed in a single year',
  standardisedTesting: [{ exam: 'SAT', detail: 'Attempting August 2026' }],
  focusAreas: ['Computational Mathematics', 'Quantitative Finance', 'Applied ML'],
  languagesTools: ['Python', 'SQL', 'Flutter', 'Firebase', 'AWS', 'Azure'],
}

export type Education = {
  institution: string
  period: string
  level: string
  subjects: string
  grades?: string
  current?: boolean
}

export const education: Education[] = [
  {
    institution: 'Inventure Academy, Bangalore, India',
    period: '2026 – 2027',
    level: 'Cambridge A Level, Grade 12',
    subjects: 'Mathematics, Further Mathematics, Physics, Chemistry, Computer Science, English',
    current: true,
  },
  {
    institution: 'Inventure Academy, Bangalore, India',
    period: '2025 – 2026',
    level: 'Cambridge AS Level, Grade 11',
    subjects: 'Mathematics (Grade A), Physics, Chemistry, Computer Science',
    grades: 'A',
  },
  {
    institution: 'Inventure Academy, Bangalore, India',
    period: '2024 – 2025',
    level: 'IGCSE',
    subjects:
      'English Language (A), English Literature (A*), Mathematics (A*), Additional Mathematics (A*), Biology (A*), Physics (A*), Chemistry (A*), Economics (A*), Computer Science (A*), Spanish (A)',
  },
]

export type Research = {
  title: string
  org: string
  period: string
  mentor?: string
  summary: string
  status: string
  statusTone: 'live' | 'review' | 'published'
}

export const research: Research[] = [
  {
    title: 'Transient Chaos & Geometric Transitions in Nonlinear Dynamical Systems',
    org: 'Research Science Institute – India (MIT-affiliated)',
    period: 'Jun 2026 – Jul 2026',
    mentor: 'Dr. Kaushal Verma, Dean of Mathematics, Indian Institute of Science',
    summary:
      'Selected for RSI-India with a <2% acceptance rate (30 students nationally). Designed and coded a custom bifurcation diagram simulator analysing how discrete-time nonlinear equations transition into chaos. Developed a structural classification coefficient (ξ) that categorises equations into smooth unimodal, smooth multimodal, and piecewise linear classes — predicting dynamical behaviour directly from equation structure.',
    status: 'Manuscript submitted, under review',
    statusTone: 'review',
  },
  {
    title: 'POS Tagging of Hindi–English Code-Mixed Text Using an Averaged Perceptron',
    org: 'Cambridge Centre of International Research, Cambridge, UK',
    period: 'Nov 2025 – Mar 2026',
    mentor: 'Dr. Wei Wei Sun, Lecturer, Dept. of Computer Science, University of Cambridge',
    summary:
      'Investigated sentence patterns causing tagging errors in LLMs due to informal Hindi-English (Hinglish) text. Error analysis revealed the most frequent misclassifications occurred between nouns, verbs, proper nouns, and adjectives.',
    status: 'Submitted to an international AI conference, under review',
    statusTone: 'review',
  },
  {
    title:
      'From Cash to Clicks: The Transformative Impact of UPI on Consumer Behaviour and Financial Inclusion in India',
    org: 'International Journal of Social Science and Economic Research (IJSSER)',
    period: 'Nov 2024 – Jan 2025',
    summary:
      'Investigates the transformative impact of the Unified Payments Interface (UPI) on consumer behaviour, financial inclusion, and economic growth in India.',
    status: 'Published',
    statusTone: 'published',
    link: 'https://doi.org/10.46609/IJSSER.2025.v10i07.021',
  } as Research & { link: string },
]

export type ProjectT = {
  name: string
  role: string
  period: string
  tagline: string
  description: string[]
  stack?: string[]
  highlights: { label: string; value: string }[]
}

export const projects: ProjectT[] = [
  {
    name: 'Persifolio',
    role: 'Founder, Creator & Social Entrepreneur',
    period: '2024 – present',
    tagline: 'AI-based investment portfolio recommendation system with a market simulator',
    description: [
      'A mobile investment-education platform bridging the wealth gap for underserved communities. Conducted workshops and onboarded 4,000+ young adults and low-to-mid income users, teaching budgeting, portfolio construction, and risk management through hands-on simulation.',
      'Simplifies complex financial concepts with personalised investment suggestions, risk scores, and a virtual stock market simulator — reducing the fear and misinformation that keeps people from investing.',
      'Cleared the first stage of patenting and was published in the Indian Patent Journal. Recently adopted by schools in Odisha as part of their financial-awareness program, supported by a Member of the Rajya Sabha, Government of India.',
    ],
    stack: ['Flutter', 'Firebase', 'Material 3', 'Crashlytics', 'Google Analytics', 'Market Data APIs'],
    highlights: [
      { label: 'Users onboarded', value: '4,000+' },
      { label: 'Patent status', value: 'Filed · Published' },
      { label: 'Platform', value: 'Google Play' },
    ],
  },
  {
    name: 'Cyberslayer',
    role: 'Creator',
    period: 'Sept 2025 – present',
    tagline: 'Cybersecurity awareness platform for senior citizens — "Don\'t be a victim, be a slayer."',
    description: [
      'A free, quiz-based cybersecurity awareness platform protecting senior citizens from scams and fraud. Simulates real-world threats — fake arrest scams, phishing emails, impersonation attacks — through interactive scenarios.',
      'Addresses the human vulnerability gap in cybersecurity: seniors, small business owners, and non-tech-savvy populations are frequently targeted through deception and fear. Turns passive advice into active practice.',
    ],
    highlights: [
      { label: 'Format', value: 'Quiz-based web app' },
      { label: 'Audience', value: 'Senior citizens, India' },
    ],
  },
]

export type Internship = {
  role: string
  company: string
  period: string
  location: string
  contact?: string
  points: string[]
}

export const internships: Internship[] = [
  {
    role: 'Summer Intern',
    company: 'Nine Leaps Technology Solutions Ltd — AI Centre of Excellence at Noviro.ai',
    period: '1 Apr 2025 – 15 May 2025',
    location: 'In person',
    contact: 'Mr. Anand Ganesan',
    points: [
      'Gained hands-on experience in web development — frontend (HTML/CSS) and backend (Python-Flask) integration.',
      'Developed proficiency in SQL and SQLite, performing CRUD operations within web applications.',
      'Integrated chatbots and LLM APIs to build conversational AI tools; explored Retrieval-Augmented Generation (RAG), vector embeddings, and their applications in enhancing AI responses.',
    ],
  },
  {
    role: 'Software Development Intern',
    company: 'Address Makers Pvt Ltd',
    period: 'May 2025 – Oct 2025',
    location: 'In person',
    contact: 'Mr. Santosh Soni',
    points: [
      'Designed and developed a production-grade Gen AI chatbot and intelligent automation bot actively used by the company for customer interaction — not a prototype.',
      'Integrated multiple linguistic language models to serve users across regional-language preferences.',
      'Incorporated speech-to-text technology to enable voice-based customer interaction.',
    ],
  },
]

export type Course = {
  name: string
  org: string
  date: string
  grade?: string
  details?: string
}

export const courses: Course[] = [
  {
    name: 'Technical Analysis in Trading and Stock Market',
    org: 'Hexarum Co',
    date: 'Apr 2024 – Jun 2024',
    grade: 'Grade 9',
    details:
      'Candlestick charting, support/resistance identification, pattern recognition, and momentum indicators (Moving Averages, RSI, MACD) for equity market analysis.',
  },
  {
    name: 'Introduction to Psychology',
    org: 'Coursera / Yale University',
    date: 'Aug 2023',
    grade: 'Grade 10',
    details: 'Decision-making frameworks, risk perception, behavioural economics, and cognitive biases in competitive and financial contexts.',
  },
  {
    name: 'Certificate Course in Introduction to Data Science & AI',
    org: 'IIT Madras',
    date: 'Oct 2025 – Dec 2025',
    grade: 'Grade 11',
    details:
      'Cleaned and analysed real e-commerce transaction data; applied data extraction, preprocessing, and visualisation with Python-based data science workflows.',
  },
  {
    name: 'FinTech: Foundations, Payments, and Regulations',
    org: 'Coursera / University of Pennsylvania',
    date: 'Dec 2025',
    grade: 'Grade 11',
    details: 'Digital payment systems, peer-to-peer lending, robo-advisory algorithms, RegTech, and mobile banking infrastructure.',
  },
  {
    name: 'Cryptocurrency and Blockchain: An Introduction to Digital Currencies',
    org: 'Coursera / University of Pennsylvania',
    date: 'Dec 2025',
    grade: 'Grade 11',
    details: 'Distributed ledger architecture, consensus mechanisms, smart contract development, and cryptocurrency transaction validation protocols.',
  },
  {
    name: 'Lending, Crowdfunding, and Modern Investing',
    org: 'Coursera / University of Pennsylvania',
    date: 'Dec 2025',
    grade: 'Grade 11',
    details:
      'Robo-advisors, marketplace lending, crowdfunding infrastructure, Modern Portfolio Theory applied to algorithmic asset allocation, and credit-risk assessment via alternative data.',
  },
  {
    name: 'Application of AI, InsurTech, and Real Estate Technology',
    org: 'Coursera / University of Pennsylvania',
    date: 'Dec 2025',
    grade: 'Grade 11',
    details: 'AI in insurance claims automation, customer personalisation, and real-estate pricing optimisation via machine learning.',
  },
  {
    name: 'Fintech: Foundations & Applications of Financial Technology (Specialisation)',
    org: 'Coursera / University of Pennsylvania',
    date: 'Dec 2025',
    grade: 'Grade 11',
  },
  {
    name: 'Moneyball: AI, Sports, and Business',
    org: 'Inspirit AI (Stanford University graduates, USA)',
    date: 'May 2024 – Jun 2024',
    grade: 'Grade 10',
    details:
      'Applied Moneyball methodology to baseball player valuation using ML clustering to identify undervalued players. Ran statistical analysis on historical performance data (OBP, SLG, WAR derivatives) to isolate the highest-predictive-power metrics.',
  },
  {
    name: 'Commerce Club',
    org: 'Inventure Academy',
    date: 'Jun 2023 – Oct 2023',
    grade: 'Grade 9–10',
    details: 'Published an article, "The Economic Shift — The Invisible Hand", in the Commerce Club magazine, Feb 2024, Issue 1.',
  },
]

export type Award = {
  title: string
  detail?: string
  date: string
  tier?: 'gold' | 'silver' | 'bronze' | 'national' | 'distinction'
}

export const honors: Award[] = [
  { title: 'Crest Gold', detail: 'Persifolio: Personalised Portfolio & Virtual Stock Investment Simulator', date: 'Nov 2025', tier: 'gold' },
  {
    title: 'Harvard Hackathon — National Winner',
    detail: 'Designed and built a web app in 48 hours with a 5-member interdisciplinary team, reframing the résumé as a continuously evolving, AI-and-job-market-informed record of progress.',
    date: 'Jan 2026',
    tier: 'national',
  },
  { title: 'Cambridge International Certificate of Education — Distinction', date: 'Jun 2025', tier: 'distinction' },
  { title: 'Inventure Big Leap Award — English Literature', date: '2023–24' },
]

export const otherAwards: Award[] = [
  { title: 'Award of Excellence — Community Outreach', date: '2024–25' },
  { title: 'Award of Excellence — Inventure Sports Award', date: '2024–25' },
  { title: 'Award of Excellence — Whiz Kid', date: '2025–26' },
  { title: 'Award of Excellence — Inventure Scholar Award', date: '2025–26' },
  { title: 'Award of Excellence — Computer Science Topper', date: '2025–26' },
  { title: 'Award of Excellence — Multiachiever Award', date: '2025–26' },
  { title: 'Portfolio Strategy Challenge — Winner, HDFC Credelia', detail: 'Designed a stock portfolio for a client; 1st place in the investment pitch competition.', date: 'Jan–Feb 2024' },
]

export type Activity = {
  name: string
  level: string
  achievement: string
  date: string
  tier?: 'gold' | 'silver' | 'bronze' | 'national'
}

export const sports: Activity[] = [
  { name: 'TISB Swimming — 50m Butterfly (Under-15)', level: 'Inter-School', achievement: '3rd Prize', date: 'Jun 2023', tier: 'bronze' },
  { name: 'ISSO Badminton', level: 'National', achievement: 'Participation', date: '2024', tier: 'national' },
  { name: 'Head Start Interschool Basketball', level: 'Interschool', achievement: 'Silver Medal', date: '2024', tier: 'silver' },
  { name: 'Interschool Athletic Relay', level: 'Interschool', achievement: 'Bronze', date: '2024', tier: 'bronze' },
  { name: 'Inventure Shot Put Throw', level: 'Interschool', achievement: 'Gold', date: '2024', tier: 'gold' },
  { name: 'Inventure Shot Put Throw', level: 'Interschool', achievement: 'Silver', date: '2025', tier: 'silver' },
  { name: 'ISSO Shot Put Throw', level: 'National', achievement: 'Participation', date: '2025', tier: 'national' },
  { name: 'Badminton — Mixed Adult Doubles', level: 'Bangalore', achievement: 'Gold', date: '2023', tier: 'gold' },
]

export const clubsAndMun = [
  { name: 'INMUN — BBMP Committee', detail: 'Agenda: "Impact of unplanned urbanisation in the Whitefield area"', date: '2023' },
  { name: 'School Club: Tech for Change', detail: 'Created Pathforge; building an e-ballot platform for school elections', date: '2024 – 2026' },
]

export const skills = {
  aiml: ['OpenAI GPT', 'Google Gemini', 'Cursor', 'Python', 'Web Dev'],
  cloud: ['AWS', 'Azure'],
  databases: ['MongoDB', 'Firebase'],
  programming: ['Python', 'SQL', 'Kaggle'],
}

export const otherPursuits = [
  {
    title: 'Does the Profit Motive Bring Out the Best or the Worst in Us?',
    type: 'Medium article',
    date: 'Feb 2026',
    link: 'https://medium.com/@dakshsawhney2008/does-the-profit-motive-bring-out-the-best-or-the-worst-in-us-bb48159c1bbd',
  },
  { title: 'Hiked to Gomukh, Himalayas (14,000 ft)', type: 'Hiking', date: '2023' },
]

export type Volunteer = {
  name: string
  location: string
  period: string
  contact?: string
  detail: string
}

export const volunteering: Volunteer[] = [
  {
    name: 'Shades of Tomorrow — Miyawaki Forest Project',
    location: 'Bangalore',
    period: '9th grade onwards',
    detail:
      'Raised ₹5,00,000 in corporate funding by presenting impact case studies and demonstrating technical expertise in urban reforestation. Led 7 plantation drives across Bangalore, planting 100,000+ trees in partnership with Indus International School and corporate sponsors.',
  },
  {
    name: 'RGH Government School — Tutoring',
    location: 'Bangalore',
    period: 'Jun 2024 – Nov 2024',
    contact: 'Ms. Lakshmi / Ms. Nikitha',
    detail:
      'Tutored 5 students in English for 2 years, helping them achieve 25% higher exam marks through one-on-one tutoring and monthly practice sheets. Developed adapted learning materials and visual aids for students with academic gaps in Grades 6 and 8 using design-thinking processes.',
  },
  {
    name: 'Empower-Fin Project',
    location: 'Tribes for Good',
    period: '1 May 2024 – 1 Jun 2024',
    contact: 'Jinal Rajpopat',
    detail:
      'Ran financial-literacy workshops on inflation and shrinkflation for young students and women from economically weaker sections; conducted finance workshops for peers at school. Completed 25 hours of community work.',
  },
]

export type MilestoneCategory = 'build' | 'research' | 'recognition' | 'service'

export type Milestone = {
  date: string // sortable YYYY-MM
  year: string
  label: string
  category: MilestoneCategory
}

export const milestones: Milestone[] = [
  { date: '2023-06', year: '2023', label: 'TISB Swimming — Bronze, 50m Butterfly (Under-15)', category: 'recognition' },
  { date: '2023-06', year: '2023', label: 'Began Shades of Tomorrow — Miyawaki forest plantation drives', category: 'service' },
  { date: '2023-10', year: '2023', label: 'Published article in Commerce Club magazine, "The Invisible Hand"', category: 'build' },
  { date: '2024-01', year: '2024', label: 'Portfolio Strategy Challenge — Winner, HDFC Credelia', category: 'recognition' },
  { date: '2024-02', year: '2024', label: 'Founded Persifolio — AI investment portfolio & market simulator', category: 'build' },
  { date: '2024-05', year: '2024', label: 'Moneyball: AI, Sports & Business — Inspirit AI, Stanford', category: 'research' },
  { date: '2024-05', year: '2024', label: 'Empower-Fin financial-literacy workshops, Tribes for Good', category: 'service' },
  { date: '2024-06', year: '2024', label: 'Began 2-year tutoring program at RGH Government School', category: 'service' },
  { date: '2024-09', year: '2024', label: 'Inventure Shot Put — Gold; Basketball — Silver; Relay — Bronze', category: 'recognition' },
  { date: '2025-01', year: '2025', label: 'UPI research published in IJSSER', category: 'research' },
  { date: '2025-04', year: '2025', label: 'Summer internship — Nine Leaps / Noviro.ai AI Centre of Excellence', category: 'build' },
  { date: '2025-05', year: '2025', label: 'Software development internship — Address Makers Pvt Ltd', category: 'build' },
  { date: '2025-09', year: '2025', label: 'Created Cyberslayer — cybersecurity awareness platform', category: 'build' },
  { date: '2025-06', year: '2025', label: 'Cambridge International Certificate of Education — Distinction', category: 'recognition' },
  { date: '2025-09', year: '2025', label: 'Cambridge Centre of International Research begins (NLP / POS-tagging)', category: 'research' },
  { date: '2025-11', year: '2025', label: 'Persifolio awarded Crest Gold', category: 'recognition' },
  { date: '2026-01', year: '2026', label: 'Harvard Hackathon — National Winner', category: 'recognition' },
  { date: '2026-01', year: '2026', label: 'Persifolio patent filed, published in Indian Patent Journal', category: 'build' },
  { date: '2026-02', year: '2026', label: 'Persifolio adopted by schools in Odisha, backed by a Rajya Sabha MP', category: 'build' },
  { date: '2026-02', year: '2026', label: 'Medium article: "Does the Profit Motive Bring Out the Best or the Worst in Us?"', category: 'build' },
  { date: '2026-06', year: '2026', label: 'Selected for Research Science Institute – India (MIT-affiliated, <2% acceptance)', category: 'research' },
]
