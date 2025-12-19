import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Github, ExternalLink, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Query Classifier",
    description:
      "An ML-powered system that classifies user queries into categories for intelligent routing and processing. Uses NLP techniques for accurate text classification.",
    technologies: ["Python", "TensorFlow", "FastAPI", "PostgreSQL"],
    github: "https://github.com/ganeshkudtarkar/query-classifier",
    demo: null,
    featured: true,
    category: "AI/ML",
  },
  {
    title: "QuizWhiz",
    description:
      "AI-powered quiz generation platform that creates personalized quizzes from any topic or uploaded content. Features adaptive difficulty and detailed analytics.",
    technologies: ["React", "TypeScript", "OpenAI API", "Node.js", "MongoDB"],
    github: "https://github.com/ganeshkudtarkar/quizwhiz",
    demo: null,
    featured: true,
    category: "AI/ML",
  },
  {
    title: "Text Chat Application",
    description:
      "Real-time chat application built from scratch using C++ and socket programming. Implements a custom protocol for message handling and multi-client support.",
    technologies: ["C++", "Socket Programming", "Multi-threading", "TCP/IP"],
    github: "https://github.com/ganeshkudtarkar/text-chat",
    demo: null,
    featured: true,
    category: "Networking",
  },
];

const ProjectCard = ({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        perspective: 1000,
        transformStyle: "preserve-3d",
      }}
      className="h-full"
    >
      <motion.div
        animate={{
          rotateX: isHovered ? 5 : 0,
          rotateY: isHovered ? -5 : 0,
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ duration: 0.3 }}
        className="gradient-border p-6 rounded-2xl h-full flex flex-col relative overflow-hidden group"
      >
        {/* Glow effect on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-cyan/5 via-transparent to-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />

        {/* Header */}
        <div className="flex items-start justify-between mb-4 relative z-10">
          <motion.div
            animate={{ rotate: isHovered ? 10 : 0 }}
            transition={{ duration: 0.3 }}
            className="p-3 rounded-xl bg-muted border border-border"
          >
            <Folder className="w-6 h-6 text-cyan" />
          </motion.div>

          <div className="flex gap-2">
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-lg bg-muted/50 border border-border hover:border-cyan transition-colors"
              >
                <Github className="w-5 h-5" />
              </motion.a>
            )}
            {project.demo && (
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-lg bg-muted/50 border border-border hover:border-purple transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
              </motion.a>
            )}
          </div>
        </div>

        {/* Category badge */}
        <span className="inline-block w-fit px-3 py-1 text-xs font-mono rounded-full bg-cyan/10 text-cyan border border-cyan/30 mb-3">
          {project.category}
        </span>

        {/* Content */}
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-cyan transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 flex-1">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mt-auto relative z-10">
          {project.technologies.map((tech) => (
            <motion.span
              key={tech}
              whileHover={{ scale: 1.05 }}
              className="px-2 py-1 text-xs font-mono rounded bg-muted/50 text-muted-foreground"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan font-mono text-sm mb-4 block">
            // Projects
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Things I've <span className="gradient-text">Built</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan to-purple mx-auto rounded-full" />
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* View more hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground text-sm mb-4">
            More projects on GitHub
          </p>
          <Button
            variant="outline"
            className="border-cyan/50 hover:border-cyan hover:bg-cyan/10 transition-all"
            asChild
          >
            <a
              href="https://github.com/ganeshkudtarkar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4 mr-2" />
              View All Projects
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
