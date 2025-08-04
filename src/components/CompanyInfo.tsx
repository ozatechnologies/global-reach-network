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
            Welcome To YEDHANT INTERNATIONAL
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We are a leading supplier of premium spices and food ingredients, 
            committed to delivering exceptional quality products to businesses 
            and customers worldwide.
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
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">Our Commitment</h3>
              <p className="text-muted-foreground mb-4">
                At Yedhant International, we understand that quality is paramount when it comes 
                to spices and food ingredients. Our team works tirelessly to maintain the highest 
                standards of quality, purity, and freshness in every product we offer.
              </p>
              <p className="text-muted-foreground">
                From farm to your table, we ensure complete traceability and quality control 
                throughout our supply chain. Our commitment to excellence has made us a trusted 
                partner for businesses across the globe.
              </p>
            </div>
            <div className="bg-primary/5 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4 text-card-foreground">Quick Facts</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Established in 2010</li>
                <li>• 500+ Product varieties</li>
                <li>• 50+ Countries served</li>
                <li>• ISO certified facilities</li>
                <li>• 24/7 customer support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyInfo;