import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, BarChart3, Users, Shield, Zap, CheckCircle } from 'lucide-react';

const Product = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: 'ease-out-cubic',
    });
  }, []);

  const features = [
    {
      icon: Clock,
      title: 'Smart Time Tracking',
      description: 'Intelligent time detection and automatic categorization of work activities.',
      benefits: ['Automatic time detection', 'Smart categorization', 'Idle time tracking', 'Manual adjustments']
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Deep insights into productivity patterns and team performance metrics.',
      benefits: ['Productivity reports', 'Time allocation analysis', 'Trend identification', 'Custom dashboards']
    },
    {
      icon: Users,
      title: 'Team Management',
      description: 'Comprehensive tools for managing teams and projects across your organization.',
      benefits: ['Team overview', 'Project assignments', 'Resource allocation', 'Performance tracking']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with SOC 2 compliance and data encryption.',
      benefits: ['Data encryption', 'SOC 2 compliance', 'Role-based access', 'Audit trails']
    },
    {
      icon: Zap,
      title: 'Integrations',
      description: 'Seamless connectivity with 50+ popular business tools and platforms.',
      benefits: ['50+ integrations', 'API access', 'Webhooks', 'Custom connectors']
    }
  ];

  const plans = [
    {
      name: 'Starter',
      price: '$8',
      period: 'per user/month',
      description: 'Perfect for small teams getting started',
      features: ['Up to 5 users', 'Basic time tracking', 'Simple reports', 'Email support'],
      popular: false
    },
    {
      name: 'Professional',
      price: '$15',
      period: 'per user/month',
      description: 'Advanced features for growing teams',
      features: ['Up to 50 users', 'Advanced analytics', 'Team management', 'Priority support', 'Integrations'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'contact us',
      description: 'Custom solutions for large organizations',
      features: ['Unlimited users', 'Custom integrations', 'Dedicated support', 'On-premise option', 'SLA guarantee'],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 pt-32">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto" data-aos="fade-up">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
              The Complete
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                Time Tracking Solution
              </span>
            </h1>
            <p className="text-xl text-text-secondary mb-8 max-w-3xl mx-auto">
              Everything you need to track, analyze, and optimize your team's productivity. 
              From simple time logging to advanced workforce analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-primary text-lg px-8 py-4">
                Start Free Trial
                <ArrowRight size={20} className="ml-2" />
              </Button>
              <Button variant="outline" className="btn-secondary text-lg px-8 py-4">
                View Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Powerful Features for Every Team
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Comprehensive time tracking capabilities designed to scale with your business needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="feature-card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-accent-foreground" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-text-secondary mb-4">
                      {feature.description}
                    </p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-text-secondary">{benefit}</span>
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

      {/* Pricing Section */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-text-secondary">
              Choose the plan that's right for your team size and needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div 
                key={plan.name}
                className={`bg-background rounded-2xl p-8 border-2 relative ${
                  plan.popular ? 'border-accent shadow-glow' : 'border-card-border'
                }`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-text-secondary ml-2">{plan.period}</span>
                  </div>
                  <p className="text-text-secondary">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-text-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}
                >
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;