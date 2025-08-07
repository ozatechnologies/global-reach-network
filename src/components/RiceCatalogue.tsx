import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const RiceCatalogue = () => {
  const riceVarieties = [
    {
      name: "1121 BASMATI RICE",
      arabicName: "أرز 1121 بسمتي",
      description: "Our flagship export - ultra-long grains, naturally aromatic, and beautifully non-sticky. A preferred choice for Middle Eastern cuisine and global premium markets.",
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=90",
      varieties: [
        { type: "WHITE SELLA", desc: "Parboiled rice with long grains, non-sticky texture, and easy cooking. Ideal for restaurants and bulk use." },
        { type: "GOLDEN SELLA", desc: "Golden-hued, aromatic rice with rich flavor and firm texture. Enhances the appeal of premium rice dishes." }
      ]
    },
    {
      name: "1509 BASMATI RICE",
      arabicName: "أرز 1509 بسمتي",
      description: "A premium, early-maturing basmati variety with long grains, a delicate aroma, and soft texture. Ideal for daily meals and light biryani dishes.",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=90",
      varieties: [
        { type: "WHITE SELLA", desc: "Parboiled rice with long, slender grains and a non-sticky texture. Easy to cook and widely used in hotels and catering." },
        { type: "GOLDEN SELLA", desc: "Golden-colored, aromatic rice with firm grains and great taste. Perfect for attractive and flavorful rice preparations." }
      ]
    },
    {
      name: "PUSA BASMATI RICE",
      arabicName: "أرز بسمتي بوسا",
      description: "A classic basmati variety with medium-long grains, rich aroma, and soft texture. Known for its affordable quality and consistent performance in both domestic and international markets.",
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=90",
      varieties: [
        { type: "STEAM", desc: "Soft, fluffy, and naturally aromatic grains. Ideal for daily meals and light cuisines with a homely touch." },
        { type: "SELLA", desc: "Parboiled rice with firm grains and great cooking yield. Perfect for bulk catering and food service operations." }
      ]
    },
    {
      name: "JEERAKASHALA RICE",
      arabicName: "أرز جيراكاشالا",
      description: "A premium short-grain rice native to Kerala, known for its unique aroma, soft texture, and quick cooking. Perfect for traditional dishes like Malabar biryani, ghee rice, and festive meals.",
      image: "https://images.unsplash.com/photo-1550461716-dbf266b2a8a7?auto=format&fit=crop&w=800&q=90",
      specialNote: "Small in size but rich in flavor"
    },
    {
      name: "LACHKARI KOLAM RICE",
      arabicName: "أرز لاشكاري كولام",
      description: "A popular short-grain rice known for its soft texture, natural aroma, and slightly sweet taste. Ideal for everyday cooking, especially in Gujarati and Maharashtrian households.",
      image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=800&q=90",
      varieties: [
        { type: "RAW", desc: "Naturally processed with soft grains and a subtle aroma. Ideal for traditional home-cooked meals." },
        { type: "STEAM", desc: "Steam-processed for better shelf life and fluffier grains. Cooks evenly and stays non-sticky, perfect for everyday use." }
      ]
    },
    {
      name: "SONA MASOORI RICE",
      arabicName: "أرز سونا ماسوري",
      description: "A lightweight, medium-grain rice with a soft texture and mild aroma. Popular in South Indian cuisine, perfect for daily meals like pongal, idli, dosa, and steamed rice dishes.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=90",
      specialNote: "Specially for South Indian & Sri Lankan population",
      note: "Easy to cook and highly digestible"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-pearl-white via-cream-silk to-warm-beige relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-40 h-40 bg-golden-turmeric rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-deep-saffron rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="font-cursive text-4xl text-deep-saffron">Premium</span>
          </div>
          <h2 className="font-display text-5xl md:text-7xl font-bold text-charcoal-spice mb-6 leading-tight">
            RICE COLLECTION
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-deep-saffron via-golden-turmeric to-amber-glow mx-auto mb-8"></div>
          <p className="text-xl text-charcoal-spice/70 max-w-3xl mx-auto font-medium">
            India's premium rice is highly sought-after across the Gulf for its exceptional aroma, extra-long grains, and unmatched taste — meeting the region's growing demand for quality.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {riceVarieties.map((rice, index) => (
            <Card key={index} className="group overflow-hidden border-0 shadow-[0_20px_60px_-12px_rgba(0,0,0,0.15)] hover:shadow-[0_30px_80px_-12px_rgba(238,90,36,0.25)] transition-all duration-700 bg-gradient-to-br from-pearl-white to-cream-silk">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={rice.image} 
                  alt={rice.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-spice/80 via-charcoal-spice/30 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-gradient-to-r from-golden-turmeric to-amber-glow text-charcoal-spice font-bold border-0">
                    INDIAN RICE
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-display text-2xl font-bold text-pearl-white mb-2">{rice.name}</h3>
                  <p className="font-cursive text-lg text-amber-glow">{rice.arabicName}</p>
                </div>
              </div>
              
              <CardContent className="p-8">
                <p className="text-charcoal-spice/80 font-medium leading-relaxed mb-6">{rice.description}</p>
                
                {rice.specialNote && (
                  <div className="bg-gradient-to-r from-amber-glow/10 to-golden-turmeric/10 rounded-lg p-4 mb-6">
                    <p className="text-deep-saffron font-semibold text-center">{rice.specialNote}</p>
                    {rice.note && <p className="text-charcoal-spice/70 text-sm text-center mt-2">{rice.note}</p>}
                  </div>
                )}

                {rice.varieties && (
                  <div className="space-y-4">
                    <h4 className="font-display text-lg font-bold text-charcoal-spice">Available Varieties:</h4>
                    {rice.varieties.map((variety, vIndex) => (
                      <div key={vIndex} className="bg-warm-beige/50 rounded-lg p-4">
                        <h5 className="font-bold text-deep-saffron mb-2">{variety.type}</h5>
                        <p className="text-charcoal-spice/70 text-sm">{variety.desc}</p>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-deep-saffron via-royal-paprika to-cinnamon-bronze p-8 rounded-2xl shadow-[0_25px_60px_-12px_rgba(238,90,36,0.3)]">
            <h3 className="font-display text-3xl font-bold text-pearl-white mb-4">Premium Quality Assurance</h3>
            <p className="text-pearl-white/90 text-lg font-medium">
              These rice varieties are known for their quality, aroma, and long grains - meeting global standards for export excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RiceCatalogue;