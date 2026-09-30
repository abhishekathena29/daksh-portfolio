// Structured content sourced from "Resume Daksh Sawhney.docx.pdf" (src/info)
import type { PageTab as SectionKey } from '../types'

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
  qualities: ['Curious', 'Risk-taking', 'Enterprising', 'Collaborative', 'Persistent', 'Logical'],
  about: {
    headline: 'From chaos theory to a career in financial technology, I make predictions in highly variable conditions.',
    lede: 'I aspire to understand how things work at their core and make them better for the people around me.',
    paragraphs: [
      "Hey! I'm Daksh, a 17-year-old from Bangalore, obsessed with mathematics, AI, and finance. I like anything where you can turn the uncertainty of a real-world problem into a mathematical model you can use to make predictions. I know that sounds nerdy, but I promise it's fun.",
      'I built Persifolio, an app that helps people learn investing and budgeting through a virtual stock market — it is now used by over 4,000 people, which still feels wild to say, and it will be adopted in Odisha.',
      'Over the summer I did research at the Research Science Institute (RSI) at IISc, India, studying chaos theory and designing a mathematical tool to predict when a system will reach chaos. I also worked with a professor at the University of Cambridge on error analysis of code-mixed language by a POS tagger — published in the Oxford Journal of Student Scholarship.',
      'More recently, I was part of a 4-student team at the Harvard Hackathon in India that built Polaris, a prototype that rethinks the résumé as a living roadmap. We won nationally and represented India at the HackHarvard International Hackathon at Harvard University — probably the project that taught me the most about designing systems, not just writing code.',
      "I also built Scam Slayer, a free app that helps protect senior citizens from online scams — it has helped over 1,000 elderly people so far, and it's the project I'm proudest of. I'm an environment lover and entrepreneur who raised over ₹5,00,000 from corporates to plant 100,000+ trees at urban forest sites in and around Bangalore.",
      "When I'm not doing any of that, I can be found trading on the stock exchange, on the basketball court, on the athletics field, or in the gym running and weightlifting.",
    ],
  },
  currentlyBuilding: 'Persifolio v2 & RSI-India dynamical systems research',
}

export type Stat = {
  label: string
  unit: string
  section: SectionKey
} & ({ value: string } | { target: number; prefix?: string; suffix?: string; indian?: boolean })

export const tickerStats: Stat[] = [
  { label: 'PERSIFOLIO', target: 4000, suffix: '+', unit: 'users', section: 'projects' },
  { label: 'TREES PLANTED', target: 100000, suffix: '+', unit: 'across 6 sites', section: 'activities' },
  { label: 'FUNDING RAISED', target: 500000, prefix: '₹', indian: true, unit: 'corporate', section: 'activities' },
  { label: 'RESEARCH PAPERS', target: 3, unit: '1 published', section: 'research' },
  { label: 'PATENT', value: 'Filed', unit: 'Indian Patent Journal', section: 'projects' },
  { label: 'HACKATHON', value: 'National Winner', unit: 'Harvard, 2026', section: 'awards' },
]

export const heroStats: Stat[] = [
  { label: 'People reached', target: 4000, suffix: '+', unit: 'via Persifolio', section: 'projects' },
  { label: 'Trees planted', target: 100000, suffix: '+', unit: '7 plantation drives', section: 'activities' },
  { label: 'Funding raised', target: 500000, prefix: '₹', indian: true, unit: 'corporate sponsors', section: 'activities' },
]

export const quickFacts = {
  currently: 'A Level & AS Level Further Mathematics — completed in a single year',
  standardisedTesting: [{ exam: 'SAT', detail: 'Attempting August 2026' }],
  focusAreas: ['Computational Mathematics', 'Quantitative Finance', 'Applied ML'],
  languagesTools: ['Python', 'SQL', 'Flutter', 'Firebase', 'AWS', 'Azure'],
}

export type LinkRef = { label: string; href: string }

// Paths under /public (served from site root)
export type Photo = { src: string; caption: string }

export type Education = {
  images?: Photo[]
  institution: string
  period: string
  level: string
  subjects: string
  grades?: string
  current?: boolean
  links?: LinkRef[]
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
    subjects: 'Mathematics (A*), Physics (A), Chemistry (A), Computer Science (A)',
    grades: 'A',
    links: [{ label: 'AS Maths result', href: 'https://drive.google.com/file/d/1Im3ibCb2XCFehqCHD4XcfQNGhADSxNXy/view?usp=drive_link' }],
  },
  {
    institution: 'Inventure Academy, Bangalore, India',
    period: '2024 – 2025',
    level: 'IGCSE',
    subjects:
      'English Language (A), English Literature (A*), Mathematics (A*), Additional Mathematics (A*), Biology (A*), Physics (A*), Chemistry (A*), Economics (A*), Computer Science (A*), Spanish (A)',
    links: [{ label: 'IGCSE transcript', href: 'https://drive.google.com/file/d/1W1F8rVmEUo-SmG-obtuvAHWX0qTTnhys/view?usp=drive_link' }],
  },
]

