import { motion } from "motion/react";
import { Database, Package, Bot, ThumbsUp, MapPin, AlertCircle, Trophy, Activity, Lightbulb, Network, Github, ChevronDown, ChevronUp } from "lucide-react";
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
    period: "September 2025 - Present",
    description: "Developing RESQL, a SQL-based connector for ResilientDB, a blockchain-inspired distributed database system. The project replaces traditional key-value storage with SQL-based relational storage using DuckDB and SQLite, enabling familiar RDBMS-style querying and structured data management for decentralized applications.",
    achievements: [
      "Designed and implemented a C++ integration layer to translate SQL queries into ResilientDB's distributed transaction format",
      "Integrated DuckDB/SQLite as relational caching layers for local query execution, indexing, and analytical computation",
      "Built a Dockerized testing environment to simulate distributed nodes and benchmark query consistency and throughput",
      "Enhanced data accessibility and developer usability by providing an RDBMS abstraction atop ResilientDB's distributed ledger, bridging distributed systems concepts with SQL-based application development"
    ],
    tags: ["C++", "Python", "Docker", "DuckDB", "SQLite", "ResilientDB"],
    color: "violet",
    workInProgress: true
  },
  {
    icon: Network,
    title: "SDR-Based UDP Reliability Protocol",
    period: "September 2025 - Present",
    description: "Developing a Selective Repeat + Erasure Coding (EC-MDS-UDP) protocol inspired by SDR-RDMA middleware research, aimed at improving UDP reliability across lossy WANs.",
    achievements: [
      "Implementing reliability mechanisms with Selective Repeat NACKs",
      "Integrating Intel ISA-L for high-performance encoding and decoding",
      "Building Docker-based simulation using Linux tc for packet loss emulation",
      "Contributing to system architecture design and bitmap-based retransmission tracking"
    ],
    tags: ["C++", "Docker", "Python", "Networking"],
    color: "cyan",
    workInProgress: true
  },
  {
    icon: Database,
    title: "Global Financial Reconciliation Platform",
    period: "November 2024 - July 2025",
    description: "Led the development of a global financial reconciliation platform for AB InBev, digitizing and unifying financial workflows across four international regions.",
    achievements: [
      "Led a 10-member engineering team, translating business requirements into technical designs",
      "Improved delivery timelines from 7 months → 3 months through Agile sprint planning",
      "Enhanced security posture with Snyk and policy enforcement",
      "Automated complex reconciliation tasks with real-time data visibility"
    ],
    tags: ["React", "Flask", "MSSQL", "Azure"],
    color: "violet"
  },
  {
    icon: Package,
    title: "Finished Goods Management System",
    period: "January 2024 - October 2024",
    description: "Developed a finished goods management application that integrated Snowflake data lakes with operational databases to enable faster reporting and process traceability.",
    achievements: [
      "Designed data flow architecture using Azure Data Factory",
      "Optimized SQL queries, reducing API response time from 20s → milliseconds",
      "Created UI/UX design in Figma, implemented in React and Node.js",
      "Built ETL pipelines connecting legacy systems with Snowflake"
    ],
    tags: ["React", "Node.js", "Snowflake", "Azure"],
    color: "cyan"
  },
  {
    icon: Bot,
    title: "Financial Reconciliation Automation Bot",
    period: "August 2023 - December 2023",
    description: "Built a Python-based automation bot that reconciled financial data from multiple global sources, reducing manual workload and errors.",
    achievements: [
      "Designed automation flow using Selenium for data validation",
      "Reduced manual reconciliation efforts by 1.5 FTEs",
      "Mentored an intern through complete POC to production deployment",
      "Implemented secure credential management through Azure Key Vault"
    ],
    tags: ["Python", "Selenium", "Flask", "Azure"],
    color: "violet"
  },
  {
    icon: ThumbsUp,
    title: "NPS Feedback Application",
    period: "May 2022 - July 2022",
    description: "Enhanced a Net Promoter Score (NPS) application used by over 3,000 employees to capture and analyze feedback from customers and partners.",
    achievements: [
      "Re-engineered frontend, reducing user clicks from 5 → 2",
      "Improved query performance and response time",
      "Collaborated with design teams to modernize UI components",
      "Improved accessibility across the application"
    ],
    tags: ["React", "Flask", "SQL"],
    color: "cyan"
  },
  {
    icon: MapPin,
    title: "Retailer Onboarding Portal",
    period: "January 2022 - May 2022",
    description: "Developed a geo-intelligent onboarding web application for 1,000+ retail users across North America, simplifying the retailer registration process.",
    achievements: [
      "Served as the sole developer for the full-stack system",
      "Implemented geo-tagging and address search algorithms",
      "Reduced onboarding time from 5 days → 1 day",
      "Conducted stakeholder management and user acceptance testing"
    ],
    tags: ["React", "Node.js", "MSSQL", "Azure"],
    color: "emerald"
  },
  {
    icon: AlertCircle,
    title: "Complaint Management Portal",
    period: "August 2021 - December 2021",
    description: "Developed a ticketing and complaint management portal for both internal and external users, supporting over 1,000 users globally.",
    achievements: [
      "Designed and implemented complete frontend and backend architecture",
      "Streamlined complaint logging, resolution tracking, and escalation workflows",
      "Integrated role-based access control and secure authentication",
      "Improved user satisfaction with intuitive interface"
    ],
    tags: ["React", "Node.js"],
    color: "violet"
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
  },
  {
    icon: Lightbulb,
    title: "Hearing Impaired Translator Software (HITS)",
    period: "August 2018 - September 2018",
    description: "Developed a sign-language-to-text translator for the deaf and mute community, under the mentorship of Dr. Kyle Keane (MIT Assistive Technologies Lab).",
    achievements: [
      "Trained custom ML model to map hand gestures to English words",
      "Implemented web-based interface for live gesture translation",
      "Applied human-centered design principles",
      "Focused on accessibility and inclusivity"
    ],
    tags: ["Flask", "ML", "Accessibility"],
    color: "violet"
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
          <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto mb-4" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcasing innovation, research, and social impact through cutting-edge technology
          </p>
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
