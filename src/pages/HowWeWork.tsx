import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Search, Cpu, Plug, Rocket, BarChart3, Coffee } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discovery & Audit",
    desc: "We analyze your current business operations, identify bottlenecks, and map out growth opportunities using AI-powered diagnostics.",
    detail: "Deep-dive into your marketing, sales pipeline, brand, and operations.",
  },
  {
    icon: Cpu,
    title: "AI Infrastructure Build",
    desc: "We design and deploy custom AI systems tailored to your business — automating marketing, client management, and creative workflows.",
    detail: "Custom AI agents, CRM pipelines, content engines, and analytics dashboards.",
  },
  {
    icon: Plug,
    title: "Integration & Training",
    desc: "Our team of real people ensures seamless integration with your existing tools. We train the AI on your brand voice and processes.",
    detail: "Works with your existing stack — Slack, HubSpot, Shopify, and more.",
  },
  {
    icon: Rocket,
    title: "Launch & Scale",
    desc: "We go live. AI handles day-to-day operations while our human team monitors, optimizes, and scales your growth.",
    detail: "24/7 AI operations backed by human oversight.",
  },
  {
    icon: BarChart3,
    title: "Optimize & Report",
    desc: "Monthly performance reviews, A/B testing, and continuous optimization ensure compounding results.",
    detail: "Transparent reporting with real-time dashboards.",
  },
  {
    icon: Coffee,
    title: "You Focus, We Deliver",
    desc: "While you work on your craft, we handle marketing, social media, client outreach, design, and everything in between.",
    detail: "Your business runs itself — with human quality and AI speed.",
  },
];

export default function HowWeWork() {
  return (
    <Layout>
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground">
              How We <span className="text-primary">Work</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              A proven process that transforms businesses from manual operations to AI-powered growth machines.
            </p>
          </motion.div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-6 mb-16 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1.5 mt-6 glow-sm z-10" />

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                  <div className={`glass-hover rounded-2xl p-6 ${i % 2 === 0 ? "md:ml-auto" : ""} max-w-md`}>
                    <div className={`flex items-center gap-3 mb-3 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        <step.icon size={20} />
                      </div>
                      <span className="text-xs text-muted-foreground font-medium uppercase tracking-widest">
                        Step {i + 1}
                      </span>
                    </div>
                    <h3 className="text-xl font-display font-semibold text-foreground">{step.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{step.desc}</p>
                    <p className="text-xs text-muted-foreground/60 mt-3 italic">{step.detail}</p>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
