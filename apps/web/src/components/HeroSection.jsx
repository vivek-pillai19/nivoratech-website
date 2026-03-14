import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-background">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b" 
          alt="Modern SaaS Dashboard"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/80 backdrop-blur-[2px]"></div>
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1] text-white">
              Custom AI-Powered Software Systems for <br className="hidden md:block" />
              <span className="text-accent">Growing Businesses</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-6 max-w-3xl leading-relaxed font-light">
              We design and build intelligent software platforms such as booking systems, CRM platforms, workflow automation tools, and operational dashboards that help businesses streamline operations and scale efficiently.
            </p>

            <p className="text-lg text-gray-300 mb-10 max-w-2xl leading-relaxed">
              Our systems centralize operations, automate workflows, and provide real-time insights that help organizations operate smarter.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('contact')}
                className="bg-primary text-primary-foreground text-lg px-8 py-6 hover:bg-primary/90 transition-colors shadow-lg border-0"
              >
                Book a Strategy Call
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => scrollToSection('systems')}
                className="bg-white/10 text-white border-white/20 text-lg px-8 py-6 hover:bg-white/20 transition-colors backdrop-blur-sm"
              >
                Explore Our Systems
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;