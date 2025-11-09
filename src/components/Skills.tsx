import { motion } from "motion/react";
import { Code, Database, Cloud, Wrench } from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Languages",
    skills: [
      { name: "JavaScript", level: 95 },
      { name: "Python", level: 90 },
      { name: "C/C++", level: 85 },
      { name: "SQL", level: 90 },
      { name: "HTML5/CSS", level: 95 }
    ],
    color: "violet"
  },
  {
    icon: Wrench,
    title: "Frameworks & Libraries",
    skills: [
      { name: "React/Redux", level: 95 },
      { name: "Node.js", level: 90 },
      { name: "Flask", level: 85 },
      { name: "TensorFlow/Keras", level: 80 },
      { name: "Pandas/NumPy", level: 85 },
      { name: "Selenium", level: 85 },
      { name: "PDFplumber", level: 80 },
      { name: "Tabula", level: 80 }
    ],
    color: "cyan"
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    skills: [
      { name: "Microsoft Azure", level: 90 },
      { name: "CI/CD Pipelines", level: 85 },
      { name: "Docker", level: 80 },
      { name: "IBM Watson", level: 75 },
      { name: "Snyk/Apiiro", level: 85 },
      { name: "Agile/Scrum", level: 90 }
    ],
    color: "emerald"
  },
  {
    icon: Database,
    title: "Databases & Tools",
    skills: [
      { name: "MSSQL", level: 90 },
      { name: "MySQL", level: 85 },
      { name: "Snowflake", level: 80 },
      { name: "Git", level: 95 },
      { name: "Figma", level: 85 }
    ],
    color: "pink"
  }
];

const certifications = [
  "AZ-900: Microsoft Azure Fundamentals",
  "Progressive Web Apps (Udemy)",
  "Front-End Web Development with React (Coursera)",
  "HTML, CSS, & Javascript (Coursera)",
  "Front-End Web UI Frameworks: Bootstrap 4"
];

export function Skills() {
  return (
    <section id="skills" className="relative py-32 bg-black overflow-hidden">
      {/* Smooth blend from previous section */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-black via-black/50 to-transparent pointer-events-none z-10" />
      
      {/* Unified animated grid background */}
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

      {/* 3D perspective grid overlay */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(124, 58, 237, 0.4) 2px, transparent 2px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.4) 2px, transparent 2px)
            `,
            backgroundSize: '60px 60px',
            transform: 'perspective(500px) rotateX(60deg)',
            transformOrigin: 'center center',
            animation: 'grid-perspective 20s ease-in-out infinite'
          }}
        />
      </div>

      {/* Matrix-style falling lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-0 w-0.5 bg-gradient-to-b from-violet-500 via-cyan-500 to-transparent"
            style={{
              left: `${i * 6.67}%`,
              height: '30%'
            }}
            animate={{
              y: ['-100%', '300%'],
              opacity: [0, 0.6, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "linear"
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
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600 rounded-full filter blur-3xl opacity-10"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -50, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Smooth blend to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none z-10" />

      <style>{`
        @keyframes grid-flow {
          0% { transform: translateX(0) translateY(0); }
          100% { transform: translateX(60px) translateY(60px); }
        }
        @keyframes grid-perspective {
          0%, 100% { 
            transform: perspective(500px) rotateX(60deg) translateY(0);
          }
          50% { 
            transform: perspective(500px) rotateX(60deg) translateY(-30px);
          }
        }
      `}</style>

      <div className="relative container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl text-white mb-4">
            Skills & <span className="bg-gradient-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto" />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.4, delay: Math.min(catIndex * 0.05, 0.3) }}
              className="group"
            >
              <div className="relative p-8 bg-gradient-to-br from-violet-900/30 to-cyan-900/30 backdrop-blur-sm rounded-2xl border border-violet-500/20 hover:border-violet-500/50 transition-all h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/0 to-cyan-600/0 group-hover:from-violet-600/10 group-hover:to-cyan-600/10 rounded-2xl transition-all duration-300" />
                
                <div className="relative">
                  {/* Category header */}
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`p-3 rounded-xl ${
                        category.color === 'violet' ? 'bg-violet-500/20' :
                        category.color === 'cyan' ? 'bg-cyan-500/20' :
                        category.color === 'emerald' ? 'bg-emerald-500/20' :
                        'bg-pink-500/20'
                      }`}
                    >
                      <category.icon className={`w-6 h-6 ${
                        category.color === 'violet' ? 'text-violet-400' :
                        category.color === 'cyan' ? 'text-cyan-400' :
                        category.color === 'emerald' ? 'text-emerald-400' :
                        'text-pink-400'
                      }`} />
                    </motion.div>
                    <h3 className="text-2xl text-white">{category.title}</h3>
                  </div>

                  {/* Skills list */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: skillIndex * 0.1 }}
                      >
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-300">{skill.name}</span>
                          <span className={`${
                            category.color === 'violet' ? 'text-violet-400' :
                            category.color === 'cyan' ? 'text-cyan-400' :
                            category.color === 'emerald' ? 'text-emerald-400' :
                            'text-pink-400'
                          }`}>
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: skillIndex * 0.1 + 0.3, ease: "easeOut" }}
                            className={`h-full rounded-full ${
                              category.color === 'violet' ? 'bg-gradient-to-r from-violet-600 to-violet-400' :
                              category.color === 'cyan' ? 'bg-gradient-to-r from-cyan-600 to-cyan-400' :
                              category.color === 'emerald' ? 'bg-gradient-to-r from-emerald-600 to-emerald-400' :
                              'bg-gradient-to-r from-pink-600 to-pink-400'
                            }`}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl text-white mb-8 text-center">Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-4 bg-gradient-to-br from-violet-900/30 to-cyan-900/30 backdrop-blur-sm rounded-xl border border-violet-500/20 hover:border-violet-500/50 transition-all"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-2 h-2 rounded-full bg-violet-400 flex-shrink-0" />
                  <p className="text-gray-300 text-sm">{cert}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
