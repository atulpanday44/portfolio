import { motion } from "framer-motion";

function Logo() {
  const MotionDiv = motion.div;

  return (
    <MotionDiv
      whileHover={{ scale: 1.08 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
      className="group relative flex items-center gap-3"
    >
      {/* Glow effect on hover */}
      <div className="absolute -inset-3 rounded-lg bg-gradient-to-r from-white/15 to-gray-500/15 opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-100" />

      {/* Main Glassmorphism Box */}
      <div className="relative flex h-11 w-11 items-center justify-center rounded-lg border border-white/25 bg-gradient-to-br from-white/15 to-white/5 shadow-lg shadow-white/10 backdrop-blur-lg transition duration-300 group-hover:border-white/40 group-hover:shadow-white/20">
        {/* AP Text with gradient */}
        <span className="bg-gradient-to-r from-white via-zinc-300 to-zinc-400 bg-clip-text text-sm font-bold text-transparent tracking-wide">
          AP
        </span>
      </div>

      {/* Full name next to logo (hidden on mobile) */}
      <div className="hidden sm:block">
        <span className="text-xs font-bold tracking-wide text-white opacity-80 group-hover:opacity-100 transition duration-300">
          Atul Panday
        </span>
      </div>
    </MotionDiv>
  );
}

export default Logo;
