import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { supabase } from "../supabase";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Categories = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchArticles() {
      const { data, error } = await supabase
        .from("lernfree_articles")
        .select("*")
        .order("published_date", { ascending: false })
        .limit(6);

      if (error) {
        console.error("Error fetching articles:", error);
        setLoading(false);
        return;
      }

      if (data) setArticles(data);
      setLoading(false);
    }
    fetchArticles();
  }, []);

  return (
    <section
      ref={ref}
      className="relative py-20 bg-gradient-to-tr from-[#a0e9fd] via-[#3abff8] to-[#0a7ac2]
"
    >
      <div className="max-w-6xl mx-auto px-6 mb-20">
 
        {loading ? (
          <p className="text-center text-[#9e8a6f] text-lg">Loading articles...</p>
        ) : (
          <motion.div
            className="grid gap-12 sm:grid-cols-2"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ staggerChildren: 0.15 }}
          >
            {articles.map((article) => (
              <motion.div
                key={article.id}
                variants={cardVariants}
                whileHover={{ scale: 1.03 }}
                className="flex flex-col sm:flex-row bg-white rounded-3xl shadow-xl border border-transparent hover:border-yellow-400 transition-all duration-500 cursor-pointer overflow-hidden"
              >
                {/* Картинка слева */}
                <div className="sm:w-1/2 h-48 sm:h-auto overflow-hidden rounded-l-3xl">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>

                {/* Текст справа */}
                <div className="p-6 flex flex-col justify-between sm:w-1/2">
                  <h3 className="text-2xl font-semibold text-[#4a3b14] mb-3 leading-tight">
                    {article.title}
                  </h3>
                  <p className="text-[#7a6f58] text-base mb-6 line-clamp-4">
                    {article.summary}
                  </p>

                  <div className="flex justify-between items-center text-sm text-[#b68e24] font-medium tracking-wide select-none">
                    <span>🕒 {article.reading_time} min read</span>
                    <span>
                      📅 {new Date(article.published_date).toLocaleDateString()}
                    </span>
                  </div>
                </div>

                {/* Иконка «блестка» в правом верхнем углу карточки */}
                <span className="absolute top-4 right-4 text-yellow-400 text-4xl select-none pointer-events-none drop-shadow-lg animate-pulse">
                  ✨
                </span>
              </motion.div>
            ))}
          </motion.div>
        )}

        <div className="text-center mt-16">
          <motion.button
            onClick={() => navigate("/articles")}
            className="px-8 py-3 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 text-white rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all duration-400"
            whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgba(255,182,36,0.8)" }}
            whileTap={{ scale: 0.95 }}
          >
            Show More
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Categories;
