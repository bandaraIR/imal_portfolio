import { useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero.jsx";
import About from "./pages/About.jsx";
import Skills from "./pages/Skills.jsx";
import Projects from "./pages/Projects.jsx";
import ProjectDetail from "./pages/Projectdetail.jsx";
import Contact from "./pages/contact.jsx";
import ScrollGlow from "./pages/scrollglow.jsx";

function MainLayout() {
  const pageRef = useRef(null);

  return (
    <div
      ref={pageRef}
      style={{
        position: "relative",
        background: "#050505",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <Navbar />
      <ScrollGlow containerRef={pageRef} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/projects/:id" element={
          <div style={{ background: "#050505", minHeight: "100vh" }}>
            <ProjectDetail />
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}