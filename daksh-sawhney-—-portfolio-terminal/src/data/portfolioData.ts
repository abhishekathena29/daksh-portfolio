import { Holding, ProjectItem, ResearchPaper, HonourItem, ExperienceItem } from '../types/portfolio';

export const PROFILE_INFO = {
  name: "Daksh Sawhney",
  tagline: "Student, Builder, Researcher & Investor in Ideas",
  location: "Bangalore, India",
  school: "Inventure Academy (Grade 11/12)",
  affiliation: "Inventure Academy (Grade 11/12)",
  marketStatus: "MARKET OPEN — BANGALORE / BOSTON / CAMBRIDGE",
  thesisStatement: "I invest my time, curiosity, and effort into problems worth solving: nonlinear dynamics, accessible fintech, code-mixed language systems, and resilient community ecosystems.",
  email: "Dakshsawhney2008@gmail.com",
  contact: {
    email: "Dakshsawhney2008@gmail.com",
    github: "github.com/dakshsawhney",
    linkedin: "linkedin.com/in/daksh-sawhney"
  }
};

export const HOLDINGS: Holding[] = [
  {
    id: "holding-tech",
    ticker: "TECH:PERSI",
    category: "TECHNOLOGY",
    title: "Software & Fintech Systems",
    tagline: "Architecting financial technology and AI tools that democratize access to markets and safety.",
    year: "2023 – Present",
    status: "DEPLOYED",
    role: "Product Lead & Founder",
    metrics: [
      { label: "Active Users", value: "4,000+" },
      { label: "Patents Published", value: "2" },
      { label: "Pre-seed Raised", value: "$50,000" }
    ],
    description: "Built and scaled Persifolio, a Flutter + Firebase fintech platform with real-time risk scoring, live AlphaVantage market integrations, and a paper-trading simulator for new investors. Also created ScamSlayer, a fraud simulation platform for vulnerable demographics.",
    highlights: [
      "Persifolio scaled to 4,000+ users with virtual stock simulation and dynamic portfolio modeling",
      "Adopted across Odisha state via letter of appreciation from Member of Parliament Sujeet Kumar",
      "ScamSlayer cybersecurity platform recognized by Karnataka MLA Mrs. Manjula & featured in Outlook India",
      "HackHarvard India 1st Place National Winner in Education track"
    ],
    technologies: ["Flutter", "Firebase", "Python", "Flask", "TypeScript", "React", "Live Market APIs"],
    route: "projects",
    accentColor: "#10b981", // Emerald
    sparklineData: [22, 28, 35, 42, 58, 70, 88, 95]
  },
  {
    id: "holding-research",
    ticker: "RES:CHAOS",
    category: "RESEARCH",
    title: "Applied Mathematics & Computational NLP",
    tagline: "Analyzing complex dynamical systems, transient chaos, and code-mixed natural language processing.",
    year: "2024 – Present",
    status: "PUBLISHED",
    role: "Principal & Mentored Researcher",
    metrics: [
      { label: "Research Programs", value: "RSI-India (<2%)" },
      { label: "Hinglish Model Acc.", value: "94.89%" },
      { label: "Manuscripts", value: "3 Studies" }
    ],
    description: "Investigating nonlinear dynamics under Dr. Kaushal Verma (Dean of Mathematics, IISc) developing the structural classification coefficient ξ. Researched Hindi-English code-mixed POS tagging with Dr. Weiwei Sun (Cambridge CS) achieving 94.89% accuracy, and published macroeconomic UPI adoption analysis.",
    highlights: [
      "Selected for MIT-affiliated Research Science Institute (RSI-India) (<2% acceptance rate, 30 students nationally)",
      "Designed custom bifurcation diagram simulator for discrete nonlinear systems & chaotic transitions",
      "POS tagger research on Hinglish code-mixed data published in Oxford Journal of Student Scholarship",
      "Peer-reviewed paper on UPI & Indian financial inclusion published in IJSSER"
    ],
    technologies: ["Python", "NumPy", "Matplotlib", "NLTK", "SciPy", "LaTeX", "Bifurcation Analysis"],
    route: "research",
    accentColor: "#06b6d4", // Cyan
    sparklineData: [30, 45, 52, 60, 75, 84, 92, 98]
  },
  {
    id: "holding-finance",
    ticker: "FIN:ALPHA",
    category: "FINANCE",
    title: "Capital Allocation & Market Strategy",
    tagline: "Disciplined quantitative frameworks, risk diversification, and self-funded venture execution.",
    year: "2023 – Present",
    status: "ACTIVE",
    role: "Self-Directed Investor & Pitch Lead",
    metrics: [
      { label: "2-Yr Portfolio Return", value: "+55%" },
      { label: "Competition Rank", value: "1st Place (HDFC)" },
      { label: "API Self-Funded", value: "AlphaVantage" }
    ],
    description: "Managed a self-directed equity investment portfolio applying valuation frameworks, risk mitigation, and the ZigZag strategy. Leveraged equity trading earnings to self-fund AlphaVantage market data API tokens for Persifolio.",
    highlights: [
      "1st Place Winner in HDFC Credila Portfolio Strategy Challenge for client portfolio construction",
      "Wharton / U. Penn FinTech Specialization completed with high honors",
      "Self-funded all development and API overheads for software products through personal trading returns"
    ],
    technologies: ["Technical Analysis", "Valuation Multiples", "Risk Modeling", "AlphaVantage APIs", "DCF"],
    route: "finance",
    accentColor: "#34d399", // Emerald Light
    sparklineData: [40, 44, 48, 55, 62, 70, 78, 85]
  },
  {
    id: "holding-environment",
    ticker: "ENV:MIYAWAKI",
    category: "ENVIRONMENT",
    title: "Ecological Restoration & Urban Afforestation",
    tagline: "Restoring biodiverse native micro-forests and building digital logging tools for ecological monitoring.",
    year: "2022 – 2025",
    status: "SCALED",
    role: "Founder, Shades of Tomorrow",
    metrics: [
      { label: "Native Trees Planted", value: "100,000" },
      { label: "Capital Raised", value: "₹500,000" },
      { label: "Urban Sites", value: "5 Bangalore" }
    ],
    description: "Founded Shades of Tomorrow, leading the afforestation of 100,000 native trees across 5 Bangalore sites using the high-density Miyawaki technique. Raised ₹500,000 via corporate partnerships under the 'One Person One Tree' initiative and developed the EcoWeave tracking web app.",
    highlights: [
      "Spearheaded 5 urban micro-forest plantations across high-stress Bangalore industrial/urban belts",
      "Raised ₹500,000 from corporate partners without intermediary non-profit administrative overhead",
      "Built EcoWeave: an AI-assisted companion app helping community gardeners track species synergy and growth"
    ],
    technologies: ["Miyawaki Method", "EcoWeave Web App", "Corporate Partnerships", "Canopy Density Auditing"],
    route: "impact",
    accentColor: "#22c55e", // Green
    sparklineData: [15, 30, 45, 65, 80, 88, 94, 99]
  },
  {
    id: "holding-community",
    ticker: "COM:EQUITY",
    category: "COMMUNITY",
    title: "Grassroots Financial Literacy & Education",
    tagline: "Direct academic tutoring and financial education for marginalized youth, artisans, and senior citizens.",
    year: "2023 – Present",
    status: "ACTIVE",
    role: "Project Leader & Volunteer",
    metrics: [
      { label: "Seniors Trained", value: "1,000+" },
      { label: "Student Grade Boost", value: "+25%" },
      { label: "Weekly Commitment", value: "2 Years" }
    ],
    description: "Led Project EcoFin with Tribes for Good NGO promoting digital financial inclusion for artisans and youth. Conducted cybersecurity defense workshops for 1,000+ senior citizens using ScamSlayer. Tutored 5 underprivileged students in English for 2 years at RGH Government School.",
    highlights: [
      "2-year weekly tutoring program at RGH Government School yielding a 25% improvement in English exam performance",
      "Conducted on-ground ScamSlayer interactive anti-phishing clinics across Bangalore senior centers",
      "Inventure Academy Award of Excellence: Community Outreach Award"
    ],
    technologies: ["Design Thinking", "Pedagogy Visual Aids", "Cyber-Hygiene Workshops", "Grassroots NGO"],
    route: "impact",
    accentColor: "#a855f7", // Purple
    sparklineData: [20, 35, 50, 60, 72, 85, 90, 96]
  },
  {
    id: "holding-experience",
    ticker: "EXP:SYSTEMS",
    category: "EXPERIENCE",
    title: "Industry Engineering & Venture Building",
    tagline: "Production machine learning systems, sports analytics, and early-stage startup architecture.",
    year: "2024 – Present",
    status: "COMPLETED",
    role: "AI Engineer Intern & Strategist",
    metrics: [
      { label: "Production Bot", value: "Address Maker" },
      { label: "ML Project", value: "Moneyball (Inspirit)" },
      { label: "Venture Strategy", value: "Istus Capital" }
    ],
    description: "Built full-stack AI applications at NineLeaps, deploying an enterprise-grade multilingual voice customer-service bot for client Address Maker. Engineered predictive baseball clustering models at Inspirit AI and assisted early-stage market research for Istus Capital.",
    highlights: [
      "Engineered production-grade RAG and speech-to-text pipeline supporting multiple Indian regional languages",
      "Applied k-means clustering and cost-performance trade-offs for player valuation at Inspirit AI",
      "Drafted market entry, digital presence, and competitive strategy for family venture Istus Capital"
    ],
    technologies: ["Python", "Flask", "SQLite", "RAG Systems", "Speech-to-Text", "Scikit-Learn"],
    route: "experience",
    accentColor: "#f59e0b", // Amber
    sparklineData: [25, 38, 48, 62, 74, 82, 91, 95]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "persifolio",
    name: "Persifolio",
    category: "Fintech & Virtual Market Simulator",
    year: "2023 – 2025",
    role: "Founder & Lead Developer",
    tagline: "Dynamic AI-driven portfolio recommendation engine and real-time stock market simulator for young investors.",
    summary: "Persifolio is a production fintech Android application built with Flutter and Firebase. It eliminates financial intimidation by calculating personalized risk scores, constructing simulated asset allocations, and letting beginners execute risk-free paper trades with live market price streams.",
    problem: "Financial literacy curricula are overwhelmingly theoretical. Young and first-time retail investors in India face volatile markets with zero experiential practice, often falling prey to predatory financial tips or abandoning investing due to complex jargon.",
    idea: "Combine personalized modern portfolio theory (MPT) risk profiling with a zero-risk, real-time paper trading simulator powered by live market feeds, structured analytics dashboards, and error-tolerant mobile architecture.",
    built: "Designed and engineered the complete client-server stack: Flutter frontend with modular reactive state, Firebase Cloud Firestore and Authentication backend, and external AlphaVantage live quotes integration with client-side caching.",
    howItWorks: "1. The user completes an interactive 7-dimensional risk assessment scoring liquidity needs, time horizon, and loss tolerance.\n2. The system computes a calibrated risk profile and generates an optimal diversification blueprint across equities, debt, and cash.\n3. The user receives a virtual portfolio with live market simulation capabilities, tracking P&L, stop-loss triggers, and performance analytics.",
    impact: "Scaled organically to 4,000+ active users. Formally adopted across educational and youth initiatives in the state of Odisha following an official Letter of Appreciation from Member of Parliament (Upper House) Sujeet Kumar. Secured $50,000 in pre-seed funding commitment from Peacock Ventures.",
    recognition: [
      "Patent Published: 'Dynamic AI based Investment Portfolio recommendation system with market simulation' (Govt. of India)",
      "CREST Gold Award (International)",
      "Rabindra Ratna Puraskar 2026 for Science & Technology (Karnataka)",
      "Pre-seed Funding ($50,000) from Peacock Ventures",
      "Official Commendation & State Adoption by MP Sujeet Kumar (Parliament of India)"
    ],
    metrics: [
      { label: "Active Users", value: "4,000+" },
      { label: "Pre-seed Raised", value: "$50,000" },
      { label: "State Adoption", value: "Odisha, India" },
      { label: "Crash-Free Rate", value: "99.4%" }
    ],
    technologies: ["Flutter", "Dart", "Firebase", "Firestore", "AlphaVantage APIs", "State Management", "Crashlytics"],
    patent: "Patent Published: Dynamic AI based Investment Portfolio recommendation system with market simulation",
    featured: true
  },
  {
    id: "scamslayer",
    name: "ScamSlayer",
    category: "Cybersecurity & Vulnerability Defense",
    year: "2024 – 2025",
    role: "Architect & Community Lead",
    tagline: "Experiential threat-simulation platform protecting senior citizens and non-tech-savvy users from digital exploitation.",
    summary: "ScamSlayer is a responsive cybersecurity web application engineered to bridge the critical 'human vulnerability gap'. Rather than delivering passive text advice, ScamSlayer puts users into hyper-realistic, interactive simulations of urgent scams (digital arrest threats, fake KYC suspensions, phishing SMS, impersonation attacks), conditioning muscle memory and skepticism.",
    problem: "Digital fraud in India has skyrocketed, with cybercriminals using psychological urgency and fear to target senior citizens and vulnerable populations. Traditional public awareness campaigns are static and fail when victims face high-adrenaline real-life attacks.",
    idea: "Transform passive advice into interactive threat simulation. By walking users through authentic simulated scams in a safe sandboxed environment, users experience the exact psychological triggers used by attackers and learn immediate verification protocols.",
    built: "A lightweight, accessible single-page web application featuring dynamic scenario branches, red-flag highlighting, instant forensic breakdowns, and audio-assisted explanations for non-technical users.",
    howItWorks: "Users encounter simulated incoming phone/SMS/email scenarios. As they make decisions (e.g. 'Click verification link' vs 'Inspect sender URL'), the platform exposes the underlying deceptive mechanisms, trains them to look for spoofed sender IDs, and provides actionable reporting hotlines (1930 Cyber Helpline).",
    impact: "Conducted hands-on digital safety workshops for over 1,000 senior citizens across Bangalore elder-care institutions and residential associations. Formal appreciation received from Karnataka Member of Legislative Assembly (MLA) Mrs. Manjula of Mahadevpura constituency. Profiled in Outlook India.",
    recognition: [
      "Patent Published: 'Web-Based System for Experiential Fraud-Recognition Training Using Simulated Threat Scenarios for Vulnerable User Populations' (Govt. of India)",
      "Official Commendation by MLA Mrs. Manjula (Mahadevpura Constituency, Bangalore)",
      "National Media Coverage in Outlook India",
      "Trained 1,000+ senior citizens across residential communities"
    ],
    metrics: [
      { label: "Seniors Trained", value: "1,000+" },
      { label: "Scenarios Simulated", value: "24+" },
      { label: "Threat Types", value: "Digital Arrest, KYC, Phishing" },
      { label: "National Patent", value: "Published" }
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Interactive State Engine", "Accessible UI"],
    patent: "Patent Published: Web-Based System for Experiential Fraud-Recognition Training Using Simulated Threat Scenarios for Vulnerable User Populations",
    featured: true
  },
  {
    id: "polaris",
    name: "Polaris AI",
    category: "AI & Career Vectoring",
    year: "2024 – Present",
    role: "Product CFO & Creator",
    tagline: "Algorithmic career trajectory mapping aligning student ambitions with real-world industry pathways.",
    summary: "Polaris is an intelligent web application designed under the Inventure Tech for Change club. It analyzes verified profiles from trusted platforms such as LinkedIn to map non-linear, actionable pathways from a student's current standing to their dream career.",
    problem: "High school and undergraduate students lack clear roadmaps to navigate modern interdisciplinary industries, relying on anecdotal advice rather than data-grounded milestones.",
    idea: "Reverse-engineer career pathways: input a target role or company, and Polaris scans trajectory archetypes from verified professionals, extracting common prerequisite projects, certifications, and entry stages.",
    built: "Full-stack web application featuring user onboarding surveys, demographic parsing, trajectory graph rendering, and milestone checklist generation.",
    howItWorks: "Students specify their interests, academic baseline, and aspirational roles. The system identifies competency gaps and generates phased 6-month, 1-year, and 3-year vector milestones.",
    impact: "Piloted within school communities and educational networks, providing students with structured career roadmaps.",
    recognition: [
      "Featured project within Inventure Academy Tech for Change Club",
      "Angel investment commitment secured for platform expansion"
    ],
    metrics: [
      { label: "Focus Areas", value: "STEM, Finance, AI" },
      { label: "Platform", value: "PolarisAI.in" },
      { label: "Status", value: "Active Development" }
    ],
    technologies: ["Next.js", "Python", "Web Parsing", "Tailwind CSS", "Graph Algorithms"]
  },
  {
    id: "ecoweave",
    name: "EcoWeave",
    category: "Environmental Data & Afforestation Web App",
    year: "2023 – 2025",
    role: "Creator & Environmental Lead",
    tagline: "Digital biodiversity companion ensuring spatial balance and growth logging for Miyawaki urban micro-forests.",
    summary: "EcoWeave is an environmental web application built as the digital backbone of the Shades of Tomorrow afforestation initiative. It assists urban gardeners and forestry volunteers in planning high-density Miyawaki plantations by calculating canopy layer synergies and tracking sapling survival.",
    problem: "The Miyawaki method requires precise 4-tier canopy stratification (canopy trees, sub-canopy trees, shrubs, ground cover) planted 3 saplings per square meter. Without systematic planning, fast-growing species choke slower species, degrading overall biodiversity.",
    idea: "A streamlined digital tool that calculates multi-tiered species placement matrices, visualizes canopy coverage ratios, and lets volunteers log quarterly growth metrics across planted sites.",
    built: "Mobile-responsive web application with species database, density calculator, and photo-based growth progress logging.",
    howItWorks: "Volunteers enter site dimensions and available native sapling species. EcoWeave generates optimal spatial distribution grids to prevent canopy competition and tracks site vitality over time.",
    impact: "Deployed across all 5 Shades of Tomorrow Bangalore plantation sites supporting the survival audit of 100,000 planted saplings.",
    recognition: [
      "Companion platform for Shades of Tomorrow initiative (100,000 trees planted)",
      "Featured in corporate CSR environmental audit reports"
    ],
    metrics: [
      { label: "Monitored Sites", value: "5 Bangalore Locations" },
      { label: "Trees Supported", value: "100,000 Saplings" },
      { label: "Native Species", value: "35+ Species" }
    ],
    technologies: ["React", "JavaScript", "Leaflet Maps", "Responsive CSS", "Ecology Modeling"]
  },
  {
    id: "evm-inventure",
    name: "Eco-Friendly Electronic Voting Machine",
    category: "Hardware / Software Democracy Tool",
    year: "2024",
    role: "Technical Lead",
    tagline: "Tamper-resistant digital ballot replacing paper voting for high-turnout student body elections.",
    summary: "Engineered a low-power, eco-friendly electronic voting unit for Inventure Academy school elections, saving thousands of sheets of paper while ensuring instant cryptographic tally verification.",
    problem: "Traditional student elections consumed vast paper ballots and required hours of manual counting, susceptible to disputed tallies.",
    idea: "Create a standalone, audit-logged voting system with real-time encrypted ballot counting and zero internet exposure.",
    built: "Physical button-matrix console linked to a secure local verification script with immediate audit-trail receipts.",
    howItWorks: "Students verify voter eligibility via student ID, cast encrypted votes, and the system aggregates tallies instantaneously with mathematical verification.",
    impact: "Successfully deployed across school elections, transitioning the campus to 100% paperless democratic voting.",
    recognition: [
      "Inventure Academy Tech for Change Showcase Winner"
    ],
    metrics: [
      { label: "Paper Saved", value: "10,000+ Ballots" },
      { label: "Tally Time", value: "< 10 Seconds" },
      { label: "Turnout Rate", value: "98%" }
    ],
    technologies: ["Microcontroller C++", "Python", "Local Encryption", "Hardware Integration"]
  }
];

export const RESEARCH_PAPERS: ResearchPaper[] = [
  {
    id: "nonlinear-dynamics",
    title: "Transient Chaos & Geometric Transitions in Discrete-Time Nonlinear Dynamical Systems",
    field: "Applied Mathematics & Chaos Theory",
    mentorOrPublisher: "Mentored by Dr. Kaushal Verma (Dean of Mathematics, Indian Institute of Science)",
    status: "Under Review at Journal of Emerging Investigators (JEI)",
    year: "2025",
    abstract: "Discrete-time nonlinear dynamical systems often transition between stable periodic orbits, intermittency, and fully developed chaos through bifurcations that depend sensitively on equation morphology. This research formulates a novel structural classification coefficient, ξ, that categorizes nonlinear recurrence relations directly from their algebraic formulation into smooth unimodal, smooth multimodal, and piecewise linear classes. To empirically test theoretical bounds, a custom numerical bifurcation simulator was coded to compute Lyapunov exponents, orbit density distributions, and attractor attractivity. The results demonstrate that geometric transitions into transient chaos can be predicted prior to full numerical integration, opening new pathways for stability analysis in complex systems.",
    methodology: "Developed a computational simulator in Python to evaluate discrete mapping families f(x) = r·g(x). Implemented adaptive step-size parameter sweeps to calculate invariant measures and Lyapunov exponent spectra λ = lim (1/N) ∑ ln |f'(x_i)|. Formulated the structural classification coefficient ξ to quantify algebraic curvature and multimodal inflection points.",
    findings: [
      "Successfully predicted boundary crises and onset of transient chaos through structural coefficient ξ without requiring brute-force numerical iterations across 8 distinct map families.",
      "Identified critical parameter thresholds where invariant chaotic attractors collapse into transient saddle sets.",
      "Custom bifurcation diagram simulator generated high-resolution phase-space orbit mappings verifying analytical stability bounds."
    ],
    metrics: [
      { label: "Research Mentor", value: "Dr. Kaushal Verma (IISc Dean)" },
      { label: "Acceptance Metric", value: "RSI-India Finalist" },
      { label: "Theoretical Metric", value: "ξ Structural Index" },
      { label: "Manuscript Status", value: "Under Review (JEI)" }
    ],
    tags: ["Nonlinear Dynamics", "Chaos Theory", "Bifurcation Diagrams", "Lyapunov Exponents", "IISc Research"],
    keyVisualType: "bifurcation"
  },
  {
    id: "hinglish-nlp",
    title: "Part-of-Speech Tagging in Hindi-English Code-Mixed Text: Architecture & Error Cascades",
    field: "Computational Linguistics & Natural Language Processing",
    mentorOrPublisher: "Mentored by Dr. Weiwei Sun (Dept. of Computer Science, University of Cambridge) • Published in Oxford Journal of Student Scholarship",
    status: "Published in Oxford Journal of Student Scholarship",
    year: "2024",
    abstract: "Code-mixing between Hindi and English (colloquially 'Hinglish') presents severe computational challenges for standard NLP pipelines due to lexical borrowing, non-standard Romanized phonetic spellings, and intertwined syntactical rules. This investigation evaluates an optimized Part-of-Speech (POS) tagger across monolingual English, monolingual Hindi, and Romanized Hindi-English code-mixed corpora. The trained model achieved an accuracy of 93.60% on English, 95.95% on Hindi, and 94.89% on the Hinglish code-mixed dataset. Systematic error analysis revealed that lexical ambiguity between nouns, verbs, and proper nouns accounted for 64% of misclassifications due to overlapping morphological shapes. Furthermore, medium-length sentences exhibited marginally higher accuracy than long sentences, and error-cascade analysis demonstrated that single isolated errors rarely triggered compounding sentence-level failure.",
    methodology: "Constructed balanced code-mixed datasets tagged with universal POS schemas. Implemented bi-directional sequential tagging models with subword tokenization to capture Romanized phonetic variants. Evaluated confusion matrices, sentence-length sensitivity curves, and propagation metrics to measure compounding error dependencies across multi-clause statements.",
    findings: [
      "Achieved 94.89% test accuracy on Romanized Hinglish code-mixed text, performing within 1.06% of the monolingual Hindi baseline (95.95%).",
      "Proved that misclassifications concentrate heavily in overlapping noun-proper noun-verb boundaries rather than grammatical function words.",
      "Demonstrated that sentence error distributions are predominantly isolated (0 or 1 error per sentence), with cascading failures occurring in fewer than 6.2% of complex compound sentences."
    ],
    metrics: [
      { label: "Hinglish Accuracy", value: "94.89%" },
      { label: "Hindi Accuracy", value: "95.95%" },
      { label: "English Accuracy", value: "93.60%" },
      { label: "Publisher", value: "Oxford Journal of Student Scholarship" }
    ],
    tags: ["Code-Mixing", "POS Tagging", "Hinglish NLP", "Cambridge Mentorship", "Subword Embeddings"],
    keyVisualType: "nlp_confusion"
  },
  {
    id: "upi-inclusion",
    title: "The Macroeconomic Architecture of Digital Inclusion: Impact of UPI on Indian Consumer Behavior",
    field: "Financial Economics & Technology Policy",
    mentorOrPublisher: "Published in International Journal of Social Science & Economic Research (IJSSER)",
    status: "Published in Peer-Reviewed Journal",
    year: "2024",
    abstract: "The Unified Payments Interface (UPI) developed by the National Payments Corporation of India (NPCI) represents one of the largest real-time retail payment transformations in global economic history. This study conducts an empirical investigation into the microeconomic adoption mechanisms and macroeconomic spillover effects of zero-fee instant digital payments. Drawing upon aggregate transaction data and demographic surveys across tier-1, tier-2, and semi-rural merchant clusters, the paper analyzes the transition from cash liquidity preference to digital transactional velocity, velocity effects on GDP, and the formalization of unbanked street vendors and micro-merchants.",
    methodology: "Synthesized econometric data across 24 quarters of NPCI transaction logs, correlating UPI monthly volume growth with formal credit underwriting expansions, rural micro-savings data, and consumption velocity indices. Utilized regression analysis to identify demographic adoption friction points across age cohorts and linguistic backgrounds.",
    findings: [
      "Documented exponential digital velocity acceleration: micro-merchants saw formal customer transaction frequency increase by 28% after QR deployment.",
      "Demonstrated that UPI infrastructure acted as an informal credit gateway, enabling previously uncollateralized vendors to access formal micro-loans via verified digital transaction histories.",
      "Identified lingering security anxiety among elderly cohorts, directly motivating the subsequent development of the ScamSlayer cybersecurity initiative."
    ],
    metrics: [
      { label: "Journal", value: "IJSSER (Peer-Reviewed)" },
      { label: "Methodology", value: "Econometric & Empirical" },
      { label: "Policy Impact", value: "Digital Financial Inclusion" }
    ],
    tags: ["UPI", "Financial Inclusion", "Fintech Economics", "NPCI", "Peer-Reviewed Research"],
    keyVisualType: "macro_upi"
  }
];

export const HONOURS: HonourItem[] = [
  {
    year: "2026",
    title: "Rabindra Ratna Puraskar — Science & Technology",
    issuer: "Government & Cultural Recognition Board, Karnataka",
    category: "Science & Technology",
    level: "National",
    description: "Conferred for exceptional technological contribution and societal impact in the state of Karnataka for architecting and deploying Persifolio to promote financial literacy among youth.",
    badge: "National Honour"
  },
  {
    year: "2025",
    title: "Research Science Institute (RSI-India) Scholar",
    issuer: "Center for Excellence in Education (CEE) & IIT / MIT Affiliated",
    category: "Research",
    level: "National",
    description: "Selected as one of only 30 high school researchers across all of India (<2% acceptance rate) for the prestigious MIT-affiliated summer research program, conducting advanced mathematics research under Dr. Kaushal Verma at IISc.",
    badge: "<2% Acceptance"
  },
  {
    year: "2025",
    title: "Patent Published: Dynamic AI Investment Recommendation System",
    issuer: "Office of the Controller General of Patents, Government of India",
    category: "Science & Technology",
    level: "National",
    description: "Patent Published for Persifolio: Dynamic AI based Investment Portfolio recommendation system with market simulation and risk profiling algorithms.",
    badge: "Patent Published"
  },
  {
    year: "2025",
    title: "Patent Published: Experiential Fraud-Recognition Training System",
    issuer: "Office of the Controller General of Patents, Government of India",
    category: "Science & Technology",
    level: "National",
    description: "Patent Published for ScamSlayer: Web-Based System for Experiential Fraud-Recognition Training Using Simulated Threat Scenarios for Vulnerable User Populations.",
    badge: "Patent Published"
  },
  {
    year: "2025",
    title: "CREST Gold Award — International",
    issuer: "British Science Association (BSA)",
    category: "Science & Technology",
    level: "International",
    description: "Awarded highest distinction (CREST Gold) by the British Science Association for the engineering design, algorithmic validation, and real-world deployment of the Persifolio fintech application.",
    badge: "International Gold"
  },
  {
    year: "2025",
    title: "HackHarvard India — 1st Place National Winner",
    issuer: "HackHarvard & Harvard University Mentorship Board",
    category: "Hackathon",
    level: "National",
    description: "Led 5-member interdisciplinary team to place #1 overall out of all competing teams nationwide in an intense 48-hour hackathon, designing an innovative AI educational web application.",
    badge: "1st Place Winner"
  },
  {
    year: "2025",
    title: "HackHarvard USA (Harvard University, Boston) — Undergrad Invitational",
    issuer: "HackHarvard Organizing Committee, Cambridge, MA",
    category: "Hackathon",
    level: "International",
    description: "Selected as one of only two high school teams nationally to be officially invited to compete in the prestigious undergraduates-only HackHarvard hackathon on campus at Harvard University in Boston.",
    badge: "Elite Invitational"
  },
  {
    year: "2025",
    title: "Portfolio Strategy Challenge — 1st Place Winner",
    issuer: "HDFC Credila Financial Services",
    category: "Leadership",
    level: "National",
    description: "Formulated winning comprehensive client portfolio allocation and quantitative asset risk strategy in nationwide investment pitch competition.",
    badge: "1st Place"
  },
  {
    year: "2025",
    title: "Cambridge ICE Distinction (International Certificate of Education)",
    issuer: "Cambridge Assessment International Education",
    category: "Academics",
    level: "School",
    description: "Awarded top Distinction honors in the Cambridge International Certificate of Education across an exhaustive curriculum of mathematics, sciences, and humanities.",
    badge: "Distinction"
  },
  {
    year: "2025",
    title: "Inventure Academy Award of Excellence: TechWhiz",
    issuer: "Inventure Academy",
    category: "Science & Technology",
    level: "School",
    description: "Officially recognized by the academic institution as among the top two best coders and software architects in the entire grade.",
    badge: "Top 2 Coders"
  },
  {
    year: "2025",
    title: "Inventure Academy Award of Excellence: Computer Science",
    issuer: "Inventure Academy",
    category: "Academics",
    level: "School",
    description: "Recognized as the singular Grade Topper in the subject of Computer Science for outstanding theoretical and practical mastery.",
    badge: "Grade Topper"
  },
  {
    year: "2024",
    title: "Inventure Academy Award of Excellence: Multiachiever Award",
    issuer: "Inventure Academy",
    category: "Leadership",
    level: "School",
    description: "Conferred as the most well-rounded student across academics, computational research, leadership, and public community service.",
    badge: "Well-Rounded Distinction"
  },
  {
    year: "2024",
    title: "Inventure Academy Award of Excellence: Community Outreach Award",
    issuer: "Inventure Academy",
    category: "Leadership",
    level: "School",
    description: "Awarded to the top two students demonstrating exceptional dedication to community outreach and welfare through 100K afforestation and tutoring.",
    badge: "Top 2 Outreach"
  },
  {
    year: "2024",
    title: "TiE Global Young Entrepreneurs Pitch Competition — Top 5 Finalist",
    issuer: "TiE Global (The Indus Entrepreneurs)",
    category: "Leadership",
    level: "National",
    description: "Placed in Top 5 teams city-wide pitching an end-to-end municipal garbage recycling and circular economy business operations plan.",
    badge: "Top 5 Finalist"
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "nineleaps",
    organization: "NineLeaps & Address Maker",
    role: "AI Summer Intern & Production Bot Engineer",
    period: "Summer 2024",
    type: "Internship",
    summary: "Worked alongside software architects building full-stack AI services, then transitioned to client-side deployment at Address Maker to construct a live production customer service bot.",
    deliverables: [
      "Engineered full-stack applications with HTML/CSS, Python-Flask, SQL, and SQLite backend architecture",
      "Implemented Retrieval-Augmented Generation (RAG) pipelines for contextual company knowledge grounding",
      "Designed and deployed production-grade GenAI chatbot with speech-to-text integration and multi-language support actively serving customers"
    ],
    skills: ["Python", "Flask", "SQLite", "RAG", "Speech-to-Text", "Enterprise Deployment"],
    verifiedImpact: "Production-grade system deployed on Address Maker client domain for live customer interactions."
  },
  {
    id: "inspirit-ai",
    organization: "Inspirit AI",
    role: "AI Summer Intern — Moneyball Project",
    period: "2024 (8 Weeks)",
    type: "Internship",
    summary: "Applied machine learning and predictive analytics to sports business metrics, simulating real-world front-office roster construction and valuation trade-offs under rigid payroll caps.",
    deliverables: [
      "Developed unsupervised k-means clustering models to uncover undervalued player performance archetypes",
      "Constructed cost-to-performance regression curves simulating executive budget allocations",
      "Presented predictive decision model to industry mentors from Stanford & MIT alumni"
    ],
    skills: ["Scikit-Learn", "Data Modeling", "Feature Engineering", "Sports Analytics", "Python"],
    verifiedImpact: "Simulated complete team management valuation strategy outperforming baseline payroll models."
  },
  {
    id: "istus-capital",
    organization: "Istus Capital",
    role: "Venture Strategy & Digital Architect",
    period: "2024 – Present",
    type: "Venture",
    summary: "Supported early-stage venture launch for family firm, designing digital architecture, market positioning, and competitive benchmarking across capital allocation services.",
    deliverables: [
      "Led comprehensive competitor analysis of mid-market wealth advisory and fintech platforms",
      "Designed and coded company web presence and digital information portal",
      "Collaborated with executive leadership on go-to-market and positioning strategies"
    ],
    skills: ["Market Research", "Product Strategy", "Web Design", "Competitor Benchmarking"],
    verifiedImpact: "Established initial online presence and strategic positioning framework for brand launch."
  },
  {
    id: "tech-for-change",
    organization: "Inventure Academy Tech for Change Club",
    role: "Creator & Lead Architect (Polaris & EVM)",
    period: "2023 – Present",
    type: "School Leadership",
    summary: "Led school technology teams to build public-good software, including PolarisAI.in and an eco-friendly electronic voting machine for student government elections.",
    deliverables: [
      "Spearheaded PolarisAI career pathway discovery platform",
      "Designed hardware-software eco-friendly EVM replacing paper ballots campus-wide",
      "Mentored junior high school developers in web and application development"
    ],
    skills: ["Leadership", "Product Management", "Systems Architecture", "Democracy Tech"],
    verifiedImpact: "Transformed student council elections to 100% paperless audit-verified voting."
  }
];

export const CERTIFICATIONS = [
  {
    title: "Certificate in Introduction to Data Science & AI",
    issuer: "Indian Institute of Technology (IIT) Madras",
    period: "Oct 2025 – Dec 2025",
    focus: "Supervised learning, deep neural networks, computational statistics, and mathematical foundations."
  },
  {
    title: "FinTech: Foundations & Applications Specialization",
    issuer: "The Wharton School, University of Pennsylvania",
    period: "2024",
    focus: "Four-part specialization covering Fintech Foundations, Payments & Regulations, Cryptocurrency & Blockchain, and Modern Lending & Crowdfunding."
  },
  {
    title: "Behavioral Economics & Decision-Making Frameworks",
    issuer: "Foundational Coursework (Coursera)",
    period: "2024",
    focus: "Risk perception, cognitive biases, prospect theory, and market psychology in competitive financial settings."
  }
];

export const TICKER_ITEMS = [
  { label: "MARKET STATUS", value: "OPEN", tone: "positive" },
  { label: "TECH:PERSI", value: "4,000+ USERS", tone: "positive" },
  { label: "RES:CHAOS", value: "UNDER REVIEW (JEI)", tone: "neutral" },
  { label: "RES:HINGLISH", value: "94.89% ACC", tone: "positive" },
  { label: "PATENTS", value: "2 PUBLISHED", tone: "positive" },
  { label: "RSI-INDIA", value: "<2% ACCEPTANCE", tone: "positive" },
  { label: "ENV:MIYAWAKI", value: "100K TREES", tone: "positive" },
  { label: "EQUITY PORTFOLIO", value: "+55% (2-YR)", tone: "positive" },
  { label: "COMMUNITY", value: "1,000+ SENIORS", tone: "positive" },
  { label: "HACKHARVARD", value: "#1 NATIONAL WINNER", tone: "positive" },
  { label: "CREST", value: "GOLD DISTINCTION", tone: "positive" },
  { label: "HDFC CREDILA", value: "1ST PLACE PITCH", tone: "positive" },
];