export type Research = {
  images?: Photo[]
  title: string
  org: string
  period: string
  mentor?: string
  summary: string
  status: string
  abstract?: string
  findings?: string[]
  metrics?: { label: string; value: string }[]
  statusTone: 'live' | 'review' | 'published'
  links?: LinkRef[]
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
    abstract:
      'Introduces a structural classification coefficient ξ. Using a custom digital bifurcation-diagram simulator (1,000 settling iterations followed by 500 recorded steps per parameter value), the study tracks the chaotic behaviour of multiple nonlinear equations over continuous parameter ranges.',
    findings: [
      'Smooth unimodal maps — the logistic map rx(1−x) and r·sin(x) — classify at ξ = 0.5, with continuous pitchfork branching routes to chaos that scale with the universal Feigenbaum constant δ ≈ 4.669.',
      'Smooth multimodal maps (0 < ξ < 0.5) — cubic and quintic equations such as r(x⁵−x³+x) — show overlapping wave-like structures and sudden attractor expansions triggered by interior crises.',
      'Piecewise linear maps (1.0 < ξ < 1.5) — the tent map r(1−2|x−0.5|) and 1−r|x| — bypass period doubling entirely, jumping from a single stable fixed point into a solid chaotic wedge with unvisited lens-shaped regions.',
      'The coefficient serves as an accurate baseline for classifying nonlinear chaotic dynamics from the visual properties of bifurcation diagrams.',
    ],
    links: [
      { label: 'RSI-India certificate', href: '/docs/rsi-india-certificate.pdf' },
      { label: 'RSI-India certificate (Drive)', href: 'https://drive.google.com/file/d/1HWutFBOAX-pC94_uNatPPuL68f6S8O0W/view?usp=sharing' },
    ],
    images: [
      { src: '/media/research/rsi-award-ceremony.jpg', caption: 'Receiving the RSI-India 2026 award' },
      { src: '/media/research/rsi-india-certificate.jpg', caption: 'Research Science Initiative India 2026 certificate' },
    ],
  },
  {
    title: 'POS Tagging of Hindi–English Code-Mixed Text Using an Averaged Perceptron',
    org: 'Cambridge Centre of International Research, Cambridge, UK',
    period: 'Nov 2025 – Mar 2026',
    mentor: 'Dr. Wei Wei Sun, Lecturer, Dept. of Computer Science, University of Cambridge',
    summary:
      'Investigated sentence patterns causing tagging errors in LLMs due to informal Hindi-English (Hinglish) text. Error analysis revealed the most frequent misclassifications occurred between nouns, verbs, proper nouns, and adjectives.',
    status: 'Published — Oxford Journal of Student Scholarship',
    statusTone: 'published',
    findings: [
      'Analysed a POS tagger on Hindi-English code-mixed (Hinglish) data against monolingual English and Hindi data.',
      'Accuracy of 93.60% on English, 95.95% on Hindi and 94.89% on Hinglish — strong performance in both monolingual and code-mixed settings.',
      'Most misclassifications occurred between nouns, verbs, proper nouns and adjectives because of overlapping lexical forms.',
      'Medium-length sentences scored marginally higher than long ones; most sentences had zero or one error, with a cascading effect in a minority of cases.',
    ],
    metrics: [
      { label: 'English accuracy', value: '93.60%' },
      { label: 'Hindi accuracy', value: '95.95%' },
      { label: 'Hinglish accuracy', value: '94.89%' },
    ],
    links: [
      { label: 'Read paper draft', href: 'https://drive.google.com/file/d/1y3q5K-0w3I0z-vRRER7IhwKthSH9aLeV/view?usp=sharing' },
      { label: 'CCIR certificate', href: '/docs/ccir-cambridge-future-scholar.pdf' },
      { label: 'CCIR certificate (Drive)', href: 'https://drive.google.com/file/d/1veAT00OPD--xoj47pVC24f9_rSDbqmai/view?usp=sharing' },
    ],
    images: [{ src: '/media/research/ccir-cambridge-future-scholar.jpg', caption: 'Cambridge Future Scholar — Machine Learning & NLP, under Dr Weiwei Sun' }],
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
    findings: [
      "Explores UPI's macroeconomic contributions: financial inclusion, transparency in government welfare programmes, and stronger small-business operations.",
      'Data analysis of the demographic profile of UPI users and their transaction preferences shows a strong preference for UPI over cash across transaction types.',
      "Emphasises UPI's pivotal role in India's journey towards a cashless society and its broad economic benefits.",
    ],
    links: [{ label: 'Read publication', href: 'https://doi.org/10.46609/IJSSER.2025.v10i07.021' }],
  },
]

