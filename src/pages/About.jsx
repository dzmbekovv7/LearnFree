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
    name: "Sophie Lee",
    role: "Product Manager",
    description:
      "Driven by user empathy and cross-functional collaboration, Sophie ensures every product meets real user needs.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "James Brown",
    role: "Software Engineer",
    description:
      "Full-stack developer with a passion for clean code and powerful architecture that scales.",
    avatar: "https://randomuser.me/api/portraits/men/70.jpg",
  },
  {
    name: "Emily Davis",
    role: "Marketing Lead",
    description:
      "Strategist and storyteller. Emily crafts campaigns that connect, convert, and delight.",
    avatar: "https://randomuser.me/api/portraits/women/21.jpg",
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
{/* Section 1: Innovation */}
<section className="py-20 bg-white">
  <motion.h2
    className="text-4xl font-bold text-center text-indigo-800 mb-16"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={sectionVariant}
    custom={18}
  >
    How We Work
  </motion.h2>
  <div className="max-w-4xl mx-auto space-y-12 relative border-l-2 border-indigo-200 pl-6">
    {[
      { icon: "🔍", title: "Research & Discovery", desc: "We dive deep into your domain to understand users, competition, and your unique value." },
      { icon: "🎨", title: "Design & Prototype", desc: "We create beautiful, intuitive interfaces and test them early with prototypes." },
      { icon: "🧱", title: "Development", desc: "Our engineers build robust solutions with modern tools, following best practices." },
      { icon: "🚀", title: "Launch & Iterate", desc: "We deploy, monitor, and continuously improve the product based on feedback." },
    ].map((step, i) => (
      <motion.div
        key={i}
        className="flex items-start gap-6"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={19 + i}
      >
        <div className="text-2xl">{step.icon}</div>
        <div>
          <h3 className="font-semibold text-lg text-indigo-900">{step.title}</h3>
          <p className="text-gray-600">{step.desc}</p>
        </div>
      </motion.div>
    ))}
  </div>
</section>
<section className="py-20 bg-indigo-50">
  <motion.h2
    className="text-4xl font-bold text-center text-indigo-900 mb-16"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={sectionVariant}
    custom={23}
  >
    Our Impact in Numbers
  </motion.h2>
  <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-6xl mx-auto text-center">
    {[
      { number: "120+", label: "Projects Delivered" },
      { number: "98%", label: "Client Satisfaction" },
      { number: "30+", label: "Team Members" },
      { number: "10", label: "Industries Served" },
    ].map((stat, i) => (
      <motion.div
        key={i}
        className="bg-white p-6 rounded-xl shadow-lg"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={24 + i}
      >
        <div className="text-4xl font-bold text-indigo-700">{stat.number}</div>
        <p className="text-gray-600 mt-2">{stat.label}</p>
      </motion.div>
    ))}
  </div>
</section>
<section className="py-20 bg-white">
  <motion.h2
    className="text-4xl font-bold text-center text-indigo-800 mb-10"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={sectionVariant}
    custom={30}
  >
    What We Believe
  </motion.h2>
  <div className="overflow-x-auto no-scrollbar px-4">
    <div className="flex gap-6 w-max">
      {[
        "Great design is invisible but impactful.",
        "Technology should amplify human potential.",
        "Teamwork is the foundation of innovation.",
        "Always stay curious and keep improving.",
      ].map((quote, i) => (
        <motion.div
          key={i}
          className="bg-indigo-100 text-indigo-900 rounded-2xl p-6 min-w-[300px] shadow-md"
          variants={sectionVariant}

          whileInView="visible"
          viewport={{ once: true }}
          custom={31 + i}
        >
          “{quote}”
        </motion.div>
      ))}
    </div>
  </div>
</section>
<section
  className="relative bg-fixed bg-cover bg-center py-32"
  style={{
    backgroundImage:
      "url(https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=1600&q=80)",
  }}
>
  <div className="bg-black/60 absolute inset-0" />
  <motion.div
    className="relative z-10 max-w-3xl mx-auto text-center text-white"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={sectionVariant}
    custom={40}
  >
    <h2 className="text-4xl font-bold mb-4">Join Our Journey</h2>
    <p className="text-lg mb-6">
      Be part of something big. Let’s create the future, together.
    </p>
    <a
      href="/contact"
      className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-full shadow-lg transition"
    >
      Contact Us
    </a>
  </motion.div>
</section>




      {/* Vision с цитатой и картинкой */}
      <section className="bg-indigo-900 mt-[10px] gtext-white py-20 px-6 rounded-3xl max-w-5xl mx-auto relative overflow-hidden shadow-lg">
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
