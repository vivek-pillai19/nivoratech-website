import React from 'react';
import { motion } from 'framer-motion';

const WhoWeAre = () => {
  return (
    <section id="about" className="py-24 bg-background border-y border-border/50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">Who We Are</h2>
            <div className="space-y-6 text-xl text-muted-foreground leading-relaxed font-light">
              <p className="text-foreground font-medium text-2xl">
                Nivoratech combines scalable SaaS architecture with strategic AI implementation.
              </p>
              <p>
                We don't just deploy software — we architect intelligent operational ecosystems designed for long-term growth. Our approach bridges the gap between off-the-shelf tools and custom enterprise development.
              </p>
              <p>
                By focusing on data centralization and workflow automation, we empower service businesses to scale without proportionally increasing their operational overhead.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-card border border-border rounded-2xl p-2 shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b" 
                alt="Clean dashboard interface"
                className="rounded-xl w-full h-auto object-cover opacity-90"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-muted rounded-full -z-10"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 border border-border rounded-full -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;