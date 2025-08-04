import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>aqizointernational11@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span>Call Us:- +91 84870 27771</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-background border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl md:text-3xl font-bold text-foreground">
                AQIZO INTERNATIONAL
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                Home Page
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                Company Profile
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                Our Products
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                Contact Us
              </a>
            </nav>

            {/* Search and Mobile Menu */}
            <div className="flex items-center gap-4">
              {/* Search Bar */}
              <div className="hidden md:flex items-center relative">
                <Input 
                  placeholder="Search Products..." 
                  className="w-64 pr-10" 
                />
                <Search className="absolute right-3 h-4 w-4 text-muted-foreground" />
              </div>

              {/* Send Inquiry Button */}
              <Button variant="outline" className="hidden md:inline-flex">
                Send Inquiry
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-border">
              <nav className="flex flex-col space-y-4 mt-4">
                <a href="#" className="text-foreground hover:text-primary transition-colors">
                  Home Page
                </a>
                <a href="#" className="text-foreground hover:text-primary transition-colors">
                  Company Profile
                </a>
                <a href="#" className="text-foreground hover:text-primary transition-colors">
                  Our Products
                </a>
                <a href="#" className="text-foreground hover:text-primary transition-colors">
                  Contact Us
                </a>
                <div className="flex items-center gap-2 pt-2">
                  <Input placeholder="Search Products..." className="flex-1" />
                  <Button size="icon" variant="outline">
                    <Search className="h-4 w-4" />
                  </Button>
                </div>
                <Button className="mt-2">Send Inquiry</Button>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;