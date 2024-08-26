"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  // State variables to manage form inputs
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      // Create a FormData object to pass the values to sendEmail
      const formData = new FormData();
      formData.append("senderEmail", senderEmail);
      formData.append("message", message);

      await sendEmail(formData);

      // Reset form fields after submission
      setSenderEmail("");
      setMessage("");
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("There was an error submitting the form. Please try again.");
    }
  };

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{ duration: 1 }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a href="mailto:dev.sayarhaan@gmail.com">dev.sayarhaan@gmail.com</a> or
        through this form
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 flex flex-col dark:text-black"
      >
        <input
          name="senderEmail"
          className="h-14 rounded-lg borderBlack px-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          type="email"
          placeholder="Your email"
          required
          maxLength={100}
          value={senderEmail}
          onChange={(e) => setSenderEmail(e.target.value)}
        />
        <textarea
          name="message"
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          placeholder="Your message"
          required
          maxLength={5000}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="group h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all flex items-center justify-center gap-2 focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950 dark:bg-white dark:bg-opacity-10"
        >
          Submit{" "}
          <FaPaperPlane className="text-xs group-hover:translate-x-1 group-hover:-translate-y-1 opacity-70 transition-all" />{" "}
        </button>
      </form>
    </motion.section>
  );
}
