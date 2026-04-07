import React, { useEffect, useRef } from 'react'
import { motion, useScroll, useSpring, useTransform, useMotionValue } from 'framer-motion'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import WorkExperience from './components/WorkExperience'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'

function App() {
  const [isHovered, setIsHovered] = React.useState(false)
  const mouseX = useMotionValue(typeof window !== 'undefined' ? window.innerWidth / 2 : 0)
  const mouseY = useMotionValue(typeof window !== 'undefined' ? window.innerHeight / 2 : 0)
  const cursorX = useMotionValue(typeof window !== 'undefined' ? window.innerWidth / 2 : 0)
  const cursorY = useMotionValue(typeof window !== 'undefined' ? window.innerHeight / 2 : 0)

  // PARALLAX SPRINGS: Creates the weighted follow-effect
  const ringX = useSpring(mouseX, { stiffness: 150, damping: 25, mass: 0.5 })
  const ringY = useSpring(mouseY, { stiffness: 150, damping: 25, mass: 0.5 })

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })


  React.useEffect(() => {
    const handleMouseOver = (e) => {
      const target = e.target.closest('a, button, .hyper-card, .btn-premium-stable')
      if (target) setIsHovered(true)
      else setIsHovered(false)
    }
    window.addEventListener('mouseover', handleMouseOver)
    return () => window.removeEventListener('mouseover', handleMouseOver)
  }, [])


  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY, cursorX, cursorY])

  return (
    <div className="relative min-h-screen text-slate-200 selection:bg-primary/20 app-bg cursor-none">

      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-creative to-secondary z-[2000] origin-left"
        style={{ scaleX }}
      />

      {/* REFINED PREMIUM CURSOR */}
      <motion.div 
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-white pointer-events-none z-[10000] shadow-[0_0_10px_rgba(255,255,255,0.8)]"
        style={{ 
          x: cursorX, 
          y: cursorY, 
          translateX: "-50%", 
          translateY: "-50%" 
        }}
        animate={{ 
          scale: isHovered ? 2 : 1,
          opacity: 1
        }}
        transition={{ type: "spring", damping: 50, stiffness: 800, mass: 0.1 }}
      />
      <motion.div 
        className="fixed top-0 left-0 w-10 h-10 rounded-full border-[0.5px] border-white/20 pointer-events-none z-[9999] backdrop-blur-[1px]"
        style={{ 
          x: ringX, 
          y: ringY,
          translateX: "-50%", 
          translateY: "-50%" 
        }}
        animate={{ 
          scale: isHovered ? 1.6 : 1,
          opacity: 0.5
        }}
        transition={{ type: "spring", damping: 35, stiffness: 200, mass: 0.6 }}
      />

      <header className="fixed top-0 left-0 right-0 z-[1000] p-4 lg:p-6 pointer-events-none">
        <nav className="max-w-7xl mx-auto flex justify-between items-center pointer-events-auto bg-black/30 backdrop-blur-3xl px-12 py-4 rounded-full border border-white/[0.04] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)]">
          <motion.a 
            href="#"
            whileHover={{ scale: 1.1, letterSpacing: "0.2em" }}
            className="text-2xl font-black tracking-widest text-white font-outfit uppercase transition-all"
          >
            MF.
          </motion.a>
          
          <div className="hidden md:flex items-center gap-12 text-[9px] font-bold tracking-[0.6em] text-slate-400">
            {['About', 'Skills', 'Work', 'Projects', 'Contact'].map((item, idx) => (
              <motion.a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                whileHover={{ color: "#bef264", scale: 1.15 }}
                className="transition-all relative lowercase hover:uppercase"
              >
                {item}
              </motion.a>
            ))}
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-10 relative z-10 overflow-visible pt-20">
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4"
        >
          <Hero />
          <About />
          <Skills />
          <WorkExperience />
          <Projects />
          <Certifications />
          <Contact />
        </motion.div>
      </main>

      <footer className="py-12 border-t border-white/5 relative bg-black/20 backdrop-blur-3xl">
        <div className="max-w-7xl mx-auto px-14 flex flex-col md:flex-row justify-between items-center gap-10 text-center md:text-left">
           <div>
             <h2 className="text-3xl font-black text-creative mb-2 font-outfit lowercase">mahammad fayaz shaik.</h2>
             <p className="text-slate-500 text-[10px] uppercase font-bold tracking-widest">Creating Breeze.</p>
           </div>
           <div className="flex flex-col md:items-end gap-1 text-[9px] text-slate-400 uppercase tracking-widest opacity-40">
              <span>© {new Date().getFullYear()} LIQUID NETWORK.</span>
           </div>
        </div>
      </footer>
    </div>
  )
}

export default App
