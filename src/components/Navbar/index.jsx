import { useState } from "react";

// icons
import { DiCssdeck } from "react-icons/di";
import { FaBars } from 'react-icons/fa';

// data
import { menuLinks } from "../../data";
import { Link } from "react-scroll";


export const Navbar = () => {
  const [IsOpen, setIsOpen] = useState(false)

  return (
    <header className="flex justify-center sticky top-0 left-0 z-10 h-20 bg-[#151515] text-white">
      <nav className="flex justify-between items-center w-[85%]">
        <div className="flex">
          <Link to="home" className="flex items-center justify-center">
            <DiCssdeck size="3rem" color="#854CE6" /> <h6 className="text-3xl font-semibold">Cristian <span className="text-primary">G.</span></h6>
          </Link>
        </div>
        <ul className="md:flex hidden items-center gap-6 font-semibold">
          {menuLinks.map((link) => (
            <li key={link.name}>
              <Link to={link.link} className="hover:text-primary transition duration-700 ease-in-out">{link.name}</Link>
            </li>
          ))}
        </ul>
        <button className="block md:hidden" onClick={() => setIsOpen(!IsOpen)}>
          <FaBars size="2rem"/>
        </button>
      </nav>
        <nav className={`${IsOpen ? '' : 'hidden'} bg-card_light bg-opacity-50 md:hidden w-full absolute top-20 px-7 py-10 transition duration-500 ease-in-out text-lg font-medium`}>
          <ul>
            {menuLinks.map((link) => (
              <li key={link.name} className="mb-5" onClick={() => setIsOpen(!IsOpen)}>
                <Link to={link.link} className="hover:text-primary active:text-primary transition-colors duration-500 ease-in-out inline-block w-full" >{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
    </header>
  );
};
