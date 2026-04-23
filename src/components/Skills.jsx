import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const skillGroups = [
  {
    title: "Languages",
    skills: [
      { name: "Java", detail: "Core language for backend APIs and domain modeling." },
      { name: "Python", detail: "Used for automation and AI incident workflows." },
      { name: "SQL", detail: "Optimized transactional queries across PostgreSQL/MySQL." },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Spring Boot", detail: "Used in CRM with JWT auth and layered architecture." },
      { name: "REST APIs", detail: "Designed scalable API contracts for services." },
      { name: "Microservices", detail: "Built service boundaries for modular scalability." },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS (S3, EKS)", detail: "Deployed and tested services in cloud-native setups." },
      { name: "Docker", detail: "Containerized applications for consistent environments." },
      { name: "Kubernetes", detail: "Validated workloads in orchestrated clusters." },
      { name: "CI/CD", detail: "Integrated pipelines for reliable automated delivery." },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", detail: "Primary relational store for CRM entities." },
      { name: "MySQL", detail: "Used in billing workflows and transaction handling." },
    ],
  },
  {
    title: "Core Concepts",
    skills: [
      { name: "Data Structures", detail: "Applied to optimize API and processing pipelines." },
      { name: "OOP", detail: "Maintained clean domain-driven service abstractions." },
      { name: "System Design", detail: "Designed scalable and resilient architecture patterns." },
      { name: "Concurrency", detail: "Handled async operations and throughput bottlenecks." },
    ],
  },
];

function Skills() {
  const MotionArticle = motion.article;
  const MotionDiv = motion.div;

  return (
    <SectionWrapper id="skills" title="Skills">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, groupIndex) => (
          <MotionArticle
            key={group.title}
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ type: "spring", stiffness: 85, damping: 20, delay: groupIndex * 0.08 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/8 to-white/5 p-6 shadow-md shadow-black/20 backdrop-blur-lg transition duration-300 hover:border-white/25 hover:shadow-lg hover:shadow-white/10"
          >
            <h3 className="mb-4 text-lg font-semibold text-white">{group.title}</h3>
            <p className="mb-6 text-xs uppercase tracking-widest text-zinc-400 font-bold">
              Production Experience
            </p>
            <div className="space-y-3">
              {group.skills.map((skill, skillIndex) => (
                <MotionDiv
                  key={skill.name}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: groupIndex * 0.08 + skillIndex * 0.05 }}
                  className="group/skill rounded-xl border border-white/10 bg-black/30 px-4 py-3 transition duration-300 hover:border-white/30 hover:bg-white/10 hover:shadow-md hover:shadow-white/10"
                >
                  <p className="text-sm font-semibold text-white flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
                    {skill.name}
                  </p>
                  <p className="mt-2 max-h-0 overflow-hidden text-xs text-zinc-400 transition-all duration-300 group-hover/skill:max-h-24">
                    {skill.detail}
                  </p>
                </MotionDiv>
              ))}
            </div>
          </MotionArticle>
        ))}
      </div>
    </SectionWrapper>
  );
}

export default Skills;
