// user-data/data.js - Contains the portfolio content

export const bio = [
  "Hello, I'm Immer Rojas González!",
  "Experienced <strong>System Administrator</strong> with a proven track record in optimizing IT infrastructures for maximum performance and security. Specialized in cloud and on premise solutions, and cybersecurity to enhance system reliability and improve business operations. Dedicated to delivering superior IT support in dynamic, fast-paced environments.",
  "Beyond technology, I focus on continuous learning in IT and exploring advancements like Artificial Intelligence (AI).",
];

// This is the original skills list (Skills Overview)
export const skills = [
  "<strong>Operating Systems:</strong> Windows Server",
  "<strong>Cloud & Virtualization:</strong> Azure, Office 365, VMware, Hyper-V",
  "<strong>Network & Security:</strong> Fortinet, WatchGuard, Cisco Firewalls, VPN, ESET Antivirus",
  "<strong>Database:</strong> SQL Server, MySQL, Firebase",
  "<strong>ERP:</strong> SAP Business One",
  "<strong>Reporting & Analytics:</strong> Crystal Reports, Power BI, Tableau",
  "<strong>Web Services:</strong> IIS, DNS, LAN/WAN",
  "<strong>Server Services:</strong> GPO, AD, RDS, File and Print Services",
  "<strong>Others:</strong> UniFi Ubiquiti Wi-Fi, Xorcom, Alcatel, System Customization, Artificial Intelligence (AI)",
];

export const hardSkills = [
  { skill: "Windows Server Administration", percentage: 90 },
  { skill: "Azure Cloud Services", percentage: 80 },
  { skill: "Office 365 Management", percentage: 85 },
  { skill: "VMware & Hyper-V", percentage: 75 },
  { skill: "Fortinet Firewalls", percentage: 85 },
  { skill: "WatchGuard Firewalls", percentage: 80 },
  { skill: "Cisco Firewalls", percentage: 70 },
  { skill: "SQL Server Management", percentage: 90 },
  { skill: "MySQL Management", percentage: 80 },
  { skill: "SAP Business One Administration", percentage: 85 },
  { skill: "Crystal Reports Development", percentage: 90 },
  { skill: "Power BI", percentage: 70 },
  { skill: "Cybersecurity Practices", percentage: 85 },
  { skill: "Network Configuration (LAN/WAN, DNS)", percentage: 80 },
];

export const softSkills = [
  { skill: "Problem Solving", percentage: 95 },
  { skill: "Analytical Thinking", percentage: 90 },
  { skill: "Communication", percentage: 85 },
  { skill: "Teamwork & Collaboration", percentage: 90 },
  { skill: "Adaptability", percentage: 80 },
  { skill: "Time Management", percentage: 85 },
  { skill: "Attention to Detail", percentage: 90 },
  { skill: "Continuous Learning", percentage: 95 },
];

export const languageSkills = [
  { language: "Spanish", percentage: 100, note: "Native" },
  { language: "English", percentage: 80, note: "Advanced" },
];

export const interestsHobbies = [
  "Exploring new technologies and AI advancements",
  "Cybersecurity trends and best practices",
  "Data analysis and visualization",
  "Cloud computing innovations",
  "Reading tech blogs and articles",
  "Problem-solving challenges (e.g., coding puzzles, strategy games)",
  "Hiking and outdoor activities",
  "Learning new programming languages or frameworks in spare time",
];

