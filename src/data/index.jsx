// import {
//   UilPhone,
//   UilEnvelope,
//   UilMapMarker,
//   UilWhatsapp,
// } from "@iconscout/react-unicons";

// projects images
// import Project1 from "./assets/images/projects/p1.jpg";
// import Project2 from "./assets/images/projects/p2.jpg";
// import Project3 from "./assets/images/projects/p3.jpg";
// import Project4 from "./assets/images/projects/p4.png";
// import Project5 from "./assets/images/projects/p5.png";
// import Project6 from "./assets/images/projects/p6.png";
// import Project7 from "./assets/images/projects/p7.png";

// skills images
// import SkillImg1 from "./assets/images/skills/html5.png";
// import SkillImg2 from "./assets/images/skills/css3.png";
// import SkillImg3 from "./assets/images/skills/js.png";
// import SkillImg4 from "./assets/images/skills/reactjs.png";
// import SkillImg5 from "./assets/images/skills/tailwind.png";
// import SkillImg6 from "./assets/images/skills/nodejs.png";
// import SkillImg7 from "./assets/images/skills/git.png";
// import SkillImg8 from "./assets/images/skills/figma.png";

export const menuLinks = [
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const aboutLinks = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>JavaScript</li>
        <li>React</li>
        <li>Tailwind</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>MongoDB</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>University of the Pacific, Colombia</li>
      </ul>
    ),
  },
  // {
  //   title: "Certifications",
  //   id: "certifications",
  //   content: (
  //     <ul className="list-disc pl-2">
  //       <li>AWS Cloud Practitioner</li>
  //       <li>Google Professional Cloud Developer</li>
  //     </ul>
  //   ),
  // },
];

// social
export const social_media = [
  {
    logo: "logo-instagram",
    href: "https://www.instagram.com/cristiangfrontend/",
  },
  {
    logo: "logo-facebook",
    href: "https://www.facebook.com/profile.php?id=100076453703945",
  },
  {
    logo: "logo-linkedin",
    href: "https://www.linkedin.com/in/cristian-gonzalez-3072b1172/",
  },
  { 
    logo: "logo-github",
    href: "https://github.com/CristianG07"
  },
];

// projects
export const projectsData = [
  {
    id: "6",
    // image: Project6,
    name: "Anon Ecommerce",
    stack: ["Html", "Css", "JavaScript"],
    github_link: "https://github.com/CristianG07/anon-ecommerce-website",
    live_link: "https://anon-ecommerce-website.vercel.app/",
    category: "",
  },
  {
    id: "5",
    // image: Project5,
    name: "CineFlix",
    stack: ["Html", "Css", "JavaScript"],
    github_link: "https://github.com/CristianG07/cineflix-master/tree/master",
    live_link: "https://cineflix-master.vercel.app/",
    category: "",
  },
  {
    id: "1",
    // image: Project1,
    name: "Jobs Search App",
    stack: ["Html", "Css"],
    github_link: "https://github.com/CristianG07/jobsearchapp_landing",
    live_link: "https://jobsearchapp-landing.vercel.app/",
    category: "Landing Pages",
  },
  {
    id: "2",
    // image: Project2,
    name: "Highking",
    stack: ["React", "Tailwind"],
    github_link: "https://github.com/CristianG07/highking_landing",
    live_link: "https://highking-landing.vercel.app/",
    category: "Landing Pages",
  },
  {
    id: "4",
    // image: Project4,
    name: "Filmlane",
    stack: ["Html", "Css", "JavaScript"],
    github_link: "https://github.com/CristianG07/filmlane-master",
    live_link: "filmlane-master.vercel.app",
    category: "",
  },
  {
    id: "3",
    // image: Project3
    name: "Landing Page Courses",
    stack: ["React", "Tailwind"],
    github_link: "https://github.com/CristianG07/Landing-Page-Courses",
    live_link: "https://landing-page-courses-phi.vercel.app/",
    category: "Landing Pages",
  },
  {
    id: "7",
    // image: Project7,
    name: "Descuenta$",
    stack: ["Html", "Css", "JavaScript", "Php"],
    github_link: "https://github.com/CristianG07/landing-descuentas",
    live_link: "https://descuentass.000webhostapp.com/",
    category: "Landing Pages",
  },
];

// projects
export const projectsNav = [
  {
    name: "all",
  },
  {
    name: "Landing Pages",
  },
  {
    name: "Ecommerces",
  },
  {
    name: "Social Networks",
  },
  {
    name: "Movie Websites",
  },
];

// skill
export const skills = [
  {
    // src: SkillImg1,
    title: "HTML",
    style: "shadow-orange-500",
  },
  {
    // src: SkillImg2,
    title: "CSS",
    style: "shadow-blue-500",
  },
  {
    // src: SkillImg3,
    title: "JavaScript",
    style: "shadow-yellow-500",
  },
  {
    // src: SkillImg4,
    title: "ReactJS",
    style: "shadow-sky-500",
  },
  {
    // src: SkillImg5,
    title: "Tailwind",
    style: "shadow-sky-400",
  },
  // {
  //   src: SkillImg6,
  //   title: "NodeJS",
  //   style: "shadow-orange-600",
  // },
  {
    // src: SkillImg7,
    title: "Git",
    style: "shadow-orange-600",
  }
];

// contact
export const contact_info = [
  {
    // logo: <UilPhone size="30" />,
    title: "Call Me",
    text: "+57 318 6806722",
  },
  {
    // logo: <UilWhatsapp size="30" />,
    title: "Whatsapp",
    text: "+57 318 6806722",
  },
  {
    // logo: <UilEnvelope size="30" />,
    title: "Email",
    text: "crisgonzalez07g@gmail.com",
  },
  {
    // logo: <UilMapMarker size="30" />,
    title: "Location",
    text: "Colombia - Buenavetura",
  },
];