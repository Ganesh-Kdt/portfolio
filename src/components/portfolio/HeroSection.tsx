import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden noise-bg"
    >
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
              className="relative"
            >
              {/* Animated logo/loader */}
              <motion.div
                className="w-20 h-20 rounded-full border-2 border-cyan"
                animate={{ 
                  rotate: 360,
                  borderColor: ["hsl(var(--cyan))", "hsl(var(--purple))", "hsl(var(--pink))", "hsl(var(--cyan))"]
                }}
                transition={{ 
                  rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                  borderColor: { duration: 2, repeat: Infinity }
                }}
              />
              <motion.div
                className="absolute inset-0 w-20 h-20 rounded-full border-2 border-purple/50"
                animate={{ rotate: -360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                💻
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

            {/* Profile photo with dramatic entrance */}
            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 100 }}
              className="w-32 h-32 mx-auto mb-8 rounded-full gradient-border overflow-hidden"
            >
              <motion.div 
                className="w-full h-full bg-muted flex items-center justify-center text-4xl"
                whileHover={{ scale: 1.1 }}
              >
                👨‍💻
              </motion.div>
            </motion.div>

            {/* Name with 3D letter animation */}
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-4 perspective-1000"
            >
              <span className="gradient-text inline-flex overflow-hidden">
                {name.split("").map((letter, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline-block"
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
              {/* {["Building", "scalable,", "efficient,", "and", "innovative", "solutions", "with", "modern", "technologies."].map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.2 + i * 0.08 }}
                  className="inline-block mr-2"
                >
                  {word}
                </motion.span>
              ))} */}
              {"I write clean code and build backend systems that don't crash when you need them most. I love to turn sluggish, minute-long processes into snappy, sub-second operations in production. When I’m not staring at terminal windows or AWS consoles, you will find me on a soccer field or running trails."
                .split(" ")
                .map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    // Note: With a longer text, you might want to slightly decrease the delay multiplier (e.g., from 0.08 to 0.03) 
                    // so the animation doesn't take too long to finish, but that's totally up to your preference!
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

            {/* Social links with staggered pop-in */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center gap-4 mb-12"
            >
              {[
                { href: "https://github.com/ganeshkudtarkar", icon: Github, color: "cyan", glow: "glow-cyan" },
                { href: "https://linkedin.com/in/ganeshkudtarkar", icon: Linkedin, color: "purple", glow: "glow-purple" },
                { href: "mailto:ganesh.kudtarkar@gmail.com", icon: Mail, color: "pink", glow: "" },
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
                  className={`p-3 rounded-full bg-muted/50 border border-border hover:border-${social.color} ${social.glow ? `hover:${social.glow}` : "hover:shadow-[0_0_20px_hsl(330_80%_65%/0.3)]"} transition-all duration-300`}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>

            {/* CTA Button with dramatic entrance */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 2.8, type: "spring" }}
              className="mb-24"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan via-purple to-pink text-primary-foreground font-semibold px-8 py-6 text-lg rounded-full hover:opacity-90 transition-opacity relative overflow-hidden group"
                  onClick={() =>
                    document
                      .getElementById("about")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-pink via-purple to-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <span className="relative z-10">Explore My Work</span>
                </Button>
              </motion.div>
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
                
                {/* Outer ring */}
                <motion.div
                  className="w-12 h-12 rounded-full border-2 border-muted-foreground/30 group-hover:border-cyan/50 flex items-center justify-center transition-colors duration-300"
                  animate={{ 
                    boxShadow: [
                      "0 0 0 0 hsl(var(--cyan) / 0)",
                      "0 0 0 8px hsl(var(--cyan) / 0.1)",
                      "0 0 0 0 hsl(var(--cyan) / 0)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  {/* Arrow icon */}
                  <motion.div
                    animate={{ y: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ChevronDown className="w-6 h-6 text-muted-foreground group-hover:text-cyan transition-colors duration-300" />
                  </motion.div>
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
