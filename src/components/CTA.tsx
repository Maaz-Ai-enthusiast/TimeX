import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

const CTA = () => {
  const benefits = [
    'Free 14-day trial',
    'No credit card required',
    'Setup in under 5 minutes',
    '24/7 customer support'
  ];

  return (
    <section className="py-20 bg-gradient-primary relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8" data-aos="fade-up">
          {/* Headline */}
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Ready to boost your productivity?
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Join thousands of teams who trust TimeX to track their time and maximize efficiency.
              Let's explore what we can achieve together.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-12">
            {benefits.map((benefit, index) => (
              <div 
                key={benefit}
                className="flex items-center justify-center space-x-2 bg-surface/20 backdrop-blur-sm rounded-lg py-3 px-4 border border-white/20"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-foreground font-medium text-sm">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="200">
            <Button className="bg-accent hover:bg-accent-hover text-accent-foreground text-lg px-8 py-4 group shadow-large">
              Get started free
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="outline" className="bg-surface/20 backdrop-blur-sm border-white/30 text-foreground hover:bg-surface/30 text-lg px-8 py-4">
              Schedule a demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-8 border-t border-white/20" data-aos="fade-up" data-aos-delay="300">
            <div className="flex flex-wrap justify-center items-center gap-8 text-text-secondary">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">🔒</span>
                <span className="text-sm">Enterprise Security</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">⚡</span>
                <span className="text-sm">99.9% Uptime</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">🌍</span>
                <span className="text-sm">Global Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>
    </section>
  );
};

export default CTA;