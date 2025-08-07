import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-rice.jpg';

const Hero = () => {
  return (
    <section 
      className="relative h-[85vh] bg-cover bg-center bg-no-repeat flex items-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Premium Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-chili-red/85 via-paprika-orange/70 to-turmeric-yellow/50"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl text-white">
          <div className="mb-6">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-4">
              <div className="w-2 h-2 bg-turmeric-yellow rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold tracking-wide">AQIZO INTERNATIONAL - TRUSTED GLOBALLY</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            EXCELLENCE IN EVERY 
            <span className="block bg-gradient-to-r from-turmeric-yellow to-paprika-orange bg-clip-text text-transparent">
              GRAIN & SPICE
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-10 text-white/95 leading-relaxed max-w-3xl">
            Step into a world of spices and aromas with our vibrant collection sourced directly from the heart of India. 
            100% Natural • Pure Vegetarian • Premium Export Quality
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-turmeric-yellow to-paprika-orange hover:from-paprika-orange hover:to-chili-red text-white font-bold px-12 py-4 text-lg shadow-[0_10px_30px_-10px_rgba(238,90,36,0.5)] hover:shadow-[0_20px_40px_-10px_rgba(238,90,36,0.7)] transition-all duration-300"
            >
              View Our Catalogue
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-primary px-12 py-4 text-lg font-semibold transition-all duration-300"
            >
              Contact Us Today
            </Button>
          </div>
          
          <div className="mt-12 flex items-center gap-8 text-white/80">
            <div className="text-center">
              <div className="text-2xl font-bold text-turmeric-yellow">50+</div>
              <div className="text-sm">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-turmeric-yellow">1000+</div>
              <div className="text-sm">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-turmeric-yellow">100%</div>
              <div className="text-sm">Quality Assured</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;