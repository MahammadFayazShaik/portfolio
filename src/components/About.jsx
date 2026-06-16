import React from 'react'
import { motion } from 'framer-motion'
import { Brain, Zap, Code2, Sparkles, Globe, Target } from 'lucide-react'

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 50 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 2.2, ease: [0.16, 1, 0.3, 1] } }
  }

  return (
    <section id="about" className="scroll-mt-24 relative py-4 px-4 md:px-0">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="flex flex-col mb-12 text-center items-center"
      >
        <motion.span variants={itemVariants} className="text-creative font-bold uppercase tracking-[0.5em] text-[10px] mb-4">About Me</motion.span>
        <motion.h2 variants={itemVariants} className="section-title-elegant text-white leading-none font-outfit">
           about <span className="text-aura-refined italic font-light lowercase">me.</span>
        </motion.h2>
      </motion.div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-3 gap-12"
      >
        <motion.div 
          variants={itemVariants}
          className="hyper-card md:col-span-2 p-8 sm:p-16 md:p-24 flex flex-col justify-center group"
        >
          <div className="glow-chase-overlay" />
          <h3 className="text-3xl font-black mb-10 text-white tracking-tighter">What I Do</h3>
          <p className="text-xl md:text-3xl text-slate-300 font-medium leading-[1.4] mb-12 lowercase tracking-tight">
            Full Stack Developer building <span className="text-creative italic">modern</span> web applications where <span className="text-white underline decoration-creative/30 underline-offset-8">clean code</span> meets <span className="text-primary italic">great design.</span>
          </p>
          <div className="flex flex-wrap gap-5 relative z-10">
            {['ReactJS', 'Python', 'Firebase', 'System Design'].map(tag => (
              <span key={tag} className="px-6 py-3 rounded-full bg-white/[0.02] border border-white/[0.06] text-[10px] font-bold lowercase tracking-[0.1em] text-slate-400 group-hover:text-creative group-hover:border-creative/20 transition-all duration-1000">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="hyper-card p-8 sm:p-16 flex flex-col items-center justify-center group text-center"
        >
          <div className="glow-chase-overlay" />
          <div className="text-7xl md:text-8xl font-black text-white font-outfit mb-6 tracking-tighter group-hover:scale-110 transition-all duration-[2s]">3+</div>
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-500 group-hover:text-creative transition-colors leading-relaxed">YEARS OF<br />EXPERIENCE</span>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="hyper-card p-8 sm:p-16 flex flex-col items-center justify-center group text-center"
        >
          <div className="glow-chase-overlay" />
          <Globe size={54} className="text-creative mb-10 animate-pulse opacity-40 group-hover:opacity-100 group-hover:scale-125 transition-all duration-1000" />
          <h4 className="text-2xl font-bold text-white mb-2 tracking-tight">Open to Remote</h4>
          <p className="text-[10px] text-slate-500 uppercase font-black tracking-[0.3em]">Work From Anywhere.</p>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="hyper-card md:col-span-2 p-8 sm:p-16 flex items-center justify-around group"
        >
          <div className="glow-chase-overlay" />
          <div className="flex items-center gap-10 md:gap-24 flex-wrap justify-center opacity-40 group-hover:opacity-100 transition-all duration-1000">
             <div className="flex flex-col items-center gap-6 group/item">
                <Zap size={40} className="text-creative group-hover/item:scale-150 transition-transform duration-1000" />
                <span className="text-[9px] font-bold text-slate-500 uppercase tracking-[0.5em]">Fast Delivery</span>
             </div>
             <div className="flex flex-col items-center gap-6 group/item">
                <Code2 size={40} className="text-secondary group-hover/item:scale-150 transition-transform duration-1000" />
                <span className="text-[9px] font-bold text-slate-500 uppercase tracking-[0.5em]">Clean Code</span>
             </div>
             <div className="flex flex-col items-center gap-6 group/item">
                <Target size={40} className="text-primary group-hover/item:scale-150 transition-transform duration-1000" />
                <span className="text-[9px] font-bold text-slate-500 uppercase tracking-[0.5em]">Attention to Detail</span>
             </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About
