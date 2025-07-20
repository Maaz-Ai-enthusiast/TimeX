const Companies = () => {
  const companies = [
    { name: 'Slack', logo: '💬' },
    { name: 'Square', logo: '⬜' },
    { name: 'Zoom', logo: '📹' },
    { name: 'Coinbase', logo: '🪙' },
    { name: 'Dropbox', logo: '📦' },
    { name: 'Google', logo: '🔍' }
  ];

  return (
    <section className="py-16 bg-surface" data-aos="fade-up">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-12">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">1000+ Companies</h2>
            <p className="text-text-secondary">
              The choice of over 1000 global companies.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 opacity-60">
            {companies.map((company, index) => (
              <div 
                key={company.name}
                className="flex items-center space-x-3 hover:opacity-100 transition-all duration-300 hover-lift"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <span className="text-3xl">{company.logo}</span>
                <span className="text-xl font-semibold text-text-secondary">
                  {company.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companies;