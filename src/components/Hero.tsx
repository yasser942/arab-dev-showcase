import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const stats = [
    { number: "40", label: "مشاريع مكتملة", suffix: "" },
    { number: "15", label: "عملاء سعداء", suffix: "+" },
    { number: "05", label: "سنوات خبرة", suffix: "" },
    { number: "07", label: "جوائز مستلمة", suffix: "" },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-gradient-hero overflow-hidden">
      {/* Grid Background Pattern */}
      <div 
        className="absolute inset-0 bg-grid-pattern bg-grid opacity-20"
        style={{ backgroundPosition: '0 0, 10px 10px' }}
      />
      
      {/* Floating Geometric Shapes */}
      <div className="absolute top-20 left-10 w-16 h-16 border-2 border-primary/30 rounded-lg rotate-45 animate-float" />
      <div className="absolute top-40 right-20 w-8 h-8 bg-primary/20 rounded-full animate-float delay-1000" />
      <div className="absolute bottom-40 left-20 w-12 h-12 border border-primary/40 rotate-12 animate-float delay-500" />
      <div className="absolute top-60 right-40 text-primary/30 text-6xl animate-float delay-700">✳</div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Welcome Badge */}
        <div className="inline-flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border rounded-full px-4 py-2 mb-8 animate-fade-in">
          <span className="text-2xl">👋</span>
          <span className="font-arabic text-muted-foreground">أهلاً وسهلاً بكم!</span>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <h1 className="font-arabic text-5xl md:text-7xl font-bold mb-6 text-foreground animate-fade-in delay-200">
            أطلق العنان لتأثيرك الرقمي
            <br />
            <span className="text-primary">من خلال الإبداع اللامحدود</span>
          </h1>
          
          <p className="font-arabic text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in delay-400">
            أنا مطور برمجيات شغوف ومتخصص في إنشاء مواقع ويب مذهلة بصرياً وعملية للغاية. استكشف أعمالي لترى قوة التصميم الفعال في العمل
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in delay-600">
            <Button variant="hero" size="xl" className="font-arabic">
              لنعمل معاً
            </Button>
            <Button variant="portfolio" size="xl" className="font-arabic">
              تواصل معي
            </Button>
          </div>
          
          {/* Skills Tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-16 animate-fade-in delay-700">
            {["UI Design", "UX Design", "Workflow Development", "Social Media Design", "Visual Interaction", "Product Design", "Custom Development", "Graphic Design"].map((skill) => (
              <span key={skill} className="px-3 py-1 bg-card/30 backdrop-blur-sm border border-border rounded-full text-sm text-muted-foreground">
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-fade-in delay-800">
          {stats.map((stat, index) => (
            <div key={index} className="bg-card/30 backdrop-blur-sm border border-border rounded-lg p-6 hover:shadow-card transition-smooth group">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-smooth">
                {stat.number}
                <span className="text-primary">{stat.suffix}</span>
              </div>
              <div className="font-arabic text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        
        {/* Scroll Indicator */}
        <button 
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="w-6 h-6 text-primary" />
        </button>
      </div>
    </section>
  );
};

export default Hero;