// data.js - Updated portfolio content in English

export const bio = [
  "Hello! I'm Immer Rojas González.",
  "I am an experienced <strong>System Administrator</strong> with a proven track record in optimizing IT infrastructures for maximum performance and security. My specialization covers cloud and on-premise solutions, as well as cybersecurity, aimed at enhancing system reliability and business operations. I am dedicated to providing top-quality IT support in dynamic, fast-paced environments.",
  "Beyond technology, my focus is on continuous learning within the IT sector and exploring cutting-edge advancements like Artificial Intelligence (AI)."
];

export const hardSkills = [
  { skill: "Windows Server (AD, GPO, RDS, File/Print Services)", percentage: 95 },
  { skill: "Azure & Microsoft 365 (Defender, Exchange Online)", percentage: 90 },
  { skill: "VMware & Hyper-V", percentage: 85 },
  { skill: "Networking & Security (Fortinet, WatchGuard, Cisco Firewalls, VPN)", percentage: 92 },
  { skill: "Databases (SQL Server, MySQL, Firebase)", percentage: 90 },
  { skill: "SAP Business One (Administration & Integration)", percentage: 88 },
  { skill: "Reporting Tools (Crystal Reports, Power BI, Tableau)", percentage: 80 },
  { skill: "Web Services (IIS, DNS, LAN/WAN)", percentage: 85 },
  { skill: "Cybersecurity (ESET Antivirus, Vulnerability Management)", percentage: 87 },
  { skill: "UniFi Ubiquiti Wi-Fi, Xorcom, Alcatel", percentage: 75 }
];

export const softSkills = [
  { skill: "Complex Problem Solving", percentage: 95 },
  { skill: "Analytical Thinking", percentage: 90 },
  { skill: "Time Management & Prioritization", percentage: 85 },
  { skill: "Effective Technical Communication", percentage: 88 },
  { skill: "Teamwork & Collaboration", percentage: 92 },
  { skill: "Adaptability & Flexibility", percentage: 80 },
  { skill: "Continuous Learning", percentage: 98 },
  { skill: "Attention to Detail", percentage: 85 }
];

export const languages = [
  { language: "Spanish", proficiency: "Native", percentage: 100 },
  { language: "English", proficiency: "Professional", percentage: 75 }
];

export const experience = [
  {
    title: "IML",
    duration: "2023 - Present",
    subtitle: "IT Specialist / Systems and Database Management Specialist",
    details: [
      "Optimized SAP Business One environments for performance and scalability; led third-party integrations.",
      "Designed and optimized SQL queries and Crystal Reports for data-driven insights.",
      "Configured user roles and permissions in SAP Business One.",
      "Provided ongoing technical support and training to end-users.",
      "Managed security configurations for Microsoft 365 (Defender, MFA).",
      "Configured, managed, and secured network firewalls (Fortinet, WatchGuard, Cisco).",
      "Applied cybersecurity practices: network segmentation, vulnerability management, threat mitigation.",
      "Administered SQL Server environments: installation, configuration, optimization, backup strategies.",
      "Crafted complex SQL queries for data analysis and reporting.",
      "Troubleshot and optimized MySQL databases.",
      "Deployed ESET Antivirus and integrated endpoint protection.",
      "Set up and deployed Firebase, ensuring efficient backend management and app performance.",
      "Integrated SAP Business One with third-party systems to streamline data exchange."
    ],
    tags: ["SAP B1", "SQL Server", "Crystal Reports", "MySQL", "Firebase", "Fortinet", "WatchGuard", "Cisco", "Cybersecurity", "M365", "Windows Server"],
    icon: "briefcase"
  },
  {
    title: "PartsPlus",
    duration: "2015 - 2022",
    subtitle: "Systems and Database Management Specialist",
    details: [
      "Configured, managed, and secured network firewalls (Fortinet, WatchGuard).",
      "Applied cybersecurity practices and compliance protocols.",
      "Administered SQL Server environments: installation, configuration, optimization, backups.",
      "Developed complex SQL queries for analysis and reporting.",
      "Troubleshot and optimized MySQL databases.",
      "Deployed ESET Antivirus and integrated endpoint protection.",
      "Integrated SAP Business One with third-party systems.",
      "Led the deployment and management of VPN solutions.",
      "Provided comprehensive IT support and training."
    ],
    tags: ["SQL Server", "MySQL", "SAP B1", "Fortinet", "WatchGuard", "Cybersecurity", "VPN", "IT Support"],
    icon: "database"
  },
  {
    title: "HDM",
    duration: "2011 - 2015",
    subtitle: "Systems and Database Management Specialist",
    details: [
      "Configured, managed, and secured network firewalls (Fortinet).",
      "Applied cybersecurity practices.",
      "Administered SQL Server environments: installation, configuration, optimization, backups.",
      "Developed complex SQL queries for data analysis and reporting.",
      "Troubleshot and optimized MySQL databases.",
      "Provided IT support and training to end-users.",
      "Created and customized Crystal Reports."
    ],
    tags: ["SQL Server", "MySQL", "Fortinet", "Crystal Reports", "IT Support", "DB Management"],
    icon: "server"
  }
];

