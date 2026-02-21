import { motion } from "framer-motion";
import "../styles/contact.css";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name  = form.name.value;
    const email = form.email.value;
    const msg   = form.message.value;
    // Wire up to EmailJS / Formspree / your backend here
    console.log({ name, email, msg });
    form.reset();
    alert("Message sent! I'll get back to you soon.");
  };

  return (
    <footer className="contact" id="contact">
      <div className="contact__wrap">

        {/* Top: CTA heading */}
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

        {/* Middle: form + links side by side */}
        <motion.div
          className="contact__grid"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          {/* Form */}
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__row">
              <div className="contact__field">
                <label>Name</label>
                <input name="name" type="text" placeholder="Your name" required />
              </div>
              <div className="contact__field">
                <label>Email</label>
                <input name="email" type="email" placeholder="your@email.com" required />
              </div>
            </div>
            <div className="contact__field">
              <label>Message</label>
              <textarea name="message" rows={5} placeholder="Tell me about your project..." required />
            </div>
            <button className="contact__btn" type="submit">
              Send Message <span>→</span>
            </button>
          </form>

          {/* Links */}
          <div className="contact__info">
            <p className="contact__info-label">Find me on</p>

            <a
              className="contact__link"
              href="mailto:imalravindu@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact__link-icon">✉</span>
              <div>
                <p className="contact__link-title">Email</p>
                <p className="contact__link-val">imalbandara624@gmail.com</p>
              </div>
            </a>

            <a
              className="contact__link"
              href="https://github.com/bandaraIR"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact__link-icon">⌥</span>
              <div>
                <p className="contact__link-title">GitHub</p>
                <p className="contact__link-val">github.com/imalravindu</p>
              </div>
            </a>

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

        {/* Bottom bar */}
        <div className="contact__bottom">
          <p>© {new Date().getFullYear()} Imal Ravindu. All rights reserved.</p>
          <p>Built with React & Framer Motion</p>
        </div>

      </div>
    </footer>
  );
}