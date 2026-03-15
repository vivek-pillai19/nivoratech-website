import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const FORMSPREE_URL = 'https://formspree.io/f/xnjgbwjv';

const FinalCTA = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    businessType: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          businessType: formData.businessType,
          message: formData.message,
        }),
      });
      if (!res.ok) throw new Error('Submit failed');
      toast({
        title: "Request Received",
        description: "We'll be in touch shortly to schedule your consultation.",
      });
      setFormData({ name: '', email: '', company: '', businessType: '', message: '' });
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try again or email us at partners@nivoratech.in",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Schedule a Strategic Consultation
            </h2>
            <p className="text-xl text-muted-foreground font-light">
              Let's discuss how our systems can help your business scale.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-2xl p-8 md:p-10 shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground font-medium">Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-background border-border focus-visible:ring-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-medium">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background border-border focus-visible:ring-primary"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-foreground font-medium">Company</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    required
                    className="bg-background border-border focus-visible:ring-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="businessType" className="text-foreground font-medium">Business Type</Label>
                  <Select 
                    value={formData.businessType} 
                    onValueChange={(value) => setFormData({ ...formData, businessType: value })}
                    required
                  >
                    <SelectTrigger className="bg-background border-border focus-visible:ring-primary">
                      <SelectValue placeholder="Select business type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small-business">Small Business</SelectItem>
                      <SelectItem value="multi-location">Multi-Location Service</SelectItem>
                      <SelectItem value="franchise">Franchise Network</SelectItem>
                      <SelectItem value="founder-led">Founder-Led Company</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground font-medium">Message</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={4}
                  placeholder="Tell us about your current operational challenges..."
                  className="bg-background border-border resize-none focus-visible:ring-primary"
                />
              </div>

              <div className="pt-4">
                <Button 
                  type="submit" 
                  size="lg"
                  disabled={submitting}
                  className="w-full bg-primary text-primary-foreground text-lg py-6 hover:bg-primary/90 transition-colors shadow-md"
                >
                  {submitting ? 'Sending...' : 'Schedule Call'}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;