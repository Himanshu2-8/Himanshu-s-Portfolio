import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    institution: "Maharaja Agrasen Institute of Technology",
    degree: "B.Tech in Computer Science (AI & ML)",
    period: "Sep 2023 - Present",
    grade: "CGPA: 8.9/10",
    location: "New Delhi, India",
  },
  {
    institution: "Indraprastha International School",
    degree: "CBSE XII",
    period: "Mar 2021 - Jun 2022",
    grade: "Percentage: 95.4%",
    location: "New Delhi",
  },
];

const Education = () => {
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
          <span className="text-primary font-display text-lg">04</span>
          <h2 className="section-heading">Education</h2>
          <div className="flex-1 decorative-line" />
        </motion.div>

        {/* Education timeline */}
        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex gap-6 items-start"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                  <h3 className="font-display text-xl font-semibold">
                    {edu.institution}
                  </h3>
                  <span className="text-sm text-muted-foreground">
                    {edu.period}
                  </span>
                </div>
                <p className="text-muted-foreground mb-1">{edu.degree}</p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-primary font-medium">{edu.grade}</span>
                  <span className="text-muted-foreground">{edu.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
