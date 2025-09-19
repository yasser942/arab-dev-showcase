import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Zap,
  Star,
  CheckCircle,
  ArrowRight,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Code,
  Award,
  Users
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    projectType: 'website'
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "تم إرسال الرسالة!",
      description: "شكراً لتواصلك معي، سأقوم بالرد عليك خلال 24 ساعة.",
    });
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      projectType: 'website'
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "البريد الإلكتروني",
      value: "moediab20@gmail.com",
      description: "أسرع طريقة للتواصل",
      href: "mailto:moediab20@gmail.com"
    },
    {
      icon: Phone,
      title: "الهاتف",
      value: "+99 9384 00 0439",
      description: "متاح من 9 صباحاً - 5 مساءً",
      href: "tel:+999384000439"
    },
    {
      icon: MapPin,
      title: "الموقع",
      value: "حلب، سوريا",
      description: "أعمل من مكتبي المنزلي",
      href: "#"
    }
  ];

  const projectTypes = [
    { value: 'website', label: 'موقع ويب', icon: Code },
    { value: 'mobile', label: 'تطبيق جوال', icon: MessageCircle },
    { value: 'design', label: 'تصميم جرافيكي', icon: Star },
    { value: 'consultation', label: 'استشارة تقنية', icon: Award },
    { value: 'other', label: 'أخرى', icon: Zap }
  ];

  const socialLinks = [
    { icon: Github, href: "#", label: "Github" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" }
  ];

  const features = [
    { icon: Clock, text: "رد خلال 24 ساعة" },
    { icon: CheckCircle, text: "استشارة مجانية" },
    { icon: Users, text: "دعم مستمر" }
  ];

  return (
    <section id="contact" className="relative py-24 bg-background overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex flex-col items-center gap-6">
            {/* Profile Image */}
            <div className="relative">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
                <img
                  src="/profile.png"
                  alt="ياسر الحسن"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-background animate-pulse" />
            </div>

            <div>
              <Badge variant="secondary" className="font-arabic mb-4">
                <MessageCircle className="w-4 h-4 ml-2" />
                تواصل معي
              </Badge>
              <h2 className="font-arabic text-4xl md:text-5xl font-bold text-foreground mb-6">
                دعنا نبدأ مشروعك
                <br />
                <span className="text-primary">
                  معاً
                </span>
              </h2>
              <p className="font-arabic text-lg text-muted-foreground max-w-2xl mx-auto">
                مستعد لتحويل فكرتك إلى واقع رقمي مذهل؟ تواصل معي الآن وسأكون سعيداً لمساعدتك
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Contact Methods */}
          <div className="space-y-8">
            <div>
              <h3 className="font-arabic text-2xl font-semibold text-foreground mb-4">طرق التواصل</h3>
              <p className="font-arabic text-muted-foreground mb-6">اختر الطريقة التي تناسبك للتواصل معي</p>
            </div>

            <div className="space-y-4">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-arabic font-semibold text-foreground mb-1">{method.title}</h4>
                        <a
                          href={method.href}
                          className="font-arabic text-primary hover:text-primary/80 transition-colors block mb-1"
                        >
                          {method.value}
                        </a>
                        <p className="font-arabic text-sm text-muted-foreground">{method.description}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Features */}
            <div className="space-y-3">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/20">
                      <IconComponent className="w-4 h-4 text-green-600 dark:text-green-400" />
                    </div>
                    <span className="font-arabic text-sm text-foreground">{feature.text}</span>
                  </div>
                );
              })}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-arabic font-semibold text-foreground mb-4">تابعني على</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <Button
                      key={index}
                      variant="outline"
                      size="icon"
                      asChild
                      className="w-12 h-12 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
                    >
                      <a href={social.href} aria-label={social.label}>
                        <IconComponent className="w-5 h-5" />
                      </a>
                    </Button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8 shadow-xl">
              <div className="mb-8">
                <h3 className="font-arabic text-2xl font-semibold text-foreground mb-2">أرسل رسالة</h3>
                <p className="font-arabic text-muted-foreground">أخبرني عن مشروعك وسأعود إليك قريباً</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="font-arabic block text-sm font-medium text-foreground mb-2">
                      الاسم الكامل *
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="اكتب اسمك هنا"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="font-arabic h-12"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="font-arabic block text-sm font-medium text-foreground mb-2">
                      البريد الإلكتروني *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="font-arabic h-12"
                      required
                    />
                  </div>
                </div>

                {/* Project Type */}
                <div>
                  <label className="font-arabic block text-sm font-medium text-foreground mb-3">
                    نوع المشروع
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {projectTypes.map((type) => {
                      const IconComponent = type.icon;
                      return (
                        <button
                          key={type.value}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, projectType: type.value }))}
                          className={`p-4 rounded-lg border-2 transition-all duration-300 text-right ${formData.projectType === type.value
                            ? 'border-primary bg-primary/5 text-primary'
                            : 'border-border hover:border-primary/50 hover:bg-primary/5'
                            }`}
                        >
                          <div className="flex items-center gap-3">
                            <IconComponent className="w-5 h-5" />
                            <span className="font-arabic text-sm font-medium">{type.label}</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="font-arabic block text-sm font-medium text-foreground mb-2">
                    موضوع الرسالة
                  </label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="مثال: أحتاج موقع ويب لشركتي"
                    value={formData.subject}
                    onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                    className="font-arabic h-12"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="font-arabic block text-sm font-medium text-foreground mb-2">
                    تفاصيل المشروع *
                  </label>
                  <Textarea
                    id="message"
                    placeholder="أخبرني عن مشروعك، متطلباتك، وميزانيتك التقريبية..."
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    className="font-arabic min-h-32 resize-none"
                    required
                  />
                </div>

                {/* Submit Button */}
                <Button type="submit" size="lg" className="w-full font-arabic group">
                  <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  إرسال الرسالة
                  <ArrowRight className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;