import { useState, useEffect } from "react";
import "../styles/navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Close menu on scroll
  useEffect(() => {
    const handleScroll = () => setOpen(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when a link is clicked
  const handleLinkClick = () => setOpen(false);

  return (
    <header className="nav">
      <div className={`nav__container ${open ? "nav__container--open" : ""}`}>

        {/* Logo */}
        <a className="nav__logo" href="#home">IR</a>

        {/* Desktop Links */}
        <nav className="nav__links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Project</a>
          <a className="nav__contact" href="#contact">Contact Me</a>
        </nav>

        {/* Hamburger Button */}
        <button
          className={`nav__burger ${open ? "nav__burger--open" : ""}`}
          onClick={() => setOpen(prev => !prev)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`nav__mobile ${open ? "nav__mobile--open" : ""}`}>
        <a href="#about"    onClick={handleLinkClick}>About</a>
        <a href="#skills"   onClick={handleLinkClick}>Skills</a>
        <a href="#projects" onClick={handleLinkClick}>Project</a>
        <a href="#contact"  onClick={handleLinkClick} className="nav__contact">Contact Me</a>
      </div>
    </header>
  );
}