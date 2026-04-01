'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="bg-[#030303] w-full min-h-[80vh] flex items-center py-32 px-6 md:px-20 relative z-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* Left Animation/Radar Graphic */}
        <div className="relative aspect-square w-full max-w-[300px] lg:max-w-md mx-auto flex items-center justify-center">
            {/* Base static ring */}
            <div className="absolute w-full h-full border border-white/5 rounded-full" />
            
            {/* Spinning Radar circles */}
            <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
               className="absolute w-[80%] h-[80%] border border-blue-500/20 rounded-full border-dashed flex items-center justify-center"
            >
              <div className="w-3 h-3 bg-blue-400 rounded-full absolute -top-1.5 shadow-[0_0_15px_#60a5fa]" />
            </motion.div>

            <motion.div 
               animate={{ rotate: -360 }}
               transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
               className="absolute w-[60%] h-[60%] border border-cyan-400/30 rounded-full flex items-center justify-center"
            >
              <div className="w-2 h-2 bg-cyan-400 rounded-full absolute -bottom-1 shadow-[0_0_10px_#22d3ee]" />
            </motion.div>
            
            {/* Center glow pulse */}
            <motion.div 
               animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute w-[30%] h-[30%] bg-blue-600/30 blur-2xl rounded-full" 
            />
        </div>

        {/* Right Text Content */}
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-8"
          >
            Building intelligent databases that drive decisions.
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6 text-xl md:text-2xl text-white/60 font-light leading-relaxed mb-12"
          >
            <p>
              I&apos;m <span className="text-white font-medium">Mohammed Yunus</span> — a Data Analyst and SQL Developer with a passion for uncovering insights hidden in vast amounts of data.
            </p>
            <p>
              I specialize in complex SQL queries, Data Extraction pipelines, and advanced predictive analysis — building things that don&apos;t just organize data, but make it actionable.
            </p>
          </motion.div>

          {/* Badges */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4 text-sm font-medium tracking-wide"
          >
            <div className="bg-white/5 backdrop-blur-md border border-white/10 text-blue-400 px-6 py-3 rounded-full flex items-center gap-3">
               <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
               Tirupur, Tamil Nadu
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 text-cyan-400 px-6 py-3 rounded-full flex items-center gap-3">
               <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
               BSc Statistics Student
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
