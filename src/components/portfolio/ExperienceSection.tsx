import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Briefcase, Calendar, MapPin, ChevronDown } from "lucide-react";

const experiences = [
  {
    company: "Valmar Merchant Services",
    role: "Full Stack Engineer",
    period: "Apr 2024 - Present",
    location: "Mumbai, India",
    description:
      "Leading development of payment processing systems and merchant services platform.",
    achievements: [
      "Architected and implemented microservices handling 1M+ daily transactions",
      "Built real-time reporting dashboards with sub-second latency",
      "Reduced system downtime by 40% through improved error handling",
      "Led migration from monolith to microservices architecture",
    ],
    technologies: ["Golang", "PostgreSQL", "Redis", "AWS", "Docker", "Kubernetes"],
  },
  {
    company: "Filmic Technologies",
    role: "Software Engineer",
    period: "Jun 2023 - Mar 2024",
    location: "Remote",
    description:
      "Developed video streaming and media processing solutions for content creators.",
    achievements: [
      "Built video transcoding pipeline processing 500+ hours of content daily",
      "Implemented CDN optimization reducing load times by 60%",
      "Developed REST APIs serving 50K+ concurrent users",
      "Created automated testing framework achieving 85% code coverage",
    ],
    technologies: ["Python", "FastAPI", "AWS Lambda", "DynamoDB", "FFmpeg"],
  },
  {
    company: "JForce Solutions",
    role: "Software Developer Intern",
    period: "Jan 2023 - May 2023",
    location: "Mumbai, India",
    description:
      "Contributed to enterprise resource planning and business automation tools.",
    achievements: [
      "Developed inventory management module used by 100+ businesses",
      "Optimized database queries reducing response time by 50%",
      "Implemented role-based access control for multi-tenant system",
      "Created comprehensive API documentation for external integrations",
    ],
    technologies: ["Java", "Spring Boot", "MySQL", "React", "TypeScript"],
  },
];

const ExperienceCard = ({
  experience,
  index,
}: {
  experience: (typeof experiences)[0];
  index: number;
}) => {
  const [isExpanded, setIsExpanded] = useState(index === 0);
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
          onClick={() => setIsExpanded(!isExpanded)}
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
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-5 h-5 text-muted-foreground" />
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
              height: isExpanded ? "auto" : 0,
              opacity: isExpanded ? 1 : 0,
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
                    animate={isExpanded ? { opacity: 1, x: 0 } : {}}
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
            <div className="flex flex-wrap gap-2">
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
