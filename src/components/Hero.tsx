import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="absolute top-20 right-10 md:right-32 w-32 h-32 md:w-48 md:h-48 rounded-full bg-primary/10 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.8 }}
        className="absolute bottom-32 left-10 w-24 h-24 md:w-40 md:h-40 rounded-full bg-secondary blur-2xl"
      />

      {/* Main content */}
      <div className="max-w-5xl">
        {/* Intro line */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="accent-dot" />
          <span className="text-muted-foreground font-medium tracking-wide uppercase text-sm">
            Software Developer
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
            className="display-heading mb-8"
          >
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="flex flex-col items-start">
                <span className="block">Himanshu</span>
                <span className="block text-primary">Pragyan</span>
              </div>
              <img
                src="/profile.jpeg"
                alt="Profile"
                className="w-40 h-40 ml-8 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-primary shadow-lg transition-all duration-300"
                style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}
              />
            </div>
          </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="body-text max-w-xl mb-12"
        >
          Computer Science Engineering undergraduate specializing in{" "}
          <span className="text-foreground font-medium">AI/ML</span>, crafting
          full-stack experiences with a focus on real-time systems and elegant
          interfaces.
        </motion.p>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex items-center gap-2 text-muted-foreground"
        >
          <span className="w-4 h-px bg-border" />
          <span className="text-sm">New Delhi, India</span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground uppercase tracking-widest">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
