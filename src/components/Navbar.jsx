import "../styles/navbar.css";

export default function Navbar() {
  return (
    <header className="nav">
      <div className="nav__container">
        {/* Logo */}
        <a className="nav__logo" href="#home">IR</a>

        {/* Links */}
        <nav className="nav__links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Project</a>
          <a className="nav__contact" href="#contact">Contact Me</a>
        </nav>
      </div>
    </header>
  );
}