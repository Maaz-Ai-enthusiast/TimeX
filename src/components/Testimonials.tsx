import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Project Manager',
      company: 'TechCorp',
      content: 'TimeX has completely transformed how our team tracks productivity. The insights are invaluable for project planning.',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'Michael Chen',
      role: 'Freelance Developer',
      company: 'Independent',
      content: 'The automated timesheets feature saves me hours every week. I can focus on coding instead of manual time tracking.',
      rating: 5,
      avatar: '👨‍💻'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Team Lead',
      company: 'DesignStudio',
      content: 'Real-time monitoring helps us stay on track with deadlines. The interface is intuitive and our team loves using it.',
      rating: 5,
      avatar: '👩‍🎨'
    }
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center space-y-4 mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-foreground">
            Hear from Our Happy Customers
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Discover how TimeX helps teams and individuals boost productivity and streamline their workflow.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.name}
              className="bg-background rounded-2xl p-8 shadow-medium border border-card-border hover-lift"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              {/* Quote Icon */}
              <div className="flex justify-center mb-6">
                <Quote className="w-8 h-8 text-accent opacity-50" />
              </div>
              
              {/* Rating */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              {/* Content */}
              <blockquote className="text-text-secondary text-center mb-8 leading-relaxed">
                "{testimonial.content}"
              </blockquote>
              
              {/* Author */}
              <div className="text-center">
                <div className="text-4xl mb-3">{testimonial.avatar}</div>
                <div className="font-semibold text-foreground">{testimonial.name}</div>
                <div className="text-sm text-text-secondary">
                  {testimonial.role} at {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;