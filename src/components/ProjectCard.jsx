import { memo } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const ProjectCard = memo(function ProjectCard({ project, onOpenCaseStudy }) {
  const MotionArticle = motion.article;
  const MotionButton = motion.button;

  return (
    <MotionArticle
      variants={{
        hidden: { opacity: 0, y: 22, filter: "blur(6px)" },
        show: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { type: "spring", stiffness: 90, damping: 17 },
        },
      }}
      whileHover={{ rotateX: 2, rotateY: -2, y: -8, scale: 1.01 }}
      whileTap={{ scale: 0.995 }}
      transition={{ type: "spring", stiffness: 230, damping: 18 }}
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br from-white/8 to-white/5 p-6 shadow-lg shadow-white/5 backdrop-blur-lg transition duration-300 hover:border-white/25 hover:shadow-xl hover:shadow-white/10 ${
        project.featured ? "md:col-span-2 md:p-8" : ""
      }`}
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/0 via-white/0 to-white/0 opacity-0 transition duration-300 group-hover:opacity-100 group-hover:from-white/10 group-hover:to-zinc-400/10" />
      
      {project.featured ? (
        <motion.span
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-lg"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-white/80 animate-pulse" />
          Featured Project
        </motion.span>
      ) : null}
      
      <h3 className="text-xl font-semibold text-white">{project.title}</h3>
      <p className="mt-3 text-zinc-300 flex-1">{project.description}</p>
      
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((techItem) => (
          <span
            key={`${project.title}-${techItem}`}
            className="rounded-full bg-white/10 border border-white/20 px-3 py-1 text-sm text-zinc-300 backdrop-blur-lg"
          >
            {techItem}
          </span>
        ))}
      </div>
      
      <div className="mt-6 flex flex-wrap gap-3">
        {project.github ? (
          <motion.a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition duration-300 hover:scale-105 hover:bg-zinc-200 hover:shadow-lg hover:shadow-white/10"
          >
            <FaGithub />
            GitHub
          </motion.a>
        ) : (
          <span className="rounded-full border border-white/20 px-4 py-2 text-sm text-zinc-400">
            GitHub Coming Soon
          </span>
        )}
        
        <MotionButton
          type="button"
          onClick={() => onOpenCaseStudy(project)}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition duration-300 hover:scale-105 hover:border-white hover:bg-white/20 hover:shadow-lg hover:shadow-white/10 backdrop-blur-lg"
        >
          Case Study
        </MotionButton>
        
        {project.demo ? (
          <motion.a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition duration-300 hover:scale-105 hover:border-white hover:shadow-lg hover:shadow-white/10 backdrop-blur-lg"
          >
            Live Demo
          </motion.a>
        ) : null}
      </div>
    </MotionArticle>
  );
});

export default ProjectCard;
