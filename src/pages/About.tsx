import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Bot, Users, Heart, Shield } from "lucide-react";

const values = [
  { icon: Bot, title: "AI-First", desc: "We leverage cutting-edge AI to deliver results that would take teams of 20+ people." },
  { icon: Users, title: "Human-Backed", desc: "Real strategists, designers, and marketers oversee every AI operation for quality." },
  { icon: Heart, title: "Client-Obsessed", desc: "Your growth is our growth. We measure success by your revenue, not our hours." },
  { icon: Shield, title: "Transparent", desc: "Real-time dashboards, weekly reports, and full visibility into every operation." },
];

export default function About() {
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
              About <span className="text-primary">Corlith</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We're an AI infrastructure agency that combines artificial intelligence with real human talent 
              to run your entire business operations — marketing, design, social media, client management, 
              and everything in between.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8 md:p-12 mb-20 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">Our Mission</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
              To free business owners from operational overwhelm by building intelligent, self-running 
              infrastructures that deliver real growth. We believe the future of business is human creativity 
              amplified by AI execution.
            </p>
          </motion.div>

          {/* Values */}
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-hover rounded-2xl p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <v.icon size={22} />
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground">{v.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
