import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const WhoWeWorkWith = () => {
  const partners = [
    'Small and growing businesses looking to modernize operations',
    'Multi-location service businesses',
    'Franchise networks expanding across regions',
    'Founder-led companies scaling operations'
  ];

  return (
    <section id="industries" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="bg-muted rounded-3xl p-12 md:p-20 max-w-5xl mx-auto border border-border/50 shadow-sm">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">Who We Work With</h2>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="mt-1 flex-shrink-0">
                  <CheckCircle2 className="text-secondary" size={24} strokeWidth={2} />
                </div>
                <span className="text-lg font-medium text-foreground/90 leading-relaxed">{partner}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeWorkWith;