import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import dashboardMockup from '@/assets/dashboard-mockup.png';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8" data-aos="fade-right">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Empower Your Team
                <span className="block bg-gradient-primary bg-clip-text text-transparent">
                  with Smarter Time
                </span>
                <span className="block">Tracking</span>
              </h1>
              
              <p className="text-lg text-text-secondary max-w-lg leading-relaxed">
                Unlock real-time productivity with a time tracker your team will 
                love. Make informed decisions with detailed team insights.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary text-lg px-8 py-4 group">
                Start for free
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="outline" className="btn-secondary text-lg px-8 py-4 group">
                <Play size={20} className="mr-2 group-hover:scale-110 transition-transform" />
                Learn more
              </Button>
            </div>
          </div>

          {/* Right Content - Dashboard Mockup */}
          <div className="relative" data-aos="fade-left" data-aos-delay="200">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl rounded-3xl"></div>
              
              {/* Dashboard Image */}
              <div className="relative bg-surface rounded-3xl shadow-large border border-card-border overflow-hidden hover-lift">
                <img 
                  src={dashboardMockup} 
                  alt="TimeX Dashboard Interface" 
                  className="w-full h-auto"
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-surface rounded-2xl shadow-medium p-4 border border-card-border hover-glow" data-aos="zoom-in" data-aos-delay="400">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-foreground">Live tracking</span>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-surface rounded-2xl shadow-medium p-4 border border-card-border hover-glow" data-aos="zoom-in" data-aos-delay="600">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">47h</div>
                  <div className="text-sm text-text-secondary">This week</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Hero;