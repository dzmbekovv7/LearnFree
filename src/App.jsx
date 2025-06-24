import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Code, Cpu, Server, Wifi } from 'lucide-react'; // IT иконки

import FAQ from './pages/FAQ';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Introduction from './pages/Introduction';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import AshleyArticlesPage from './pages/Articles';
import AshleyArticleDetailPage from './pages/ArticlesDetailPage';
import AnimatedPage from './components/FadeTransition';
import CategoryArticlesPage from './pages/CategoryArticlesPage';
import ReviewsPage from './pages/Reviews';

const loadingMessages = [
  "Initializing modules...",
  "Compiling the future...",
  "Deploying code packets...",
  "Connecting to the cloud...",
  "Optimizing algorithms...",
];

const icons = [Code, Cpu, Server, Wifi];

function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [textIndex, setTextIndex] = useState(0);
  const [iconIndex, setIconIndex] = useState(0);

  useEffect(() => {
    // Меняем текст и иконку каждые 3.5 секунды
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % loadingMessages.length);
      setIconIndex((prev) => (prev + 1) % icons.length);
    }, 3500);

    // Через 5 секунд отключаем лоадер
    const timeout = setTimeout(() => setIsLoading(false), 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  if (isLoading) {
    const IconComponent = icons[iconIndex];
    return (
      <div className="relative flex flex-col items-center justify-center h-screen bg-white overflow-hidden px-6 select-none">
        {/* Светлый блик сверху вниз */}
        <motion.div
          className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white/60 via-transparent to-transparent pointer-events-none"
          initial={{ y: '-100%' }}
          animate={{ y: '100%' }}
          transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
        />

        {/* Пульсирующий круг */}
        <motion.div
          className="absolute w-44 h-44 bg-blue-500 rounded-full opacity-10 blur-3xl"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
        />

        {/* Иконка с анимацией плавания и вращения */}
        <motion.div
          className="z-10 text-blue-600 drop-shadow-md"
          animate={{
            rotate: [0, 10, -10, 10, 0],
            y: [0, -12, 0, -12, 0],
            scale: [1, 1.05, 1, 1.05, 1],
          }}
          transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
        >
          <IconComponent size={96} />
        </motion.div>

        {/* Текст с плавным переключением */}
        <AnimatePresence mode="wait">
          <motion.h2
            key={textIndex}
            className="mt-8 text-3xl sm:text-4xl font-bold font-mono text-blue-700 text-center max-w-lg tracking-wide"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.8 }}
          >
            {loadingMessages[textIndex]}
          </motion.h2>
        </AnimatePresence>

        {/* Анимированная линия под текстом */}
        <motion.div
          className="mt-5 w-28 h-1 bg-blue-600 rounded-full opacity-60 drop-shadow"
          initial={{ scaleX: 0.2, opacity: 0.4 }}
          animate={{
            scaleX: [0.2, 1, 0.2],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
        />
      </div>
    );
  }

  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<AnimatedPage><Home /></AnimatedPage>} />
          <Route path="/about" element={<AnimatedPage><About /></AnimatedPage>} />
          <Route path="/introduction" element={<AnimatedPage><Introduction /></AnimatedPage>} />
          <Route path="/contact" element={<AnimatedPage><Contact /></AnimatedPage>} />
          <Route path="/reviews" element={<AnimatedPage><ReviewsPage /></AnimatedPage>} />
          <Route path="/articles" element={<AnimatedPage><AshleyArticlesPage /></AnimatedPage>} />
          <Route path="/articles/:slug" element={<AnimatedPage><AshleyArticleDetailPage /></AnimatedPage>} />
          <Route path="/type/:typename" element={<AnimatedPage><CategoryArticlesPage /></AnimatedPage>} />
          <Route path="/privacy" element={<AnimatedPage><Privacy /></AnimatedPage>} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
