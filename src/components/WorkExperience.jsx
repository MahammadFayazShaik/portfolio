import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Calendar, Star, ShieldCheck, Globe, ChevronRight } from 'lucide-react'

const workData = [
  {
    role: "Full Stack Developer",
    company: "Skylark Smart Meters",
    duration: "JUN 2024 - PRESENT",
    location: "Hyderabad",
    points: [
      "Dashboard Engineering: Built responsive React.js components for smart meter dashboards and data analytics screens.",
      "Backend Architecture: Designed RESTful APIs with Node.js for an HRMS, managing employee lifecycle and payroll automation.",
      "Cloud & DevOps: Managed efficient CI/CD pipelines and application deployments on Microsoft Azure.",
      "Security & Auth: Implemented JWT-based authentication to strengthen access control security.",
      "Performance Tuning: Optimized API performance and resolved production issues to enhance overall User Experience (UX).",
      "System Integration: Collaborated on API contracts to ensure seamless frontend-backend synchronization."
    ],
    skills: ["ReactJS", "Node.js", "Azure", "JWT", "REST APIs", "CI/CD"],
    status: "Active Evolution",
    accent: "from-cyan-500/20 to-blue-500/20"
  },
  {
    role: "Software Engineer (Part-Time)",
    company: "Buddy Basket",
    duration: "AUG 2025 - PRESENT",
    location: "Hyderabad",
    points: [
      "AI Integration: Developed a Telegram bot integrated with Google Gemini AI for automated OCR processing of cart screenshots.",
      "Asynchronous Messaging: Engineered a robust backend utilizing Azure Service Bus to implement Asynchronous Message-Driven Development.",
      "Analytics Dashboard: Created an Admin Dashboard for tracking real-time statistics and user analytics."
    ],
    skills: ["Google Gemini", "Azure Service Bus", "Telegram Bot API", "Admin Analytics"],
    status: "Strategic Innovation",
    accent: "from-pink-500/20 to-creative/20"
  },
  {
    role: "Management Trainee IT",
    company: "Bolla Management",
    duration: "2023 - 2024",
    location: "Hyderabad",
    desc: "Engineered digital asset management pipelines. Delivered real-time internal dashboards and admin automation.",
    skills: ["ReactJS", "REST APIs", "Git", "Bootstrap"],
    status: "Completed",
    accent: "from-purple-500/20 to-pink-500/20"
  },
  {
    role: "Web Developer",
    company: "SATTAFIX",
    duration: "2023 - 2023",
    location: "Remote",
    desc: "Led development of Sattafix.online—a high-traffic real-time platform. Optimized for 99.9% uptime and low latency.",
    link: "https://www.sattafix.online/",
    linkText: "Live Session",
    status: "Completed",
    accent: "from-orange-500/20 to-red-500/20"
  },
  {
    role: "Python Developer Intern",
    company: "EXPOSYS DATA LABS",
    duration: "2022 - 2022",
    location: "Remote",
    desc: "Explored advanced data modeling and Python-driven web integration patterns.",
    link: "https://drive.google.com/file/d/1HbOs0PjrWVBTpFlUG-n95o7vrTkSyR0u/view?usp=drive_link",
    linkText: "Verification",
    status: "Certification",
    accent: "from-green-500/20 to-emerald-500/20"
  }
]

