// data.js - Contains the portfolio content

export const bio = [
  "Hello, I'm Immer Rojas González!", // Updated Name [cite: 1]
  "Experienced <strong>System Administrator</strong> with a proven track record in optimizing IT infrastructures for maximum performance and security[cite: 4]. Specialized in cloud and on premise solutions, and cybersecurity to enhance system reliability and improve business operations[cite: 5]. Dedicated to delivering superior IT support in dynamic, fast-paced environments[cite: 6].", // Combined Objective from resume [cite: 4, 5, 6]
  "Beyond technology, I focus on continuous learning in IT and exploring advancements like Artificial Intelligence (AI)[cite: 8, 26].", // Adapted filler text based on resume content [cite: 8, 26]
];

export const skills = [ // Extracted from Technical Skills [cite: 7, 8]
  "<strong>Operating Systems:</strong> Windows Server [cite: 7]",
  "<strong>Cloud & Virtualization:</strong> Azure, Office 365, VMware, Hyper-V [cite: 7]",
  "<strong>Network & Security:</strong> Fortinet, WatchGuard, Cisco Firewalls, VPN, ESET Antivirus [cite: 7]",
  "<strong>Database:</strong> SQL Server, MySQL, Firebase [cite: 7]",
  "<strong>ERP:</strong> SAP Business One [cite: 7]",
  "<strong>Reporting & Analytics:</strong> Crystal Reports, Power BI, Tableau [cite: 8]",
  "<strong>Web Services:</strong> IIS, DNS, LAN/WAN [cite: 8]",
  "<strong>Server Services:</strong> GPO, AD, RDS, File and Print Services [cite: 8]",
  "<strong>Others:</strong> UniFi Ubiquiti Wi-Fi, Xorcom, Alcatel, System Customization, Artificial Intelligence (AI) [cite: 8]",
];

export const experience = [ // Combined experience entries [cite: 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
   {
    title: "IML", // [cite: 9, 19]
    duration: "2023 - Present", // [cite: 9, 19]
    subtitle: "IT Specialist / Systems and Database Management Specialist", // Combined titles [cite: 9, 19]
    details: [
      // Details combined from IML and General Specialist sections relevant to timeframe
      "Optimized SAP Business One environments for performance and scalability; led third-party integrations[cite: 20].",
      "Designed and optimized SQL queries and Crystal Reports for data-driven insights[cite: 21].",
      "Configured user roles and permissions in SAP Business One[cite: 22].",
      "Provided ongoing technical support and training to end users[cite: 23].",
      "Managed security configurations for Microsoft 365 (Defender, MFA)[cite: 16, 24].",
      "Configured, managed, and secured network firewalls (Fortinet, WatchGuard, Cisco)[cite: 10].",
      "Applied cybersecurity practices: network segmentation, vulnerability management, threat mitigation[cite: 11].",
      "Managed SQL Server environments: installation, configuration, optimization, backup strategies[cite: 12].",
      "Crafted complex SQL queries for data analysis and reporting[cite: 13].",
      "Troubleshot and optimized MySQL databases[cite: 14].",
      "Deployed ESET Antivirus and integrated endpoint protection[cite: 15].",
      "Set up and deployed Firebase, ensuring efficient backend management and app performance[cite: 17].",
      "Integrated SAP Business One with third-party systems to streamline data exchange[cite: 18].",
    ],
    tags: ["SAP Business One", "SQL Server", "Crystal Reports", "MySQL", "Firebase", "Fortinet", "WatchGuard", "Cisco", "Cybersecurity", "Microsoft 365", "Windows Server", "IT Support"], // Synthesized from details
    icon: "briefcase", // Changed icon
  },
  {
    title: "PartsPlus", // [cite: 9]
    duration: "2015 - 2022", // [cite: 9]
    subtitle: "Systems and Database Management Specialist", // [cite: 9]
    details: [
      // Details from General Specialist section relevant to timeframe
      "Configured, managed, and secured network firewalls (Fortinet, WatchGuard)[cite: 10].",
      "Applied cybersecurity practices and compliance protocols[cite: 11].",
      "Managed SQL Server environments: installation, configuration, optimization, backups[cite: 12].",
      "Developed complex SQL queries for analysis and reporting[cite: 13].",
      "Troubleshot and optimized MySQL databases[cite: 14].",
      "Deployed ESET Antivirus and integrated endpoint protection[cite: 15].",
      "Integrated SAP Business One with third-party systems[cite: 18].", // Also mentioned in PartsPlus specific description in original data.js
      "Led the deployment and management of VPN solutions.", // Kept from original data.js PartsPlus entry, plausible for timeframe
      "Provided comprehensive IT support and training.", // Kept from original data.js PartsPlus entry, plausible for timeframe
    ],
    tags: ["SQL Server", "MySQL", "SAP Business One", "Fortinet", "WatchGuard", "Cybersecurity", "VPN", "IT Support", "Windows Server"], // Synthesized from details
    icon: "database", // Kept icon
  },
  {
    title: "HDM", // [cite: 9]
    duration: "2011 - 2015", // [cite: 9]
    subtitle: "Systems and Database Management Specialist", // [cite: 9]
    details: [
      // Details from General Specialist section relevant to timeframe
      "Configured, managed, and secured network firewalls (Fortinet)[cite: 10].",
       "Applied cybersecurity practices[cite: 11].",
       "Managed SQL Server environments: installation, configuration, optimization, backups[cite: 12].",
       "Developed complex SQL queries for data analysis and reporting[cite: 13].",
       "Troubleshot and optimized MySQL databases[cite: 14].",
       "Provided IT support and training to end users.", // Kept from original data.js HDM entry, plausible for timeframe
       "Created and customized Crystal Reports[cite: 8].", // Based on resume skills [cite: 8]
    ],
    tags: ["SQL Server", "MySQL", "Fortinet", "Crystal Reports", "IT Support", "Database Management"], // Synthesized from details
    icon: "server", // Changed icon
  },
];

