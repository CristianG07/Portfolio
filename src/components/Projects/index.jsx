import { useState } from "react";
import { CardsPeject } from "./CardsProject";
import { projectsData, projectsNav } from "../../data";
import { useEffect } from "react";

export const Projects = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projecs, setProjecs] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "all") {
      setProjecs(projectsData);
    } else {
      const newProject = projectsData.filter((projec) => {
        return projec.category.toLowerCase() === item.name;
      });
      setProjecs(newProject);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <section id="projects" className="py-16 text-white bg-bg">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-primary">Projects</span>
        </h3>
      </div>
      <br />
      <nav className="max-w-xl mx-auto mt-12 mb-6 rounded-lg">
        <ul className="flex flex-col md:flex-row items-center gap-2 md:justify-between">
          {projectsNav.map((item, index) => {
            return (
              <li
                key={index}
                onClick={(e) => handleClick(e, index)}
                className={`${
                  active === index
                    ? "text-cyan-600 bg-gray-700 rounded-xl px-4"
                    : ""
                } cursor-pointer transition-all duration-500 hover:text-cyan-600`}
              >
                {item.name}
              </li>
            );
          })}
        </ul>
      </nav>
      <section className="grid justify-center">
        <CardsPeject projecs={projectsData} />
      </section>
    </section>
  );
};
