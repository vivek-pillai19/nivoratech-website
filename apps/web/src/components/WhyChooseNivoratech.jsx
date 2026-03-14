import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Cpu, Network, Lightbulb, TrendingUp } from 'lucide-react';

const WhyChooseNivoratech = () => {
  const reasons = [
    { icon: Cpu, title: 'AI-First Architecture', desc: 'Built from the ground up to leverage machine learning.' },
    { icon: Network, title: 'Multi-Tenant Expertise', desc: 'Secure data isolation for franchise and multi-branch models.' },
    { icon: Shield, title: 'Secure Infrastructure', desc: 'Enterprise-grade security protocols and compliance.' },
    { icon: Lightbulb, title: 'Consulting Mindset', desc: 'We align technology with your specific business goals.' },
    { icon: TrendingUp, title: 'Long-Term Optimization', desc: 'Continuous refinement based on operational data.' }
  ];

  return (
    <section className="py-24 bg-background border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
              Why Enterprises Choose Nivoratech
            </h2>
            <p className="text-xl text-muted-foreground mb-8 font-light">
              We provide the technical foundation required to scale service operations without friction.
            </p>
            
            <div className="bg-muted p-8 rounded-xl border border-border">
              <h3 className="text-xl font-bold mb-4 text-foreground">Technology Foundation</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div> Cloud-native architecture</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div> Secure API integrations</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div> Scalable backend systems</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div> AI-ready infrastructure</li>
              </ul>
            </div>
          </motion.div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center mb-4">
                  <reason.icon className="text-primary" size={20} strokeWidth={1.5} />
                </div>
                <h4 className="text-lg font-bold mb-2 text-foreground">{reason.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{reason.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseNivoratech;