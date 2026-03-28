'use client';

import { motion } from 'framer-motion';

const projects = [
  { id: 1, title: 'Neural Canvas', desc: 'AI Object Generation Workflow' },
  { id: 2, title: 'Dream Engine', desc: 'Realtime Latent Rendering' },
  { id: 3, title: 'Synthesis', desc: 'LLM-Powered Animation' }
];

export default function Projects() {
  return (
    <section className="min-h-screen w-full bg-[#030303] text-white py-32 px-6 md:px-20 relative z-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-16 tracking-tight">Selected Works</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-[400px] rounded-3xl overflow-hidden backdrop-blur-sm bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-500 flex flex-col justify-end p-8 cursor-pointer shadow-lg"
            >
              {/* Subtle hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
              <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transition-colors duration-500 z-0" />
              
              <div className="relative z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-blue-400 font-mono text-sm mb-2">{String(p.id).padStart(2, '0')}</p>
                <h3 className="text-3xl font-medium mb-2">{p.title}</h3>
                <p className="text-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
