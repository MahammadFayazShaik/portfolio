import React from 'react'
import { motion } from 'framer-motion'
import { 
  Code2, Database, Globe, Layers, Layout, 
  Cpu, Terminal, Cloud, ShieldCheck, Zap,
  FileType, Palette, Server, Github, GitBranch, CloudLightning
} from 'lucide-react'

const skillsData = [
  { icon: <Code2 />, name: "ReactJS", category: "Core Framework" },
  { icon: <Layout />, name: "NextJS", category: "Meta Framework" },
  { icon: <ShieldCheck />, name: "Keycloak", category: "Auth Protocol" },
  { icon: <Database />, name: "Redux", category: "State Core" },
  { icon: <Terminal />, name: "Python", category: "Logic Layer" },
  { icon: <Cpu />, name: "Node.js", category: "Runtime VM" },
  { icon: <Layers />, name: "Tailwind", category: "Utility Style" },
  { icon: <Cloud />, name: "Firebase", category: "Cloud Matrix" },
  { icon: <Globe />, name: "REST APIs", category: "Connectivity" },
  { icon: <Zap />, name: "Framer", category: "Motion Engine" },
  { icon: <FileType />, name: "HTML", category: "Structure" },
  { icon: <Palette />, name: "CSS", category: "Aesthetics" },
  { icon: <Server />, name: "MongoDB", category: "Data Lake" },
  { icon: <CloudLightning />, name: "Azure", category: "Cloud Arch" },
  { icon: <Github />, name: "GitHub", category: "VCS Hub" },
  { icon: <GitBranch />, name: "Git Bash", category: "Terminal" }
]

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 40 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { duration: 1.8, ease: [0.16, 1, 0.3, 1] } 
    }
  }

  return (
    <section id="skills" className="scroll-mt-24 relative py-4 px-4 md:px-0">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col mb-12 items-center text-center"
      >
        <span className="text-secondary font-bold uppercase tracking-[0.5em] text-[10px] mb-4 opacity-60">Neural Matrix</span>
        <h2 className="section-title-elegant text-white leading-none font-outfit">curated <span className="text-aura-refined italic font-light lowercase">skills.</span></h2>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 md:gap-14"
      >
        {skillsData.map((skill, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            whileHover={{ y: -20, scale: 1.1, rotateZ: i % 2 === 0 ? 2 : -2 }}
            className="group relative flex flex-col items-center justify-center text-center hyper-card p-12 transition-all duration-[1200ms] aspect-square"
          >
            <div className="glow-chase-overlay opacity-20 group-hover:opacity-100" />
            
            <div className="w-24 h-24 mb-10 flex items-center justify-center bg-white/[0.015] border border-white/[0.05] rounded-full group-hover:bg-creative/10 group-hover:border-creative/30 transition-all duration-1000 shadow-2xl group-hover:shadow-creative/20 relative z-10">
                <div className="text-slate-500 group-hover:text-creative transition-all transform group-hover:rotate-[360deg] duration-1000">
                  {React.cloneElement(skill.icon, { size: 40, strokeWidth: 1 })}
                </div>
            </div>

            <div className="space-y-3 relative z-10">
               <h3 className="text-xl font-bold text-white tracking-tight lowercase group-hover:text-creative transition-colors duration-700">
                  {skill.name}
               </h3>
               <span className="block text-[9px] font-black uppercase tracking-[0.4em] text-slate-500 group-hover:text-white transition-colors duration-1000 transition-all">
                  {skill.category}
               </span>
            </div>

            <div className="absolute inset-0 bg-gradient-to-tr from-creative/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Skills
