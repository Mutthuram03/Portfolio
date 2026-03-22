import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code, Database, Server, GitBranch, Lock, Eye, Atom, Brain, Globe } from "lucide-react";
import AnimatedBackground from "./AnimatedBackground";

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { 
      name: "HTML", 
      icon: Code, 
      color: "from-orange-500 to-red-500",
      description: "Semantic markup and accessibility standards for building structured web content"
    },
    { 
      name: "CSS", 
      icon: Code, 
      color: "from-blue-500 to-cyan-500",
      description: "Modern styling techniques including Flexbox, Grid, and responsive design patterns"
    },
    { 
      name: "JavaScript", 
      icon: Code, 
      color: "from-yellow-400 to-yellow-600",
      description: "ES6+ features, async programming, DOM manipulation, and modern JavaScript concepts"
    },
    { 
      name: "React.js", 
      icon: Code, 
      color: "from-cyan-400 to-blue-500",
      description: "Component-based architecture, hooks, state management, and building dynamic UIs"
    },
        { 
      name: "Authentication", 
      icon: Lock, 
      color: "from-rose-500 to-pink-600",
      description: "Implementation of secure user authentication using JWT, session management, and basic OAuth concepts"
    },
    { 
      name: "OpenCV & YOLO", 
      icon: Eye, 
      color: "from-blue-500 to-indigo-500",
      description: "Computer vision tools used for real-time object detection, image processing, and machine learning-based recognition systems"
    },
    { 
      name: "Qiskit", 
      icon: Atom, 
      color: "from-violet-600 to-fuchsia-700",
      description: "Framework for developing quantum algorithms and simulations, used for building secure and advanced computational models"
    },
        { 
      name: "Git & GitHub", 
      icon: GitBranch, 
      color: "from-gray-700 to-gray-900",
      description: "Version control, branching strategies, collaboration, and code repository management"
    },
    { 
      name: "MySQL", 
      icon: Database, 
      color: "from-blue-600 to-cyan-500",
      description: "Relational database management, SQL queries, joins, and data normalization"
    },

    { 
      name: "Java", 
      icon: Code, 
      color: "from-red-600 to-orange-500",
      description: "Object-oriented programming, data structures, algorithms, and backend development"
    },
    { 
      name: "C", 
      icon: Code, 
      color: "from-blue-700 to-blue-900",
      description: "Low-level programming, memory management, pointers, and system programming"
    },
    { 
      name: "Python", 
      icon: Code, 
      color: "from-yellow-500 to-blue-600",
      description: "Data science, machine learning, automation, and rapid application development"
    },
    { 
      name: "Node.js", 
      icon: Server, 
      color: "from-green-600 to-emerald-700",
      description: "Server-side JavaScript runtime for building scalable backend applications and REST APIs"
    },
    { 
      name: "Next.js", 
      icon: Code, 
      color: "from-neutral-700 to-neutral-900",
      description: "React framework for building fast, SEO-friendly web applications with server-side rendering and routing"
    },

    { 
      name: "Machine Learning", 
      icon: Brain, 
      color: "from-purple-500 to-pink-500",
      description: "Knowledge of core ML concepts like supervised learning, model training, and evaluation with practical exposure using Python libraries."
    },
    { 
      name: "API Integration", 
      icon: Globe, 
      color: "from-blue-400 to-indigo-500",
      description: "Working with external APIs (fetch/axios, async handling) and handling data exchange."
    },

  ];

  return (
    <section id="skills" className="relative py-20 lg:py-32 overflow-hidden">
      <AnimatedBackground />
      
      {/* Binary Rain Background Effect */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-primary font-mono text-xs"
            style={{ left: `${(i * 5) % 100}%` }}
            animate={{
              y: [-100, 2000],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          >
            {Array.from({ length: 20 })
              .map(() => Math.random() > 0.5 ? "1" : "0")
              .join("\n")}
          </motion.div>
        ))}
      </div>

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
              Skills & Technologies
            </motion.h2>
            <motion.div
              className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto"
              initial={{ width: 0 }}
              animate={inView ? { width: 80 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="glass-effect rounded-2xl p-6 hover:glow-effect transition-all duration-300 group cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -8 }}
              >
                <div
                  className={`w-16 h-16 mx-auto rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4 group-hover:shadow-xl transition-shadow`}
                >
                  <skill.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-center font-semibold text-foreground group-hover:gradient-text transition-all mb-2">
                  {skill.name}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed text-center">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;