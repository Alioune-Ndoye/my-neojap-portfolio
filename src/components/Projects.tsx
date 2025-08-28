import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext,
  type CarouselApi
} from "./ui/carousel";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { ImageWithFallback } from "./ui/image-with-fallback";

export function Projects() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const featuredProjects = [
    {
      title: "E-Commerce Platform",
      description: "A modern, responsive e-commerce platform built with React and Node.js. Features include real-time inventory, payment processing, and admin dashboard with advanced analytics.",
      image: "profile.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redis"],
      liveUrl: "https://google-books-o5hg.onrender.com/",
      githubUrl: "https://github.com",
      highlights: ["50% faster loading", "99.9% uptime", "10k+ users"]
    },
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Real-time analytics dashboard with machine learning insights, predictive analytics, and beautiful data visualizations for enterprise clients.",
      image: "profile.jpg",
      technologies: ["Vue.js", "Python", "TensorFlow", "D3.js", "PostgreSQL"],
      liveUrl: " https://hubsearch-1.onrender.com",
      githubUrl: "https://github.com",
      highlights: ["Real-time ML", "Custom charts", "Enterprise grade"]
    },
    {
      title: "Social Media Management Suite",
      description: "Comprehensive social media management platform with scheduling, analytics, team collaboration, and multi-platform posting capabilities.",
      image: "profile.jpg",
      technologies: ["Next.js", "GraphQL", "Redis", "AWS", "TypeScript"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      highlights: ["5+ platforms", "Team collaboration", "Smart scheduling"]
    }
  ];

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section id="projects" className="py-24 bg-muted/20">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl">
            Featured Projects
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            A selection of my best work, showcasing creativity, technical skill, and attention to detail
          </p>
          <div className="mx-auto w-24 h-1 bg-primary rounded mt-6"></div>
        </motion.div>

        {/* Featured Projects Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="relative">
            <Carousel
              setApi={setApi}
              className="w-full"
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 5000,
                  stopOnInteraction: true,
                }),
              ]}
            >
              <CarouselContent>
                {featuredProjects.map((project) => (
                  <CarouselItem key={project.title}>
                    <Card className="overflow-hidden border-0 bg-card/50 backdrop-blur-sm group hover:shadow-2xl transition-all duration-500">
                      <div className="grid lg:grid-cols-2 gap-8 items-center p-6 lg:p-8">
                        {/* Image */}
                        <motion.div
                          className="relative overflow-hidden rounded-lg"
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="overflow-hidden rounded-lg">
                            <motion.div
                              whileHover={{ scale: 1.1 }}
                              transition={{ duration: 0.6, ease: "easeOut" }}
                              className="w-full h-full"
                            >
                              <ImageWithFallback
                                src={project.image}
                                alt={project.title}
                                className="w-full h-64 md:h-80 object-cover transition-transform duration-700"
                              />
                            </motion.div>
                          </div>
                          
                          {/* Overlay buttons */}
                          <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                            <Button
                              size="sm"
                              className="bg-background/90 text-foreground hover:bg-background backdrop-blur-sm"
                              asChild
                            >
                              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Live Demo
                              </a>
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="bg-background/90 border-border/50 backdrop-blur-sm"
                              asChild
                            >
                              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                <Github className="w-4 h-4 mr-2" />
                                Code
                              </a>
                            </Button>
                          </div>
                        </motion.div>

                        {/* Content */}
                        <div className="space-y-6">
                          <div>
                            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
                              Featured Project
                            </Badge>
                            <h3 className="text-2xl md:text-3xl mb-4">{project.title}</h3>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                              {project.description}
                            </p>
                          </div>
                          
                          {/* Highlights */}
                          <div className="grid grid-cols-3 gap-4">
                            {project.highlights.map((highlight, idx) => (
                              <motion.div
                                key={highlight}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center p-3 rounded-lg bg-muted/50"
                              >
                                <div className="text-sm text-muted-foreground">{highlight}</div>
                              </motion.div>
                            ))}
                          </div>
                          
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <Badge key={tech} variant="secondary" className="text-sm">
                                {tech}
                              </Badge>
                            ))}
                          </div>

                          <div className="flex gap-4 pt-2">
                            <Button className="group" asChild>
                              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                View Project
                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                              </a>
                            </Button>
                            <Button variant="outline" asChild>
                              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                <Github className="w-4 h-4 mr-2" />
                                Source Code
                              </a>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden lg:flex" />
              <CarouselNext className="hidden lg:flex" />
            </Carousel>

            {/* Carousel indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {Array.from({ length: count }, (_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index + 1 === current
                      ? "bg-primary w-8"
                      : "bg-border hover:bg-muted-foreground"
                  }`}
                  onClick={() => api?.scrollTo(index)}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* View More Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button variant="outline" size="lg" className="group">
            View All Projects
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}