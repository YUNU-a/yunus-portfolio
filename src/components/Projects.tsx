'use client';

import { motion } from 'framer-motion';

const projects = [
  { 
    id: 1, 
    title: 'Uber Analysis', 
    subtitle: 'High-Value Customer Segmentation',
    category: 'SQL / MySQL',
    image: '/projects/uber.png',
    objective: 'To identify and segment the most loyal and active Uber customers in Chennai based on extensive ride history patterns.',
    insight: 'Identified a core segment of high-frequency "power users" who are critical to predictable revenue.'
  },
  { 
    id: 2, 
    title: 'Netflix Engagement', 
    subtitle: 'Consistent Behavioral Analysis',
    category: 'SQL / Data Analytics',
    image: '/projects/netflix.png',
    objective: 'To analyze a sample Netflix dataset to find "consistent customers" or binge-watchers based on deep viewing patterns.',
    insight: 'Successfully segmented users into engagement tiers, providing a foundation for personalized marketing models.'
  },
  { 
    id: 3, 
    title: 'Churn Prediction Model', 
    subtitle: 'Machine Learning Classification',
    category: 'Python / Pandas',
    image: '/projects/churn.png',
    objective: 'To build a predictive pipeline that analyzes historical subscription status to determine the probability of consumer churn.',
    insight: 'Revealed key retention factors allowing marketing teams to launch preemptive discount campaigns.'
  },
  { 
    id: 4, 
    title: 'Sales Forecast Matrix', 
    subtitle: 'Quarterly Revenue Projection',
    category: 'Excel / Python',
    image: '/projects/sales.png',
    objective: 'Applied statistical forecasting to 10 years of sales data to predict product-line demand for upcoming fiscal quarters.',
    insight: 'Reduced inventory overhead by 15% through high-accuracy seasonal demand analysis models.'
  },
  { 
    id: 5, 
    title: 'Executive BI Dashboard', 
    subtitle: 'Real-time KPI Visualization',
    category: 'Tableau / PostgreSQL',
    image: '/projects/dashboard.png',
    objective: 'Constructed an automated view into core business health metrics spanning engineering, sales, and operations.',
    insight: 'Unified disparate data silos into a single source of truth utilized daily by the executive board.'
  }
];

export default function Projects() {
  return (
    <section className="min-h-screen w-full bg-[#040404] text-white py-32 px-6 lg:px-20 relative z-20">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-6xl md:text-8xl font-bold mb-20 tracking-tighter">Selected Works</h2>
        </motion.div>
        
        {/* Large Feature Grid layout matching awwwards UI references */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`group relative rounded-[2rem] overflow-hidden backdrop-blur-sm bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-700 min-h-[500px] flex flex-col justify-end p-8 lg:p-12 cursor-pointer shadow-2xl ${i === 0 ? "lg:col-span-2 min-h-[600px] lg:min-h-[700px]" : "col-span-1"}`}
            >
              {/* Background AI Generated Image */}
              <div 
                 className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-1000 group-hover:scale-105 opacity-60 mix-blend-screen"
                 style={{ backgroundImage: `url(${p.image})` }}
              />

              {/* Gradient Overlays for Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent z-10" />
              
              {/* Content Block */}
              <div className="relative z-20 flex flex-col h-full justify-between">
                <div className="flex justify-between items-start">
                   <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-sm tracking-widest uppercase font-semibold text-white/90">
                     {p.category}
                   </div>
                   <p className="text-white/40 font-mono text-xl">{String(p.id).padStart(2, '0')}</p>
                </div>

                <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <h3 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 tracking-tight drop-shadow-md">{p.title}</h3>
                  <h4 className="text-xl md:text-2xl lg:text-3xl text-blue-400 font-light mb-8">{p.subtitle}</h4>
                  
                  {/* Detailed Description revealed on hover */}
                  <div className="opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transition-all duration-500 delay-100 space-y-4 max-w-2xl">
                    <p className="text-white/80 text-lg leading-relaxed"><strong className="text-white">Objective:</strong> {p.objective}</p>
                    <p className="text-cyan-400/80 text-lg leading-relaxed"><strong className="text-cyan-400">Insight:</strong> {p.insight}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
