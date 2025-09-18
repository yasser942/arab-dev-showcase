import { Card } from "@/components/ui/card";
import { Code2, Brush, BarChart3 } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Brush,
      title: "التصميم",
      description: "في فريقنا المتخصص في التصميم، نحن متحمسون لإنشاء تصاميم مذهلة تركز على المستخدم وتأسر جمهورك وترفع من قيمة علامتك التجارية. نؤمن أن التصميم الرائع لا يتعلق فقط بالجماليات، بل يتعلق بإنشاء تجارب مستخدم سلسة وبديهية."
    },
    {
      icon: Code2,
      title: "التدريب",
      description: "أقدم تدريباً متخصصاً في تصميم المنتجات الرقمية، ممزوجاً بالخبرة العملية مع المنهجيات الحديثة لمساعدة المتدربين على بناء المهارات وتطبيقها بثقة في مشاريع العالم الحقيقي."
    },
    {
      icon: BarChart3,
      title: "إدارة المشاريع",
      description: "فريق إدارة المشاريع ذو الخبرة لدينا يضمن أن مشاريعك يتم تسليمها في الوقت المحدد وضمن الميزانية وحسب مواصفاتك. نتبع منهجيات معيارية في الصناعة ونستخدم التواصل والتعاون الفعال أيضاً."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group bg-card/50 backdrop-blur-sm border border-border p-8 hover:shadow-card transition-smooth">
              <div className="mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              
              <h3 className="font-arabic text-2xl font-semibold text-foreground mb-4 group-hover:text-primary transition-smooth">
                {service.title}
              </h3>
              
              <p className="font-arabic text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;