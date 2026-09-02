export interface CaseStudy {
  id: string
  index: string
  title: string
  subtitle: string
  client: string
  role: string
  year: string
  type: string
  stack: string[]
  summary: string
  githubUrl?: string
  liveUrl?: string
  overview: string
  problem: string
  solution: string
  keyFeatures: string[]
  technicalWork: {
    database: string
    auth: string
    backend: string
    frontend: string
    pwaOrPerf: string
  }
  challenges: string
  whatILearned: string
  result: string
}

export interface SkillCategory {
  category: string
  skills: string[]
}

export interface TimelineEntry {
  period: string
  title: string
  organization: string
  type: 'project' | 'education' | 'work'
  details?: string
}

export const portfolioData = {
  personal: {
    name: 'Hafizul Irfan',
    fullName: 'Hafizul Irfan bin Ahmad Hilmi',
    title: 'Full-Stack Web Developer',
    roleTag: 'Diploma in IT Student',
    bioHeadline:
      'Diploma IT student building practical web systems for education, public services and digital platforms.',
    techSummary: 'Laravel · PHP · MySQL · JavaScript',
    aboutShort: [
      "I'm a Diploma in Information Technology student at Politeknik Besut Terengganu with a focus on web development.",
      "I enjoy working across the development process — from database design and backend logic to frontend interfaces and deployment.",
      "My recent work includes systems for student affairs, welfare management and digital learning.",
    ],
    education: {
      degree: 'Diploma in Information Technology',
      institution: 'Politeknik Besut Terengganu',
      period: '2024 — Present',
      cgpa: '3.20',
    },
    location: 'Based in Malaysia',
    status: 'Available for Internship',
    email: 'irfanhafizul123@gmail.com',
    phone: '017-976 4854',
    github: 'https://github.com/i0zfnr',
    resumeUrl: '/Hafizul_Irfan_Resume.pdf',
  },

  caseStudies: [
    {
      id: 'myokucare',
      index: '01',
      title: 'MyOKUCare',
      subtitle: 'Welfare Management System',
      client: 'Welfare management project',
      role: 'Full-Stack Developer',
      year: '2026',
      type: 'Web Application',
      stack: ['Laravel', 'PHP', 'MySQL', 'Blade', 'PWA'],
      summary:
        'A web application for disability records, welfare assistance requests and inclusive job matching.',
      overview:
        'MyOKUCare centralises registration for persons with disabilities (OKU), welfare assistance processing, and inclusive job matching into a unified, accessible web system. The platform provides structured digital workflows bridging community applicants with welfare officers and registered inclusive employers.',
      problem:
        'Welfare assistance processing and disability records were frequently delayed by manual paper document submissions and fragmented spreadsheet tracking. Applicants had no direct way to track application progress, and welfare officers faced repetitive manual verification cycles when preparing statutory reports.',
      solution:
        'Architected an end-to-end management platform using Laravel and MySQL. Designed role-based portals for OKU applicants, welfare officers, and employers—incorporating digital document verification, guided application pipelines, and structured case logs.',
      keyFeatures: [
        'OKU Profile Management & Verification: Structured onboarding capturing disability classifications, personal records, and Kad OKU verification uploads.',
        'Welfare Assistance Lifecycle: Multi-step assistance applications with clear status tracking from initial submission to officer review and committee decisions.',
        'Inclusive Job Matching Portal: Opportunity board connecting verified OKU jobseekers with inclusive employment listings based on capability tags.',
        'Administrative Reporting Dashboards: Consolidated administrative summary tools for welfare case distribution, district census, and auditing.',
      ],
      technicalWork: {
        database:
          'Normalized relational schema in MySQL modeling user identities, OKU profiles, disability categories, welfare aid schemes, application logs, and audit trails.',
        auth:
          'Session-based authentication with role-based access control (RBAC), rate-limiting login attempts by IP and email, and inactive account safeguards.',
        backend:
          'Constructed modular Laravel service classes (OkuDataService, WelfareReportService, AuditService) to separate domain logic from HTTP controllers.',
        frontend:
          'Responsive Blade templates built with accessible semantic HTML, high contrast ratios, readable typography, and complete keyboard navigation.',
        pwaOrPerf:
          'Configured service worker caching (sw.js) and web manifest (manifest.webmanifest) for offline resilience and mobile standalone installation.',
      },
      challenges:
        'Designing intuitive forms that strictly comply with accessibility standards (WCAG) for users with varied visual or physical capabilities, while securely handling sensitive personal data like IC numbers and official medical documents.',
      whatILearned:
        'Deepened practical knowledge of public sector workflow requirements, building maintainable RBAC architecture in Laravel, and structuring accessible form systems.',
      result:
        'Delivered a complete, functional prototype system ready for user acceptance testing (UAT) across welfare administration, officer review, and community applicant scenarios.',
    },
    {
      id: 'myhep',
      index: '02',
      title: 'MyHEP / StudentEdge',
      subtitle: 'Student Affairs Management System',
      client: 'Politeknik Besut Terengganu',
      role: 'Full-Stack Developer',
      year: '2026',
      type: 'Web Application',
      stack: ['Laravel', 'PHP', 'MySQL', 'Blade', 'PWA'],
      summary:
        'Developed for managing student affairs processes at Politeknik Besut Terengganu, centralizing scholarship applications, welfare aid, and disciplinary tracking.',
      githubUrl: 'https://github.com/i0zfnr/MyHEP',
      overview:
        'MyHEP (StudentEdge) is an institutional web platform created for the Student Affairs Department (Hal Ehwal Pelajar) of Politeknik Besut. It automates essential non-academic campus processes into a single secure, role-based interface.',
      problem:
        'Handling student welfare requests, scholarship vetting, and disciplinary records through physical paper forms caused slow turnaround times, missing paperwork, and high friction for administrative committees reviewing historical student records.',
      solution:
        'Engineered a centralized campus portal linking students, student affairs officers, and campus administrators. The platform digitizes scholarship applications, tracks emergency welfare aid, logs disciplinary conduct, and manages student movement permissions.',
      keyFeatures: [
        'Scholarship Application Workflow: Centralized catalog of campus and state scholarships with direct student filing and administrative vetting.',
        'Welfare & Emergency Aid Tracking: Formal request pipeline for financial aid and welfare support with administrative disbursement records.',
        'Disciplinary Record Management: Structured offense logging, incident tracking, and official administrative action oversight.',
        'Student Movement & Leave Logging: Digital tracking for student campus leave, hostel permits, and curfew compliance.',
      ],
      technicalWork: {
        database:
          'Relational MySQL schema linking student matrix registration numbers with scholarship submissions, disciplinary cases, and administrative decisions.',
        auth:
          'Multi-guard authentication separating student access from administrative and lecturer officer privilege levels.',
        backend:
          'Laravel controllers managing file uploads, request lifecycle transitions, validation rules, and activity logs.',
        frontend:
          'Clean, responsive Blade templates compiled via Vite for minimal asset footprint and fast page loads across campus networks.',
        pwaOrPerf:
          'Mobile-first responsive layout enabling students to submit leave applications and check scholarship statuses directly from their smartphones.',
      },
      challenges:
        'Enforcing strict data privacy boundaries so students can only access their own submissions while officers have appropriate administrative review privileges.',
      whatILearned:
        'Learned how campus administrative requirements translate into software architecture, and how to manage secure document uploads and multi-stage approval lifecycles.',
      result:
        'Produced an operational student management system that eliminates manual paper handling across core student affairs operations.',
    },
    {
      id: 'flipbook',
      index: '03',
      title: 'FlipBook',
      subtitle: 'Interactive E-Book Platform',
      client: 'Politeknik Besut Terengganu',
      role: 'Full-Stack Developer',
      year: '2025 – 2026',
      type: 'Web Application',
      stack: ['React', 'TypeScript', 'Laravel API', 'Tailwind CSS', 'Vite'],
      summary:
        'A responsive web platform for publishing and reading interactive digital learning materials and academic course modules across desktop and mobile devices.',
      overview:
        'FlipBook is a modern web-based academic e-book platform designed for Politeknik Besut to deliver digital learning modules, syllabus guides, and course materials with an interactive, book-like reading experience.',
      problem:
        'Students accessing academic PDF handouts on mobile devices frequently encountered awkward zooming, clunky navigation, and poor legibility that discouraged self-paced study.',
      solution:
        'Engineered an interactive e-book platform combining a responsive frontend reading engine with a structured backend content management API, offering smooth page-turn interactions, chapter navigation, and bookmarking.',
      keyFeatures: [
        'Interactive Page Reader: Page-turning engine with zoom controls, table of contents drawer, and distraction-free viewing mode.',
        'Course Module Catalog: Categorized academic library allowing students to browse coursework by semester and subject.',
        'Cross-Device Responsiveness: Seamless reading experience optimized for touch gestures on mobile and keyboard navigation on desktop.',
        'Fast Asset Delivery: Lightweight client-side rendering with asset preloading for instant page transitions.',
      ],
      technicalWork: {
        database:
          'Relational database modeling publication metadata, chapters, reader progress, and course categorizations.',
        auth:
          'API token authentication for administrative book uploads and student reading sessions.',
        backend:
          'Laravel REST API serving structured book metadata, chapter endpoints, and reading progress state.',
        frontend:
          'Constructed with React 19, TypeScript, and Vite for near-instant client execution and strict compile-time type safety.',
        pwaOrPerf:
          'Carefully minimized DOM overhead during continuous page rendering, using CSS hardware acceleration for smooth 60fps page turns.',
      },
      challenges:
        'Creating fluid page-flip animations without causing layout thrashing or battery drain on lower-spec student mobile devices.',
      whatILearned:
        'Gained practical experience with advanced CSS transforms, touch gesture event handling, and decoupling frontend interactive engines from backend content APIs.',
      result:
        'Delivered a lightweight, accessible digital reading platform adopted for academic coursework at Politeknik Besut.',
    },
  ] as CaseStudy[],

  skillsMatrix: [
    {
      category: 'Frontend',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'Blade', 'Responsive Design', 'React'],
    },
    {
      category: 'Backend',
      skills: ['PHP', 'Laravel', 'REST APIs', 'Node.js'],
    },
    {
      category: 'Database',
      skills: ['MySQL', 'Database Design', 'Relational Modeling'],
    },
    {
      category: 'Tools',
      skills: ['Git', 'GitHub', 'VS Code', 'Vite', 'Composer', 'npm'],
    },
    {
      category: 'Other',
      skills: ['PWA', 'UI/UX Design', 'Web Accessibility (WCAG)', 'Deployment'],
    },
  ] as SkillCategory[],

  timeline: [
    {
      period: '2026',
      title: 'Real-World Systems',
      organization: 'MyOKUCare · MyHEP/StudentEdge · FlipBook',
      type: 'project',
      details:
        'Developed MyOKUCare, MyHEP/StudentEdge, and FlipBook, moving from smaller programming projects toward complete web systems.',
    },
    {
      period: '2025–2026',
      title: 'Full-Stack Development',
      organization: 'Laravel · PHP · MySQL · JavaScript · PWA',
      type: 'project',
      details:
        'Moved into larger web projects using Laravel, PHP, MySQL, JavaScript, and PWA technologies.',
    },
    {
      period: '2024 — Present',
      title: 'Diploma in Information Technology',
      organization: 'Politeknik Besut Terengganu',
      type: 'education',
      details:
        'Continued my studies at Politeknik Besut Terengganu, expanding into web development, databases, networking, and software development.',
    },
    {
      period: '2022/2023',
      title: 'Computer Science',
      organization: 'Form 4 & 5 Foundation',
      type: 'education',
      details:
        'Studied Computer Science in Form 4, developing a stronger foundation in programming and computational thinking.',
    },
    {
      period: '2020',
      title: 'First Steps in Coding & Robotics',
      organization: 'Arduino & RBTX Petrosains',
      type: 'project',
      details:
        'Started exploring programming through Arduino and sumo robot development, later participating in an RBTX Petrosains robotics competition.',
    },
  ] as TimelineEntry[],
}
