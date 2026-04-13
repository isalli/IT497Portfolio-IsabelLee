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
  username: "Isabel Lee",
  title: "Hi all, I'm Isabel",
  subTitle: emoji(
    "I am a software engineering student with experience in quality assurance and data analysis, preparing for a backend development career. I focus on building reliable, secure, and well-tested systems that support meaningful outcomes. My faith guides my technical decisions, emphasizing integrity, accountability, and service in all professional interactions. 🚀"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Portfolio Summary Section

const portfolioSummary = {
  display: true, // Set false to hide this section
  resumeSummary: "Software Engineering Student with strengths in backend development, QA, and data analytics. Experienced in web and mobile application testing, data validation, and ethical decision-making. Committed to integrity, service-oriented technology, and continuous learning. My Professional Growth Portfolio demonstrates readiness for backend development roles and reflects my technical, communicative, and professional growth. I successfully built and published a professional portfolio website showcasing backend projects, skills, and experience. Skills Demonstrated: Backend development and debugging; Technical documentation and communication; Time management and organization; Collaboration and peer feedback.",
  projectsOverview: "These projects reflect my growth in leadership, technical accuracy, and responsibility:",
  projects: [
    {
      title: "Vitals Web Application",
      role: "Developer & Scrum Master",
      course: "CS 380",
      description: "Led development of a web-based health monitoring application"
    },
    {
      title: "Mobile Fall-Detection Application",
      role: "Mobile Developer & QA Contributor",
      course: "CS 470",
      description: "Developed and tested mobile application for fall detection"
    },
    {
      title: "Data Analytics Project",
      role: "Data Analyst",
      employer: "Ensign College",
      position: "Student Employee",
      description: "Conducted data validation and analysis for organizational decision-making"
    }
  ]
};

// Social Media Links

const socialMediaLinks = {
  github: "",
  linkedin: "",
  gmail: "",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: false // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "BACKEND DEVELOPER FOCUSED ON QUALITY ASSURANCE AND RELIABLE SYSTEMS",
  skills: [
    emoji(
      "⚡ Build reliable, secure, and well-tested backend systems"
    ),
    emoji("⚡ Quality assurance and data validation processes"),
    emoji(
      "⚡ Development practices emphasizing integrity and accountability"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Ensign College",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Bachelor of Science in Software Engineering",
      duration: "Add your graduation date",
      desc: "Add your education description",
      descBullets: [
        "Add relevant coursework or achievements"
      ]
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
      progressPercentage: "70%"
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
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Analyst",
      company: "Ensign College",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "Student Employee",
      desc: "Conducted data validation and analysis for organizational decision-making.",
      descBullets: [
        "Ensured data accuracy and integrity",
        "Supported institutional decisions with validated data"
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

const bigProjects = {
  title: "Projects",
  subtitle: "PROJECTS REFLECT MY GROWTH IN LEADERSHIP, TECHNICAL ACCURACY, AND RESPONSIBILITY",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Vitals Web Application",
      projectDesc: "Developer & Scrum Master - CS 380",
      footerLink: [
        {
          name: "Learn More",
          url: ""
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Mobile Fall-Detection Application",
      projectDesc: "Mobile Developer & QA Contributor - CS 470",
      footerLink: [
        {
          name: "Learn More",
          url: ""
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, and Professional Accomplishments",

  achievementsCards: [
    {
      title: "Add Achievement Title",
      subtitle:
        "Add achievement description here",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Achievement Logo",
      footerLink: [
        {
          name: "Learn More",
          url: ""
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "Sharing knowledge and insights from my journey in software engineering",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "",
      title: "Add your blog title",
      description:
        "Add your blog description"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "Sharing insights and experiences from my journey"
  ),

  talks: [
    {
      title: "Add talk title",
      subtitle: "Add event and date",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Add your podcast content",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
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

// Faith and Values Section
const faithSection = {
  title: emoji("Faith & Values 🙏"),
  subtitle: "How My Faith Guides My Professional and Personal Journey",
  display: true,
  categories: [
    {
      categoryName:
        "Detailed Action Plan for Ongoing Spiritual and Professional Development",
      categoryDescription:
        "A goals-focused plan to guide consistent growth in discipleship and career preparation.",
      principles: [
        {
          reference: "Short-Term (0-12 Months)",
          title: "Spiritual Development Goals",
          content:
            "Maintain weekly reflection through journaling or prayer focused on integrity, service, and accountability. Practice Christlike leadership in academic and professional teamwork. Conduct quarterly self-assessments to ensure alignment between values and actions."
        },
        {
          reference: "Short-Term (0-12 Months)",
          title: "Professional Development Goals",
          content:
            "Continue building and refining backend development projects. Update my professional portfolio website quarterly. Improve technical communication through documentation and collaboration."
        },
        {
          reference: "Long-Term (1-5 Years)",
          title: "Long-Term Goals",
          content:
            "Integrate ethical decision-making consistently into my technical work. Grow into leadership or mentorship roles in my field. Maintain my portfolio as a living document reflecting continuous growth."
        },
        {
          reference: "Commitment",
          title: "Commitment Statement",
          content:
            "I commit to lifelong growth by aligning my professional skills with spiritual values, ensuring integrity, service, and accountability guide my career."
        }
      ]
    },
    {
      categoryName: "REFLECTIVE ESSAY: ALIGNMENT AND EVOLUTION OF GOALS",
      categoryDescription:
        "A reflection on how my professional and spiritual goals aligned and matured during this course.",
      principles: [
        {
          reference: "Initial SMART Goals",
          title: "Beginning of the Course",
          content:
            "At the beginning of the course, I set two SMART goals: to build a professional backend development portfolio and to integrate Christlike principles into my academic and professional work through consistent reflection."
        },
        {
          reference: "Evidence of Alignment",
          title: "Portfolio Outcomes",
          content:
            "Both portfolios align strongly with these goals. I successfully published a professional portfolio website and completed at least ten spiritual reflections documenting discipleship through service, integrity, teamwork, and technical contribution."
        },
        {
          reference: "Goal Evolution",
          title: "From Completion to Character",
          content:
            "As the course progressed, my goals evolved from focusing primarily on task completion to emphasizing deeper ethical awareness, consistency of values, and long-term professional identity. I learned that true success involves not only technical competence but also character and accountability."
        },
        {
          reference: "Final Reflection",
          title: "Prepared to Move Forward",
          content:
            "This course helped me align my professional ambitions with my spiritual values, preparing me to move forward as a capable, ethical, and service-oriented backend developer."
        }
      ]
    },
    {
      categoryName: "Faith",
      categoryDescription: "Core spiritual principles that guide my path",
      principles: [
        {
          reference: "Ether 12:27 — Strength Through Humility",
          title: "Ether 12:27",
          content: "This scripture teaches that weaknesses can become strengths when we come unto the Lord with humility. This principle connects directly to my experience studying in Brazil, where I faced language barriers, cultural differences, and unkind group environments. Through these challenges, the Lord strengthened me, protected me, and helped me remain faithful. This experience taught me that faith allows the Lord to transform difficult situations into opportunities for spiritual and personal growth."
        },
        {
          reference: "James 1:5 — Seeking Guidance in Trials",
          title: "James 1:5",
          content: "This scripture teaches me to seek guidance from God during moments of doubt or difficulty. I believe that when we ask sincerely, our Savior shows us the way through the guidance of the Holy Ghost, if we are willing to listen. There were many moments in my life when I felt uncertain about my career path and unsure of which direction to take. Through prayer, persistence, and continued learning, I was guided to improve my technical skills and gradually find better professional opportunities."
        },
        {
          reference: "Alma 37:37 — Counsel with the Lord in All Thy Doings",
          title: "Alma 37:37",
          content: "I turn to this verse when I feel overwhelmed by responsibilities or important decisions. It reminds me to counsel with the Lord daily—whether deciding where to study, where to apply for internships, what steps to take in my career, or even personal matters such as preparing for my eternal companion. When I invite the Lord into my decisions, I feel more confident and accurate in my next steps, both in major life choices and in everyday interactions."
        },
        {
          reference: "President Dieter F. Uchtdorf — The Infinite Power of Hope",
          title: "President Dieter F. Uchtdorf",
          content: "President Uchtdorf teaches that hope in Jesus Christ gives us strength to move forward despite uncertainty. This message aligns closely with my experiences in Brazil and throughout my educational journey—times when I felt alone, tested, or unsure. Hope in Christ helped me remain firm in my faith and continue progressing, trusting that the Lord had a purpose for each step of my path."
        }
      ]
    },
    {
      categoryName: "Integrity",
      categoryDescription: "Moral principles that guide my professional decisions",
      principles: [
        {
          reference: "Doctrine & Covenants 121:45 — Virtue and Christlike Love",
          title: "Doctrine & Covenants 121:45",
          content: "This verse reminds me to fill my thoughts with virtue and act with charity. It reflects my commitment to maintain integrity in academic and professional environments, even when external pressures encourage different behavior. This scripture guides how I interact with others, how I approach ethical decisions, and how I strive to reflect Christlike values in my work and relationships."
        },
        {
          reference: "Moroni 7:45–47 — Charity, the Pure Love of Christ",
          title: "Moroni 7:45–47",
          content: "This scripture invites me to act with pure intentions in everything I do. It has helped me reflect deeply on my motivation to serve and be kind to others, even when some people may misunderstand my intentions or think I seek personal advantage. Charity reminds me to act with sincerity, patience, and love, regardless of how my actions are perceived, trusting that the Lord knows the intent of my heart."
        }
      ]
    },
    {
      categoryName: "Gratitude and Service",
      categoryDescription: "Principles that help me maintain perspective and purpose",
      principles: [
        {
          reference: "President Thomas S. Monson — The Divine Gift of Gratitude",
          title: "President Thomas S. Monson",
          content: "President Monson teaches that gratitude opens our hearts to joy and spiritual clarity. His message helps me recognize the many blessings in my life, including my parents' support, the educational and professional opportunities I have received, and the Lord's guidance throughout each stage of my journey—from Peru, to Brazil, and now to the United States. Gratitude helps me remain humble and mindful of God's hand in my progress."
        },
        {
          reference: "Mosiah 2:17 — Service as a Form of Discipleship",
          title: "Mosiah 2:17",
          content: "This scripture teaches that when we serve others, we are truly serving God. It reflects my desire to use my software engineering skills to bless others—through teamwork, tutoring, solving problems, and building technology that can positively impact people's lives. Service has helped me stay grounded and reminded me that my education and career are meant to be used to uplift others, not only myself."
        }
      ]
    },
    {
      categoryName: "Final Conclusion",
      categoryDescription:
        "A summary of how reflective practice strengthened my discipleship and direction.",
      principles: [
        {
          reference: "Spiritual Progression Summary",
          title: "Course Reflection",
          content:
            "This portfolio documents my spiritual growth and highlights how reflective practice strengthened my discipleship during this course. Through intentional weekly reflections, I became more aware of how faith, integrity, and service guide my professional and academic choices."
        },
        {
          reference: "Key Areas of Growth",
          title: "Increased Self-Awareness and Reflection",
          content:
            "I developed deeper self-awareness through consistent reflection and spiritual evaluation."
        },
        {
          reference: "Key Areas of Growth",
          title: "Integration of Faith with Software Engineering Practice",
          content:
            "I learned to connect gospel principles to technical decisions, collaboration, and professional preparation."
        },
        {
          reference: "Key Areas of Growth",
          title: "Ethical Consistency in Teamwork and Responsibilities",
          content:
            "I strengthened my commitment to integrity, accountability, and ethical behavior in academic and professional settings."
        },
        {
          reference: "Key Areas of Growth",
          title: "A Clearer Sense of Purpose and Service",
          content:
            "I gained greater clarity that my education and career are a path to serve others with faith and purpose."
        }
      ]
    }
  ]
};

// Ethical Dilemma Analysis Section
const ethicalDilemmaSection = {
  title: emoji("Ethical Dilemma Analysis ⚖️"),
  subtitle: "How I Navigate Ethical Challenges in My Professional Practice",
  display: true,
  dilemmaDescription: "While working as a student data analyst, I encountered an ethical dilemma when a report was requested before the dataset refresh process was complete. Delivering the report immediately would have meant sharing incomplete and potentially inaccurate data. Because this report was used to support institutional decisions, releasing incorrect information could have led to poor decision making, misallocation of resources, or misunderstandings that affected students and administrators. This situation placed me in a position where speed and convenience conflicted with accuracy and responsibility.",
  analysisHeading: "How I Responded",
  analysisContent: "Although there was pressure to deliver the report quickly, I recognized that my professional responsibility was to ensure data integrity. As someone working with institutional data, I understood that trust is built on accuracy, transparency, and accountability. Releasing information I knew was not fully validated would have compromised that trust. I therefore chose to delay the report and clearly communicate the situation to the stakeholders involved. I explained why the data was not ready, outlined the risks of using incomplete information, and ensured the dataset was fully refreshed and validated before releasing the final version.",
  reflectionHeading: "What I Learned",
  reflectionPoints: [
    "Ethical decision making in technology often requires the courage to slow down and choose what is right rather than what is easy.",
    "Integrity is not only demonstrated through large actions but also through small, everyday decisions such as choosing accuracy over speed or honesty over convenience.",
    "Ethical behavior protects not only data but also people, relationships, and institutional trust.",
    "My faith and professional identity are deeply connected; my ethical choices at work are one way I live my spiritual principles.",
    "As I continue preparing for a career in backend software development, prioritizing integrity, accountability, and ethical responsibility in every system I design will be fundamental to my approach."
  ],
  spiritualPerspective: "From a spiritual perspective, this dilemma strengthened my commitment to live my discipleship through my professional actions. Choosing honesty and responsibility aligned with my values and helped me act as a steward of the trust placed in me."
};

// Reflective Experience: Spiritual and Professional Interplay Section
const reflectiveExperienceSection = {
  title: emoji("Reflective Experience 🙌"),
  subtitle: "Spiritual and Professional Interplay",
  display: true,
  introContent: "During a quiet reflective experience focused on my temple covenants and spiritual journey, I felt peace, clarity, and deep gratitude. I recognized the hand of the Lord guiding me through paths I did not originally plan to take, especially my decision to return to school. At one point, I did not want to continue my education, yet now, as I approach graduation at Ensign College, I clearly see how the Lord gently guided me back to an old dream that is becoming an engineer and earning a degree in the United States.",
  journeyReflection: {
    heading: "A Journey of Faith and Resilience",
    content: "My time studying in Brazil, with its language barriers and cultural challenges, also strengthened my faith and resilience. Receiving my temple endowment and attending the temple regularly helped me recognize what I needed to change in my life, including leaving behind habits or influences that were not helping me stay strong in the gospel and choosing counsel that brought me closer to the Lord and to my family."
  },
  serviceAndBalance: {
    heading: "Service and Professional Purpose",
    content: "During this journey, I also learned the importance of continuing to serve others. Even while managing academic pressure and personal growth, I felt prompted to find ways to help and uplift those around me. Service helped me stay grounded and reminded me that my education and career are not only about personal achievement, but about becoming someone who can bless others."
  },
  integration: {
    heading: "Integration of Faith and Work",
    content: "This reflection helped me understand that my spiritual and professional lives are deeply intertwined. My faith influences how I approach ethics, teamwork, learning, and service, while my professional experiences strengthen my testimony through patience, humility, and responsibility. Recognizing the Lord's hand in my education and preparation has brought me peace and joy, and I now see my career as a path to live my discipleship and serve others through my skills."
  },
  keyInsights: [
    {
      title: "Divine Guidance",
      description: "The Lord guided me back to completing my education, a dream I had temporarily abandoned."
    },
    {
      title: "Strengthened Faith",
      description: "Challenges in Brazil and temple work deepened my faith and personal resilience."
    },
    {
      title: "Service-Oriented Approach",
      description: "My education and career are meant to bless others, not just achieve personal success."
    },
    {
      title: "Unified Identity",
      description: "My faith and professional life are inseparable; ethical choices at work are spiritual expressions."
    },
    {
      title: "Peace and Purpose",
      description: "Recognizing the Lord's hand brings clarity that my backend development career serves a greater purpose."
    }
  ]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "Add your phone number",
  email_address: "Add your email"
};

// Twitter Section

const twitterDetails = {
  userName: "", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection,
  portfolioSummary,
  faithSection,
  ethicalDilemmaSection,
  reflectiveExperienceSection
};
