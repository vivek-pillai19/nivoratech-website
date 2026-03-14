import React from 'react';
import { motion } from 'framer-motion';
import { Network, Repeat, Activity, Smile, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SystemsBenefits = () => {
  const benefits = [
    {
      icon: Network,
      title: 'Centralize Operations',
      description: 'Centralize business operations across locations.'
    },
    {
      icon: Repeat,
      title: 'Automate Workflows',
      description: 'Automate repetitive administrative workflows.'
    },
    {
      icon: Activity,
      title: 'Real-Time Insights',
      description: 'Gain real-time operational insights.'
    },
    {
      icon: Smile,
      title: 'Enhance Experience',
      description: 'Improve customer experience and response times.'
    },
    {
      icon: TrendingUp,
      title: 'Scale Efficiently',
      description: 'Support business growth without operational chaos.'
    }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="solutions" className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">How Our Systems Help</h2>
          <p className="text-xl text-muted-foreground">
            Transforming complexity into streamlined efficiency.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 justify-center">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 shadow-sm flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <benefit.icon size={24} className="text-primary" strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1 text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
              </div>
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
            onClick={() => scrollToSection('contact')}
            className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-md px-8 py-6 text-lg"
          >
            Book a Strategy Call
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default SystemsBenefits;