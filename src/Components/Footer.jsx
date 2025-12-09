// src/Components/Footer.jsx
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { Github, Linkedin, Twitter, ArrowUp, Heart } from "lucide-react";

const Footer = () => {
  const socials = [
    { icon: Github, href: "https://github.com/Yash-oza-24" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/yash-prajapati-510957380/" },
    { icon: Twitter, href: "https://twitter.com/ytmp2407" },
  ];

  const navLinks = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <footer className="relative py-12 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          {/* Logo */}
         <motion.span 
  whileHover={{ 
    boxShadow: "0 0 20px rgba(var(--accent-rgb), 0.5)" 
  }}
  className="text-xl font-display font-bold tracking-tight px-4 py-2 border-2 border-accent rounded-full inline-block hover:bg-accent/10 transition-all duration-300"
>
  YP
</motion.span>

          {/* Nav Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <ScrollLink
                key={link}
                to={link.toLowerCase()}
                smooth={true}
                duration={500}
                offset={-80}
                className="text-white/40 hover:text-accent text-sm transition-colors cursor-pointer"
              >
                {link}
              </ScrollLink>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-2.5 bg-dark-100 rounded-lg border border-white/5 text-white/40 hover:text-accent hover:border-accent/30 transition-all"
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <p className="text-white/30 text-sm flex items-center gap-1">
            © {new Date().getFullYear()} Yash Prajapati. Made with
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart size={14} className="text-red-500 fill-red-500" />
            </motion.span>
          </p>

          {/* Back to top */}
          <ScrollLink to="home" smooth={true} duration={500}>
            <motion.button
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-accent text-dark rounded-xl hover:shadow-lg hover:shadow-accent/20 transition-all"
            >
              <ArrowUp size={18} />
            </motion.button>
          </ScrollLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;