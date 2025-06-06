// Hero.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  Star, Heart, Brush, Eye, Smile, CheckCircle,
  Trophy, ThumbsUp, Users, Camera, MagnetIcon,
  Rocket, PawPrint, Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import Categories from "./Categories";
const iconVariants = {
  float: {
    y: [0, -10, 0],
    transition: { repeat: Infinity, duration: 3, ease: "easeInOut" },
  },
};

const Hero = () => {
  return (
    <div className="w-full">
  {/* INTRO SECTION */}
<section className="bg-white py-24 px-6 flex flex-col-reverse lg:flex-row justify-center items-center gap-16">
  <div className="max-w-3xl w-full text-center lg:text-left">
    <h1 className="text-6xl font-extrabold mb-6 text-gray-900 leading-tight">
      Learn IT with Us
    </h1>
    <p className="text-gray-700 text-lg mb-4">
      Step into the future with practical IT knowledge. Whether you're starting from scratch or enhancing your current skills, we’re here to guide you through programming, design, cybersecurity, and the latest in technology trends.
    </p>
    <p className="text-gray-700 text-lg mb-6">
      Join our vibrant community of learners and industry experts. Access top-quality resources, hands-on projects, and mentorship that empowers you to achieve your career goals in the world of tech.
    </p>
    <Link
      to="/more"
      className="inline-block bg-yellow-400 text-black font-semibold py-3 px-8 rounded-full hover:bg-yellow-500 transition duration-300 shadow-md"
    >
      Learn More
    </Link>
  </div>
  <motion.img
    src="https://img.freepik.com/premium-photo/young-it-programmer-coding-computer-dark-room_236854-23135.jpg"
    alt="IT image"
    className="w-full max-w-md rounded-xl shadow-2xl"
    variants={iconVariants}
    animate="float"
  />
</section>

      {/* WHAT WE TEACH */}
      <section className="bg-gray-50 py-20 px-6 text-center">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {[
        {
          icon: <Brush size={32} />,
          title: "Web Development",
          description: "Learn how to build modern, responsive websites using HTML, CSS, JavaScript, and popular frameworks like React and Vue.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5eH2V8OKWHpH-1U2KbS0KSfPGG1ESHjx_FA&s"
        },
        {
          icon: <Camera size={32} />,
          title: "Design & UI/UX",
          description: "Master the art of design thinking, prototyping, and creating user-friendly interfaces using tools like Figma and Adobe XD.",
          image: "https://enozom.com/wp-content/uploads/2024/04/mobile-app-design-fundamentals-the-difference-between-UI-and-UX.webp"
        },
        {
          icon: <MagnetIcon size={32} />,
          title: "AI & ML Basics",
          description: "Explore the fundamentals of Artificial Intelligence and Machine Learning using Python and real-world datasets.",
          image: "https://miro.medium.com/v2/resize:fit:1400/1*PTXHpPJ4rrDKqhSiVBGHMA.png"
        }
      ].map((item, i) => (
        <div
          key={i}
          className="bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col transition-transform hover:-translate-y-1 hover:shadow-xl"
        >
          <img src={item.image} alt={item.title} className="h-48 w-full object-cover" />
          <div className="p-6 flex-1 flex flex-col">
            <div className="text-yellow-400 mb-3">{item.icon}</div>
            <h3 className="text-2xl font-bold mb-2 text-gray-800">{item.title}</h3>
            <p className="text-gray-600 text-sm mb-4 flex-1">{item.description}</p>
            <Link to ="/articles">
            <button className="mt-auto bg-yellow-400 text-black font-semibold py-2 px-4 rounded-full hover:bg-yellow-500 transition duration-300">
              Explore
            </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


  {/* TEACH KIDS */}
<section className="bg-white py-20 px-6">
  <div className="max-w-6xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div className="max-w-lg mx-auto text-center md:text-left">
        <h3 className="text-3xl font-semibold mb-4 text-yellow-500">For Kids</h3>
        <p className="text-gray-700 mb-4 text-lg">
          We believe learning should be playful and inspiring. Our kids' courses teach essential skills through hands-on projects, games, and creativity. Whether it’s coding with Scratch or building robots, your child will love it!
        </p>
        <p className="text-gray-600 mb-6">
          Carefully designed for ages 6 to 14, our classes build confidence and spark curiosity in the tech world.
        </p>
        <div className="grid grid-cols-2 gap-4 mb-6">
          {["Scratch", "Robotics", "Game Dev", "Animation"].map((name, i) => (
            <Link
              key={i}
              to="/articles"
              className="bg-yellow-100 hover:bg-yellow-200 text-yellow-900 py-2 px-4 rounded-lg text-center font-medium transition"
            >
              {name}
            </Link>
          ))}
        </div>
        <Link
          to="/kids"
          className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded-full transition duration-300 shadow-md"
        >
          Learn More
        </Link>
      </div>

      <motion.div
        className="relative w-full max-w-md mx-auto rounded-xl overflow-hidden shadow-xl"
        variants={iconVariants}
        animate="float"
      >
        <img
          src="https://codakid.com/wp-content/uploads/2023/05/scratch.png"
          alt="Kids learning"
          className="w-full h-80 object-cover"
        />
        <Rocket className="text-yellow-400 w-16 h-16 absolute -top-8 right-6" />
      </motion.div>
    </div>
  </div>
</section>

{/* TEACH ADULTS */}
<section className="bg-gray-100 py-20 px-6">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    <motion.div
      className="relative w-full max-w-md mx-auto rounded-xl overflow-hidden shadow-xl"
      variants={iconVariants}
      animate="float"
    >
      <img
        src="https://img.freepik.com/free-photo/developer-working-late-night_1098-18697.jpg"
        alt="Adults learning"
        className="w-full h-80 object-cover"
      />
      <Sparkles className="text-yellow-400 w-16 h-16 absolute -top-8 left-6" />
    </motion.div>

    <div className="max-w-lg mx-auto text-center md:text-left">
      <h3 className="text-3xl font-semibold mb-4 text-yellow-600">For Adults</h3>
      <p className="text-gray-700 mb-4 text-lg">
        Whether you're switching careers, upgrading your skills, or starting from scratch — our courses are built for real-world results. Step-by-step, we’ll guide you through the technologies that power today’s digital world.
      </p>
      <p className="text-gray-600 mb-6">
        Learn from industry professionals and access practical projects that prepare you for the tech job market.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        {["Frontend", "Backend", "Data Science", "DevOps"].map((name, i) => (
          <Link
            key={i}
            to="/articles"
            className="bg-yellow-200 hover:bg-yellow-300 text-yellow-900 py-2 px-4 rounded-lg text-center font-medium transition"
          >
            {name}
          </Link>
        ))}
      </div>
      <Link
        to="/adults"
        className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded-full transition duration-300 shadow-md"
      >
        Learn More
      </Link>
    </div>
  </div>
</section>
<Categories/>
{/* WHY CHOOSE US */}
<section className="bg-white py-20 px-6">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-6 text-gray-900">Why Choose Us</h2>
    <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
      We care deeply about our students’ success. Our team provides a personalized, effective, and enjoyable learning experience that helps students grow fast and stay motivated.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      <div className="bg-yellow-50 p-6 rounded-xl shadow hover:shadow-lg transition text-left">
        <img
          src="https://img.freepik.com/free-vector/education-concept-illustration_114360-4298.jpg"
          alt="Supportive Community"
          className="w-full h-40 object-cover rounded-lg mb-4"
        />
        <h3 className="text-xl font-semibold text-yellow-600 mb-2">Supportive Mentors</h3>
        <p className="text-gray-700 text-sm">
          Learn from experts who care about your progress and support you every step of the way.
        </p>
      </div>
      <div className="bg-yellow-50 p-6 rounded-xl shadow hover:shadow-lg transition text-left">
        <img
          src="https://img.freepik.com/free-vector/data-analysis-illustration_52683-9034.jpg"
          alt="Proven Curriculum"
          className="w-full h-40 object-cover rounded-lg mb-4"
        />
        <h3 className="text-xl font-semibold text-yellow-600 mb-2">Proven Curriculum</h3>
        <p className="text-gray-700 text-sm">
          Our learning path is built with real-world skills and hands-on projects from day one.
        </p>
      </div>
      <div className="bg-yellow-50 p-6 rounded-xl shadow hover:shadow-lg transition text-left">
        <img
          src="https://img.freepik.com/free-vector/online-certification-illustration_23-2148573632.jpg"
          alt="High Satisfaction"
          className="w-full h-40 object-cover rounded-lg mb-4"
        />
        <h3 className="text-xl font-semibold text-yellow-600 mb-2">97% Satisfaction</h3>
        <p className="text-gray-700 text-sm">
          Almost all of our students are happy with their journey — and we’re proud of that!
        </p>
      </div>
    </div>

    <Link
      to="/articles"
      className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-8 rounded-full transition duration-300 shadow-md"
    >
      Learn More
    </Link>
  </div>
</section>

      {/* COURSE ADVANTAGES */}
      <section className="bg-gray-50 py-20 px-6">
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
    {[
      {
        title: "Interactive Lessons",
        icon: <Smile className="w-10 h-10" />,
        description:
          "Engage with dynamic and hands-on lessons that make learning fun and effective.",
        image: "https://img.freepik.com/free-vector/online-education-concept-illustration_114360-2691.jpg",
      },
      {
        title: "Personal Mentorship",
        icon: <Heart className="w-10 h-10" />,
        description:
          "Get one-on-one guidance from experienced mentors who support your growth.",
        image: "https://img.freepik.com/free-vector/mentor-helps-student-illustration_74855-6356.jpg",
      },
      {
        title: "Modern Technologies",
        icon: <Rocket className="w-10 h-10" />,
        description:
          "Learn the latest tools and frameworks shaping the tech world today.",
        image: "https://img.freepik.com/free-vector/futuristic-technology-background_53876-93677.jpg",
      },
      {
        title: "Projects Based Learning",
        icon: <CheckCircle className="w-10 h-10" />,
        description:
          "Build real projects to apply your skills and boost your portfolio.",
        image: "https://img.freepik.com/free-vector/coding-programming-concept_23-2148536333.jpg",
      },
      {
        title: "Career Guidance",
        icon: <Users className="w-10 h-10" />,
        description:
          "Receive expert advice on career paths, resumes, and interview preparation.",
        image: "https://img.freepik.com/free-vector/business-team-meeting-illustration_114360-7165.jpg",
      },
      {
        title: "Real-life Skills",
        icon: <ThumbsUp className="w-10 h-10" />,
        description:
          "Master practical skills that employers are looking for in today’s market.",
        image: "https://img.freepik.com/free-vector/teamwork-concept-illustration_114360-1160.jpg",
      },
    ].map((item, i) => (
      <div
        key={i}
        className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300"
      >
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-40 object-cover rounded-lg mb-4"
        />
        <div className="flex items-center gap-3 mb-3 text-yellow-400">
          {item.icon}
          <h4 className="text-xl font-semibold text-gray-900">{item.title}</h4>
        </div>
        <p className="text-gray-700 mb-6 text-center">{item.description}</p>
        <Link
          to="/articles"
          className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded-full transition"
        >
          Learn More
        </Link>
      </div>
    ))}
  </div>
</section>

 
    </div>
  );
};

export default Hero;