export const projects = [ // Kept as "Key Technical Areas"
  '<strong>Firewall & Network Security:</strong> Configuration and management (Fortinet, WatchGuard, Cisco).',
  '<strong>Cybersecurity Implementation:</strong> Policies, threat mitigation, endpoint security (ESET), M365 Security.',
  '<strong>SQL Server & MySQL Management:</strong> Installation, configuration, optimization, backup, query development.',
  '<strong>SAP Business One:</strong> Optimization, integration, user management.',
  '<strong>Cloud & Virtualization:</strong> Azure, Office 365, VMware, Hyper-V administration.',
  '<strong>Reporting & Analytics:</strong> Crystal Reports, Power BI, Tableau report creation.',
  '<strong>IT Infrastructure Support:</strong> Windows Server, AD, GPO, RDS, Network Services (DNS, LAN/WAN).',
  '<strong>AI Exploration:</strong> Artificial Intelligence applications in business environments.'
];

export const education = [
  {
    title: "International Postgraduate in Artificial Intelligence for Strategic Business Management",
    duration: "2024",
    subtitle: "ISEADE FEPADE",
    details: [],
    tags: ["AI", "Strategic Management", "Business"],
    icon: "brain"
  },
  {
    title: "Bachelor's Degree in Computer Science Engineering",
    duration: "2016 - 2021",
    subtitle: "Universidad Francisco Gavidia",
    details: [
      "Focused on core concepts of computer science, programming, and systems administration.",
      "Acquired hands-on experience with database management, networking, and IT security."
    ],
    tags: ["Computer Science", "Programming", "SysAdmin", "Database Management", "Networking", "IT Security"],
    icon: "graduation-cap"
  },
  {
    title: "Cisco Certified Network Associate (CCNA)",
    duration: "Obtained: 2021",
    subtitle: "Certification by Cisco",
    details: ["Validated foundational networking knowledge and skills."],
    tags: ["Networking", "Cisco", "Certification"],
    icon: "certificate"
  },
  {
    title: "Microsoft Defender for Cloud Security & Exchange Online Training",
    duration: "Completed: 2023",
    subtitle: "ITCO Cloud Academy",
    details: ["Training on Security at Scale, Configurations, and Best Practices."],
    tags: ["Cloud Security", "MS Defender", "Exchange Online", "M365"],
    icon: "cloud"
  }
];

export const hobbiesInterests = [
  { name: "AI Research", icon: "fa-solid fa-robot" },
  { name: "Tech Reading", icon: "fa-solid fa-book-open-reader" },
  { name: "Hiking", icon: "fa-solid fa-person-hiking" },
  { name: "Amateur Photography", icon: "fa-solid fa-camera-retro" },
  { name: "Sci-Fi Movies", icon: "fa-solid fa-film" }
];

export const footer = [
  {
    label: "Links",
    data: [
      { text: "LinkedIn", link: "https://www.linkedin.com/in/immer-rojas" },
      { text: "Github", link: "https://github.com/ImmerRojas" }
    ]
  },
  {
    label: "Contact Info", // Changed label
    data: [
      { text: "immer.rojas@gmail.com" },
      { text: "Location: El Salvador" }
    ]
  },
  {
    label: "copyright-text",
    data: ["Designed with &hearts; by Immer Rojas González"] // Name is a proper noun, kept as is.
  }
];
