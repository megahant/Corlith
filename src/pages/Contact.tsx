import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Send, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Layout>
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground">
              Let's <span className="text-primary">Talk</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
              Ready to automate your business? Tell us about your goals and we'll build the infrastructure.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2 space-y-8"
            >
              {[
                { icon: Mail, label: "Email", value: "corlithsystems@gmail.com" },
                { icon: MapPin, label: "Location", value: "Remote — Worldwide" },
                { icon: Clock, label: "Response Time", value: "Under 24 hours" },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <item.icon size={18} />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{item.label}</div>
                    <div className="text-foreground font-medium">{item.value}</div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-3"
            >
              {submitted ? (
                <div className="glass rounded-2xl p-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                    <Send size={24} />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-foreground">Message Sent!</h3>
                  <p className="text-muted-foreground mt-2">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form
                  action="https://formspree.io/f/mjgelodb"
                  method="POST"
                  className="glass rounded-2xl p-8 space-y-6"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-muted-foreground mb-1.5 block">Name</label>
                      <input
                        required
                        type="text"
                        name="name"
                        className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground mb-1.5 block">Email</label>
                      <input
                        required
                        type="email"
                        name="email"
                        className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-1.5 block">Business Type</label>
                    <input
                      type="text"
                      name="business_type"
                      className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                      placeholder="e.g., E-commerce, SaaS, Agency"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-1.5 block">Tell us about your goals</label>
                    <textarea
                      required
                      rows={4}
                      name="message"
                      className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
                      placeholder="What would you like Corlith to manage for you?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all glow-sm flex items-center justify-center gap-2"
                  >
                    Send Message <Send size={16} />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
