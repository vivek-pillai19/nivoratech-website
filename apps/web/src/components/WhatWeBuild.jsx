import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Zap, LineChart, LayoutDashboard, Cloud } from 'lucide-react';

const WhatWeBuild = () => {
  const items = [
    {
      icon: Calendar,
      title: 'AI-driven booking & scheduling systems',
      outcome: 'Optimize capacity and reduce no-shows automatically.'
    },
    {
      icon: Users,
      title: 'Multi-location CRM infrastructure',
      outcome: 'Centralize client data across all your branches.'
    },
    {
      icon: Zap,
      title: 'Intelligent workflow automation engines',
      outcome: 'Eliminate manual tasks and operational bottlenecks.'
    },
    {
      icon: LineChart,
      title: 'Predictive retention & revenue analytics',
      outcome: 'Forecast growth and identify churn before it happens.'
    },
    {
      icon: LayoutDashboard,
      title: 'Enterprise-grade dashboards & reporting',
      outcome: 'Real-time visibility into multi-location performance.'
    },
    {
      icon: Cloud,
      title: 'Scalable multi-tenant SaaS platforms',
      outcome: 'Custom cloud architecture built for your specific industry.'
    }
  ];

  return (
    <section id="solutions" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-3xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">What We Build</h2>
          <p className="text-xl text-muted-foreground">
            Intelligent infrastructure designed for scale and efficiency.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-card border border-border rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-6">
                <item.icon size={24} className="text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground leading-tight">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.outcome}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeBuild;