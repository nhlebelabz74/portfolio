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
    delano,
    kayisha,
    nikita,
    hexa,
    nike,
    dalle
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
      title: "Leadership",
      icon: web,
    },
    {
      title: "Critical Thinking",
      icon: mobile,
    },
    {
      title: "Discipline",
      icon: backend,
    },
    {
      title: "Team Work",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Android Studio",
      icon: android,
    },
    {
      name: "SQL 5",
      icon: sql,
    },
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
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
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
        "Participated in intensive case workshops focused on problem-solving and consulting methodologies.",
        "Collaborated with a diverse cohort to tackle real-world business case studies and simulations.",
        "Demonstrated leadership potential through proactive participation and analytical reasoning.",
        "Built a network with professionals, gaining insights into the consulting industry through BCG.",
      ],
    },
    {
      title: "Student Council Chairperson",
      company_name: "School of CSAM, Wits University",
      icon: csam,
      iconBg: "#fff",
      date: "Nov 2023 - Oct 2024",
      points: [
        "Led initiatives and represented the interests of students in the School of Computer Science and Applied Mathematics.",
        "Coordinated with external organizations to provide workshops and resources aligned with career readiness.",
        "Designed and implemented a streamlined communication platform for efficient updates on council activities.",
        "Championed initiatives to modernize curriculum content by collaborating with staff and industry experts.",
      ],
    },
    {
      title: "First Year Experience Co-Mentor (Lead)",
      company_name: "STPU, Wits University",
      icon: fye,
      iconBg: "#fff",
      date: "Feb 2024 - Oct 2024",
      points: [
        "Mentored first-year students to support academic adjustment and personal development.",
        "Facilitated workshops to help mentees navigate university life and career planning.",
        "Monitored student academic progress and communicated insights to FYE staff in order to develop new ideas on mentoring the first years.",
        "Worked with a co-mentor, Priyanka Gohil, to provide our mentees the best possible experience.",
      ],
    },
    {
      title: "Tutor (TA)",
      company_name: "School of CSAM, Wits University",
      icon: csam,
      iconBg: "#fff",
      date: "Feb 2024 - Present",
      points: [
        "Assist students in understanding complex concepts, improving problem-solving skills and preparing for exams.",
        "Received positive feedback from students and school for dedication and effectiveness.",
        "Monitor student progress and communicate insights to academic staff.",
        "Encourage critical thinking and problem-solving through interactive learning techniques.",
      ],
    },
    {
      title: "Head of Events and Planning",
      company_name: "Wits Consulting Club",
      icon: wcc,
      iconBg: "#051D41",
      date: "Oct 2024 - Present",
      points: [
        "Manage a team to execute detailed planning for multiple large-scale events simultaneously.",
        "Work closely with corporate relations to maintain relationships with sponsors and partners.",
      ],
    },
    {
      title: "Tech Incubation Hub Intern",
      company_name: "LnP Beyond Legal",
      icon: lnp,
      iconBg: "#FC127C",
      date: "Feb 2025 - Jan 2026",
      points: [
        "Learning how to use Microsoft Power Apps to perform form automation and data management.",
        "Will collaborate with the development team to create and maintain automated processes."
      ],
    },
  ];
  
  const testimonials = [
    {
      name: "Nikita Lalla",
      designation: "CEO",
      company: "LnP Beyond Legal",
      image: nikita,
      site: "https://lnpbeyondlegal.com/",
    },
    {
      name: "Delano Martin",
      designation: "Tech Intern",
      company: "LnP Beyond Legal",
      image: delano,
      site: "https://delanomartin.com"
    },
    {
      name: "Kayisha Naidoo",
      designation: "Intern",
      company: "Afretech",
      image: kayisha,
      site: "https://kayishanaidoo.github.io/"
    },
  ];
  
const projects = [
    {
      name: "Nike Clone",
      description: "A clone of the Nike website homepage. The site is mobile responsive thanks to tailwindcss. This project was created to experiment with Tailwind CSS and React.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "green-text-gradient",
        }
      ],
      image: nike,
      source_code_link: "https://nhlebelabz74.github.io/nike-experiment/",
    },
    {
        name: "Dall-E Clone",
        description: 
          "A web application that uses OpenAI's api to allow users to generate, share and download images based on text prompts from other users.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient"
            },
            {
                name: "mongodb",
                color: "green-text-gradient"
            },
            {
                name: "cloudinary",
                color: "pink-text-gradient"
            }
        ],
        image: dalle,
        source_code_link: "https://themadking74-dall-e-clone.netlify.app/"
    },
    {
        name: "Hexafund",
        description: "This project aims to equip the organisations with a central place to advertise all their funding opportunities and manage all the applications they get for funding",
        tags: [
            {
                name: "Azure",
                color: "blue-text-gradient"
            },
            {
                name: "mongodb",
                color: "green-text-gradient"
            },
            {
                name: "html/css",
                color: "pink-text-gradient"
            }
        ],
        image: hexa,
        source_code_link: "https://hexafund.azurewebsites.net/"
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