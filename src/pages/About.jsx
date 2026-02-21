import { motion } from "framer-motion";
import "../styles/about.css";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__wrap">
        <motion.div
          className="about__left"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="about__eyebrow">About</p>
          <h2 className="about__title">Crafting Modern Digital Experiences.</h2>
          <p className="about__desc">
            I’m Imal — a developer building high-performance React websites, Flutter mobile apps, and AI-powered systems. I focus on smooth animations, clean architecture, and production-ready solutions that feel premium and scalable.
          </p>

          <div className="about__stats">
            <div className="stat">
              <h3>2+</h3>
              <p>YEARS CODING</p>
            </div>
            <div className="stat">
              <h3>React</h3>
              <p>Web Apps</p>
            </div>
            <div className="stat">
              <h3>Flutter</h3>
              <p>Mobile Apps</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="about__right"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          <div className="about__card">
            <h3>What I do</h3>
            <ul>
              <li>Modern React applications with smooth UI</li>
              <li>Cross-platform Flutter mobile apps</li>
              <li>Scalable backend & Firebase integration</li>
              <li>real-world problem solving systems</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}