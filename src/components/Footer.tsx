import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">YEDHANT INTERNATIONAL</h3>
            <p className="text-background/80 text-sm">
              Your trusted partner for premium quality spices and food ingredients. 
              We source the finest products from around the world to bring authentic 
              flavors to your table.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-background/80 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/80 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/80 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/80 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors text-sm">Home</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors text-sm">About Us</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors text-sm">Our Products</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors text-sm">Quality Assurance</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors text-sm">Contact Us</a></li>
            </ul>
          </div>

          {/* Product Categories */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Products</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors text-sm">Whole Spices</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors text-sm">Ground Spices</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors text-sm">Spice Blends</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors text-sm">Herbs & Seasonings</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors text-sm">Organic Products</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-background/80 text-sm">
                  123 Spice Market Street<br />
                  Mumbai, Maharashtra 400001<br />
                  India
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <p className="text-background/80 text-sm">+91 98045 82155</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <p className="text-background/80 text-sm">info@yedhantinternational.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-background/80 text-sm">
              © 2024 Yedhant International. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-background/80 hover:text-primary transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-background/80 hover:text-primary transition-colors text-sm">Terms of Service</a>
              <a href="#" className="text-background/80 hover:text-primary transition-colors text-sm">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;