export type ProjectT = {
  images?: Photo[]
  name: string
  role: string
  period: string
  tagline: string
  description: string[]
  stack?: string[]
  highlights: { label: string; value: string }[]
  features?: string[]
  links?: LinkRef[]
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
    features: [
      'Android app built with Flutter and Firebase, published on Google Play, with real-time market-data APIs, Crashlytics and Google Analytics.',
      'Risk questionnaire based on the standardised LPL Financial model — each option carries a score by question type, stored in Firebase, to evaluate risk appetite.',
      'The final score generates a personalised portfolio unique to each user, secured by Google or email/password login.',
      'Portfolios render as a pie chart of diversification and stock break-up; enter an amount and the app shows exactly how much to invest where.',
    ],
    highlights: [
      { label: 'Users onboarded', value: '4,000+' },
      { label: 'Patent status', value: 'Filed · Published' },
      { label: 'Platform', value: 'Google Play' },
    ],
    links: [
      { label: 'Patent journal', href: '/docs/persifolio-patent-journal.pdf' },
      { label: 'Patent certificate', href: 'https://drive.google.com/file/d/1kg8lx8TX5Fw6qo7_mMGpcxSRizaRH2xL/view?usp=sharing' },
      { label: 'Crest Gold award', href: '/docs/crest-gold-certificate.pdf' },
      { label: 'Persifolio letter', href: 'https://drive.google.com/file/d/1vJnF1p_6BioUTA5Mk2dkfTVe4FrJyZCf/view?usp=sharing' },
      { label: 'LOR by MP', href: 'https://drive.google.com/file/d/1DpFGhfOzSgRK293YyhIaiFJR5BOXj3_n/view?usp=sharing' },
      { label: 'Product images', href: 'https://drive.google.com/file/d/161ClOIRgpiNfUGrpCLBF9x7Kry0g41Iw/view?usp=drive_link' },
    ],
    images: [
      { src: '/media/persifolio/workshop-3.jpg', caption: 'Persifolio financial-literacy session at a college auditorium' },
      { src: '/media/persifolio/workshop-4.jpg', caption: '"What is investment?" — workshop for college students' },
      { src: '/media/persifolio/workshop-5.jpg', caption: 'Walking students through portfolio construction' },
      { src: '/media/persifolio/workshop-6.jpg', caption: 'Budgeting & risk-management workshop' },
      { src: '/media/persifolio/workshop-7.jpg', caption: 'Onboarding a full classroom onto Persifolio' },
      { src: '/media/persifolio/workshop-1.jpg', caption: 'Students with Persifolio QR pamphlets' },
      { src: '/media/persifolio/workshop-2.jpg', caption: 'Downloading the app from the QR pamphlet' },
      { src: '/media/persifolio/crest-gold-award.jpg', caption: 'Crest Gold Award — British Science Association' },
      { src: '/media/persifolio/persifolio-patent-journal.jpg', caption: 'Official Journal of the Patent Office, issue 1/2026' },
    ],
  },
  {
    name: 'Scam Slayer',
    role: 'Creator',
    period: 'Sept 2025 – present',
    tagline: 'Cybersecurity awareness web app for senior citizens of India — "Don\'t be a victim, be a slayer."',
    description: [
      'A free, quiz-based cybersecurity awareness platform protecting senior citizens from scams and fraud. Simulates real-world threats — fake arrest scams, phishing emails, impersonation attacks — through interactive scenarios.',
      'Addresses the human vulnerability gap in cybersecurity: seniors, small business owners, and non-tech-savvy populations are frequently targeted through deception and fear. Turns passive advice into active practice, reducing financial and psychological damage from fraud.',
      'Conducted in-person workshops for 1,000+ senior citizens, teaching them to recognise, respond to, and report digital exploitation. Featured in Outlook.',
    ],
    highlights: [
      { label: 'Seniors trained', value: '1,000+' },
      { label: 'Format', value: 'Quiz-based web app' },
      { label: 'Audience', value: 'Senior citizens, India' },
      { label: 'Press', value: 'Outlook' },
    ],
    images: [
      { src: '/media/scam-slayer/workshop-1.jpg', caption: 'Scam-awareness workshop at a senior-citizen home' },
      { src: '/media/scam-slayer/outlook-feature.jpg', caption: 'Scam Slayer featured in Outlook' },
      { src: '/media/scam-slayer/workshop-2.jpg', caption: 'Explaining fake-arrest and phishing scams' },
      { src: '/media/scam-slayer/workshop-3.jpg', caption: 'Interactive threat scenarios with residents' },
      { src: '/media/scam-slayer/workshop-4.jpg', caption: 'Workshop session in progress' },
      { src: '/media/scam-slayer/workshop-5.jpg', caption: 'Answering questions on OTP and impersonation fraud' },
      { src: '/media/scam-slayer/workshop-6.jpg', caption: 'Seniors learning to report cyber fraud' },
      { src: '/media/scam-slayer/workshop-7.jpg', caption: 'Hands-on walkthrough of the Scam Slayer app' },
      { src: '/media/scam-slayer/workshop-8.jpg', caption: 'One-on-one support after the session' },
    ],
  },
  {
    name: 'Polaris',
    role: 'Team member (4 students) — Harvard Hackathon',
    period: 'Jan 2026',
    tagline: 'Rethinks the résumé as a living roadmap that updates as you build skills and experience.',
    description: [
      'Instead of a static document you make once, Polaris is a living roadmap that uses AI and real job-market data to show you exactly what to do next.',
      'Won the Harvard Hackathon nationally; the team represented India at the HackHarvard International Hackathon at Harvard University, an undergraduate-only event.',
      'The project that taught me the most about designing systems, not just writing code.',
    ],
    highlights: [
      { label: 'Result', value: 'National Winner' },
      { label: 'Built in', value: '48 hours' },
      { label: 'Next stage', value: 'HackHarvard, USA' },
    ],
    links: [{ label: 'Hackathon certificate', href: 'https://drive.google.com/file/d/1NV-4t_7RwapApyBkeH2ZJe8lTN6PJvie/view?usp=sharing' }],
    images: [
      { src: '/media/awards/harvard-hackathon-cohort.jpg', caption: 'HackHarvard Challenge 2026 cohort — "Where Ideas Became Reality"' },
      { src: '/media/awards/harvard-hackathon-certificate.jpg', caption: 'Certificate of Achievement — First Position, HackHarvard Challenge 2026' },
    ],
  },
  {
    name: 'Moneyball: AI, Sports & Business',
    role: 'Passion project — Inspirit AI (Stanford graduates)',
    period: 'May 2024 – Jun 2024',
    tagline: 'Machine learning for undervalued-player discovery, in the spirit of Moneyball.',
    description: [
      'Applied Moneyball methodology to baseball player valuation, using ML clustering to identify undervalued players.',
      'Ran statistical analysis on historical performance data (OBP, SLG, WAR derivatives) to isolate the metrics with the highest predictive power.',
    ],
    stack: ['Python', 'ML clustering', 'Statistics'],
    highlights: [
      { label: 'Programme', value: 'Inspirit AI' },
      { label: 'Domain', value: 'Sports analytics' },
    ],
    links: [{ label: 'Certificate', href: 'https://drive.google.com/file/d/1w11YS5zgq-R6gJc9Uec7bhIX0To3n0wG/view?usp=sharing' }],
    images: [
      { src: '/media/moneyball/stadium-analytics.jpg', caption: 'AI meets professional sport' },
      { src: '/media/moneyball/sports-data.jpg', caption: 'Turning performance data into player valuations' },
    ],
  },
]

