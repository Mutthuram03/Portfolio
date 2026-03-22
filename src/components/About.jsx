import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code2, Lightbulb, Languages, Users } from "lucide-react";
import AnimatedBackground from "./AnimatedBackground";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const highlights = [
    {
      icon: Code2,
      title: "Fullstack Development",
      description: "Building modern web applications with React, Node.js, and cloud technologies",
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Crafting innovative solutions to complex technical challenges",
    },
    {
      icon: Users,
      title: "Teamwork",
      description: "Collaborating effectively with cross-functional teams to deliver exceptional results",
    },
    {
      icon: Lightbulb,
      title: "Tech Enthusiast",
      description: "Passionate about exploring emerging technologies and staying at the forefront of innovation",
    },
  ];

  const languages = [
    { name: "Tamil", level: "Expert", percentage: 100 },
    { name: "English", level: "Proficient", percentage: 85 },
    { name: "German", level: "Beginner", percentage: 30 },
  ];

  const stats = [
    { value: "10+", label: "Projects" },
    { value: "2+", label: "Years Learning" },
  ];

  return (
    <section id="about" className="relative py-20 lg:py-32 overflow-hidden">
      <AnimatedBackground />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              About Me
            </motion.h2>
            <motion.div
              className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-8"
              initial={{ width: 0 }}
              animate={inView ? { width: 80 } : {}}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Left Column: Personal Introduction & Languages */}
            <div className="space-y-6">
              <motion.div
                className="glass-effect rounded-2xl p-8 md:p-12"
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                whileHover={{ scale: 1.02 }}
              >
                <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                  Hi, I'm <span className="font-bold gradient-text hover:scale-110 inline-block transition-transform cursor-pointer">Mutthuram</span>, a 2nd-year CSE student at <span className="font-bold gradient-text hover:scale-110 inline-block transition-transform cursor-pointer">SRM Kattankulathur</span>. I build web applications and explore cloud, AI, and Full Stack Development. Passionate about creating interactive and innovative tech solutions.
                </p>
              </motion.div>

              {/* Languages Section */}
              <motion.div
                className="glass-effect rounded-2xl p-8 hover:glow-effect transition-all duration-300"
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center">
                    <Languages className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold gradient-text">Languages</h3>
                </div>
                <div className="space-y-5">
                  {languages.map((lang, idx) => (
                    <motion.div
                      key={lang.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-foreground/90 font-medium">{lang.name}</span>
                        <span className="text-sm px-3 py-1 rounded-full bg-primary/20 text-primary font-medium">
                          {lang.level}
                        </span>
                      </div>
                      <div className="h-2 bg-muted/30 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 rounded-full"
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${lang.percentage}%` } : {}}
                          transition={{ duration: 1.5, delay: 0.7 + idx * 0.1, ease: "easeOut" }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column: Highlights */}
            <div className="space-y-6">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  className="glass-effect rounded-2xl p-6 hover:glow-effect transition-all duration-300"
                  initial={{ opacity: 0, x: 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.2, ease: "easeOut" }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                      <highlight.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 gradient-text">{highlight.title}</h3>
                      <p className="text-foreground/70 leading-relaxed text-sm">{highlight.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="glass-effect rounded-2xl p-6 text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;