export default {
  components: {
    default: {
      footer: {
        developed: "Developed by ",
      },
      navbar: {
        projects: "Projects",
        about_me: "About me",
        contact: "Contact",
      },
    },
    aboute_me: {
      about: {
        title: "About me",
        subtitle_1: "Experience",
        text_1:
          "I am a software developer with over 4 years of experience in web and desktop applications, involved in all stages of projects. I have expertise in Vue.js, JavaScript, TypeScript, and Python, as well as API development and PostgreSQL databases.",
        subtitle_2: "Education",
        text_2:
          "Bachelor's in Electrical Engineering from IFPB and a Postgraduate degree in Software Engineering from PUC Minas.",
      },
      card_about_me: {
        btn_resume: "Resume",
        first_paragraph:
          "My name is Mateus Gomes, I am a <strong>Software Engineer</strong> with  nearly 4 years of experience.",
        second_paragraph:
          "I have a particular interest in creative coding and in developing software that positively impacts people's lives.",
        third_paragraph:
          "I worked on the development of web and desktop applications, using technologies such as <strong>Vue</strong>, <strong>Nuxt</strong>, <strong>Flask</strong>, <strong>AI</strong>, and <strong>Computer Vision</strong>.",
        fourth_paragraph:
          "I am always curious to learn more, especially about new technologies that promote process automation.",
      },
      timeline: {
        years: {
          text_2016_2021:
            "During my Electrical Engineering graduation, I learned my first programming language, <strong>C</strong>. I acquired knowledge in data structures, networks, and computer architectures. I also participated in several projects using <strong>Python</strong>, <strong>JavaScript</strong>, <strong>databases</strong>, and other technologies. During this period, I started my internship in <strong>Web Development</strong>.",
          text_2022:
            "I was promoted from intern to Junior, gaining more experience in web and desktop development using <strong>Vue.js</strong>, <strong>Nuxt.js</strong>, <strong>Flask</strong>, and <strong>PyQt</strong>. I improved programming best practices and increased autonomy in decision-making within projects. Additionally, I completed my thesis in the area of <strong>Computer Vision</strong>.",
          text_2023:
            "I took on the challenging position of Technical Leader, where I was responsible for defining software architecture, project management, and team leadership. I enhanced my communication skills by interacting directly with clients and the team. Committed to utilizing technologies such as <strong>AI</strong>, <strong>PyQt</strong>, and <strong>Computer Vision</strong>.",
        },
      },
    },
    contact: {
      email_field: {
        tooltip: {
          copy: "Copy",
          copied: "Copied!",
          can_not_copy: "Can't copy the email in a non-secure connection!",
        },
      },
    },
    home: {
      presentation: {
        title: "Hi, I'm",
        subtitle:
          "<strong>Software Developer</strong> with {years}+ years of experience in web and desktop application development",
        btn_about_me: "About me",
        btn_projects: "Projects",
      },
    },
    projects: {
      card_project: {
        btn_open: "Open",
        btn_open_project: "Open project",
        btn_source_code: "Source code",
        illustrative_image: "Illustrative image",
      },
      search: {
        search_by_technologie: "Search by technologie",
      },
    },
  },
  pages: {
    about_me: {
      title: "About me",
    },
    contact: {
      title: "Contact",
      subtitle:
        "If you have any questions, job opportunities or just want to chat, feel free:",
    },
    projects: {
      title: "Projects",
    },
  },
  data: {
    projects: {
      project_1: {
        title: "Automation of Electrical Equipment Tests",
        description:
          "Development of a web and desktop application for planning, execution, data collection, and report generation in the quality testing process of electronic equipment.",
      },
      project_2: {
        title: "Computer Vision OCR",
        description:
          "Desktop application with computer vision automation to detect and read displays, using Machine Learning models for identification and OCR for text extraction.",
      },
      project_3: {
        title: "IoT Automation",
        description:
          "Web application for log monitoring and remote execution of processes on electrical equipment, with integration to Azure DevOps Server.",
      },
      project_4: {
        title: "Payment Management",
        description:
          "Web-based ERP application focused on internal payment management, with integration and automation of financial processes.",
        external_link: {
          name: "Document",
        },
      },
      project_5: {
        title: "Access Control System",
        description:
          "Web application with role-based access control (RBAC), allowing management of permissions and granular access for different user levels.",
      },
      project_6: {
        title: "Project 6",
        description: "Description of project 6",
      },
      project_7: {
        title: "Project 7",
        description: "Description of project 7",
      },
      project_8: {
        title: "Project 8",
        description: "Description of project 8",
      },
      project_9: {
        title: "Project 9",
        description: "Description of project 9",
      },
      project_10: {
        title: "Project 10",
        description: "Description of project 10",
      },
    },
  },
};
