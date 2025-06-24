import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Menu,
  X,
  Cpu,
  Code2,
  CloudCog,
  MousePointerClick,
  Code,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollToTopButton from './ScrollToTop';

const navItems = ["Home", "Articles", "Reviews", "Privacy", "About"];
const icons = [Cpu, Code2, CloudCog, MousePointerClick];
const slogans = [
  "IT is life.",
  "Code. Create. Conquer.",
  "Eat. Sleep. Code. Repeat.",
  "Think <Code/>.",
  "Frontend & Backend Magic",
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sloganIndex, setSloganIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSloganIndex((prevIndex) => (prevIndex + 1) % slogans.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="relative bg-white shadow-md z-50">
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Top Slogan Bar */}
      <div className="bg-blue-600 text-white py-2 text-center relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={slogans[sloganIndex]}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 text-sm md:text-base font-semibold"
          >
            <Code className="w-5 h-5 text-white" />
            <span>{slogans[sloganIndex]}</span>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between relative z-50">
  {/* Logo and Title */}
  <motion.div
    className="relative flex items-center space-x-3"
    initial={{ y: -10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <motion.div
      initial={{ rotate: -15, opacity: 0 }}
      animate={{ rotate: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Cpu className="text-blue-600 w-8 h-8" />
    </motion.div>

    <div className='flex'>
          {/* Animated Neon L */}
          <motion.div
          className="text-6xl md:text-6xl font-black text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.8)]"
          initial={{ scale: 0.8, rotate: -15, opacity: 0 }}
          animate={{ scale: 1.05, rotate: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 10,
            duration: 1.5,
          }}
        >
          L
        </motion.div>
        <div>
      <motion.h1
        className="text-3xl mt-[20px] md:text-4xl font-bold text-blue-700"
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        earnItFree
      </motion.h1>
      <motion.p
        className="text-sm text-gray-500 mt-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        Free resources to level up your coding skills
      </motion.p>
      </div>
    </div>

    {icons.map((Icon, index) => (
      <motion.div
        key={index}
        className="absolute text-blue-400 opacity-70"
        style={{
          top: `${Math.random() * 40}px`,
          left: `${Math.random() * 120}px`,
        }}
        animate={{
          y: [0, -6, 0],
          opacity: [0.7, 1, 0.7],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 4 + index,
          repeat: Infinity,
          delay: index * 0.4,
        }}
      >
        <Icon className="w-4 h-4 md:w-5 md:h-5" />
      </motion.div>
    ))}
  </motion.div>

  {/* Nav Links */}
  <nav className="hidden md:flex space-x-6 text-base">
    {navItems
      .filter(item => item !== "About")
      .map((item, index) => (
        <Link
          key={index}
          to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
          className="text-blue-500 hover:text-blue-900 transition relative group"
        >
          {item}
          <span className="block h-[2px] w-0 group-hover:w-full bg-blue-600 transition-all duration-300"></span>
        </Link>
      ))}
  </nav>

  {/* About & Contact Buttons */}
  <div className="hidden md:flex space-x-3">
    <Link
      to="/about"
      className="relative px-4 py-2 rounded-full text-white bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 transition-shadow shadow-lg hover:shadow-xl"
    >
      <span className="relative z-10">About</span>
      <span className="absolute inset-0 rounded-full bg-blue-500 opacity-20 blur-lg"></span>
    </Link>
    <Link
      to="/contact"
      className="border border-blue-600 text-blue-600 rounded-full px-4 py-2 hover:bg-blue-50 transition"
    >
      Contact
    </Link>
  </div>

  {/* Burger Button */}
  <button
    className="md:hidden text-blue-700 z-50"
    onClick={() => setIsOpen(!isOpen)}
  >
    {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
  </button>
</div>


      {/* Mobile Menu */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? 0 : '100%' }}
        transition={{ type: 'spring', stiffness: 260, damping: 25 }}
        className="fixed top-0 right-0 h-full w-2/3 bg-white z-50 p-6 shadow-xl flex flex-col gap-6"
      >
        <div className="flex justify-between items-center text-blue-700 mb-4">
          <h2 className="text-2xl font-bold">Menu</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="hover:text-blue-500"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {navItems.map((item, index) => (
          <Link
            key={index}
            to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            className="text-lg text-blue-700 hover:text-blue-500 transition"
            onClick={() => setIsOpen(false)}
          >
            {item}
          </Link>
        ))}
        <Link
          to="/contact"
          className="mt-4 border border-blue-600 text-blue-600 rounded-full px-4 py-2 hover:bg-blue-50 transition"
          onClick={() => setIsOpen(false)}
        >
          Contact
        </Link>
      </motion.div>

      <ScrollToTopButton />
    </header>
  );
};

export default Header;
