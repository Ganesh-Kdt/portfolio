import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown, Code2, Server, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Initial loading animation
    const timer1 = setTimeout(() => setIsLoading(false), 1500);
    const timer2 = setTimeout(() => setShowContent(true), 1800);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.05,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    }),
  };

  const floatingVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const name = "Ganesh Kudtarkar";

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "hsl(225 50% 3%)" }}
    >
      {/* Tech grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--cyan) / 0.3) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--cyan) / 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      
      {/* Animated tech dots - very subtle */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-foreground/[0.03]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${0.5 + Math.random() * 1}px`,
              height: `${0.5 + Math.random() * 1}px`,
            }}
            animate={{
              opacity: [0.02, 0.06, 0.02],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>

      {/* Gradient glow spots */}
      <motion.div
        className="absolute top-1/4 -left-20 w-80 h-80 rounded-full opacity-20 blur-3xl"
        style={{ background: "hsl(var(--cyan))" }}
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full opacity-15 blur-3xl"
        style={{ background: "hsl(var(--pink))" }}
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Subtle scanlines */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(var(--foreground)) 2px, hsl(var(--foreground)) 3px)',
        }}
      />
      {/* Loading overlay */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-background flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.5, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative flex flex-col items-center gap-6"
            >
              {/* Modern gradient spinner */}
              <div className="relative w-16 h-16">
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: "conic-gradient(from 0deg, transparent, hsl(var(--cyan)), hsl(var(--purple)), hsl(var(--pink)), transparent)",
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />
                <div className="absolute inset-1 rounded-full bg-background" />
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: "conic-gradient(from 180deg, transparent, hsl(var(--pink)), hsl(var(--purple)), hsl(var(--cyan)), transparent)",
                  }}
                  animate={{ rotate: -360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
                <div className="absolute inset-2 rounded-full bg-background" />
              </div>
              
              {/* Loading text */}
              <motion.div
                className="flex gap-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {["L", "o", "a", "d", "i", "n", "g"].map((letter, i) => (
                  <motion.span
                    key={i}
                    className="text-sm font-mono gradient-text"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.1 }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background gradient orbs with entrance animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, x: -100 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1.5, delay: 1.8, ease: "easeOut" }}
        className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan/20 rounded-full blur-3xl"
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="w-full h-full"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5, x: 100 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1.5, delay: 2, ease: "easeOut" }}
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple/20 rounded-full blur-3xl"
      >
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="w-full h-full"
        />
      </motion.div>

      {/* Floating geometric shapes with staggered entrance */}
      <motion.div
        initial={{ opacity: 0, scale: 0, rotate: 0 }}
        animate={{ opacity: 1, scale: 1, rotate: 45 }}
        transition={{ duration: 0.8, delay: 2.2, type: "spring" }}
        className="absolute top-20 right-20 w-20 h-20 border border-cyan/30"
      >
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="w-full h-full"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 2.4, type: "spring" }}
        className="absolute bottom-32 left-20 w-16 h-16 border border-purple/30 rounded-full"
      >
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="w-full h-full"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 2.6, type: "spring" }}
        className="absolute top-40 left-1/4 w-8 h-8 bg-pink/20 rounded-full blur-sm"
      >
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="w-full h-full"
        />
      </motion.div>

      {/* Particle effects */}
      {showContent && (
        <>
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                opacity: 0, 
                x: Math.random() * window.innerWidth, 
                y: Math.random() * window.innerHeight 
              }}
              animate={{ 
                opacity: [0, 0.5, 0],
                y: [null, Math.random() * -200],
              }}
              transition={{ 
                duration: 3 + Math.random() * 2,
                delay: Math.random() * 2,
                repeat: Infinity,
                repeatDelay: Math.random() * 3
              }}
              className="absolute w-1 h-1 rounded-full bg-cyan/50"
              style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            />
          ))}
        </>
      )}

      <div className="container mx-auto px-6 relative z-10">
        {showContent && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto text-center"
          >
            {/* Greeting with typewriter effect */}
            <motion.div variants={itemVariants} className="mb-4 overflow-hidden">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-cyan font-mono text-lg"
              >
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "auto" }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="inline-block overflow-hidden whitespace-nowrap"
                >
                  &lt;Hello World /&gt;
                </motion.span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="inline-block ml-1 w-2 h-5 bg-cyan"
                />
              </motion.p>
            </motion.div>


            {/* Name with clean modern typography */}
            <motion.h1
              className="text-5xl md:text-7xl font-semibold mb-4 perspective-1000 tracking-tight"
            >
              <span className="inline-flex overflow-hidden">
                {name.split("").map((letter, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline-block gradient-text"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                ))}
              </span>
            </motion.h1>

            {/* Title with slide-up reveal */}
            <motion.div 
              variants={itemVariants} 
              className="mb-6 overflow-hidden"
            >
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, delay: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
                className="text-2xl md:text-3xl text-muted-foreground inline-block"
              >
                Full Stack Engineer
              </motion.span>
            </motion.div>

            {/* Tagline with word-by-word reveal */}
            <motion.div
              variants={itemVariants}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
            >
              {["Building", "scalable,", "efficient,", "and", "innovative", "solutions", "with", "modern", "technologies."].map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.2 + i * 0.08 }}
                  className="inline-block mr-2"
                >
                  {word}
                </motion.span>
              ))}
              <br className="hidden md:block" />
              {["Passionate", "about", "backend", "architecture,", "cloud", "computing,", "and", "creating", "seamless", "user", "experiences."].map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.8 + i * 0.08 }}
                  className="inline-block mr-2"
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>

            {/* Feature highlight cards */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10"
            >
              {[
                { icon: Code2, title: "Clean Code", description: "Writing maintainable & efficient code", color: "cyan" },
                { icon: Server, title: "Backend Architecture", description: "Scalable system design", color: "purple" },
                { icon: Cloud, title: "Cloud Computing", description: "AWS & cloud-native solutions", color: "pink" },
              ].map((feature, i) => (
              <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 2.2 + i * 0.15 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className={`group p-6 rounded-xl bg-muted/30 border border-border/50 hover:border-${feature.color}/50 hover:glow-${feature.color} backdrop-blur-sm transition-all duration-300 flex flex-col items-center text-center`}
                >
                  <div className={`w-12 h-12 rounded-xl bg-${feature.color}/10 flex items-center justify-center mb-4 group-hover:bg-${feature.color}/20 transition-colors`}>
                    <feature.icon className={`w-5 h-5 text-${feature.color}`} />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Social links with staggered pop-in */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center gap-4 mb-12"
            >
              {[
                { href: "https://github.com/ganeshkudtarkar", icon: Github, hoverClass: "hover:border-cyan hover:glow-cyan" },
                { href: "https://linkedin.com/in/ganeshkudtarkar", icon: Linkedin, hoverClass: "hover:border-purple hover:glow-purple" },
                { href: "mailto:ganesh.kudtarkar@gmail.com", icon: Mail, hoverClass: "hover:border-pink hover:glow-pink" },
              ].map((social, i) => (
                <motion.a
                  key={social.href}
                  href={social.href}
                  target={social.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 2.5 + i * 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 rounded-full bg-muted/50 border border-border ${social.hoverClass} transition-all duration-300`}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>


            {/* Scroll indicator arrow */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.2 }}
              className="flex flex-col items-center"
            >
              <motion.button
                onClick={() =>
                  document
                    .getElementById("about")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="relative group cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {/* Glow ring */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan via-purple to-pink opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                
                {/* Arrow icon */}
                <motion.div
                  className="w-12 h-12 flex items-center justify-center"
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ChevronDown className="w-6 h-6 text-muted-foreground group-hover:text-cyan transition-colors duration-300" />
                </motion.div>
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
