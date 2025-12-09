import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { to: "home", label: "Home" },
    { to: "about", label: "About" },
    { to: "skills", label: "Skills" },
    { to: "projects", label: "Work" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-dark/95 backdrop-blur-md shadow-lg border-b border-white/10"
          : "bg-transparent"
        }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo with Border */}
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
          <motion.span 
  whileHover={{ 
    boxShadow: "0 0 20px rgba(var(--accent-rgb), 0.5)" 
  }}
  className="text-xl font-display font-bold tracking-tight px-4 py-2 border-2 border-accent rounded-full inline-block hover:bg-accent/10 transition-all duration-300"
>
  YP
</motion.span>
          </ScrollLink>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.to}>
                <ScrollLink
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  spy={true}
                  activeClass="text-accent"
                  className="text-sm text-white/60 hover:text-white transition-colors cursor-pointer"
                >
                  {item.label}
                </ScrollLink>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
            className="hidden md:block"
          >
            <button className="px-5 py-2.5 bg-accent text-dark text-sm font-medium rounded-full hover:bg-accent/90 transition-colors">
              Let's Talk
            </button>
          </ScrollLink>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white/60 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-dark/95 backdrop-blur-md border-t border-white/10"
          >
            <div className="px-6 py-4 space-y-1">
              {navItems.map((item) => (
                <ScrollLink
                  key={item.to}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => setIsOpen(false)}
                  spy={true}
                  activeClass="text-accent"
                  className="block text-white/60 hover:text-white transition-colors cursor-pointer py-3"
                >
                  {item.label}
                </ScrollLink>
              ))}
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => setIsOpen(false)}
                className="block pt-4"
              >
                <button className="w-full px-5 py-2.5 bg-accent text-dark text-sm font-medium rounded-full hover:bg-accent/90 transition-colors">
                  Let's Talk
                </button>
              </ScrollLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;