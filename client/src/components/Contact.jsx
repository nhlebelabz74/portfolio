import { useState, useRef, lazy, Suspense } from "react";
import { motion } from "framer-motion";

import { styles } from "../constants";
import { sendEmail, downloadPdf } from "../utils";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const EarthCanvas = lazy(() => import("./canvas/Earth"));

const Contact = () => {
  const subject_to = "Thanks for checking out my portfolio!";
  const subject_from = "Email sent using portfolio website";

  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, 
      [e.target.name]: e.target.value 
    });
  }

  const sendEmails = async () => {
    // send an email to the user thanking them for using the portfolio
    await sendEmail({
      sender_name: form.name,
      sender_email: form.email,
      message: form.message,
      subject: subject_to,
      type: undefined
    });

    // send a notification to me with the user's message
    await sendEmail({
      sender_name: form.name,
      sender_email: form.email,
      message: form.message,
      subject: subject_from,
      type: "notis"
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      await sendEmails();
      
      // Optional: Clear the form after successful submission
      setForm({
        name: "",
        email: "",
        message: ""
      });
    } catch (error) {
      console.error("Error sending emails:", error);
      // Optional: Add error handling UI here
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="xl:mt-12 xl:flex-row flex flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={`${styles.sectionSubText}`}>
          Get in touch
        </p>
        <h3 className={`${styles.sectionHeadText}`}>
          Contact.
        </h3>

        <form
          ref={formRef}
          className="flex flex-col gap-8 mt-12"
          onSubmit={handleSubmit}
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Name</span>
            <input 
              type="text"
              name="name"
              required={true}
              placeholder="What's Your Name?"
              value={form.name}
              onChange={handleChange}
              className="py-4 px-6 bg-tertiary rounded-lg text-white font-medium placeholder:text-secondary border border-1 border-light-purple"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Email Address</span>
            <input 
              type="email"
              name="email"
              required={true}
              placeholder="What's Your Email Address?"
              value={form.email}
              onChange={handleChange}
              className="py-4 px-6 bg-tertiary rounded-lg text-white font-medium placeholder:text-secondary border border-1 border-light-purple"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Message</span>
            <textarea 
              rows="7"
              name="message"
              required={true}
              placeholder="What message do you have for me?"
              value={form.message}
              onChange={handleChange}
              className="py-4 px-6 bg-tertiary rounded-lg text-white font-medium placeholder:text-secondary border border-1 border-light-purple"
            />
          </label>

          <div className="flex max-sm:flex-col flex-row gap-5 justify-start">
            <button
              type="submit"
              disabled={loading}
              className="bg-tertiary py-3 px-8 outline-none text-white font-bold shadow-md shadow-primary hover:rounded-2xl hover:text-light-purple w-52 text-center focus:bg-light-purple focus:text-tertiary focus:rounded-full"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            <button
              type="button"
              className="bg-tertiary py-3 px-8 outline-none text-white font-bold shadow-md shadow-primary hover:rounded-2xl hover:text-light-purple w-52 text-center focus:bg-light-purple focus:text-tertiary focus:rounded-full"
              onClick={() => downloadPdf()}
            >
              Download My CV
            </button>
          </div>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <Suspense fallback={
          <div className="flex-1 w-full h-full flex items-center justify-center">
            <p className="text-white">Loading 3D Model...</p>
          </div>
        }>
          <EarthCanvas />
        </Suspense>
      </motion.div>
    </div>
  );
}

export default SectionWrapper(Contact, "contact");