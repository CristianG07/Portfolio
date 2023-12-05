import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { contact_info } from "../../data";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5gurw56",
        "template_xtqqtti",
        form.current,
        "JQW4TF_J-z_PIT8pE"
      )
      .then(
        (result) => {
          toast.success(`Message sent successfully ${result.text}`, {
            position: "bottom-left",
            theme: "dark",
          });
        },
        (err) => {
          console.log(err.text)
          toast.error(`Error message not sent`, {
            position: "bottom-left",
            theme: "light",
          })
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact" className="gradian_section text-white">
      <div className="text-center py-36">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-primary">Me</span>
        </h3>

        <div
          className="mt-16 flex flex-col sm:flex-row justify-center
         sm:gap-3 gap-6 lg:gap-10 md:p-6 p-2 w-full rounded-lg lg:max-w-5xl lg:mx-auto"
        >
          <div className="flex flex-col gap-7 ">
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
            onSubmit={sendEmail}
            className="flex flex-col w-full flex-1 mx-auto sm:w-2/5 md:w-3/5 gap-4"
          >
            <div className="flex justify-between flex-col md:flex-row gap-3">
              <input
                type="text"
                className="md:w-1/2 w-full"
                placeholder="Name"
                name="user_name"
                required
              />
              <input
                type="email"
                className="md:w-1/2 w-full"
                placeholder="Email"
                name="user_email"
                required
              />
            </div>
            <input type="text" placeholder="Project" name="project" required />
            <textarea
              placeholder="Your Message"
              rows={10}
              className="resize-none"
              name="message"
              required
            />
            <button type="submit" className="btn_primary font-semibold w-fit">
              Send Message
            </button>
            <ToastContainer />
          </form>
        </div>
      </div>
    </section>
  );
};
