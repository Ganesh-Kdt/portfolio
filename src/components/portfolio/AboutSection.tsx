import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = {
  languages: ["Golang", "Java", "Python", "TypeScript", "JavaScript", "C++", "SQL"],
  frameworks: ["React", "Spring Boot", "NestJS", "Next.js", "FastAPI", "Gin", "Fiber"],
  databases: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "DynamoDB"],
  cloud: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"],
  tools: ["Git", "GraphQL", "REST APIs", "Microservices", "Event-Driven Architecture"],
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
                  I'm a <span className="text-foreground font-medium">Software Engineer</span> · <span className="text-purple font-medium">AI</span> & <span className="text-cyan font-medium">Cloud</span> with 
                  over 2 years of experience building scalable applications. Currently at{" "}
                  <span className="text-cyan">Valmar Merchant Services</span>, I specialize in 
                  designing and implementing robust backend systems using Golang and modern frameworks.
                </p>
              </div>

              <div className="gradient-border p-6 rounded-2xl">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  My expertise spans across <span className="text-purple">microservices architecture</span>,{" "}
                  <span className="text-pink">cloud infrastructure</span>, and building 
                  high-performance APIs. I'm passionate about clean code, system design, and 
                  creating solutions that make a real impact.
                </p>
              </div>

              <div className="gradient-border p-6 rounded-2xl">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, contributing to 
                  open-source projects, or diving deep into machine learning and AI applications.
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
