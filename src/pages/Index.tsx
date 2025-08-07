import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import RiceCatalogue from '@/components/RiceCatalogue';
import SpiceCatalogue from '@/components/SpiceCatalogue';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <AboutSection />
      <RiceCatalogue />
      <SpiceCatalogue />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
