import React from 'react';
import { Linkedin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerLinks = [
    { label: 'About', id: 'about' },
    { label: 'Solutions', id: 'solutions' },
    { label: 'Industries', id: 'industries' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <span className="text-2xl font-bold text-foreground tracking-tight">NivoraTech</span>
            <p className="mt-6 text-muted-foreground text-sm max-w-sm leading-relaxed">
              NivoraTech builds custom AI-powered software systems for growing businesses.
            </p>
            <p className="mt-4 text-muted-foreground text-sm font-medium">
              Bengaluru, India
            </p>
            <p className="mt-1 text-muted-foreground text-sm">
              hello@nivoratech.com
            </p>
          </div>

          {/* Links */}
          <div>
            <span className="text-sm font-bold text-foreground mb-6 block uppercase tracking-wider">Quick Links</span>
            <div className="flex flex-col gap-4">
              {footerLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm text-left font-medium"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social & Legal */}
          <div>
            <span className="text-sm font-bold text-foreground mb-6 block uppercase tracking-wider">Connect</span>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm mb-6 font-medium"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
            <div className="flex flex-col gap-4">
              <button className="text-muted-foreground hover:text-primary transition-colors text-sm text-left font-medium">
                Privacy Policy
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm font-medium">
            © {new Date().getFullYear()} NivoraTech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;