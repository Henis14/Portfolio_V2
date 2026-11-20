import { Degree, Job, Profile, Project, SkillGroup } from '../models/portfolio.models';

export const PROFILE: Profile = {
  name: "Henis D'costa",
  role: 'Full Stack Developer',
  stack: '.NET Core and Angular',
  email: 'henisdcosta02@gmail.com',
  phone: '+91 8780983058',
  phoneHref: 'tel:+918780983058',
  github: 'https://github.com/Henis14',
  linkedin: 'https://www.linkedin.com/in/henisd14/',
  resumePdf: 'Henis_Dcosta_Resume.pdf',
  photo: 'profile.jpg',
  summary:
    'Full Stack Developer with 2 years of experience building and maintaining scalable web applications on the .NET Core and Angular stack. I currently maintain and enhance H8SSRMS (Height8 Service, Subscriber and Revenue Management System), a live production telecom SaaS platform, working across database design, RESTful API development and full-stack debugging. Master of Computer Applications (MCA) graduate.',
  availability: 'Open to freelance and part-time projects',
  availabilityDetail:
    "I am open to freelance and part-time projects. If you need a website, a web application, an admin dashboard or help with an existing .NET or Angular codebase, let's talk.",
  freelance:
    'I also freelance as a Full Stack Developer, designing and building full-stack web applications on the .NET Core and Angular stack for clients across different domains.',
};

export const SKILLS: SkillGroup[] = [
  {
    title: 'Languages & Frameworks',
    items: [
      'C#',
      '.NET Core',
      'ASP.NET MVC',
      'ASP.NET Web Forms',
      'ADO.NET',
      'LINQ',
      'Angular',
      'TypeScript',
      'JavaScript',
      'HTML5',
      'CSS3',
    ],
  },
  {
    title: 'Database',
    items: ['SQL Server', 'T-SQL', 'Stored Procedures', 'Database Design & Optimization', 'MySQL'],
  },
  {
    title: 'API & Integration',
    items: ['RESTful API Design & Development', 'Third-Party API Integration', 'JSON', 'Postman'],
  },
  {
    title: 'Tools & Practices',
    items: ['Git', 'GitHub', 'Visual Studio', 'VS Code', 'Agile / Scrum', 'Debugging & Hotfixing'],
  },
];

export const EXPERIENCE: Job[] = [
  {
    company: 'Height 8 Technologies Pvt Ltd',
    role: 'Full Stack Developer',
    period: 'Jun 2025 - Present',
    intro:
      "H8SSRMS (Height8 Service, Subscriber and Revenue Management System) is a telecom software solution designed to manage a company's interactions with customers, clients and sales prospects.",
    points: [
      'Maintain and enhance the H8SSRMS product by developing new features and improving overall application performance and reliability.',
      'Design, build and optimize database structures and queries in SQL Server to support evolving product requirements.',
      'Integrate third-party REST APIs to extend product functionality and streamline data exchange between systems.',
      'Identify, debug and resolve production issues and bugs across the front end and back end to ensure application stability.',
    ],
  },
  {
    company: 'Prudent Corporate Advisory Services Ltd.',
    role: 'Full Stack Developer Intern',
    period: 'Jan 2025 - Jun 2025',
    points: [
      'Gained hands-on training in full-stack development, working across the .NET and Angular stack to build and maintain software applications.',
      'Assisted in developing, testing and maintaining application features, building a strong foundation in real-world software engineering practices.',
    ],
  },
];

export const EDUCATION: Degree[] = [
  {
    title: 'Master of Computer Applications',
    short: 'MCA',
    school: 'Indus University',
    period: '2023 - 2025',
    score: 'CGPA 9.96 / 10',
  },
  {
    title: 'Bachelor of Computer Applications',
    short: 'BCA',
    school: "St. Xavier's College, Ahmedabad",
    period: '2020 - 2023',
    score: 'CGPA 7.2 / 10',
  },
];

const shots = (slug: string, names: [string, string][]) =>
  names.map(([file, caption]) => ({ src: `projects/${slug}/${file}.jpg`, caption }));

