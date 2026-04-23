import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-zinc-400 md:flex-row md:px-10">
        <p className="text-sm">Atul Panday &copy; 2026</p>
        <div className="flex items-center gap-4 text-lg">
          <a
            href="https://github.com/atulpanday44"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="transition hover:text-white"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/atulpanday44/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="transition hover:text-white"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
