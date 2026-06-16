import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Mail, Github, Linkedin, Twitter, Instagram, Smartphone, FileText, ArrowRight } from 'lucide-react'

const Hero = () => {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 400], [1, 0])
  
  const resumeLink = "https://drive.google.com/file/d/1oqGgDF-9iaPUnHmlNDyEWe6r1BMKV8YH/view?usp=sharing"

  const socials = [
    { icon: <Mail size={22} />, href: "mailto:mailtofayazshaik@gmail.com" },
    { icon: <Github size={22} />, href: "https://github.com/MahammadFayazShaik" },
    { icon: <Linkedin size={22} />, href: "https://www.linkedin.com/in/mahammad-fayaz-shaik-985773229/" },
    { icon: <Twitter size={22} />, href: "https://x.com/fayazofficial01" },
    { icon: <Instagram size={22} />, href: "https://www.instagram.com/fayaz._shaik/" },
    { icon: <Smartphone size={22} />, href: "https://wa.me/7993091167" }
  ]

  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center relative pt-2 mb-2 overflow-visible">
      {/* UNIFIED HERO FRAME */}
      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6"
      >
        <div className="relative group p-6 sm:p-10 md:p-20 rounded-[3rem] md:rounded-[5.5rem] overflow-visible">
          {/* Subtle Shared Glow */}
          <div className="absolute inset-0 bg-white/[0.012] backdrop-blur-3xl rounded-[5.5rem] border border-white/[0.03] shadow-[0_40px_120px_rgba(0,0,0,0.7)] group-hover:bg-white/[0.02] transition-all duration-1000" />
          <div className="absolute -top-32 -right-32 w-[30rem] h-[30rem] bg-primary/10 blur-[180px] rounded-full opacity-40 group-hover:opacity-60 transition-opacity duration-[2s] pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-[30rem] h-[30rem] bg-secondary/10 blur-[180px] rounded-full opacity-40 group-hover:opacity-60 transition-opacity duration-[2s] pointer-events-none" />

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-12 md:gap-32">
            {/* LEFT SIDE: NAME & TAGLINE */}
            <div className="flex-1 text-center md:text-left space-y-8 md:space-y-10 order-2 md:order-1 flex flex-col items-center md:items-start">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <h1 className="text-5xl sm:text-6xl md:text-[8rem] font-bold leading-[0.8] tracking-tighter select-none font-outfit uppercase">
                  mahammad<br />
                  fayaz <span className="text-aura-refined italic font-light lowercase">shaik.</span>
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 2 }}
                className="text-[10px] sm:text-xs md:text-lg text-slate-400 max-w-xl font-medium lowercase tracking-[0.3em] md:tracking-[0.4em]"
              >
                building the <span className="text-white font-black italic">creative.</span> standard.
              </motion.p>

              {/* ACTION: RESUME BUTTON & STATS */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 1.5 }}
                className="pt-6 md:pt-8 flex flex-col sm:flex-row items-center gap-8 md:gap-12"
              >
                <a href={resumeLink} target="_blank" rel="noopener noreferrer" className="btn-premium-stable px-8 py-5 md:px-12 md:py-7 inline-flex rounded-full group">
                  <span className="flex items-center gap-4 md:gap-6 text-[8px] md:text-[9px] font-bold tracking-[0.4em] md:tracking-[0.5em] text-slate-300 group-hover:text-creative transition-all">
                    <FileText size={16} className="text-creative" /> View Resume
                    <ArrowRight size={14} className="group-hover:translate-x-3 transition-transform" />
                  </span>
                </a>

                <div className="flex gap-6 md:gap-8 items-center sm:border-l border-white/10 sm:pl-8 md:pl-12">
                  <div className="flex flex-col items-center sm:items-start">
                    <span className="text-3xl md:text-4xl font-black text-white tracking-tight">3+</span>
                    <span className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.4em] text-slate-500 mt-1">Years Exp</span>
                  </div>
                  <div className="flex flex-col items-center sm:items-start">
                    <span className="text-3xl md:text-4xl font-black text-white tracking-tight">16+</span>
                    <span className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.4em] text-slate-500 mt-1">Skills</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* RIGHT SIDE: PHOTO */}
            <motion.div
               initial={{ opacity: 0, scale: 0.8, x: 50 }}
               animate={{ opacity: 1, scale: 1, x: 0 }}
               transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
               className="flex-shrink-0 relative order-1 md:order-2"
            >
              <div className="relative group-photo">
                 <div className="absolute inset-0 bg-creative/20 blur-[120px] rounded-full opacity-20 animate-pulse duration-[8s]" />
                 
                 <div className="relative w-56 h-72 sm:w-64 sm:h-80 md:w-[22rem] md:h-[30rem] overflow-hidden rounded-[3rem] md:rounded-[5rem] border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.8)] transition-all duration-1000 group-hover:rounded-[2rem] group-hover:scale-[1.02]">
                    <img 
                      src="https://drive.google.com/uc?export=view&id=1LRrKFXBqYcynLOLdP2rIGmTGHQWUQPh6" 
                      alt="Mahammad Fayaz" 
                      className="w-full h-full object-cover transition-all duration-[4s] ease-out contrast-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                 </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* SOCIALS BAR */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 2 }}
          className="mt-16 flex justify-center md:justify-start gap-12 px-20"
        >
          {socials.map((social, i) => (
            <motion.a 
              key={i}
              href={social.href} 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -10, scale: 1.4, color: "#bef264" }}
              transition={{ type: "spring", stiffness: 400, damping: 12 }}
              className="text-slate-500 transition-all"
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 text-slate-500 uppercase tracking-[2em] text-[8px] font-black opacity-30"
      >
        breeze down
      </motion.div>
    </section>
  )
}

export default Hero
