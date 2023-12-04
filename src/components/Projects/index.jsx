import { useState, useEffect } from "react";
import { CardsPeject } from "./CardsProject";
import { projectsData, projectsNav } from "../../data";
import { waveContact } from "../../assets/img";

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
    <section id="projects" className="text-white gradian_section">
      <div className="py-28">
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
                      ? "text-primary bg-gray-700 rounded-xl px-4"
                      : ""
                  } cursor-pointer duration-500 hover:text-primary`}
                >
                  {item.name}
                </li>
              );
            })}
          </ul>
        </nav>
        <section className="grid justify-center">
          <CardsPeject projecs={projecs} />
        </section>
      </div>
      <div>
        <img src={waveContact} alt="" />
      </div>
    </section>
  );
};
