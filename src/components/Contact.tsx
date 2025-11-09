import { motion } from "motion/react";
import { Mail, Linkedin, Github, MapPin, Download, Phone } from "lucide-react";
import { toast } from "sonner@2.0.3";

export function Contact() {
  const handleDownloadResume = () => {
    // Create a blob with the resume content
    const resumeContent = `SUDARSAN SRIVATHSUN
Davis, CA | +1 (530)-231-0028 | srisudarsan2000@gmail.com
www.linkedin.com/in/sudarsan-srivathsun | https://github.com/Burnfireblaze

SUMMARY
Former software engineer with 3+ years of experience in full stack development. Proficient in programming languages including Python, C, C++, and JavaScript. Skilled in deep learning, AI, and building secure, scalable, and user-centric applications. Intuitive in developing CI/CD DevOps pipelines, designing ETL pipelines, and deploying solutions on Cloud platforms with a focus on Microsoft Azure. Adept in Agile development methodologies, object-oriented design and the Scrum framework, collaborating effectively in cross-functional and fast paced teams.

EDUCATION
UNIVERSITY OF CALIFORNIA, DAVIS | September 2025 - June 2027
Master of Science, Computer Science

SRM INSTITUTE OF SCIENCE AND TECHNOLOGY | June 2018 - May 2022
Bachelor of Technology, Computer Science and Engineering | GPA: 8.76/10.00

WORK EXPERIENCE
AB INBEV GCC SERVICES INDIA PRIVATE LIMITED | Bengaluru, India
Software Engineer 2 | November 2024 - July 2025
• Reduced module delivery time from 7 months to 3 months by leading a 10-member development team
• Built reusable APIs and components utilizing React, Flask, MSSQL, Azure

Software Engineer 1 | August 2022 - October 2024
• Reduced API response time from 20 seconds to milliseconds for 200+ North America users
• Led 2-developer team to secure application against OWASP Top 10 vulnerabilities
• Delivered workload savings equivalent to 1.5 FTEs through automation

Software Engineering Intern | July 2021 - July 2022
• Enhanced UX for 3,000+ users by reducing click count from 5 to 2
• Reduced retailer onboarding time from 5 days to 1 day for 1,000+ users

SKILLS
Languages: C/C++, HTML5, CSS, JavaScript, SQL, Python
Frameworks: React, Redux, Node.js, Flask, TensorFlow, Keras
Cloud: Azure, IBM Watson
Databases: MSSQL, MySQL, Snowflake

CERTIFICATIONS
• AZ-900: Microsoft Azure Fundamentals
• Progressive Web Apps (Udemy)
• Front-End Web Development with React (Coursera)`;

    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Sudarsan_Srivathsun_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
    
    toast.success('Resume downloaded successfully!');
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "srisudarsan2000@gmail.com",
      link: "mailto:srisudarsan2000@gmail.com",
      color: "violet"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (530)-231-0028",
      link: "tel:+15302310028",
      color: "cyan"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "sudarsan-srivathsun",
      link: "https://www.linkedin.com/in/sudarsan-srivathsun",
      color: "emerald"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Burnfireblaze",
      link: "https://github.com/Burnfireblaze",
      color: "pink"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Davis, CA",
      link: null,
      color: "amber"
    }
  ];

  return (
    <section id="contact" className="relative py-32 bg-black overflow-hidden">
      {/* Smooth blend from previous section */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-black via-black/50 to-transparent pointer-events-none z-10" />
      
      {/* Unified animated grid background */}
      <div className="absolute inset-0">
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
      </div>

      {/* Animated dots pattern overlay */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(124, 58, 237, 0.5) 2px, transparent 2px)`,
            backgroundSize: '40px 40px',
            animation: 'dots-float 15s ease-in-out infinite'
          }}
        />
      </div>

      {/* Lightning bolts effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 bg-gradient-to-b from-transparent via-violet-400 to-transparent"
            style={{
              left: `${i * 8.33}%`,
              height: '100%'
            }}
            animate={{
              opacity: [0, 0.3, 0],
              scaleY: [0.3, 1, 0.3]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
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
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600 rounded-full filter blur-3xl opacity-10"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -50, 0],
          y: [0, 30, 0]
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <style>{`
        @keyframes grid-flow {
          0% { transform: translateX(0) translateY(0); }
          100% { transform: translateX(60px) translateY(60px); }
        }
        @keyframes dots-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
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
            Get In <span className="bg-gradient-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto mb-4" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Let's collaborate on your next project or discuss opportunities
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, rotateY: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                  rotateY: 5,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
                className="group"
                style={{ transformStyle: "preserve-3d" }}
              >
                {info.link ? (
                  <a
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="block"
                  >
                    <div className="relative p-6 bg-gradient-to-br from-violet-900/30 to-cyan-900/30 backdrop-blur-sm rounded-xl border border-violet-500/20 group-hover:border-violet-500/50 transition-all h-full overflow-hidden">
                      {/* Animated gradient overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${
                        info.color === 'violet' ? 'from-violet-600/0 to-violet-600/20' :
                        info.color === 'cyan' ? 'from-cyan-600/0 to-cyan-600/20' :
                        info.color === 'emerald' ? 'from-emerald-600/0 to-emerald-600/20' :
                        info.color === 'pink' ? 'from-pink-600/0 to-pink-600/20' :
                        'from-amber-600/0 to-amber-600/20'
                      } opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl`} />
                      
                      {/* Shine effect on hover */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6 }}
                      />
                      
                      <div className="relative">
                        <div className="mb-3">
                          <info.icon className={`w-8 h-8 transition-transform duration-500 group-hover:rotate-[360deg] group-hover:scale-110 ${
                            info.color === 'violet' ? 'text-violet-400' :
                            info.color === 'cyan' ? 'text-cyan-400' :
                            info.color === 'emerald' ? 'text-emerald-400' :
                            info.color === 'pink' ? 'text-pink-400' :
                            'text-amber-400'
                          }`} />
                        </div>
                        <div className="text-sm text-gray-400 mb-1">{info.label}</div>
                        <div className="text-white break-all">{info.value}</div>
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className="relative p-6 bg-gradient-to-br from-violet-900/30 to-cyan-900/30 backdrop-blur-sm rounded-xl border border-violet-500/20 group-hover:border-violet-500/50 transition-all h-full overflow-hidden">
                    {/* Animated gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br from-amber-600/0 to-amber-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl`} />
                    
                    {/* Shine effect on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                    
                    <div className="relative">
                      <div className="mb-3">
                        <info.icon className="w-8 h-8 text-amber-400 transition-transform duration-500 group-hover:rotate-[360deg] group-hover:scale-110" />
                      </div>
                      <div className="text-sm text-gray-400 mb-1">{info.label}</div>
                      <div className="text-white">{info.value}</div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Download Resume Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.button
              onClick={handleDownloadResume}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-xl overflow-hidden transition-all"
            >
              <span className="relative z-10 flex items-center gap-3 text-white text-lg">
                <Download className="w-5 h-5" />
                Download Resume
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-violet-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
            <p className="mt-4 text-gray-400 text-sm">
              Get a copy of my complete resume with all details
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
