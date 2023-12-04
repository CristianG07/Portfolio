import { useRef } from "react";
// import emailjs from "@emailjs/browser";
import { contact_info } from "../../data";
import { waveFooter } from "../../assets/img";

export const Contact = () => {
  const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_5gurw56",
  //       "template_xtqqtti",
  //       form.current,
  //       "JQW4TF_J-z_PIT8pE",
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       },
  //     );
  //   e.target.reset();
  // };

  return (
    <section id="contact" className="gradian_section text-white">
      <div className="text-center py-28">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-primary">Me</span>
        </h3>

        <div
          className="mt-16 flex flex-col sm:flex-row justify-center
         sm:gap-3 gap-6 lg:gap-10 md:p-6 p-2 w-full rounded-lg lg:max-w-5xl lg:mx-auto"
        >
          <div
            className="flex flex-col gap-7 "
          >
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[3.5rem] text-5xl min-h-[3.5rem] flex items-center justify-center text-white bg-gradient-to-r from-button2 to-button rounded-full">
                  {contact.logo}
                </div>
                <div>
                  <h3 className="text-xl font-medium">{contact.title}</h3>
                  <p className="md:text-sm text-sm text-gray-400 break-words">
                    {contact.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <form
            ref={form}
            // onSubmit={sendEmail}
            className="flex flex-col w-full flex-1 mx-auto sm:w-2/5 md:w-3/5 gap-4"
          >
            <div className="flex justify-between flex-col md:flex-row gap-3">
              <input
                type="text"
                className="md:w-1/2 w-full"
                placeholder="Name"
                name="user_name"
              />
              <input
                type="email"
                className="md:w-1/2 w-full"
                placeholder="Email"
                name="user_email"
              />
            </div>
            <input type="text" placeholder="Project" name="project" />
            <textarea
              placeholder="Your Message"
              rows={10}
              className="resize-none"
              name="message"
            />
            <button
              type="submit"
              className="btn-primary font-semibold w-fit"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div>
        <img src={waveFooter} alt="" />
      </div>
    </section>
  );
};