export const PROJECTS: Project[] = [
  {
    slug: 'h8ssrms',
    no: '01',
    title: 'H8SSRMS',
    kind: 'Professional',
    domain: 'Telecom SaaS',
    stack: ['SQL Server', 'Third-party REST APIs', 'Front end & back end'],
    blurb:
      'Maintaining and enhancing a live production telecom SaaS platform for service, subscriber and revenue management.',
    details: [EXPERIENCE[0].intro!, ...EXPERIENCE[0].points],
    logo: 'projects/h8ssrms/logo.png',
    coverBg: '#ebe6da',
  },
  {
    slug: 'the-beyond-frames',
    no: '02',
    title: 'The Beyond Frames',
    kind: 'Client',
    domain: 'Website & admin dashboard',
    stack: ['Angular'],
    blurb:
      'A fully responsive, brand-aligned website with a dynamic admin dashboard, built for a client.',
    details: [
      'Developed a fully responsive, brand-aligned website with a dynamic admin dashboard for a client, delivering a rich, polished user experience tailored to their vision.',
    ],
    logo: 'projects/the-beyond-frames/logo.png',
    coverBg: '#fdf1f5',
    screens: shots('the-beyond-frames', [
      ['01-home', 'Home'],
      ['02-about', 'About'],
      ['03-services', 'Services'],
      ['04-gallery', 'Gallery'],
      ['05-contact', 'Contact'],
    ]),
    url: 'https://thebeyondframes.com',
    onResume: true,
  },
  {
    slug: 'khel-akhel',
    no: '03',
    title: 'Khel-Akhel',
    kind: 'Client',
    domain: 'Art store & studio site',
    stack: ['Angular', '.NET', 'SQL Server'],
    blurb:
      'A storefront for DARAS, the Patiala studio of artist Darshan Singh Grewal, selling handmade art prints, lamps, murals and objects.',
    details: [
      'Online home for Khel-Akhel, the creative world of the DARAS studio, presenting handmade art prints, lamps, murals and objects.',
      'Angular client backed by a .NET server and a SQL Server database.',
    ],
    logo: 'projects/khel-akhel/logo.png',
    coverBg: '#f1ece2',
    screens: shots('khel-akhel', [
      ['01-shop-lamps', 'Shop: lamps'],
      ['02-product-quick-view', 'Product quick view'],
      ['03-projects', 'Projects'],
      ['04-footer', 'Store highlights and footer'],
      ['05-contact', 'Contact'],
      ['06-sign-in', 'Sign in'],
    ]),
  },
  {
    slug: 'kd-house-of-jewellery',
    no: '04',
    title: 'KD House Of Jewellery',
    kind: 'Client',
    domain: 'Jewellery e-commerce',
    stack: ['Angular', '.NET', 'SQL Server'],
    blurb:
      'An online store for handcrafted imitation jewellery with new arrivals, best sellers and designer collections.',
    details: [
      'Online shop for handcrafted imitation jewellery, covering new arrivals, best sellers and designer collections.',
      'Angular client backed by a .NET server and a SQL Server database.',
    ],
    logo: 'projects/kd-house-of-jewellery/logo.png',
    coverBg: '#ffffff',
    screens: shots('kd-house-of-jewellery', [
      ['01-home', 'Home'],
      ['02-shop', 'Shop with filters'],
      ['03-product-detail', 'Product detail'],
      ['04-contact', 'Contact'],
      ['05-sign-in', 'Sign in'],
    ]),
  },
  {
    slug: 'e-kyc-verification',
    no: '05',
    title: 'e-KYC Verification',
    kind: 'Module',
    domain: 'Digital identity',
    stack: ['Real-time facial motion capture'],
    blurb:
      'An e-KYC module with real-time facial motion capture for secure digital identity verification and onboarding.',
    details: [
      'Built an e-KYC verification module with real-time facial motion capture to streamline digital identity verification, enhancing secure customer onboarding through robust verification protocols and an intuitive user interface.',
    ],
    logo: 'projects/e-kyc-verification/logo.png',
    coverBg: '#ffffff',
    screens: shots('e-kyc-verification', [
      ['01-login', 'Login'],
      ['02-register', 'Create account'],
      ['03-dashboard', 'Dashboard with KYC prompt'],
      ['04-kyc-form', 'KYC form'],
      ['05-bank-details', 'Bank details'],
      ['06-in-person-verification', 'In-person verification (IPV)'],
      ['07-account-status', 'Account status'],
    ]),
    onResume: true,
  },
  {
    slug: 'digicard',
    no: '06',
    title: 'Digicard',
    kind: 'Platform',
    domain: 'Credit cards & loans',
    stack: [],
    blurb:
      "One place to compare and apply for credit cards and loans across banks, based on the user's CIBIL score.",
    details: [
      'Developed a one-stop platform centralizing credit card and loan applications, enabling users to compare and apply for multiple credit cards and different types of loans across banks from a single location, based on their CIBIL score.',
    ],
    logo: 'projects/digicard/logo.png',
    coverBg: '#d32525',
    screens: shots('digicard', [
      ['01-home', 'Home'],
      ['02-cards', 'Card catalogue'],
      ['03-services', 'Services'],
      ['04-check-eligibility', 'Check eligibility'],
      ['05-apply', 'Apply'],
      ['06-track-status', 'Track application status'],
      ['07-contact', 'Contact'],
      ['08-admin-products', 'Admin: manage products'],
    ]),
    onResume: true,
  },
];
