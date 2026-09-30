export interface GalleryAsset {
  id: string;
  title: string;
  category: 'awards' | 'outreach' | 'environment' | 'persifolio' | 'experience' | 'education' | 'athletics';
  caption: string;
  date: string;
  organization: string;
  location?: string;
  badge?: string;
  verified?: boolean;
  type: 'certificate' | 'photo' | 'media' | 'diagram';
  visualKey: string;
  metadata?: { label: string; value: string }[];
}

export const GALLERY_ASSETS: GalleryAsset[] = [
  // ==========================================
  // 1. HONORS, AWARDS & ACADEMIC RECOGNITIONS
  // ==========================================
  {
    id: 'crest-gold',
    title: 'CREST Gold Award — British Science Association',
    category: 'awards',
    caption: 'Conferred the highest international science distinction by the British Science Association (London, UK) for independent scientific rigor in "Persifolio: Customized Portfolio & Virtual Stock Investment Simulator".',
    date: '28 October 2025',
    organization: 'British Science Association (BSA), UK',
    location: 'London, UK / Inventure Academy',
    badge: 'International Gold Medal',
    verified: true,
    type: 'certificate',
    visualKey: 'crest-award',
    metadata: [
      { label: 'Award Level', value: 'Gold Distinction' },
      { label: 'Project', value: 'Persifolio Virtual Stock Simulator' },
      { label: 'Signatory', value: 'Dr. Heather King (VP Education, BSA)' }
    ]
  },
  {
    id: 'hackharvard-award',
    title: 'HackHarvard Challenge 2026 — First Position',
    category: 'awards',
    caption: 'Secured First Position nationwide in the HackHarvard Challenge 2026 hosted at Ashoka University. Selected as one of only two high school teams invited to HackHarvard USA in Boston.',
    date: 'February 2026',
    organization: 'HackHarvard & Ashoka University',
    location: 'Ashoka University, Sonipat / Harvard Campus',
    badge: '#1 National Winner',
    verified: true,
    type: 'certificate',
    visualKey: 'hackharvard-cert',
    metadata: [
      { label: 'Placement', value: 'First Position (#1 Team)' },
      { label: 'Co-Director', value: 'Luna Yin (HackHarvard)' },
      { label: 'Track', value: 'Education & Applied AI' }
    ]
  },
  {
    id: 'hackharvard-photo',
    title: 'HackHarvard Challenge 2026 Championship Cohort',
    category: 'awards',
    caption: 'Official group photograph on the Ashoka University campus lawn ("Where Ideas Became Reality - HackHarvard Challenge 2026", Learn with Leaders). Daksh Sawhney led the championship team.',
    date: 'January 2026',
    organization: 'HackHarvard & Learn with Leaders',
    location: 'Ashoka University Lawn, Haryana',
    badge: 'Winning Team Cohort',
    verified: true,
    type: 'photo',
    visualKey: 'hackharvard-group',
    metadata: [
      { label: 'Event', value: 'HackHarvard Challenge 2026' },
      { label: 'Format', value: '48-hour Intensive Hackathon' }
    ]
  },
  {
    id: 'rsi-stage-award',
    title: 'RSI-India Award Ceremony at IISc Faculty Hall',
    category: 'awards',
    caption: 'Daksh Sawhney in formal suit receiving the prestigious Research Science Initiative (RSI-India 2026) certificate on stage from Prof. Deepak K. Saini (Convenor, RSI-India, IISc) and Amy L. Sillman, PhD (Director, RSI-India).',
    date: 'Summer 2025 / 2026',
    organization: 'Indian Institute of Science (IISc) & CEE',
    location: 'Faculty Hall, IISc Bangalore',
    badge: '<2% Acceptance Finalist',
    verified: true,
    type: 'photo',
    visualKey: 'rsi-stage',
    metadata: [
      { label: 'Institution', value: 'Indian Institute of Science (IISc)' },
      { label: 'CEE President', value: 'Joann P. DiGennaro' },
      { label: 'Mentorship', value: 'Dr. Kaushal Verma (Dean of Math)' }
    ]
  },
  {
    id: 'rsi-iisc-cert',
    title: 'Research Science Initiative (RSI-India 2026) Certificate',
    category: 'awards',
    caption: 'Official Certificate of Completion for RSI-India 2026 sponsored by Center for Excellence in Education (CEE), Adani Group, and Indian Institute of Science.',
    date: '2026',
    organization: 'CEE & Indian Institute of Science (IISc)',
    location: 'Bangalore, India',
    badge: 'RSI India Fellow',
    verified: true,
    type: 'certificate',
    visualKey: 'rsi-cert-doc',
    metadata: [
      { label: 'Convenor', value: 'Prof. Deepak K. Saini (IISc)' },
      { label: 'President CEE', value: 'Joann P. DiGennaro' },
      { label: 'Director', value: 'Amy L. Sillman, PhD' }
    ]
  },
  {
    id: 'patent-persifolio',
    title: 'Official Patent Journal — Dynamic AI Portfolio Engine',
    category: 'persifolio',
    caption: 'Patent Published in The Patent Office Journal No. 01/2026: "Dynamic AI-Based Investment Portfolio Recommendation System with Market Simulation" (App: 202541127959 A / 202441088484), Inventor: Mr. Daksh Sawhney.',
    date: '02 January 2026',
    organization: 'The Patent Office, Government of India',
    location: 'New Delhi / Bangalore, Karnataka',
    badge: 'Govt. of India Patent',
    verified: true,
    type: 'certificate',
    visualKey: 'patent-doc',
    metadata: [
      { label: 'Application No.', value: '202541127959 A' },
      { label: 'Filing Date', value: '17/12/2025' },
      { label: 'Publication Date', value: '02/01/2026' }
    ]
  },
  {
    id: 'wharton-cert',
    title: 'Wharton Online — FinTech Foundations Specialization',
    category: 'education',
    caption: 'Completed 4-course specialization from Wharton Online, University of Pennsylvania covering Payments, Cryptocurrencies, Portfolio Optimization, and Lending.',
    date: '21 December 2025',
    organization: 'Wharton School, University of Pennsylvania',
    location: 'Philadelphia, PA',
    badge: 'Wharton Online Honors',
    verified: true,
    type: 'certificate',
    visualKey: 'wharton-cert',
    metadata: [
      { label: 'Director', value: 'Prof. David Musto (Stevens Center)' },
      { label: 'Verification', value: 'coursera.org/verify/specialization/40HE4VVR4K84' }
    ]
  },
  {
    id: 'iit-madras-cert',
    title: 'IIT Madras — Introduction to Data Science & AI',
    category: 'education',
    caption: 'Certificate of Completion for the 8-week certification course in Data Science and Artificial Intelligence from IIT Madras Centre for Outreach and Digital Education (CODE) School Connect.',
    date: 'October 2025',
    organization: 'Indian Institute of Technology (IIT) Madras',
    location: 'Chennai, India',
    badge: 'IIT Madras CODE',
    verified: true,
    type: 'certificate',
    visualKey: 'iit-madras',
    metadata: [
      { label: 'Chair', value: 'Prof. Andrew Thangaraj' },
      { label: 'Program', value: 'School Connect - Data Science & AI' }
    ]
  },
  {
    id: 'ccir-cambridge-cert',
    title: 'Cambridge Future Scholar — ML & NLP Research',
    category: 'education',
    caption: 'Certified as Cambridge Future Scholar by Cambridge Centre for International Research under Dr. Weiwei Sun (University of Cambridge) in Machine Learning & Natural Language Processing.',
    date: '17 March 2026',
    organization: 'Cambridge Centre for International Research (CCIR)',
    location: 'Cambridge Science Park, UK',
    badge: 'Cambridge Mentorship',
    verified: true,
    type: 'certificate',
    visualKey: 'ccir-cert',
    metadata: [
      { label: 'Mentor', value: 'Dr. Weiwei Sun (Univ. of Cambridge)' },
      { label: 'Subject', value: 'Machine Learning & NLP' }
    ]
  },
  {
    id: 'hdfc-credila-cert',
    title: 'HDFC Credila Portfolio Strategy Challenge — First Prize',
    category: 'awards',
    caption: 'Awarded First Prize in the nationwide Portfolio Strategy Challenge by HDFC Credila on February 10th 2024 for quantitative asset allocation and goal-immunization modeling.',
    date: '10 February 2024',
    organization: 'HDFC Credila Financial Services',
    location: 'Mumbai / Bangalore',
    badge: '1st Prize Winner',
    verified: true,
    type: 'certificate',
    visualKey: 'hdfc-credila',
    metadata: [
      { label: 'Signatory', value: 'Hitesh Parashar (Business Head)' },
      { label: 'Challenge', value: 'Portfolio Strategy Challenge' }
    ]
  },
  {
    id: 'inventure-cs-award',
    title: 'Inventure Academy Award of Excellence — Computer Science Topper',
    category: 'education',
    caption: 'Presented by Principal Meenakshi Myer and CEO Nooraine Fazal recognizing Daksh Sawhney as Subject Topper in Computer Science for Grade 11D (Academic Year 2025 - 2026).',
    date: 'Academic Year 2025 - 2026',
    organization: 'Inventure Academy',
    location: 'Whitefield Sarjapur Campus, Bangalore',
    badge: 'Subject Topper',
    verified: true,
    type: 'certificate',
    visualKey: 'inventure-cs',
    metadata: [
      { label: 'Subject', value: 'Computer Science' },
      { label: 'Grade', value: 'Grade 11D Subject Topper' }
    ]
  },
  {
    id: 'inventure-outreach-award',
    title: 'Inventure Academy Community Outreach Award',
    category: 'awards',
    caption: 'Conferred in recognition of exceptional community impact through 100,000-tree Miyawaki urban afforestation and senior citizen cybersecurity workshops (Grade 10D, 2024 - 2025).',
    date: 'Academic Year 2024 - 2025',
    organization: 'Inventure Academy',
    location: 'Bangalore, Karnataka',
    badge: 'Top Outreach Distinction',
    verified: true,
    type: 'certificate',
    visualKey: 'inventure-outreach',
    metadata: [
      { label: 'Award', value: 'Community Outreach Award' }
    ]
  },

  // ==========================================
  // 2. ATHLETIC HONORS & SPORTS MERIT AWARDS
  // ==========================================
  {
    id: 'inventure-shotput-annual',
    title: 'Inventure Academy Annual Athletics Meet — Second in Shotput',
    category: 'awards',
    caption: 'Certificate of Merit awarded to Daksh Sawhney of Inventors House for securing Second Place in Shotput, Division 8 - Boys at the Annual Athletics Meet (03/11/2025).',
    date: '03 November 2025',
    organization: 'Inventure Academy Sports Department',
    location: 'Bangalore, India',
    badge: 'Second Place (Silver)',
    verified: true,
    type: 'certificate',
    visualKey: 'inventure-shotput-1',
    metadata: [
      { label: 'House', value: 'Inventors House' },
      { label: 'Event', value: 'Shotput, Division 8 - Boys' },
      { label: 'Head of Sports', value: 'Kishen Whabi' }
    ]
  },
  {
    id: 'inventure-sportsfest-shotput',
    title: 'Inventure Sports Fest 2025-2026 — Second in Shotput',
    category: 'awards',
    caption: 'Certificate of Merit from Inventure Academy & ISF congratulating Daksh Sawhney for placing Second in Grade 12 & Below Boys Shotput at the Inventure Sports Fest.',
    date: 'Sports Fest 2025 - 2026',
    organization: 'Inventure Academy & ISF',
    location: 'Bangalore, India',
    badge: 'Second Place',
    verified: true,
    type: 'certificate',
    visualKey: 'inventure-shotput-2',
    metadata: [
      { label: 'Division', value: 'Grade 12 & Below - Boys' },
      { label: 'Discipline', value: 'Shotput' }
    ]
  },
  {
    id: 'tisb-aquatic-butterfly',
    title: 'TISB Inter School Aquatic Championship — 3rd in 25m Butterfly',
    category: 'awards',
    caption: 'Certificate of Merit from The International School Bangalore (TISB) certifying Daksh Sawhney won 3rd Place in 25m Butterfly (Division C Boys, 18/10/2022).',
    date: '18 October 2022',
    organization: 'The International School Bangalore (TISB)',
    location: 'TISB Aquatic Center, Bangalore',
    badge: 'Third Place Bronze',
    verified: true,
    type: 'certificate',
    visualKey: 'tisb-butterfly',
    metadata: [
      { label: 'Event', value: '25m Butterfly' },
      { label: 'Division', value: 'Division C Boys' }
    ]
  },
  {
    id: 'tisb-aquatic-backstroke',
    title: 'TISB Inter School Aquatic Championship — 3rd in 25m Backstroke',
    category: 'awards',
    caption: 'Certificate of Merit from The International School Bangalore (TISB) certifying Daksh Sawhney won 3rd Place in 25m Backstroke (Division C Boys, 18/10/2022).',
    date: '18 October 2022',
    organization: 'The International School Bangalore (TISB)',
    location: 'TISB Aquatic Center, Bangalore',
    badge: 'Third Place Bronze',
    verified: true,
    type: 'certificate',
    visualKey: 'tisb-backstroke',
    metadata: [
      { label: 'Event', value: '25m Backstroke' },
      { label: 'Division', value: 'Division C Boys' }
    ]
  },
  {
    id: 'tisb-track-shotput',
    title: 'TISB Inter School Track & Field Meet — First Place Shot Put',
    category: 'awards',
    caption: 'Certificate of Merit awarded to Daksh Sawhney for winning FIRST PLACE in Shot Put (8 and Below Boys, 01/11/2022) at TISB Inter School Track & Field Meet.',
    date: '01 November 2022',
    organization: 'The International School Bangalore (TISB)',
    location: 'Bangalore, India',
    badge: 'First Place Gold',
    verified: true,
    type: 'certificate',
    visualKey: 'tisb-shotput',
    metadata: [
      { label: 'Event', value: 'Shot Put' },
      { label: 'Category', value: '8 and Below Boys' },
      { label: 'Place', value: 'FIRST PLACE' }
    ]
  },
  {
    id: 'tisb-track-relay',
    title: 'TISB Inter School Track & Field Meet — Second Place 600m Relay',
    category: 'awards',
    caption: 'Certificate of Merit awarded to Daksh Sawhney for placing SECOND in 600m Relay (8 and Below Boys) at TISB Inter School Track & Field Meet.',
    date: '01 November 2022',
    organization: 'The International School Bangalore (TISB)',
    location: 'Bangalore, India',
    badge: 'Second Place Silver',
    verified: true,
    type: 'certificate',
    visualKey: 'tisb-relay',
    metadata: [
      { label: 'Event', value: '600m Relay' },
      { label: 'Category', value: '8 and Below Boys' }
    ]
  },
  {
    id: 'isso-national-games',
    title: 'ISSO National Games 2022-2023 — Badminton Under 17 Boys',
    category: 'awards',
    caption: 'Participation Certificate in Badminton Under 17 Boys at the ISSO National Games (Affiliated to School Games Federation of India) held at BGS International Academia.',
    date: '20-23 September 2022',
    organization: 'International Schools Sports Organisation (SGFI)',
    location: 'BGS International Academia, Bangalore',
    badge: 'National Participant',
    verified: true,
    type: 'certificate',
    visualKey: 'isso-badminton',
    metadata: [
      { label: 'Discipline', value: 'Badminton Under 17 Boys' },
      { label: 'Affiliation', value: 'School Games Federation of India' }
    ]
  },

  // ==========================================
  // 3. PERSIFOLIO FINTECH COLLEGE LAUNCH & SEMINARS
  // ==========================================
  {
    id: 'persifolio-flyer-students',
    title: 'College Students Adopting Persifolio via QR Pamphlets',
    category: 'persifolio',
    caption: 'College students seated in lecture hall holding printed green Persifolio brochures ("Persifolio - Invest in Comfort by Daksh Sawhney") with direct Google Play download QR codes.',
    date: '2025',
    organization: 'Persifolio Adoption Campaign',
    location: 'Bangalore College Campus',
    badge: '4,000+ App Users',
    verified: true,
    type: 'photo',
    visualKey: 'persifolio-pamphlet-students',
    metadata: [
      { label: 'Pamphlet', value: 'Invest in Comfort by Daksh Sawhney' },
      { label: 'Distribution', value: 'Direct QR Code Google Play Install' }
    ]
  },
  {
    id: 'persifolio-flyer-endorse',
    title: 'Student Thumbs-Up Endorsement with Persifolio Guide',
    category: 'persifolio',
    caption: 'Female college student smiling and giving a thumbs-up while holding the green Persifolio brochure explaining automated portfolio allocation and virtual stock investments.',
    date: '2025',
    organization: 'Persifolio User Feedback',
    location: 'Bangalore, India',
    badge: 'Student Endorsement',
    verified: true,
    type: 'photo',
    visualKey: 'persifolio-student-thumbsup',
    metadata: [
      { label: 'Feedback', value: 'Demystifying youth equity investing' },
      { label: 'Feature', value: 'Virtual Stock Trading Engine' }
    ]
  },
  {
    id: 'persifolio-whatis-lecture',
    title: 'Keynote Lecture: "What is Investment?" at College Auditorium',
    category: 'persifolio',
    caption: 'Daksh Sawhney delivering opening keynote "What is Investment?" on stage with slide deck explaining asset compounding, risk tolerance, and dynamic portfolio balancing.',
    date: '2025',
    organization: 'Persifolio Financial Literacy Initiative',
    location: 'College Auditorium, Bangalore',
    badge: 'Keynote Speaker',
    verified: true,
    type: 'photo',
    visualKey: 'persifolio-lecture-intro',
    metadata: [
      { label: 'Slide Title', value: 'What is Investment? Risk vs Return' },
      { label: 'Audience', value: '150+ College Undergraduates' }
    ]
  },
  {
    id: 'persifolio-metrics-lecture',
    title: 'Comparative Financial Risk Metrics Slide Presentation',
    category: 'persifolio',
    caption: 'Auditorium view facing the projector screen showing side-by-side risk matrices and investment allocation logic to collegiate attendees.',
    date: '2025',
    organization: 'Persifolio Academic Seminar',
    location: 'Bangalore Campus Hall',
    badge: 'Classroom Workshop',
    verified: true,
    type: 'photo',
    visualKey: 'persifolio-lecture-screen',
    metadata: [
      { label: 'Topic', value: 'Portfolio Diversification Metrics' }
    ]
  },
  {
    id: 'persifolio-hall-crowd',
    title: 'Packed Auditorium: Youth Financial Literacy Masterclass',
    category: 'persifolio',
    caption: 'Panoramic view of students seated at auditorium benches attentively participating in Daksh Sawhney\'s youth investing and wealth accumulation workshop.',
    date: '2025',
    organization: 'Persifolio Outreach',
    location: 'Bangalore Campus Auditorium',
    badge: 'Auditorium Masterclass',
    verified: true,
    type: 'photo',
    visualKey: 'persifolio-hall-workshop',
    metadata: [
      { label: 'Reach', value: 'Over 150 students per session' }
    ]
  },
  {
    id: 'persifolio-classroom-podium',
    title: 'Daksh at Classroom Podium Demonstrating Wealth Engine',
    category: 'persifolio',
    caption: 'Daksh Sawhney standing at classroom lectern addressing secondary and collegiate students during interactive financial budgeting and portfolio design workshop.',
    date: '2025',
    organization: 'Inventure Tech for Change & Persifolio',
    location: 'Academic Lecture Hall, Bangalore',
    badge: 'Podium Presentation',
    verified: true,
    type: 'photo',
    visualKey: 'persifolio-classroom-seminar',
    metadata: [
      { label: 'Focus', value: 'Algorithmic Asset Allocation' }
    ]
  },
  {
    id: 'persifolio-shawl-stage',
    title: 'Traditional Shawl Felicitation on Stage — St. Jerome College',
    category: 'persifolio',
    caption: 'Daksh Sawhney being honored with a traditional ceremonial shawl by faculty leadership at St. Jerome College with the "Thank you!" closing slide visible on stage.',
    date: '2025',
    organization: 'St. Jerome College & Persifolio',
    location: 'St. Jerome College Auditorium',
    badge: 'Institutional Honor',
    verified: true,
    type: 'photo',
    visualKey: 'persifolio-stage-felicitation',
    metadata: [
      { label: 'Venue', value: 'St. Jerome College Auditorium' },
      { label: 'Recognition', value: 'Ceremonial Shawl Felicitation' }
    ]
  },
  {
    id: 'tribes-cert-doc',
    title: 'TribesforGOOD & ThinkSharp — Financial Management Advocate',
    category: 'outreach',
    caption: 'Certificate of Completion for 25 hours of community service conducting awareness workshops on Shrinkflation and peer financial management for economically weaker sections.',
    date: 'May 2024',
    organization: 'TribesforGOOD & ThinkSharp Foundation',
    location: 'Mumbai & Bangalore',
    badge: 'NGO Student Advocate',
    verified: true,
    type: 'certificate',
    visualKey: 'tribes-cert',
    metadata: [
      { label: 'Founder', value: 'Mandeep Kaur (TribesforGOOD)' },
      { label: 'Partner', value: 'Santosh Phad (Thinksharp Foundation)' }
    ]
  },

  // ==========================================
  // 4. SCAMSLAYER SENIOR CITIZEN OUTREACH (ALL WORKSHOP PHOTOS)
  // ==========================================
  {
    id: 'outlook-media',
    title: 'Outlook India National Media Profile on ScamSlayer',
    category: 'outreach',
    caption: 'Full national news feature published in Outlook India documenting Daksh Sawhney conducting elder cyber defense and digital fraud prevention sessions in Bangalore.',
    date: '04 September 2026',
    organization: 'Outlook India Media Network',
    location: 'Bangalore Elder Care Residential Facility',
    badge: 'National Press Feature',
    verified: true,
    type: 'media',
    visualKey: 'outlook-feature',
    metadata: [
      { label: 'Publication', value: 'Outlook India (Nexa Desk)' },
      { label: 'Headline', value: 'Empowering Senior Citizens Against Cyber Fraud' }
    ]
  },
  {
    id: 'scam-workshop-wide',
    title: 'Elder Care Courtyard Assembly: Digital Arrest Threats',
    category: 'outreach',
    caption: 'Daksh Sawhney speaking in the open courtyard of a Bangalore senior living home, demonstrating how scammers orchestrate digital arrest extortion schemes and spoof official badges.',
    date: '2024 - 2025',
    organization: 'ScamSlayer Outreach Initiative',
    location: 'Senior Care Home, Bangalore',
    badge: '1,000+ Seniors Protected',
    verified: true,
    type: 'photo',
    visualKey: 'scam-workshop-wide',
    metadata: [
      { label: 'Audience', value: 'Elderly Residents & Caretakers' },
      { label: 'Topic', value: 'Digital Arrest & KYC Spoofing' }
    ]
  },
  {
    id: 'scam-workshop-demo',
    title: 'Live Threat Simulator Demonstration on Laptop',
    category: 'outreach',
    caption: 'Daksh with presentation laptop set up on small tablecloth stand in the elder care courtyard, running the ScamSlayer interactive red-flag simulator for attendees.',
    date: '2025',
    organization: 'ScamSlayer & TribesforGOOD',
    location: 'Bangalore Senior Residence',
    badge: 'Interactive Simulator',
    verified: true,
    type: 'photo',
    visualKey: 'scam-laptop-demo',
    metadata: [
      { label: 'Tool', value: 'ScamSlayer Simulation Engine' }
    ]
  },
  {
    id: 'scam-workshop-qa',
    title: 'Q&A: Senior Citizens Discussing Suspicious WhatsApp Messages',
    category: 'outreach',
    caption: 'Senior citizens seated along courtyard walls actively engaging with Daksh, asking questions regarding SMS electricity bill scams, bank OTPs, and deceptive lottery notifications.',
    date: '2025',
    organization: 'ScamSlayer',
    location: 'Senior Care Facility, Bangalore',
    badge: 'Interactive Q&A',
    verified: true,
    type: 'photo',
    visualKey: 'scam-elder-engagement',
    metadata: [
      { label: 'Topics', value: 'WhatsApp Scams & Banking OTP' }
    ]
  },
  {
    id: 'scam-workshop-sister',
    title: 'Consultation with Care Home Sister Administrator',
    category: 'outreach',
    caption: 'Daksh consulting with the nun superintendent and care staff to institutionalize a permanent fraud reporting protocol and emergency hotline contact card for all residents.',
    date: '2025',
    organization: 'ScamSlayer Elder Protection Drive',
    location: 'Care Home Courtyard, Bangalore',
    badge: 'Institutional Protocol',
    verified: true,
    type: 'photo',
    visualKey: 'scam-caretaker-sister',
    metadata: [
      { label: 'Collaborator', value: 'Elder Care Home Leadership' }
    ]
  },
  {
    id: 'scam-workshop-audience',
    title: 'Elder Residents Actively Listening to Fraud Warning Signs',
    category: 'outreach',
    caption: 'Close-up perspective of elder community members in wheelchairs and armchairs learning how to verify caller identity before sharing one-time passcodes.',
    date: '2025',
    organization: 'ScamSlayer Community Drive',
    location: 'Bangalore Senior Living Center',
    badge: 'Community Protection',
    verified: true,
    type: 'photo',
    visualKey: 'scam-elder-listening',
    metadata: [
      { label: 'Focus', value: 'Caller ID Spoofing & Phishing' }
    ]
  },

  // ==========================================
  // 5. MIYAWAKI URBAN AFFORESTATION (ALL FIELD PHOTOS)
  // ==========================================
  {
    id: 'ecity-forest-mature',
    title: 'Miyawaki Forest Canopy along Electronic City Road',
    category: 'environment',
    caption: 'Lush, mature, multi-layered native forest canopy established along the Electronic City highway corridor, creating an urban green buffer in Bangalore\'s tech hub.',
    date: '2024 - 2025',
    organization: 'Shades of Tomorrow "One Person One Tree"',
    location: 'Electronic City Corridor, Bangalore',
    badge: '100,000 Trees Planted',
    verified: true,
    type: 'photo',
    visualKey: 'ecity-forest',
    metadata: [
      { label: 'Site', value: 'Electronic City Urban Corridor' },
      { label: 'Methodology', value: 'Akira Miyawaki Ultra-Dense Planting' }
    ]
  },
  {
    id: 'chandapura-forest-dense',
    title: 'Thriving Biodiverse Miyawaki Forest at Chandapura Site',
    category: 'environment',
    caption: 'Dense native multi-tiered forest established at Chandapura Bangalore site, showcasing rapid vertical growth, understory species stratification, and high bird biodiversity.',
    date: '2024 - 2025',
    organization: 'Shades of Tomorrow Afforestation',
    location: 'Chandapura Urban Corridor, Bangalore',
    badge: 'Biodiversity Hotspot',
    verified: true,
    type: 'photo',
    visualKey: 'chandapura-forest',
    metadata: [
      { label: 'Site', value: 'Chandapura Micro-Forest' },
      { label: 'Growth Rate', value: '10x Faster than Conventional' }
    ]
  },
  {
    id: 'plantation-trench-prep',
    title: 'Linear Planting Trench & Staked Saplings with Perimeter Fence',
    category: 'environment',
    caption: 'Linear afforestation corridor prepared with layered organic compost, mulch substrate, and staked young saplings along protective boundary fencing.',
    date: '2024',
    organization: 'Shades of Tomorrow Ground Operations',
    location: 'Bangalore East Afforestation Belt',
    badge: 'Soil Conditioning',
    verified: true,
    type: 'photo',
    visualKey: 'plantation-trench-prep',
    metadata: [
      { label: 'Technique', value: 'Organic Soil Inoculation & Trenching' }
    ]
  },
  {
    id: 'plantation-daksh-mask',
    title: 'Daksh Inspecting Native Seedlings and Soil Hydration on Site',
    category: 'environment',
    caption: 'Daksh Sawhney on field wearing protective mask and blue shorts inspecting healthy root balls of native saplings prior to excavation and bedding.',
    date: '2024',
    organization: 'Shades of Tomorrow',
    location: 'Electronic City Plantation Site',
    badge: 'On-Ground Founder',
    verified: true,
    type: 'photo',
    visualKey: 'plantation-daksh-mask',
    metadata: [
      { label: 'Species Selected', value: 'Neem, Peepal, Pongamia, Jamun' }
    ]
  },
  {
    id: 'plantation-spade-digging',
    title: 'Community Digging & Soil Excavation Drive with Spade',
    category: 'environment',
    caption: 'Daksh and co-volunteer using a spade to dig pits in rich amended soil, planting native trees in high-density proximity as per Miyawaki science.',
    date: '2024',
    organization: 'Shades of Tomorrow Team',
    location: 'Bangalore East Belt',
    badge: 'Community Mobilization',
    verified: true,
    type: 'photo',
    visualKey: 'plantation-spade-digging',
    metadata: [
      { label: 'Team Size', value: '30+ Student & Resident Volunteers' }
    ]
  },
  {
    id: 'plantation-sarjapur-watering',
    title: 'Sarjapur Corridor Hydration & Soil Stabilization',
    category: 'environment',
    caption: 'Daksh pouring water from a green watering can onto a newly bedded native sapling to ensure optimal initial root moisture along the Sarjapur corridor.',
    date: '2024',
    organization: 'Shades of Tomorrow & EcoWeave',
    location: 'Sarjapur Road Corridor, Bangalore',
    badge: 'Active Hydration Care',
    verified: true,
    type: 'photo',
    visualKey: 'plantation-sarjapur-watering',
    metadata: [
      { label: 'Monitoring', value: 'EcoWeave Digital Tree Tracker' }
    ]
  },
  {
    id: 'plantation-active-bedding',
    title: 'Plantation Phase: Root Ball Positioning & Soil Compaction',
    category: 'environment',
    caption: 'Daksh carefully bedding native saplings into prepared organic soil pits to establish strong symbiotic mycorrhizal networks.',
    date: '2024',
    organization: 'Shades of Tomorrow',
    location: 'Bangalore Industrial Corridor',
    badge: 'Symbiotic Planting',
    verified: true,
    type: 'photo',
    visualKey: 'plantation-drive-rootball',
    metadata: [
      { label: 'Density', value: '3-4 saplings per square meter' }
    ]
  },

  // ==========================================
  // 6. APPLIED RESEARCH & INDUSTRY ML
  // ==========================================
  {
    id: 'ai-sports-analytics',
    title: 'Inspirit AI — Predictive Sports Analytics & Dynamic Valuation',
    category: 'experience',
    caption: 'Applied machine learning clustering and regression algorithms to model player valuation, salary efficiency, and tactical ball-tracking metrics under Stanford alumni mentorship.',
    date: '2024',
    organization: 'Inspirit AI (Stanford & MIT Alumni Mentorship)',
    location: 'Silicon Valley / Virtual',
    badge: 'Machine Learning ML',
    verified: true,
    type: 'diagram',
    visualKey: 'sports-ai-diagram',
    metadata: [
      { label: 'Stack', value: 'Python, NumPy, Scikit-Learn' },
      { label: 'Mentors', value: 'Stanford AI Lab Alumni' }
    ]
  }
];
