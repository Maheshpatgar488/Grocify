import React, { useState } from "react";
import Heading from "./Heading";
import { FaEnvelope, FaUserAlt, FaPhone } from "react-icons/fa";

const Contact = () => {
  const [status, setStatus] = useState(""); // "", "sending", "success", "error"

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.target);

    try {
      const formUrl = import.meta.env.VITE_GETFORM_URL;

      const response = await fetch(formUrl, {
        method: "POST",
        body: formData,
      });


      if (response.ok) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section className="bg-gradient-to-b from-zinc-50 to-white pt-32 md:pt-40 lg:pt-48">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <Heading highlight="Get in" heading="Touch" className="mb-8 md:mb-12" />

        <div className="bg-white rounded-3xl shadow-xl border border-zinc-100 overflow-hidden mt-12 md:mt-16">
          <div className="flex flex-col lg:flex-row">
            {/* Left Info */}
            <div className="w-full lg:w-1/2 bg-gradient-to-b from-orange-400 to-orange-500 text-white flex flex-col justify-center p-8 md:p-12 lg:p-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Let’s Talk</h2>
              <p className="text-orange-100 mb-6 md:mb-8 text-base md:text-lg">
                Have questions, feedback, or want to collaborate? Fill out the form and we’ll get back to you soon.
              </p>

              <div className="space-y-4 md:space-y-5">
                <div className="flex items-center gap-4">
                  <FaUserAlt className="text-white text-xl" />
                  <span className="text-base md:text-lg">Customer Support Team</span>
                </div>
                <div className="flex items-center gap-4">
                  <FaEnvelope className="text-white text-xl" />
                  <span className="text-base md:text-lg">support@grocify.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <FaPhone className="text-white text-xl" />
                  <span className="text-base md:text-lg">+91 12345 67890</span>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="w-full lg:w-1/2 p-6 md:p-12 lg:p-16">
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-zinc-300 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition-all text-sm md:text-base"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-zinc-300 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition-all text-sm md:text-base"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  maxLength={10}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-zinc-300 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition-all text-sm md:text-base"
                />
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Type your message..."
                  required
                  className="w-full px-4 py-3 rounded-xl border border-zinc-300 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition-all resize-none text-sm md:text-base"
                ></textarea>

                {/* Inline Status Message */}
                {status === "success" && (
                  <p className="text-green-600 font-semibold mt-1">✅ Message sent successfully!</p>
                )}
                {status === "error" && (
                  <p className="text-red-600 font-semibold mt-1">❌ Failed to send message. Try again.</p>
                )}
                {status === "sending" && (
                  <p className="text-orange-600 font-semibold mt-1">⏳ Sending...</p>
                )}

                <button
                  type="submit"
                  className="mt-3 md:mt-4 bg-gradient-to-r from-orange-400 to-orange-500 text-white font-semibold py-3 px-6 md:px-8 rounded-xl shadow-md hover:scale-105 hover:from-orange-500 hover:to-orange-600 transition-all duration-300 text-sm md:text-base"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
