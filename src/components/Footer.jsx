import React from "react";
import { Link } from "react-router-dom";
import { Sparkles, Instagram, Facebook, Youtube, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-white text-gray-800 py-16 px-6 border-t border-gray-200">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        {/* О блоге */}
        <div className="md:w-1/3">
          <h3 className="text-3xl font-bold text-indigo-600 mb-4 flex items-center gap-2">
            <Sparkles size={28} className="text-indigo-500" />
            TechTide
          </h3>
          <p className="text-base leading-relaxed">
            Your daily dose of insights, tips, and innovations from the tech world. 
            Dive into coding tutorials, industry trends, and reviews crafted for developers and tech enthusiasts alike.
          </p>
          <p className="mt-4 text-sm text-gray-500 italic">
            "Innovate, Create, Elevate."
          </p>
        </div>

        {/* Навигация */}
        <div className="md:w-2/3 flex flex-col gap-6">
          <h4 className="text-xl font-semibold text-indigo-700">Quick Links</h4>
          <div className="flex flex-wrap gap-6 text-lg text-indigo-600">
            <Link to="/" className="hover:text-indigo-400 transition">
              Home
            </Link>
            <Link to="/about" className="hover:text-indigo-400 transition">
              About Us
            </Link>
            <Link to="/reviews" className="hover:text-indigo-400 transition">
              Reviews
            </Link>
            <Link to="/articles" className="hover:text-indigo-400 transition">
              Articles
            </Link>
            <Link to="/contact" className="hover:text-indigo-400 transition">
              Contact
            </Link>
            <Link to="/privacy" className="hover:text-indigo-400 transition">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
