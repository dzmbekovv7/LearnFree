import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const loadingTexts = [
  'Compiling cutting-edge code...',
  'Deploying servers in the cloud...',
  'Optimizing algorithms...',
  'Loading AI models...',
  'Syncing databases...',
  'Connecting to the matrix...',
  'Crunching big data...',
  'Booting up your experience...',
]

const codeIconSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-24 h-24 text-cyan-400 drop-shadow-lg"
  >
    <polyline points="16 20 4 32 16 44" />
    <polyline points="48 20 60 32 48 44" />
    <line x1="28" y1="12" x2="36" y2="52" />
  </svg>
)

const Loading = () => {
  const [textIndex, setTextIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % loadingTexts.length)
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="h-[400px] bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 flex flex-col items-center justify-center text-center px-6 py-16 select-none">
      <motion.div
        className="mb-8"
        initial={{ rotate: 0, scale: 1 }}
        animate={{
          rotate: [0, 10, -10, 10, 0],
          scale: [1, 1.1, 0.9, 1.1, 1],
          opacity: [1, 0.8, 1, 0.8, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {codeIconSvg}
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.p
          key={textIndex}
          className="text-xl sm:text-2xl font-semibold text-cyan-400 drop-shadow-md"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.7 }}
        >
          {loadingTexts[textIndex]}
        </motion.p>
      </AnimatePresence>
    </div>
  )
}

export default Loading
