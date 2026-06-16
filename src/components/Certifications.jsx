import React from 'react'
import { motion } from 'framer-motion'
import { Award, ExternalLink, ShieldCheck, Cpu } from 'lucide-react'

const certificationsData = [
  {
    title: "Full Stack Development",
    issuer: "Codegnan",
    date: "2023",
    icon: <Award className="text-primary" />,
    color: "from-primary/10 to-indigo-500/10"
  },
  {
    title: "Python Pro",
    issuer: "Exposys Data Labs",
    date: "2022",
    icon: <Cpu className="text-secondary" />,
    color: "from-secondary/10 to-accent/10"
  }
]

const Certifications = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] } }
  }

  return (
    <section id="certifications" className="scroll-mt-24 relative py-4 px-4 md:px-0 overflow-visible">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col mb-12 items-center text-center"
      >
        <span className="text-secondary font-black uppercase tracking-[0.6em] text-[10px] mb-4 opacity-80">Validation Layer</span>
        <h2 className="section-title-elegant text-aura-refined leading-none">CREDENTIALS.</h2>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-10"
      >
        {certificationsData.map((cert, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            whileHover={{ y: -10, scale: 1.02 }}
            className="group relative hyper-card p-14 md:p-18 flex items-center gap-10 transition-all duration-1000 bg-white/[0.015]"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-30 group-hover:opacity-60 transition-opacity duration-1000 -z-10`} />
            <div className="glow-chase-overlay opacity-30 group-hover:opacity-100" />
            
            <div className="w-20 h-20 flex items-center justify-center bg-white/[0.03] border border-white/[0.08] rounded-[2.5rem] group-hover:bg-white/5 group-hover:border-white/20 transition-all duration-700 shadow-xl group-hover:shadow-primary/20 relative z-10">
               <div className="transform group-hover:scale-125 transition-transform duration-700">
                  {React.cloneElement(cert.icon, { size: 32 })}
               </div>
            </div>

            <div className="space-y-3 relative z-10">
               <h3 className="text-2xl md:text-3xl font-black text-white tracking-tighter uppercase group-hover:tracking-normal transition-all duration-1000">{cert.title}</h3>
               <div className="flex items-center gap-4">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 group-hover:text-primary transition-colors">{cert.issuer}</span>
                  <div className="h-1 w-1 rounded-full bg-slate-700" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">{cert.date}</span>
               </div>
            </div>

            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-40 transition-opacity">
               <ShieldCheck size={20} className="text-primary" />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Certifications
