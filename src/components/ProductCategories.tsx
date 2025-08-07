import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ProductCategories = () => {
  const categories = [
    {
      title: "Premium Basmati Rice",
      description: "Ultra-long grain, naturally aromatic, and beautifully non-sticky. Preferred choice for Middle Eastern cuisine and global premium markets.",
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=90",
      badge: "Flagship Export",
      products: [
        "1121 Basmati Rice - White & Golden Sella",
        "1509 Basmati Rice - White & Golden Sella", 
        "Pusa Basmati Rice - Steam & Sella",
        "Jeerakashala Rice - Premium Kerala variety"
      ]
    },
    {
      title: "Specialty Rice Varieties",
      description: "Traditional and regional rice varieties known for their unique aroma, texture, and culinary applications.",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=90",
      badge: "Heritage Collection",
      products: [
        "Sona Masoori Rice - South Indian favorite",
        "Lachkari Kolam Rice - Raw & Steam",
        "Parboiled Rice varieties",
        "Custom rice processing"
      ]
    },
    {
      title: "Premium Spice Collection",
      description: "Authentic Indian spices sourced directly from the heart of India. 100% natural, pure vegetarian with rich heritage and taste.",
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=90",
      badge: "100% Natural",
      products: [
        "Red Chilli Powder - Guntur Sannam & Teja",
        "Fresh Green Chilli - Sharp & vibrant",
        "Turmeric - High curcumin content",
        "Premium Cumin Seeds"
      ]
    },
    {
      title: "Seeds & Essential Spices",
      description: "Rich in oil, aromatic, and full of flavor. Our premium seeds and spices enhance taste, aroma, and nutrition in global cuisines.",
      image: "https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&w=800&q=90",
      badge: "Export Quality",
      products: [
        "Coriander Seeds - Citrusy & earthy",
        "White & Black Sesame Seeds",
        "Cardamom, Cinnamon, Cloves",
        "Mustard Seeds & more"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-cream/20 to-rice-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-turmeric-yellow rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-chili-red rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-paprika-orange rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full">
              STEP INTO A WORLD OF SPICES AND AROMAS
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            OUR VIBRANT COLLECTION
          </h2>
          <p className="text-xl text-muted-foreground mb-4 max-w-3xl mx-auto">
            SOURCED DIRECTLY FROM THE HEART OF INDIA
          </p>
          <div className="flex items-center justify-center gap-8 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm font-semibold text-foreground">100% NATURAL</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm font-semibold text-foreground">PURE VEG</span>
            </div>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-chili-red via-paprika-orange to-turmeric-yellow mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {categories.map((category, index) => (
            <Card key={index} className="group overflow-hidden border-0 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_60px_-12px_rgba(238,90,36,0.25)] transition-all duration-500 bg-gradient-to-br from-background to-rice-white/50">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-turmeric-yellow to-paprika-orange text-white text-xs font-bold px-3 py-1 rounded-full">
                    {category.badge}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                </div>
              </div>
              
              <CardContent className="p-8">
                <p className="text-muted-foreground mb-6 leading-relaxed">{category.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-bold text-foreground mb-4 text-lg">Premium Varieties:</h4>
                  <ul className="space-y-3">
                    {category.products.map((product, productIndex) => (
                      <li key={productIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-chili-red to-paprika-orange rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{product}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground border-2 border-primary/20 hover:border-primary/40 transition-all duration-300"
                >
                  Explore Products
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-chili-red via-paprika-orange to-turmeric-yellow p-8 rounded-2xl shadow-[0_25px_50px_-12px_rgba(238,90,36,0.25)]">
            <h3 className="text-2xl font-bold text-white mb-4">Experience the Authentic Taste of India</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              From ultra-long grain Basmati rice to aromatic spices, our premium collection meets every culinary need with unmatched quality and authenticity.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-rice-white px-12 py-4 text-lg font-semibold"
            >
              View Complete Catalogue
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;