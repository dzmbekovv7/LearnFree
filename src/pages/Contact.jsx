import React from "react";
import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 py-20 px-6 font-sans">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <h1 className="text-5xl font-bold tracking-tight">Contact the CodePulse Team</h1>
        <p className="text-gray-600 text-lg mt-4 max-w-xl mx-auto">
          Want to collaborate, ask questions, or just chat tech? We're here.
        </p>
      </motion.div>

      {/* Контактная сетка */}
      <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto items-start">
        {/* Левая панель */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-10"
        >
          <div className="bg-gray-100 p-8 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold mb-2">Email us</h2>
            <div className="flex items-center gap-4 text-gray-700">
              <Mail className="text-gray-500" />
              <a href="mailto:team@codepulse.dev" className="hover:underline">
                team@codepulse.dev
              </a>
            </div>
          </div>

          <div className="bg-gray-100 p-8 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold mb-2">Call</h2>
            <div className="flex items-center gap-4 text-gray-700">
              <Phone className="text-gray-500" />
              <a href="tel:+15551234567" className="hover:underline">
                +1 (555) 123-4567
              </a>
            </div>
          </div>

          <div className="bg-gray-100 p-8 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold mb-2">Office</h2>
            <div className="flex items-center gap-4 text-gray-700">
              <MapPin className="text-gray-500" />
              <span>Remote / Worldwide 🌐</span>
            </div>
          </div>
        </motion.div>

        {/* Правая панель — форма */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-100 p-10 rounded-2xl shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-6">Drop us a message</h2>
          <ContactForm />
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
