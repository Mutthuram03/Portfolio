import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, Briefcase, Award, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedBackground from "./AnimatedBackground";

const Resume = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "B.Tech in CSE Core at SRM University Kattankulathur",
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      icon: Briefcase,
      title: "Experience",
      description: "Building projects in Fullstack Development, AI & Cloud",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      icon: Award,
      title: "Skills",
      description: "React, Python, Java, TensorFlow, MongoDB, MySQL & more",
      gradient: "from-orange-500 to-red-600",
    },
  ];

  return (
    <section id="resume" className="relative py-20 lg:py-32 overflow-hidden">
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
              Resume
            </motion.h2>
            <motion.div
              className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto"
              initial={{ width: 0 }}
              animate={inView ? { width: 80 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-6xl mx-auto">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                className="glass-effect rounded-2xl p-8 hover:glow-effect transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
              >
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${highlight.gradient} flex items-center justify-center mb-6 mx-auto`}
                >
                  <highlight.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-center gradient-text">
                  {highlight.title}
                </h3>
                <p className="text-foreground/70 text-center leading-relaxed">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button
              size="lg"
              className="font-semibold px-8 py-6 text-lg glow-effect"
              variant="default"
              asChild
            >
              <a
                href="https://drive.google.com/file/d/1qDb1b6-sShwdNXWXFhKi22J1JIujW1FD/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;