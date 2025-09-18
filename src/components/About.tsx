import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Globe, Server } from "lucide-react";

const About = () => {
  const skills = [
    { category: "Frontend", icon: Globe, skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js"] },
    { category: "Backend", icon: Server, skills: ["Node.js", "Express", "Python", "Django", "PostgreSQL"] },
    { category: "Tools", icon: Code2, skills: ["Git", "Docker", "AWS", "Firebase", "Figma"] },
    { category: "Database", icon: Database, skills: ["MongoDB", "PostgreSQL", "Redis", "MySQL"] },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-arabic text-4xl md:text-5xl font-bold mb-6 text-foreground">
            من أنا؟
          </h2>
          <p className="font-arabic text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            مطور برمجيات بخبرة 5+ سنوات في تطوير التطبيقات الحديثة وحلول الويب المتقدمة
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className="space-y-6">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 shadow-elegant">
              <h3 className="font-arabic text-2xl font-semibold mb-4 text-primary">
                رحلتي في البرمجة
              </h3>
              <p className="font-arabic text-muted-foreground leading-relaxed mb-4">
                بدأت رحلتي في عالم البرمجة منذ أكثر من 5 سنوات، حيث تخصصت في تطوير تطبيقات الويب الحديثة باستخدام أحدث التقنيات. أؤمن بأن التكنولوجيا يمكنها حل المشاكل الحقيقية وتحسين حياة الناس.
              </p>
              <p className="font-arabic text-muted-foreground leading-relaxed">
                أركز على كتابة كود نظيف وقابل للصيانة، مع الاهتمام بتجربة المستخدم والأداء العالي. أحب التعلم المستمر ومواكبة أحدث التطورات في عالم التقنية.
              </p>
            </Card>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((category, index) => (
              <Card key={index} className="p-6 bg-card/30 backdrop-blur-sm border-border/50 hover:shadow-primary transition-smooth group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-smooth">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-arabic text-lg font-semibold text-foreground">
                    {category.category}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;