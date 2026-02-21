import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../styles/projects.css";

export const projects = [
  {
    id: "auri",
    title: "Auri Clothing Brand",
    category: "React Website",
    year: "2024",
    desc: "A premium fashion e-commerce website with smooth animations, product filtering, and a modern dark aesthetic.",
    tags: ["React", "CSS", "Framer Motion"],
    color: "#ff7a00",
  },
  {
    id: "portfolio",
    title: "Portfolio",
    category: "React Website",
    year: "2024",
    desc: "Personal developer portfolio showcasing projects, skills and contact — built with React and Framer Motion.",
    tags: ["React", "Framer Motion", "CSS"],
    color: "#ff7a00",
  },
  {
    id: "vehicle-fine",
    title: "Vehicle Fine Mobile App",
    category: "Flutter App",
    year: "2024",
    desc: "A dual-dashboard Flutter mobile app for users and police officers to manage and track traffic violations with Firebase backend.",
    tags: ["Flutter", "Dart", "Firebase"],
    color: "#ff7a00",
  },
  {
    id: "autocare",
    title: "AutoCare Car Rental",
    category: "React Website",
    year: "2024",
    desc: "Full-featured car rental platform with booking system, fleet management, and real-time availability.",
    tags: ["React", "MongoDB", "CSS"],
    color: "#ff7a00",
  },
  {
    id: "spacestyler",
    title: "SpaceStyler Room Design",
    category: "Web App",
    year: "2024",
    desc: "An interactive 2D/3D room design tool that lets users furnish and visualize spaces before buying.",
    tags: ["React", "Three.js", "CSS"],
    color: "#ff7a00",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Projects() {
  const navigate = useNavigate();

  return (
    <section className="projects" id="projects">
      <div className="projects__wrap">

        {/* Header */}
        <motion.div
          className="projects__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="projects__eyebrow">Work</p>
          <h2 className="projects__title">Selected Projects.</h2>
          <p className="projects__sub">
            Real products built with clean code and sharp UI.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="projects__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              className={`project-card ${i === 0 ? "project-card--featured" : ""}`}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              onClick={() => navigate(`/projects/${project.id}`)}
            >
              {/* Image placeholder */}
              <div className="project-card__img">
                <span className="project-card__num">0{i + 1}</span>
              </div>

              <div className="project-card__body">
                <div className="project-card__meta">
                  <span className="project-card__cat">{project.category}</span>
                  <span className="project-card__year">{project.year}</span>
                </div>
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__desc">{project.desc}</p>
                <div className="project-card__tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <div className="project-card__cta">
                  View Project <span>→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}