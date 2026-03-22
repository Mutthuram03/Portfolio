import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Medal, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedBackground from "./AnimatedBackground";

import nptelLogo from "@/assets/NPTEL.png";
import ibmLogo from "@/assets/IBM.png";
import microsoftLogo from "@/assets/Microsoft.png";
import leetcodeLogo from "@/assets/Leetcode.png";
import awsLogo from "@/assets/aws.png";
import srmLogo from "@/assets/SRM_Institute_of_Science_and_Technology_Logo.svg";
import srmOnlineLogo from "@/assets/SRM Online.png";

const Certificates = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const certificates = [
    {
      title: "NPTEL – Fundamentals of Object-Oriented Programming",
      institution: "IIT Roorkee",
      duration: "Jan–Apr 2025 | 12-week course",
      status: "Elite – Top 1% Performer",
      image: nptelLogo,
      link: "https://drive.google.com/file/d/1HyFYi7cvFZ51fysKBHLlZq6OERMtgMzY/view?usp=sharing",
      gradient: "from-yellow-500 to-amber-600",
    },
    {
      title: "IBM Full Stack Software Developer",
      institution: "Coursera",
      duration: "In Progress",
      description: "Focus Areas: Cloud Computing, Frontend & Backend Development, DevOps, and API Integration",
      image: ibmLogo,
      link: "https://drive.google.com/drive/folders/1z2qYuw6sc46Sl_uP1KdcxVOb7iO6Z9h1?usp=sharing",
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      title: "Microsoft Azure AI Essentials",
      institution: "Microsoft & LinkedIn Learning",
      duration: "Aug 2025",
      description: "Skills: Machine Learning, Azure AI Studio, Generative AI",
      image: microsoftLogo,
      link: "https://drive.google.com/file/d/1kYtWLF6ONxffhn0RI6a4YKSL3uhwEY1e/view?usp=sharing",
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      title: "LeetCode Badges",
      institution: "LeetCode",
      description: "I actively practice coding on LeetCode to improve my problem-solving and algorithmic thinking skills. Through consistent practice, I've earned several achievement badges for commitment, performance, and consistency in challenges.",
      image: leetcodeLogo,
      link: "https://drive.google.com/drive/folders/1Pn0ByDjAGsgVLBoAZjgmzFvtmZIZXe1M?usp=sharing",
      gradient: "from-orange-500 to-red-600",
    },
    {
      title: "AWS Cloud Architecting",
      institution: "AWS Academy",
      duration: "Dec 2025",
      description: "Completed a 60-hour advanced course on cloud architecture, focusing on designing scalable, secure, and cost-efficient systems using AWS services.",
      image: awsLogo,
      link: "https://drive.google.com/file/d/11eVqOtwy2lmySuQpNiopmb-X3wR7rfG1/view?usp=sharing",
      gradient: "from-orange-500 to-yellow-500",
    },
    {
      title: "AWS Cloud Foundations",
      institution: "AWS Academy",
      duration: "Dec 2025",
      description: "Learned core cloud concepts including compute, storage, networking, and security fundamentals in AWS.",
      image: awsLogo,
      link: "https://drive.google.com/file/d/16BxgAKZvP1zWN3mRcxsIFnoOTFnaDlr3/view?usp=sharing",
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      title: "Seismo Hack 1.0 – Top 50 Teams",
      institution: "SRM IST (ISET Student Chapter)",
      duration: "Aug 2025",
      description: "Secured a position among the Top 10 teams in Seismo Hack 1.0 by developing an innovative disaster-related solution under competitive conditions.",
      image: srmLogo,
      link: "https://drive.google.com/file/d/1rc4e8FkRqpF7C2pnj2ZoLy1qpe9dksYr/view?usp=sharing",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      title: "Artificial Intelligence & Machine Learning",
      institution: "SRM Online Education",
      duration: "Jan 2026",
      description: "Completed a 3-month certification covering machine learning fundamentals, algorithms, and real-world AI applications.",
      image: srmOnlineLogo,
      link: "https://drive.google.com/file/d/1j25CUCpT2FafDkmKQP4dawhYVYJnRDg3/view?usp=sharing",
      gradient: "from-blue-500 to-cyan-400",
    },
  ];

  return (
    <section id="certificates" className="relative min-h-screen py-20 overflow-hidden">
      <AnimatedBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Certificates & Achievements
          </h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-8 rounded-full"
            initial={{ width: 0 }}
            animate={inView ? { width: 80 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-xl"
                style={{ background: `linear-gradient(135deg, var(--${cert.gradient.split('-')[1]}), var(--${cert.gradient.split('-')[3]}))` }}
              />
              
              <div className="relative bg-card/50 backdrop-blur-sm border border-primary/20 rounded-xl p-6 h-full flex flex-col hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative flex items-center justify-center w-16 h-16 flex-shrink-0">
                    <img src={cert.image} alt={cert.title} className="w-full h-full object-contain" />
                    {cert.isGoldMedal && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg transform translate-x-1 translate-y-1 z-10">
                        <Medal className="w-3 h-3 text-white" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-sm font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {cert.institution}
                    </p>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  {cert.duration && (
                    <p className="text-sm text-foreground/80 italic">
                      {cert.duration.includes("In Progress") ? (
                        <>
                          {cert.duration.split("In Progress")[0]}
                          <span className="font-bold bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
                            In Progress
                          </span>
                        </>
                      ) : (
                        cert.duration
                      )}
                    </p>
                  )}
                  
                  {cert.score && (
                    <p className="text-sm font-semibold text-foreground">
                      Score: {cert.score}
                    </p>
                  )}
                  
                  {cert.status && (
                    <p className="text-sm font-bold bg-gradient-to-r from-yellow-500 to-amber-600 bg-clip-text text-transparent">
                      {cert.status}
                    </p>
                  )}
                  
                  {cert.description && (
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {cert.description}
                    </p>
                  )}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full mt-auto border-primary/50 hover:border-primary hover:bg-primary/10 group/btn"
                  asChild
                >
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:translate-x-1 transition-transform" />
                    View Certificate
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;