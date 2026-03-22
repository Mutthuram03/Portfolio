import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import AnimatedBackground from "./AnimatedBackground";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (values) => {
    console.log(values);
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    form.reset();
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "srmutthuram2007@gmail.com",
      href: "mailto:srmutthuram2007@gmail.com",
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8344232377",
      href: "tel:+918344232377",
      gradient: "from-green-500 to-emerald-600",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chennai, Tamil Nadu, India",
      href: "#",
      gradient: "from-purple-500 to-pink-600",
    },
  ];

  return (
    <section id="contact" className="relative py-20 lg:py-32 overflow-hidden">
      <AnimatedBackground />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Get In Touch
            </motion.h2>
            <motion.div
              className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-8"
              initial={{ width: 0 }}
              animate={inView ? { width: 80 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
            <motion.p
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Feel free to reach out for collaborations, opportunities, or just to connect!
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.label}
                href={info.href}
                className="glass-effect rounded-2xl p-8 hover:glow-effect transition-all duration-300 group block"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
              >
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${info.gradient} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform`}
                >
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-center text-muted-foreground">
                  {info.label}
                </h3>
                <p className="text-foreground text-center break-words group-hover:gradient-text transition-all">
                  {info.value}
                </p>
              </motion.a>
            ))}
          </div>

          {/* Contact Form */}
          <motion.div
            className="mt-16 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <div className="glass-effect rounded-2xl p-8 md:p-12">
              <div className="flex items-center gap-2 text-muted-foreground mb-8 justify-center">
                <Send className="w-5 h-5" />
                <p className="text-lg">Let's build something amazing together!</p>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="your.email@example.com" 
                            {...field} 
                            className="bg-background/50 border-primary/20 focus:border-primary"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="+91 1234567890" 
                            {...field}
                            className="bg-background/50 border-primary/20 focus:border-primary"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell me about your project or just say hi!" 
                            {...field}
                            rows={6}
                            className="bg-background/50 border-primary/20 focus:border-primary resize-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" size="lg" className="w-full text-lg border-primary glow-effect">Send Message</Button>
                </form>
              </Form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;