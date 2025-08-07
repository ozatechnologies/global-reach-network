import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SpiceCatalogue = () => {
  const spices = [
    {
      category: "CHILLI",
      name: "Premium Chilli Collection",
      arabicName: "فلفل",
      description: "International demand is driven by India's superior chilli varieties like Guntur Sannam and Teja, known for their consistent quality, heat levels, and rich red appearance — making India a leading exporter in the global spice trade.",
      image: "https://images.unsplash.com/photo-1583286018602-4c4d144004c8?auto=format&fit=crop&w=800&q=90",
      products: [
        {
          name: "GREEN CHILLI",
          arabicName: "فلفل أخضر",
          desc: "Fresh green chilies known for their sharp, crisp flavor and vibrant color. A staple in Indian cuisine, perfect for adding heat and depth to curries, stir-fries, and pickles. Handpicked and hygienically packed to preserve freshness."
        },
        {
          name: "RED CHILLI POWDER",
          arabicName: "مسحوق الفلفل الأحمر",
          desc: "Vibrant color, bold flavor. Our premium Red Chilli Powder adds the perfect heat and rich color to every dish. Made from carefully selected sun-dried chillies, it's pure, aromatic, and packed with natural spice."
        },
        {
          name: "GUNTUR SANNAM",
          desc: "Medium pungency with a bright red hue, ideal for rich color and flavor in global recipes."
        },
        {
          name: "TEJA CHILLI",
          desc: "Highly pungent and bold, widely used in spicy dishes across modern kitchens and traditional cuisines alike."
        }
      ]
    },
    {
      category: "TURMERIC",
      name: "Golden Turmeric",
      arabicName: "كُركُم",
      description: "Golden-yellow turmeric with high curcumin content, valued for its color, aroma, and natural medicinal properties. Widely used in cooking, skincare, and wellness products.",
      image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?auto=format&fit=crop&w=800&q=90",
      note: "Carefully dried and ground to maintain purity and potency"
    },
    {
      category: "CUMIN",
      name: "Aromatic Cumin Seeds",
      arabicName: "كمون",
      description: "Aromatic cumin seeds with a warm, earthy flavor and strong essential oil content. Essential in Indian spice blends and global cuisine. Known for enhancing flavor and aiding digestion.",
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=90",
      note: "Indian cumin is highly demanded across international markets"
    },
    {
      category: "SESAME SEEDS",
      name: "Premium Sesame Collection",
      arabicName: "بذور السمسم",
      description: "Rich in oil, nutty in flavor. Our high-quality Sesame Seeds are clean, uniform, and packed with nutrients. Ideal for baking, cooking, oil extraction, and garnishing.",
      image: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=800&q=90",
      products: [
        {
          name: "WHITE SESAME SEEDS",
          desc: "Mild, nutty flavor with a light color. Commonly used in baking, garnishing, tahini, and oil extraction. Rich in calcium and healthy fats."
        },
        {
          name: "BLACK SESAME SEEDS",
          desc: "Stronger flavor and higher oil content. Ideal for Asian cuisines, desserts, and traditional remedies. Known for their antioxidant properties and bold taste."
        }
      ]
    },
    {
      category: "CORIANDER SEEDS",
      name: "Premium Coriander Seeds",
      arabicName: "بذور الكزبرة",
      description: "Naturally aromatic and full of flavor. Our premium Coriander Seeds are carefully cleaned and sun-dried to preserve their citrusy, earthy essence.",
      image: "https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&w=800&q=90",
      note: "Perfect for tempering, grinding, or whole spice use in a variety of cuisines"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-charcoal-spice/5 via-warm-beige/50 to-cream-silk relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-56 h-56 bg-deep-saffron rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-golden-turmeric rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="font-cursive text-4xl text-deep-saffron">Authentic</span>
          </div>
          <h2 className="font-display text-5xl md:text-7xl font-bold text-charcoal-spice mb-6 leading-tight">
            SPICE COLLECTION
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-deep-saffron via-golden-turmeric to-amber-glow mx-auto mb-8"></div>
          <p className="text-xl text-charcoal-spice/70 max-w-3xl mx-auto font-medium">
            From ultra-premium chillies to aromatic seeds, our spices enhance taste, aroma, and nutrition in kitchens around the world.
          </p>
        </div>

        <div className="space-y-16">
          {spices.map((spice, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-[0_25px_60px_-12px_rgba(0,0,0,0.1)] bg-gradient-to-br from-pearl-white to-cream-silk">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-80 lg:h-auto overflow-hidden">
                  <img 
                    src={spice.image} 
                    alt={spice.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-spice/80 via-charcoal-spice/30 to-transparent"></div>
                  <div className="absolute top-6 left-6">
                    <Badge className="bg-gradient-to-r from-golden-turmeric to-amber-glow text-charcoal-spice font-bold border-0 text-sm">
                      INDIAN {spice.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="font-display text-3xl font-bold text-pearl-white mb-2">{spice.name}</h3>
                    <p className="font-cursive text-xl text-amber-glow">{spice.arabicName}</p>
                  </div>
                </div>
                
                <CardContent className="p-10 flex flex-col justify-center">
                  <p className="text-charcoal-spice/80 font-medium leading-relaxed mb-6 text-lg">{spice.description}</p>
                  
                  {spice.note && (
                    <div className="bg-gradient-to-r from-amber-glow/10 to-golden-turmeric/10 rounded-lg p-4 mb-6">
                      <p className="text-deep-saffron font-semibold text-center">{spice.note}</p>
                    </div>
                  )}

                  {spice.products && (
                    <div className="space-y-4">
                      <h4 className="font-display text-xl font-bold text-charcoal-spice mb-4">Premium Varieties:</h4>
                      {spice.products.map((product, pIndex) => (
                        <div key={pIndex} className="bg-warm-beige/30 rounded-lg p-4 border-l-4 border-deep-saffron">
                          <div className="flex flex-col">
                            <div className="flex items-center gap-3 mb-2">
                              <h5 className="font-bold text-deep-saffron">{product.name}</h5>
                              {product.arabicName && (
                                <span className="font-cursive text-golden-turmeric">{product.arabicName}</span>
                              )}
                            </div>
                            <p className="text-charcoal-spice/70 text-sm leading-relaxed">{product.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-20">
          <Card className="border-0 shadow-[0_30px_80px_-12px_rgba(238,90,36,0.2)] bg-gradient-to-r from-deep-saffron via-royal-paprika to-cinnamon-bronze overflow-hidden">
            <CardContent className="p-12">
              <h3 className="font-display text-4xl font-bold text-pearl-white mb-6">Beyond Premium Spices</h3>
              <p className="text-pearl-white/90 text-lg font-medium mb-6 max-w-4xl mx-auto leading-relaxed">
                In addition to our core offerings, AQIZO INTERNATIONAL proudly exports a wide range of other premium Indian spices, including <span className="font-bold">cardamom, mustard seeds, cinnamon, cloves, and more</span>. These spices are carefully sourced from trusted farms across India, known for their rich aroma, distinctive flavor, and natural purity.
              </p>
              <p className="text-pearl-white/80 font-medium">
                From kitchens to industries, our spices add value and taste to every corner of the world.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SpiceCatalogue;