import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

function About() {
  const MotionDiv = motion.div;

  return (
    <SectionWrapper id="about" title="About">
      <MotionDiv
        initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ type: "spring", stiffness: 85, damping: 20 }}
        className="max-w-4xl rounded-2xl border border-white/15 bg-gradient-to-br from-white/10 to-white/5 p-8 shadow-2xl shadow-white/5 backdrop-blur-2xl md:p-10"
      >
        <p className="text-base leading-8 text-zinc-300 md:text-lg">
          I am a backend-focused engineer specializing in building reliable and scalable systems
          using Java, Spring Boot, and cloud-native technologies. My expertise includes designing
          REST APIs, developing microservices architectures, and optimizing data-driven workflows
          for production environments.
        </p>
        <p className="mt-6 text-base leading-8 text-zinc-300 md:text-lg">
          With experience across AWS, Docker, and Kubernetes, I deliver cloud-native applications
          with strong deployment automation and operational stability. I apply system design
          principles to build architectures that scale seamlessly while maintaining code quality,
          service resilience, and long-term maintainability.
        </p>
        
        <MotionDiv
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 pt-8 border-t border-white/10"
        >
          <p className="text-xs uppercase tracking-widest text-zinc-400 font-bold mb-4">
            Engineering Focus
          </p>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
            {[
              "Backend Systems",
              "Scalable APIs",
              "Microservices",
              "Cloud Infrastructure",
            ].map((focus, index) => (
              <motion.div
                key={focus}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 + index * 0.06 }}
                className="rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-center"
              >
                <p className="text-sm font-semibold text-white">{focus}</p>
              </motion.div>
            ))}
          </div>
        </MotionDiv>
      </MotionDiv>
    </SectionWrapper>
  );
}

export default About;
