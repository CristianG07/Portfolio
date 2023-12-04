import { useState, useTransition } from "react";
import { imgAbout, waveProjects } from "../../assets/img";
import TabButton from "./TabButton";
import { aboutLinks } from "../../data";

export const About = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="gradian_section" id="about">
      <div className="flex flex-col py-28 lg:flex-row w-[80%] mx-auto gap-0 lg:gap-16">
        <div className="mb-16 mt-10 lg:m-0">
          <img className="border" src={imgAbout} alt="" />
        </div>
        <div className="max-w-lg">
          <h4 className="text-2xl md:text-5xl text-white font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h4>
          <p className="text-base md:text-lg text-text_secondary">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
          </div>
          <div className="mt-4 text-white">
            {aboutLinks.find((link) => link.id === tab).content}
          </div>
        </div>
      </div>
      <div className="pt-12 md:pt-20">
        <img src={waveProjects} alt="" />
      </div>
    </section>
  );
};
