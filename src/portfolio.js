/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Manan's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Manan Shah's Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Manan Shah",
  logo_name: "MananShah",
  nickname: "",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1oA1CArLz5XSOcA3QLEzJ4544PMs0YXJI/view?usp=drive_link",
  portfolio_repository: "https://github.com/Manan17",
  githubProfile: "https://github.com/Manan17",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Manan17",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/manan-shah-716031184/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },

  {
    name: "Gmail",
    link: "mailto:shahmanan170602@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using React Native and solo android apps using Java",
        "⚡ Creating application backend in Node, Express",
        "⚡ Databases: MongoDB, PostgreSQL, MySQL and Firebase",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:nodedotjs",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
      ],
    },
    {
      title: "Blockchain",
      fileName: "BlockChainImage",
      skills: [
        "⚡ Experience writing multiple smart contracts with Solidity",
        "⚡ Deploying smart contracts on Goerli test network using Alchemy",
        "⚡ Integrating smart contracts with React front-end",
        "⚡ Worked with ERC-20 and ERC-721 tokens",
        "⚡ Used IPFS for multimedia storage",
      ],
      softwareSkills: [
        {
          skillName: "Ethereum",
          fontAwesomeClassname: "simple-icons:ethereum",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Solidity",
          fontAwesomeClassname: "simple-icons:solidity",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Alchemy",
          fontAwesomeClassname: "simple-icons:alchemy",
          style: {
            color: "#2079F4",
          },
        },
        {
          skillName: "IPFS",
          fontAwesomeClassname: "simple-icons:ipfs",
          style: {
            color: "#000000",
          },
        },
      ],
    },
    {
      title: "ML and Generative AI",
      fileName: "GenerativeAIImg",
      skills: [
        "⚡ Developing AI/ML models using Python",
        "⚡ Fine tuning LLMs such as Falcon-7B and Llama-2 using Colab's T4 GPU",
        "⚡ Deploying ML models using Flask",
        "⚡ Deploying fine tuned LLMs using huggingface and llama.cpp",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "OpenAI",
          fontAwesomeClassname: "simple-icons:openai",
          style: {
            color: "#412991",
          },
        },
        {
          skillName: "Llama 2",
          fontAwesomeClassname: "simple-icons:meta",
          style: {
            color: "#0467DF",
          },
        },
        {
          skillName: "Falcon 7B",
          fontAwesomeClassname: "simple-icons:falcon",
          style: {
            color: "#F0AD4E",
          },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "simple-icons:flask",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Google Colab",
          fontAwesomeClassname: "simple-icons:googlecolab",
          style: {
            color: "#F9AB00",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title:
        "Dwarkadas J Sanghvi College of Engineering (University of Mumbai)",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "djsanghvi.png",
      alt_name: "DJ Sanghvi",
      duration: "2021 - 2024",
      descriptions: [
        "⚡ I have studied software engineering subjects like Advanced Algorithms, Advanced DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Blockchain, Data Warehousing and Full Stack Development.",
        "⚡ CGPA: 9.7/10",
      ],
      website_link: "https://djsce.ac.in/",
    },
    {
      title: "Vivekanand Education Society Polytechnic",
      subtitle: "Diploma in Computer Engineering",
      logo_path: "vesp.png",
      alt_name: "Vivekanand Education Society Polytechnic",
      duration: "2018 - 2021",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OOPs etc.",
        "⚡ Took courses such as Android Development and Software Engineering",
        "⚡ Percentage: 97.71%",
      ],
      website_link: "https://ves.ac.in/polytechnic/",
    },
  ],
};

