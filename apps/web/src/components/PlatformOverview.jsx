import React from 'react';
import { motion } from 'framer-motion';
import { Database, GitMerge, BarChart3, ArrowRight, ArrowDown } from 'lucide-react';

const PlatformOverview = () => {
  return (
    <section id="platform" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Platform Overview</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            How our systems connect and work together to power your business.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual Flow Diagram */}
          <div className="relative">
            <div className="flex flex-col gap-6 relative z-10">
              {/* Step 1 */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-xl p-6 shadow-lg flex items-center gap-6"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Database className="text-primary" size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Centralized Platform</h3>
                  <p className="text-muted-foreground text-sm mt-1">Single source of truth for all operational data.</p>
                </div>
              </motion.div>

              <div className="flex justify-center -my-2 relative z-0">
                <ArrowDown className="text-border" size={32} />
              </div>

              {/* Step 2 */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-card border border-border rounded-xl p-6 shadow-lg flex items-center gap-6"
              >
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <GitMerge className="text-secondary" size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Integrated Workflows</h3>
                  <p className="text-muted-foreground text-sm mt-1">Automated processes connecting teams and tools.</p>
                </div>
              </motion.div>

              <div className="flex justify-center -my-2 relative z-0">
                <ArrowDown className="text-border" size={32} />
              </div>

              {/* Step 3 */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-card border border-border rounded-xl p-6 shadow-lg flex items-center gap-6"
              >
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="text-accent" size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Data & Analytics Dashboard</h3>
                  <p className="text-muted-foreground text-sm mt-1">Real-time insights driving strategic decisions.</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Supporting Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-full min-h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-border"
          >
            <img 
              src="https://images.unsplash.com/photo-1643101807331-21a4a3f081d5" 
              alt="Software Architecture Visualization"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-foreground/40 to-transparent"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PlatformOverview;