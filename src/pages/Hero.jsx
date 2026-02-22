import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "../styles/hero.css";
import imal3d from "../assets/imal-3d.png";

export default function Hero() {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const popY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const popScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const popRotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

  return (
    <section className="hero2" ref={heroRef} id="home">
      <div className="hero2__wrap">

        {/* LEFT */}
        <motion.div
          className="hero2__left"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="hero2__hello">
            Hey, I am <span>Imal Ravindu</span>
          </p>

          <h1 className="hero2__title">
            Web <br /> developer
          </h1>

          <p className="hero2__desc">
            I build modern React websites, Flutter mobile apps, and AI-powered systems
            with clean UI and smooth animations.
          </p>

          <div className="hero2__actions">
            <a
              className="btn btn--primary"
              href="https://www.linkedin.com/in/imal-ravindu-2ab2123a3/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View My LinkedIn
            </a>

            <a
              className="btn btn--secondary"
              href="/CV-imal ravindu (1).pdf"
              download
            >
              Download CV
            </a>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          className="hero2__right"
          style={{ y: popY, scale: popScale, rotate: popRotate }}
        >
          <div className="float float--html">REACT</div>
          <div className="float float--css">CSS</div>
          <div className="float float--js">JS</div>

          <img src={imal3d} alt="Imal 3D" className="hero2__img" />
        </motion.div>

      </div>
    </section>
  );
}