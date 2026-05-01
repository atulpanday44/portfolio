import { memo } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const metrics = [
  { value: "+40%", label: "Test Coverage", tone: "text-emerald-300", icon: "📈" },
  { value: "CI/CD", label: "Integrated Pipelines", tone: "text-sky-300", icon: "🔄" },
  { value: "AWS + K8s", label: "Cloud-native Validation", tone: "text-violet-300", icon: "☁️" },
  { value: "100%", label: "API Coverage", tone: "text-amber-300", icon: "✓" },
];

const achievements = [
  {
    title: "Test Automation Framework",
    description: "Built comprehensive automation frameworks using TestNG and Rest Assured for enterprise-scale testing",
  },
  {
    title: "Cloud & Kubernetes Testing",
    description: "Validated APIs across AWS and Kubernetes environments with end-to-end integration tests",
  },
  {
    title: "CI/CD Pipeline Integration",
    description: "Improved test coverage by 40% by integrating validation suites into deployment pipelines",
  },
  {
    title: "Performance & Reliability",
    description: "Ensured API reliability through load testing, chaos engineering, and failure scenario validation",
  },
];

function ImpactExperience() {
  const MotionArticle = motion.article;
  const MotionDiv = motion.div;

  return (
    <SectionWrapper id="impact" title="Impact & Experience">
      {/* Metrics Grid */}
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4 mb-10">
        {metrics.map((metric, index) => (
          <MotionArticle
            key={metric.label}
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ type: "spring", stiffness: 85, damping: 20, delay: index * 0.08 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="group rounded-2xl border border-white/15 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-lg transition duration-300 hover:border-white/30 hover:shadow-lg hover:shadow-white/20"
          >
            <MotionDiv
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 + 0.1 }}
              className="mb-3 text-3xl"
            >
              {metric.icon}
            </MotionDiv>
            <p className={`text-4xl font-extrabold tracking-tight ${metric.tone}`}>
              {metric.value}
            </p>
            <p className="mt-2 text-sm uppercase tracking-widest text-zinc-400 font-bold">
              {metric.label}
            </p>
          </MotionArticle>
        ))}
      </div>

      {/* Experience Card */}
      <MotionDiv
        initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ type: "spring", stiffness: 85, damping: 20 }}
        className="rounded-3xl border border-white/15 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-2xl md:p-10"
      >
        <MotionDiv
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="h-3 w-3 rounded-full bg-white/60" />
            <p className="text-xs uppercase tracking-widest text-zinc-400 font-bold">Current</p>
          </div>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white">
            AiDash - SDET Intern
          </h3>
          <p className="mt-2 text-zinc-400 text-sm">Quality Assurance & Test Automation</p>
        </MotionDiv>

        {/* Achievements Grid */}
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {achievements.map((achievement, index) => (
            <MotionDiv
              key={achievement.title}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + index * 0.08 }}
              className="rounded-xl border border-white/10 bg-black/40 p-4"
            >
              <h4 className="font-semibold text-white text-sm flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
                {achievement.title}
              </h4>
              <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
                {achievement.description}
              </p>
            </MotionDiv>
          ))}
        </div>

        {/* Key Highlights */}
        <MotionDiv
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.55 }}
          className="mt-8 border-t border-white/10 pt-8"
        >
          <p className="text-xs uppercase tracking-widest text-zinc-400 font-bold mb-4">
            Key Technologies
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              "TestNG",
              "Rest Assured",
              "AWS",
              "Kubernetes",
              "CI/CD",
              "Load Testing",
              "Chaos Engineering",
              "API Validation",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-white/10 border border-white/20 px-3 py-1 text-xs font-medium text-zinc-200 backdrop-blur-lg"
              >
                {tech}
              </span>
            ))}
          </div>
        </MotionDiv>
      </MotionDiv>
    </SectionWrapper>
  );
}

export default memo(ImpactExperience);
