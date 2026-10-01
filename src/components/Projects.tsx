import { motion } from "motion/react";
import { Database, Bot, Trophy, Activity, Network, Brain, Stethoscope, Github, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface Project {
  icon: any;
  title: string;
  period: string;
  description: string;
  achievements: string[];
  tags: string[];
  color: string;
  githubUrl?: string;
  workInProgress?: boolean;
}

const projects: Project[] = [
  {
    icon: Database,
    title: "ResilientDB SQL Connector (RESQL)",
    period: "September 2025 - March 2026",
    description: "Developing RESQL, a SQL-based connector for ResilientDB, a Byzantine Fault Tolerant blockchain-inspired distributed database system. The project replaces traditional key-value storage with SQL-based relational storage using DuckDB and SQLite, enabling familiar RDBMS-style querying and structured data management for decentralized applications. Merged into Apache ResilientDB (v1.13.0) via PR #224 (26 commits, +799 lines).",
    achievements: [
      "Designed and implemented a C++ integration layer to translate SQL queries into ResilientDB's distributed transaction format",
      "Integrated DuckDB/SQLite as relational caching layers for local query execution, indexing, and analytical computation",
      "Built a Dockerized testing environment to simulate distributed nodes and benchmark query consistency and throughput",
      "Enhanced data accessibility and developer usability by providing an RDBMS abstraction atop ResilientDB's distributed ledger, bridging distributed systems concepts with SQL-based application development"
    ],
    tags: ["C++", "Python", "Docker", "DuckDB", "SQLite", "ResilientDB"],
    color: "violet",
    workInProgress: false
  },
  {
    icon: Network,
    title: "SDR_UDP: Reliable Transport over UDP",
    period: "September 2025 - December 2025",
    description: "Erasure coding reliability layer over UDP in C++ using Intel ISA-L Reed-Solomon for data recovery, with a TCP control channel for ACK/NACK signaling and Selective Repeat fallback when packet loss exceeds parity coverage.",
    achievements: [
      "Sustained ~1000 Mbps steady throughput across 0-10% packet loss on 100 MiB to 1 GiB transfers",
      "Measured SR-only throughput halved at 0.5% loss due to RTO waits, motivating the erasure-coded path",
      "Built Docker-based simulation using Linux tc for packet loss emulation",
      "Designed bitmap-based retransmission tracking and system architecture"
    ],
    tags: ["C++", "UDP", "TCP", "Reed-Solomon", "Intel ISA-L"],
    color: "cyan",
    workInProgress: false
  },
  {
    icon: Brain,
    title: "Wirecracker: Clinical Decision Support Platform",
    period: "November 2025 - June 2026",
    description: "Backend REST APIs for spatial brain-region queries and patient data ingestion for a clinical decision-support platform used at UC Davis Neurology. Integrated with visualization frontends used by clinicians during pre-surgical evaluation.",
    achievements: [
      "Built backend REST APIs for spatial brain-region queries and patient data ingestion",
      "Integrated with visualization frontends used by clinicians during pre-surgical evaluation"
    ],
    tags: ["TypeScript", "Node.js", "PostgreSQL"],
    color: "violet"
  },
  {
    icon: Bot,
    title: "Chaos-Tested LangGraph Agent",
    period: "January 2026 - March 2026",
    description: "12-node planner-executor-evaluator agent with ChromaDB memory and fault injection, built to test observability and reliability for LLM-based systems.",
    achievements: [
      "Dynamic replanning across 5 conditional edges with a custom JSONL telemetry layer tracking 8 span types",
      "Fault-injection harness (timeouts, exceptions, malformed LLM outputs); 200+ sessions generating 10K+ log records",
      "Categorized 185 failure modes; achieved 76% task completion under active failure conditions"
    ],
    tags: ["Python", "LangGraph", "LangChain", "ChromaDB"],
    color: "cyan"
  },
  {
    icon: Stethoscope,
    title: "DentAI: AI-Assisted Dental X-Ray Review",
    period: "February 2026",
    description: "End-to-end clinical workflow for AI-assisted dental X-ray review, built at SacHacks 2026 (1st place, ~80 teams).",
    achievements: [
      "Fine-tuned a 2-model YOLOv8 detection ensemble behind an async FastAPI job queue, merging overlapping boxes at IoU >= 0.5",
      "LLM report generator with a 4-tier provider fallback (Groq, Ollama, Hugging Face)",
      "Corrections capture flow converts dentist edits back into YOLO-format retraining labels"
    ],
    tags: ["Python", "YOLOv8", "FastAPI", "SQLite", "Groq", "Hugging Face"],
    color: "emerald"
  },
  {
    icon: Trophy,
    title: "OCR Bot - Invoice Data Automation",
    period: "May 2021",
    description: "Built an OCR automation system that extracted key entities from invoices of various formats for the Maverick 2.0 Botathon (Top 8 National Finalist out of 500 teams).",
    achievements: [
      "Reduced manual entry time by 90%",
      "Improved parsing accuracy to ~95% across 5 PDF templates",
      "Implemented regex-based entity extraction",
      "Streamlined reconciliation with Excel integration"
    ],
    tags: ["Python", "OCR", "Automation"],
    color: "cyan",
    githubUrl: "https://github.com/Burnfireblaze/AB-InBev-Maverick-2.0-Botathon-OCR-Byte-Warriors"
  },
  {
    icon: Activity,
    title: "Pneumonia Detection Web App",
    period: "April 2020 - May 2020",
    description: "Created a deep learning-powered web application for pneumonia detection using chest X-rays.",
    achievements: [
      "Built a CNN model achieving 97% accuracy on test data",
      "Integrated model into Flask web interface for real-time analysis",
      "Deployed app on IBM Watson Cloud",
      "Demonstrated feasibility of AI-assisted healthcare diagnostics"
    ],
    tags: ["Keras", "Flask", "IBM Watson", "ML"],
    color: "emerald",
    githubUrl: "https://github.com/Burnfireblaze/Pneumonia-Detection---CNN"
  }
];

export function Projects() {
  const [expandedIndices, setExpandedIndices] = useState<Set<number>>(new Set());

  const toggleExpand = (index: number) => {
    setExpandedIndices(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <section id="projects" className="relative py-32 bg-black overflow-hidden">
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

      {/* Hexagon pattern overlay */}
      <div className="absolute inset-0 opacity-12 pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at center, rgba(124, 58, 237, 0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            animation: 'hex-pulse 8s ease-in-out infinite'
          }}
        />
      </div>

      {/* Animated vertical lines - reduced count for performance */}
      <div className="absolute inset-0 opacity-8 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-violet-500 to-transparent"
            style={{ left: `${i * 10}%` }}
            animate={{
              opacity: [0.1, 0.4, 0.1],
              scaleY: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.1,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Floating squares - reduced count for performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 border border-cyan-500/30"
            initial={{ 
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
              rotate: 0
            }}
            animate={{
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
              rotate: 360
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Subtle animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-violet-600 rounded-full filter blur-3xl opacity-10"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -50, 0],
          y: [0, 30, 0]
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-600 rounded-full filter blur-3xl opacity-10"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
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
        @keyframes hex-pulse {
          0%, 100% { transform: scale(1); opacity: 0.12; }
          50% { transform: scale(1.1); opacity: 0.2; }
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
            Featured <span className="bg-gradient-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const isExpanded = expandedIndices.has(index);
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px" }}
                transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
                className="group relative"
              >
                <div className="relative h-full p-8 bg-gradient-to-br from-violet-900/30 to-cyan-900/30 backdrop-blur-sm rounded-2xl border border-violet-500/20 hover:border-violet-500/50 transition-all overflow-hidden">
                  {/* Animated gradient overlay */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${
                      project.color === 'violet' ? 'from-violet-600/0 to-violet-600/20' :
                      project.color === 'cyan' ? 'from-cyan-600/0 to-cyan-600/20' :
                      'from-emerald-600/0 to-emerald-600/20'
                    } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />

                  <div className="relative">
                    {/* Icon and badges row */}
                    <div className="flex items-start justify-between mb-6">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`inline-flex p-4 rounded-xl ${
                          project.color === 'violet' ? 'bg-violet-500/20 text-violet-400' :
                          project.color === 'cyan' ? 'bg-cyan-500/20 text-cyan-400' :
                          'bg-emerald-500/20 text-emerald-400'
                        }`}
                      >
                        <project.icon className="w-8 h-8" />
                      </motion.div>

                      <div className="flex items-center gap-3">
                        {project.workInProgress && (
                          <span className="px-3 py-1 text-xs bg-orange-500/20 text-orange-300 border border-orange-500/30 rounded-full">
                            Work in Progress
                          </span>
                        )}
                        {project.githubUrl && (
                          <motion.a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-2 px-3 py-2 text-sm text-gray-400 hover:text-white bg-violet-500/10 hover:bg-violet-500/20 rounded-lg transition-colors border border-violet-500/20"
                          >
                            <Github className="w-4 h-4" />
                            <span>GitHub</span>
                          </motion.a>
                        )}
                      </div>
                    </div>

                    {/* Title and period */}
                    <h3 className="text-2xl text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-400 mb-4">{project.period}</p>

                    {/* Description */}
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Expanded Details */}
                    {isExpanded && (
                      <div className="mb-6 border-t border-violet-500/20 pt-6">
                        <h4 className="text-lg text-white mb-4">Key Contributions & Achievements</h4>
                        <div className="space-y-3">
                          {project.achievements.map((achievement, achIndex) => (
                            <div
                              key={achIndex}
                              className="flex items-start gap-3"
                            >
                              <div className={`mt-2 w-2 h-2 rounded-full flex-shrink-0 ${
                                project.color === 'violet' ? 'bg-violet-400' :
                                project.color === 'cyan' ? 'bg-cyan-400' :
                                'bg-emerald-400'
                              }`} />
                              <p className="text-gray-300 leading-relaxed">{achievement}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className={`px-3 py-1 text-xs rounded-full ${
                            project.color === 'violet' ? 'bg-violet-500/20 text-violet-300 border border-violet-500/30' :
                            project.color === 'cyan' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' :
                            'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Expand/Collapse Button */}
                    <motion.button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleExpand(index);
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-violet-400 transition-colors w-full justify-center py-3 rounded-lg bg-violet-500/5 hover:bg-violet-500/10 border border-violet-500/10 hover:border-violet-500/30"
                    >
                      <span>{isExpanded ? 'Show Less' : 'View Details'}</span>
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
