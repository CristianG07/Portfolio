import TypewriterComponent from "typewriter-effect";
import { imgHero, waveHero } from "../../assets/img";

export const Hero = () => {
  return (
    <section className="bg-card_light" id="home">
      <div className="w-[80%] mx-auto pt-12 md:pt-20">
        <div className="flex flex-col-reverse gap-5 items-center lg:flex-row lg:justify-between">
          <div>
            <h1 className="text-2xl md:text-5xl text-white font-bold mb-4">
              Hi, I am <br />
              Cristian Gonzalez <br />I am a{" "}
              <span className="text-primary inline-block text-xl md:text-4xl">
                <TypewriterComponent
                  options={{
                    strings: ["Front-End Developer", "UI/UX Designer"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </h1>
            <p className="text-base md:text-lg text-text_secondary max-w-xl">
              I am a web developer (Front-End) very dedicated and committed to
              what I do, Feel free to take a look at my latest projects on the
              projects page.
            </p>
            <div className="mt-8 text-sm sm:text-lg font-medium flex items-center gap-5">
              <a
                className="btn-primary"
                href="../../assets/cv/CV-CRISTIAN-FRONT_END.pdf"
                download
              >
                Download CV
              </a>
              <a
                className="border-2 border-primary rounded-xl text-primary px-4 py-4 sm:px-5 md:px-7 md:py-5"
                href="#contact"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="bg-primary rounded-full md:max-w-sm w-[70%]">
            <img className="w-full" src={imgHero} alt="" />
          </div>
        </div>
      </div>
      <img className="" src={waveHero} alt="waves" />
    </section>
  );
};
