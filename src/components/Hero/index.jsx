import TypewriterComponent from "typewriter-effect";
import { imgHero } from "../../assets/img";
import { Link } from "react-scroll";
import cv from "../../assets/cv/Cv_Cristian_FrontEnd.pdf";
import { social_media } from "../../data";

export const Hero = () => {
  return (
    <section className="bg-hero-bg" id="home">
      <div className="w-[80%] mx-auto pt-40 pb-24">
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
            <div>
              <p className="text-base md:text-lg text-text_secondary max-w-xl">
                I am a web developer (Front-End) very dedicated and committed to
                what I do, Feel free to take a look at my latest projects on the
                projects page.
              </p>
              <div className="text-3xl flex gap-5 mt-3">
                {social_media.map((social) => (
                  <div
                    key={social.name}
                    className="text-gray-200 hover:text-primary transition-colors duration-700 ease-in-out"
                    
                  >
                    <a title={social.name} href={social.href} target="_blank" rel="noreferrer">
                      {social.logo}
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 text-sm sm:text-lg font-medium flex items-center gap-5">
              <a className="btn_primary" href={cv} download>
                Download CV
              </a>
              <Link
                className="btn_primary border-2 border-primary rounded-xl text-primary hover:scale-105 bg-none duration-500"
                to="contact"
              >
                Contact Me
              </Link>
            </div>
          </div>
          <div className=" md:max-w-md w-[85%]">
            <img className="w-full animate-bounce-slow" src={imgHero} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
