import { motion } from "framer-motion";
import { Github, Linkedin, Code, Heart } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/Mutthuram03", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/mutthuram-s-r-690abb345/", label: "LinkedIn" },
    { icon: Code, href: "https://leetcode.com/u/Mutthuram_03/", label: "LeetCode" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 overflow-hidden border-t border-border/50">
      {/* Background gradient removed */}
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center gap-8">
          <motion.div
            className="flex items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-effect p-3 rounded-lg hover:glow-effect transition-all duration-300"
                whileHover={{ scale: 1.1, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <link.icon className="w-5 h-5 text-foreground" />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            className="text-center space-y-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-muted-foreground text-sm font-medium">
              Made by <span className="text-primary font-bold">Mutthuram S R</span>
            </p>
            <p className="text-muted-foreground text-xs">
              © {currentYear} All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;