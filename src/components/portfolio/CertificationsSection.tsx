import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink, Calendar } from "lucide-react";

const certifications = [
  {
    name: "Microsoft Certified: Azure AI Fundamentals",
    issuer: "Microsoft",
    date: "2025",
    description: "Demonstrated expertise in cloud-based AI workloads focusing on Azure AI Foundry, and integrating AI models into scalable enterprise infrastructure.",
    color: "cyan",
    icon: "☁️",
  },
  {
    name: "Machine Learning Specialization",
    issuer: "Coursera (DeepLearning.AI)",
    date: "2023",
    description: "Comprehensive specialization covering supervised learning, unsupervised learning, and recommendation systems using Python.",
    color: "purple",
    icon: "📈",
  },
];

const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="certifications" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <span className="text-cyan font-mono text-sm mb-4 block">
              // Certifications
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Professional <span className="gradient-text">Credentials</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan to-purple mx-auto rounded-full" />
          </motion.div>

          {/* Certifications grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  scale: 1.03,
                  rotateY: 5,
                  boxShadow:
                    cert.color === "cyan"
                      ? "0 20px 40px hsl(var(--cyan) / 0.2)"
                      : "0 20px 40px hsl(var(--purple) / 0.2)",
                }}
                style={{ perspective: 1000 }}
                className="gradient-border p-6 rounded-2xl group cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl ${
                      cert.color === "cyan"
                        ? "bg-cyan/10 border border-cyan/30"
                        : "bg-purple/10 border border-purple/30"
                    }`}
                  >
                    {cert.icon}
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-cyan transition-colors">
                      {cert.name}
                    </h3>
                    <p
                      className={`text-sm font-medium mb-2 ${
                        cert.color === "cyan" ? "text-cyan" : "text-purple"
                      }`}
                    >
                      {cert.issuer}
                    </p>
                    <p className="text-sm text-muted-foreground mb-3">
                      {cert.description}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      <span>{cert.date}</span>
                    </div>
                  </div>

                  {/* Badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className={`p-2 rounded-full ${
                      cert.color === "cyan"
                        ? "bg-cyan/10 text-cyan"
                        : "bg-purple/10 text-purple"
                    }`}
                  >
                    <Award className="w-5 h-5" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Add more placeholder */}
          {/* <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="text-center text-muted-foreground text-sm mt-8"
          >
          //   More certifications coming soon...
          </motion.p> */}
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;
