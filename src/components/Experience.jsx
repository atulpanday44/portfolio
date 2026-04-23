import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const highlights = [
  "Built comprehensive automation frameworks using TestNG and Rest Assured",
  "Validated REST and GraphQL APIs in AWS and Kubernetes environments",
  "Improved test coverage by 40% through strategic automation",
  "Integrated CI/CD pipelines with Docker-based testing infrastructure",
  "Implemented chaos engineering and load testing strategies",
];

function Experience() {
  const MotionArticle = motion.article;
  const MotionDiv = motion.div;

  return (
    <SectionWrapper id="experience" title="Experience">
      <MotionArticle
        initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ type: "spring", stiffness: 85, damping: 20 }}
        className="rounded-2xl border border-white/15 bg-gradient-to-br from-white/10 to-white/5 p-8 shadow-2xl shadow-white/5 backdrop-blur-2xl md:p-10"
      >
        <div className="flex flex-col justify-between gap-2 border-b border-white/10 pb-6 md:flex-row md:items-start">
          <MotionDiv
            initial={{ opacity: 0, y: -12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-3xl md:text-4xl font-extrabold text-white">
              AiDash - SDET Intern
            </h3>
            <p className="mt-2 text-sm text-zinc-400">Quality Assurance & Test Automation</p>
          </MotionDiv>
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="inline-flex w-fit rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-zinc-200 backdrop-blur-lg"
          >
            Internship · Full-time Focus
          </motion.span>
        </div>

        <MotionDiv
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 space-y-4"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 + index * 0.06 }}
              className="flex gap-3 items-start rounded-lg border border-white/10 bg-black/40 p-4"
            >
              <span className="mt-1.5 h-2 w-2 rounded-full bg-white/60 flex-shrink-0" />
              <span className="text-base text-zinc-300">{item}</span>
            </motion.div>
          ))}
        </MotionDiv>

        {/* Key Metrics */}
        <MotionDiv
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.55 }}
          className="mt-10 grid gap-4 sm:grid-cols-3"
        >
          {[
            { value: "+40%", label: "Test Coverage", color: "text-emerald-300" },
            { value: "CI/CD", label: "Pipelines", color: "text-sky-300" },
            { value: "100%", label: "Cloud-native", color: "text-violet-300" },
          ].map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + index * 0.08 }}
              className={`rounded-xl border border-white/15 bg-gradient-to-br from-white/8 to-white/5 px-4 py-6 text-center backdrop-blur-lg hover:border-white/25 hover:shadow-lg hover:shadow-white/10 transition duration-300`}
            >
              <p className={`text-2xl md:text-3xl font-extrabold ${metric.color}`}>
                {metric.value}
              </p>
              <p className="mt-2 text-xs uppercase tracking-widest text-zinc-400 font-semibold">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </MotionDiv>
      </MotionArticle>
    </SectionWrapper>
  );
}

export default Experience;