const certifications = {
  certifications: [],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Internship and Volunteership",
  description:
    "I have worked with many evolving startups as a Software Developer and Mobile App Developer. I have also worked with some well established companies mostly as Software Engineering Intern. I love organising events and that is why I am also involved with many GenAI and Blockchain communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      experiences: [
        {
          title: "Associate Software Engineer Intern",
          company: "Accenture",
          company_url: "https://www.accenture.com/in-en",
          logo_path: "accenture.png",
          duration: "June 2023 - July 2023",
          location: "Mumbai, India",
          description:
            "Proficient in executing Adaptive Planning, Data Integration, and Data Analysis within the Workday environment. Demonstrated expertise in developing Java Springboot Rest APIs while orchestrating effective data conversion. Utilized AWS cloud services including EC2, EBS, EFS, and RDS to enhance project functionalities.",
          color: "#000000",
        },
        {
          title: "Software Engineer Intern",
          company: "Caarya",
          company_url: "https://caarya.in/",
          logo_path: "caarya.jpg",
          duration: "May 2022 - Aug 2022",
          location: "Remote",
          description:
            "Developed cutting edge User Interface with 25+ modular components, APIs and integrated them using React.js and React Native and crafted 10+ Rest APIs using Node.js. Revamped the payment system of the client considering all cases using Node.js and Stripe API. Built a customized template feature for creating financial documents on website itself using React.js and Slate.js. Reduced user reported defects by 50% after I identified and fixed root causes of the four most common user reports",
          color: "#ee3c26",
        },
        {
          title: "Software Engineer Intern",
          company: "AdMyBrand",
          company_url: "https://admybrand.com/",
          logo_path: "admybrand.jpg",
          duration: "Oct 2021 - Dec 2021",
          location: "Remote",
          description:
            "Engineered a React Native marketing app with an engaging user interface, collaborating closely with the Project Manager to conceptualize impactful software solutions. Crafted 15+ modular React Native elements employing hooks, and seamlessly integrated REST APIs with optimized codebase. Applied a strategic approach to UI/UX design while ensuring efficient utilization of resources in software development projects.",
          color: "#0071C5",
        },
        {
          title: "React Native Developer Intern",
          company: "NextHTech",
          company_url: "",
          logo_path: "noimage.png",
          duration: "Nov 2020 - Dec 2020",
          location: "Remote",
          description:
            "Solo developer in the team working on the hospital management app. Built UI using React Native and Aws Cognito",
          color: "#0071C5",
        },
      ],
    },

    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Project Head",
          company: "Google Developer Students Club",
          company_url: "https://about.google/",
          logo_path: "gdsc.png",
          duration: "August 2022 - August 2023",
          location: "Mumbai, Maharashtra",
          description:
            "Effectively guided and managed a 7-member team across diverse NGO projects, offering solutions to queries and implementing successful task strategies.",
          color: "#4285F4",
        },
        {
          title: "React Native Mentor",
          company: "Unicode",
          company_url: "https://www.djunicode.in/",
          logo_path: "unicode.svg",
          duration: "August 2022 - August 2023",
          location: "Mumbai, Maharashtra",
          description:
            "Provided task-based learning to our mentees for React native. Guided them and solved their doubts",
          color: "#D83B01",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Pet Adoption App",
      createdAt: "2021-03-06T16:26:54Z",
      description: "Paper Written on an App for Pet Adoption ",
      url: "https://www.irjet.net/archives/V8/i4/IRJET-V8I4376.pdf",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "BlockCrate",
      createdAt: "2023-08-06T16:26:54Z",
      description:
        "Paper Written on Decentralized Asset Sharing system (Accepted at an IEEE conference)",
      url:
        "https://drive.google.com/file/d/1489cslYX_AhBSC22FnApl-gynr0E5EAs/view?usp=sharing",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Artificial Intelligence Paper",
      createdAt: "2023-10-06T16:26:54Z",
      description:
        "Paper Written on how ML can help in Chronic Pulmonary Disease (In Review) ",
      url:
        "https://drive.google.com/file/d/1WMKXN364r74iI9ZwQ-0NqeUCGPzF8cMj/view?usp=sharing",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "manan_superhero.jpg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with React, Node.js, ML, AI, and Blockchain Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Mumbai, Maharashtra, India",
    locality: "Mumbai",
    country: "IN",
    region: "Mumbai",
    postalCode: "385520",
    streetAddress: "Vallabh Baug Lane",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/QpLcupeHnv3cCiLX9",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
