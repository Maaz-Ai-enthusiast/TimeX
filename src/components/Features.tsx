import { Clock, FileText, BarChart3, Settings, Users, Zap } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Clock,
      title: 'Smart Time Logs',
      description: 'Effortlessly track time with intelligent logging, ensuring accurate records without manual input.',
      image: '📊'
    },
    {
      icon: FileText,
      title: 'Automated Timesheets',
      description: 'Generate comprehensive timesheets that provide a detailed view of work hours and project allocation.',
      image: '📋'
    },
    {
      icon: BarChart3,
      title: 'Project Insights',
      description: 'Get deep insights into project performance with detailed analytics and visual performance reports.',
      image: '📈'
    }
  ];

  const additionalFeatures = [
    {
      icon: Settings,
      title: 'Real-time Monitoring',
      description: 'Monitor team productivity in real-time with live dashboards and instant notifications.'
    },
    {
      icon: Users,
      title: 'Customizable Reports',
      description: 'Create custom reports tailored to your business needs with flexible filtering options.'
    },
    {
      icon: Zap,
      title: 'Seamless Integrations',
      description: 'Connect with your favorite tools and streamline your workflow with powerful integrations.'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center space-y-4 mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-foreground">
            Flexible time tracking tool for your needs
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Track, manage and report your team and freelancers' productivity with our comprehensive time tracking solution.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="feature-card text-center"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <div className="flex justify-center mb-6">
                <div className="text-6xl">{feature.image}</div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-center">
                  <feature.icon className="w-8 h-8 text-accent" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground">
                  {feature.title}
                </h3>
                
                <p className="text-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="grid md:grid-cols-3 gap-8">
          {additionalFeatures.map((feature, index) => (
            <div 
              key={feature.title}
              className="bg-surface-elevated rounded-xl p-6 border border-card-border hover-lift"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold text-foreground">
                    {feature.title}
                  </h4>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;