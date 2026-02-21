import { motion, useScroll, useTransform } from "framer-motion";

/**
 * ScrollGlow — 5 section transitions
 *
 * Hero     (0.00) : center-right
 * About    (0.25) : top-left
 * Skills   (0.50) : right side
 * Projects (0.72) : bottom-left
 * Contact  (0.90) : bottom-right
 */
export default function ScrollGlow({ containerRef }) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(
    scrollYProgress,
    [0,      0.22,    0.30,    0.48,    0.55,    0.72,    0.82,    0.95],
    ["50vw", "-35vw", "-35vw", "60vw",  "60vw",  "-40vw", "-40vw", "55vw"]
  );

  const y = useTransform(
    scrollYProgress,
    [0,      0.22,    0.30,    0.48,    0.55,    0.72,    0.82,    0.95],
    ["15vh", "-25vh", "-25vh", "5vh",   "5vh",   "40vh",  "40vh",  "30vh"]
  );

  const scale = useTransform(
    scrollYProgress,
    [0,   0.22, 0.50, 0.72, 0.95],
    [1.1, 0.85, 1.0,  0.9,  1.0]
  );

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        x,
        y,
        scale,
        width: "1300px",
        height: "1300px",
        borderRadius: "50%",
        background: `radial-gradient(circle at 40% 40%,
          rgba(255, 122, 0, 0.55),
          rgba(255, 122, 0, 0.25) 30%,
          rgba(255, 122, 0, 0.08) 55%,
          rgba(255, 122, 0, 0.00) 72%
        )`,
        filter: "blur(80px)",
        pointerEvents: "none",
        zIndex: 2,
        willChange: "transform",
      }}
    />
  );
}