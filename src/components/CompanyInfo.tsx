import { Card, CardContent } from '@/components/ui/card';
import { Award, Globe, Truck, Shield } from 'lucide-react';

const CompanyInfo = () => {
  const features = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "We source only the finest spices and ingredients from trusted suppliers worldwide"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving customers across multiple countries with reliable international shipping"
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Efficient logistics ensure your orders reach you fresh and on time"
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous quality control processes to maintain the highest standards"
    }
  ];

  return (
    <section className="py-16 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Welcome To AQIZO INTERNATIONAL
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            AQIZO International is a premium export company based in Morbi, Gujarat, India, 
            specializing in sourcing and exporting the finest quality rice and spices across the globe. 
            With a focus on excellence and authenticity, we aim to deliver products that reflect India's rich agricultural heritage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 bg-card">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-card rounded-lg p-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">Our Vision & Mission</h3>
              <p className="text-muted-foreground mb-4">
                <strong>Vision:</strong> To become a globally trusted export brand delivering purity, quality, and value in every grain and spice we supply.
              </p>
              <p className="text-muted-foreground">
                <strong>Mission:</strong> To provide export-ready agricultural products that meet global quality standards, 
                maintain transparency and consistency, and showcase the best of India's farming produce to global markets.
              </p>
            </div>
            <div className="bg-primary/5 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4 text-card-foreground">Quick Facts</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Based in Morbi, Gujarat</li>
                <li>• Premium Rice & Spices</li>
                <li>• Global Export Focus</li>
                <li>• Quality Assured Products</li>
                <li>• Authentic Indian Heritage</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyInfo;