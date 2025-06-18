/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Hinal Rami",
  title: "Hi all, I'm Hinal",
  subTitle: emoji(
"A passionate Web Developer and DevOps enthusiast 🚀 currently in my final year of Msc.IT, with a strong foundation in building web applications using HTML, CSS, JavaScript and actively learning Docker, Kubernetes, and CI/CD tools to pursue a career in DevOps."  ),
  resumeLink:
    "https://drive.google.com/file/d/1MvtDiIknNc6vSACd482xjku3kHlhTg7D/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/hinalkrami",
  linkedin: "https://www.linkedin.com/in/hinal-rami-790a44271/",
  gmail: "hinalrami2004@gmail.com",
  leetcode:"https://leetcode.com/u/H-k2004",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle: "CURIOUS WEB DEVELOPER & DEVOPS ENTHUSIAST EXPLORING MODERN TECH STACKS",
  skills: [
    emoji("💻 Develop responsive and dynamic web applications using HTML, CSS and JavaScript."),
    emoji("🔧 Learning and experimenting with DevOps tools like Docker, Kubernetes, and CI/CD pipelines"),
    emoji("☁️ Exploring cloud platforms and deploying projects on platforms like GitHub Pages."),
    emoji("📚 Passionate about continuous learning and building real-world projects"),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "fas fa-project-diagram"
    },
    {
      skillName: "jenkins",
      fontAwesomeClassname: "fas fa-user-cog"
    }

  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "K. S. School of Business Management & Information Technology ",
      logo: require("./assets/images/images.png"),
      subHeader: "Master of Science in Information Technology",
      duration: "July 2021 - May 2026",
    }
      ]
    };

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section
const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

const bigProjects = {
  title: "Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  display: true, //Set it to true to show workExperiences Section
  projects: [
    {
      type: "E-commers website",
      image: require("./assets/images/plant.png"),
      projectName: "GreenHeaven online plant selling system",
      projectDesc: "The Online Plant Selling System is a web-based platform that allows users to browse, select, and purchase a variety of plants online. It includes admin features to manage inventory, orders, and product listings efficiently.",
      date: "June 2023 ",
      footerLink: [
        {
          name: "Visit github page",
          url: "https://github.com/hinalkrami/Greenheaven"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      type: "AI/ML",
      image: require("./assets/images/ai.png"),
      projectName: "caption Generation",
      projectDesc: "Caption Generation with Keywords is an AI-based system that generates meaningful text or social media captions from user-provided keywords using NLP and deep learning. It helps automate content creation for posts, blogs, and marketing.",
      date: "July 2024 – December 2024",
      footerLink: [
        {
          name: "Visit page",
          url: "https://hinalkrami.github.io/Caption-generative-ai.github.io/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      type: "Soft computing",
      image: require("./assets/images/drugs.png"),
      projectName: "Medical Diagnosis System Using Fuzzy Logics",
      projectDesc: "Medical Diagnosis System using Fuzzy Logic is an intelligent system that evaluates patient symptoms and provides disease predictions by applying fuzzy logic rules. It mimics human reasoning to handle uncertainty and imprecision in medical data for more accurate diagnosis.",
      date: "January 2025 – May 2025",
      footerLink: [
        {
          name: "Visit github page",
          url: "https://github.com/hinalkrami/Medical-Diagnosis-System"
        }
        //  you can add extra buttons here.
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on


// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Linux training",
      image: require("./assets/images/Linux.png"),
      imageAlt: "Linux training",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/18_fnYk-4MY4D9Tc56qwB-6LWiTXuZTiI/view?usp=drive_link"
        },
      ]
    },
    {
      title: "Aws training",
      image: require("./assets/images/AWS.png"),
      imageAlt: "Aws training",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1N2jlXfsEbUBNi8sU_aR9WhCKcoPheaHh/view?usp=drive_link"
        },
      ]
    },

    {
      title: "Docker training",
      image: require("./assets/images/Docker.png"),
      imageAlt: "Docker trainig",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1_pNwYrujAl_awXM4bBiIfDAKUQZ2aBGu/view?usp=drive_link"
        },
      ]
    },

    {
      title: "Kubernetes training",
      image: require("./assets/images/Kubernetes.png"),
      imageAlt: "Kubernetes training",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1YrGh3leeUG0uHKvwgzSlvMI9T4e8iEdk/view?usp=drive_link"
        },
      ]
    },

    {
      title: "Git training",
      image: require("./assets/images/Git.png"),
      imageAlt: "Git training",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1hz8g7QK_aIH8xf7p3mc2sYZJpHHqCdmr/view?usp=drive_link"
        },
      ]
    }


  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 74340 13655",
  email_address: "hinalrami2004@gmail.com",
  display: true 
};

// Twitter Section

const twitterDetails = {
  userName: "Hinal Rami", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  workExperiences,
  techStack,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
