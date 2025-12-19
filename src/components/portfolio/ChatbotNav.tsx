import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, User, Briefcase, FolderOpen, GraduationCap, Award, Mail, Home, Navigation } from "lucide-react";

const navItems = [
  { id: "hero", label: "Home", icon: Home },
  { id: "about", label: "About Me", icon: User },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "certifications", label: "Certifications", icon: Award },
  { id: "projects", label: "Projects", icon: FolderOpen },
  { id: "contact", label: "Contact", icon: Mail },
];

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
      {/* Floating button - hidden when chat is open */}
      <AnimatePresence mode="wait">
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="relative p-4 rounded-full bg-gradient-to-r from-cyan via-purple to-pink text-primary-foreground shadow-lg glow-cyan"
          >
            <Navigation className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

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
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan to-purple flex items-center justify-center">
                    <Navigation className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm">Quick Nav</h3>
                    <p className="text-xs text-muted-foreground">
                      Jump to any section
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
