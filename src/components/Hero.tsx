import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <h1 className="font-arabic text-6xl md:text-8xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            أحمد محمد علي
          </h1>
          
          <h2 className="font-arabic text-2xl md:text-4xl font-medium text-muted-foreground mb-8">
            مطور برمجيات متخصص في تطوير الويب
          </h2>
          
          <p className="font-arabic text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            مبرمج شغوف بتطوير الحلول التقنية الإبداعية باستخدام أحدث التقنيات مثل React، Node.js، و TypeScript
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button variant="hero" size="xl" className="font-arabic">
              تصفح أعمالي
            </Button>
            <Button variant="portfolio" size="xl" className="font-arabic">
              تواصل معي
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-16">
            <Button variant="ghost" size="icon" className="hover:shadow-glow-primary transition-bounce">
              <Github className="w-6 h-6" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:shadow-glow-primary transition-bounce">
              <Linkedin className="w-6 h-6" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:shadow-glow-primary transition-bounce">
              <Mail className="w-6 h-6" />
            </Button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <button 
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="w-8 h-8 text-primary" />
        </button>
      </div>
    </section>
  );
};

export default Hero;