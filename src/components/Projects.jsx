import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { AlertTriangle, Brain, FileText, Utensils, Github, Youtube, Waves, Film, Briefcase } from "lucide-react";
import AnimatedBackground from "./AnimatedBackground";
import { Button } from "@/components/ui/button";
import vigyaanImg from "@/assets/vigyaan-project.png";
import expenseTrackerImg from "@/assets/expense-tracker-project.png";
import portfolioImg from "@/assets/Portfolio.png";
import varunaImg from "@/assets/varuna-project.png";
import farmStackImg from "@/assets/Farmstack.png";
import multiCoinImg from "@/assets/Multicoin.png";
import focusGuardImg from "@/assets/FocusGuard.png";

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
     {
      title: "FarmStack",
      duration: "Jan 2026- Feb 2026",
      description: "FarmStack is an agricultural platform designed to connect farmers directly with customers while enabling efficient sharing and rental of farm equipment. It eliminates middlemen, allowing farmers to earn better profits and customers to purchase fresh produce directly from farms. The platform also addresses the high cost of agricultural tools by providing an equipment-sharing system that improves resource utilization and reduces expenses. Built with modern web technologies, FarmStack aims to create a more transparent, cost-effective, and sustainable agricultural ecosystem.",
      tags: ["React", "JavaScript", "html", "css"],
      github: "https://github.com/Mutthuram03/FarmStack.git",
      youtube: "https://farm-stack-app.vercel.app/",
      gradient: "from-green-500 to-cyan-600",
      image: farmStackImg,
    },
     {
      title: "MultiCoin Detection Using OpenCV and YOLOv8",
      duration: "Dec 2025- Feb 2026",
      description: "A computer vision project that detects and classifies multiple coins from images using YOLOv8 and OpenCV. It identifies different denominations, counts them, and calculates the total value with high accuracy, even in cases of overlapping coins.",
      tags: ["Python", "OpenCV", "YOLOv8", "Machine Learning"],
      github: "https://github.com/Mutthuram03/Multicoin-Detection.git",
      gradient: "from-teal-500 to-emerald-600",
      image: multiCoinImg,
    },
    {
      title: "Quantum Secure OTP Generator",
      duration: "Mar 2026 - Present",
      description: "A secure one-time password generator that utilizes quantum randomness principles to enhance security against traditional attacks. The system generates unpredictable OTPs, improving authentication reliability and reducing vulnerability to hacking.",
      tags: ["Python", "Quantum Computing (Qiskit)", "Cryptography"],
      github: "https://github.com/Mutthuram03/Quantum_Secure_OTP_Generator.git",
      gradient: "from-indigo-500 to-violet-600",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&auto=format&fit=crop&q=60",
    },
    {
      title: "FocusGuard",
      duration: "Mar 2026 - Present",
      description: "FocusGuard is a browser-based productivity monitoring application that analyzes user activity to detect genuine work versus inactive or fake effort. It tracks real-time interactions such as typing, mouse movement, tab switching, and idle time to generate a dynamic productivity score and provide instant feedback through warnings and visual indicators. Built using React (Vite) and JavaScript, the application runs entirely on the client side using browser APIs and localStorage, showcasing real-time state management, event handling, and behavior-driven analytics.",
    
      tags: ["React", "JavaScript", "Local Storage", "Browser APIs"],
      github: "https://github.com/Mutthuram03/FocusGuard.git",
      gradient: "from-purple-500 to-indigo-600",
      image: focusGuardImg,
    },
   
    {
      title: "Vigyaan",
      duration: "Jan 2025 - Mar 2025",
      description: "VIGYAAN (Vulnerability Indicator for Geospatial Yield, Alerts And Networks) is an AI-powered disaster management system that enhances preparedness and response to natural hazards. It uses geospatial data, historical patterns, and real-time inputs to identify high-risk areas, provide early warnings for floods, cyclones, and earthquakes, and suggest safe evacuation routes. The platform includes an interactive dashboard for visualizing risk data, along with real-time alerts and multilingual support (Tamil, Hindi, and English) for better accessibility. Built with Next.js and React, VIGYAAN is scalable, responsive, and designed to help communities and authorities reduce disaster impact and improve resilience.",
    
      tags: ["React", "JavaScript", "Firebase", "Geospatial Data","css"],
      github: "https://github.com/Mutthuram03/Vigyaan_Disaster_Management.git",
      gradient: "from-orange-500 to-red-600",
      image: vigyaanImg,
    },
     {
      title: "Varuna OCEANIX",
      duration: "Aug 2025 - Sep 2025",
      description: "An integrated digital platform designed to enhance coastal and ocean hazard management in India. Developed for the Smart India Hackathon 2025 (SIH 2025) under the Ministry of Earth Sciences (INCOIS), this system empowers coastal communities and disaster-response teams through crowdsourced data, social media analytics, and real-time decision support.",
      tags: ["React", "AI/ML", "Social Media Analytics", "Real-time Alerts"],
      github: "https://github.com/Mutthuram03/VARUNA_OCEANIX_.git",
      youtube: "https://youtu.be/BSpTrvgDOUg?si=ABiLP8NDHQfAte0i",
      gradient: "from-cyan-500 to-blue-600",
      image: varunaImg,
    },
    {
      title: "Student Expense Tracker",
      duration: "Sep 2025- Nov 2025",
      description: "A lightweight application that helps students record and manage their daily expenses. The project provides a clean interface to track spending, categorize expenses, and stay on budget.",
  
      tags: ["React", "JavaScript", "Local Storage", "CSS"],
      github: "https://github.com/Mutthuram03/Student_Expense_Tracker.git",
      gradient: "from-blue-500 to-purple-600",
      image: expenseTrackerImg,
    },
   
    {
      title: "Portfolio Website",
      duration: "Mar 2026",
      description: "A modern, responsive portfolio website showcasing projects, skills, and achievements with smooth animations and interactive UI. It is designed to provide a professional online presence and highlight real-world projects effectively.",
      tags: ["JavaScript", "React", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/Mutthuram03/Portfolio.git",
      gradient: "from-pink-500 to-rose-600",
      image: portfolioImg,
    },
   
  ];

  return (
    <section id="projects" className="relative py-20 lg:py-32 overflow-hidden">
      <AnimatedBackground />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Featured Projects
            </motion.h2>
            <motion.div
              className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-8"
              initial={{ width: 0 }}
              animate={inView ? { width: 80 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="glass-effect rounded-2xl overflow-hidden hover:glow-effect transition-all duration-300 flex flex-col group h-full"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative h-56 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-b ${project.gradient} opacity-20 group-hover:opacity-10 transition-opacity duration-300 z-10`} />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-8 flex flex-col flex-grow relative">
                  
                  <h3 className="text-2xl font-bold mb-1 gradient-text group-hover:scale-[1.02] transition-transform origin-left">
                    {project.title}
                  </h3>
                  
                  <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase mb-3 block">
                    {project.duration}
                  </span>
                  
                  <p className="text-muted-foreground mb-6 line-clamp-3 leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 mt-auto">
                    {project.github && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 border-primary/50 hover:border-primary hover:bg-primary/10 group/btn"
                        asChild
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.youtube && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 border-primary/50 hover:border-primary hover:bg-primary/10 group/btn"
                        asChild
                      >
                        <a
                          href={project.youtube}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Youtube className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;