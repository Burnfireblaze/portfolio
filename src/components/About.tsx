import { motion } from "motion/react";
import { Code2, Zap, Users, Award } from "lucide-react";

const stats = [
  { icon: Code2, label: "Years Experience", value: "3+" },
  { icon: Zap, label: "Projects Delivered", value: "10+" },
  { icon: Users, label: "Team Leadership", value: "8+" },
  { icon: Award, label: "Awards Won", value: "12+" },
];

export function About() {
  return (
    <section id="about" className="relative py-32 bg-black overflow-hidden">
      {/* Smooth blend from previous section */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-black via-black/50 to-transparent pointer-events-none z-10" />
      
      {/* Unified animated grid background - continues from Hero */}
      <div className="absolute inset-0 opacity-15">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(124, 58, 237, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            animation: 'grid-flow 20s linear infinite'
          }}
        />
      </div>

      {/* Diagonal lines pattern overlay */}
      <div className="absolute inset-0 opacity-8 pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 35px,
              rgba(124, 58, 237, 0.3) 35px,
              rgba(124, 58, 237, 0.3) 36px
            )`
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            initial={{ 
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.2
            }}
            animate={{
              y: [null, `${Math.random() * 100}%`],
              x: [null, `${Math.random() * 100}%`],
              opacity: [null, Math.random() * 0.5 + 0.2]
            }}
            transition={{
              duration: Math.random() * 15 + 10,
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
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600 rounded-full filter blur-3xl opacity-10"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -50, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Smooth blend to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none z-10" />

      <style>{`
        @keyframes grid-flow {
          0% { transform: translateX(0) translateY(0); }
          100% { transform: translateX(60px) translateY(60px); }
        }
      `}</style>

      <div className="relative container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl text-white mb-4">
            About <span className="bg-gradient-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative p-8 bg-gradient-to-br from-violet-900/20 to-cyan-900/20 backdrop-blur-sm rounded-2xl border border-violet-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-cyan-600/10 rounded-2xl" />
              <div className="relative space-y-6 text-gray-300">
                <p className="text-lg leading-relaxed">
                  Former software engineer with a passion for building innovative solutions that make a real impact. 
                  Currently pursuing my Master's in Computer Science at UC Davis, I bring over 3 years of hands-on 
                  experience in full stack development.
                </p>
                <p className="text-lg leading-relaxed">
                  My expertise spans across modern web technologies, cloud platforms (Microsoft Azure), and AI/ML. 
                  I've led teams, optimized critical systems, and delivered projects that have saved thousands of 
                  work hours and served thousands of users.
                </p>
                <p className="text-lg leading-relaxed">
                  I thrive in fast-paced environments where I can leverage my analytical problem-solving skills 
                  and collaborate with cross-functional teams to create scalable, secure, and user-centric applications.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group"
              >
                <div className="relative p-6 bg-gradient-to-br from-violet-900/30 to-cyan-900/30 backdrop-blur-sm rounded-xl border border-violet-500/20 hover:border-violet-500/50 transition-all">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-600/0 to-cyan-600/0 group-hover:from-violet-600/10 group-hover:to-cyan-600/10 rounded-xl transition-all" />
                  <div className="relative">
                    <stat.icon className="w-8 h-8 text-violet-400 mb-3" />
                    <div className="text-3xl text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl text-white mb-8 text-center">Education</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-gradient-to-br from-violet-900/20 to-cyan-900/20 backdrop-blur-sm rounded-xl border border-violet-500/20 hover:border-violet-500/50 transition-all"
            >
              <div className="text-xl text-violet-400 mb-2">University of California, Davis</div>
              <div className="text-lg text-white mb-1">Master of Science, Computer Science</div>
              <div className="text-gray-400">September 2025 - June 2027</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-gradient-to-br from-violet-900/20 to-cyan-900/20 backdrop-blur-sm rounded-xl border border-violet-500/20 hover:border-violet-500/50 transition-all"
            >
              <div className="text-xl text-cyan-400 mb-2">SRM Institute of Science and Technology</div>
              <div className="text-lg text-white mb-1">Bachelor of Technology, Computer Science</div>
              <div className="text-gray-400 mb-1">June 2018 - May 2022</div>
              <div className="text-violet-400">GPA: 8.76/10.00</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
