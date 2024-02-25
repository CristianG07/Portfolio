import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaCode } from "react-icons/fa6";

export const CardsPeject = ({ projecs }) => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-9 md:gap-8 lg:gap-x-8 lg:gap-y-8 sm:gap-6 px-10 py-8">
      {projecs.map((project) => (
        <article key={project.id}>
          <div
            className="grid px-5 py-7 max-w-xs duration-700 ease-in-out shadow-xl bg-card_light rounded-xl hover:-translate-y-3 group"
          >
            <div className="rounded-lg relative overflow-hidden h-36">
              <img
                src={project.image}
                alt={project.name}
                className="object-cover aspect-[81/46]"
              />
              <div className="absolute top-0 h-full w-full flex justify-center items-center gap-5 bg-gradient-to-t from-primary to-transparent translate-y-full group-hover:translate-y-0 duration-700">
              <a
                href={project.github_link}
                target="_blank"
                className="btn_projects"
                title="Code"
              >
                <FaCode size={35} />
              </a>
              <a
                href={project.live_link}
                target="_blank"
                className="btn_projects"
                title="Demo"
              >
                <MdOutlineRemoveRedEye size={35} />
              </a>
            </div>
            </div>
            <span className="font-bold text-xs flex items-center gap-2 mt-5 mb-4">
              {project.stack.map((item, i) => {
                return (
                  <p
                    key={i}
                    className="font-normal border rounded-sm px-1 border-primary text-primary"
                  >
                    {item}
                  </p>
                );
              })}
            </span>
            <h3 className="text-xl">{project.name}</h3>
          </div>
        </article>
      ))}
    </section>
  );
};
