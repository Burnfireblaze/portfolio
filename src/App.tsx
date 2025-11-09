import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Awards } from "./components/Awards";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { MouseGlow } from "./components/MouseGlow";
import { Toaster } from "./components/ui/sonner";
import { motion, useScroll, useSpring } from "motion/react";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-cyan-500 to-violet-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <Navigation />

      {/* Main content */}
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Awards />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll to top button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: showScrollTop ? 1 : 0,
          scale: showScrollTop ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-full shadow-lg hover:shadow-violet-500/50 transition-shadow z-40 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUp className="w-6 h-6 text-white" />
      </motion.button>

      {/* Toast notifications */}
      <Toaster 
        position="bottom-right"
        theme="dark"
        toastOptions={{
          style: {
            background: 'rgba(17, 24, 39, 0.9)',
            border: '1px solid rgba(124, 58, 237, 0.3)',
            color: '#fff',
          },
        }}
      />

      {/* Mouse glow effect */}
      <MouseGlow />
    </div>
  );
}
