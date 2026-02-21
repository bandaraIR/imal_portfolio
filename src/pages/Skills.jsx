import { motion } from "framer-motion";
import "../styles/skills.css";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 90 },
      { name: "JavaScript", level: 88 },
      { name: "HTML & CSS", level: 95 },
      { name: "Framer Motion", level: 80 },
    ],
  },
  {
    category: "Mobile",
    items: [
      { name: "Flutter", level: 85 },
      { name: "Dart", level: 82 },
    ],
  },
  {
    category: "Backend & DB",
    items: [
      { name: "Firebase", level: 90 },
      { name: "Firestore", level: 80 },
      { name: "MongoDb", level:85}
    ],
  },
  {
    category: "AI & ML",
    items: [
      { name: "Python", level: 78 },
      { name: "TensorFlow", level: 70 },
      { name: "OpenCV", level: 72 },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills__wrap">

        {/* Header */}
        <motion.div
          className="skills__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="skills__eyebrow">Expertise</p>
          <h2 className="skills__title">What I work with.</h2>
          <p className="skills__sub">
            A focused stack built for real products — fast, modern, and production-ready.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="skills__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skills.map((group) => (
            <motion.div
              key={group.category}
              className="skills__card"
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <p className="skills__card-label">{group.category}</p>

              <div className="skills__bars">
                {group.items.map((skill, i) => (
                  <div className="bar-row" key={skill.name}>
                    <div className="bar-meta">
                      <span className="bar-name">{skill.name}</span>
                      <span className="bar-pct">{skill.level}%</span>
                    </div>
                    <div className="bar-track">
                      <motion.div
                        className="bar-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: "easeOut", delay: i * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}