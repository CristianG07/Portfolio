import { FiPhone } from "react-icons/fi";
import { FaWhatsapp, FaInstagram, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { LuMapPin } from "react-icons/lu";

// projects images
import Project1 from "../assets/projects/p1.jpg";
import Project2 from "../assets/projects/p2.jpg";
import Project3 from "../assets/projects/p3.jpg";
import Project4 from "../assets/projects/p4.png";
import Project5 from "../assets/projects/p5.png";
import Project6 from "../assets/projects/p6.png";
import Project7 from "../assets/projects/p7.png";

// skills images
import SkillImg1 from "../assets/skills/html5.png";
import SkillImg2 from "../assets/skills/css3.png";
import SkillImg3 from "../assets/skills/js.png";
import SkillImg4 from "../assets/skills/reactjs.png";
import SkillImg5 from "../assets/skills/tailwind.png";
import SkillImg6 from "../assets/skills/nodejs.png";
import SkillImg7 from "../assets/skills/express.png";
import SkillImg8 from "../assets/skills/mongodb.png";
import SkillImg9 from "../assets/skills/git.png";
// import SkillImg8 from "./assets/skills/figma.png";

export const menuLinks = [
  { name: "Home", link: "home" },
  { name: "About", link: "about" },
  { name: "Projects", link: "projects" },
  { name: "Contact", link: "contact" },
];

// skill
const skills = [
  {
    src: SkillImg1,
    title: "HTML",
  },
  {
    src: SkillImg2,
    title: "CSS",
  },
  {
    src: SkillImg3,
    title: "JavaScript",
  },
  {
    src: SkillImg4,
    title: "ReactJS",
  },
  {
    src: SkillImg5,
    title: "Tailwind",
  },
  {
    src: SkillImg6,
    title: "NodeJS",
  },
  {
    src: SkillImg7,
    title: "ExpressJS",
  },
  {
    src: SkillImg8,
    title: "MongoDB",
  },
  {
    src: SkillImg9,
    title: "Git",
  },
];

export const aboutLinks = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="grid grid-cols-2 sm:grid-cols-3">
        {skills.map((skill) => (
          <li key={skill.title} className="flex items-center gap-1">
            <img
              src={skill.src}
              alt={skill.title}
              className="w-10"
            />
            <span>{skill.title}</span>
          </li>
        ))}
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
];

// social
export const social_media = [
  {
    logo: <FaInstagram/>,
    href: "https://www.instagram.com/cristiangfrontend/",
  },
  {
    logo: <FaFacebook/>,
    href: "https://www.facebook.com/profile.php?id=100076453703945",
  },
  {
    logo: <FaLinkedin/>,
    href: "https://www.linkedin.com/in/cristian-gonzalez-3072b1172/",
  },
  { 
    logo: <FaGithub/>,
    href: "https://github.com/CristianG07"
  },
];

// projects
export const projectsData = [
  {
    id: "6",
    image: Project6,
    name: "Anon Ecommerce",
    stack: ["Html", "Css", "Js"],
    github_link: "https://github.com/CristianG07/anon-ecommerce-website",
    live_link: "https://anon-ecommerce-website.vercel.app/",
    category: "Ecommerces",
  },
  {
    id: "5",
    image: Project5,
    name: "CineFlix",
    stack: ["Html", "Css", "Js"],
    github_link: "https://github.com/CristianG07/cineflix-master/tree/master",
    live_link: "https://cineflix-master.vercel.app/",
    category: "Movie Websites",
  },
  {
    id: "1",
    image: Project1,
    name: "Jobs Search App",
    stack: ["Html", "Css"],
    github_link: "https://github.com/CristianG07/jobsearchapp_landing",
    live_link: "https://jobsearchapp-landing.vercel.app/",
    category: "Landing Pages",
  },
  {
    id: "2",
    image: Project2,
    name: "Highking",
    stack: ["React", "Tailwind"],
    github_link: "https://github.com/CristianG07/highking_landing",
    live_link: "https://highking-landing.vercel.app/",
    category: "Landing Pages",
  },
  {
    id: "4",
    image: Project4,
    name: "Filmlane",
    stack: ["Html", "Css", "Js"],
    github_link: "https://github.com/CristianG07/filmlane-master",
    live_link: "filmlane-master.vercel.app",
    category: "Movie Websites",
  },
  {
    id: "3",
    image: Project3,
    name: "Page Courses",
    stack: ["React", "Tailwind"],
    github_link: "https://github.com/CristianG07/Landing-Page-Courses",
    live_link: "https://landing-page-courses-phi.vercel.app/",
    category: "Landing Pages",
  },
  {
    id: "7",
    image: Project7,
    name: "Descuenta$",
    stack: ["Html", "Css", "Js", "Php"],
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

// contact
export const contact_info = [
  {
    logo: <FiPhone size="30"/>,
    title: "Call Me",
    text: "+57 318 6806722",
  },
  {
    logo: <FaWhatsapp size="30" />,
    title: "Whatsapp",
    text: "+57 318 6806722",
  },
  {
    logo: <HiOutlineMail size="30" />,
    title: "Email",
    text: "crisgonzalez07g@gmail.com",
  },
  {
    logo: <LuMapPin size="30" />,
    title: "Location",
    text: "Colombia - Buenavetura",
  },
];