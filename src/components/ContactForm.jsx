import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Thank you! Your message has been sent 🎉");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <motion.form
        onSubmit={handleSubmit}
        className="w-full max-w-xl mx-auto px-6 py-8 rounded-2xl shadow-xl bg-black text-white border border-white/20 space-y-6 backdrop-blur-md"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-2xl font-semibold text-center mb-4">Contact Us</h2>

        {/* Name */}
        <div>
          <label htmlFor="name" className="block mb-2 text-sm">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="w-full px-4 py-3 rounded-lg border border-white/30 bg-black text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block mb-2 text-sm">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full px-4 py-3 rounded-lg border border-white/30 bg-black text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block mb-2 text-sm">Message</label>
          <textarea
            name="message"
            id="message"
            rows="5"
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message here..."
            className="w-full px-4 py-3 rounded-lg border border-white/30 bg-black text-white placeholder-white/60 resize-none focus:outline-none focus:ring-2 focus:ring-white/40"
          />
        </div>

        {/* Button */}
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full py-3 bg-white text-black font-semibold rounded-lg transition duration-300 hover:bg-gray-200"
        >
          Send Message
        </motion.button>
      </motion.form>

      <ToastContainer position="top-right" autoClose={3000} theme="dark" />
    </>
  );
};

export default ContactForm;
