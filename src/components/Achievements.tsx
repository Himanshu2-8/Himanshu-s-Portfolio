import { motion } from "framer-motion";
import { Trophy, Code, Star } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Meta Hacker Cup 2025",
    description: "Ranked 6,976 globally",
  },
  {
    icon: Trophy,
    title: "DTU BrAInwave 2026",
    description: "Finalist among 100+ teams in 36 hours national hackathon",
  },
  {
    icon: Star,
    title: "Competitive Ratings",
    description: "LeetCode 1450 • CodeChef 1250 • HackerRank 5★ C++",
  },
  {
    icon: Code,
    title: "Problem Solving",
    description: "300+ problems across LeetCode, Codeforces, CodeChef & GFG",
  },
];

const Achievements = () => {
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
          <span className="text-primary font-display text-lg">03</span>
          <h2 className="section-heading">Achievements</h2>
          <div className="flex-1 decorative-line" />
        </motion.div>

        {/* Achievement cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <achievement.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">
                {achievement.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
