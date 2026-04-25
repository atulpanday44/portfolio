import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ScrollProgress from "./components/ScrollProgress";

// Lazy load below-the-fold components
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Experience = lazy(() => import("./components/Experience"));
const ImpactExperience = lazy(() => import("./components/ImpactExperience"));
const SystemDesign = lazy(() => import("./components/SystemDesign"));
const AskAboutWork = lazy(() => import("./components/AskAboutWork"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (
    <div className="bg-gradient-to-b from-black via-zinc-900 to-black text-white antialiased">
      <ScrollProgress />
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 pt-24 md:px-10">
        <Hero />
        <About />
        <Suspense fallback={null}>
          <Skills />
          <ImpactExperience />
          <Projects />
          <Experience />
          <SystemDesign />
          <AskAboutWork />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
