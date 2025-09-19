import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Services from "../components/Services";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-arabic" dir="rtl">
      <Navigation />
      <main className="pt-16 md:pt-20">
        <section id="home">
          <Hero />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="faq">
          <FAQ />
        </section>
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
