import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const education = [
  {
    institution: "University at Buffalo, The State University of New York",
    degree: "Master of Science",
    field: "Computer Science and Engineering",
    period: "Aug 2024 - Dec 2025",
    location: "Buffalo, NY",
    highlights: [
      "Pursuing advanced studies in computer science",
      "Focus on software engineering and systems design",
      "Participated in UB AI for Good Hackathon",
    ],
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="education" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="text-cyan font-mono text-sm mb-4 block">
              // Education
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Academic <span className="gradient-text">Background</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan to-purple mx-auto rounded-full" />
          </motion.div>

          {/* Education cards */}
          <div className="max-w-3xl mx-auto">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="gradient-border p-8 rounded-2xl"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Icon */}
                  <motion.div
                    initial={{ rotate: -10 }}
                    animate={{ rotate: [0, 5, 0, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="flex-shrink-0"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan/20 to-purple/20 border border-cyan/30 flex items-center justify-center">
                      <GraduationCap className="w-8 h-8 text-cyan" />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-lg text-purple font-medium mb-2">
                      {edu.field}
                    </p>
                    <p className="text-cyan font-medium mb-4">
                      {edu.institution}
                    </p>

                    {/* Meta */}
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {edu.location}
                      </span>
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-2">
                      {edu.highlights.map((highlight, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.5 + i * 0.1 }}
                          className="flex items-start gap-2 text-muted-foreground"
                        >
                          <span className="text-cyan mt-1">▹</span>
                          {highlight}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