export type Internship = {
  images?: Photo[]
  role: string
  company: string
  period: string
  location: string
  contact?: string
  points: string[]
  links?: LinkRef[]
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
    links: [
      { label: 'Completion certificate', href: 'https://drive.google.com/file/d/1rpM_m6VB4_ojvaVJMNqehVIJIuCMCLzv/view?usp=sharing' },
      { label: 'Letter of recommendation', href: 'https://drive.google.com/file/d/1U_LCKccafM4xfieA72LKxiQBifj2_i4h/view?usp=sharing' },
      { label: 'Noviro.ai', href: 'http://noviro.ai' },
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
    links: [{ label: 'Letter of recommendation', href: 'https://drive.google.com/file/d/1fJtCHTTrZdre5L1bPGPzBD3SyzPtPNqv/view?usp=sharing' }],
  },
]

export type Course = {
  images?: Photo[]
  name: string
  org: string
  date: string
  grade?: string
  details?: string
  links?: LinkRef[]
}

export const courses: Course[] = [
  {
    name: 'Technical Analysis in Trading and Stock Market',
    org: 'Hexarum Co',
    date: 'Apr 2024 – Jun 2024',
    grade: 'Grade 9',
    details:
      'Candlestick charting, support/resistance identification, pattern recognition, and momentum indicators (Moving Averages, RSI, MACD) for equity market analysis.',
    links: [{ label: 'Certificate', href: 'https://drive.google.com/file/d/10L67CeQa1BaTyxkSeR-qeiUA3Kf8KyP-/view?usp=sharing' }],
  },
  {
    name: 'Introduction to Psychology',
    org: 'Coursera / Yale University',
    date: 'Aug 2023',
    grade: 'Grade 10',
    details: 'Decision-making frameworks, risk perception, behavioural economics, and cognitive biases in competitive and financial contexts.',
    links: [{ label: 'Certificate', href: 'https://drive.google.com/file/d/1-yq5X50lM-3LvxKBzOp5rvMAQZDz7hZv/view?usp=sharing' }],
  },
  {
    name: 'Certificate Course in Introduction to Data Science & AI',
    org: 'IIT Madras',
    date: 'Oct 2025 – Dec 2025',
    grade: 'Grade 11',
    details:
      'Cleaned and analysed real e-commerce transaction data; applied data extraction, preprocessing, and visualisation with Python-based data science workflows.',
    links: [{ label: 'Certificate', href: 'https://drive.google.com/file/d/1LrQ-a1x4Ysw7y3rHCfPx5CwOlpc9QX-7/view?usp=sharing' }],
    images: [{ src: '/media/education/iit-madras-certificate.jpg', caption: 'IIT Madras CODE — 8-week certification, Introduction to Data Science and AI' }],
  },
  {
    name: 'FinTech: Foundations, Payments, and Regulations',
    org: 'Coursera / University of Pennsylvania',
    date: 'Dec 2025',
    grade: 'Grade 11',
    details: 'Digital payment systems, peer-to-peer lending, robo-advisory algorithms, RegTech, and mobile banking infrastructure.',
    links: [{ label: 'Certificate', href: 'https://drive.google.com/file/d/10OlD0HDJmUO_lXlVGrQOvsmGZBxh6hkQ/view?usp=sharing' }],
  },
  {
    name: 'Cryptocurrency and Blockchain: An Introduction to Digital Currencies',
    org: 'Coursera / University of Pennsylvania',
    date: 'Dec 2025',
    grade: 'Grade 11',
    details: 'Distributed ledger architecture, consensus mechanisms, smart contract development, and cryptocurrency transaction validation protocols.',
    links: [{ label: 'Certificate', href: 'https://drive.google.com/file/d/1p_P_uMvSVpvQc60bkfEQnAVksXc_xrPv/view?usp=sharing' }],
  },
  {
    name: 'Lending, Crowdfunding, and Modern Investing',
    org: 'Coursera / University of Pennsylvania',
    date: 'Dec 2025',
    grade: 'Grade 11',
    details:
      'Robo-advisors, marketplace lending, crowdfunding infrastructure, Modern Portfolio Theory applied to algorithmic asset allocation, and credit-risk assessment via alternative data.',
    links: [{ label: 'Certificate', href: 'https://drive.google.com/file/d/1UFH1qGyHExUGTnuC5X73uiBdGrlOdYbd/view?usp=sharing' }],
  },
  {
    name: 'Application of AI, InsurTech, and Real Estate Technology',
    org: 'Coursera / University of Pennsylvania',
    date: 'Dec 2025',
    grade: 'Grade 11',
    details: 'AI in insurance claims automation, customer personalisation, and real-estate pricing optimisation via machine learning.',
    links: [{ label: 'Certificate', href: 'https://drive.google.com/file/d/1XTR74TvOKzelgHtiNdwTAZth5RAJkp47/view?usp=drive_link' }],
  },
  {
    name: 'Fintech: Foundations & Applications of Financial Technology (Specialisation)',
    org: 'Coursera / University of Pennsylvania',
    date: 'Dec 2025',
    grade: 'Grade 11',
    links: [
      { label: 'Certificate', href: '/docs/upenn-fintech-specialisation.pdf' },
      { label: 'Certificate (Drive)', href: 'https://drive.google.com/file/d/1yj9VjWFb_CcWDQ25fs3gTs-6x2DrS1K0/view?usp=sharing' },
    ],
    images: [{ src: '/media/education/upenn-fintech-specialisation.jpg', caption: 'Wharton Online — FinTech specialisation (4 courses), Dec 2025' }],
  },
  {
    name: 'Moneyball: AI, Sports, and Business',
    org: 'Inspirit AI (Stanford University graduates, USA)',
    date: 'May 2024 – Jun 2024',
    grade: 'Grade 10',
    details:
      'Applied Moneyball methodology to baseball player valuation using ML clustering to identify undervalued players. Ran statistical analysis on historical performance data (OBP, SLG, WAR derivatives) to isolate the highest-predictive-power metrics.',
    links: [{ label: 'Certificate', href: 'https://drive.google.com/file/d/1w11YS5zgq-R6gJc9Uec7bhIX0To3n0wG/view?usp=sharing' }],
    images: [{ src: '/media/moneyball/stadium-analytics.jpg', caption: 'Moneyball: AI, Sports & Business' }],
  },
  {
    name: 'Commerce Club',
    org: 'Inventure Academy',
    date: 'Jun 2023 – Oct 2023',
    grade: 'Grade 9–10',
    details: 'Published an article, "The Economic Shift — The Invisible Hand", in the Commerce Club magazine, Feb 2024, Issue 1.',
    links: [{ label: 'Magazine feature', href: 'https://drive.google.com/file/d/1yS2TjRKSEAyd0WogRbQkc8obtQmfNy-o/view?usp=sharing' }],
  },
]

