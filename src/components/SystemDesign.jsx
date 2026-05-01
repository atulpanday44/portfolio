import { motion } from "framer-motion";
import { useState, memo } from "react";
import SectionWrapper from "./SectionWrapper";

const systems = [
  {
    title: "URL Shortener",
    explanation:
      "Converts long URLs into short aliases with fast lookup and high availability.",
    components: [
      { name: "API", tip: "Handles create/resolve short URL endpoints." },
      { name: "Service", tip: "Generates unique key and orchestrates storage." },
      { name: "Cache", tip: "Caches hot short codes for low latency redirects." },
      { name: "DB", tip: "Persists URL mappings and analytics metadata." },
    ],
  },
  {
    title: "Rate Limiter",
    explanation:
      "Protects APIs by controlling request bursts per user/IP using distributed counters.",
    components: [
      { name: "API", tip: "Intercepts inbound requests at gateway." },
      { name: "Service", tip: "Applies token bucket/window logic." },
      { name: "Cache", tip: "Tracks counters in fast in-memory store." },
      { name: "DB", tip: "Stores policy configs and audit trails." },
    ],
  },
  {
    title: "Cache System (Redis Concept)",
    explanation:
      "Reduces DB load using read-through caching and TTL-based invalidation strategies.",
    components: [
      { name: "API", tip: "Receives read/write operations from clients." },
      { name: "Service", tip: "Implements cache-aside policy logic." },
      { name: "Cache", tip: "Serves hot data with TTL eviction." },
      { name: "DB", tip: "Acts as source of truth for persistence." },
    ],
  },
];

function SystemDesign() {
  const MotionArticle = motion.article;
  const MotionDiv = motion.div;
  const [hoveredComponent, setHoveredComponent] = useState(null);

  return (
    <SectionWrapper id="system-design" title="System Design">
      <div className="grid gap-8 md:gap-10">
        {systems.map((system, systemIndex) => (
          <MotionArticle
            key={system.title}
            initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ type: "spring", stiffness: 85, damping: 20, delay: systemIndex * 0.1 }}
            className="group rounded-3xl border border-white/15 bg-gradient-to-br from-white/8 to-white/5 p-8 shadow-2xl shadow-white/5 backdrop-blur-2xl transition duration-300 hover:border-white/25 hover:shadow-lg hover:shadow-white/10 md:p-10"
          >
            {/* Title and Explanation */}
            <MotionDiv
              initial={{ opacity: 0, y: -12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: systemIndex * 0.1 + 0.05 }}
            >
              <h3 className="text-2xl md:text-3xl font-extrabold text-white">{system.title}</h3>
              <p className="mt-3 text-zinc-300 leading-relaxed max-w-2xl text-base">
                {system.explanation}
              </p>
            </MotionDiv>

            {/* Architecture Diagram */}
            <MotionDiv
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: systemIndex * 0.1 + 0.1 }}
              className="mt-10 rounded-2xl border border-white/10 bg-black/40 p-8 backdrop-blur-lg"
            >
              <p className="mb-6 text-xs uppercase tracking-widest font-bold text-zinc-400">
                Component Architecture
              </p>

              {/* Diagram Flow */}
              <div className="flex flex-col lg:flex-row items-stretch justify-center gap-4 lg:gap-3">
                {system.components.map((component, compIndex) => (
                  <MotionDiv
                    key={component.name}
                    initial={{ opacity: 0, scale: 0.9, y: 12 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: systemIndex * 0.1 + 0.15 + compIndex * 0.08 }}
                    className="flex-1 min-w-[120px]"
                  >
                    <div
                      className="group/component relative cursor-help rounded-xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5 p-4 text-center transition duration-300 hover:border-white/40 hover:shadow-lg hover:shadow-white/20"
                      onMouseEnter={() => setHoveredComponent(`${systemIndex}-${compIndex}`)}
                      onMouseLeave={() => setHoveredComponent(null)}
                    >
                      <div className="text-sm md:text-base font-bold text-white">{component.name}</div>

                      {/* Tooltip */}
                      {hoveredComponent === `${systemIndex}-${compIndex}` && (
                        <MotionDiv
                          initial={{ opacity: 0, y: -8, scale: 0.95 }}
                          animate={{ opacity: 1, y: -44, scale: 1 }}
                          exit={{ opacity: 0, y: -8, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-1/2 bottom-full -translate-x-1/2 z-50 w-48 rounded-lg border border-white/30 bg-zinc-900/95 px-3 py-2 text-xs text-zinc-200 text-center shadow-xl shadow-black/40 backdrop-blur-xl whitespace-normal mb-2"
                        >
                          {component.tip}
                        </MotionDiv>
                      )}
                    </div>
                  </MotionDiv>
                ))}
              </div>

              {/* Arrow indicators on desktop */}
              <div className="mt-6 hidden lg:flex justify-center items-center gap-3 text-white/30 text-2xl">
                {system.components.map((_, index) =>
                  index < system.components.length - 1 ? (
                    <span key={`arrow-${index}`}>→</span>
                  ) : null
                )}
              </div>

              {/* Mobile flow indicator */}
              <div className="mt-4 lg:hidden text-center text-white/30 text-xl">↓</div>
            </MotionDiv>

            {/* Component Details as expandable list */}
            <MotionDiv
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: systemIndex * 0.1 + 0.3 }}
              className="mt-8 grid gap-3 grid-cols-1 md:grid-cols-2"
            >
              {system.components.map((component, compIndex) => (
                <div
                  key={component.name}
                  className="rounded-lg border border-white/10 bg-white/5 p-3 text-sm"
                >
                  <div className="font-semibold text-white flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-white/60" />
                    {component.name}
                  </div>
                  <p className="mt-1 text-xs text-zinc-400">{component.tip}</p>
                </div>
              ))}
            </MotionDiv>
          </MotionArticle>
        ))}
      </div>
    </SectionWrapper>
  );
}

export default memo(SystemDesign);
