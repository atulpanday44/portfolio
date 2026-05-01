import { useState, memo } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import SectionWrapper from "./SectionWrapper";

const contactLinks = [
  {
    label: "Email",
    href: "mailto:4.pandeyatul@gmail.com",
    display: "4.pandeyatul@gmail.com",
    icon: FaEnvelope,
    copy: "4.pandeyatul@gmail.com",
  },
  {
    label: "GitHub",
    href: "https://github.com/atulpanday44",
    display: "github.com/atulpanday44",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/atulpanday44/",
    display: "linkedin.com/in/atulpanday44",
    icon: FaLinkedin,
  },
];

function Contact() {
  const MotionA = motion.a;
  const MotionDiv = motion.div;
  const MotionButton = motion.button;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("4.pandeyatul@gmail.com");
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <SectionWrapper id="contact" title="Contact">
      <MotionDiv
        initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ type: "spring", stiffness: 85, damping: 20 }}
        className="groups relative mx-auto max-w-3xl rounded-3xl border border-white/15 bg-gradient-to-br from-white/10 to-white/5 p-6 sm:p-8 lg:p-12 text-center shadow-2xl shadow-white/10 backdrop-blur-2xl"
      >
        {/* Glow effect on hover */}
        <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(ellipse at center, rgba(255,255,255,0.05) 0%, transparent 70%)`
          }}
        />

        <MotionDiv
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <p className="text-base md:text-lg text-zinc-300 leading-relaxed">
            I am open to backend engineering opportunities, collaborations, and system design
            discussions. Let's connect and build something impactful.
          </p>
        </MotionDiv>

        {/* Copy Email Button */}
        <MotionButton
          type="button"
          onClick={handleCopyEmail}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className={`mt-6 rounded-full px-6 py-3 text-sm font-semibold transition duration-300 ${
            copied
              ? "border border-white/50 bg-white/20 text-white"
              : "border border-white/30 bg-white/10 text-zinc-100 hover:border-white hover:bg-white/20 hover:shadow-lg hover:shadow-white/20"
          }`}
        >
          {copied ? "✓ Email Copied" : "Copy Email"}
        </MotionButton>

        {/* Contact Links */}
        <MotionDiv
          className="mt-10 space-y-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
          }}
        >
          {contactLinks.map((contact) => {
            const Icon = contact.icon;
            return (
              <MotionA
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={contact.href.startsWith("mailto:") ? undefined : "noreferrer"}
                variants={{
                  hidden: { opacity: 0, y: 12, filter: "blur(4px)" },
                  show: {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: { type: "spring", stiffness: 130, damping: 16 },
                  },
                }}
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group/link mx-auto flex w-full max-w-xl items-center justify-center gap-4 rounded-xl border border-white/15 bg-gradient-to-r from-white/8 to-white/5 px-6 py-4 text-zinc-200 transition duration-300 hover:border-white/40 hover:text-white hover:shadow-lg hover:shadow-white/15 backdrop-blur-lg"
              >
                <motion.div
                  whileHover={{ rotate: 20, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="text-xl group-hover/link:text-white transition duration-300"
                >
                  <Icon />
                </motion.div>
                <div className="text-left">
                  <div className="text-xs uppercase tracking-widest font-bold text-zinc-400 group-hover/link:text-zinc-300">
                    {contact.label}
                  </div>
                  <div className="text-sm font-semibold">{contact.display}</div>
                </div>
              </MotionA>
            );
          })}
        </MotionDiv>

        {/* CTA Section */}
        <MotionDiv
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.55 }}
          className="mt-10 border-t border-white/10 pt-8"
        >
          <p className="text-xs uppercase tracking-widest font-bold text-zinc-400 mb-4">
            Ready to collaborate?
          </p>
          <p className="text-sm text-zinc-300">
            Whether you have a backend engineering role, want to discuss system design, or explore opportunities,
            I'd love to hear from you. Drop me a message anytime.
          </p>
        </MotionDiv>
      </MotionDiv>
    </SectionWrapper>
  );
}

export default memo(Contact);
