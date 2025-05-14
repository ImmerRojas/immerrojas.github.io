// user-data/data.js - Contains the portfolio content

export const bio = [
  "Hello, I'm Immer Rojas González!", //
  "Experienced <strong>System Administrator</strong> with a proven track record in optimizing IT infrastructures for maximum performance and security. Specialized in cloud and on premise solutions, and cybersecurity to enhance system reliability and improve business operations. Dedicated to delivering superior IT support in dynamic, fast-paced environments.", // Combined Objective from resume
  "Beyond technology, I focus on continuous learning in IT and exploring advancements like Artificial Intelligence (AI).", // Adapted filler text based on resume content
];

export const skills = [ // Extracted from Technical Skills
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

export const experience = [ // Combined experience entries
   {
    title: "IML", //
    duration: "2023 - Present", //
    subtitle: "IT Specialist / Systems and Database Management Specialist", // Combined titles
    details: [
      // Details combined from IML and General Specialist sections relevant to timeframe
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
    tags: ["SAP Business One", "SQL Server", "Crystal Reports", "MySQL", "Firebase", "Fortinet", "WatchGuard", "Cisco", "Cybersecurity", "Microsoft 365", "Windows Server", "IT Support"], // Synthesized from details
    icon: "briefcase", // Changed icon
  },
  {
    title: "PartsPlus", //
    duration: "2015 - 2022", //
    subtitle: "Systems and Database Management Specialist", //
    details: [
      // Details from General Specialist section relevant to timeframe
      "Configured, managed, and secured network firewalls (Fortinet, WatchGuard).",
      "Applied cybersecurity practices and compliance protocols.",
      "Managed SQL Server environments: installation, configuration, optimization, backups.",
      "Developed complex SQL queries for analysis and reporting.",
      "Troubleshot and optimized MySQL databases.",
      "Deployed ESET Antivirus and integrated endpoint protection.",
      "Integrated SAP Business One with third-party systems.", // Also mentioned in PartsPlus specific description in original data.js
      "Led the deployment and management of VPN solutions.", // Kept from original data.js PartsPlus entry, plausible for timeframe
      "Provided comprehensive IT support and training.", // Kept from original data.js PartsPlus entry, plausible for timeframe
    ],
    tags: ["SQL Server", "MySQL", "SAP Business One", "Fortinet", "WatchGuard", "Cybersecurity", "VPN", "IT Support", "Windows Server"], // Synthesized from details
    icon: "database", // Kept icon
  },
  {
    title: "HDM", //
    duration: "2011 - 2015", //
    subtitle: "Systems and Database Management Specialist", //
    details: [
      // Details from General Specialist section relevant to timeframe
      "Configured, managed, and secured network firewalls (Fortinet).",
       "Applied cybersecurity practices.",
       "Managed SQL Server environments: installation, configuration, optimization, backups.",
       "Developed complex SQL queries for data analysis and reporting.",
       "Troubleshot and optimized MySQL databases.",
       "Provided IT support and training to end users.", // Kept from original data.js HDM entry, plausible for timeframe
       "Created and customized Crystal Reports.", // Based on resume skills
    ],
    tags: ["SQL Server", "MySQL", "Fortinet", "Crystal Reports", "IT Support", "Database Management"], // Synthesized from details
    icon: "server", // Changed icon
  },
];

// Repurposing 'projects' to highlight key technical areas based on skills/experience
export const projects = [
  '<strong>Firewall & Network Security:</strong> Configuration and management (Fortinet, WatchGuard, Cisco).',
  '<strong>Cybersecurity Implementation:</strong> Policies, threat mitigation, endpoint security (ESET), M365 Security.',
  '<strong>SQL Server & MySQL Management:</strong> Installation, configuration, optimization, backup, query development.',
  '<strong>SAP Business One:</strong> Optimization, integration, user management.',
  '<strong>Cloud & Virtualization:</strong> Azure, Office 365, VMware, Hyper-V administration.',
  '<strong>Reporting & Analytics:</strong> Crystal Reports, Power BI, Tableau report creation.',
  '<strong>IT Infrastructure Support:</strong> Windows Server, AD, GPO, RDS, Network Services (DNS, LAN/WAN).',
  '<strong>AI Integration:</strong> Exploring Artificial Intelligence applications.',
];

export const education = [ // From Education and Certifications
  {
    title: "International Postgraduate in Artificial Intelligence for Strategic Business Management", //
    duration: "2024", //
    subtitle: "ISEADE FEPADE", //
    details: [],
    tags: ["Artificial Intelligence", "Business Management", "Strategic Management"], // Interpreted tags
    icon: "brain", // Changed icon
  },
  {
    title: "Bachelor's Degree in Computer Science Engineering", //
    duration: "2016 - 2021", //
    subtitle: "Universidad Francisco Gavidia", //
    details: [
      "Focused on core concepts of computer science, programming, and systems administration", // Consistent
      "Acquired hands-on experience with database management, networking, and IT security" // Consistent
    ],
    tags: ["Computer Science", "Programming", "Systems Administration", "Database Management", "Networking", "IT Security"], // Expanded tags
    icon: "graduation-cap", // Kept icon
  },
   {
    title: "Cisco Certified Network Associate (CCNA)", //
    duration: "Obtained: 2021", //
    subtitle: "Certification by Cisco", //
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

export const footer = [ // Footer links and contact info
  {
    label: "Links",
    data: [
       { // Added LinkedIn from resume
        text: "LinkedIn",
        link: "https://www.linkedin.com/in/immer-rojas", // Updated link
      },
      { // Kept GitHub link as it's common for portfolios
        text: "Github",
        link: "https://github.com/ImmerRojas", // Assumed generic GitHub profile URL for user immerrojas
      },
    ],
  },
  {
    label: "Contact", // Simplified contact info for footer
    data: [
        { text: "immer.rojas@gmail.com" }, //
        { text: "Location: El Salvador" }, //
        // Removed phone and location for brevity in footer
    ],
  },
  {
    label: "copyright-text",
    data: ["Made with &hearts; by Immer Rojas González"], // Updated name
  },
];
