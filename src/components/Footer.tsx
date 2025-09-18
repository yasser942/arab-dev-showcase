import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    { name: "الرئيسية", href: "#home" },
    { name: "الأسئلة الشائعة", href: "#faq" },
    { name: "الخدمات", href: "#services" },
    { name: "التواصل", href: "#contact" },
    { name: "التذييل", href: "#footer" },
  ];

  const socialLinks = [
    { name: "Be", color: "text-blue-400", href: "#" },
    { name: "Ig", color: "text-pink-400", href: "#" },
    { name: "In", color: "text-blue-600", href: "#" },
  ];

  return (
    <footer id="footer" className="bg-card border-t border-border relative">
      <div className="container mx-auto px-6 py-12">
        {/* Logo and Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-6 md:mb-0">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">م</span>
            </div>
            <span className="font-arabic text-xl font-semibold text-foreground">
              مطور البرمجيات
            </span>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-6 md:mb-0">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-arabic text-muted-foreground hover:text-primary transition-smooth"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <span className="font-arabic text-sm text-muted-foreground ml-4">
              ابقَ على التواصل
            </span>
            {socialLinks.map((social) => (
              <Button
                key={social.name}
                variant="ghost"
                size="sm"
                asChild
                className={`${social.color} hover:bg-primary/10 transition-smooth`}
              >
                <a href={social.href}>
                  {social.name}
                </a>
              </Button>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-6 mb-8 text-center md:text-right">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <Mail className="w-5 h-5 text-primary" />
            <span className="font-arabic text-muted-foreground">
              moediab20@gmail.com
            </span>
          </div>
          
          <div className="flex items-center justify-center gap-3">
            <Phone className="w-5 h-5 text-primary" />
            <span className="font-arabic text-muted-foreground">
              +99 9384 00 0439
            </span>
          </div>
          
          <div className="flex items-center justify-center md:justify-end gap-3">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="font-arabic text-muted-foreground">
              محطتي في حلب
            </span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border">
          <p className="font-arabic text-muted-foreground text-sm mb-4 md:mb-0">
            © {currentYear} مطور البرمجيات. جميع الحقوق محفوظة.
          </p>
          
          <Button
            onClick={scrollToTop}
            variant="ghost"
            size="icon"
            className="bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-smooth"
          >
            <ArrowUp className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;