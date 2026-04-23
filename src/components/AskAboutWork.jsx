import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const responses = {
  "How does your CRM scale?":
    "The CRM uses stateless JWT authentication, allowing horizontal scaling of API instances behind a load balancer. Database optimization includes strategic indexing on frequently queried fields. The service layer is modular, enabling independent scaling of different features. PostgreSQL replication and read replicas handle increased load, while caching strategies reduce DB pressure.",
  "What's your approach to system design?":
    "I focus on scalability, reliability, and maintainability. Key principles include separation of concerns (Controller-Service-Repository), stateless APIs for horizontal scaling, asynchronous processing for heavy operations, and strategic caching to reduce latency. I design systems that can handle growth without major rewrites.",
  "Tell me about your testing experience":
    "As an SDET intern, I achieved 40% increase in test coverage, designed CI/CD pipelines for automated testing, and integrated tests in Kubernetes environments. I focus on automation to catch regressions early, reduce manual testing overhead, and ensure production reliability through comprehensive test strategies.",
  "How do you handle database optimization?":
    "I apply indexing strategies on high-query fields, optimize queries to minimize full table scans, use query analysis tools to identify bottlenecks, and implement caching for hot data. For the billing system, transaction management ensures consistency across multi-step operations without sacrificing performance.",
  "What's your microservices experience?":
    "I've designed service boundaries based on domain responsibilities, implemented inter-service communication patterns, and containerized services with Docker. Each service owns its data, scales independently, and communicates through well-defined APIs. This enables rapid iteration and resilience.",
};

function AskAboutWork() {
  const MotionDiv = motion.div;
  const MotionButton = motion.button;
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [displayedAnswer, setDisplayedAnswer] = useState("");
  const [isAnswering, setIsAnswering] = useState(false);

  // Handle typing animation with proper cleanup
  useEffect(() => {
    if (!selectedQuestion) {
      setDisplayedAnswer("");
      setIsAnswering(false);
      return;
    }

    setDisplayedAnswer("");
    setIsAnswering(true);

    const answer = responses[selectedQuestion];
    let currentIndex = 0;
    let typingInterval;

    typingInterval = setInterval(() => {
      if (currentIndex < answer.length) {
        setDisplayedAnswer(answer.slice(0, currentIndex + 1));
        currentIndex += 1;
      } else {
        clearInterval(typingInterval);
        setIsAnswering(false);
      }
    }, 15);

    // Cleanup: clear interval when component unmounts or selectedQuestion changes
    return () => {
      clearInterval(typingInterval);
      setIsAnswering(false);
    };
  }, [selectedQuestion]);

  const handleSelectQuestion = (question) => {
    setSelectedQuestion(question);
  };

  return (
    <SectionWrapper id="ask-work" title="Ask Me About My Work">
      <MotionDiv
        initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ type: "spring", stiffness: 85, damping: 20 }}
        className="rounded-3xl border border-white/15 bg-gradient-to-br from-white/8 to-white/5 p-8 shadow-2xl shadow-white/5 backdrop-blur-2xl md:p-12"
      >
        <p className="text-zinc-300 text-lg mb-8 max-w-2xl">
          Pick a question to learn more about my engineering philosophy, technical decisions, and
          approach to building scalable systems.
        </p>

        {/* Questions Grid */}
        <div className="grid gap-4 md:grid-cols-2 mb-10">
          {Object.keys(responses).map((question, index) => (
            <MotionButton
              key={question}
              onClick={() => handleSelectQuestion(question)}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className={`group text-left rounded-xl border transition duration-300 p-4 ${
                selectedQuestion === question
                  ? "border-white/50 bg-white/15 shadow-lg shadow-white/10"
                  : "border-white/10 bg-white/5 hover:border-white/30 hover:bg-white/10"
              }`}
            >
              <span className="text-sm font-semibold text-white block">{question}</span>
              <span className="text-xs text-zinc-400 mt-2 block group-hover:text-zinc-300 transition">
                Click to reveal →
              </span>
            </MotionButton>
          ))}
        </div>

        {/* Answer Display */}
        <AnimatePresence>
          {selectedQuestion && (
            <MotionDiv
              initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -12, filter: "blur(6px)" }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5 p-6 md:p-8 backdrop-blur-lg"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="h-3 w-3 rounded-full bg-white/60 animate-pulse" />
                </div>
                <div className="flex-1">
                  <p className="text-xs uppercase tracking-widest text-zinc-400 font-bold mb-3">
                    Answer
                  </p>
                  <p className="text-base text-zinc-200 leading-relaxed whitespace-pre-wrap">
                    {displayedAnswer}
                    {isAnswering && (
                      <span className="ml-1 inline-block w-2 h-5 bg-white/60 animate-pulse" />
                    )}
                  </p>
                </div>
              </div>

              {!isAnswering && (
                <MotionDiv
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mt-6 pt-6 border-t border-white/10"
                >
                  <p className="text-xs text-zinc-400 mb-3">Want to know more?</p>
                  <MotionButton
                    onClick={() => setSelectedQuestion(null)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 text-sm font-semibold rounded-full border border-white/30 bg-white/10 text-white hover:border-white hover:bg-white/20 transition duration-300"
                  >
                    Ask Another Question
                  </MotionButton>
                </MotionDiv>
              )}
            </MotionDiv>
          )}
        </AnimatePresence>
      </MotionDiv>
    </SectionWrapper>
  );
}

export default AskAboutWork;
