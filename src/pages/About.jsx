import React from "react";
import { motion } from "framer-motion";
import {
  User,
  Briefcase,
  Globe,
  Trophy,
  Rocket,
  CheckCircle,
  Star,
  Feather,
  Eye,
  SunMedium,
} from "lucide-react";

const sectionVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.8 },
  }),
};

const teamMembers = [
  {
    name: "Alex Johnson",
    role: "CEO & Founder",
    description:
      "Visionary leader with over 10 years in tech entrepreneurship. Passionate about building innovative products that change the world.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Mia Chen",
    role: "Lead Designer",
    description:
      "Creative genius behind our sleek and user-friendly designs. Expert in UX/UI and branding with a keen eye for detail.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Liam Smith",
    role: "CTO",
    description:
      "Tech wizard driving our engineering efforts. Specializes in scalable architectures and cutting-edge technologies.",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
  },
];

const AboutPage = () => {
  return (
    <div className="bg-white text-gray-900 relative overflow-hidden">

      {/* Фоновые иконки по всей странице */}
      <User className="absolute top-10 left-5 text-indigo-200 opacity-30 w-20 h-20 rotate-[15deg]" />
      <Feather className="absolute top-60 right-10 text-indigo-100 opacity-20 w-32 h-32" />
      <Rocket className="absolute bottom-40 left-20 text-indigo-300 opacity-25 w-24 h-24" />
      <Star className="absolute bottom-10 right-5 text-indigo-200 opacity-20 w-16 h-16" />
      <SunMedium className="absolute top-1/2 right-1/4 text-yellow-300 opacity-20 w-28 h-28" />
      <Eye className="absolute bottom-56 right-1/3 text-indigo-100 opacity-15 w-20 h-20" />

      {/* About Us с градиентом и картинкой */}
      <section className="relative text-white py-20 px-6 max-w-5xl mt-[20px] mx-auto bg-gradient-to-r from-indigo-700 via-indigo-900 to-purple-900 rounded-3xl shadow-lg overflow-hidden">
        <motion.h1
          className="text-5xl font-extrabold mb-10 tracking-wide drop-shadow-lg"
          initial="hidden"
          animate="visible"
          variants={sectionVariant}
          custom={0}
        >
          About Us
        </motion.h1>

        <motion.div
          className="flex flex-col md:flex-row items-center gap-10"
          initial="hidden"
          animate="visible"
          variants={sectionVariant}
          custom={1}
        >
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80"
            alt="Team working"
            className="rounded-2xl shadow-xl max-w-sm w-full object-cover"
          />
          <div className="text-lg leading-relaxed max-w-xl drop-shadow-md">
            <p className="mb-6">
              We are a passionate team of technologists and creatives dedicated to crafting digital experiences that make a real impact. Our work spans from mobile apps and websites to complex enterprise solutions. Each project is a journey, where innovation meets functionality to deliver outstanding results for our clients worldwide.
            </p>
            <p>
              Collaboration, creativity, and user-centric design are the core values that drive our daily efforts. We believe technology should empower businesses, inspire users, and pave the way for future innovations.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Достижения с градиентными карточками */}
      <section className="py-20 px-6 bg-gray-50">
        <motion.h2
          className="text-4xl font-semibold text-center mb-12 text-indigo-900"
          initial="hidden"
          animate="visible"
          variants={sectionVariant}
          custom={2}
        >
          Our Achievements
        </motion.h2>
        <motion.ul
          className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10"
          initial="hidden"
          animate="visible"
          variants={sectionVariant}
          custom={3}
        >
          {[
            {
              icon: <Trophy size={56} />,
              title: "100+ Projects Completed",
              desc: "Delivering quality solutions across various industries.",
              gradient: "from-yellow-400 via-red-500 to-pink-500",
            },
            {
              icon: <Globe size={56} />,
              title: "Clients Worldwide",
              desc: "Trusted by businesses from 15+ countries globally.",
              gradient: "from-green-400 via-blue-500 to-indigo-600",
            },
            {
              icon: <Briefcase size={56} />,
              title: "5+ Years in Business",
              desc: "Building long-lasting partnerships and innovative products.",
              gradient: "from-purple-400 via-pink-500 to-red-500",
            },
            {
              icon: <Rocket size={56} />,
              title: "25+ Startups Launched",
              desc: "Helping startups grow from idea to market leaders.",
              gradient: "from-blue-400 via-cyan-500 to-teal-500",
            },
          ].map(({ icon, title, desc, gradient }) => (
            <li
              key={title}
              className={`rounded-3xl p-8 text-white shadow-lg bg-gradient-to-tr ${gradient} flex flex-col items-center text-center
               hover:scale-105 hover:shadow-2xl transition-transform duration-500 cursor-default`}
            >
              <div className="mb-6">{icon}</div>
              <h3 className="text-2xl font-bold mb-3">{title}</h3>
              <p className="text-sm leading-relaxed">{desc}</p>
            </li>
          ))}
        </motion.ul>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <motion.h2
          className="text-4xl font-semibold text-center mb-12"
          initial="hidden"
          animate="visible"
          variants={sectionVariant}
          custom={4}
        >
          Why Choose Us?
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 text-gray-800 text-lg"
          initial="hidden"
          animate="visible"
          variants={sectionVariant}
          custom={5}
        >
          <div className="flex items-start space-x-4">
            <CheckCircle className="text-green-500" size={36} />
            <div>
              <h3 className="font-bold mb-2">Business Focus</h3>
              <p>
                We don't just write code — we focus on creating solutions that
                drive real business value and growth.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <CheckCircle className="text-green-500" size={36} />
            <div>
              <h3 className="font-bold mb-2">User-Centered Design</h3>
              <p>
                Every project starts and ends with the user. We craft intuitive,
                accessible, and beautiful experiences.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <CheckCircle className="text-green-500" size={36} />
            <div>
              <h3 className="font-bold mb-2">Proven Success</h3>
              <p>
                Our track record is filled with client stories of success and
                growth after partnering with us.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Vision с цитатой и картинкой */}
      <section className="bg-indigo-900 text-white py-20 px-6 rounded-3xl max-w-5xl mx-auto relative overflow-hidden shadow-lg">
        <motion.h2
          className="text-4xl font-semibold text-center mb-10 drop-shadow-md"
          initial="hidden"
          animate="visible"
          variants={sectionVariant}
          custom={6}
        >
          Our Vision
        </motion.h2>
        <motion.div
          className="flex flex-col md:flex-row items-center gap-12 max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={sectionVariant}
          custom={7}
        >
          <img
            src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=600&q=80"
            alt="Vision"
            className="rounded-2xl shadow-xl max-w-sm w-full object-cover"
          />
          <div className="text-lg leading-relaxed drop-shadow-md max-w-xl">
            <p className="italic mb-6 text-indigo-300">
              “To create a future where technology and creativity blend seamlessly to
              empower every individual and organization to reach their fullest potential.”
            </p>
            <p>
              Our mission is to harness the power of innovation, design, and
              technology to build products that inspire transformation, break
              barriers, and open new horizons. We are committed to shaping a world
              where digital solutions serve humanity with purpose and passion.
            </p>
          </div>
        </motion.div>

        {/* Крупная иконка для акцента */}
        <SunMedium
          className="absolute top-6 right-6 text-yellow-400 opacity-40 w-32 h-32 rotate-12 pointer-events-none select-none"
          aria-hidden="true"
        />
      </section>

      {/* Команда */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-semibold text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={sectionVariant}
          custom={8}
        >
          Meet Our Team
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12"
          initial="hidden"
          animate="visible"
          variants={sectionVariant}
          custom={9}
        >
          {teamMembers.map(({ name, role, description, avatar }, i) => (
            <motion.div
              key={name}
              className="bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-indigo-400 transition-shadow duration-500 cursor-pointer hover:scale-105"
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.2 * i } }}
            >
              <img
                src={avatar}
                alt={name}
                className="w-28 h-28 rounded-full mb-6 object-cover border-4 border-indigo-500 shadow-md"
              />
              <h3 className="text-xl font-bold mb-1">{name}</h3>
              <p className="text-indigo-600 font-semibold mb-3">{role}</p>
              <p className="text-gray-600 leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default AboutPage;
