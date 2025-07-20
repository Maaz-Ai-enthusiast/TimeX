import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, TrendingUp, Users, Clock, Building, Quote } from 'lucide-react';

const Customers = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: 'ease-out-cubic',
    });
  }, []);

  const customerStats = [
    { icon: Users, number: '10,000+', label: 'Active Users', description: 'Professionals trust TimeX daily' },
    { icon: Building, number: '1,500+', label: 'Companies', description: 'Organizations of all sizes' },
    { icon: Clock, number: '50M+', label: 'Hours Tracked', description: 'Total time logged successfully' },
    { icon: TrendingUp, number: '35%', label: 'Productivity Increase', description: 'Average improvement reported' }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'VP of Operations',
      company: 'TechFlow Inc.',
      companySize: '200+ employees',
      industry: 'Software Development',
      content: 'TimeX transformed how we manage our distributed team. The insights help us optimize resource allocation and the automated reporting saves us 10 hours per week.',
      results: ['40% faster project delivery', '25% reduction in overtime', '90% team adoption rate'],
      rating: 5,
      avatar: '👩‍💼',
      featured: true
    },
    {
      name: 'Michael Rodriguez',
      role: 'Creative Director',
      company: 'DesignStudio Pro',
      companySize: '50 employees',
      industry: 'Creative Agency',
      content: 'As a creative agency, tracking billable hours was always a challenge. TimeX made it effortless and our client billing accuracy improved dramatically.',
      results: ['99% billing accuracy', '30% increase in billable hours', '50% faster invoicing'],
      rating: 5,
      avatar: '👨‍🎨',
      featured: true
    },
    {
      name: 'Emily Watson',
      role: 'Project Manager',
      company: 'ConsultCorp',
      companySize: '25 employees',
      industry: 'Consulting',
      content: 'The real-time project insights help us stay on budget and deadline. Our clients love the transparency in reporting.',
      results: ['95% on-time delivery', '20% cost savings', '98% client satisfaction'],
      rating: 5,
      avatar: '👩‍💻',
      featured: false
    },
    {
      name: 'David Kim',
      role: 'Freelance Developer',
      company: 'Independent',
      companySize: 'Solo',
      industry: 'Web Development',
      content: 'TimeX helps me track multiple client projects effortlessly. The automated timesheets save me hours of admin work.',
      results: ['60% less admin time', '100% accurate billing', '3x client growth'],
      rating: 5,
      avatar: '👨‍💻',
      featured: false
    }
  ];

  const caseStudies = [
    {
      company: 'TechCorp Solutions',
      industry: 'Software Development',
      size: '500+ employees',
      challenge: 'Managing distributed teams across 12 time zones with accurate time tracking and project visibility.',
      solution: 'Implemented TimeX with custom integrations to their existing project management tools.',
      results: {
        productivity: '+45%',
        accuracy: '+99%',
        satisfaction: '+85%'
      },
      quote: 'TimeX enabled us to scale our remote operations while maintaining complete visibility into project progress.',
      author: 'James Wilson, CTO'
    },
    {
      company: 'Creative Minds Agency',
      industry: 'Marketing & Advertising',
      size: '75 employees',
      challenge: 'Tracking billable hours across multiple client projects and creative workflows.',
      solution: 'Deployed TimeX with automated project categorization and client reporting features.',
      results: {
        billing: '+35%',
        efficiency: '+50%',
        client_satisfaction: '+92%'
      },
      quote: 'Our billing accuracy improved dramatically, and clients love the detailed project insights.',
      author: 'Lisa Thompson, Operations Director'
    }
  ];

  const industries = [
    { name: 'Technology', companies: '450+', icon: '💻' },
    { name: 'Creative Agencies', companies: '300+', icon: '🎨' },
    { name: 'Consulting', companies: '250+', icon: '📊' },
    { name: 'Healthcare', companies: '200+', icon: '🏥' },
    { name: 'Legal Services', companies: '180+', icon: '⚖️' },
    { name: 'Architecture', companies: '120+', icon: '🏗️' }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 pt-32">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto" data-aos="fade-up">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Trusted by
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                Industry Leaders
              </span>
            </h1>
            <p className="text-xl text-text-secondary mb-8 max-w-3xl mx-auto">
              Discover how organizations of all sizes use TimeX to boost productivity, 
              improve project visibility, and achieve their business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-primary text-lg px-8 py-4">
                Read Success Stories
                <ArrowRight size={20} className="ml-2" />
              </Button>
              <Button variant="outline" className="btn-secondary text-lg px-8 py-4">
                Request Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Stats */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {customerStats.map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-accent-foreground" />
                  </div>
                </div>
                <div className="text-4xl font-bold text-foreground mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-foreground mb-1">{stat.label}</div>
                <div className="text-text-secondary text-sm">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-text-secondary">
              Real stories from real customers who've transformed their productivity with TimeX.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {testimonials.filter(t => t.featured).map((testimonial, index) => (
              <div 
                key={testimonial.name}
                className="bg-background rounded-2xl p-8 shadow-medium border border-card-border hover-lift"
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="text-4xl">{testimonial.avatar}</div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-text-secondary text-sm">{testimonial.role}</div>
                    <div className="text-accent text-sm">{testimonial.company}</div>
                    <div className="text-text-muted text-xs">{testimonial.companySize} • {testimonial.industry}</div>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <blockquote className="text-text-secondary mb-6 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>

                <div className="space-y-2">
                  <div className="text-sm font-medium text-foreground mb-2">Key Results:</div>
                  {testimonial.results.map((result) => (
                    <div key={result} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-text-secondary">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* More Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.filter(t => !t.featured).map((testimonial, index) => (
              <div 
                key={testimonial.name}
                className="bg-background rounded-xl p-6 border border-card-border hover-lift"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-2xl">{testimonial.avatar}</div>
                  <div>
                    <div className="font-medium text-foreground">{testimonial.name}</div>
                    <div className="text-text-secondary text-sm">{testimonial.role}</div>
                    <div className="text-accent text-sm">{testimonial.company}</div>
                  </div>
                </div>

                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-text-secondary text-sm leading-relaxed">
                  "{testimonial.content}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Customer Success Stories
            </h2>
            <p className="text-lg text-text-secondary">
              In-depth case studies showing real impact and measurable results.
            </p>
          </div>

          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div 
                key={study.company}
                className="bg-surface-elevated rounded-2xl p-8 border border-card-border"
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-foreground mb-2">{study.company}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-text-secondary">
                        <span>Industry: {study.industry}</span>
                        <span>Size: {study.size}</span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Challenge</h4>
                        <p className="text-text-secondary">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Solution</h4>
                        <p className="text-text-secondary">{study.solution}</p>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-accent/5 rounded-lg border-l-4 border-accent">
                      <Quote className="w-6 h-6 text-accent mb-2" />
                      <p className="text-text-secondary italic mb-2">"{study.quote}"</p>
                      <p className="text-sm text-text-muted">— {study.author}</p>
                    </div>
                  </div>

                  <div className="bg-background rounded-xl p-6">
                    <h4 className="font-semibold text-foreground mb-4">Results Achieved</h4>
                    <div className="space-y-4">
                      {Object.entries(study.results).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-2xl font-bold text-accent mb-1">{value}</div>
                          <div className="text-sm text-text-secondary capitalize">
                            {key.replace('_', ' ')}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Serving Diverse Industries
            </h2>
            <p className="text-lg text-text-secondary">
              TimeX adapts to the unique needs of different industries and business models.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <div 
                key={industry.name}
                className="text-center p-6 bg-background rounded-xl border border-card-border hover-lift"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="text-4xl mb-3">{industry.icon}</div>
                <h3 className="font-semibold text-foreground mb-1">{industry.name}</h3>
                <p className="text-accent text-sm">{industry.companies}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-6 text-center" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Join Our Success Stories
          </h2>
          <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
            Ready to transform your team's productivity? Start your free trial today 
            and see why thousands of companies trust TimeX.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-accent hover:bg-accent-hover text-accent-foreground text-lg px-8 py-4">
              Start Free Trial
            </Button>
            <Button variant="outline" className="bg-surface/20 backdrop-blur-sm border-white/30 text-foreground hover:bg-surface/30 text-lg px-8 py-4">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Customers;