import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-8 px-6 md:px-12 lg:px-24 border-t border-border">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4"
      >
        <div className="flex items-center gap-2">
          <span className="accent-dot" />
          <span className="font-display font-semibold">Himanshu Pragy</span>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
