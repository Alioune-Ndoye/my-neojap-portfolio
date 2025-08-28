import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "🎨",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion", "Vue.js"],
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL", "REST APIs"],
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "Tools & Technologies",
      icon: "🛠️",
      skills: ["Git", "Docker", "AWS", "Figma", "Jest", "Webpack"],
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "Design & UX",
      icon: "✨",
      skills: ["UI/UX Design", "Responsive Design", "Accessibility", "Design Systems", "Prototyping", "User Research"],
      color: "from-orange-500/20 to-red-500/20"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl">
            Skills & Expertise
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            A comprehensive toolkit built through years of passionate learning and hands-on experience
          </p>
          <div className="mx-auto w-24 h-1 bg-primary rounded mt-6"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group p-6 h-full hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-card to-muted/20 backdrop-blur-sm">
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg`}
                />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <motion.span 
                      className="text-2xl"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {category.icon}
                    </motion.span>
                    <h3 className="text-xl font-medium">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Badge 
                          variant="secondary" 
                          className="px-3 py-1 text-sm bg-background/80 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Interactive experience timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl mb-8">Experience Timeline</h3>
          <div className="relative flex flex-col md:flex-row justify-center items-start gap-8 md:gap-16">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-6 left-1/2 transform -translate-x-1/2 w-full max-w-2xl h-0.5 bg-border"></div>
            
            {[
              { year: "2019", title: "Started Coding", desc: "First Hello World" },
              { year: "2021", title: "First Project", desc: "Built my portfolio" },
              { year: "2023", title: "Professional Dev", desc: "Joined amazing teams" },
              { year: "2025", title: "Senior Developer", desc: "Leading projects" }
            ].map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative flex flex-col items-center text-center z-10"
              >
                <motion.div
                  className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mb-3 shadow-lg"
                  whileHover={{ scale: 1.2 }}
                >
                  <span className="text-sm font-medium">{milestone.year}</span>
                </motion.div>
                <h4 className="font-medium mb-1">{milestone.title}</h4>
                <p className="text-sm text-muted-foreground max-w-24">{milestone.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}