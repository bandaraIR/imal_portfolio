import { useEffect } from "react";
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
    progress: 100,
    github: "https://github.com/bandaraIR/Auri",
    overview: "Auri is a premium clothing brand website designed with a dark, editorial aesthetic. It features smooth page transitions, a product catalogue with filtering, and a fully responsive layout.",
    features: ["Product catalogue with category filtering", "Smooth Framer Motion page transitions", "Dark editorial design system", "Mobile-first responsive layout", "Animated hero section"],
    challenges: "Building a fashion-forward UI that felt luxury without being heavy. The key was restraint — letting whitespace and typography do the work.",
  },
  portfolio: {
    progress: 100,
    github: "https://github.com/bandaraIR/imal_portfolio",
    overview: "A personal portfolio built to showcase development skills with scroll-driven animations, a moving orange glow system, and a clean dark aesthetic.",
    features: ["Scroll-driven orange glow animation", "Framer Motion page transitions", "Skills progress bars", "Projects with individual detail pages", "Fully responsive"],
    challenges: "Creating a shared glow that travels across sections using a single fixed element — keeping it performant with willChange and blur.",
  },
  "vehicle-fine": {
    progress: 100,
    github: "https://github.com/yourusername/vehicle-fine",
    overview: "A Flutter mobile application with dual dashboards for both regular users and police officers to manage, issue, and track vehicle traffic violations.",
    features: ["Dual user/police officer dashboards", "Firebase Firestore real-time database", "Violation issuance and payment tracking", "Authentication with Firebase Auth", "AI-assisted violation detection"],
    challenges: "Designing two completely different UX flows within a single app while keeping the codebase clean and the Firebase queries efficient.",
  },
  autocare: {
    progress: 100,
    github: "https://github.com/bandaraIR/AutoCareRental",
    overview: "AutoCare is a full-featured car rental web platform with real-time vehicle availability, booking management, and an admin dashboard.",
    features: ["Real-time car availability system", "Online booking and reservation", "Firebase backend integration", "Admin fleet management dashboard", "Responsive across all devices"],
    challenges: "Handling real-time state for bookings — making sure two users couldn't book the same car at the same time using Firestore transactions.",
  },
  spacestyler: {
    progress: 50,
    github: "https://github.com/yourusername/spacestyler",
    overview: "SpaceStyler is an interactive room design tool that lets users place furniture in 2D and preview in a 3D environment before making purchasing decisions.",
    features: ["2D drag-and-drop room layout", "3D room preview with Three.js", "Furniture catalogue with categories", "Save and export room designs", "Mobile touch support"],
    challenges: "Syncing the 2D editor state with the 3D Three.js scene in real time without performance drops — solved with a shared state manager and debounced renders.",
  },
};

// ── Progress Circle Component ────────────────────────────────
function ProgressCircle({ progress }) {
  const isComplete = progress === 100;
  const label = isComplete ? "Completed" : "In Progress";
  const color = isComplete ? "#4ade80" : "#ff7a00";

  const cx = 22, cy = 22, r = 14;

  const quarterPath = (startDeg, endDeg) => {
    const toRad = d => (d - 90) * Math.PI / 180;
    const x1 = cx + r * Math.cos(toRad(startDeg));
    const y1 = cy + r * Math.sin(toRad(startDeg));
    const x2 = cx + r * Math.cos(toRad(endDeg));
    const y2 = cy + r * Math.sin(toRad(endDeg));
    return `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2} Z`;
  };

  const quarters = [0, 25, 50, 75];

  return (
    <div className="progress-circle" title={`${label} · ${progress}%`}>
      <svg width="44" height="44" viewBox="0 0 44 44">
        {/* Track ring */}
        <circle cx={cx} cy={cy} r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />

        {/* Quarter slices */}
        {quarters.map((start, i) => {
          const filled = progress >= start + 25;
          const partial = !filled && progress > start;
          return (
            <path
              key={i}
              d={quarterPath(start, start + 25)}
              fill={filled || partial ? color : "rgba(255,255,255,0.07)"}
              stroke="rgba(0,0,0,0.5)"
              strokeWidth="1.5"
              opacity={partial ? 0.55 : 1}
            />
          );
        })}

        {/* Center dot */}
        <circle cx={cx} cy={cy} r="5.5" fill="#0d0d0d" />
        <circle cx={cx} cy={cy} r="2" fill={color} />
      </svg>

      <div className="progress-circle__info">
        <span className="progress-circle__label" style={{ color }}>{label}</span>
        <span className="progress-circle__pct" style={{ color: `${color}99` }}>{progress}%</span>
      </div>
    </div>
  );
}
// ────────────────────────────────────────────────────────────

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  useEffect(() => {
    const title = document.querySelector(".detail__title");
    if (title) {
      const top = title.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: "instant" });
    }
  }, [id]);

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

          {/* ── Progress Circle ── */}
          <ProgressCircle progress={detail.progress} />

          <p className="detail__desc">{project.desc}</p>
          <div className="detail__tags">
            {project.tags.map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>

          {/* GitHub Link */}
          {detail.github && (
            <a
              href={detail.github}
              target="_blank"
              rel="noopener noreferrer"
              className="detail__github"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              View on GitHub
            </a>
          )}
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