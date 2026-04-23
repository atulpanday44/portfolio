import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import ImpactExperience from "./components/ImpactExperience";
import SystemDesign from "./components/SystemDesign";
import AskAboutWork from "./components/AskAboutWork";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import AboutPortfolio from "./components/AboutPortfolio";

function App() {
  return (
    <div className="bg-gradient-to-b from-black via-zinc-900 to-black text-white antialiased">
      <ScrollProgress />
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 pt-24 md:px-10">
        <Hero />
        <About />
        <Skills />
        <ImpactExperience />
        <Projects />
        <Experience />
        <SystemDesign />
        <AskAboutWork />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
