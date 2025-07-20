import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: 'ease-out-cubic',
    });
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'hello@timex.com',
      description: 'Get in touch for general inquiries'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      description: 'Speak with our support team'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: '123 Innovation Drive, San Francisco, CA 94105',
      description: 'Our headquarters location'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon-Fri 9:00 AM - 6:00 PM PST',
      description: 'When we are available'
    }
  ];

  const departments = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'sales', label: 'Sales' },
    { value: 'support', label: 'Technical Support' },
    { value: 'partnership', label: 'Partnership' },
    { value: 'media', label: 'Media & Press' }
  ];

  const faqs = [
    {
      question: 'How quickly can I get started with TimeX?',
      answer: 'You can start using TimeX immediately after signing up. Our onboarding process takes less than 5 minutes.'
    },
    {
      question: 'Do you offer enterprise pricing?',
      answer: 'Yes, we offer custom enterprise solutions with volume discounts and dedicated support for organizations with 100+ users.'
    },
    {
      question: 'Can I integrate TimeX with my existing tools?',
      answer: 'TimeX integrates with 50+ popular business tools including Slack, Jira, Asana, and more. We also provide API access for custom integrations.'
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'We offer multiple support channels including email, live chat, phone support, and comprehensive documentation.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 pt-32">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto" data-aos="fade-up">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Get in
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-xl text-text-secondary mb-8 max-w-3xl mx-auto">
              Have questions about TimeX? Need help getting started? 
              Our team is here to help you succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div 
                key={info.title}
                className="text-center p-8 bg-surface rounded-2xl border border-card-border hover-lift"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center">
                    <info.icon className="w-8 h-8 text-accent-foreground" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{info.title}</h3>
                <p className="text-accent font-medium mb-2">{info.details}</p>
                <p className="text-text-secondary text-sm">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & FAQ */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div data-aos="fade-right">
              <h2 className="text-4xl font-bold text-foreground mb-6">Send us a Message</h2>
              <p className="text-lg text-text-secondary mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    {departments.map((dept) => (
                      <option key={dept.value} value={dept.value}>
                        {dept.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <Button type="submit" className="btn-primary w-full text-lg py-3">
                  Send Message
                  <Send size={20} className="ml-2" />
                </Button>
              </form>
            </div>

            {/* FAQ */}
            <div data-aos="fade-left">
              <h2 className="text-4xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
              <p className="text-lg text-text-secondary mb-8">
                Quick answers to common questions about TimeX.
              </p>

              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div 
                    key={index}
                    className="bg-background rounded-xl p-6 border border-card-border"
                  >
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-accent/5 rounded-xl border border-accent/20">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Need Immediate Help?
                </h3>
                <p className="text-text-secondary mb-4">
                  Check out our comprehensive help center or contact our support team directly.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="outline" className="btn-secondary">
                    Visit Help Center
                  </Button>
                  <Button className="btn-primary">
                    Contact Support
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Offices</h2>
            <p className="text-lg text-text-secondary">
              Visit us at one of our global locations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                city: 'San Francisco',
                address: '123 Innovation Drive\nSan Francisco, CA 94105',
                phone: '+1 (555) 123-4567',
                flag: '🇺🇸'
              },
              {
                city: 'London',
                address: '45 Tech Square\nLondon, UK EC1A 1BB',
                phone: '+44 20 1234 5678',
                flag: '🇬🇧'
              },
              {
                city: 'Singapore',
                address: '88 Business Park\nSingapore 118234',
                phone: '+65 6123 4567',
                flag: '🇸🇬'
              }
            ].map((office, index) => (
              <div 
                key={office.city}
                className="text-center p-8 bg-surface-elevated rounded-2xl border border-card-border hover-lift"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="text-4xl mb-4">{office.flag}</div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{office.city}</h3>
                <div className="space-y-2 text-text-secondary">
                  <p className="whitespace-pre-line">{office.address}</p>
                  <p className="text-accent font-medium">{office.phone}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-6 text-center" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
            Don't wait to transform your productivity. Start your free trial today 
            and see the difference TimeX can make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-accent hover:bg-accent-hover text-accent-foreground text-lg px-8 py-4">
              Start Free Trial
              <ArrowRight size={20} className="ml-2" />
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

export default Contact;