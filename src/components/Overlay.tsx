'use client';

import { useScroll, useTransform, motion } from 'framer-motion';

export default function Overlay() {
  const { scrollYProgress } = useScroll();

  // Section 1: 0% to 20%
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

  // Section 2: 30% to 50%
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.25, 0.35, 0.45], [0, 1, 1, 0]);
  const x2 = useTransform(scrollYProgress, [0.2, 0.25, 0.45], [-100, 0, 100]);

  // Section 3: 60% to 80%
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.7, 0.8], [0, 1, 1, 0]);
  const x3 = useTransform(scrollYProgress, [0.5, 0.6, 0.8], [100, 0, -100]);
  const scale3 = useTransform(scrollYProgress, [0.5, 0.6], [0.8, 1]);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 w-full h-full flex flex-col items-center justify-center">
      {/* Intro */}
      <motion.div 
        style={{ opacity: opacity1, y: y1 }}
        className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
      >
        <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter drop-shadow-xl text-center">
          MOHAMMED YUNUS U
        </h1>
        <p className="text-xl md:text-2xl text-blue-400 mt-4 tracking-widest uppercase glow-text font-medium self-center text-center">
          SQL Developer & Data Analyst
        </p>
      </motion.div>

      {/* Slide 2 */}
      <motion.div 
        style={{ opacity: opacity2, x: x2 }}
        className="absolute top-[40%] left-[10%] -translate-y-1/2"
      >
        <h2 className="text-4xl md:text-6xl font-medium text-white max-w-sm drop-shadow-lg leading-tight">
          I build <span className="text-blue-400">data-driven</span> solutions.
        </h2>
      </motion.div>

      {/* Slide 3 */}
      <motion.div 
        style={{ opacity: opacity3, x: x3, scale: scale3 }}
        className="absolute top-[40%] right-[10%] -translate-y-1/2"
      >
        <div className="backdrop-blur-md bg-white/10 p-8 rounded-3xl border border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.1)]">
          <h2 className="text-3xl md:text-5xl font-light text-white max-w-md text-right leading-relaxed">
            Extracting insights from complex data.
          </h2>
        </div>
      </motion.div>
    </div>
  );
}
