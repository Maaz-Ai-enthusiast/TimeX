import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Video, FileText, Download, ExternalLink, Calendar } from 'lucide-react';

const Resources = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: 'ease-out-cubic',
    });
  }, []);

  const resourceCategories = [
    {
      icon: BookOpen,
      title: 'Documentation',
      description: 'Comprehensive guides and API documentation',
      items: ['Getting Started Guide', 'API Reference', 'Integration Tutorials', 'Best Practices'],
      count: '50+ articles'
    },
    {
      icon: Video,
      title: 'Video Tutorials',
      description: 'Step-by-step video guides for all features',
      items: ['Feature Walkthroughs', 'Setup Tutorials', 'Advanced Tips', 'Webinar Recordings'],
      count: '25+ videos'
    },
    {
      icon: FileText,
      title: 'Whitepapers & Reports',
      description: 'Industry insights and productivity research',
      items: ['Productivity Trends 2024', 'Remote Work Study', 'Time Tracking ROI', 'Industry Benchmarks'],
      count: '15+ reports'
    },
    {
      icon: Download,
      title: 'Templates & Tools',
      description: 'Ready-to-use resources for your team',
      items: ['Timesheet Templates', 'Project Checklists', 'Policy Templates', 'Calculator Tools'],
      count: '30+ downloads'
    }
  ];

  const featuredContent = [
    {
      type: 'Guide',
      title: 'The Complete Guide to Time Tracking for Remote Teams',
      description: 'Learn best practices for implementing time tracking in distributed teams.',
      readTime: '12 min read',
      category: 'Management',
      featured: true
    },
    {
      type: 'Report',
      title: 'Productivity Trends Report 2024',
      description: 'Insights from analyzing 10M+ hours of time tracking data.',
      readTime: '25 min read',
      category: 'Research',
      featured: true
    },
    {
      type: 'Tutorial',
      title: 'Setting Up Automated Timesheets',
      description: 'Step-by-step guide to configure automated timesheet generation.',
      readTime: '8 min read',
      category: 'Setup',
      featured: false
    },
    {
      type: 'Case Study',
      title: 'How TechCorp Increased Productivity by 35%',
      description: 'Real-world implementation story and results.',
      readTime: '15 min read',
      category: 'Success Story',
      featured: false
    },
    {
      type: 'Webinar',
      title: 'Mastering Project Time Allocation',
      description: 'Live session on optimizing resource allocation across projects.',
      readTime: '45 min watch',
      category: 'Training',
      featured: false
    },
    {
      type: 'Template',
      title: 'Time Tracking Policy Template',
      description: 'Customizable policy template for your organization.',
      readTime: 'Download',
      category: 'Templates',
      featured: false
    }
  ];

  const upcomingEvents = [
    {
      type: 'Webinar',
      title: 'Advanced Analytics Deep Dive',
      date: '2024-02-15',
      time: '2:00 PM EST',
      description: 'Explore advanced reporting features and custom analytics setup.',
      spots: '23 spots left'
    },
    {
      type: 'Workshop',
      title: 'Time Tracking Best Practices',
      date: '2024-02-22',
      time: '1:00 PM EST',
      description: 'Interactive workshop on implementing effective time tracking.',
      spots: '15 spots left'
    },
    {
      type: 'Demo',
      title: 'Enterprise Features Showcase',
      date: '2024-03-01',
      time: '11:00 AM EST',
      description: 'Live demonstration of enterprise-level features and capabilities.',
      spots: '45 spots left'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 pt-32">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto" data-aos="fade-up">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Resources &
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                Learning Center
              </span>
            </h1>
            <p className="text-xl text-text-secondary mb-8 max-w-3xl mx-auto">
              Everything you need to master time tracking, boost productivity, 
              and get the most out of TimeX.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-primary text-lg px-8 py-4">
                Browse All Resources
                <ArrowRight size={20} className="ml-2" />
              </Button>
              <Button variant="outline" className="btn-secondary text-lg px-8 py-4">
                Subscribe to Updates
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Explore Our Resource Library
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Find the right resources for your role, experience level, and specific use case.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resourceCategories.map((category, index) => (
              <div 
                key={category.title}
                className="feature-card text-center group cursor-pointer"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <category.icon className="w-8 h-8 text-accent-foreground" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {category.title}
                </h3>
                <p className="text-text-secondary mb-4">
                  {category.description}
                </p>
                <div className="text-sm text-accent font-medium mb-4">
                  {category.count}
                </div>
                
                <ul className="text-left space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="text-sm text-text-secondary flex items-center">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2 flex-shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Featured Content
            </h2>
            <p className="text-lg text-text-secondary">
              Hand-picked resources to help you succeed with time tracking.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredContent.map((content, index) => (
              <div 
                key={content.title}
                className={`bg-background rounded-2xl p-6 border hover-lift cursor-pointer ${
                  content.featured ? 'border-accent shadow-glow' : 'border-card-border'
                }`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {content.featured && (
                  <div className="inline-block bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium mb-4">
                    Featured
                  </div>
                )}
                
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-accent bg-accent/10 px-2 py-1 rounded">
                    {content.type}
                  </span>
                  <span className="text-sm text-text-secondary">{content.readTime}</span>
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {content.title}
                </h3>
                <p className="text-text-secondary mb-4 text-sm">
                  {content.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-text-muted">{content.category}</span>
                  <ExternalLink className="w-4 h-4 text-accent" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Upcoming Events
            </h2>
            <p className="text-lg text-text-secondary">
              Join our live sessions and connect with the TimeX community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <div 
                key={event.title}
                className="bg-surface-elevated rounded-2xl p-6 border border-card-border hover-lift"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <Calendar className="w-6 h-6 text-accent" />
                  <div>
                    <div className="font-medium text-foreground">{event.date}</div>
                    <div className="text-sm text-text-secondary">{event.time}</div>
                  </div>
                </div>
                
                <span className="inline-block bg-accent/10 text-accent px-2 py-1 rounded text-sm font-medium mb-3">
                  {event.type}
                </span>
                
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {event.title}
                </h3>
                <p className="text-text-secondary text-sm mb-4">
                  {event.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-orange-500 font-medium">{event.spots}</span>
                  <Button size="sm" className="btn-primary">
                    Register
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-6 text-center" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Stay Updated
          </h2>
          <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
            Get the latest resources, tips, and insights delivered to your inbox every week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-white/20 bg-surface/20 backdrop-blur-sm text-foreground placeholder-text-muted"
            />
            <Button className="bg-accent hover:bg-accent-hover text-accent-foreground px-6 py-3">
              Subscribe
            </Button>
          </div>
          <p className="text-sm text-text-secondary mt-4">
            No spam, unsubscribe at any time.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Resources;