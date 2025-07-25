import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2" data-aos="fade-right">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-lg">T</span>
            </div>
            <Link to="/" className="text-2xl font-bold text-foreground">TimeX</Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" data-aos="fade-down" data-aos-delay="100">
            <Link to="/product" className="text-text-secondary hover:text-foreground transition-smooth">
              Product
            </Link>
            <Link to="/service" className="text-text-secondary hover:text-foreground transition-smooth">
              Service
            </Link>
            <Link to="/resources" className="text-text-secondary hover:text-foreground transition-smooth">
              Resources
            </Link>
            <Link to="/customers" className="text-text-secondary hover:text-foreground transition-smooth">
              Customers
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block" data-aos="fade-left" data-aos-delay="200">
            <Button className="btn-primary">
              Start free
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <nav className="flex flex-col space-y-4 mt-4">
              <Link to="/product" className="text-text-secondary hover:text-foreground transition-smooth">
                Product
              </Link>
              <Link to="/service" className="text-text-secondary hover:text-foreground transition-smooth">
                Service
              </Link>
              <Link to="/resources" className="text-text-secondary hover:text-foreground transition-smooth">
                Resources
              </Link>
              <Link to="/customers" className="text-text-secondary hover:text-foreground transition-smooth">
                Customers
              </Link>
              <Button className="btn-primary w-full mt-4">
                Start free
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;