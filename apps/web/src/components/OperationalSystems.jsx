import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, LayoutDashboard, Zap, LineChart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const OperationalSystems = () => {
  const systems = [
    {
      icon: Calendar,
      title: 'Booking & Scheduling Platforms',
      description: 'Centralize appointments and scheduling across locations.'
    },
    {
      icon: Users,
      title: 'Customer Relationship Management (CRM) Systems',
      description: 'Unified customer data and interaction tracking.'
    },
    {
      icon: LayoutDashboard,
      title: 'Operations Management Dashboards',
      description: 'Real-time visibility into business operations.'
    },
    {
      icon: Zap,
      title: 'Workflow Automation Platforms',
      description: 'Automate repetitive administrative tasks.'
    },
    {
      icon: LineChart,
      title: 'Analytics and Reporting Systems',
      description: 'Data-driven insights for decision-making.'
    }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="systems" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Operational Systems We Build</h2>
          <p className="text-xl text-muted-foreground">
            Intelligent infrastructure designed for scale and efficiency.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {systems.map((system, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="bg-card border border-border rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-lg bg-muted flex items-center justify-center mb-6">
                <system.icon size={28} className="text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground leading-tight">{system.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{system.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button 
            size="lg"
            onClick={() => scrollToSection('platform')}
            className="bg-white text-foreground border border-border hover:bg-muted transition-colors shadow-sm px-8 py-6 text-lg"
          >
            View Platform Overview
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default OperationalSystems;