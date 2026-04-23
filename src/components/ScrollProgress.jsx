import { useState } from "react";
import { motion, useMotionValueEvent, useScroll, useSpring } from "framer-motion";

function ScrollProgress() {
  const MotionDiv = motion.div;
  const { scrollYProgress } = useScroll();
  const [progressValue, setProgressValue] = useState(0);
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 22,
    mass: 0.35,
    restDelta: 0.001,
  });
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setProgressValue(Math.round(latest * 100));
  });

  return (
    <>
      <MotionDiv
        className="fixed left-0 right-0 top-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-zinc-300 via-white to-zinc-300"
        style={{ scaleX }}
      />
      <div className="fixed right-4 top-4 z-[60] rounded-full border border-white/15 bg-black/55 px-2 py-1 text-[10px] text-zinc-300 backdrop-blur-md">
        {progressValue}%
      </div>
    </>
  );
}

export default ScrollProgress;
