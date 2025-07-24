/* eslint-disable react/prop-types */
// Navbar.jsx
import  { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="sticky top-0 bg-black z-50 flex justify-between items-center h-16 md:mx-2 mx-auto px-6 text-white">
      <h1 className="text-3xl font-bold text-[#00df9a]">
        {" "}
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          offset={-70}
          className=" cursor-pointer"
        >
          Yash Prajapati
        </ScrollLink>{" "}
      </h1>

      <ul className="hidden md:flex space-x-8">
        <NavItem to="home" text="Home" />
        <NavItem to="about" text="About" />
        <NavItem to="skills" text="Skills" />
        <NavItem to="projects" text="Projects" />
        <NavItem to="contact" text="Contact" />
      </ul>

      <div className="hidden md:flex items-center space-x-4">
        <ButtonWithIcon
          icon={<FaGithub />}
          text="GitHub"
          url="https://github.com/Yash-oza-24"
        />
      </div>

      <div className="md:hidden">
        <button onClick={handleNav} className="text-[#00df9a]">
          {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </button>
      </div>

      <div
        className={
          nav
            ? "fixed top-16 left-0 right-0 bottom-0 z-50 flex flex-col items-center bg-black text-white"
            : "hidden"
        }
      >
        <div className="w-full py-1 px-2 flex justify-end"></div>
        <ul className="flex flex-col items-center list-none space-y-2 max-w-xs mx-auto">
          <NavItemMobile to="home" text="Home" handleNav={handleNav} />
          <NavItemMobile to="about" text="About" handleNav={handleNav} />
          <NavItemMobile to="skills" text="Skills" handleNav={handleNav} />
          <NavItemMobile to="projects" text="Projects" handleNav={handleNav} />
          <NavItemMobile to="contact" text="Contact" handleNav={handleNav} />

          <ButtonWithIcon
            icon={<FaLinkedin />}
            text="LinkedIn"
            url="https://www.linkedin.com/in/yash-prajapati-109413258/"
            handleNav={handleNav}
          />
          <ButtonWithIcon
            icon={<FaGithub />}
            text="GitHub"
            url="https://github.com/Yash-oza-24"
            handleNav={handleNav}
          />
        </ul>
      </div>
    </nav>
  );
};

const NavItem = ({ to, text }) => (
  <li className="hover:text-[#00df9a] transition-colors duration-300">
    <ScrollLink
      to={to}
      smooth={true}
      duration={500}
      offset={-70}
      className="cursor-pointer"
      activeClass="text-[#00df9a]"
    >
      {text}
    </ScrollLink>
  </li>
);

const NavItemMobile = ({ to, text, handleNav }) => (
  <li className="p-4 hover:text-[#00df9a] cursor-pointer duration-300">
    <ScrollLink
      to={to}
      smooth={true}
      duration={500}
      offset={-70}
      className="cursor-pointer"
      onClick={handleNav}
    >
      {text}
    </ScrollLink>
  </li>
);

const ButtonWithIcon = ({ icon, text, url, handleNav }) => (
  <li className="p-4 hover:text-[#00df9a] cursor-pointer list-none duration-300">
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center"
      onClick={handleNav}
    >
      <span className="mr-2">{icon}</span>
      {text}
    </a>
  </li>
);

export default Navbar;
