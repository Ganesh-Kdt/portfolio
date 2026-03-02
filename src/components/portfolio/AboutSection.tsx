import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = {
  languages: ["Golang", "Java", "Python", "TypeScript", "JavaScript"],
  frameworks: ["React", "Spring Boot", "NestJS", "Next.js", "FastAPI"],
  databases: ["PostgreSQL", "MySQL", "Redis", "DynamoDB"],
  cloud: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"],
  tools: ["Git", "REST APIs", "Microservices", "Event-Driven Architecture"],
};

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="text-cyan font-mono text-sm mb-4 block">
              // About Me
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Who I <span className="gradient-text">Am</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan to-purple mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Bio */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="gradient-border p-6 rounded-2xl">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  I'm a <span className="text-cyan">Software Engineer</span> with over 3 years of full-time experience building backend systems,
                  my work spans everything from enterprise Java Spring Boot microservices to high-throughput Golang transaction pipelines.
                  </p>
              </div>

              <div className="gradient-border p-6 rounded-2xl">
                <p className="text-muted-foreground text-lg leading-relaxed">
                I don't just write backend code I build the <span className="text-purple">cloud infrastructure</span> it lives on.
                Building <span className="text-pink">event-driven pipelines</span> with AWS Lambda and DynamoDB, and configuring EC2 environments from scratch.
                Lately I've been diving deep into Terraform to automate deployments and design systems that basically run themselves.</p>
              </div>

              <div className="gradient-border p-6 rounded-2xl">
                <p className="text-muted-foreground text-lg leading-relaxed">
                When my code is finally pushed, my favorite way to unwind? Rewatching Modern Family. Watching Phil Dunphy's chaos is the perfect therapy after a long day of debugging. Sometimes I balance it out by hitting the pavement for a long run.
                </p>
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div variants={itemVariants} className="space-y-8">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category}>
                  <h3 className="text-sm font-mono text-cyan uppercase tracking-wider mb-3">
                    {category}
                  </h3>
                  <motion.div
                    variants={containerVariants}
                    className="flex flex-wrap gap-2"
                  >
                    {skillList.map((skill, index) => (
                      <motion.span
                        key={skill}
                        variants={skillVariants}
                        whileHover={{
                          scale: 1.05,
                          boxShadow: "0 0 20px hsl(var(--cyan) / 0.3)",
                        }}
                        className="px-4 py-2 rounded-full text-sm bg-muted/50 border border-border hover:border-cyan transition-all duration-300 cursor-default"
                        style={{ transitionDelay: `${index * 50}ms` }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
