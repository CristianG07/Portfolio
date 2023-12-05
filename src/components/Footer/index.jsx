import { Link } from "react-scroll";
import { menuLinks, social_media } from "../../data";

export const Footer = () => {
  return (
    <footer className="bg-hero-bg w-full text-sm py-24 text-center text-white flex flex-col gap-10">
      <div className="flex lg:gap-16 gap-8 items-center flex-wrap justify-center">
        <div>
          <h4 className="text-4xl font-bold">
            Cristian <span className="text-primary">G.</span>
          </h4>
          <p className="text-white/60">Frontend Developer</p>
        </div>
        <div>
          <ul className="flex items-center justify-center flex-wrap gap-6 text-lg">
            {menuLinks.map((menu, i) => (
              <li
                key={i}
                className="hover:text-primary duration-700"
              >
                <Link
                  to={menu.link}
                  className="cursor-pointer"
                >
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-3xl flex gap-5">
          {social_media.map((icon, i) => (
            <div
              key={i}
              className="text-gray-600 hover:text-primary transition-colors duration-700 ease-in-out"
            >
              <a href={icon.href} target="_blank">
                {icon.logo}
              </a>
            </div>
          ))}
        </div>
      </div>
      <p className="text-white/60">
        Copyright © 2022 CristianG. All Rights reserved.
      </p>
    </footer>
  );
};
