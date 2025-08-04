import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ProductCategories = () => {
  const categories = [
    {
      title: "Premium Rice",
      description: "Export-quality rice varieties including Basmati and specialty rices",
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=500&q=80",
      products: ["1121 Basmati Rice", "Pusa Basmati Rice", "Sona Masoori Rice", "Jeerakashala Rice"]
    },
    {
      title: "Processed Rice",
      description: "Steam, Sella, and Parboiled rice varieties for global markets",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=500&q=80",
      products: ["White Sella Rice", "Parboiled Rice", "Steam Rice", "Raw Basmati"]
    },
    {
      title: "Premium Spices",
      description: "Authentic Indian spices sourced from finest farms across India",
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=500&q=80",
      products: ["Turmeric Fingers", "Cumin Seeds", "Coriander Seeds", "Red Chilli"]
    },
    {
      title: "Spice Powders",
      description: "Fresh ground spice powders maintaining authentic flavors and quality",
      image: "https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&w=500&q=80",
      products: ["Turmeric Powder", "Green Chilli", "Custom Blends", "Other Indian Spices"]
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Product Categories
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive range of premium spices and ingredients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">{category.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{category.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-medium text-card-foreground mb-2">Featured Products:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {category.products.map((product, productIndex) => (
                      <li key={productIndex}>• {product}</li>
                    ))}
                  </ul>
                </div>

                <Button variant="outline" className="w-full">
                  View Products
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="px-8 py-3">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;