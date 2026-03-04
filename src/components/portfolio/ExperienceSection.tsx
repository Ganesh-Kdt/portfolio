import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Briefcase, Calendar, MapPin, ChevronDown } from "lucide-react";

const experiences = [
  {
    company: "Valmar Merchant Services",
    role: "Software Engineer Intern",
    period: "Sep 2025 - Dec 2025",
    location: "Buffalo, NY",
    description:
      "Contributed to the core payment processing platform by building high performance backend pipelines.",
    achievements: [
      "Slashed batch processing time to under 300ms for a platform-wide transaction limit reset system by engineering a concurrent 8-worker pool using Golang, DynamoDB, and AWS EventBridge",
      "Saved 5+ hours of manual testing weekly by integrating Cypress E2E regression suites into GitHub Actions",
      "Reduced manual processing for recurring payments by building a transaction duplication feature in React"
    ],
    technologies: ["Golang", "DynamoDB", "AWS Lambda", "CloudWatch", "Github Actions"],
  },
  {
    company: "Filmic Technologies",
    role: "Software Engineer Intern",
    period: "May 2025 - Aug 2025",
    location: "Remote",
    description:
      "Built foundational infrastructure to transform an early-stage prototype into a production-ready application.",
    achievements: [
      "Developed the platform's first media storage pipeline using AWS S3 and secure REST APIs from scratch",
      "Built company's first internal pre-production environment on AWS EC2 with Nginx and PM2"
    ],
    technologies: ["NestJS", "Next.js", "AWS EC2", "AWS S3", "TypeScript"],
  },
  {
    company: "JForce Solutions",
    role: "Software Engineer",
    period: "Oct 2021 - Apr 2024",
    location: "Mumbai, India",
    description:
      "Engineered and scaled enterprise backend systems focusing on multithreaded data processing and massive workflow automation.",
    achievements: [
      "Scaled daily order volume by 13x by automating a Java/Spring Boot system that cut manual processing from 10 minutes to under 1 second",
      "Reduced large file upload times by 85% (10 minutes to 90 seconds) using Java multithreading and JDBC batch updates",
      "Boosted average user session time by 25% by developing a scalable chat application for 3,000+ users",
      "Reduced administrative time by over 70% by architecting an automated assessment workflow with React, Spring Boot, and external API webhooks",
    ],
    technologies: ["Java", "Spring Boot", "MySQL", "React", "JUnit", "Webhooks"],
  },
];

const ExperienceCard = ({
  experience,
  index,
}: {
  experience: (typeof experiences)[0];
  index: number;
}) => {
  // const [isExpanded, setIsExpanded] = useState(index <= 2);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative"
    >
      {/* Timeline connector */}
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan via-purple to-pink transform md:-translate-x-1/2 hidden md:block" />

      {/* Timeline dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
        className="absolute left-0 md:left-1/2 top-8 w-4 h-4 rounded-full bg-cyan glow-cyan transform md:-translate-x-1/2 -translate-x-1/2 hidden md:block"
      />

      <div
        className={`md:w-[calc(50%-2rem)] ${
          index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
        }`}
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="gradient-border p-6 rounded-2xl cursor-pointer"
          // onClick={() => setIsExpanded(!isExpanded)}
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-foreground">
                {experience.role}
              </h3>
              <p className="text-cyan font-medium">{experience.company}</p>
            </div>
            <motion.div
              // animate={{ rotate: isExpanded ? 180 : 0 }}
              // transition={{ duration: 0.3 }}
            >
              {/* <ChevronDown className="w-5 h-5 text-muted-foreground" /> */}
            </motion.div>
          </div>

          {/* Meta info */}
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {experience.period}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {experience.location}
            </span>
          </div>

          <p className="text-muted-foreground mb-4">{experience.description}</p>

          {/* Expandable content */}
          <motion.div
            initial={false}
            animate={{
              // height: isExpanded ? "auto" : 0,
              // opacity: isExpanded ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            {/* Achievements */}
            <div className="mb-4">
              <h4 className="text-sm font-mono text-purple uppercase tracking-wider mb-2">
                Key Achievements
              </h4>
              <ul className="space-y-2">
                {experience.achievements.map((achievement, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="text-cyan mt-1">▹</span>
                    {achievement}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/5">
              {experience.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs rounded-full bg-muted border border-border"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan font-mono text-sm mb-4 block">
            // Experience
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Where I've <span className="gradient-text">Worked</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan to-purple mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative space-y-12">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
