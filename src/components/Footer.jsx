import React from "react";
import { Link } from "react-router-dom";
import { Sparkles, Instagram, Facebook, Youtube, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-8">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        {/* Title with icon */}
        <div className="flex justify-center items-center gap-3 text-4xl font-extrabold text-indigo-400">
          <Sparkles size={32} />
          <span>LearnItFree</span>
        </div>

        {/* Description */}
        <p className="max-w-xl mx-auto text-lg leading-relaxed">
          Explore the latest in technology with LearnItFree — your trusted source for tutorials, trends, and expert reviews designed for curious minds and tech lovers worldwide.
        </p>

        {/* Links */}
        <nav className="flex justify-center flex-wrap gap-10 text-indigo-300 text-lg font-medium">
          <Link to="/" className="hover:text-indigo-500 transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-indigo-500 transition">
            About Us
          </Link>
          <Link to="/reviews" className="hover:text-indigo-500 transition">
            Reviews
          </Link>
          <Link to="/articles" className="hover:text-indigo-500 transition">
            Articles
          </Link>
          <Link to="/contact" className="hover:text-indigo-500 transition">
            Contact
          </Link>
          <Link to="/privacy" className="hover:text-indigo-500 transition">
            Privacy Policy
          </Link>
        </nav>

        {/* Quote */}
        <blockquote className="italic text-indigo-500 text-sm">
          “Innovate, Create, Elevate.”
        </blockquote>

    
      </div>
    </footer>
  );
};

export default Footer;
