import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "تم إرسال الرسالة!",
      description: "شكراً لتواصلك معي، سأقوم بالرد عليك قريباً.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "البريد الإلكتروني",
      value: "ahmed@example.com",
      link: "mailto:ahmed@example.com"
    },
    {
      icon: Phone,
      title: "رقم الهاتف",
      value: "+966 50 123 4567",
      link: "tel:+966501234567"
    },
    {
      icon: MapPin,
      title: "الموقع",
      value: "الرياض، المملكة العربية السعودية",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-arabic text-4xl md:text-5xl font-bold mb-6 text-foreground">
            تواصل معي
          </h2>
          <p className="font-arabic text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            هل لديك مشروع جديد أو فكرة تود تنفيذها؟ لا تتردد في التواصل معي
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 shadow-elegant">
            <h3 className="font-arabic text-2xl font-semibold mb-6 text-primary">
              أرسل رسالة
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="font-arabic block text-sm font-medium text-foreground mb-2">
                  الاسم الكامل
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="أدخل اسمك الكامل"
                  className="font-arabic bg-background/50 border-border/50 focus:border-primary"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="font-arabic block text-sm font-medium text-foreground mb-2">
                  البريد الإلكتروني
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="أدخل بريدك الإلكتروني"
                  className="font-arabic bg-background/50 border-border/50 focus:border-primary"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="font-arabic block text-sm font-medium text-foreground mb-2">
                  الرسالة
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="اكتب رسالتك هنا..."
                  className="font-arabic min-h-32 bg-background/50 border-border/50 focus:border-primary resize-none"
                  required
                />
              </div>
              
              <Button type="submit" variant="hero" size="lg" className="w-full font-arabic">
                <Send className="w-5 h-5 mr-2" />
                إرسال الرسالة
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 shadow-elegant">
              <h3 className="font-arabic text-2xl font-semibold mb-6 text-primary">
                معلومات التواصل
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-center gap-4 p-4 bg-background/30 rounded-lg hover:bg-primary/10 transition-smooth group"
                  >
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-smooth">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-arabic font-semibold text-foreground group-hover:text-primary transition-smooth">
                        {info.title}
                      </h4>
                      <p className="font-arabic text-muted-foreground">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            {/* Availability Card */}
            <Card className="p-8 bg-gradient-primary text-primary-foreground">
              <h3 className="font-arabic text-xl font-semibold mb-4">
                متاح للعمل
              </h3>
              <p className="font-arabic leading-relaxed mb-4">
                أبحث حالياً عن فرص جديدة ومشاريع مثيرة للاهتمام. إذا كان لديك مشروع يحتاج لخبرتي، فلا تتردد في التواصل معي.
              </p>
              <Button variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                تحميل السيرة الذاتية
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;