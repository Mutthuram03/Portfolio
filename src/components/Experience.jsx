import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedBackground from "./AnimatedBackground";
import tamilComputingLogo from "@/assets/tamil-computing-logo.png";
import acmSigaiLogo from "@/assets/acm-sigai-logo.png";
import iotAllianceLogo from "@/assets/iot-alliance-logo.png";
import acmSigappLogo2 from "@/assets/acm-sigapp-logo-2.png";
import sqacLogo from "@/assets/Sqac.jpg";
import dbugLabsLogo from "@/assets/Dbug labs.jpg";
import acmLogo from "@/assets/ACM.jpg";
import radianceLogo from "@/assets/Radiance.jpg";
import srmLogo from "@/assets/SRM_Institute_of_Science_and_Technology_Logo.svg";
import awsLogo from "@/assets/aws.png";

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const internships = [
    {
      role: "Intern",
      organization: "Machine Vision Lab - SRMIST",
      duration: "DEC 2025 - FEB 2026",
      description: "Worked on a project focused on multi-coin detection using OpenCV and deep learning techniques. Developed image processing pipelines for object detection, improving accuracy in identifying and classifying multiple coins within real-world images.",
      logo: srmLogo,
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      role: "AWS Cloud Intern",
      organization: "Eduskills - AWS Academy",
      duration: "OCT 2025 - DEC 2025",
      description: "Completed a 10-week virtual internship focused on cloud computing concepts including AWS services, cloud architecture, and deployment practices. Gained hands-on experience in building and managing cloud-based solutions.",
      logo: awsLogo,
      gradient: "from-purple-500 to-pink-600",
    },
  ];

  const clubs = [
    {
      role: "Technical Team Member",
      organization: "SQAC SRMIST",
      duration: "Sep 2025 - Present",
      description: "Technical Member at SQAC Club, where I contributed to technical projects, collaborated with peers, and strengthened my problem-solving and development skills in a team-driven environment .",
      logo: sqacLogo,
      gradient: "from-green-500 to-emerald-600",
    },
    {
      role: "Technical Member",
      organization: "Dbug Labs SRM",
      duration: "Aug 2025 - Present",
      description: "Active member of DBUG Labs,contributing to technical learning, participating in coding and development activities, and improving practical problem-solving skills.",
      logo: dbugLabsLogo,
      gradient: "from-orange-500 to-amber-600",
    },
    {
      role: "Technical Team Member",
      organization: "SRM ACM SIGAI",
      duration: "oct 2025 - Present",
      description: "Actively participating in the technical domain, working on AI and machine learning projects. Developing intelligent solutions and exploring cutting-edge artificial intelligence technologies.",
      logo: acmSigaiLogo,
      gradient: "from-blue-500 to-cyan-600",
    },
    
    {
      role: "Technical Member",
      organization: "Tamil Computing Club",
      duration: "Sep 2024 - Present",
      description: "Member at Tamil Computing Club, where I explored the integration of technology with the Tamil language and contributed to related technical activities.",
      logo: tamilComputingLogo,
      gradient: "from-yellow-500 to-orange-600",
    },
    {
      role: "Creatives",
      organization: "ACM SIGKDD",
      duration: "Aug 2025 - Present",
      description: "Creative Member at ACM SIGKDD, where I contributed to designing creatives, developing content, and supporting the promotion of technical initiatives and events.",
      logo: acmLogo,
      gradient: "from-pink-500 to-rose-600",
    },
    {
      role: "Technical Member",
      organization: "Radiance SRMIST",
      duration: "Oct 2025 - Present",
      description: "Member at Radiance (SRMIST), involved in organizing events, collaborating with team members, and contributing to various club initiatives.",
      logo: radianceLogo,
      gradient: "from-red-500 to-orange-600",
    },
    {
      role: "Management Member",
      organization: "IOT Alliance",
      duration: "Sep 2025- Present",
      description: "Managing IoT initiatives and coordinating team activities for smart technology projects. Organizing workshops and events focused on Internet of Things applications.",
      logo: iotAllianceLogo,
      gradient: "from-green-500 to-emerald-600",
    },
    {
      role: "Management Member",
      organization: "SRM ACM SIGAPP",
      duration: "Oct 2025 - Present",
      description: "Involved in management and organizational activities for ACM SIGAPP, contributing to event planning and execution.",
      logo: acmSigappLogo2,
      gradient: "from-blue-500 to-indigo-600",
    },
  ];

  return (
    <section id="experience" className="relative py-20 lg:py-32 overflow-hidden">
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
              Experience
            </motion.h2>
            <motion.div 
              className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-8"
              initial={{ width: 0 }}
              animate={inView ? { width: 80 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </div>

          <div className="max-w-6xl mx-auto space-y-12">
            {/* Internships Section */}
            <div>
              <h3 className="text-3xl font-bold mb-10 gradient-text text-center">Internships</h3>
              <div className="grid gap-8 md:grid-cols-2">
                {internships.map((job, index) => (
                  <motion.div
                    key={index}
                    className="glass-effect rounded-2xl p-8 hover:shadow-xl transition-all duration-300 relative overflow-hidden group border border-border/50 hover:border-primary/30 dark:border-primary flex flex-col justify-between h-full"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    
                    <div className="flex flex-col gap-1 relative z-10">
                      <div className="flex items-center gap-6">
                        <div className="w-32 h-32 flex-shrink-0">
                          <img 
                            src={job.logo} 
                            alt={`${job.organization} logo`} 
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div>
                           <h3 className="text-3xl font-bold text-foreground">{job.role}</h3>
                           <h4 className="text-lg font-bold text-muted-foreground mt-1">
                            {job.organization}
                          </h4>
                          <span className="text-sm font-medium text-muted-foreground block">
                            {job.duration}
                          </span>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <p className="text-muted-foreground text-base leading-relaxed">
                          {job.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Clubs & Organizations Section */}
            <div>
              <h3 className="text-3xl font-bold mb-10 gradient-text text-center pt-10">Clubs & Organizations</h3>
              <div className="grid gap-6 md:grid-cols-2">
                {clubs.map((club, index) => (
                  <motion.div
                    key={index}
                    className="glass-effect rounded-xl p-8 hover:shadow-lg transition-all duration-300 relative overflow-hidden group border border-border/40 hover:border-primary/20 dark:border-primary flex flex-col justify-between h-full"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    
                    <div className="flex gap-6 relative z-10 items-center mb-6">
                      <div className="flex-shrink-0 w-16 h-16">
                          <img 
                            src={club.logo} 
                            alt={`${club.organization} logo`} 
                            className="w-full h-full object-contain"
                          />
                      </div>
                      
                      <div>
                        <h4 className="text-2xl font-bold text-foreground line-clamp-1">{club.role}</h4>
                        <h5 className="text-base font-bold text-muted-foreground mt-1">
                          {club.organization}
                        </h5>
                        <span className="text-sm font-medium text-muted-foreground block">{club.duration}</span>
                      </div>
                    </div>
                    
                    <p className="text-base text-muted-foreground leading-relaxed line-clamp-3">
                      {club.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;