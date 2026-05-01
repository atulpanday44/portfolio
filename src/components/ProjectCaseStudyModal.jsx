import { memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

function ProjectCaseStudyModal({ project, onClose }) {
  const MotionDiv = motion.div;
  const MotionButton = motion.button;

  return (
    <AnimatePresence>
      {project ? (
        <MotionDiv
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <MotionDiv
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 180, damping: 22 }}
            className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-white/20 bg-gradient-to-b from-zinc-950 to-black p-6 sm:p-8 lg:p-12 shadow-2xl shadow-white/10"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Header */}
            <div className="mb-10 flex items-start justify-between gap-4 border-b border-white/10 pb-6">
              <MotionDiv
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <p className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Case Study</p>
                <h3 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">{project.title}</h3>
              </MotionDiv>
              <MotionButton
                type="button"
                onClick={onClose}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="rounded-full border border-white/20 p-2 text-white transition hover:border-white hover:bg-white/10"
              >
                <FaTimes />
              </MotionButton>
            </div>

            {/* Content */}
            <div className="space-y-10">
              {/* Problem Statement */}
              <MotionDiv
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="h-1 w-8 bg-white/30 rounded-full" />
                  <h4 className="text-xs uppercase tracking-widest font-bold text-white">
                    Problem Statement
                  </h4>
                </div>
                <p className="text-base text-zinc-300 leading-relaxed">{project.caseStudy.problem}</p>
              </MotionDiv>

              {/* Architecture Overview */}
              <MotionDiv
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="h-1 w-8 bg-white/30 rounded-full" />
                  <h4 className="text-xs uppercase tracking-widest font-bold text-white">
                    Architecture Overview
                  </h4>
                </div>
                <p className="text-base text-zinc-300 leading-relaxed">{project.caseStudy.architecture}</p>
              </MotionDiv>

              {/* Request Flow */}
              <MotionDiv
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="h-1 w-8 bg-white/30 rounded-full" />
                  <h4 className="text-xs uppercase tracking-widest font-bold text-white">
                    Request Flow Diagram
                  </h4>
                </div>
                <div className="rounded-2xl border border-white/15 bg-black/60 p-6 font-mono text-sm backdrop-blur-lg">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-zinc-300">
                    {["Client Request", "API Gateway", "Service Layer", "Database", "Response"].map(
                      (step, index) => (
                        <div key={step} className="flex items-center gap-3 w-full md:w-auto">
                          <div className="rounded-lg border border-white/20 bg-white/5 px-4 py-2 whitespace-nowrap text-center">
                            <span className="text-white font-semibold text-xs">{step}</span>
                          </div>
                          {index < 4 && (
                            <span className="text-white/30 hidden md:inline text-xl">→</span>
                          )}
                          {index < 4 && (
                            <span className="text-white/30 md:hidden text-xl">↓</span>
                          )}
                        </div>
                      )
                    )}
                  </div>
                </div>
              </MotionDiv>

              {/* Key Features */}
              <MotionDiv
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="h-1 w-8 bg-white/30 rounded-full" />
                  <h4 className="text-xs uppercase tracking-widest font-bold text-white">
                    Key Features
                  </h4>
                </div>
                <div className="grid gap-3 md:grid-cols-2">
                  {project.caseStudy.features.map((item, index) => (
                    <MotionDiv
                      key={item}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.06 }}
                      className="flex gap-3 items-start rounded-xl border border-white/10 bg-white/5 p-4"
                    >
                      <div className="mt-1 h-2 w-2 rounded-full bg-white/60 flex-shrink-0" />
                      <span className="text-sm text-zinc-300">{item}</span>
                    </MotionDiv>
                  ))}
                </div>
              </MotionDiv>

              {/* Technical Decisions */}
              <MotionDiv
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="h-1 w-8 bg-white/30 rounded-full" />
                  <h4 className="text-xs uppercase tracking-widest font-bold text-white">
                    Technical Decisions (Why)
                  </h4>
                </div>
                <div className="space-y-3">
                  {project.caseStudy.decisions.map((item, index) => (
                    <MotionDiv
                      key={item}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.06 }}
                      className="flex gap-3 items-start rounded-xl border border-white/10 bg-white/5 p-4"
                    >
                      <div className="mt-1 h-2 w-2 rounded-full bg-white/60 flex-shrink-0" />
                      <span className="text-sm text-zinc-300">{item}</span>
                    </MotionDiv>
                  ))}
                </div>
              </MotionDiv>

              {/* Challenges & Solutions */}
              <MotionDiv
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="h-1 w-8 bg-white/30 rounded-full" />
                  <h4 className="text-xs uppercase tracking-widest font-bold text-white">
                    Challenges & Solutions
                  </h4>
                </div>
                <div className="rounded-xl border border-white/15 bg-white/5 p-4">
                  <p className="text-sm text-zinc-300 leading-relaxed">{project.caseStudy.challenges}</p>
                </div>
              </MotionDiv>

              {/* Scalability */}
              <MotionDiv
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="h-1 w-8 bg-white/30 rounded-full" />
                  <h4 className="text-xs uppercase tracking-widest font-bold text-white">
                    Scalability Considerations
                  </h4>
                </div>
                <div className="rounded-xl border border-white/15 bg-white/5 p-4">
                  <p className="text-sm text-zinc-300 leading-relaxed">{project.caseStudy.scaling}</p>
                </div>
              </MotionDiv>

              {/* Deep Dive for CRM */}
              {project.caseStudy.crmDetails.length > 0 && (
                <MotionDiv
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55 }}
                >
                  <div className="mb-3 flex items-center gap-3">
                    <div className="h-1 w-8 bg-white/30 rounded-full" />
                    <h4 className="text-xs uppercase tracking-widest font-bold text-white">
                      Deep Technical Dive
                    </h4>
                  </div>
                  <div className="space-y-3">
                    {project.caseStudy.crmDetails.map((item, index) => (
                      <div
                        key={item}
                        className="flex gap-3 items-start rounded-xl border border-white/10 bg-white/5 p-4"
                      >
                        <div className="mt-1 h-2 w-2 rounded-full bg-white/60 flex-shrink-0" />
                        <span className="text-sm text-zinc-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </MotionDiv>
              )}
            </div>
          </MotionDiv>
        </MotionDiv>
      ) : null}
    </AnimatePresence>
  );
}

export default memo(ProjectCaseStudyModal);
