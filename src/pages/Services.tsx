import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { SpriteIcon } from "@/components/SpriteIcon";

const services = [
  {
    row: 3, col: 1,
    title: "AI Marketing",
    desc: "Data-driven campaigns powered by machine learning. We create, test, and optimize ads across all platforms automatically.",
    features: ["Google & Meta Ads", "SEO Automation", "Email Campaigns", "A/B Testing"],
  },
  {
    row: 2, col: 0,
    title: "Client Management",
    desc: "Automated CRM pipelines that nurture leads, follow up, and close deals while you sleep.",
    features: ["Lead Scoring", "Auto Follow-ups", "Pipeline Management", "Reporting"],
  },
  {
    row: 2, col: 1,
    title: "Design & Branding",
    desc: "Full brand identity packages and ongoing creative assets — logos, social graphics, presentations, and more.",
    features: ["Brand Identity", "Social Graphics", "Pitch Decks", "UI/UX Design"],
  },
  {
    row: 2, col: 2,
    title: "Social Media",
    desc: "Content creation, scheduling, community management, and growth strategies across all platforms.",
    features: ["Content Calendar", "Community Mgmt", "Influencer Outreach", "Analytics"],
  },
  {
    row: 3, col: 2,
    title: "Website & Funnels",
    desc: "High-converting websites and sales funnels built with AI-optimized copy and design.",
    features: ["Landing Pages", "Sales Funnels", "Conversion Optimization", "Analytics"],
  },
  {
    row: 3, col: 3,
    title: "Outreach & Sales",
    desc: "AI-powered cold outreach, warm sequences, and partnership development at scale.",
    features: ["Cold Email", "LinkedIn Outreach", "Partnership Dev", "Deal Closing"],
  },
  {
    row: 3, col: 1,
    title: "Content Production",
    desc: "Video editing, podcast production, blog writing, and multimedia content creation.",
    features: ["Video Editing", "Blog Writing", "Podcast Production", "Newsletters"],
  },
  {
    row: 2, col: 3,
    title: "Analytics & Reporting",
    desc: "Real-time dashboards tracking every metric that matters. Weekly reports with actionable insights.",
    features: ["Custom Dashboards", "Weekly Reports", "ROI Tracking", "Forecasting"],
  },
  {
    row: 3, col: 0,
    title: "Full Automation",
    desc: "End-to-end workflow automation connecting all your tools into a seamless, self-running operation.",
    features: ["Workflow Design", "Tool Integration", "Process Automation", "Monitoring"],
  },
];

export default function Services() {
  return (
    <Layout>
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything your business needs to grow — managed by AI and backed by real people.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass-hover rounded-2xl p-6 group"
              >
                <SpriteIcon row={s.row} col={s.col} size={48} className="mb-4 rounded-xl" />
                <h3 className="text-lg font-display font-semibold text-foreground">{s.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{s.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.features.map((f) => (
                    <span
                      key={f}
                      className="text-xs px-2.5 py-1 rounded-full bg-primary/5 text-primary/80 border border-primary/10"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
