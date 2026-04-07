import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, ArrowUpRight, Maximize2, Layers, ChevronRight } from 'lucide-react'

const projectsData = [
  {
    title: "Market-Seasonality-Explorer",
    desc: "Financial cycle visualization engine.",
    live: "https://market-seasonality-explorer-by-fayaz.vercel.app/",
    github: "https://github.com/MahammadFayazShaik/Market-Seasonality-Explorer.git",
    tags: ["Financial Analysis", "D3.js"],
    color: "from-cyan-500/10 to-blue-500/10"
  },
  {
    title: "Redux Task Master",
    desc: "Redux-powered productivity suite.",
    live: "https://to-do-list-by-fayaz.web.app",
    github: "https://github.com/MahammadFayazShaik/to-do-list.git",
    tags: ["React", "Firebase"],
    color: "from-purple-500/10 to-pink-500/10"
  },
  {
    title: "JVM Chat Ecosystem",
    desc: "Real-time Socket.io communication.",
    github: "https://github.com/MahammadFayazShaik/CHATAPPJVM",
    tags: ["Node.js", "Express"],
    color: "from-green-500/10 to-emerald-500/10"
  },
  {
    title: "MuSiCaNa",
    desc: "Immersive audio streaming interface.",
    live: "https://itsmefayaz-musicana.netlify.app",
    github: "https://github.com/MahammadFayazShaik/musicana",
    tags: ["React", "Audio API"],
    color: "from-orange-500/10 to-red-500/10"
  },
  {
    title: "Neo Calculator",
    desc: "Minimalist calculation engine.",
    live: "https://calculater-itsmefayaz.vercel.app/",
    github: "https://github.com/MahammadFayazShaik/Calculater-App",
    tags: ["JS", "Design"],
    color: "from-slate-500/10 to-slate-800/10"
  },
  {
    title: "Cardiac Prediction AI",
    desc: "Heart disease prediction model.",
    tags: ["Python", "ML"],
    color: "from-red-500/10 to-amber-500/10"
  }
]

const Projects = () => {
  const [hoveredIdx, setHoveredIdx] = useState(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 100 },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: { duration: 2.5, ease: [0.16, 1, 0.3, 1] } 
    }
  }

  return (
    <section id="projects" className="scroll-mt-24 relative py-4 px-4 md:px-0">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-center mb-12 text-center"
      >
        <span className="text-secondary font-bold uppercase tracking-[0.5em] text-[10px] mb-4 opacity-60">Creative Gallery</span>
        <h2 className="section-title-elegant text-white leading-none font-outfit">my <span className="text-aura-refined italic font-light lowercase">projects.</span></h2>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16"
      >
        {projectsData.map((p, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            onMouseEnter={() => setHoveredIdx(i)}
            onMouseLeave={() => setHoveredIdx(null)}
            className={`group relative hyper-card p-0 flex flex-col h-[600px] transition-all duration-[1000ms] ${
               hoveredIdx !== null && hoveredIdx !== i ? 'opacity-30 grayscale-[0.5] scale-[0.98]' : 'opacity-100 scale-[1.02] shadow-[0_60px_150px_rgba(0,0,0,0.8)]'
            }`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-30 group-hover:opacity-50 transition-opacity duration-1000 -z-10`} />
            <div className="glow-chase-overlay opacity-20 group-hover:opacity-100" />
            
            <div className="p-14 md:p-18 flex flex-col h-full relative z-10">
              {/* HEADER ROW - Fixed 100px */}
              <div className="flex justify-between items-start h-[100px] mb-6">
                 <div className="text-8xl font-black text-white/[0.03] group-hover:text-creative/10 transition-all font-outfit select-none leading-none">
                    0{i + 1}
                 </div>
                 <div className="px-5 py-2 rounded-full border border-white/[0.06] bg-white/[0.02] text-[9px] font-bold uppercase tracking-[0.3em] text-slate-500 group-hover:text-white transition-all">
                    BUILD {i + 101}
                 </div>
              </div>

              {/* TAGS ROW - Fixed 40px */}
              <div className="flex gap-4 h-[40px] items-center mb-6">
                 {p.tags.map(t => (
                   <span key={t} className="text-[10px] font-bold lowercase tracking-tight text-slate-500 group-hover:text-creative transition-colors">#{t}</span>
                 ))}
              </div>

              {/* TITLE ROW - Fixed 140px to handle 1-3 lines */}
              <div className="h-[140px] flex items-center mb-6">
                <h3 className="text-4xl md:text-5xl font-bold text-white leading-[0.9] tracking-tighter lowercase group-hover:translate-x-3 transition-transform duration-1000">
                  {p.title}
                </h3>
              </div>

              {/* DESCRIPTION ROW - Fixed 100px */}
              <div className="h-[100px] flex items-start mb-6">
                <p className="text-[14px] md:text-[16px] text-slate-400 font-medium leading-relaxed group-hover:text-white transition-colors lowercase tracking-tight line-clamp-3">
                  {p.desc}
                </p>
              </div>
              
              {/* BUTTONS ROW - Pinned to bottom */}
              <div className="mt-auto flex gap-6 pb-6">
                {p.live && (
                  <a href={p.live} target="_blank" rel="noopener noreferrer" className="btn-premium-stable h-14 w-14 p-0 rounded-full border-white/10 bg-white/5 hover:bg-white/10 group/btn">
                     <ExternalLink size={22} className="text-slate-500 group-hover:text-creative group-hover:scale-110 transition-all" />
                  </a>
                )}
                {p.github && (
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn-premium-stable h-14 w-14 p-0 rounded-full border-white/10 bg-white/5 hover:bg-white/10 group/btn">
                     <Github size={22} className="text-slate-500 group-hover:text-white group-hover:scale-110 transition-all" />
                  </a>
                )}
              </div>
            </div>

            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-creative/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1500" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Projects
