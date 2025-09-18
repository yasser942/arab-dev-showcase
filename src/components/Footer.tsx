import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "mailto:ahmed@example.com", label: "Email" },
  ];

  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="text-center md:text-right">
            <h3 className="font-arabic text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              أحمد محمد علي
            </h3>
            <p className="font-arabic text-muted-foreground">
              مطور برمجيات متخصص في تطوير الويب
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-arabic font-semibold text-foreground mb-4">
              روابط سريعة
            </h4>
            <div className="flex flex-col gap-2">
              <a href="#about" className="font-arabic text-muted-foreground hover:text-primary transition-smooth">
                من أنا
              </a>
              <a href="#projects" className="font-arabic text-muted-foreground hover:text-primary transition-smooth">
                أعمالي
              </a>
              <a href="#contact" className="font-arabic text-muted-foreground hover:text-primary transition-smooth">
                تواصل معي
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-left">
            <h4 className="font-arabic font-semibold text-foreground mb-4">
              تابعني
            </h4>
            <div className="flex justify-center md:justify-start gap-3">
              {socialLinks.map((link, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="hover:shadow-glow-primary transition-bounce"
                >
                  <a href={link.href} aria-label={link.label}>
                    <link.icon className="w-5 h-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border/50 text-center">
          <p className="font-arabic text-muted-foreground flex items-center justify-center gap-2">
            © {currentYear} أحمد محمد علي. جميع الحقوق محفوظة. 
            <span className="flex items-center gap-1">
              صُنع بـ <Heart className="w-4 h-4 text-red-500 fill-current" /> في المملكة العربية السعودية
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;