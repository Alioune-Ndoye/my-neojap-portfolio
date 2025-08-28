import { motion } from "motion/react";
import { Card } from "./ui/card";

export function About() {
  const qualities = [
    {
      title: "Creative Problem Solver",
      description:
        "I thrive on turning complex challenges into elegant solutions, finding innovative approaches where others see obstacles.",
    },
    {
      title: "Resilient & Adaptable",
      description:
        "Every setback is a setup for a comeback. I embrace change and continuously evolve with the ever-shifting tech landscape.",
    },
    {
      title: "Detail-Oriented",
      description:
        "Perfection lies in the details. I craft pixel-perfect interfaces and write clean, maintainable code.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-muted/20">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl">About Me</h2>
          <div className="mx-auto w-24 h-1 bg-primary rounded"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-primary/20 rounded-lg"></div>
              <img
                src="/profile.jpg"
                alt="Professional developer portrait"
                className="w-full h-96 object-cover rounded-lg shadow-2xl bg-muted/10"
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-lg backdrop-blur-sm"></div>
            </div>
            <div className="text-center mt-6">
              <h4 className="text-xl text-primary">Ali Ndoye</h4>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl mb-6">
              The Journey of a{" "}
              <span className="text-primary">Digital Craftsman</span>
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              My path in development began with curiosity and has evolved
              through passion, perseverance, and an unwavering commitment to
              excellence. I believe that great software isn't just functional—
              it's beautiful, intuitive, and meaningful.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Drawing inspiration from Neo-Japanese design principles, I create
              digital experiences that embody minimalism while maintaining
              powerful functionality. Every project is an opportunity to push
              boundaries and create something extraordinary.
            </p>

            <div className="grid gap-4 mt-8">
              {qualities.map((quality, index) => (
                <motion.div
                  key={quality.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-4 border-l-4 border-l-primary bg-card/50 backdrop-blur-sm">
                    <h4 className="font-medium mb-2">{quality.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {quality.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
