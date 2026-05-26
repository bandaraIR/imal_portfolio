import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import "../styles/contact.css";

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setStatus("success");
        formRef.current.reset();
        setTimeout(() => setStatus("idle"), 4000);
      })
      .catch(() => {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      });
  };

  return (
    <footer className="contact" id="contact">
      <div className="contact__wrap">

        {/* Top Section */}
        <motion.div
          className="contact__top"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="contact__eyebrow">Contact</p>
          <h2 className="contact__title">Let's work together.</h2>
          <p className="contact__sub">
            Have a project in mind? Drop me a message and I'll get back to you.
          </p>
        </motion.div>

        {/* Grid Section */}
        <motion.div
          className="contact__grid"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          {/* Form */}
          <form className="contact__form" ref={formRef} onSubmit={handleSubmit}>
            <div className="contact__row">
              <div className="contact__field">
                <label>Name</label>
                <input
                  name="from_name"
                  type="text"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="contact__field">
                <label>Email</label>
                <input
                  name="from_email"
                  type="email"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            <div className="contact__field">
              <label>Message</label>
              <textarea
                name="message"
                rows={5}
                placeholder="Tell me about your project..."
                required
              />
            </div>

            <button
              className="contact__btn"
              type="submit"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending..." : "Send Message"} <span>→</span>
            </button>

            {status === "success" && (
              <p style={{ color: "#4ade80", marginTop: "12px", fontSize: "14px" }}>
                ✓ Message sent! I'll get back to you soon.
              </p>
            )}

            {status === "error" && (
              <p style={{ color: "#f87171", marginTop: "12px", fontSize: "14px" }}>
                ✗ Something went wrong. Please try again.
              </p>
            )}
          </form>

          {/* Contact Info */}
          <div className="contact__info">
            <p className="contact__info-label">Find me on</p>

            {/* Email */}
            <a
              className="contact__link"
              href="mailto:imalbandara624@gmail.com"
            >
              <span className="contact__link-icon">✉</span>
              <div>
                <p className="contact__link-title">Email</p>
                <p className="contact__link-val">imalbandara624@gmail.com</p>
              </div>
            </a>

            {/* GitHub */}
            <a
              className="contact__link"
              href="https://github.com/bandaraIR"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact__link-icon">⌥</span>
              <div>
                <p className="contact__link-title">GitHub</p>
                <p className="contact__link-val">github.com/bandaraIR</p>
              </div>
            </a>

            {/* Instagram */}
            <a
              className="contact__link"
              href="https://www.instagram.com/ravi_imal_?igsh=dGM1aXc0dmNxZXg3&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact__link-icon">◈</span>
              <div>
                <p className="contact__link-title">Instagram</p>
                <p className="contact__link-val">@imalravindu</p>
              </div>
            </a>
          </div>
        </motion.div>

        {/* Bottom */}
        <div className="contact__bottom">
          <p>© {new Date().getFullYear()} Imal Ravindu. All rights reserved.</p>
          <p>Built with React & Framer Motion</p>
        </div>

      </div>
    </footer>
  );
}