export const experience = [
     {
    title: "CP",
    duration: "2025 - Present",
    subtitle: "IBM i Developer / AS400 Developer",
    details: [
      "Created and modified CL, RPG, RPGLE, SQLRPGLE programs and command procedures",
    ],
    tags: ["RPGIV", "DB2", "ILE", "AS400", "IBM i"],
    icon: "briefcase",
  },
   {
    title: "IML",
    duration: "2023 - Present",
    subtitle: "IT Specialist / Systems and Database Management Specialist",
    details: [
      "Optimized SAP Business One environments for performance and scalability; led third-party integrations.",
      "Designed and optimized SQL queries and Crystal Reports for data-driven insights.",
      "Configured user roles and permissions in SAP Business One.",
      "Provided ongoing technical support and training to end users.",
      "Managed security configurations for Microsoft 365 (Defender, MFA).",
      "Configured, managed, and secured network firewalls (Fortinet, WatchGuard, Cisco).",
      "Applied cybersecurity practices: network segmentation, vulnerability management, threat mitigation.",
      "Managed SQL Server environments: installation, configuration, optimization, backup strategies.",
      "Crafted complex SQL queries for data analysis and reporting.",
      "Troubleshot and optimized MySQL databases.",
      "Deployed ESET Antivirus and integrated endpoint protection.",
      "Set up and deployed Firebase, ensuring efficient backend management and app performance.",
      "Integrated SAP Business One with third-party systems to streamline data exchange.",
    ],
    tags: ["SAP Business One", "SQL Server", "Crystal Reports", "MySQL", "Firebase", "Fortinet", "WatchGuard", "Cisco", "Cybersecurity", "Microsoft 365", "Windows Server", "IT Support"],
    icon: "briefcase",
  },
  {
    title: "PartsPlus",
    duration: "2015 - 2022",
    subtitle: "Systems and Database Management Specialist",
    details: [
      "Configured, managed, and secured network firewalls (Fortinet, WatchGuard).",
      "Applied cybersecurity practices and compliance protocols.",
      "Managed SQL Server environments: installation, configuration, optimization, backups.",
      "Developed complex SQL queries for analysis and reporting.",
      "Troubleshot and optimized MySQL databases.",
      "Deployed ESET Antivirus and integrated endpoint protection.",
      "Integrated SAP Business One with third-party systems.",
      "Led the deployment and management of VPN solutions.",
      "Provided comprehensive IT support and training.",
    ],
    tags: ["SQL Server", "MySQL", "SAP Business One", "Fortinet", "WatchGuard", "Cybersecurity", "VPN", "IT Support", "Windows Server"],
    icon: "database",
  },
  {
    title: "HDM",
    duration: "2011 - 2015",
    subtitle: "Systems and Database Management Specialist",
    details: [
      "Configured, managed, and secured network firewalls (Fortinet).",
       "Applied cybersecurity practices.",
       "Managed SQL Server environments: installation, configuration, optimization, backups.",
       "Developed complex SQL queries for data analysis and reporting.",
       "Troubleshot and optimized MySQL databases.",
       "Provided IT support and training to end users.",
       "Created and customized Crystal Reports.",
    ],
    tags: ["SQL Server", "MySQL", "Fortinet", "Crystal Reports", "IT Support", "Database Management"],
    icon: "server",
  },
];

export const projects = [ // This is for the "Key Areas" section
  '<strong>Firewall & Network Security:</strong> Configuration and management (Fortinet, WatchGuard, Cisco).',
  '<strong>Cybersecurity Implementation:</strong> Policies, threat mitigation, endpoint security (ESET), M365 Security.',
  '<strong>SQL Server & MySQL Management:</strong> Installation, configuration, optimization, backup, query development.',
  '<strong>SAP Business One:</strong> Optimization, integration, user management.',
  '<strong>Cloud & Virtualization:</strong> Azure, Office 365, VMware, Hyper-V administration.',
  '<strong>Reporting & Analytics:</strong> Crystal Reports, Power BI, Tableau report creation.',
  '<strong>IT Infrastructure Support:</strong> Windows Server, AD, GPO, RDS, Network Services (DNS, LAN/WAN).',
  '<strong>AI Integration:</strong> Exploring Artificial Intelligence applications.',
];

export const education = [
  {
    title: "International Postgraduate in Artificial Intelligence for Strategic Business Management",
    duration: "2024",
    subtitle: "ISEADE FEPADE",
    details: [],
    tags: ["Artificial Intelligence", "Business Management", "Strategic Management"],
    icon: "brain",
  },
  {
    title: "Bachelor's Degree in Computer Science Engineering",
    duration: "2016 - 2021",
    subtitle: "Universidad Francisco Gavidia",
    details: [
      "Focused on core concepts of computer science, programming, and systems administration",
      "Acquired hands-on experience with database management, networking, and IT security"
    ],
    tags: ["Computer Science", "Programming", "Systems Administration", "Database Management", "Networking", "IT Security"],
    icon: "graduation-cap",
  },
   {
    title: "Cisco Certified Network Associate (CCNA)",
    duration: "Obtained: 2021",
    subtitle: "Certification by Cisco",
    details: ["Validated foundational networking knowledge and skills."],
    tags: ["Networking", "Cisco", "Certification"],
    icon: "certificate",
  },
   {
    title: "Microsoft Defender for Cloud Security & Exchange Online Training",
    duration: "Completed: 2023",
    subtitle: "ITCO Cloud Academy",
    details: ["Training on Security at Scale, Configurations and Best Practices."],
    tags: ["Cloud Security", "Microsoft Defender", "Exchange Online", "Microsoft 365"],
    icon: "cloud",
  },
];

export const footer = [
  {
    label: "Links",
    data: [
       {
        text: "LinkedIn",
        link: "https://www.linkedin.com/in/immer-rojas",
      },
      {
        text: "Github",
        link: "https://github.com/ImmerRojas",
      },
    ],
  },
  {
    label: "Contact",
    data: [
        { text: "immer.rojas@gmail.com" },
        { text: "Location: El Salvador" },
    ],
  },
  {
    label: "copyright-text",
    data: ["Made with &hearts; by Immer Rojas González"],
  },
];
