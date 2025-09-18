import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    services: {
      webDesign: false,
      mobileAppDesign: false,
      collaboration: false,
      others: false
    },
    budget: [250],
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "تم إرسال الرسالة!",
      description: "شكراً لتواصلك معي، سأقوم بالرد عليك قريباً.",
    });
  };

  const handleServiceChange = (service: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      services: {
        ...prev.services,
        [service]: checked
      }
    }));
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <Card className="bg-card/50 backdrop-blur-sm border border-border p-8 shadow-card">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name and Email */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="font-arabic block text-sm font-medium text-foreground mb-3">
                    الاسم الكامل
                  </label>
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="اكتب هنا"
                    value={formData.fullName}
                    onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                    className="font-arabic bg-input border-border focus:border-primary h-12"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="font-arabic block text-sm font-medium text-foreground mb-3">
                    البريد الإلكتروني
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="اكتب هنا"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="font-arabic bg-input border-border focus:border-primary h-12"
                    required
                  />
                </div>
              </div>

              {/* Services */}
              <div>
                <label className="font-arabic block text-sm font-medium text-foreground mb-4">
                  لماذا تتواصل معنا؟
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <Checkbox
                      id="webDesign"
                      checked={formData.services.webDesign}
                      onCheckedChange={(checked) => handleServiceChange('webDesign', !!checked)}
                      className="border-border data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                    />
                    <label htmlFor="webDesign" className="font-arabic text-sm text-foreground">
                      تصميم المواقع
                    </label>
                  </div>
                  
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <Checkbox
                      id="mobileAppDesign"
                      checked={formData.services.mobileAppDesign}
                      onCheckedChange={(checked) => handleServiceChange('mobileAppDesign', !!checked)}
                      className="border-border data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                    />
                    <label htmlFor="mobileAppDesign" className="font-arabic text-sm text-foreground">
                      تصميم التطبيقات
                    </label>
                  </div>
                  
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <Checkbox
                      id="collaboration"
                      checked={formData.services.collaboration}
                      onCheckedChange={(checked) => handleServiceChange('collaboration', !!checked)}
                      className="border-border data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                    />
                    <label htmlFor="collaboration" className="font-arabic text-sm text-foreground">
                      التعاون
                    </label>
                  </div>
                  
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <Checkbox
                      id="others"
                      checked={formData.services.others}
                      onCheckedChange={(checked) => handleServiceChange('others', !!checked)}
                      className="border-border data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                    />
                    <label htmlFor="others" className="font-arabic text-sm text-foreground">
                      أخرى
                    </label>
                  </div>
                </div>
              </div>

              {/* Budget */}
              <div>
                <label className="font-arabic block text-sm font-medium text-foreground mb-4">
                  ميزانيتك
                </label>
                <p className="font-arabic text-xs text-muted-foreground mb-3">
                  اختر ميزانيتك
                </p>
                <Slider
                  value={formData.budget}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, budget: value }))}
                  max={5000}
                  min={250}
                  step={50}
                  className="w-full mb-2"
                />
                <div className="text-right">
                  <span className="font-arabic text-sm text-foreground">
                    ${formData.budget[0]}
                  </span>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="font-arabic block text-sm font-medium text-foreground mb-3">
                  رسالتك
                </label>
                <Textarea
                  id="message"
                  placeholder="اكتب هنا"
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  className="font-arabic min-h-32 bg-input border-border focus:border-primary resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <Button type="submit" variant="hero" size="lg" className="w-full font-arabic">
                إرسال
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;