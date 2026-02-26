import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { ShaderAnimation } from "@/components/ui/shader-animation";
import { GrowthChart } from "@/components/GrowthChart";
import { ArrowRight, Sparkles, Rocket, TrendingUp, BarChart3, Zap, Users, Palette, Share2, LineChart, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import corlithLogo from "@/assets/corlith-logo.png";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";
import { Card } from "@/components/ui/card";

const stats = [
  { value: "142%", label: "Avg. Client Growth" },
  { value: "50+", label: "Businesses Managed" },
  { value: "$2.4M", label: "Revenue Generated" },
  { value: "24/7", label: "AI Operations" },
];

const services = [
  { icon: Users, title: "Client Management", desc: "Automated CRM & outreach" },
  { icon: Palette, title: "Design", desc: "Brand identity & creative assets" },
  { icon: Share2, title: "Social Media", desc: "Content creation & scheduling" },
  { icon: LineChart, title: "Analytics", desc: "Real-time performance tracking" },
  { icon: Zap, title: "Automation", desc: "End-to-end workflow automation" },
  { icon: Lightbulb, title: "Creative Strategy", desc: "AI-driven campaigns that convert" },
];

const timeline = [
  { icon: Rocket, month: "Month 1", revenue: "$2K", desc: "Infrastructure setup & strategy" },
  { icon: TrendingUp, month: "Month 2", revenue: "$12K", desc: "Campaigns live, leads flowing" },
  { icon: BarChart3, month: "Month 3", revenue: "$45K", desc: "Scaling & optimization" },
  { icon: Sparkles, month: "Month 4", revenue: "$150K+", desc: "Full automation, exponential growth" },
];

export default function Index() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Shader Intro */}
      <AnimatePresence>
        {showIntro && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center"
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <ShaderAnimation />
            <motion.div
              className="relative z-10 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <img src={corlithLogo} alt="Corlith" className="h-16 md:h-24" />
              <p className="mt-4 text-muted-foreground text-lg">AI Infrastructure Agency</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Layout>
        {/* Hero with 3D */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            <Card className="w-full bg-background/50 border-border relative overflow-hidden rounded-2xl">
              <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="hsl(var(--primary))" />
              <div className="flex flex-col md:flex-row">
                {/* Left content */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: showIntro ? 0 : 1, y: showIntro ? 30 : 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex-1 p-8 md:p-12 relative z-10 flex flex-col justify-center"
                >
                  <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] text-foreground">
                    We Run Your
                    <br />
                    <span className="text-gradient">Business</span> While
                    <br />
                    You Focus.
                  </h1>
                  <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
                    Corlith builds AI infrastructures using AI and real people to manage your marketing, 
                    social media, clients, design — everything. You focus on what matters.
                  </p>
                  <div className="flex flex-wrap gap-4 mt-10">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all glow-sm"
                    >
                      Get Started <ArrowRight size={16} />
                    </Link>
                    <Link
                      to="/how-we-work"
                      className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border border-border text-foreground font-medium hover:bg-secondary transition-all"
                    >
                      How We Work
                    </Link>
                  </div>
                </motion.div>

                {/* Right - 3D Spline */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: showIntro ? 0 : 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="flex-1 relative h-[400px] md:h-[500px]"
                >
                  <SplineScene 
                    scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                    className="w-full h-full"
                  />
                </motion.div>
              </div>
            </Card>
          </div>
        </section>
        <section className="py-16 px-6 border-y border-border">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-display font-bold text-primary">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Growth Section */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
                From <span className="text-primary">$2K</span> to{" "}
                <span className="text-primary">$150K+</span> in 4 Months
              </h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                Real results from real clients. Our AI infrastructure compounds growth month over month.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Chart */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-6"
              >
                <GrowthChart />
              </motion.div>

              {/* Timeline */}
              <div className="space-y-6">
                {timeline.map((item, i) => (
                  <motion.div
                    key={item.month}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <div className="font-display font-semibold text-foreground">
                        {item.month} — <span className="text-primary">{item.revenue}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
                Everything You Need, <span className="text-primary">Automated</span>
              </h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="glass-hover rounded-2xl p-6 group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <s.icon size={24} />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-foreground">{s.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
                Ready to Scale?
              </h2>
              <p className="mt-4 text-muted-foreground text-lg">
                Let our AI infrastructure handle the heavy lifting while you focus on your vision.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 mt-8 px-10 py-4 rounded-lg bg-primary text-primary-foreground font-medium text-lg hover:bg-primary/90 transition-all glow-sm"
              >
                Start Your Growth <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
}
