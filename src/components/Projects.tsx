import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Ingressly",
    period: "April 2026",
    description:
      "Scalable multi-tenant reverse proxy server that dynamically routes requests from custom subdomains to user-defined backend services. Implemented distributed rate limiting with Redis and secure API key-based validation with optimized lookup strategies.",
    tech: ["Java", "Spring Boot", "Redis", "Docker"],
    links: {
      github: "https://github.com/Himanshu2-8/Ingressly",
    },
  },
  {
    title: "ClickPic",
    period: "Jan 2026",
    description:
      "Comprehensive cost calculation engine for printouts with file upload handling, page-range parsing, and pricing normalization. Includes admin route layer with role-based authorization for inventory, order management, and report generation.",
    tech: ["TypeScript", "Express", "Prisma"],
    links: {
      website: "https://clickpic-alpha.vercel.app/",
    },
  },
  {
    title: "Hoop",
    period: "Oct 2025",
    description:
      "Full-stack multiplayer sports quiz platform where players create or join game rooms and compete in real-time. Features live synchronization using Socket.io, responsive React frontend with Tailwind CSS, and secure JWT authentication.",
    tech: ["TypeScript", "Express", "React", "Socket.io"],
    links: {
      github: "https://github.com/Himanshu2-8/Hoop-backend",
      website: "https://hoop-frontend-git-main-himanshu-pragyans-projects.vercel.app/",
    },
  },
  {
    title: "Journeys",
    period: "Jun 2025 - Jul 2025",
    description:
      "Travel planning platform enabling custom itinerary building with interactive map integration. Includes secure user accounts and media storage for trip photos.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Google Maps"],
    links: { github: "https://github.com/Himanshu2-8/Journeys" },
  },
];

const Projects = () => {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="text-primary font-display text-lg">01</span>
          <h2 className="section-heading">Selected Work</h2>
          <div className="flex-1 decorative-line" />
        </motion.div>

        {/* Projects grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="project-card group"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="font-display cursor-pointer text-2xl md:text-3xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-sm text-muted-foreground">
                      {project.period}
                    </span>
                  </div>
                  <p className="body-text mb-6 max-w-2xl">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="skill-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      aria-label="View on GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.links.website && (
                    <a
                      href={project.links.website}
                      className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      aria-label="Visit website"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
