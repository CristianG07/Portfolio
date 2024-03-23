import { FiPhone } from "react-icons/fi";
import { FaWhatsapp, FaInstagram, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { TbBrandFiverr } from "react-icons/tb";
import { HiOutlineMail } from "react-icons/hi";
import { LuMapPin } from "react-icons/lu";

// projects images
import { p1, p10, p2, p3, p4, p5, p6, p7, p8, p9 } from "../assets/projects";

// skills images
import { css, express, git, html, js, mongodb, nodejs, reactjs, tailwind } from "../assets/skills";

export const menuLinks = [
  { name: "Home", link: "home" },
  { name: "About", link: "about" },
  { name: "Projects", link: "projects" },
  { name: "Contact", link: "contact" },
];

// skill
const skills = [
  {
    src: html,
    title: "HTML",
  },
  {
    src: css,
    title: "CSS",
  },
  {
    src: js,
    title: "JavaScript",
  },
  {
    src: reactjs,
    title: "ReactJS",
  },
  {
    src: tailwind,
    title: "Tailwind",
  },
  {
    src: nodejs,
    title: "NodeJS",
  },
  {
    src: express,
    title: "ExpressJS",
  },
  {
    src: mongodb,
    title: "MongoDB",
  },
  {
    src: git,
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
  // {
  //   name: 'facebook',
  //   logo: <FaFacebook/>,
  //   href: "https://www.facebook.com/profile.php?id=100076453703945",
  // },
  {
    name: 'linkedin',
    logo: <FaLinkedin/>,
    href: "https://www.linkedin.com/in/cristian-gonzalez-3072b1172/",
  },
  { 
    name: 'github',
    logo: <FaGithub/>,
    href: "https://github.com/CristianG07"
  },
  {
    name: 'fiverr',
    logo: <TbBrandFiverr/>,
    href: "https://www.fiverr.com/cristiangg07",
  },
];

// projects
export const projectsData = [
  {
    id: "10",
    image: p10,
    name: "Vacancies",
    stack: ["React", "Tailwind"],
    github_link: "https://github.com/CristianG07/Tech-Cloud",
    live_link: "http://tech-cloud-ten.vercel.app",
    category: "Ecommerces",
  },
  {
    id: "9",
    image: p9,
    name: "Tech-Cloud",
    stack: ["React", "Tailwind"],
    github_link: "https://github.com/CristianG07/Tech-Cloud",
    live_link: "http://tech-cloud-ten.vercel.app",
    category: "Ecommerces",
  },
  {
    id: "8",
    image: p8,
    name: "Coursean",
    stack: ["React", "Tailwind"],
    github_link: "https://github.com/CristianG07/Coursean-Curses-Online-FrontEnd",
    live_link: "https://coursean.vercel.app/",
    category: "Ecommerces",
  },
  {
    id: "6",
    image: p6,
    name: "Anon Ecommerce",
    stack: ["Html", "Css", "Js"],
    github_link: "https://github.com/CristianG07/anon-ecommerce-website",
    live_link: "https://anon-ecommerce-website.vercel.app/",
    category: "Ecommerces",
  },
  {
    id: "4",
    image: p4,
    name: "Filmlane",
    stack: ["Html", "Css", "Js"],
    github_link: "https://github.com/CristianG07/filmlane-master",
    live_link: "https://filmlane-master.vercel.app/",
    category: "Movie Websites",
  },
  {
    id: "5",
    image: p5,
    name: "CineFlix",
    stack: ["Html", "Css", "Js"],
    github_link: "https://github.com/CristianG07/cineflix-master/tree/master",
    live_link: "https://cineflix-master.vercel.app/",
    category: "Movie Websites",
  },
  {
    id: "1",
    image: p1,
    name: "Jobs Search App",
    stack: ["Html", "Css"],
    github_link: "https://github.com/CristianG07/jobsearchapp_landing",
    live_link: "https://jobsearchapp-landing.vercel.app/",
    category: "Landing Pages",
  },
  {
    id: "2",
    image: p2,
    name: "Highking",
    stack: ["React", "Tailwind"],
    github_link: "https://github.com/CristianG07/highking_landing",
    live_link: "https://highking-landing.vercel.app/",
    category: "Landing Pages",
  },
  {
    id: "3",
    image: p3,
    name: "Page Courses",
    stack: ["React", "Tailwind"],
    github_link: "https://github.com/CristianG07/Landing-Page-Courses",
    live_link: "https://landing-page-courses-phi.vercel.app/",
    category: "Landing Pages",
  },
  {
    id: "7",
    image: p7,
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