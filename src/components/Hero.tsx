import { motion } from "motion/react";
import { ArrowDown, Sparkles, Code, Code2, Github, Linkedin, Mail, Phone } from "lucide-react";

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const roles = [
    "Software Engineer",
    "Full Stack Developer",
    "Machine Learning Engineer",
    "AI Developer"
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Unified animated grid background */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(124, 58, 237, 0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          animation: 'grid-move 20s linear infinite'
        }}/>
      </div>
      
      {/* Smooth gradient transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none z-10" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-violet-500 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: Math.random() * 0.5 + 0.2
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              x: [null, Math.random() * window.innerWidth],
              opacity: [null, Math.random() * 0.5 + 0.2]
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        ))}
      </div>

      {/* Subtle animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600 rounded-full filter blur-3xl opacity-10"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600 rounded-full filter blur-3xl opacity-10"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -50, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Available for opportunities badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 border border-violet-500/30 rounded-full bg-violet-500/10 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Sparkles className="w-4 h-4 text-violet-400" />
            <span className="text-violet-400">Available for opportunities</span>
          </motion.div>
        </motion.div>

        {/* Hello, I'm text */}
        <motion.p
          className="text-gray-400 mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Hello, I'm
        </motion.p>

        {/* Name */}
        <motion.h1
          className="text-white mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span className="block text-6xl md:text-8xl mb-4">
            <motion.span
              className="inline-block bg-gradient-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Sudarsan Srivathsun
            </motion.span>
          </span>
        </motion.h1>

        {/* Social Media Icons */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {[
            { icon: Github, href: "https://github.com/Burnfireblaze", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/sudarsan-srivathsun/", label: "LinkedIn" },
            { icon: Phone, href: "tel:+15302310028", label: "Phone" },
            { icon: Mail, href: "mailto:srisudarsan2000@gmail.com", label: "Email" }
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="p-2 rounded-full border border-violet-500/30 bg-violet-500/10 backdrop-blur-sm hover:border-violet-400 hover:bg-violet-500/20 transition-all"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
              whileHover={{ 
                scale: 1.1, 
                y: -3,
                boxShadow: "0 0 20px rgba(124, 58, 237, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <social.icon className="w-5 h-5 text-violet-400" />
            </motion.a>
          ))}
        </motion.div>

        {/* Title with rotating code symbol */}
        <motion.div
          className="flex items-center justify-center gap-3 mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Code2 className="w-8 h-8 text-blue-400" />
          </motion.div>
          <p className="text-2xl md:text-4xl text-gray-300">
            Full Stack Developer
          </p>
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          Crafting seamless digital experiences with 3+ years of expertise in building scalable, user-centric applications
        </motion.p>

        {/* Open to roles tags */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <p className="text-gray-400 mb-3 text-sm">Open to roles:</p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {roles.map((role, index) => (
              <motion.span
                key={role}
                className="px-4 py-1.5 text-sm rounded-full bg-gradient-to-r from-violet-700 to-purple-700 text-white"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(124, 58, 237, 0.4)" }}
              >
                {role}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex gap-3 justify-center flex-wrap"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <button
            onClick={() => scrollToSection("projects")}
            className="group relative px-6 py-2.5 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-lg hover:shadow-violet-500/50"
          >
            <span className="relative z-10 text-white flex items-center gap-2">
              View My Work
              <ArrowDown className="w-4 h-4 rotate-[-90deg]" />
            </span>
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-6 py-2.5 bg-white text-black rounded-full hover:bg-white/90 transition-all hover:scale-105"
          >
            Get In Touch
          </button>
        </motion.div>

        {/* Scroll down arrow */}
        <motion.button
          onClick={() => scrollToSection("about")}
          className="mt-16 p-4 rounded-full border-2 border-violet-500/50 hover:border-violet-400 hover:bg-violet-500/10 transition-all cursor-pointer group"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.7 }}
          aria-label="Scroll to next section"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="w-6 h-6 text-violet-400 group-hover:text-violet-300 transition-colors" />
          </motion.div>
        </motion.button>
      </div>

      {/* Additional animated layer - concentric circles - reduced for performance */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 border border-violet-500/50 rounded-full"
            style={{
              width: `${(i + 1) * 200}px`,
              height: `${(i + 1) * 200}px`,
              marginLeft: `-${(i + 1) * 100}px`,
              marginTop: `-${(i + 1) * 100}px`
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes grid-move {
          0% { transform: translateY(0); }
          100% { transform: translateY(50px); }
        }
      `}</style>
    </section>
  );
}