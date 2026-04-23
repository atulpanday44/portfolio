import SectionWrapper from "./SectionWrapper";

function AboutPortfolio() {
  return (
    <SectionWrapper id="about-portfolio" title="About This Portfolio">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-lg md:p-8">
        <p className="text-zinc-300">
          This portfolio is built with React, Vite, Tailwind CSS, and Framer Motion using a
          modular component architecture designed for maintainability and future extension.
        </p>
        <p className="mt-4 text-zinc-300">
          The UI system emphasizes performance-first interactions, reusable section wrappers, and
          data-driven rendering patterns to keep features scalable as the product grows.
        </p>
        <p className="mt-4 text-zinc-300">
          Every section is crafted to communicate engineering depth: from architecture-driven case
          studies to system design flows and measurable delivery impact.
        </p>
      </div>
    </SectionWrapper>
  );
}

export default AboutPortfolio;
