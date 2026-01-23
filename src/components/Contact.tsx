import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="display-heading text-4xl md:text-5xl lg:text-6xl mb-4">
            Let's Connect
          </h2>
          <p className="body-text max-w-md mx-auto">
            Open to opportunities and collaborations. Feel free to reach out.
          </p>
        </motion.div>

        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mb-16"
        >
          <a
            href="mailto:pragyan.himanshu2004@gmail.com"
            className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
          >
            <Mail className="w-5 h-5" />
            <span className="text-sm md:text-base">
              pragyan.himanshu2004@gmail.com
            </span>
          </a>
          <a
            href="tel:+918700739916"
            className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span className="text-sm md:text-base">+91 8700739916</span>
          </a>
          <div className="flex items-center gap-3 text-muted-foreground">
            <MapPin className="w-5 h-5" />
            <span className="text-sm md:text-base">New Delhi, India</span>
          </div>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center gap-6"
        >
          <a
            href="https://github.com/Himanshu2-8"
            className="p-4 rounded-full bg-card border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/himanshu-pragyan"
            className="p-4 rounded-full bg-card border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
