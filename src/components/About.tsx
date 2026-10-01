import { motion } from "motion/react";

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

        <div className="max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative p-8 bg-gradient-to-br from-violet-900/20 to-cyan-900/20 backdrop-blur-sm rounded-2xl border border-violet-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-cyan-600/10 rounded-2xl" />
              <div className="relative space-y-6 text-gray-300">
                <p className="text-lg leading-relaxed">
                  I build software from the backend down into the systems underneath it. I am interested in APIs and data intensive services, distributed systems, performance engineering, reliability, and applied AI. That has led me to work on everything from query optimization and event driven services to reliable transport, consensus backed storage, and AI agents with memory, RAG, fault injection, and observability.
                </p>
                <p className="text-lg leading-relaxed">
                  At AB InBev, I spent 3+ years building production software for financial and supply chain platforms across 5 regions. A financial reconciliation platform handled 150M+ daily records and 100K+ accounts. I rewrote the query layer across 140+ MSSQL tables using predicate pushdown, deferred joins, and duplicate scan elimination, reducing submit reconciliation latency from ~50s to ~4s and cross table query latency from ~5s to ~200ms.
                </p>
                <p className="text-lg leading-relaxed">
                  At UC Davis, my current work includes DuckDB SQL integration for Apache ResilientDB around PBFT, reliable UDP transport using Reed Solomon erasure coding, backend development for Wirecracker at UC Davis Neurology, and a chaos tested LangGraph agent with iterative replanning, memory, fault injection, and telemetry.
                </p>
              </div>
            </div>
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
