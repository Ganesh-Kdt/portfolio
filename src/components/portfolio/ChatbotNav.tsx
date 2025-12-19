import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, User, Briefcase, FolderOpen, GraduationCap, Award, Mail, Home, Sparkles } from "lucide-react";

const navItems = [
  { id: "hero", label: "Home", icon: Home },
  { id: "about", label: "About Me", icon: User },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "certifications", label: "Certifications", icon: Award },
  { id: "projects", label: "Projects", icon: FolderOpen },
  { id: "contact", label: "Contact", icon: Mail },
];

// Custom animated bot face component
const BotFace = ({ isHappy = false, size = "md" }: { isHappy?: boolean; size?: "sm" | "md" }) => {
  const sizeClasses = size === "sm" ? "w-6 h-6" : "w-8 h-8";
  const eyeSize = size === "sm" ? "w-1.5 h-1.5" : "w-2 h-2";
  const mouthHeight = size === "sm" ? "h-1" : "h-1.5";
  
  return (
    <div className={`${sizeClasses} relative`}>
      {/* Face background */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyan via-purple to-pink" />
      
      {/* Inner face */}
      <div className="absolute inset-[2px] rounded-[6px] bg-card flex flex-col items-center justify-center gap-1">
        {/* Eyes */}
        <div className="flex gap-2">
          <motion.div
            className={`${eyeSize} rounded-full bg-cyan`}
            animate={isHappy ? { scaleY: [1, 0.2, 1] } : { y: [0, -1, 0] }}
            transition={{ duration: isHappy ? 0.3 : 2, repeat: Infinity, repeatDelay: isHappy ? 0.5 : 3 }}
          />
          <motion.div
            className={`${eyeSize} rounded-full bg-purple`}
            animate={isHappy ? { scaleY: [1, 0.2, 1] } : { y: [0, -1, 0] }}
            transition={{ duration: isHappy ? 0.3 : 2, repeat: Infinity, repeatDelay: isHappy ? 0.5 : 3, delay: 0.1 }}
          />
        </div>
        
        {/* Mouth */}
        <motion.div
          className={`${mouthHeight} rounded-full bg-gradient-to-r from-cyan to-purple`}
          animate={isHappy ? { width: ["8px", "12px", "8px"] } : { width: ["6px", "8px", "6px"] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      </div>
      
      {/* Antenna */}
      <motion.div
        className="absolute -top-1 left-1/2 -translate-x-1/2 w-0.5 h-2 bg-gradient-to-t from-cyan to-pink"
        animate={{ rotate: [-10, 10, -10] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <motion.div
          className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-pink"
          animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      </motion.div>
    </div>
  );
};

// Floating particles around the button
const FloatingParticle = ({ delay }: { delay: number }) => (
  <motion.div
    className="absolute w-1 h-1 rounded-full bg-cyan"
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0, 1, 0],
      scale: [0, 1, 0],
      x: [0, Math.random() * 30 - 15],
      y: [0, Math.random() * -30 - 10],
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      delay,
      ease: "easeOut",
    }}
  />
);

const ThinkingDots = () => (
  <div className="flex items-center gap-1 py-2">
    {[0, 1, 2].map((i) => (
      <motion.div
        key={i}
        className="w-2 h-2 rounded-full bg-cyan"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 0.6,
          repeat: Infinity,
          delay: i * 0.2,
        }}
      />
    ))}
  </div>
);

const ChatbotNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [isThinking, setIsThinking] = useState(false);
  const [messages, setMessages] = useState<
    { type: "bot" | "user"; content: string }[]
  >([{ type: "bot", content: "Hi! Where would you like to go?" }]);

  const handleNavClick = async (id: string, label: string) => {
    // Add user message
    setMessages((prev) => [...prev, { type: "user", content: label }]);
    setSelectedItem(id);
    setIsThinking(true);

    // Simulate thinking
    await new Promise((resolve) => setTimeout(resolve, 800 + Math.random() * 400));

    // Add bot response
    setMessages((prev) => [
      ...prev,
      { type: "bot", content: `Taking you to ${label}...` },
    ]);
    setIsThinking(false);

    // Wait a moment then scroll
    await new Promise((resolve) => setTimeout(resolve, 300));
    
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }

    // Close chat after navigation
    setTimeout(() => {
      setIsOpen(false);
      // Reset messages after close animation
      setTimeout(() => {
        setMessages([{ type: "bot", content: "Hi! Where would you like to go?" }]);
        setSelectedItem(null);
      }, 300);
    }, 500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      {/* Floating particles */}
      {[0, 0.5, 1, 1.5].map((delay, i) => (
        <FloatingParticle key={i} delay={delay} />
      ))}
      
      {/* Floating button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-3 rounded-2xl bg-gradient-to-r from-cyan via-purple to-pink text-primary-foreground shadow-lg glow-cyan overflow-visible"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="bot"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <BotFace size="sm" isHappy={false} />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Sparkle decoration */}
        <motion.div
          className="absolute -top-1 -right-1"
          animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <Sparkles className="w-3 h-3 text-pink" />
        </motion.div>
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute bottom-20 right-0 w-80 max-h-[500px] rounded-2xl overflow-hidden gradient-border"
          >
            <div className="bg-card">
              {/* Header */}
              <div className="p-4 border-b border-border bg-gradient-to-r from-cyan/10 via-purple/10 to-pink/10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center relative overflow-visible">
                    <BotFace isHappy={!isThinking} />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm">Nav Buddy</h3>
                    <p className="text-xs text-muted-foreground">
                      Your friendly guide ✨
                    </p>
                  </div>
                  <div className="ml-auto flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <button
                      onClick={() => setIsOpen(false)}
                      className="p-1 rounded-full hover:bg-muted transition-colors"
                      aria-label="Close chat"
                    >
                      <X className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="p-4 max-h-48 overflow-y-auto space-y-3">
                {messages.map((msg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${
                      msg.type === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm ${
                        msg.type === "user"
                          ? "bg-gradient-to-r from-cyan to-purple text-primary-foreground rounded-br-sm"
                          : "bg-muted text-foreground rounded-bl-sm"
                      }`}
                    >
                      {msg.content}
                    </div>
                  </motion.div>
                ))}
                {isThinking && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-start"
                  >
                    <div className="bg-muted px-4 py-2 rounded-2xl rounded-bl-sm">
                      <ThinkingDots />
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Navigation options */}
              <div className="p-4 border-t border-border bg-muted/30">
                <p className="text-xs text-muted-foreground mb-3">
                  Quick navigation:
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleNavClick(item.id, item.label)}
                      disabled={isThinking}
                      className="flex items-center gap-2 px-3 py-2 text-xs rounded-lg bg-background border border-border hover:border-cyan hover:text-cyan transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <item.icon className="w-3 h-3" />
                      {item.label}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatbotNav;
