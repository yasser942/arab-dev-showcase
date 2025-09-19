import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, Github, Linkedin, Mail, Star, Award, Users, Code, ArrowRight, Sparkles, Zap } from "lucide-react";

const Hero = () => {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const stats = [
    { number: "40", label: "مشاريع مكتملة", suffix: "", icon: Code },
    { number: "15", label: "عملاء سعداء", suffix: "+", icon: Users },
    { number: "05", label: "سنوات خبرة", suffix: "", icon: Award },
    { number: "07", label: "جوائز مستلمة", suffix: "", icon: Star },
  ];

  const technologies = [
    "React", "TypeScript", "Next.js", "Tailwind CSS", "Node.js", "Laravel", "Figma", "Adobe XD"
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-gradient-hero overflow-hidden">
      {/* Enhanced Grid Pattern Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 0 0'
        }}
      />

      {/* Secondary Grid Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          backgroundPosition: '20px 20px, 20px 20px'
        }}
      />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Constant Decorative Elements */}
      {/* Top Left - Geometric Shape */}
      <div className="absolute top-16 left-8 w-20 h-20 border-2 border-primary/20 rounded-2xl rotate-12" />
      <div className="absolute top-20 left-12 w-12 h-12 bg-primary/5 rounded-xl rotate-45" />

      {/* Top Right - Code Symbol */}
      <div className="absolute top-24 right-16 w-16 h-16 bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-full flex items-center justify-center">
        <Code className="w-8 h-8 text-primary/60" />
      </div>

      {/* Middle Left - Sparkle Pattern */}
      <div className="absolute top-1/2 left-12 transform -translate-y-1/2">
        <div className="relative">
          <Sparkles className="w-6 h-6 text-primary/40" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary/20 rounded-full" />
          <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-blue-500/20 rounded-full" />
        </div>
      </div>

      {/* Middle Right - Lightning Bolt */}
      <div className="absolute top-1/2 right-20 transform -translate-y-1/2">
        <div className="w-14 h-14 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-lg flex items-center justify-center rotate-12">
          <Zap className="w-8 h-8 text-yellow-500/70" />
        </div>
      </div>

      {/* Bottom Left - Hexagon Pattern */}
      <div className="absolute bottom-32 left-16">
        <div className="relative">
          <div className="w-16 h-16 border-2 border-primary/30 transform rotate-45 rounded-lg" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-primary/10 rounded-full" />
        </div>
      </div>

      {/* Bottom Right - Star Pattern */}
      <div className="absolute bottom-20 right-12">
        <div className="relative">
          <Star className="w-10 h-10 text-primary/50" />
          <div className="absolute top-0 left-0 w-4 h-4 bg-primary/20 rounded-full" />
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-blue-500/20 rounded-full" />
        </div>
      </div>

      {/* Center Accent */}
      <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-gradient-to-br from-primary/30 to-blue-500/30 rounded-full" />
      <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-gradient-to-br from-blue-500/30 to-primary/30 rounded-full" />

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Enhanced Welcome Badge */}
        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/10 to-blue-500/10 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-3 mb-8 animate-fade-in shadow-lg">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-2xl">👋</span>
          <span className="font-arabic text-foreground font-medium">أهلاً وسهلاً بكم!</span>
          <Badge variant="secondary" className="font-arabic text-xs">متاح للعمل</Badge>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-right">
              <h1 className="font-arabic text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-foreground animate-fade-in delay-200 leading-tight">
                مرحبا بك  ,
                <br />
                <span className="text-primary">
                  لقد وصلت للمكان الصحيح
                </span>
              </h1>

              <p className="font-arabic text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-12 leading-relaxed animate-fade-in delay-400">
                أنا مطور برمجيات شغوف ومتخصص في إنشاء مواقع ويب مذهلة بصرياً وعملية للغاية.
                <span className="text-foreground font-medium">استكشف أعمالي لترى قوة التصميم الفعال في العمل</span>
              </p>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center lg:justify-start animate-fade-in delay-300">
              <div className="relative">
                <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                  <img
                    src="/profile.png"
                    alt="مطور البرمجيات"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative elements around profile */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full animate-pulse" />
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500/20 rounded-full animate-pulse delay-1000" />
                <div className="absolute top-1/2 -right-8 w-4 h-4 bg-yellow-500/20 rounded-full animate-pulse delay-500" />
              </div>
            </div>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in delay-600">
            <Button
              variant="hero"
              size="xl"
              className="font-arabic group"
              onClick={scrollToContact}
            >
              لنعمل معاً
              <ArrowRight className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="portfolio"
              size="xl"
              className="font-arabic group"
              onClick={scrollToServices}
            >
              <Code className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              استكشف الخدمات
            </Button>
          </div>

          {/* Technology Stack */}
          <div className="mb-16 animate-fade-in delay-700">
            <p className="font-arabic text-sm text-muted-foreground mb-4">تقنياتي المفضلة</p>
            <div className="flex flex-wrap justify-center gap-2">
              {technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="font-arabic bg-card/50 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto animate-fade-in delay-800">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="bg-gradient-to-br from-card/40 to-card/20 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group hover:-translate-y-2">
                <div className="flex items-center justify-center mb-3">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                  <span className="text-primary">{stat.suffix}</span>
                </div>
                <div className="font-arabic text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mt-12 animate-fade-in delay-900">
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10">
            <Github className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10">
            <Linkedin className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10">
            <Mail className="w-5 h-5" />
          </Button>
        </div>

        {/* Enhanced Scroll Indicator */}
        <button
          onClick={scrollToServices}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce group"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="font-arabic text-xs text-muted-foreground group-hover:text-foreground transition-colors">
              اكتشف المزيد
            </span>
            <ChevronDown className="w-6 h-6 text-primary group-hover:text-foreground transition-colors" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;