// Repurposing 'projects' to highlight key technical areas based on skills/experience [cite: 7, 8, 10, 11, 12, 13, 14, 16, 17, 18, 20]
export const projects = [
  '<strong>Firewall & Network Security:</strong> Configuration and management (Fortinet, WatchGuard, Cisco)[cite: 7, 10].',
  '<strong>Cybersecurity Implementation:</strong> Policies, threat mitigation, endpoint security (ESET), M365 Security[cite: 11, 15, 16].',
  '<strong>SQL Server & MySQL Management:</strong> Installation, configuration, optimization, backup, query development[cite: 7, 12, 13, 14].',
  '<strong>SAP Business One:</strong> Optimization, integration, user management[cite: 7, 18, 20, 22].',
  '<strong>Cloud & Virtualization:</strong> Azure, Office 365, VMware, Hyper-V administration[cite: 7].',
  '<strong>Reporting & Analytics:</strong> Crystal Reports, Power BI, Tableau report creation[cite: 8].',
  '<strong>IT Infrastructure Support:</strong> Windows Server, AD, GPO, RDS, Network Services (DNS, LAN/WAN)[cite: 7, 8].',
  '<strong>AI Integration:</strong> Exploring Artificial Intelligence applications[cite: 8, 26].',
];

export const education = [ // From Education and Certifications [cite: 25, 26, 27]
  {
    title: "International Postgraduate in Artificial Intelligence for Strategic Business Management", // [cite: 26]
    duration: "2024", // [cite: 26]
    subtitle: "ISEADE FEPADE", // [cite: 26]
    details: [],
    tags: ["Artificial Intelligence", "Business Management", "Strategic Management"], // Interpreted tags
    icon: "brain", // Changed icon
  },
  {
    title: "Bachelor's Degree in Computer Science Engineering", // [cite: 25]
    duration: "2016 - 2021", // [cite: 25]
    subtitle: "Universidad Francisco Gavidia", // [cite: 25]
    details: [
      "Focused on core concepts of computer science, programming, and systems administration", // Kept from original data.js, consistent
      "Acquired hands-on experience with database management, networking, and IT security" // Kept from original data.js, consistent
    ],
    tags: ["Computer Science", "Programming", "Systems Administration", "Database Management", "Networking", "IT Security"], // Expanded tags
    icon: "graduation-cap", // Kept icon
  },
   {
    title: "Cisco Certified Network Associate (CCNA)", // [cite: 27]
    duration: "Obtained: 2021", // [cite: 27]
    subtitle: "Certification by Cisco", // [cite: 27]
    details: ["Validated foundational networking knowledge and skills."], // Added detail
    tags: ["Networking", "Cisco", "Certification"], // Expanded tags
    icon: "certificate", // Changed icon
  },
   {
    title: "Microsoft Defender for Cloud Security & Exchange Online Training", // Combined trainings
    duration: "Completed: 2023", // From resume training section
    subtitle: "ITCO Cloud Academy", // From resume training section
    details: ["Training on Security at Scale, Configurations and Best Practices."], // From resume training section
    tags: ["Cloud Security", "Microsoft Defender", "Exchange Online", "Microsoft 365"], // Interpreted tags
    icon: "cloud", // Changed icon
  },
];

export const footer = [ // Footer links and contact info [cite: 3]
  {
    label: "Links",
    data: [
       { // Added LinkedIn from resume [cite: 3]
        text: "LinkedIn",
        link: "https://www.linkedin.com/in/immer-rojas", // Updated link [cite: 3]
      },
      { // Kept GitHub link as requested and common for portfolios
        text: "Github",
        link: "https://github.com/ImmerRojas", // Assumed generic GitHub profile URL for user immerrojas
      },
    ],
  },
  {
    label: "Contact", // Added contact info based on resume [cite: 3]
    data: [
        { text: "immer.rojas@gmail.com" }, // [cite: 3]
    ],
  },
  {
    label: "copyright-text",
    data: ["Made with &hearts; by Immer Rojas González"], // Updated name [cite: 1]
  },
];
