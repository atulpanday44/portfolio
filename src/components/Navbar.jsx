import { useEffect, useMemo, useState, memo } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Logo from "./Logo";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "System Design", href: "#system-design" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const MotionSpan = motion.span;
  const sections = useMemo(() => navLinks.map((item) => item.href.replace("#", "")), []);
  const [activeSection, setActiveSection] = useState("about");
  const [isSolid, setIsSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsSolid(window.scrollY > 30);
      const current = sections.find((sectionId) => {
        const section = document.getElementById(sectionId);
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= 140 && rect.bottom >= 140;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [sections]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-lg transition-all duration-300 ${
        isSolid ? "border-white/10 bg-black/80" : "border-transparent bg-black/30"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-10">
        <a href="#hero" className="group">
          <Logo />
        </a>
        <div className="flex items-center gap-5 text-sm text-zinc-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`group relative hidden transition sm:inline-block ${
                activeSection === link.href.replace("#", "") ? "text-white" : "text-zinc-300"
              }`}
            >
              {link.label}
              <MotionSpan
                className="absolute -bottom-1 left-0 h-px bg-white"
                initial={false}
                animate={{ width: activeSection === link.href.replace("#", "") ? "100%" : "0%" }}
                transition={{ duration: 0.25 }}
              />
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-white/70 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="https://github.com/atulpanday44"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="text-lg transition hover:text-white"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/atulpanday44/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="text-lg transition hover:text-white"
          >
            <FaLinkedin />
          </a>
        </div>
      </nav>
    </header>
  );
}

export default memo(Navbar);
