import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";

const navItems = [{
  label: "Home",
  href: "#home"
}, {
  label: "About",
  href: "#about"
}, {
  label: "Skills",
  href: "#skills"
}, {
  label: "Experience",
  href: "#experience"
}, {
  label: "Projects",
  href: "#projects"
}, {
  label: "Certificates",
  href: "#certificates"
}, {
  label: "Resume",
  href: "#resume"
}, {
  label: "Contact",
  href: "#contact"
}];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href) => {
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    }, 300);
  };

  return (
    <motion.nav 
      initial={{ y: -100 }} 
      animate={{ y: 0 }} 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass-effect shadow-lg" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <motion.a 
            href="#home" 
            onClick={e => {
              e.preventDefault();
              scrollToSection("#home");
            }} 
            className="text-xl sm:text-2xl font-bold gradient-text cursor-pointer" 
            whileHover={{ scale: 1.05 }}
          >
            MUTTHURAM PORTFOLIO
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item, index) => (
              <motion.a 
                key={item.label} 
                href={item.href} 
                onClick={e => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }} 
                className="px-3 lg:px-4 py-2 rounded-lg text-sm lg:text-base text-foreground/80 hover:text-foreground transition-colors relative group cursor-pointer" 
                initial={{ opacity: 0, y: -20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: index * 0.1 }}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary via-secondary to-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </motion.a>
            ))}
            
            {/* Theme Toggle */}
            {mounted && (
              <div className="flex items-center gap-2 ml-4 pl-4 border-l border-border/50">
                <Sun className="h-4 w-4 text-foreground/60" />
                <Switch
                  checked={theme === "dark"}
                  onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
                />
                <Moon className="h-4 w-4 text-foreground/60" />
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            {mounted && (
              <div className="flex items-center gap-2">
                <Sun className="h-4 w-4 text-foreground/60" />
                <Switch
                  checked={theme === "dark"}
                  onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
                />
                <Moon className="h-4 w-4 text-foreground/60" />
              </div>
            )}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="text-foreground p-2 focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }} 
            animate={{ opacity: 1, height: "auto" }} 
            exit={{ opacity: 0, height: 0 }} 
            className="md:hidden glass-effect border-t border-white/10"
          >
            <div className="px-4 pt-2 pb-4 space-y-1">
              {navItems.map((item) => (
                <a 
                  key={item.label} 
                  href={item.href} 
                  onClick={e => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }} 
                  className="block px-3 py-2 rounded-md text-base font-medium text-foreground/80 hover:text-foreground hover:bg-white/5 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;