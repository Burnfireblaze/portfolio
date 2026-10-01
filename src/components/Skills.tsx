import { motion } from "motion/react";
import { Code, Database, Cloud, Server, Bot, Layout } from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Languages",
    skills: ["C++", "Python", "TypeScript", "JavaScript", "SQL"],
    color: "violet"
  },
  {
    icon: Server,
    title: "Backend & Systems",
    skills: [
      "Node.js", "Flask", "FastAPI", "REST APIs", "gRPC", "PBFT consensus",
      "Reed-Solomon erasure coding", "UDP", "Event-driven architectures",
      "Observability", "Microservices", "Snyk/Apiiro"
    ],
    color: "cyan"
  },
  {
    icon: Database,
    title: "Databases",
    skills: ["PostgreSQL", "DuckDB", "ChromaDB", "MSSQL", "MySQL", "SQLite", "Snowflake"],
    color: "pink"
  },
  {
    icon: Bot,
    title: "AI/ML",
    skills: [
      "LangGraph", "LangChain", "RAG", "LLM agents", "YOLOv8",
      "Hugging Face", "PyTorch", "TensorFlow/Keras", "Pandas/NumPy"
    ],
    color: "emerald"
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    skills: ["Microsoft Azure", "AWS", "GCP", "Docker", "Kubernetes", "Kafka", "CI/CD Pipelines", "Git"],
    color: "violet"
  },
  {
    icon: Layout,
    title: "Frontend",
    skills: ["React/Redux", "HTML5/CSS"],
    color: "cyan"
  }
];

const certifications = [
  "AZ-900: Microsoft Azure Fundamentals",
  "Apache Spark SQL for Data Analysts (Databricks)"
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
                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: skillIndex * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                        className={`px-3 py-1.5 text-sm rounded-full border ${
                          category.color === 'violet' ? 'bg-violet-500/10 text-violet-300 border-violet-500/30' :
                          category.color === 'cyan' ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30' :
                          category.color === 'emerald' ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30' :
                          'bg-pink-500/10 text-pink-300 border-pink-500/30'
                        }`}
                      >
                        {skill}
                      </motion.span>
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
