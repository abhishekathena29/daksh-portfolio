// Structured content sourced from "Resume Daksh Sawhney.docx.pdf" (src/info)
import type { PageTab as SectionKey } from '../types'

export const profile = {
  name: 'Daksh Sawhney',
  initials: 'DS',
  // Portrait for the landing page; falls back to the initials monogram if missing.
  photo: '/media/profile/daksh-rsi.jpg',
  tagline: 'Computational Mathematics & Quantitative Finance',
  school: 'Inventure Academy',
  location: 'Bangalore, India',
  grade: 'Grade 12 · Cambridge A Level',
  email: 'dakshsawhney2008@gmail.com',
  phone: '+91 96637 45114',
  linkedin: 'https://www.linkedin.com/in/daksh-sawhney-bb9872302',
  objective:
    'High school student specialising in computational mathematics and quantitative finance. I translate abstract problems into structured models and test them in real environments.',
  bio: [
    'Built Persifolio, a free AI-based investment app and market simulator that has reached 10,000+ users learning budgeting, portfolio construction, and risk management.',
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
    // Daksh's own write-up, verbatim
    paragraphs: [
      "I'm Daksh, a 17-year-old from Bangalore, India, passionate about computational algorithms. My favourite question in the world is “How do I model something amid the chaos of a dynamical system?” At RSI at IISc, I'm chasing it properly by designing a mathematical tool to predict the moment a system tips into chaos. What hooked me is that chaos isn't just noise: it has structure, and you can spot warning signs before systems fall apart.",
      "That same motivation drove me to create Persifolio to diagnose risk-taking ability in today's dynamic stock market and geopolitical landscape. Every position I take, whether it's built on candlestick patterns, support and resistance, or the zig-zag method, is a small bet on a model of risk, reward and probability, and the market tests. Algorithms, for me, are a way to navigate uncertainty, whether I'm hunting for order in a chaotic system in a lab or reading structure in the swings of a chart on my screen.",
    ],
  },
  currentlyBuilding: 'Persifolio v2 & RSI-India dynamical systems research',
}

export type Stat = {
  label: string
  unit: string
  section: SectionKey
} & ({ value: string } | { target: number; prefix?: string; suffix?: string; indian?: boolean })

// Dashboard metrics on the landing page. Set `value` to null while a figure is
// still awaited — the tile shows "Update pending" instead of a number.
export type Metric = {
  symbol: string
  label: string
  value: number | null
  prefix?: string
  suffix?: string
  indian?: boolean
  note: string
  section: SectionKey
}

export const dashboardMetrics: Metric[] = [
  { symbol: 'REACH', label: 'People reached', value: 11300, suffix: '+', note: 'Persifolio 10,000+ · Scam Slayer 1,000+ · Polaris 300+', section: 'projects' },
  { symbol: 'TREES', label: 'Trees planted', value: 100000, suffix: '+', note: '6 Bangalore sites · ₹5 lakh (~$6K) raised from corporate sponsors', section: 'projects' },
  { symbol: 'FUND', label: 'Funding raised', value: 50000, prefix: '$', note: 'Persifolio pre-seed · Peacock Ventures', section: 'projects' },
  { symbol: 'SELF', label: 'Self-invested', value: 25000, prefix: '$', note: 'Earned from stock trading', section: 'passions' },
  { symbol: 'PAPERS', label: 'Research papers', value: 3, note: '2 published · 1 under review', section: 'research' },
  { symbol: 'IP', label: 'Patents published', value: 2, note: 'Persifolio · Scam Slayer', section: 'projects' },
]

// Scrolling tape under the navbar.
export const tickerTape: { symbol: string; value: string; note: string }[] = [
  { symbol: 'PRSF', value: '10,000+', note: 'Persifolio users' },
  { symbol: 'TREES', value: '100,000+', note: 'planted, 6 sites' },
  { symbol: 'RSI', value: '~2%', note: 'acceptance, 100% scholarship' },
  { symbol: 'HACK', value: '#1', note: 'HackHarvard India' },
  { symbol: 'HHUS', value: '1 of 2', note: 'high-school teams, HackHarvard USA' },
  { symbol: 'CREST', value: 'GOLD', note: 'British Science Assoc.' },
  { symbol: 'SCAM', value: '1,000+', note: 'seniors trained, 20+ homes' },
  { symbol: 'PLRS', value: '300+', note: 'students enrolled on Polaris' },
  { symbol: 'IGCSE', value: '8 A*', note: 'Cambridge' },
  { symbol: 'IP', value: '2', note: 'patents published' },
  { symbol: 'δ', value: '4.669', note: 'Feigenbaum constant' },
]

export const quickFacts = {
  currently: 'A Level & AS Level Further Mathematics — completed in a single year',
  standardisedTesting: [{ exam: 'SAT', detail: 'Attempting August 2026' }],
  focusAreas: ['Computational Mathematics', 'Quantitative Finance', 'Applied ML'],
  languagesTools: ['Python', 'SQL', 'Flutter', 'Firebase', 'AWS', 'Azure'],
}

// `thumb`: preview image for a document hosted elsewhere (e.g. Google Drive)
export type LinkRef = { label: string; href: string; thumb?: string }

// Paths under /public (served from site root)
// `position`: CSS object-position when the photo is cropped (keeps faces in frame)
export type Photo = { src: string; caption: string; position?: string }

export type Qualification = 'A Level' | 'AS Level'

export type Subject = { name: string; grade?: string; qualification?: Qualification }

export type Education = {
  images?: Photo[]
  institution: string
  period: string
  level: string
  subjects: Subject[]
  // Teacher-predicted final grades, shown while a stage is in progress
  predicted?: Subject[]
  grades?: string
  current?: boolean
  links?: LinkRef[]
}

