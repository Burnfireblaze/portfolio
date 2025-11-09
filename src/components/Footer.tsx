import { motion } from "motion/react";
import { Linkedin, Github, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-8 bg-transparent overflow-hidden">
      <div className="relative container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col items-center justify-center gap-6">
          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4"
          >
            <motion.a
              href="https://www.linkedin.com/in/sudarsan-srivathsun"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="text-gray-400 hover:text-violet-400 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://github.com/Burnfireblaze"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="mailto:srisudarsan2000@gmail.com"
              whileHover={{ scale: 1.1, y: -2 }}
              className="text-gray-400 hover:text-emerald-400 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </motion.a>
          </motion.div>

          {/* Copyright text */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center text-sm text-gray-500"
          >
            © {currentYear} Sudarsan Srivathsun. Built with React, Motion, and Tailwind CSS.
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
