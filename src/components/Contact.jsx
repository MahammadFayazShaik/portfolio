import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Twitter, Instagram, Smartphone, ArrowRight, ShieldCheck, Cpu } from 'lucide-react'

const Contact = () => {
  const socials = [
    { icon: <Mail size={32} />, label: "mail", href: "mailto:mailtofayazshaik@gmail.com", color: "hover:text-creative hover:shadow-creative/10" },
    { icon: <Github size={32} />, label: "github", href: "https://github.com/MahammadFayazShaik", color: "hover:text-white hover:shadow-white/10" },
    { icon: <Linkedin size={32} />, label: "linkedin", href: "https://www.linkedin.com/in/mahammad-fayaz-shaik-985773229/", color: "hover:text-blue-400 hover:shadow-blue-500/10" },
    { icon: <Twitter size={32} />, label: "twitter", href: "https://x.com/fayazofficial01", color: "hover:text-sky-400 hover:shadow-sky-500/10" },
    { icon: <Instagram size={32} />, label: "instagram", href: "https://www.instagram.com/fayaz._shaik/", color: "hover:text-pink-400 hover:shadow-pink-500/10" },
    { icon: <Smartphone size={32} />, label: "whatsapp", href: "https://wa.me/7993091167", color: "hover:text-creative hover:shadow-creative/10" }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 2, ease: [0.16, 1, 0.3, 1] } }
  }

  return (
    <section id="contact" className="scroll-mt-24 relative py-8 px-6 md:px-10 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="hyper-card overflow-visible p-10 md:p-24 relative"
      >
        {/* Contact Background Glows */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-creative/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-16 md:gap-32">
          {/* Left Side: Messaging & Title */}
          <div className="flex-1 space-y-12 text-center lg:text-left">
            <div className="space-y-4">
              <span className="text-secondary font-bold uppercase tracking-[0.5em] text-[9px] opacity-60">Network Protocol</span>
              <h2 className="text-5xl md:text-[6.5rem] font-bold leading-[0.85] tracking-tighter text-white font-outfit uppercase">
                 get in <span className="text-aura-refined italic font-light lowercase">touch.</span>
              </h2>
            </div>

            <div className="space-y-6">
               <p className="text-xs md:text-lg text-slate-500 font-medium leading-relaxed max-w-sm lowercase tracking-tighter mx-auto lg:mx-0">
                  Available for high-stakes engineering and visionary design.
               </p>
               
               <div className="flex justify-center lg:justify-start">
                  <a href="mailto:mailtofayazshaik@gmail.com" className="btn-premium-stable px-12 py-7 rounded-full group shadow-2xl relative inline-flex">
                     <span className="flex items-center gap-10 text-creative font-bold tracking-[0.4em] text-[10px] group-hover:tracking-[0.5em] transition-all duration-1000">
                        START INTERFACE <ArrowRight size={20} className="group-hover:translate-x-3 transition-transform text-white/30 group-hover:text-creative" />
                     </span>
                  </a>
               </div>
            </div>
          </div>

          {/* Right Side: Compact Social Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-6"
          >
             {socials.map((s, i) => (
               <motion.a
                 key={i}
                 variants={itemVariants}
                 href={s.href}
                 target="_blank"
                 rel="noopener noreferrer"
                 whileHover={{ y: -12, scale: 1.1, rotateZ: i % 2 === 0 ? 3 : -3 }}
                 className={`group p-8 flex flex-col items-center justify-center gap-4 transition-all duration-700 ${s.color} rounded-[2rem] border border-white/[0.03] bg-white/[0.015] hover:bg-white/[0.04] backdrop-blur-3xl`}
               >
                 <div className="text-slate-500 transition-all duration-700 transform group-hover:scale-125 group-hover:rotate-6 relative z-10 p-2">
                    {React.cloneElement(s.icon, { size: 28 })}
                 </div>
                 <span className="text-[8px] font-bold lowercase tracking-[0.3em] text-slate-500 group-hover:text-white transition-colors duration-700 relative z-10">
                    {s.label}
                 </span>
               </motion.a>
             ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact
