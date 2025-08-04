import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-rice.jpg';

const Hero = () => {
  return (
    <section 
      className="relative h-[70vh] bg-cover bg-center bg-no-repeat flex items-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-forest-green/80 via-meadow-green/60 to-harvest-gold/40"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            EXCELLENCE IN EVERY GRAIN & SPICE
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Premium export company specializing in finest quality rice and spices from India's rich agricultural heritage
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
            >
              View Our Products
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-3 text-lg"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;