export type Award = {
  images?: Photo[]
  title: string
  detail?: string
  date: string
  tier?: 'gold' | 'silver' | 'bronze' | 'national' | 'distinction'
  links?: LinkRef[]
}

export const honors: Award[] = [
  {
    title: 'Crest Gold',
    detail: 'Persifolio: Personalised Portfolio & Virtual Stock Investment Simulator',
    date: 'Nov 2025',
    tier: 'gold',
    links: [
      { label: 'Certificate', href: '/docs/crest-gold-certificate.pdf' },
      { label: 'Certificate (Drive)', href: 'https://drive.google.com/file/d/1yZziDh8KNX-sVQ6Y_UJy-U03HwLEIdsq/view?usp=sharing' },
    ],
    images: [
      { src: '/media/awards/crest-gold-certificate.jpg', caption: 'Crest Gold — British Science Association, 28/10/2025' },
      { src: '/media/persifolio/crest-gold-award.jpg', caption: 'Crest Gold Award certificate' },
    ],
  },
  {
    title: 'Harvard Hackathon — National Winner',
    detail: 'First Position in the HackHarvard Challenge 2026 hosted at Ashoka University. Built Polaris in 48 hours with an interdisciplinary team, reframing the résumé as a continuously evolving, AI-and-job-market-informed record of progress. Represented India at the HackHarvard International Hackathon at Harvard University.',
    date: 'Jan 2026',
    tier: 'national',
    images: [
      { src: '/media/awards/harvard-hackathon-certificate.jpg', caption: 'Certificate of Achievement — First Position' },
      { src: '/media/awards/harvard-hackathon-cohort.jpg', caption: 'HackHarvard Challenge 2026 cohort at Ashoka University' },
    ],
    links: [{ label: 'Certificate', href: 'https://drive.google.com/file/d/1NV-4t_7RwapApyBkeH2ZJe8lTN6PJvie/view?usp=sharing' }],
  },
  {
    title: 'Cambridge International Certificate of Education — Distinction',
    date: 'Jun 2025',
    tier: 'distinction',
    links: [{ label: 'Certificate', href: 'https://drive.google.com/file/d/1zJPyjDMrFrb5SgOPcdOgqhMoTK3W0I0Y/view?usp=drive_link' }],
  },
  {
    title: 'Inventure Big Leap Award — English Literature',
    date: '2023–24',
    links: [{ label: 'Certificate', href: 'https://drive.google.com/file/d/119UtFg9bJ9dPA69xYE3Vbkz6MnJOMiXB/view?usp=sharing' }],
  },
]

