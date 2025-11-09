import { motion } from "motion/react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    company: "AB InBev GCC Services India Private Limited",
    location: "Bengaluru, India",
    roles: [
      {
        title: "Software Engineer 2",
        period: "November 2024 - July 2025",
        achievements: [
          "Reduced module delivery time from 7 months to 3 months by leading a 10-member development team to digitize financial reconciliation across 4 global regions",
          "Established coding standards, translated functional requirements into technical specifications",
          "Built reusable APIs and components utilizing React, Flask, MSSQL, Azure, enhancing scalability, reliability, security with Snyk"
        ]
      },
      {
        title: "Software Engineer 1",
        period: "August 2022 - October 2024",
        achievements: [
          "Reduced API response time from 20 seconds to milliseconds and digitized a critical process for 200+ North America users",
          "Designed an indexed database schema, implemented microservices engineering principles, built ETL pipelines for seamless integration",
          "Led a 2-developer team to secure the application against OWASP Top 10 vulnerabilities using Snyk and Apiiro",
          "Delivered workload savings equivalent to 1.5 FTEs by architecting a scalable financial reconciliation automation bot from POC to production"
        ]
      },
      {
        title: "Software Engineering Intern",
        period: "July 2021 - July 2022",
        achievements: [
          "Enhanced UX for 3,000+ users by reducing click count from 5 to 2 in a NPS app using React, Python, SQL",
          "Reduced retailer onboarding time from 5 days to 1 day for 1,000+ users as the sole developer",
          "Implemented geo-tagging, address/nearby search, and algorithmic retailer ID generator",
          "Built a complaints user interface serving 1,000+ users using React and Node.js"
        ]
      }
    ]
  },
  {
    company: "The Smart Bridge",
    location: "Remote",
    roles: [
      {
        title: "Intern",
        period: "April 2020 - May 2020",
        achievements: [
          "Achieved 97% test accuracy by developing a CNN model for pneumonia prediction from chest X-rays",
          "Integrated the model into a web application using Keras, Scikit-learn, Flask, IBM Watson, and Node-Red"
        ]
      }
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="relative py-32 bg-black overflow-hidden">
      {/* Smooth blend from previous section */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-black via-black/50 to-transparent pointer-events-none z-10" />
      
      {/* Unified animated grid background */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-0 left-0 w-full h-full" 
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

      {/* Animated wave pattern overlay */}
      <div className="absolute inset-0 opacity-12 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full" 
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(6, 182, 212, 0.4) 2px, transparent 2px)`,
            backgroundSize: '50px 50px',
            animation: 'wave-move 20s ease-in-out infinite'
          }}
        />
      </div>

      {/* Diagonal stripes */}
      <div className="absolute inset-0 opacity-8 pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 40px,
              rgba(6, 182, 212, 0.2) 40px,
              rgba(6, 182, 212, 0.2) 42px
            )`,
            animation: 'stripe-scroll 15s linear infinite'
          }}
        />
      </div>

      {/* Subtle animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-violet-600 rounded-full filter blur-3xl opacity-10"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -50, 0],
          y: [0, 30, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-600 rounded-full filter blur-3xl opacity-10"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
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
        @keyframes wave-move {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(20px); }
        }
        @keyframes stripe-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(40px); }
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
            Work <span className="bg-gradient-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-violet-500 via-cyan-500 to-violet-500" />

          {experiences.map((exp, expIndex) => (
            <div key={expIndex} className="mb-16 last:mb-0">
              {exp.roles.map((role, roleIndex) => (
                <motion.div
                  key={roleIndex}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px" }}
                  transition={{ duration: 0.4, delay: Math.min(roleIndex * 0.08, 0.4) }}
                  className={`relative mb-12 ${
                    roleIndex % 2 === 0 ? 'md:ml-auto md:pl-12' : 'md:mr-auto md:pr-12'
                  } md:w-1/2`}
                >
                  {/* Timeline dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: roleIndex * 0.2 + 0.3 }}
                    className={`hidden md:block absolute top-8 ${
                      roleIndex % 2 === 0 ? '-left-2' : '-right-2'
                    } w-4 h-4 bg-violet-500 rounded-full border-4 border-gray-900 z-10`}
                  />

                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="group relative p-8 bg-gradient-to-br from-violet-900/30 to-cyan-900/30 backdrop-blur-sm rounded-2xl border border-violet-500/20 hover:border-violet-500/50 transition-all"
                  >
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-600/0 to-cyan-600/0 group-hover:from-violet-600/10 group-hover:to-cyan-600/10 rounded-2xl transition-all duration-300" />
                    
                    <div className="relative">
                      <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
                        <div>
                          <h3 className="text-2xl text-white mb-2">{role.title}</h3>
                          <div className="flex items-center gap-2 text-violet-400 mb-1">
                            <Briefcase className="w-4 h-4" />
                            <span>{exp.company}</span>
                          </div>
                          <div className="text-gray-400 text-sm">{exp.location}</div>
                        </div>
                        <div className="flex items-center gap-2 text-cyan-400 text-sm">
                          <Calendar className="w-4 h-4" />
                          <span>{role.period}</span>
                        </div>
                      </div>

                      <div className="space-y-3">
                        {role.achievements.map((achievement, achIndex) => (
                          <motion.div
                            key={achIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: achIndex * 0.1 }}
                            className="flex items-start gap-3 group/item"
                          >
                            <div className="mt-2 w-1.5 h-1.5 rounded-full bg-violet-400 group-hover/item:bg-cyan-400 transition-colors flex-shrink-0" />
                            <p className="text-gray-300 leading-relaxed group-hover/item:text-white transition-colors">
                              {achievement}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
