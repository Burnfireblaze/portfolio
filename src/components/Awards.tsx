import { motion } from "motion/react";
import { Trophy, Star, Award as AwardIcon } from "lucide-react";

const awards = [
  {
    title: "Excellence in Action: Transformation Award",
    organization: "AB InBev",
    date: "October 2022",
    icon: Trophy,
    color: "violet"
  },
  {
    title: "SCM Pitcher Award",
    organization: "AB InBev",
    date: "February 2025, February 2022",
    icon: Star,
    color: "cyan"
  },
  {
    title: "R&R Pitcher Award",
    organization: "AB InBev",
    date: "Sep 2024, Jan 2024, Apr 2023, Nov 2022, Apr 2022",
    icon: AwardIcon,
    color: "emerald"
  },
  {
    title: "Human-Centered Design Certificate of Merit",
    organization: "Bhav.AT",
    date: "2022",
    icon: AwardIcon,
    color: "amber"
  }
];

export function Awards() {
  return (
    <section id="awards" className="relative py-32 bg-black overflow-hidden">
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

      {/* Circuit-like pattern overlay */}
      <div className="absolute inset-0 opacity-12 pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(90deg, transparent 29px, rgba(124, 58, 237, 0.4) 29px, rgba(124, 58, 237, 0.4) 31px, transparent 31px),
              linear-gradient(transparent 29px, rgba(6, 182, 212, 0.4) 29px, rgba(6, 182, 212, 0.4) 31px, transparent 31px)
            `,
            backgroundSize: '60px 60px',
            animation: 'circuit-flow 20s linear infinite'
          }}
        />
      </div>

      {/* Rotating circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 border border-violet-500/20 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`
            }}
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1]
            }}
            transition={{
              rotate: { duration: 20 + i * 2, repeat: Infinity, ease: "linear" },
              scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
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
          y: [0, -30, 0]
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600 rounded-full filter blur-3xl opacity-10"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -50, 0],
          y: [0, 30, 0]
        }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Smooth blend to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none z-10" />

      <style>{`
        @keyframes grid-flow {
          0% { transform: translateX(0) translateY(0); }
          100% { transform: translateX(60px) translateY(60px); }
        }
        @keyframes circuit-flow {
          0% { transform: translate(0, 0); }
          100% { transform: translate(60px, 60px); }
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
            Awards & <span className="bg-gradient-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent">Recognition</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto mb-4" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Recognition for outstanding performance, innovation, and contribution to transformative projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
              whileHover={{ scale: 1.03, y: -8 }}
              className="group relative"
            >
              <div className="relative p-8 bg-gradient-to-br from-violet-900/30 to-cyan-900/30 backdrop-blur-sm rounded-2xl border border-violet-500/20 hover:border-violet-500/50 transition-all overflow-hidden">
                {/* Shine effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />

                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${
                  award.color === 'violet' ? 'from-violet-600/0 to-violet-600/20' :
                  award.color === 'cyan' ? 'from-cyan-600/0 to-cyan-600/20' :
                  award.color === 'emerald' ? 'from-emerald-600/0 to-emerald-600/20' :
                  'from-amber-600/0 to-amber-600/20'
                } opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className="relative flex items-start gap-6">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                    className={`flex-shrink-0 p-4 rounded-xl ${
                      award.color === 'violet' ? 'bg-violet-500/20' :
                      award.color === 'cyan' ? 'bg-cyan-500/20' :
                      award.color === 'emerald' ? 'bg-emerald-500/20' :
                      'bg-amber-500/20'
                    }`}
                  >
                    <award.icon className={`w-8 h-8 ${
                      award.color === 'violet' ? 'text-violet-400' :
                      award.color === 'cyan' ? 'text-cyan-400' :
                      award.color === 'emerald' ? 'text-emerald-400' :
                      'text-amber-400'
                    }`} />
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl text-white mb-2">
                      {award.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm">
                      <span className={`${
                        award.color === 'violet' ? 'text-violet-400' :
                        award.color === 'cyan' ? 'text-cyan-400' :
                        award.color === 'emerald' ? 'text-emerald-400' :
                        'text-amber-400'
                      }`}>
                        {award.organization}
                      </span>
                      <span className="text-gray-500">•</span>
                      <span className="text-gray-400">{award.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 p-8 bg-gradient-to-br from-violet-900/20 to-cyan-900/20 backdrop-blur-sm rounded-2xl border border-violet-500/20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, type: "spring" }}
                className="text-4xl md:text-5xl bg-gradient-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent mb-2"
              >
                12+
              </motion.div>
              <div className="text-gray-400">Total Awards</div>
            </div>
            <div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1, type: "spring" }}
                className="text-4xl md:text-5xl bg-gradient-to-r from-cyan-500 to-emerald-500 bg-clip-text text-transparent mb-2"
              >
                5
              </motion.div>
              <div className="text-gray-400">R&R Awards</div>
            </div>
            <div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
                className="text-4xl md:text-5xl bg-gradient-to-r from-emerald-500 to-violet-500 bg-clip-text text-transparent mb-2"
              >
                4
              </motion.div>
              <div className="text-gray-400">Years</div>
            </div>
            <div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3, type: "spring" }}
                className="text-4xl md:text-5xl bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent mb-2"
              >
                Top 8
              </motion.div>
              <div className="text-gray-400">Hackathon Rank</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