export const otherAwards: Award[] = [
  {
    title: 'Award of Excellence — Community Outreach',
    date: '2024–25',
    links: [{ label: 'Certificate', href: '/docs/community-outreach-award.pdf' }],
    images: [{ src: '/media/awards/community-outreach-award.jpg', caption: 'Inventure Academy Community Outreach Award, Grade 10' }],
  },
  {
    title: 'Award of Excellence — Inventure Sports Award',
    date: '2024–25',
    links: [{ label: 'Certificate', href: 'https://drive.google.com/file/d/1ZV3EQYo01c1FThprnR348U2JZCxcKt6X/view?usp=sharing' }],
  },
  {
    title: 'Award of Excellence — Whiz Kid',
    date: '2025–26',
    links: [{ label: 'Certificate', href: 'https://drive.google.com/file/d/1DUYTEkZhl9r8CX4keWYoeFqw6tYPlPqW/view?usp=sharing' }],
  },
  {
    title: 'Award of Excellence — Inventure Scholar Award',
    date: '2025–26',
    links: [{ label: 'Certificate', href: 'https://drive.google.com/file/d/1vlNIVk-0ANNTyWvwhKZ_ZGkUAlnuLiin/view?usp=sharing' }],
  },
  {
    title: 'Award of Excellence — Computer Science Topper',
    date: '2025–26',
    links: [
      { label: 'Certificate', href: '/docs/cs-subject-topper.pdf' },
      { label: 'Certificate (Drive)', href: 'https://drive.google.com/file/d/14a-PcLzrKh3qR1QyfRCvUmARi6wYFsVP/view?usp=sharing' },
    ],
    images: [{ src: '/media/awards/cs-subject-topper.jpg', caption: 'Subject Topper — Computer Science, Grade 11, 2025–26' }],
  },
  {
    title: 'Award of Excellence — Multiachiever Award',
    date: '2025–26',
    links: [{ label: 'Certificate', href: 'https://drive.google.com/file/d/15yE7CeGr1JnULMhlt0wO6X0NeNg0N2IS/view?usp=sharing' }],
  },
  {
    title: 'Portfolio Strategy Challenge — Winner, HDFC Credelia',
    detail: 'Designed a stock portfolio for a client; 1st place in the investment pitch competition.',
    date: 'Jan–Feb 2024',
    links: [
      { label: 'Certificate', href: '/docs/hdfc-portfolio-strategy-challenge.pdf' },
      { label: 'Certificate (Drive)', href: 'https://drive.google.com/file/d/1RsQmKGFUj4h30cvhG_U2lCPi6YVSQUUL/view?usp=sharing' },
    ],
    images: [{ src: '/media/awards/hdfc-portfolio-strategy-challenge.jpg', caption: 'First Prize, Portfolio Strategy Challenge — 10 Feb 2024' }],
  },
]

