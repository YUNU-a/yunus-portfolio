'use client';

const skills = [
  "MySQL", "PostgreSQL", "Python", "Java", "MS-Excel", "Data Analysis", "Communication", "Data Visualization", "Logical Reasoning", "Data Modeling", "Statistical Analysis",
  "MySQL", "PostgreSQL", "Python", "Java", "MS-Excel", "Data Analysis", "Communication", "Data Visualization", "Logical Reasoning", "Data Modeling", "Statistical Analysis"
];

export default function Skills() {
  return (
    <div className="w-full bg-[#030303] py-20 overflow-hidden relative border-y border-white/5 z-20">
      {/* Gradient masks for smooth fade in/out on edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#030303] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#030303] to-transparent z-10 pointer-events-none" />
      
      <div className="flex w-[200%] animate-marquee whitespace-nowrap gap-6 pl-6">
        {skills.map((skill, idx) => (
          <div key={idx} className="flex-shrink-0 bg-white/5 border border-white/10 text-white/80 px-8 py-4 rounded-[2rem] text-xl font-light hover:bg-white/10 hover:text-white transition-colors cursor-pointer shadow-lg">
             <span className="text-blue-500 mr-3">⬡</span>
             {skill}
          </div>
        ))}
      </div>
    </div>
  );
}
