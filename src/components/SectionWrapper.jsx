import { memo } from "react";
import { motion } from "framer-motion";

const sectionVariant = {
  hidden: { opacity: 0, y: 42 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 18,
      mass: 0.8,
      when: "beforeChildren",
      staggerChildren: 0.08,
    },
  },
};

const contentVariant = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

function SectionWrapper({ id, title, children }) {
  const MotionSection = motion.section;
  const MotionDiv = motion.div;
  const MotionH2 = motion.h2;

  return (
    <MotionSection
      id={id}
      className="relative py-12 sm:py-16 lg:py-24"
      variants={sectionVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      {title ? (
        <MotionH2
          variants={contentVariant}
          className="mb-10 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white"
        >
          {title}
        </MotionH2>
      ) : null}
      <MotionDiv variants={contentVariant}>{children}</MotionDiv>
    </MotionSection>
  );
}

export default memo(SectionWrapper);
