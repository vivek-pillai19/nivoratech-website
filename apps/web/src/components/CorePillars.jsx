import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, CloudCog, Target, Server } from 'lucide-react';

const CorePillars = () => {
  const pillars = [
    {
      icon: BrainCircuit,
      title: 'AI & Automation Engine',
      description: 'Proprietary frameworks powering predictive decision-making and intelligent workflow automation.'
    },
    {
      icon: CloudCog,
      title: 'Vertical SaaS Platforms',
      description: 'Cloud-native, multi-tenant systems built for scalability, control, and enterprise performance.'
    },
    {
      icon: Target,
      title: 'Strategic Implementation',
      description: 'End-to-end architecture, deployment, and optimization aligned with measurable business outcomes.'
    },
    {
      icon: Server,
      title: 'Technology Foundation',
      description: 'Cloud-native architecture, Secure API integrations, Scalable backend systems, AI-ready infrastructure.'
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-3xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Core Pillars</h2>
          <p className="text-xl text-muted-foreground">
            The foundational elements of our operational ecosystems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -2 }}
              className="bg-card border border-border border-l-4 border-l-primary rounded-r-xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                  <pillar.icon size={24} className="text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">{pillar.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CorePillars;