export type Activity = {
  images?: Photo[]
  name: string
  level: string
  achievement: string
  date: string
  tier?: 'gold' | 'silver' | 'bronze' | 'national'
  links?: LinkRef[]
}

export const sports: Activity[] = [
  {
    name: 'TISB Swimming — 50m Butterfly (Under-15)',
    level: 'Inter-School',
    achievement: '3rd Prize',
    date: 'Jun 2023',
    tier: 'bronze',
    links: [
      { label: 'Certificate', href: '/docs/tisb-aquatic-meet.pdf' },
      { label: 'Certificate (Drive)', href: 'https://drive.google.com/file/d/15brCaAoZmHFYd7MqcjCkY_Wk8-j8QLUK/view?usp=sharing' },
    ],
    images: [{ src: '/media/athletics/tisb-aquatic-meet.jpg', caption: 'TISB Inter-School Aquatic Championship — Certificate of Merit' }],
  },
  {
    name: 'ISSO Badminton',
    level: 'National',
    achievement: 'Participation',
    date: '2024',
    tier: 'national',
    links: [{ label: 'Photos', href: 'https://drive.google.com/drive/folders/1NR0REkqEwHmpy5Yr2QX1QBCR6RtX6DCp?usp=drive_link' }],
  },
  {
    name: 'Head Start Interschool Basketball',
    level: 'Interschool',
    achievement: 'Silver Medal',
    date: '2024',
    tier: 'silver',
    links: [{ label: 'Certificate', href: 'https://drive.google.com/file/d/1ZV3EQYo01c1FThprnR348U2JZCxcKt6X/view?usp=sharing' }],
  },
  {
    name: 'Interschool Athletic Relay',
    level: 'Interschool',
    achievement: 'Bronze',
    date: '2024',
    tier: 'bronze',
    links: [{ label: 'Certificate', href: 'https://drive.google.com/file/d/1ZV3EQYo01c1FThprnR348U2JZCxcKt6X/view?usp=sharing' }],
  },
  {
    name: 'Inventure Shot Put Throw',
    level: 'Interschool',
    achievement: 'Gold',
    date: '2024',
    tier: 'gold',
    links: [{ label: 'Certificate', href: 'https://drive.google.com/file/d/1ZV3EQYo01c1FThprnR348U2JZCxcKt6X/view?usp=sharing' }],
  },
  {
    name: 'Inventure Shot Put Throw',
    level: 'Interschool',
    achievement: 'Silver',
    date: '2025',
    tier: 'silver',
    links: [
      { label: 'Sports Fest certificate', href: '/docs/shot-put-sports-fest-2025.pdf' },
      { label: 'Athletics Meet certificate', href: '/docs/shot-put-athletics-meet-2025.pdf' },
      { label: 'Certificate (Drive)', href: 'https://drive.google.com/file/d/1O8wDrLp1YY1-mObKdJfGO8CWzCHTMH85/view?usp=sharing' },
    ],
    images: [
      { src: '/media/athletics/shot-put-sports-fest-2025.jpg', caption: 'Second place, shot put (Grade 12 & below) — Inventure Sports Fest 2025–26' },
      { src: '/media/athletics/shot-put-athletics-meet-2025.jpg', caption: 'Second place, shot put — Inventure Annual Athletics Meet' },
    ],
  },
  {
    name: 'ISSO Shot Put Throw',
    level: 'National',
    achievement: 'Participation',
    date: '2025',
    tier: 'national',
    links: [{ label: 'Certificate', href: 'https://drive.google.com/file/d/1ZH194Y4ZaPIE4frQVb1D-c07XKK8hVYl/view?usp=sharing' }],
  },
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
  images?: Photo[]
  name: string
  location: string
  period: string
  contact?: string
  detail: string
  links?: LinkRef[]
}

