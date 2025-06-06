import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const students = [
  {
    id: 1,
    name: "Anna S.",
    course: "Frontend Development",
    thoughts: "Thanks to this course, I built my first React app and feel confident starting my career!",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    style: "bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white",
  },
  {
    id: 2,
    name: "Michael T.",
    course: "Data Science",
    thoughts: "The hands-on projects made complex concepts easy to understand and apply.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    style: "bg-white border-4 border-blue-400 text-blue-900",
  },
  {
    id: 3,
    name: "Sara L.",
    course: "UX/UI Design",
    thoughts: "Creative and practical — this course changed the way I think about user experience.",
    avatar: "https://randomuser.me/api/portraits/women/29.jpg",
    style: "bg-yellow-50 text-yellow-900 shadow-lg",
  },
];

const reviews = [
  {
    id: 1,
    name: "Lara B.",
    comment: "This service exceeded all my expectations! Truly life-changing.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 2,
    name: "Mark D.",
    comment: "Professional and attentive. Highly recommend to everyone.",
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    id: 3,
    name: "Nina K.",
    comment: "Such a warm experience — I felt cared for every step of the way.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 4,
    name: "James P.",
    comment: "Results speak for themselves. I will definitely come back!",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 5,
    name: "Sophia M.",
    comment: "Creative, skilled, and fun! Best decision I ever made.",
    avatar: "https://randomuser.me/api/portraits/women/37.jpg",
  },
  {
    id: 6,
    name: "Ethan W.",
    comment: "Transparent process and flawless execution. Big thanks!",
    avatar: "https://randomuser.me/api/portraits/men/38.jpg",
  },
  {
    id: 7,
    name: "Olivia T.",
    comment: "Made me feel like a star on my special day. So grateful!",
    avatar: "https://randomuser.me/api/portraits/women/52.jpg",
  },
  {
    id: 8,
    name: "Liam H.",
    comment: "Friendly team, great vibe, and stunning results every time.",
    avatar: "https://randomuser.me/api/portraits/men/29.jpg",
  },
];

const ReviewsPage = () => {
  return (
    <main className="bg-gray-50 min-h-screen font-sans text-gray-900 px-6 py-16 max-w-7xl mx-auto">
      {/* Секция студентов */}
      <section className="mb-20 text-center max-w-5xl mx-auto">
      <motion.h2
  className="text-4xl font-extrabold mb-4"
  initial={{ opacity: 0, y: -30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  Our Students Share Their Experiences
</motion.h2>
<motion.p
  className="text-gray-600 mb-12 text-lg max-w-3xl mx-auto"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3, duration: 0.8 }}
>
  Success stories and learning impressions — get inspired and start your journey!
</motion.p>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {students.map(({ id, name, course, thoughts, avatar, style }) => (
            <motion.div
              key={id}
              className={`rounded-3xl p-8 flex flex-col items-center shadow-xl max-w-sm mx-auto ${style}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: id * 0.15 }}
            >
              <img
                src={avatar}
                alt={name}
                className="w-20 h-20 rounded-full object-cover border-4 border-white mb-6"
              />
              <h3 className="text-2xl font-semibold mb-1">{name}</h3>
              <p className="italic mb-4">{course}</p>
              <p className="text-base max-w-xs">{thoughts}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Секция отзывов */}
      <header className="mb-14 text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold mb-3"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          What Our Clients Say
        </motion.h1>
        <motion.p
          className="text-gray-600 max-w-xl mx-auto text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Real stories from amazing people who trusted us.
        </motion.p>
      </header>

      <aside className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {reviews.map(({ id, name, comment, avatar }) => (
          <motion.blockquote
            key={id}
            className="bg-white rounded-3xl p-8 shadow-md relative flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: id * 0.1 }}
          >
            <Quote className="absolute top-6 left-6 text-yellow-400 opacity-15 w-10 h-10" />
            <div className="flex items-center gap-4 mb-6">
              <img
                src={avatar}
                alt={name}
                className="w-14 h-14 rounded-full object-cover border-2 border-yellow-400"
              />
              <h5 className="font-semibold text-lg">{name}</h5>
            </div>
            <p className="text-gray-700 text-base leading-relaxed flex-grow">{comment}</p>
          </motion.blockquote>
        ))}
      </aside>
    </main>
  );
};

export default ReviewsPage;
