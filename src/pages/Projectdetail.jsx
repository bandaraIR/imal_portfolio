import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "./Projects.jsx";
import "../styles/project-detail.css";

// ── Project images ──────────────────────────────────────────
// Add images here as you get them. Key = project id.
import auriImg      from "../assets/auri1.jpg";
import portfolioImg  from "../assets/ir-portfolio.jpeg";
import autocareImg   from "../assets/CarRental.jpeg";

const projectImages = {
  auri:          auriImg,
  portfolio:      portfolioImg,
  "vehicle-fine": null,
  autocare:       autocareImg,
  spacestyler:   null,
};
// ────────────────────────────────────────────────────────────

const projectDetails = {
  auri: {
    overview: "Auri is a premium clothing brand website designed with a dark, editorial aesthetic. It features smooth page transitions, a product catalogue with filtering, and a fully responsive layout.",
    features: ["Product catalogue with category filtering", "Smooth Framer Motion page transitions", "Dark editorial design system", "Mobile-first responsive layout", "Animated hero section"],
    challenges: "Building a fashion-forward UI that felt luxury without being heavy. The key was restraint — letting whitespace and typography do the work.",
  },
  portfolio: {
    overview: "A personal portfolio built to showcase development skills with scroll-driven animations, a moving orange glow system, and a clean dark aesthetic.",
    features: ["Scroll-driven orange glow animation", "Framer Motion page transitions", "Skills progress bars", "Projects with individual detail pages", "Fully responsive"],
    challenges: "Creating a shared glow that travels across sections using a single fixed element — keeping it performant with willChange and blur.",
  },
  "vehicle-fine": {
    overview: "A Flutter mobile application with dual dashboards for both regular users and police officers to manage, issue, and track vehicle traffic violations.",
    features: ["Dual user/police officer dashboards", "Firebase Firestore real-time database", "Violation issuance and payment tracking", "Authentication with Firebase Auth", "AI-assisted violation detection"],
    challenges: "Designing two completely different UX flows within a single app while keeping the codebase clean and the Firebase queries efficient.",
  },
  autocare: {
    overview: "AutoCare is a full-featured car rental web platform with real-time vehicle availability, booking management, and an admin dashboard.",
    features: ["Real-time car availability system", "Online booking and reservation", "Firebase backend integration", "Admin fleet management dashboard", "Responsive across all devices"],
    challenges: "Handling real-time state for bookings — making sure two users couldn't book the same car at the same time using Firestore transactions.",
  },
  spacestyler: {
    overview: "SpaceStyler is an interactive room design tool that lets users place furniture in 2D and preview in a 3D environment before making purchasing decisions.",
    features: ["2D drag-and-drop room layout", "3D room preview with Three.js", "Furniture catalogue with categories", "Save and export room designs", "Mobile touch support"],
    challenges: "Syncing the 2D editor state with the 3D Three.js scene in real time without performance drops — solved with a shared state manager and debounced renders.",
  },
};

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="detail-notfound">
        <p>Project not found.</p>
        <button onClick={() => navigate("/")}>← Go Back</button>
      </div>
    );
  }

  const detail = projectDetails[project.id];
  const image  = projectImages[project.id];

  return (
    <div className="detail">

      {/* Back button */}
      <motion.button
        className="detail__back"
        onClick={() => navigate("/")}
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        ← Back
      </motion.button>

      <div className="detail__wrap">

        {/* Hero block */}
        <motion.div
          className="detail__hero"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="detail__meta">
            <span className="detail__cat">{project.category}</span>
            <span className="detail__year">{project.year}</span>
          </div>
          <h1 className="detail__title">{project.title}</h1>
          <p className="detail__desc">{project.desc}</p>
          <div className="detail__tags">
            {project.tags.map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </motion.div>

        {/* ── Hero image ── */}
        <motion.div
          className="detail__img"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          {image ? (
            <img src={image} alt={project.title} className="detail__img-photo" />
          ) : (
            <span className="detail__img-label">{project.title}</span>
          )}
        </motion.div>

        {/* Content grid */}
        <motion.div
          className="detail__grid"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          <div className="detail__block">
            <p className="detail__block-label">Overview</p>
            <p className="detail__block-text">{detail.overview}</p>
          </div>

          <div className="detail__block">
            <p className="detail__block-label">Key Features</p>
            <ul className="detail__list">
              {detail.features.map((f, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                >
                  {f}
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="detail__block detail__block--full">
            <p className="detail__block-label">Challenges & Solutions</p>
            <p className="detail__block-text">{detail.challenges}</p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}