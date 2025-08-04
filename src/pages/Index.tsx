import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CompanyInfo from '@/components/CompanyInfo';
import ProductCategories from '@/components/ProductCategories';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <CompanyInfo />
      <ProductCategories />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
