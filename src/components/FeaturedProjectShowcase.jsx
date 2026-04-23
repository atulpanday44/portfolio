import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import projects from "../data/projects";

function FeaturedProjectShowcase({ onOpenCaseStudy }) {
  const MotionSection = motion.section;
  const MotionDiv = motion.div;
  const MotionButton = motion.button;
  const MotionA = motion.a;
  
  const featured = projects.find((project) => project.featured);
  if (!featured) return null;

  const engineeringDecisions = [
    {
      title: "Stateless JWT Authentication",
      description: "Scalable token-based auth for distributed deployments",
    },
    {
      title: "Layered Architecture",
      description: "Controller-Service-Repository separation for maintainability",
    },
    {
      title: "Optimized DB Queries",
      description: "Strategic indexing and query optimization for performance",
    },
  ];

  return (
    <MotionSection
      initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ type: "spring", stiffness: 85, damping: 20 }}
      className="group relative mb-12 overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-white/8 to-white/5 p-8 shadow-2xl shadow-white/5 backdrop-blur-2xl md:p-12"
      whileHover={{ borderColor: "rgba(255,255,255,0.3)", boxShadow: "0 20px 60px rgba(255,255,255,0.08)" }}
    >
      {/* Glow effect on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(ellipse at center, rgba(255,255,255,0.05) 0%, transparent 70%)`
        }}
      />

      {/* Featured Badge */}
      <MotionDiv
        initial={{ opacity: 0, y: -12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-6 inline-flex items-center rounded-full border border-white/30 bg-white/10 px-4 py-1.5 backdrop-blur-lg"
      >
        <span className="inline-block h-2 w-2 rounded-full bg-white/80 mr-2 animate-pulse" />
        <span className="text-xs font-semibold uppercase tracking-widest text-white">Featured Project</span>
      </MotionDiv>

      {/* Title and Description */}
      <MotionDiv
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        <h3 className="text-4xl font-extrabold text-white md:text-5xl">{featured.title}</h3>
        <p className="mt-4 text-lg text-zinc-300 leading-relaxed max-w-3xl">
          {featured.description}
        </p>
      </MotionDiv>

      {/* Tech Stack */}
      <MotionDiv
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
        className="mt-6 flex flex-wrap gap-3"
      >
        {featured.tech.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-sm font-medium text-zinc-200 backdrop-blur-lg"
          >
            {tech}
          </span>
        ))}
      </MotionDiv>

      {/* Engineering Decisions */}
      <MotionDiv
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mt-10 grid gap-4 md:grid-cols-3"
      >
        <p className="col-span-full text-xs uppercase tracking-widest text-zinc-400 font-semibold">
          Key Engineering Decisions
        </p>
        {engineeringDecisions.map((decision, index) => (
          <MotionDiv
            key={decision.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 + index * 0.08 }}
            className="group/decision rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm hover:border-white/30 hover:bg-white/10 transition duration-300"
          >
            <h4 className="font-semibold text-white text-sm">{decision.title}</h4>
            <p className="mt-2 text-xs text-zinc-400">{decision.description}</p>
          </MotionDiv>
        ))}
      </MotionDiv>

      {/* Architecture Flow */}
      <MotionDiv
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.35 }}
        className="mt-10 rounded-2xl border border-white/10 bg-black/30 p-6 backdrop-blur-lg"
      >
        <p className="mb-4 text-xs uppercase tracking-widest text-zinc-400 font-semibold">
          System Architecture
        </p>
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs md:text-sm">
          {[
            { name: "Client", desc: "Web UI" },
            { name: "API", desc: "JWT Endpoint" },
            { name: "Service", desc: "Business Logic" },
            { name: "Database", desc: "PostgreSQL" },
            { name: "Cache", desc: "Redis (optional)" },
          ].map((component, index) => (
            <MotionDiv
              key={component.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.06 }}
              className="flex flex-col items-center gap-2"
            >
              <div className="rounded-lg border border-white/20 bg-white/8 px-4 py-2 text-center backdrop-blur-sm">
                <div className="font-semibold text-white">{component.name}</div>
                <div className="text-[10px] text-zinc-400">{component.desc}</div>
              </div>
              {index < 4 && (
                <span className="text-white/40 text-lg md:text-2xl hidden md:inline">→</span>
              )}
              {index < 4 && (
                <span className="text-white/40 text-xs md:hidden">↓</span>
              )}
            </MotionDiv>
          ))}
        </div>
      </MotionDiv>

      {/* Action Buttons */}
      <MotionDiv
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.45 }}
        className="mt-10 flex flex-wrap gap-4"
      >
        {featured.github && (
          <MotionA
            href={featured.github}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 260, damping: 17 }}
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition duration-300 hover:shadow-lg hover:shadow-white/20"
          >
            <FaGithub />
            View Code on GitHub
          </MotionA>
        )}
        <MotionButton
          type="button"
          onClick={() => onOpenCaseStudy(featured)}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 260, damping: 17 }}
          className="rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-lg transition duration-300 hover:border-white hover:bg-white/20 hover:shadow-lg hover:shadow-white/10"
        >
          Explore Case Study
        </MotionButton>
      </MotionDiv>
    </MotionSection>
  );
}

export default FeaturedProjectShowcase;
