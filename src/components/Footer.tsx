import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, ArrowUp, Github, Linkedin, Twitter, Instagram, Code, Award, Clock, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    { name: "الرئيسية", href: "#home" },
    { name: "الخدمات", href: "#services" },
    { name: "الأسئلة الشائعة", href: "#faq" },
    { name: "التواصل", href: "#contact" },
  ];

  const serviceLinks = [
    { name: "تصميم المواقع", href: "#services" },
    { name: "تطوير التطبيقات", href: "#services" },
    { name: "التصميم الجرافيكي", href: "#services" },
    { name: "الاستشارات التقنية", href: "#services" },
  ];

  const socialLinks = [
    { name: "Github", icon: Github, color: "hover:text-gray-400", href: "#" },
    { name: "LinkedIn", icon: Linkedin, color: "hover:text-blue-600", href: "#" },
    { name: "Twitter", icon: Twitter, color: "hover:text-blue-400", href: "#" },
    { name: "Instagram", icon: Instagram, color: "hover:text-pink-500", href: "#" },
  ];

  const quickStats = [
    { icon: Code, label: "مشاريع مكتملة", value: "40+" },
    { icon: Award, label: "سنوات خبرة", value: "5+" },
    { icon: Clock, label: "وقت الاستجابة", value: "24 ساعة" },
  ];

  return (
    <footer id="footer" className="bg-gradient-to-br from-card to-card/80 border-t border-border relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px'
        }}
      />

      <div className="container mx-auto px-6 py-16 relative">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-2xl">ي</span>
            </div>
            <div className="text-right">
              <h3 className="font-arabic text-2xl font-bold text-foreground">ياسر الحسن</h3>
              <p className="font-arabic text-muted-foreground">حلول رقمية مبتكرة</p>
            </div>
          </div>

          <p className="font-arabic text-muted-foreground max-w-2xl mx-auto mb-6">
            نحن نؤمن بقوة التكنولوجيا في تحويل الأفكار إلى واقع رقمي مذهل.
            <span className="text-foreground font-medium">دعنا نبني المستقبل معاً</span>
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <Badge variant="secondary" className="font-arabic">متاح للعمل</Badge>
            <Badge variant="outline" className="font-arabic">استشارة مجانية</Badge>
            <Badge variant="secondary" className="font-arabic">رد سريع</Badge>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          {/* Quick Stats */}
          <div className="space-y-4">
            <h4 className="font-arabic text-lg font-semibold text-foreground mb-4">إحصائيات سريعة</h4>
            {quickStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <IconComponent className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-arabic text-sm text-muted-foreground">{stat.label}</div>
                    <div className="font-arabic text-lg font-semibold text-foreground">{stat.value}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h4 className="font-arabic text-lg font-semibold text-foreground mb-4">روابط سريعة</h4>
            <div className="space-y-2">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block font-arabic text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-arabic text-lg font-semibold text-foreground mb-4">خدماتنا</h4>
            <div className="space-y-2">
              {serviceLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block font-arabic text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="font-arabic text-lg font-semibold text-foreground mb-4">تواصل معنا</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:moediab20@gmail.com" className="font-arabic text-sm text-muted-foreground hover:text-primary transition-colors">
                  moediab20@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+999384000439" className="font-arabic text-sm text-muted-foreground hover:text-primary transition-colors">
                  +99 9384 00 0439
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="font-arabic text-sm text-muted-foreground">حلب، سوريا</span>
              </div>
            </div>

            <div className="pt-4">
              <p className="font-arabic text-sm text-muted-foreground mb-3">تابعنا على</p>
              <div className="flex gap-2">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <Button
                      key={social.name}
                      variant="ghost"
                      size="icon"
                      asChild
                      className={`w-10 h-10 ${social.color} hover:bg-primary/10 transition-all duration-300`}
                    >
                      <a href={social.href} aria-label={social.name}>
                        <IconComponent className="w-5 h-5" />
                      </a>
                    </Button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-border/50 mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <p className="font-arabic text-muted-foreground text-sm">
              © {currentYear} مطور البرمجيات. جميع الحقوق محفوظة.
            </p>
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="font-arabic text-sm">صُنع بـ</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span className="font-arabic text-sm">في سوريا</span>
            </div>
          </div>

          <Button
            onClick={scrollToTop}
            variant="ghost"
            size="icon"
            className="bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
          >
            <ArrowUp className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;