export const education: Education[] = [
  {
    institution: 'Inventure Academy, Bangalore, India',
    period: '2026 – 2027',
    level: 'Cambridge A Level, Grade 12',
    subjects: [
      { name: 'Further Mathematics', qualification: 'A Level' },
      { name: 'Mathematics', qualification: 'A Level' },
      { name: 'Chemistry', qualification: 'A Level' },
      { name: 'Physics', qualification: 'A Level' },
      { name: 'Computer Science', qualification: 'A Level' },
      { name: 'English', qualification: 'AS Level' },
    ],
    predicted: [
      { name: 'Further Mathematics', grade: 'A*', qualification: 'A Level' },
      { name: 'Mathematics', grade: 'A*', qualification: 'A Level' },
      { name: 'Chemistry', grade: 'A*', qualification: 'A Level' },
      { name: 'Physics', grade: 'A*', qualification: 'A Level' },
      { name: 'Computer Science', grade: 'A*', qualification: 'A Level' },
      { name: 'English', grade: 'A', qualification: 'AS Level' },
    ],
    current: true,
  },
  {
    institution: 'Inventure Academy, Bangalore, India',
    period: '2025 – 2026',
    level: 'Cambridge AS & A Level, Grade 11',
    subjects: [
      { name: 'Mathematics', grade: 'A*', qualification: 'A Level' },
      { name: 'Physics', grade: 'A', qualification: 'AS Level' },
      { name: 'Chemistry', grade: 'A', qualification: 'AS Level' },
      { name: 'Computer Science', grade: 'A', qualification: 'AS Level' },
    ],
    grades: 'A',
    links: [{ label: 'AS Maths result', href: 'https://drive.google.com/file/d/1Im3ibCb2XCFehqCHD4XcfQNGhADSxNXy/view?usp=drive_link' }],
  },
  {
    institution: 'Inventure Academy, Bangalore, India',
    period: '2024 – 2025',
    level: 'IGCSE',
    subjects: [
      { name: 'English Language', grade: 'A' },
      { name: 'English Literature', grade: 'A*' },
      { name: 'Mathematics', grade: 'A*' },
      { name: 'Additional Mathematics', grade: 'A*' },
      { name: 'Biology', grade: 'A*' },
      { name: 'Physics', grade: 'A*' },
      { name: 'Chemistry', grade: 'A*' },
      { name: 'Economics', grade: 'A*' },
      { name: 'Computer Science', grade: 'A*' },
      { name: 'Spanish', grade: 'A' },
    ],
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
  // The one picture shown for this project in the Research section
  cover?: Photo
  coverFit?: 'cover' | 'contain'
  // The research paper itself; omitted while the manuscript is under review
  paper?: LinkRef
  certificate?: LinkRef
  links?: LinkRef[]
}

export const research: Research[] = [
  {
    title: 'Transient Chaos & Geometric Transitions in Nonlinear Dynamical Systems',
    org: 'Research Science Institute – India (MIT-affiliated)',
    period: 'Jun 2026 – Jul 2026',
    mentor: 'Dr. Kaushal Verma, Dean of Mathematics, Indian Institute of Science',
    summary:
      'Selected as 1 of 30 students nationally (~2% acceptance) for the MIT RSI-model programme, with a 100% scholarship. Engineered a bifurcation-diagram simulator analysing how discrete-time nonlinear equations transition into chaos, and devised a structural coefficient (ξ) that predicts bifurcation-diagram patterns from an equation\'s form — classifying equations as smooth unimodal, smooth multimodal or piecewise linear.',
    status: 'Paper under review at JEI',
    statusTone: 'review',
    abstract:
      'Introduces a structural classification coefficient ξ. Using a custom digital bifurcation-diagram simulator (1,000 settling iterations followed by 500 recorded steps per parameter value), the study tracks the chaotic behaviour of multiple nonlinear equations over continuous parameter ranges.',
    findings: [
      'Smooth unimodal maps — the logistic map rx(1−x) and r·sin(x) — classify at ξ = 0.5, with continuous pitchfork branching routes to chaos that scale with the universal Feigenbaum constant δ ≈ 4.669.',
      'Smooth multimodal maps (0 < ξ < 0.5) — cubic and quintic equations such as r(x⁵−x³+x) — show overlapping wave-like structures and sudden attractor expansions triggered by interior crises.',
      'Piecewise linear maps (1.0 < ξ < 1.5) — the tent map r(1−2|x−0.5|) and 1−r|x| — bypass period doubling entirely, jumping from a single stable fixed point into a solid chaotic wedge with unvisited lens-shaped regions.',
      'The coefficient serves as an accurate baseline for classifying nonlinear chaotic dynamics from the visual properties of bifurcation diagrams.',
    ],
    cover: { src: '/media/research/rsi-logistic-map.jpg', caption: 'Presenting the logistic map: modelling a rabbit population' },
    // Mixed landscape and portrait photos: show each one whole
    coverFit: 'contain',
    images: [
      { src: '/media/research/rsi-logistic-map.jpg', caption: 'Presenting the logistic map: modelling a rabbit population' },
      { src: '/media/research/rsi-award.jpg', caption: 'Receiving the RSI-India 2026 certificate' },
      { src: '/media/research/rsi-coding.jpg', caption: 'Coding the bifurcation-diagram simulator' },
      { src: '/media/research/rsi-motivation-slide.jpg', caption: 'Opening the final presentation with the motivation for the research' },
      { src: '/media/research/rsi-iterations.jpg', caption: 'Walking through iterations of xₙ₊₁ = 2xₙ(1 − xₙ) converging to a fixed point' },
      { src: '/media/research/rsi-function-slide.jpg', caption: 'Explaining how a function maps inputs to outputs' },
      { src: '/media/research/rsi-presenting.jpg', caption: 'Taking questions during the RSI-India presentation' },
      { src: '/media/research/rsi-audience.jpg', caption: 'Fellow RSI scholars during the research presentations' },
      { src: '/media/research/rsi-cohort.jpg', caption: 'The RSI-India 2026 cohort with mentors and faculty' },
    ],
    paper: { label: 'Read the paper (PDF)', href: '/docs/rsi-india-paper.pdf' },
    certificate: { label: 'RSI-India certificate', href: '/docs/rsi-india-certificate.pdf' },
  },
  {
    title: 'Sequence Labelling and Error Analysis for Code-Mixed Text by an Averaged Perceptron Approach',
    org: 'Cambridge Centre of International Research, Cambridge, UK',
    period: 'Nov 2025 – Mar 2026',
    mentor: 'Dr. Weiwei Sun, Lecturer, Dept. of Computer Science, University of Cambridge',
    summary:
      'Tested a part-of-speech tagger on informal Hindi-English (Hinglish) versus monolingual data, achieving 94.89% accuracy on code-mixed text. Identified error cascades in mixed grammars, with most misclassifications occurring between nouns, verbs, proper nouns, and adjectives.',
    status: 'Published — Oxford Journal of Student Scholarship (peer-reviewed)',
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
    coverFit: 'contain',
    cover: { src: '/media/research/ccir-cambridge-future-scholar.jpg', caption: 'Cambridge Future Scholar — Machine Learning & NLP, under Dr Weiwei Sun' },
    paper: { label: 'Read the paper (PDF)', href: '/docs/ojss-code-mixed-pos-tagging.pdf' },
    certificate: { label: 'CCIR certificate', href: '/docs/ccir-cambridge-future-scholar.pdf' },
  },
  {
    title:
      'From Cash to Clicks: The Transformative Impact of UPI on Consumer Behaviour and Financial Inclusion in India',
    org: 'International Journal of Social Science and Economic Research (IJSSER, ISSN 2455-8834)',
    period: 'Nov 2024 – Jan 2025',
    mentor: 'Dr. Nandini Sud',
    summary:
      "Surveyed 140 users and statistically analysed the shift from cash to UPI (India's instant-payment network) in spending behaviour and financial inclusion — 64% found UPI more convenient than cash.",
    status: 'Published — peer-reviewed',
    statusTone: 'published',
    findings: [
      "Explores UPI's macroeconomic contributions: financial inclusion, transparency in government welfare programmes, and stronger small-business operations.",
      'Data analysis of the demographic profile of UPI users and their transaction preferences shows a strong preference for UPI over cash across transaction types.',
      "Emphasises UPI's pivotal role in India's journey towards a cashless society and its broad economic benefits.",
    ],
    paper: { label: 'Read the publication', href: 'https://doi.org/10.46609/IJSSER.2025.v10i07.021' },
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
  // Live product, shown as the primary button in the project header
  url?: string
  urlLabel?: string
  // Shown in the project header when set (path under /public)
  logo?: string
  funding?: { amount: string; source: string; date?: string }
}

export const projects: ProjectT[] = [
  {
    name: 'Persifolio',
    role: 'Founder & Crest Gold Award Winner',
    period: '2024 – present',
    tagline: 'A free app teaching beginners to invest — AI portfolio recommendations with a market simulator',
    description: [
      'A free mobile investment-education platform bridging the wealth gap for underserved communities. Through workshops and partnerships it has reached 10,000+ users, teaching beginners and young adults budgeting, portfolio construction, and risk management through hands-on simulation.',
      'Simplifies complex financial concepts with personalised investment suggestions, risk scores, and a virtual stock market simulator — reducing the fear and misinformation that keeps people from investing.',
      "Secured a $50,000 pre-seed from Peacock Ventures and endorsed by the state government. Officially adopted by partner St. Jerome's PU & Degree College as an elective for finance beginners, and by schools in Odisha. Patent published in the Government of India IP Journal.",
    ],
    // Add once received from Daksh:
    //   logo: '/media/logos/persifolio.png',
    funding: { amount: '$50,000', source: 'Peacock Ventures (pre-seed)' },
    stack: ['Flutter', 'Firebase', 'Material 3', 'Crashlytics', 'Google Analytics', 'Market Data APIs'],
    features: [
      'Android app built with Flutter and Firebase, published on Google Play, with real-time market-data APIs, Crashlytics and Google Analytics.',
      'Risk questionnaire based on the standardised LPL Financial model — each option carries a score by question type, stored in Firebase, to evaluate risk appetite.',
      'The final score generates a personalised portfolio unique to each user, secured by Google or email/password login.',
      'Portfolios render as a pie chart of diversification and stock break-up; enter an amount and the app shows exactly how much to invest where.',
    ],
    highlights: [
      { label: 'Users reached', value: '10,000+' },
      { label: 'Patent', value: 'Published' },
      { label: 'Pre-seed + self-funded from trading profit', value: '$50,000 + $25,000' },
    ],
    links: [
      { label: 'Patent journal', href: '/docs/persifolio-patent-journal.pdf' },
      { label: 'Patent certificate', href: 'https://drive.google.com/file/d/1kg8lx8TX5Fw6qo7_mMGpcxSRizaRH2xL/view?usp=sharing' },
      { label: 'Product images', href: 'https://drive.google.com/drive/folders/1rj9KWKJbemy3yHc6fxm78pLY_Bx7al5W?usp=sharing', thumb: '/media/persifolio/workshop-5.jpg' },
    ],
    images: [
      { src: '/media/persifolio/workshop-4.jpg', caption: '"What is investment?" — presenting to college students' },
      { src: '/media/persifolio/workshop-3.jpg', caption: 'Persifolio financial-literacy session at a college auditorium' },
      { src: '/media/persifolio/workshop-5.jpg', caption: 'Walking students through portfolio construction' },
      { src: '/media/persifolio/workshop-6.jpg', caption: 'Budgeting & risk-management workshop' },
      { src: '/media/persifolio/workshop-7.jpg', caption: 'Onboarding a full classroom onto Persifolio' },
      { src: '/media/persifolio/workshop-1.jpg', caption: 'Students with Persifolio QR pamphlets' },
      { src: '/media/persifolio/workshop-2.jpg', caption: 'Downloading the app from the QR pamphlet' },
    ],
  },
  {
    name: 'Scam Slayer',
    role: 'Creator, Developer & Workshop Leader',
    period: 'Sept 2025 – present',
    tagline: 'Gamified cybersecurity platform simulating phishing and impersonation scams for seniors — "Don\'t be a victim, be a slayer."',
    // From the published patent: "Web-Based System for Experiential Fraud-Recognition
    // Training Using Simulated Threat Scenarios for Vulnerable User Populations"
    description: [
      'A web-based system for experiential fraud-recognition training for vulnerable populations, particularly senior citizens. A scenario engine presents simulated threats — phishing messages, impersonation attempts and fraudulent arrest notices — through an interactive browser interface. Simulated payment and credential requests remain inoperative.',
      'A response-evaluation module analyses user choices, identifies overlooked warning signs and gives corrective feedback on safer verification and reporting actions. A progress-tracking module measures improvement across sessions, and the system then selects scenarios featuring previously missed cues in different contexts, reinforcing practical recognition skills.',
      'Trained 1,000+ residents across 20+ Bangalore elderly homes through in-person workshops, averting an estimated ~$6K in fraud. Patent published in the Government of India IP Journal (Application No. 202641116272 A, Oct 2026), lauded by a state lawmaker with a letter of recommendation (MLA, Mahadevapura, Government of Karnataka), and featured in Outlook India (1.5M readership).',
    ],
    highlights: [
      { label: 'Seniors trained, 20+ elderly homes', value: '1,000+' },
      { label: 'Fraud averted (est.)', value: '~$6K' },
      { label: 'Press — 1.5M readership', value: 'Outlook India' },
    ],
    links: [
      { label: 'Outlook article', href: 'https://www.outlookindia.com/xhub/featured-insights/teen-developer-daksh-sawhney-builds-scamslayer-fraud-detection-app-protecting-1000-senior-citizens-from-digital-scams', thumb: '/media/scam-slayer/outlook-feature.jpg' },
      { label: 'Patent publication', href: '/docs/scam-slayer-patent-journal.pdf' },
      { label: 'Government of Karnataka LOR', href: 'https://drive.google.com/file/d/1_1ORyucFaWquhrn9qrLyZ0sfBMXHCKfm/view?usp=sharing', thumb: '/media/scam-slayer/karnataka-mla-lor.jpg' },
    ],
    images: [
      { src: '/media/scam-slayer/workshop-8.jpg', caption: 'Scam-awareness workshop with residents of a senior-citizen home' },
      { src: '/media/scam-slayer/workshop-1.jpg', caption: 'Scam-awareness workshop at a senior-citizen home' },
      { src: '/media/scam-slayer/outlook-feature.jpg', caption: 'Scam Slayer featured in Outlook' },
      { src: '/media/scam-slayer/workshop-2.jpg', caption: 'Explaining fake-arrest and phishing scams' },
      { src: '/media/scam-slayer/workshop-3.jpg', caption: 'Interactive threat scenarios with residents' },
      { src: '/media/scam-slayer/workshop-4.jpg', caption: 'Workshop session in progress' },
      { src: '/media/scam-slayer/workshop-5.jpg', caption: 'Answering questions on OTP and impersonation fraud' },
      { src: '/media/scam-slayer/workshop-6.jpg', caption: 'Seniors learning to report cyber fraud' },
      { src: '/media/scam-slayer/workshop-7.jpg', caption: 'Hands-on walkthrough of the Scam Slayer app' },
    ],
  },
  {
    name: 'Polaris',
    role: 'Founder & Lead Developer — 1st Place, HackHarvard India',
    period: 'Jan 2026 – present',
    tagline: "A free AI career coach that tailors daily prep to the user's goal and benchmarks their CV against real hires.",
    url: 'https://polarisai.in/',
    description: [
      'Co-built with a team of 4, Polaris is a free AI career coach that learns from professionals who already hold the user\'s dream job — scanning trusted sources such as LinkedIn — and benchmarks the user\'s CV against real hires.',
      'Built an engine that turns CVs and hiring data into 16-week roadmaps, tailoring daily prep to each user\'s goal. Users have completed 1,800+ gap tasks so far.',
      'Enrolled 300+ students via 15+ workshops at 3+ partner organisations. Won 1st Place at HackHarvard India, then represented India at HackHarvard, an undergraduate hackathon at Harvard University, USA.',
    ],
    highlights: [
      { label: 'Students enrolled, 15+ workshops', value: '300+' },
      { label: 'Gap tasks completed', value: '1,800+' },
      { label: 'HackHarvard India', value: '1st Place' },
    ],
    links: [
      { label: "Letter of recommendation — St. Jerome's PU College", href: 'https://drive.google.com/file/d/15OQqsNnKIWvXW0ROZoHGO5cKhPPAc7gA/view?usp=sharing', thumb: '/media/polaris/st-jeromes-lor.jpg' },
    ],
    images: [
      { src: '/media/polaris/session-1.jpg', caption: 'Presenting Polaris to a college classroom' },
      { src: '/media/polaris/session-2.jpg', caption: '"Old searching vs Polaris" — explaining the approach' },
      { src: '/media/polaris/session-3.jpg', caption: 'Helping students set up their dream-job pathway' },
      { src: '/media/polaris/session-4.jpg', caption: 'Introducing Polaris to a class' },
      { src: '/media/polaris/session-5.jpg', caption: 'Students trying Polaris on their phones' },
      { src: '/media/awards/harvard-hackathon-cohort.jpg', caption: 'HackHarvard Challenge 2026 cohort — "Where Ideas Became Reality"' },
    ],
  },
  {
    name: 'Shades of Tomorrow',
    role: 'Lead Engineer & Youth Activist — Miyawaki Forest Project',
    period: '9th grade – present',
    tagline: 'Miyawaki urban ecological restoration across Bangalore, part of the One Person One Tree campaign — 100,000 saplings planted.',
    description: [
      'What began as a middle-school project with a team of 25 students grew into a larger mission to create greener urban spaces across Bengaluru, using the Miyawaki method to grow dense native forests on small urban plots.',
      'Raised INR 5,00,000 (~$6K) from corporate sponsors by presenting impact case studies, used for soil preparation, native plants and a team of gardeners to establish and maintain the forests. Engineered EcoWeave, an AI app that maps species synergies and growth across sites.',
      'Led 7 plantation drives across 6 Bangalore sites, planting 100,000 saplings through the One Person One Tree campaign, in partnership with Indus International School and corporate sponsors.',
    ],
    highlights: [
      { label: 'Saplings planted', value: '100,000' },
      { label: 'Corporate sponsorship', value: '₹5,00,000 (~$6K)' },
      { label: 'Plantation drives · sites', value: '7 · 6' },
    ],
    url: 'https://miyawaki-monitor.ai.studio/',
    urlLabel: 'Open EcoWeave',
    links: [
      { label: 'Project LOR', href: 'https://drive.google.com/file/d/1apGyS7hLz_t5ZO0RSSssirwHZ5tTmKkZ/view?usp=sharing', thumb: '/media/afforestation/project-lor.jpg' },
      { label: 'Plantation drive photos', href: 'https://drive.google.com/drive/folders/17syK8LG4uxN-r_PJsEGGshw_SeEPkwOr?usp=drive_link', thumb: '/media/afforestation/drive-1.jpg' },
    ],
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
    links: [{ label: 'AI Scholars Program certificate', href: '/docs/inspirit-ai-moneyball-certificate.pdf' }],
    images: [
      { src: '/media/moneyball/stadium-analytics.jpg', caption: 'AI meets professional sport' },
      { src: '/media/moneyball/sports-data.jpg', caption: 'Turning performance data into player valuations' },
    ],
  },
  {
    name: 'Macrospective',
    role: 'Co-developer — HackHarvard, Harvard University',
    period: 'Oct 2026',
    tagline: 'An AI simulator that stress-tests companies against rumour-driven financial panics.',
    url: 'https://macrospective.vercel.app/',
    description: [
      'Participated in HackHarvard at Harvard University (16–18 Oct 2026) as one of two invited high-school teams among 500+ participants from colleges worldwide, and co-developed Macrospective — an AI simulator that stress-tests companies against rumour-driven financial panics.',
      'Connected LLM-generated crisis scenarios to Python social-media agents with distinct personas, behaviours and coordination patterns, then ran parallel simulations to assess misinformation spread, financial damage, and the response strategies that reduced simulated losses.',
      'Extended the engine to compare marketing campaigns and announcements by their simulated reach and effect on sales.',
    ],
    stack: ['Python', 'LLM APIs', 'Multi-agent simulation'],
    highlights: [
      { label: 'High-school teams invited', value: '1 of 2' },
      { label: 'HackHarvard participants', value: '500+' },
      { label: 'Venue', value: 'Harvard University' },
    ],
    links: [
      { label: 'Devpost', href: 'https://devpost.com/software/macrospective', thumb: '/media/macrospective/team-expo.jpg' },
      { label: 'Certificate of completion', href: '/docs/hackharvard-macrospective-certificate.pdf' },
      { label: 'Invitation letter', href: '/docs/hackharvard-invitation-letter.pdf' },
      { label: 'Event photos', href: 'https://drive.google.com/drive/folders/1w4gufDARSea1XcbGW5KzUghpkbzgTpqd?usp=drive_link', thumb: '/media/macrospective/judging.jpg' },
    ],
    images: [
      { src: '/media/macrospective/team-expo.jpg', caption: 'The team with Macrospective at the HackHarvard 2026 project expo' },
      { src: '/media/macrospective/judging.jpg', caption: 'Demoing Macrospective to judges and participants' },
      { src: '/media/macrospective/building.jpg', caption: 'Building Macrospective during the hackathon' },
      { src: '/media/macrospective/harvard-campus.jpg', caption: 'Planning between sessions on the Harvard campus' },
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
    role: 'AI Engineering Intern',
    company: 'Nineleaps Technology Solutions Pvt. Ltd. — AI Centre of Excellence at Noviro.ai',
    period: '1 Apr 2025 – 15 May 2025',
    location: 'In person',
    contact: 'Mr. Anand Ganesan',
    points: [
      'Built full-stack AI applications: Flask/SQL services using language-model APIs, with HTML/CSS frontends and SQLite CRUD operations.',
      'Developed a retrieval-augmented generation (RAG) chatbot — an assistant answering from retrieved knowledge using vector embeddings.',
      'Ran backend deployment alongside the developers; performance rated "Higher than Expected" by the company.',
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
    name: 'Technical Analysis Trading Course',
    org: 'Hexaurum Learning',
    date: 'Apr 2024 – May 2024',
    grade: 'Grade 9',
    details:
      'Candlestick charting, support/resistance identification, pattern recognition, and momentum indicators (Moving Averages, RSI, MACD) for equity market analysis.',
    links: [{ label: 'Certificate', href: '/docs/hexaurum-technical-analysis-certificate.pdf' }],
    images: [{ src: '/media/education/hexaurum-technical-analysis-certificate.jpg', caption: 'Hexaurum Learning — Technical Analysis Trading Course, 22 May 2024' }],
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
      'AI Scholars Program. Applied Moneyball methodology to baseball player valuation using ML clustering to identify undervalued players. Ran statistical analysis on historical performance data (OBP, SLG, WAR derivatives) to isolate the highest-predictive-power metrics.',
    links: [{ label: 'Certificate', href: '/docs/inspirit-ai-moneyball-certificate.pdf' }],
    images: [{ src: '/media/education/inspirit-ai-moneyball-certificate.jpg', caption: 'Inspirit AI — AI Scholars Program, Moneyball: AI, Sports, and Business' }],
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
  tier?: 'gold' | 'silver' | 'bronze' | 'national' | 'international' | 'distinction'
  // Awarding body, when it isn't obvious from the title
  org?: string
  links?: LinkRef[]
}

export const honors: Award[] = [
  {
    title: 'Research Science Institute – India — Selected Scholar',
    detail: 'Selected for the MIT-inspired RSI-India programme: 30 students nationally, ~2% acceptance. Awarded a 100% scholarship.',
    date: 'Jun 2026',
    tier: 'national',
    org: 'RSI-India · IISc',
    links: [{ label: 'Certificate', href: '/docs/rsi-india-certificate.pdf' }],
    images: [{ src: '/media/research/rsi-india-certificate.jpg', caption: 'Research Science Institute – India 2026 certificate' }],
  },
  {
    title: 'HackHarvard India — 1st Place',
    detail: 'First Position in the HackHarvard Challenge 2026 hosted at Ashoka University, building Polaris in 48 hours with an interdisciplinary team. Went on to HackHarvard at Harvard University, USA as one of two high-school teams in a 500+ participant undergraduate hackathon.',
    date: 'Jan 2026',
    tier: 'international',
    org: 'HackHarvard',
    images: [{ src: '/media/awards/harvard-hackathon-certificate.jpg', caption: 'Certificate of Achievement — First Position' }],
    links: [{ label: 'Certificate', href: 'https://drive.google.com/file/d/1NV-4t_7RwapApyBkeH2ZJe8lTN6PJvie/view?usp=sharing' }],
  },
  {
    title: 'Patents Published — Government of India IP Journal',
    detail: 'Two patents published in the Indian Patent Journal: Scam Slayer (senior fraud) and Persifolio (investing).',
    date: '2026',
    tier: 'national',
    org: 'Government of India',
    links: [
      { label: 'Scam Slayer patent', href: '/docs/scam-slayer-patent-journal.pdf' },
      { label: 'Persifolio patent', href: '/docs/persifolio-patent-journal.pdf' },
    ],
    images: [{ src: '/media/scam-slayer/scam-slayer-patent-journal.jpg', caption: 'Scam Slayer patent publication, Indian Patent Journal' }],
  },
  {
    title: 'Featured in Outlook India',
    detail: "Featured in Outlook India (1.5M nationwide readership) for Scam Slayer's impact across senior-citizen homes.",
    date: '2026',
    tier: 'national',
    org: 'Outlook India',
    links: [
      { label: 'Outlook article', href: 'https://www.outlookindia.com/xhub/featured-insights/teen-developer-daksh-sawhney-builds-scamslayer-fraud-detection-app-protecting-1000-senior-citizens-from-digital-scams' },
    ],
    images: [{ src: '/media/scam-slayer/outlook-feature.jpg', caption: 'Scam Slayer featured in Outlook India' }],
  },
  {
    title: 'Rabindra Ratna Puraskar 2026',
    detail: 'Veyil Foundation national recognition — top 15 nationally — for work in financial literacy.',
    date: '2026',
    tier: 'national',
    org: 'Veyil Foundation',
  },
  {
    title: 'Crest Gold',
    detail: 'Persifolio: Personalised Portfolio & Virtual Stock Investment Simulator',
    date: 'Nov 2025',
    tier: 'gold',
    links: [
      { label: 'Certificate', href: '/docs/crest-gold-certificate.pdf' },
      { label: 'Certificate (Drive)', href: 'https://drive.google.com/file/d/1yZziDh8KNX-sVQ6Y_UJy-U03HwLEIdsq/view?usp=sharing' },
    ],
    images: [{ src: '/media/awards/crest-gold-certificate.jpg', caption: 'Crest Gold — British Science Association, 28/10/2025' }],
  },
  {
    title: 'Cambridge International Certificate of Education — Distinction',
    date: 'Jun 2025',
    tier: 'distinction',
    links: [
      { label: 'Certificate', href: '/docs/cambridge-ice-distinction.pdf' },
      { label: 'Certificate (Drive)', href: 'https://drive.google.com/file/d/1zJPyjDMrFrb5SgOPcdOgqhMoTK3W0I0Y/view?usp=drive_link' },
    ],
    images: [{ src: '/media/awards/cambridge-ice-distinction.jpg', caption: 'International Certificate of Education with Distinction — June 2025 series' }],
  },
  {
    title: 'Portfolio Strategy Challenge — Winner, HDFC Credelia',
    detail: 'Stock portfolio designed for a client; won first place in the investment pitch competition.',
    date: 'Jan–Feb 2024',
    links: [
      { label: 'Certificate', href: '/docs/hdfc-portfolio-strategy-challenge.pdf' },
      { label: 'Certificate (Drive)', href: 'https://drive.google.com/file/d/1RsQmKGFUj4h30cvhG_U2lCPi6YVSQUUL/view?usp=sharing' },
    ],
    images: [{ src: '/media/awards/hdfc-portfolio-strategy-challenge.jpg', caption: 'First Prize, Portfolio Strategy Challenge — 10 Feb 2024' }],
  },
  {
    title: 'Inventure Big Leap Award — English Literature',
    date: '2023–24',
    links: [{ label: 'Certificate', href: 'https://drive.google.com/file/d/119UtFg9bJ9dPA69xYE3Vbkz6MnJOMiXB/view?usp=sharing' }],
    images: [{ src: '/media/awards/big-leap-english-literature.jpg', caption: 'Big Leap Award — English Literature, Grade 9, 2023–24' }],
  },
]

export const otherAwards: Award[] = [
  {
    title: 'Award of Excellence — Community Outreach',
    detail: 'Recognised as one of the top two students in the grade for community outreach and care for the communities around them.',
    date: '2024–25',
    links: [{ label: 'Certificate', href: '/docs/community-outreach-award.pdf' }],
    images: [{ src: '/media/awards/community-outreach-award.jpg', caption: 'Inventure Academy Community Outreach Award, Grade 10' }],
  },
  {
    title: 'Award of Excellence — Inventure Sports Award',
    date: '2024–25',
    links: [{ label: 'Certificate', href: 'https://drive.google.com/file/d/119UtFg9bJ9dPA69xYE3Vbkz6MnJOMiXB/view?usp=sharing' }],
    images: [{ src: '/media/awards/inventure-sports-award.jpg', caption: 'The Inventure Sports Award, Grade 10, 2024–25' }],
  },
  {
    title: 'Award of Excellence — TechWhiz',
    detail: 'Recognised by the school as one of the top two in the grade for technology (TechWhiz).',
    date: '2025–26',
    links: [{ label: 'Certificate', href: 'https://drive.google.com/file/d/1DUYTEkZhl9r8CX4keWYoeFqw6tYPlPqW/view?usp=sharing' }],
    images: [{ src: '/media/awards/techwhiz-award.jpg', caption: 'The Computer Whiz Award, Grade 11, 2025–26' }],
  },
  {
    title: 'Award of Excellence — Inventure Scholar Award',
    date: '2025–26',
    links: [{ label: 'Certificate', href: 'https://drive.google.com/file/d/1vlNIVk-0ANNTyWvwhKZ_ZGkUAlnuLiin/view?usp=sharing' }],
    images: [{ src: '/media/awards/inventure-scholar-award.jpg', caption: 'The Inventure Academy Scholars Award, Grade 11, 2025–26' }],
  },
  {
    title: 'Award of Excellence — Computer Science',
    detail: 'Recognised by the school as #1 in the grade for Computer Science.',
    date: '2025–26',
    links: [
      { label: 'Certificate', href: '/docs/cs-subject-topper.pdf' },
      { label: 'Certificate (Drive)', href: 'https://drive.google.com/file/d/14a-PcLzrKh3qR1QyfRCvUmARi6wYFsVP/view?usp=sharing' },
    ],
    images: [{ src: '/media/awards/cs-subject-topper.jpg', caption: 'Subject Topper — Computer Science, Grade 11, 2025–26' }],
  },
  {
    title: 'Award of Excellence — Multiachiever Award',
    detail: 'Recognised by the school as one of the top two most well-rounded students in the grade.',
    date: '2025–26',
    links: [{ label: 'Certificate', href: 'https://drive.google.com/file/d/15yE7CeGr1JnULMhlt0wO6X0NeNg0N2IS/view?usp=sharing' }],
    images: [{ src: '/media/awards/multiachiever-award.jpg', caption: 'The Inventure Academy Multi Achievers Award, Grade 11, 2025–26' }],
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
    name: 'Badminton — Under-17 Boys Singles',
    level: 'State',
    achievement: 'Semi-finalist',
    date: 'Dec 2024',
    tier: 'bronze',
    links: [
      { label: 'Certificate', href: '/docs/badminton-u17-semifinalist.pdf' },
      { label: 'Certificate (Drive)', href: 'https://drive.google.com/file/d/1_cjRSCbgzq0cjSTzB4JbLyQOyJDCQSM2/view?usp=sharing' },
    ],
    images: [{ src: '/media/athletics/badminton-u17-semifinalist.jpg', caption: 'Semi-finalist, U17 Boys Singles — Play Extreme Junior Badminton Tournament, 1 Dec 2024' }],
  },
  {
    name: 'Head Start Interschool Basketball',
    level: 'Interschool',
    achievement: 'Silver Medal',
    date: '2024',
    tier: 'silver',
    links: [{ label: 'Certificate', href: 'https://drive.google.com/file/d/1ZV3EQYo01c1FThprnR348U2JZCxcKt6X/view?usp=sharing' }],
    images: [{ src: '/media/athletics/headstart-basketball-runners-up.jpg', caption: 'Runners-up, Basketball (Grade 9 & below) — Head Start Friendship Games 2023/24' }],
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
  { name: 'Badminton — Mixed Adult Doubles', level: 'Bangalore', achievement: 'Gold', date: '2023', tier: 'gold' },
  { name: 'Badminton — State Open', level: 'State', achievement: 'Semi-finalist', date: 'Grades 9–11', tier: 'bronze' },
  { name: 'Badminton — ISSO Nationals', level: 'National', achievement: 'Quarter-finalist', date: 'Grades 9–11', tier: 'national' },
]

export const sportsPhotos: Photo[] = [
  { src: '/media/sports/badminton.jpg', caption: 'On the badminton court' },
  { src: '/media/sports/swimming.jpg', caption: 'On the podium at a swim meet', position: '50% 22%' },
  { src: '/media/sports/basketball.jpg', caption: 'With the basketball team at the Head Start Friendship Games' },
]

export const clubsAndMun: { name: string; detail: string; date: string; links?: LinkRef[] }[] = [
  {
    name: 'Varsity Badminton Team — Captain & Team Strategist',
    detail: 'Inventure Academy varsity team on the inter-school and national school circuits. Coached the squad on smash technique and doubles tactics with no coach; won golds and silvers.',
    date: 'Grades 9–11',
  },
  {
    name: 'School Basketball Team — Point Guard',
    detail: 'Runs the offence as point guard for Inventure Academy; runners-up at the Head Start Friendship Games 2023/24.',
    date: '2023 – 2026',
    links: [{ label: 'Certificate', href: 'https://drive.google.com/file/d/17tPqfPu16oCzfK4FQo3EspXqVnmQB-G2/view?usp=sharing' }],
  },
  {
    name: 'School Shot Put Team — Captain',
    detail: 'Captains the Inventure Academy shot put team; second place at both the Inventure Sports Fest and the Annual Athletics Meet, 2025.',
    date: '2025',
    links: [
      { label: 'Sports Fest 2025', href: '/docs/shot-put-sports-fest-2025.pdf' },
      { label: 'Athletics Meet 2025', href: 'https://drive.google.com/file/d/1O8wDrLp1YY1-mObKdJfGO8CWzCHTMH85/view?usp=sharing' },
    ],
  },
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

// Stock trading — Daksh's main hobby. Extend `points` / `stats` with the details
// from his activity list (markets, holding period, strategy, results).
export const trading = {
  title: 'Stock Trading',
  since: '2024 – present',
  summary:
    "When I'm not building or researching, I'm usually trading on the stock exchange. It's where the maths stops being abstract: every position is a small model of risk, reward and probability, tested against a market that doesn't care about my assumptions.",
  points: [
    'Trades Indian equities using technical analysis — candlestick patterns, support and resistance, moving averages, RSI and MACD.',
    'Certified in the Technical Analysis Trading Course (Hexaurum Learning, 2024).',
    'Won the HDFC Credelia Portfolio Strategy Challenge by designing a client stock portfolio and pitching it to judges.',
    'Self-funded the Persifolio app with his own stock-trading earnings.',
    'Reinvested $25,000 of trading earnings into his own ventures.',
    'Feeds directly into Persifolio, whose market simulator lets first-time investors practise the same skills risk-free.',
  ],
  tools: ['Candlesticks', 'Support / resistance', 'Moving averages', 'RSI', 'MACD'],
  links: [{ label: 'Technical analysis certificate', href: '/docs/hexaurum-technical-analysis-certificate.pdf' }] as LinkRef[],
}

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
    name: 'RGH Government School — Tutoring',
    location: 'Bangalore',
    period: 'Jun 2024 – Nov 2024',
    contact: 'Ms. Lakshmi / Ms. Nikitha',
    detail:
      'Tutored 5 students in English for 2 years, helping them achieve 25% higher exam marks through one-on-one tutoring and monthly practice sheets. Developed adapted learning materials and visual aids for students with academic gaps in Grades 6 and 8 using design-thinking processes.',
  },
  {
    name: 'Empower-Fin — Project EcoFin, Tribes for Good',
    location: 'Tribes for Good',
    period: '1 May 2024 – 1 Jun 2024',
    contact: 'Jinal Rajpopat',
    detail:
      'As Project Leader and Educator for Tribes for Good\'s financial-literacy drive (Young Indian Changemaker Project), trained 200+ artisans, micro-entrepreneurs and low-income youth in Karnataka. Over 25 hours of community service, ran awareness workshops on personal and digital finance: inflation, shrinkflation, budgeting, saving, and financial decision-making, and introduced emerging concepts such as the Social Stock Exchange. Also ran finance workshops for students at school and in the neighbourhood.',
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
  { date: '2025-07', year: '2025', label: 'UPI research published in IJSSER (peer-reviewed)', category: 'research' },
  { date: '2025-04', year: '2025', label: 'Summer internship — Nine Leaps / Noviro.ai AI Centre of Excellence', category: 'build' },
  { date: '2025-05', year: '2025', label: 'Software development internship — Address Makers Pvt Ltd', category: 'build' },
  { date: '2025-09', year: '2025', label: 'Created Scam Slayer — cybersecurity awareness platform', category: 'build' },
  { date: '2025-10', year: '2025', label: 'Scam Slayer workshops reach 1,000+ senior citizens; featured in Outlook', category: 'service' },
  { date: '2025-06', year: '2025', label: 'Cambridge International Certificate of Education — Distinction', category: 'recognition' },
  { date: '2025-09', year: '2025', label: 'Cambridge Centre of International Research begins (NLP / POS-tagging)', category: 'research' },
  { date: '2025-11', year: '2025', label: 'Persifolio awarded Crest Gold', category: 'recognition' },
  { date: '2026-01', year: '2026', label: 'HackHarvard India — 1st Place (Polaris)', category: 'recognition' },
  { date: '2026-01', year: '2026', label: 'Persifolio patent filed, published in Indian Patent Journal', category: 'build' },
  { date: '2026-02', year: '2026', label: 'Persifolio adopted by schools in Odisha, backed by a Rajya Sabha MP', category: 'build' },
  { date: '2026-02', year: '2026', label: 'Medium article: "Does the Profit Motive Bring Out the Best or the Worst in Us?"', category: 'build' },
  { date: '2026-03', year: '2026', label: 'Cambridge Future Scholar — CCIR research course in ML & NLP', category: 'research' },
  { date: '2026-06', year: '2026', label: 'Selected for Research Science Institute – India (MIT RSI model, ~2% acceptance, 100% scholarship)', category: 'research' },
  { date: '2026-07', year: '2026', label: 'Hinglish POS-tagging paper published in the Oxford Journal of Student Scholarship', category: 'research' },
  { date: '2026-10', year: '2026', label: 'Scam Slayer patent published in the Indian Patent Journal', category: 'build' },
  { date: '2026-10', year: '2026', label: 'HackHarvard Undergraduate Hackathon: Macrospective', category: 'build' },
]
