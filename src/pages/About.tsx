import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Target, Award, Heart } from 'lucide-react';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: 'ease-out-cubic',
    });
  }, []);

  const values = [
    {
      icon: Users,
      title: 'People First',
      description: 'We believe that great products are built by great teams. Our people-first approach drives everything we do.'
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'We constantly push boundaries to create solutions that truly make a difference in how people work.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we deliver, from code quality to customer service.'
    },
    {
      icon: Heart,
      title: 'Empathy',
      description: 'We deeply understand our customers challenges and build solutions that genuinely solve real problems.'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Co-founder',
      bio: 'Former VP at ProductCorp, passionate about workplace productivity.',
      avatar: '👩‍💼'
    },
    {
      name: 'Michael Chen',
      role: 'CTO & Co-founder',
      bio: 'Ex-Google engineer with 15 years in enterprise software.',
      avatar: '👨‍💻'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Product',
      bio: 'Design thinking expert focused on user experience excellence.',
      avatar: '👩‍🎨'
    },
    {
      name: 'David Kim',
      role: 'Head of Engineering',
      bio: 'Full-stack architect building scalable, reliable systems.',
      avatar: '👨‍🔬'
    }
  ];

  const milestones = [
    { year: '2019', title: 'Company Founded', description: 'Started with a vision to simplify time tracking' },
    { year: '2020', title: 'First 1,000 Users', description: 'Reached our first major user milestone' },
    { year: '2021', title: 'Series A Funding', description: 'Raised $5M to accelerate product development' },
    { year: '2022', title: '10,000+ Users', description: 'Achieved significant scale across multiple industries' },
    { year: '2023', title: 'Global Expansion', description: 'Expanded to serve customers in 50+ countries' },
    { year: '2024', title: 'AI Integration', description: 'Launched intelligent time tracking features' }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 pt-32">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto" data-aos="fade-up">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
              About
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                TimeX
              </span>
            </h1>
            <p className="text-xl text-text-secondary mb-8 max-w-3xl mx-auto">
              We're on a mission to help teams and individuals unlock their full potential 
              through intelligent time tracking and productivity insights.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right">
              <h2 className="text-4xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                To empower individuals and teams to achieve their highest productivity potential 
                through intelligent time tracking, insightful analytics, and seamless workflow integration.
              </p>
              <p className="text-text-secondary leading-relaxed">
                We believe that understanding how time is spent is the foundation of productivity improvement. 
                Our goal is to make time tracking so effortless and insightful that it becomes an 
                indispensable part of every team's workflow.
              </p>
            </div>
            
            <div className="bg-surface rounded-2xl p-8 shadow-medium" data-aos="fade-left">
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                A world where every team has complete visibility into their productivity patterns, 
                enabling data-driven decisions that lead to better work-life balance and business outcomes.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-text-secondary">Transparent productivity insights</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-text-secondary">Effortless time tracking</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-text-secondary">Better work-life balance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-lg text-text-secondary">
              The principles that guide everything we do at TimeX.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-accent-foreground" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-text-secondary leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Journey</h2>
            <p className="text-lg text-text-secondary">
              Key milestones in our mission to transform workplace productivity.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-accent/20"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div 
                  key={milestone.year}
                  className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                  data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
                  data-aos-delay={index * 100}
                >
                  <div className={`w-full max-w-md ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className="bg-surface-elevated rounded-xl p-6 border border-card-border shadow-medium">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-3 h-3 bg-accent rounded-full"></div>
                        <span className="text-accent font-bold">{milestone.year}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-text-secondary text-sm">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-foreground mb-4">Meet Our Team</h2>
            <p className="text-lg text-text-secondary">
              The passionate individuals building the future of time tracking.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div 
                key={member.name}
                className="text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="text-6xl mb-4">{member.avatar}</div>
                <h3 className="text-xl font-semibold text-foreground mb-1">{member.name}</h3>
                <p className="text-accent font-medium mb-3">{member.role}</p>
                <p className="text-text-secondary text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-6 text-center" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Join Our Mission
          </h2>
          <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
            Ready to be part of the TimeX story? Start your free trial today 
            and experience the future of time tracking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-accent hover:bg-accent-hover text-accent-foreground text-lg px-8 py-4">
              Start Free Trial
              <ArrowRight size={20} className="ml-2" />
            </Button>
            <Button variant="outline" className="bg-surface/20 backdrop-blur-sm border-white/30 text-foreground hover:bg-surface/30 text-lg px-8 py-4">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;