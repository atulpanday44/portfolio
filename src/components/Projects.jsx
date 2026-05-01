import { useState, memo } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import ProjectCard from "./ProjectCard";
import ProjectCaseStudyModal from "./ProjectCaseStudyModal";
import FeaturedProjectShowcase from "./FeaturedProjectShowcase";
import projects from "../data/projects";

function Projects() {
  const MotionDiv = motion.div;
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <SectionWrapper id="projects" title="Projects">
      <FeaturedProjectShowcase onOpenCaseStudy={setSelectedProject} />
      <MotionDiv
        className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
        }}
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            onOpenCaseStudy={setSelectedProject}
          />
        ))}
      </MotionDiv>
      <ProjectCaseStudyModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </SectionWrapper>
  );
}

export default memo(Projects);
