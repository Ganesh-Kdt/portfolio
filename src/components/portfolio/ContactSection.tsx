import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Send, Github, Linkedin, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    formData.append("access_key", "96d5567e-b57c-4fc0-b261-355aa50145a9");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thanks for reaching out. I'll get back to you soon!",
        });
        form.reset();
      } else {
        toast({
          title: "Error",
          description: data.message || "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-muted/20 via-background to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="text-cyan font-mono text-sm mb-4 block">
              // Contact
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan to-purple mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground max-w-xl mx-auto">
              Have a project in mind or just want to chat? I'm always open to
              discussing new opportunities and ideas.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact info */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Quick links */}
              <div className="gradient-border p-6 rounded-2xl">
                <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                <div className="space-y-4">
                  <motion.a
                    href="mailto:gkudtarkar8@gmail.com"
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 text-muted-foreground hover:text-cyan transition-colors"
                  >
                    <div className="p-2 rounded-lg bg-cyan/10 border border-cyan/30">
                      <Mail className="w-5 h-5 text-cyan" />
                    </div>
                    <span>gkudtarkar8@gmail.com</span>
                  </motion.a>
                  <motion.a
                    href="https://github.com/ganeshkudtarkar"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 text-muted-foreground hover:text-purple transition-colors"
                  >
                    <div className="p-2 rounded-lg bg-purple/10 border border-purple/30">
                      <Github className="w-5 h-5 text-purple" />
                    </div>
                    <span>github.com/ganeshkudtarkar</span>
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com/in/ganeshkudtarkar"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 text-muted-foreground hover:text-pink transition-colors"
                  >
                    <div className="p-2 rounded-lg bg-pink/10 border border-pink/30">
                      <Linkedin className="w-5 h-5 text-pink" />
                    </div>
                    <span>linkedin.com/in/ganeshkudtarkar</span>
                  </motion.a>
                </div>
              </div>

              {/* Location */}
              <div className="gradient-border p-6 rounded-2xl">
                <h3 className="text-lg font-bold mb-4">Location</h3>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="p-2 rounded-lg bg-muted border border-border">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span>Mumbai, India</span>
                </div>
              </div>
            </motion.div>

            {/* Contact form */}
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="gradient-border p-6 rounded-2xl space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Name</label>
                    <Input
                      name="name"
                      placeholder="John Doe"
                      required
                      className="bg-muted/50 border-border focus:border-cyan transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      className="bg-muted/50 border-border focus:border-cyan transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Subject</label>
                  <Input
                    name="subject"
                    placeholder="Project collaboration"
                    required
                    className="bg-muted/50 border-border focus:border-cyan transition-colors"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea
                    name="message"
                    placeholder="Tell me about your project or idea..."
                    required
                    rows={5}
                    className="bg-muted/50 border-border focus:border-cyan transition-colors resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan via-purple to-pink text-primary-foreground font-semibold py-6 rounded-xl hover:opacity-90 transition-opacity"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full"
                    />
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.5 }}
        className="mt-24 text-center text-sm text-muted-foreground"
      >
        <p>Designed & Built by Ganesh Kudtarkar</p>
        <p className="mt-1">© {new Date().getFullYear()} All rights reserved.</p>
      </motion.footer>
    </section>
  );
};

export default ContactSection;