const WorkExperience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.25 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -40, filter: 'blur(10px)' },
    visible: { opacity: 1, x: 0, filter: 'blur(0px)', transition: { duration: 1.8, ease: [0.16, 1, 0.3, 1] } }
  }

  return (
    <section id="work" className="scroll-mt-24 relative py-4 px-4 md:px-0">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col mb-12 items-start md:items-center text-left md:text-center"
      >
        <span className="text-secondary font-black uppercase tracking-[0.6em] text-[10px] mb-4 opacity-80">Work Experience</span>
        <h2 className="section-title-elegant text-aura-refined leading-none">experience.</h2>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-12"
      >
        {workData.map((job, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="group relative"
          >
            <div className="hyper-card p-6 sm:p-10 md:p-16 flex flex-col lg:flex-row gap-8 lg:gap-12 items-start transition-all duration-1000 group-hover:bg-white/[0.03] relative z-10">
                 <div className="glow-chase-overlay opacity-30 group-hover:opacity-100 -z-10" />
                 {/* Experience Background Accent */}
                 <div className={`absolute inset-0 bg-gradient-to-br ${job.accent} opacity-10 group-hover:opacity-25 transition-opacity duration-1000 -z-20`} />

                 <div className="lg:w-1/3 flex flex-col gap-6">
                    <div className="flex items-center gap-6">
                       <div className="flex items-center gap-3">
                          <Calendar size={14} className="text-primary group-hover:scale-110 transition-transform" />
                          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 group-hover:text-white transition-colors">{job.duration}</span>
                       </div>
                       {job.location && (
                          <div className="flex items-center gap-3">
                             <Globe size={14} className="text-secondary group-hover:animate-spin transition-all duration-1000" />
                             <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 group-hover:text-white transition-colors">{job.location}</span>
                          </div>
                       )}
                    </div>
                    <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight uppercase leading-[0.9] group-hover:text-aura-refined transition-all duration-700">{job.company}</h3>
                    <div className="flex items-center gap-4">
                       <div className="h-px w-8 bg-white/10 group-hover:w-12 group-hover:bg-creative transition-all duration-700" />
                       <span className="text-[9px] font-black uppercase tracking-[0.5em] text-slate-500 group-hover:text-creative transition-all">{job.status}</span>
                    </div>
                 </div>

                 <div className="lg:w-2/3 space-y-10">
                    <div className="space-y-4">
                      <h4 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter flex items-center gap-4 group-hover:translate-x-2 transition-transform duration-700">
                        <ChevronRight size={22} className="text-primary animate-pulse" /> {job.role}
                      </h4>
                      <div className="h-1 w-20 bg-gradient-to-r from-primary/50 to-transparent rounded-full" />
                    </div>
                    
                    {job.points ? (
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-7 list-none p-0">
                        {job.points.map((p, i) => (
                          <li key={i} className="text-sm md:text-[14px] text-slate-400 font-medium leading-relaxed lowercase tracking-tight group-hover:text-slate-200 transition-colors duration-700 flex items-start gap-4">
                            <div className="mt-1.5 h-2 w-2 rounded-full border border-creative/50 bg-creative/10 flex-shrink-0 shadow-[0_0_15px_rgba(190,242,100,0.3)] group-hover:bg-creative transition-colors" />
                            <p className="opacity-80 group-hover:opacity-100 transition-opacity">{p}</p>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-lg text-slate-300 font-medium leading-relaxed max-w-2xl uppercase tracking-tight group-hover:text-white transition-colors duration-700">{job.desc}</p>
                    )}

                    <div className="flex flex-wrap gap-3 pt-6 border-t border-white/[0.04]">
                      {job.skills && job.skills.map(s => (
                        <span key={s} className="glass-capsule">
                          {s}
                        </span>
                      ))}
                    </div>
                 </div>

                 <div className="absolute top-8 right-8 flex justify-end">
                    {job.link && (
                      <a href={job.link} target="_blank" rel="noopener noreferrer" className="btn-premium-stable h-14 w-14 p-0 rounded-2xl border-white/5 bg-white/5 hover:bg-white/10 group/btn">
                         <Globe size={20} className="text-slate-500 group-hover:text-primary transition-all group-hover:scale-125 group-hover:rotate-[360deg] duration-1000" />
                      </a>
                    )}
                 </div>
               </div>
            
            {/* REFRACTED SHIMMER EDGE */}
            <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 rounded-[3rem] transition-all duration-1000 -z-5" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default WorkExperience