export const volunteering: Volunteer[] = [
  {
    name: 'Shades of Tomorrow — Miyawaki Forest Project',
    location: 'Bangalore',
    period: '9th grade onwards',
    detail:
      'What began as a middle-school project with a team of 25 students grew into a larger mission to create greener urban spaces across Bengaluru. Raised ₹5,00,000 in corporate funding by presenting impact case studies and demonstrating technical expertise in urban reforestation — used for soil preparation, native plants, and a team of gardeners to establish and maintain the forests. Led 7 plantation drives across Bangalore, planting 100,000+ trees in partnership with Indus International School and corporate sponsors.',
    images: [
      { src: '/media/afforestation/forest-electronic-city.jpg', caption: 'Mature Miyawaki forest on Electronic City road' },
      { src: '/media/afforestation/forest-chandapura.jpg', caption: 'Dense native forest at Chandapura' },
      { src: '/media/afforestation/drive-1.jpg', caption: 'Plantation drive — planting native saplings' },
      { src: '/media/afforestation/drive-2.jpg', caption: 'Plantation drive — preparing the pits' },
      { src: '/media/afforestation/drive-3.jpg', caption: 'Freshly planted mini-forest site' },
      { src: '/media/afforestation/drive-sarjapur.jpg', caption: 'Watering saplings at the Sarjapur drive' },
      { src: '/media/afforestation/drive-5.jpg', caption: 'Volunteers at a plantation drive' },
      { src: '/media/afforestation/drive-6.jpg', caption: 'Team planting at a new site' },
    ],
    links: [
      { label: 'Plantation drive photos', href: 'https://drive.google.com/drive/folders/17syK8LG4uxN-r_PJsEGGshw_SeEPkwOr?usp=drive_link' },
      { label: 'Coverage write-up', href: 'https://drive.google.com/file/d/1apGyS7hLz_t5ZO0RSSssirwHZ5tTmKkZ/view?usp=sharing' },
    ],
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
    name: 'Empower-Fin — Young Indian Changemaker Project',
    location: 'Tribes for Good',
    period: '1 May 2024 – 1 Jun 2024',
    contact: 'Jinal Rajpopat',
    detail:
      'Promoted financial literacy among marginalised communities — artisans, micro-entrepreneurs, youth, and families from low-income backgrounds. Over 25 hours of community service, ran awareness workshops on personal and digital finance: inflation, shrinkflation, budgeting, saving, and financial decision-making, and introduced emerging concepts such as the Social Stock Exchange. Also ran finance workshops for students at school and in the neighbourhood.',
    images: [{ src: '/media/service/empower-fin-certificate.jpg', caption: 'TribesforGOOD Certificate of Completion — Global Challenges & Social Justice' }],
    links: [
      { label: 'Certificate', href: '/docs/empower-fin-certificate.pdf' },
      { label: 'Workshop video', href: 'https://youtu.be/zuuYRyHGc7M?si=bG5lUeEZEXshnJLz' },
      { label: 'Project write-up', href: 'https://drive.google.com/file/d/1Y4WQIsRrOyl2DTArg6gPSVlXzSQ_0Yn6/view?usp=sharing' },
    ],
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
  { date: '2025-09', year: '2025', label: 'Created Scam Slayer — cybersecurity awareness platform', category: 'build' },
  { date: '2025-10', year: '2025', label: 'Scam Slayer workshops reach 1,000+ senior citizens; featured in Outlook', category: 'service' },
  { date: '2025-06', year: '2025', label: 'Cambridge International Certificate of Education — Distinction', category: 'recognition' },
  { date: '2025-09', year: '2025', label: 'Cambridge Centre of International Research begins (NLP / POS-tagging)', category: 'research' },
  { date: '2025-11', year: '2025', label: 'Persifolio awarded Crest Gold', category: 'recognition' },
  { date: '2026-01', year: '2026', label: 'Harvard Hackathon — National Winner', category: 'recognition' },
  { date: '2026-01', year: '2026', label: 'Persifolio patent filed, published in Indian Patent Journal', category: 'build' },
  { date: '2026-02', year: '2026', label: 'Persifolio adopted by schools in Odisha, backed by a Rajya Sabha MP', category: 'build' },
  { date: '2026-02', year: '2026', label: 'Medium article: "Does the Profit Motive Bring Out the Best or the Worst in Us?"', category: 'build' },
  { date: '2026-03', year: '2026', label: 'Cambridge Future Scholar — CCIR research course in ML & NLP', category: 'research' },
  { date: '2026-06', year: '2026', label: 'Selected for Research Science Institute – India (MIT-affiliated, <2% acceptance)', category: 'research' },
  { date: '2026-07', year: '2026', label: 'Hinglish POS-tagging paper published in the Oxford Journal of Student Scholarship', category: 'research' },
]
