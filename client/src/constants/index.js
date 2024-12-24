import {
    mobile,
    backend,
    creator,
    csam,
    fye,
    wcc,
    lnp,
    bcg,
    web,
    javascript,
    html,
    css,
    reactjs,
    java,
    sql,
    cpp,
    android,
    power,
    tailwind,
    nodejs,
    mongodb,
    git,
    carrent,
    jobit,
    tripguide,
} from "../assets";
  
export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "SQL 5",
      icon: sql,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Android Studio",
      icon: android,
    },
    {
      name: "Power Apps",
      icon: power,
    },
  ];
  
  const experiences = [
    {
      title: "Talent@BCG",
      company_name: "Boston Consulting Group",
      icon: bcg,
      iconBg: "#0D744D",
      date: "May 2022 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Student Council Chairperson",
      company_name: "School of CSAM, Wits University",
      icon: csam,
      iconBg: "#fff",
      date: "Nov 2023 - Oct 2024",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "First Year Experience Mentor (Lead)",
      company_name: "STPU, Wits University",
      icon: fye,
      iconBg: "#fff",
      date: "Feb 2024 - Oct 2024",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Tutor (TA)",
      company_name: "School of CSAM, Wits University",
      icon: csam,
      iconBg: "#fff",
      date: "Feb 2024 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Head of Events and Planning",
      company_name: "Wits Consulting Club",
      icon: wcc,
      iconBg: "#051D41",
      date: "Oct 2024 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Tech Incubation Hub Intern",
      company_name: "LnP Beyond Legal",
      icon: lnp,
      iconBg: "#FC127C",
      date: "Feb 2025 - Jan 2026",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Nikita Lella",
      designation: "CEO",
      company: "LnP Beyond Legal",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Delano Martin",
      designation: "Tech Intern",
      company: "LnP Beyond Legal",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Kayisha Naidoo",
      designation: "Intern",
      company: "Afretech",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
        name: "Job IT",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient"
            },
            {
                name: "restapi",
                color: "green-text-gradient"
            },
            {
                name: "scss",
                color: "pink-text-gradient"
            }
        ],
        image: jobit,
        source_code_link: "https://github.com/"
    },
    {
        name: "Trip Guide",
        description:
            "Hello hello hello A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient"
            },
            {
                name: "supabase",
                color: "green-text-gradient"
            },
            {
                name: "css",
                color: "pink-text-gradient"
            }
        ],
        image: tripguide,
        source_code_link: "https://github.com/"
    }
];

const styles = {
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-16 py-10",

  heroHeadText:
    "font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",
  heroSubText:
    "text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",

  sectionHeadText:
    "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
  sectionSubText:
    "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider",
};

// production: https://portfolio-site-lxne.onrender.com/
const baseUrl = "https://portfolio-site-lxne.onrender.com/"; /*"http://localhost:5000/" // testing*/ 
  
export { services, technologies, experiences, testimonials, projects, styles, baseUrl };