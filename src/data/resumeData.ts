export interface ProjectItem {
  id: string
  title: string
  year: string
  organization: string
  badge: string
  description: string
  features: string[]
  tags: string[]
  highlight: string
}

export interface EducationItem {
  institution: string
  qualification: string
  period: string
  location: string
  cgpa?: string
  stream?: string
  grades?: string
  details: string[]
}

export interface WorkItem {
  role: string
  company: string
  period: string
  location: string
  responsibilities: string[]
}

export interface ReferenceItem {
  name: string
  title: string
  department: string
  institution: string
  phone: string
  email: string
}

export const resumeData = {
  personal: {
    fullName: 'HAFIZUL IRFAN BIN AHMAD HILMI',
    name: 'Hafizul Irfan',
    role: 'Diploma in Information Technology Student',
    subRole: 'Front-End & Web Developer',
    status: 'Seeking Internship Opportunity',
    about:
      'A dedicated Diploma in Information Technology student with strong interpersonal and problem-solving skills. Seeking an internship opportunity to apply academic knowledge, gain hands-on experience, and enhance professional growth. Able to work independently and collaboratively while maintaining a positive and responsible attitude.',
    email: 'irfanhafizul123@gmail.com',
    phone: '017-976 4854',
    intlPhone: '+60179764854',
    location: 'Besut, Terengganu & Kota Bharu, Kelantan',
    github: 'https://github.com/i0zfnr',
    instagram: 'https://www.instagram.com/xautsx/',
    tiktok: 'https://www.tiktok.com/@react.css',
    website: 'https://reallygreatsite.com',
  },
  highlights: [
    { label: 'Academic Standing', value: '3.20 CGPA', detail: 'Politeknik Besut' },
    { label: 'Real Systems Built', value: '3 Active Systems', detail: 'JKM & Politeknik Besut' },
    { label: 'Work Ethic', value: 'Frontline Retail', detail: 'Customer & Team Operations' },
    { label: 'Status', value: 'Ready for Internship', detail: 'IT & Software Development' },
  ],
  projects: [
    {
      id: 'myokucare',
      title: 'MyOKUCare – Welfare Management System',
      year: '2026',
      organization: 'Jabatan Kebajikan Masyarakat (JKM)',
      badge: 'Public Sector / Welfare',
      description:
        'Developed a comprehensive web-based welfare management system for Jabatan Kebajikan Masyarakat (JKM) designed to assist individuals with disabilities (OKU) through accessible digital services.',
      features: [
        'OKU profile management and digital record verification',
        'Streamlined welfare assistance application submission & approval tracking',
        'Specialized job matching module tailored for OKU opportunities',
        'Automated reporting dashboards and census compilation',
      ],
      tags: ['Web Application', 'Front-End', 'Web Accessibility', 'UI/UX Design', 'JKM'],
      highlight: 'Built with deep emphasis on accessibility standards, ease of use, and inclusive interaction.',
    },
    {
      id: 'myhep',
      title: 'MyHEP – Student Affairs Management System',
      year: '2026',
      organization: 'Politeknik Besut Terengganu',
      badge: 'Higher Education / Campus',
      description:
        'Developed a dedicated student affairs management system for Politeknik Besut Terengganu, centralizing non-academic student affairs and administrative services.',
      features: [
        'Student welfare aid monitoring and emergency welfare support',
        'Scholarship portal with application tracking and administrative vetting',
        'Student discipline incident recording and conduct oversight',
        'Student movement logging, campus permits, and hostel management',
      ],
      tags: ['Web Portal', 'Student Affairs', 'Front-End', 'Role-Based Flow', 'Politeknik Besut'],
      highlight: 'Simplifies complex campus workflows into an intuitive interface for students and administration.',
    },
    {
      id: 'flipbook',
      title: 'FlipBook – Interactive E-Book Platform',
      year: '2025 – 2026',
      organization: 'Politeknik Besut Terengganu',
      badge: 'EdTech / Interactive E-Book',
      description:
        'Developed an interactive web-based e-book platform for Politeknik Besut to provide students and faculty digital access to academic learning materials and coursework.',
      features: [
        'Interactive reading experience with intuitive navigation, zooming, and chapter browsing',
        'Centralized digital access to official learning modules, lecture notes, and references',
        'Fully responsive layout optimized for fluid reading across mobile, tablet, and desktop',
        'Reader-first interface designed with high contrast, legible typography, and low latency',
      ],
      tags: ['Web Application', 'Interactive Reader', 'EdTech', 'Responsive UI', 'Politeknik Besut'],
      highlight: 'Engineered a seamless cross-device digital reading experience to enhance student learning access.',
    },
  ] as ProjectItem[],
  education: [
    {
      institution: 'Politeknik Besut, Terengganu',
      qualification: 'Diploma in Information Technology',
      period: '2024 – Present',
      location: 'Besut, Terengganu',
      cgpa: '3.20',
      details: [
        'Currently pursuing Diploma in Information Technology with consistent academic achievement (CGPA: 3.20).',
        'Core subjects: Front-End & Web Development, Database Systems, Computer Networks, and System Analysis.',
        'Active in campus tech projects and student affairs software initiatives.',
      ],
    },
    {
      institution: 'Sekolah Menengah Kebangsaan Kota, Kota Bharu Kolej',
      qualification: 'Sijil Pelajaran Malaysia (SPM)',
      period: '2019 – 2023',
      location: 'Kota Bharu, Kelantan',
      stream: 'Computer Science and Reka Cipta (Invention/Design)',
      grades: '1A, 5B, 1C, 1D, 1E',
      details: [
        'Specialized in Computer Science principles and creative Reka Cipta problem solving.',
        'Established strong early groundwork in algorithmic thinking and practical design.',
      ],
    },
  ] as EducationItem[],
  work: [
    {
      role: 'Shop Assistant (Part-Time)',
      company: 'All About Bakes',
      period: 'June – Ogos 2025',
      location: 'Kota Bharu, Kelantan',
      responsibilities: [
        'Delivered friendly and attentive customer service in a busy bakery retail setting.',
        'Managed merchandise displays, stock replenishment, and daily cash register transactions.',
        'Demonstrated strong accountability, punctuality, and positive collaborative work ethic.',
      ],
    },
  ] as WorkItem[],
  skills: [
    {
      category: 'Front-End & Core Web',
      skills: [
        { name: 'Front-End Development', note: 'Modern HTML5, CSS3, JavaScript, React' },
        { name: 'Web Accessibility (a11y)', note: 'Inclusive UX, semantic markup, contrast standards' },
        { name: 'SEO Fundamentals', note: 'Search engine visibility, meta structure, speed' },
      ],
    },
    {
      category: 'Design & Visual Principles',
      skills: [
        { name: 'Web Design Tools', note: 'Visual prototyping, wireframes, style systems' },
        { name: 'UI/UX Design', note: 'User journey, clean interface hierarchy, interaction flow' },
        { name: 'Color Theory & Typography', note: 'Palette harmony, readability, type hierarchy' },
      ],
    },
    {
      category: 'Workflow & Tools',
      skills: [
        { name: 'Version Control (Git/GitHub)', note: 'Branching, clean commit history, code collaboration' },
        { name: 'Responsive Layouts', note: 'Flawless presentation on mobile, tablet, and widescreen' },
      ],
    },
  ],
  languages: [
    { name: 'Malay (Bahasa Melayu)', level: 'Fluent / Native', percentage: 100 },
    { name: 'English', level: 'Intermediate (Working Proficiency)', percentage: 75 },
  ],
  reference: {
    name: 'NORAZLINA BINTI ABDULLAH',
    title: 'Pensyarah (Lecturer)',
    department: 'Jabatan Teknologi Maklumat & Komunikasi (JTMK)',
    institution: 'Politeknik Besut, Terengganu',
    phone: '019-936 8875',
    email: 'azlina@polibesut.edu.my',
  } as ReferenceItem,
}
