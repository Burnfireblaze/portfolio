import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X, Download, Loader2 } from "lucide-react";
import { Button } from "./ui/button";

const navItems = [
  { name: "Home", id: "hero" },
  { name: "About", id: "about" },
  { name: "Experience", id: "experience" },
  { name: "Projects", id: "projects" },
  { name: "Skills", id: "skills" },
  { name: "Awards", id: "awards" },
  { name: "Contact", id: "contact" }
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      // If near the top, set hero as active
      if (window.scrollY < 200) {
        setActiveSection("hero");
        return;
      }

      const sections = navItems.slice(1).map(item => document.getElementById(item.id));

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i + 1].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = id === "hero" 
      ? document.querySelector('section')
      : document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const handleDownloadResume = async () => {
    setIsDownloading(true);
    try {
      // Direct Google Drive download link (replace with your own file ID)
      const fileId = '120_tyqZI0oT-930G8Z_x69s7hDuvTbJl';
      const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

      const link = document.createElement('a');
      link.href = downloadUrl;
      link.setAttribute('download', 'Resume - Sudarsan Srivathsun.pdf');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Optional: simulate download time for loading animation
      await new Promise((resolve) => setTimeout(resolve, 1000));
    } finally {
      setIsDownloading(false);
    }
  };
  
  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
      >
        <div className="max-w-7xl mx-auto">
          <div className="relative backdrop-blur-md bg-white/5 border border-white/10 rounded-full px-6 py-3 shadow-2xl">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="cursor-pointer"
                onClick={() => scrollToSection("hero")}
              >
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  SS
                </span>
              </motion.div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-1">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="relative px-4 py-2 rounded-full transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className={activeSection === item.id ? 'text-white' : 'text-white/60'}>
                      {item.name}
                    </span>
                    {activeSection === item.id && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute inset-0 bg-white/10 rounded-full"
                        transition={{ type: "spring", duration: 0.6 }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>

              {/* Resume Button - Desktop */}
              <Button
                onClick={handleDownloadResume}
                disabled={isDownloading}
                size="sm"
                className="hidden md:flex bg-gradient-to-r from-violet-500 to-cyan-500 hover:from-violet-600 hover:to-cyan-600 border-0 rounded-full gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isDownloading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Download className="w-4 h-4" />
                )}
                {isDownloading ? "Downloading..." : "Resume"}
              </Button>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-white p-2"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={{ 
          opacity: isOpen ? 1 : 0,
          x: isOpen ? 0 : "100%"
        }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 right-0 bottom-0 w-64 bg-black/95 backdrop-blur-xl border-l border-violet-500/20 z-40 md:hidden ${
          isOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-2 p-8 pt-20">
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : 20 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-violet-500/10 rounded-lg transition-all"
            >
              {item.name}
            </motion.button>
          ))}
          
          {/* Mobile Resume Button */}
          <motion.button
            onClick={handleDownloadResume}
            disabled={isDownloading}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : 20 }}
            transition={{ duration: 0.3, delay: navItems.length * 0.05 }}
            className="mt-4 px-4 py-3 bg-gradient-to-r from-violet-500 to-cyan-500 text-white rounded-lg text-center flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isDownloading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Downloading...
              </>
            ) : (
              <>
                <Download className="w-4 h-4" />
                Resume
              </>
            )}
          </motion.button>
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden"
        />
      )}
    </>
  );
}
