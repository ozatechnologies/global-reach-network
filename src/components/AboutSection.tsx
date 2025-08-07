import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-cream-silk via-pearl-white to-warm-beige relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-48 h-48 bg-golden-turmeric rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-deep-saffron rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="font-cursive text-3xl text-deep-saffron">About</span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-charcoal-spice mb-8 leading-tight">
            AQIZO INTERNATIONAL
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-deep-saffron via-golden-turmeric to-amber-glow mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-[0_25px_60px_-12px_rgba(0,0,0,0.1)] bg-gradient-to-br from-pearl-white to-cream-silk">
            <CardContent className="p-12">
              <p className="text-lg leading-relaxed text-charcoal-spice/80 font-medium text-center mb-8">
                <span className="font-display text-2xl text-deep-saffron font-bold">AQIZO INTERNATIONAL</span> is a trusted name in the global export of premium Indian spices and agro-products. Based in India, we specialize in delivering high-quality Rice, Chilli, Coriander, Cumin, and other authentic spices to international markets.
              </p>
              
              <p className="text-lg leading-relaxed text-charcoal-spice/80 font-medium text-center mb-8">
                With a commitment to purity, flavor, and freshness, we ensure every product reflects the rich heritage and taste of Indian agriculture. Our focus on quality, timely delivery, and customer satisfaction makes us a reliable partner in the world of spice exports.
              </p>

              <div className="bg-gradient-to-r from-deep-saffron/10 via-golden-turmeric/10 to-amber-glow/10 rounded-2xl p-8 mt-12">
                <h3 className="font-display text-2xl font-bold text-charcoal-spice mb-6 text-center">Our Mission</h3>
                <p className="text-charcoal-spice/80 font-medium text-center leading-relaxed">
                  <span className="font-cursive text-xl text-deep-saffron">"</span>
                  At AQIZO INTERNATIONAL, our journey started with a deep-rooted passion for sharing the richness of Indian agriculture with the world. Coming from a land of diverse flavors and traditions, we have always believed that our spices are not just ingredients — they are a symbol of heritage, culture, and purity.
                  <span className="font-cursive text-xl text-deep-saffron">"</span>
                </p>
                <div className="text-center mt-6">
                  <p className="font-cursive text-lg text-deep-saffron">— Team Aqizo</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;