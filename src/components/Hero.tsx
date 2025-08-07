import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-rice.jpg';

const Hero = () => {
  return (
    <section 
      className="relative h-screen bg-cover bg-center bg-no-repeat flex items-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Ultra Premium Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal-spice/85 via-deep-saffron/70 to-royal-paprika/60"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-cinnamon-bronze/60 via-transparent to-transparent"></div>
      
      {/* Luxury Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-golden-turmeric rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-amber-glow rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl text-pearl-white">
          <div className="mb-8">
            <div className="inline-flex items-center gap-4 bg-pearl-white/10 backdrop-blur-sm border border-pearl-white/20 rounded-full px-8 py-4 mb-6">
              <div className="w-3 h-3 bg-amber-glow rounded-full animate-pulse"></div>
              <span className="font-display text-sm font-bold tracking-wider uppercase">AQIZO INTERNATIONAL - TRUSTED GLOBALLY</span>
            </div>
          </div>
          
          <div className="mb-8">
            <h1 className="font-display text-6xl md:text-8xl font-bold mb-6 leading-tight">
              STEP INTO A WORLD OF
            </h1>
            <h2 className="font-cursive text-5xl md:text-7xl mb-4 bg-gradient-to-r from-amber-glow via-golden-turmeric to-pearl-white bg-clip-text text-transparent">
              Spices & Aromas
            </h2>
            <p className="font-display text-2xl md:text-3xl font-semibold text-amber-glow/90 mb-8">
              WITH OUR VIBRANT COLLECTION
            </p>
          </div>
          
          <div className="mb-10">
            <p className="text-xl md:text-2xl font-medium text-pearl-white/95 leading-relaxed max-w-4xl mb-8">
              SOURCED DIRECTLY FROM THE HEART OF INDIA
            </p>
            
            <div className="flex items-center gap-8 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-green-400 rounded-full shadow-lg shadow-green-400/50"></div>
                <span className="font-bold text-lg tracking-wide">100% NATURAL</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-green-400 rounded-full shadow-lg shadow-green-400/50"></div>
                <span className="font-bold text-lg tracking-wide">PURE VEG</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 mb-12">
            <button className="group bg-gradient-to-r from-amber-glow via-golden-turmeric to-deep-saffron hover:from-deep-saffron hover:via-royal-paprika hover:to-cinnamon-bronze text-charcoal-spice font-bold px-16 py-5 text-xl rounded-full shadow-[0_15px_40px_-10px_rgba(238,90,36,0.6)] hover:shadow-[0_25px_60px_-10px_rgba(238,90,36,0.8)] transition-all duration-500 transform hover:-translate-y-1">
              <span className="font-display">VIEW CATALOGUE</span>
            </button>
            <button className="group border-2 border-pearl-white/40 bg-pearl-white/10 backdrop-blur-sm text-pearl-white hover:bg-pearl-white hover:text-charcoal-spice px-16 py-5 text-xl font-bold rounded-full transition-all duration-500 transform hover:-translate-y-1">
              <span className="font-display">CONTACT US</span>
            </button>
          </div>
          
          <div className="flex items-center gap-12 text-pearl-white/80">
            <div className="text-center">
              <div className="font-display text-4xl font-bold text-amber-glow mb-2">50+</div>
              <div className="text-sm font-semibold tracking-wide">COUNTRIES SERVED</div>
            </div>
            <div className="text-center">
              <div className="font-display text-4xl font-bold text-amber-glow mb-2">1000+</div>
              <div className="text-sm font-semibold tracking-wide">HAPPY CLIENTS</div>
            </div>
            <div className="text-center">
              <div className="font-display text-4xl font-bold text-amber-glow mb-2">100%</div>
              <div className="text-sm font-semibold tracking-wide">QUALITY ASSURED</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;