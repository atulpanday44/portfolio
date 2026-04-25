import { useEffect, useState, useRef, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 0.15,
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 85,
      damping: 16,
      mass: 0.75,
    },
  },
};

function Hero() {
  const rotatingTitles = [
    "Backend Systems Engineer",
    "Distributed Systems Enthusiast",
    "API & Microservices Developer",
  ];
  const [titleIndex, setTitleIndex] = useState(0);
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50 });
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const debounceTimeoutRef = useRef(null);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % rotatingTitles.length);
    }, 2200);
    return () => window.clearInterval(timer);
  }, [rotatingTitles.length]);

  const handlePointerMove = useCallback((event) => {
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }

    debounceTimeoutRef.current = setTimeout(() => {
      const bounds = event.currentTarget.getBoundingClientRect();
      const x = ((event.clientX - bounds.left) / bounds.width) * 100;
      const y = ((event.clientY - bounds.top) / bounds.height) * 100;
      setSpotlight({ x, y });
      setParallax({ x: (x - 50) / 18, y: (y - 50) / 18 });
    }, 8);
  }, []);

  useEffect(() => {
    return () => {
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
    };
  }, []);

  const MotionSection = motion.section;
  const MotionP = motion.p;
  const MotionH1 = motion.h1;
  const MotionDiv = motion.div;
  const MotionA = motion.a;

  return (
    <MotionSection
      id="hero"
      className="relative flex min-h-[86vh] flex-col justify-center overflow-hidden border-b border-white/10 py-20"
      variants={container}
      initial="hidden"
      animate="show"
      onMouseMove={handlePointerMove}
    >
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-70 transition duration-300 will-change-transform"
          style={{
            background: `radial-gradient(circle at ${spotlight.x}% ${spotlight.y}%, rgba(255,255,255,0.18), transparent 28%)`,
          }}
        />
        <div className="absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl will-change-transform" />
        <motion.div
          animate={{ x: parallax.x, y: parallax.y }}
          transition={{ type: "spring", stiffness: 60, damping: 16 }}
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:36px_36px] opacity-30 will-change-transform"
        />
      </div>
      <MotionP variants={item} className="mb-5 text-sm uppercase tracking-wide text-zinc-400">
        <span className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs backdrop-blur-lg">
          Open to Opportunities 🚀
        </span>
      </MotionP>
      <MotionH1
        variants={item}
        className="relative max-w-4xl text-6xl font-extrabold leading-[0.95] tracking-tight text-transparent md:text-7xl"
      >
        <span className="absolute inset-0 -z-10 bg-white/15 blur-2xl" />
        <span className="bg-gradient-to-r from-white via-zinc-400 to-white bg-[length:200%_100%] bg-clip-text animate-[shimmer_6s_linear_infinite]">
          Atul Panday
        </span>
      </MotionH1>
      <MotionP variants={item} className="mt-5 max-w-4xl text-lg text-zinc-300 md:text-2xl">
        Software Engineer | Backend Systems | Scalable APIs
      </MotionP>
      <MotionDiv variants={item} className="mt-4 h-8 text-base text-zinc-400 md:text-lg">
        <AnimatePresence mode="wait">
          <MotionP
            key={rotatingTitles[titleIndex]}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {rotatingTitles[titleIndex]}
          </MotionP>
        </AnimatePresence>
      </MotionDiv>
      <MotionP variants={item} className="mt-4 max-w-2xl text-base text-zinc-400 md:text-lg">
        I build scalable backend systems and production-ready applications.
      </MotionP>
      <MotionDiv variants={item} className="mt-10 flex flex-wrap gap-4">
        <MotionA
          href="#projects"
          whileHover={{ y: -2, scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 260, damping: 17 }}
          className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition duration-300 hover:scale-105 hover:bg-zinc-200 hover:shadow-lg hover:shadow-white/10"
        >
          View Projects
        </MotionA>
        <MotionA
          href="https://github.com/atulpanday44"
          target="_blank"
          rel="noreferrer"
          whileHover={{ y: -2, scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 260, damping: 17 }}
          className="rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-lg transition duration-300 hover:scale-105 hover:border-white hover:shadow-lg hover:shadow-white/10"
        >
          GitHub
        </MotionA>
        <MotionA
          href="https://www.linkedin.com/in/atulpanday44/"
          target="_blank"
          rel="noreferrer"
          whileHover={{ y: -2, scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 260, damping: 17 }}
          className="rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-lg transition duration-300 hover:scale-105 hover:border-white hover:shadow-lg hover:shadow-white/10"
        >
          LinkedIn
        </MotionA>
      </MotionDiv>
    </MotionSection>
  );
}

export default Hero;
