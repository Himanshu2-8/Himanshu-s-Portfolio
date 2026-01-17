import { motion } from "framer-motion";

const skillCategories = [
  {
    label: "Languages",
    skills: ["TypeScript", "JavaScript", "C++", "Java", "Python"],
  },
  {
    label: "Frameworks",
    skills: ["React", "Next.js", "Express", "FastAPI"],
  },
  {
    label: "Tools",
    skills: ["Docker", "Git", "GitHub"],
  },
  {
    label: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },
];

const Skills = () => {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-card">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="text-primary font-display text-lg">02</span>
          <h2 className="section-heading">Skills & Tools</h2>
          <div className="flex-1 decorative-line" />
        </motion.div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <h3 className="font-display text-lg font-medium text-muted-foreground mb-4">
                {category.label}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    className="skill-tag"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
