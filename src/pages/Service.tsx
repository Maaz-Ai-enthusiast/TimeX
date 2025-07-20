import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Button } from '@/components/ui/button';
import { ArrowRight, Headphones, Clock, Users, Wrench, Rocket, CheckCircle } from 'lucide-react';

const Service = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: 'ease-out-cubic',
    });
  }, []);

  const services = [
    {
      icon: Rocket,
      title: 'Implementation & Onboarding',
      description: 'Get up and running quickly with our expert implementation team.',
      features: [
        'Dedicated implementation specialist',
        'Custom workflow setup',
        'Data migration assistance',
        'Team training sessions',
        '30-day success guarantee'
      ],
      duration: '1-2 weeks'
    },
    {
      icon: Wrench,
      title: 'Custom Integration Development',
      description: 'Connect TimeX with your existing tools and systems seamlessly.',
      features: [
        'API development',
        'Custom connectors',
        'Legacy system integration',
        'Real-time data sync',
        'Testing & deployment'
      ],
      duration: '2-6 weeks'
    },
    {
      icon: Users,
      title: 'Training & Adoption',
      description: 'Ensure your team gets the most out of TimeX with comprehensive training.',
      features: [
        'Live training sessions',
        'Video tutorials',
        'Best practices guide',
        'Change management support',
        'Ongoing adoption metrics'
      ],
      duration: 'Ongoing'
    },
    {
      icon: Headphones,
      title: '24/7 Premium Support',
      description: 'Get expert help whenever you need it with our premium support package.',
      features: [
        'Dedicated support team',
        'Priority ticket handling',
        'Phone & video support',
        'Proactive monitoring',
        'SLA guarantees'
      ],
      duration: 'Continuous'
    }
  ];

  const supportTiers = [
    {
      name: 'Standard Support',
      description: 'Basic support for all TimeX users',
      features: ['Email support', 'Help documentation', 'Community forum', 'Business hours response'],
      responseTime: '24-48 hours',
      availability: 'Business hours'
    },
    {
      name: 'Priority Support',
      description: 'Enhanced support for growing teams',
      features: ['Priority email', 'Live chat', 'Phone support', 'Video assistance', 'Extended hours'],
      responseTime: '4-8 hours',
      availability: 'Extended hours'
    },
    {
      name: 'Enterprise Support',
      description: 'Premium support for large organizations',
      features: ['Dedicated account manager', '24/7 phone support', 'Emergency escalation', 'Custom SLA', 'On-site support'],
      responseTime: '1-2 hours',
      availability: '24/7/365'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery Call',
      description: 'We understand your needs, current workflow, and success criteria.'
    },
    {
      step: '02',
      title: 'Solution Design',
      description: 'Our experts create a customized implementation plan for your organization.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'We execute the plan with minimal disruption to your current operations.'
    },
    {
      step: '04',
      title: 'Training & Launch',
      description: 'Your team gets comprehensive training before going live.'
    },
    {
      step: '05',
      title: 'Ongoing Support',
      description: 'Continuous support and optimization to ensure long-term success.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 pt-32">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto" data-aos="fade-up">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Expert Services &
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                Premium Support
              </span>
            </h1>
            <p className="text-xl text-text-secondary mb-8 max-w-3xl mx-auto">
              From implementation to ongoing support, our team of experts ensures 
              your success with TimeX every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-primary text-lg px-8 py-4">
                Get Expert Help
                <ArrowRight size={20} className="ml-2" />
              </Button>
              <Button variant="outline" className="btn-secondary text-lg px-8 py-4">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Professional Services
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Comprehensive services to maximize your investment and ensure rapid time-to-value.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className="feature-card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-accent-foreground" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-foreground">
                        {service.title}
                      </h3>
                      <span className="text-sm text-accent font-medium bg-accent/10 px-2 py-1 rounded">
                        {service.duration}
                      </span>
                    </div>
                    <p className="text-text-secondary mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-text-secondary">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Implementation Process
            </h2>
            <p className="text-lg text-text-secondary">
              A proven methodology that ensures successful deployment and adoption.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div 
                key={step.step}
                className="text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-accent-foreground">{step.step}</span>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-accent/20 -translate-y-1/2"></div>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-text-secondary text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Tiers */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Support That Scales With You
            </h2>
            <p className="text-lg text-text-secondary">
              Choose the support level that matches your team's needs and growth stage.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {supportTiers.map((tier, index) => (
              <div 
                key={tier.name}
                className="bg-surface-elevated rounded-2xl p-8 border border-card-border hover-lift"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h3 className="text-2xl font-bold text-foreground mb-2">{tier.name}</h3>
                <p className="text-text-secondary mb-6">{tier.description}</p>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <span className="text-sm font-medium text-foreground">Response Time:</span>
                    <span className="text-sm text-accent ml-2">{tier.responseTime}</span>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-foreground">Availability:</span>
                    <span className="text-sm text-accent ml-2">{tier.availability}</span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-text-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-6 text-center" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
            Let our experts help you implement TimeX successfully and achieve your productivity goals faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-accent hover:bg-accent-hover text-accent-foreground text-lg px-8 py-4">
              Schedule Consultation
            </Button>
            <Button variant="outline" className="bg-surface/20 backdrop-blur-sm border-white/30 text-foreground hover:bg-surface/30 text-lg px-8 py-4">
              Contact Support
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;