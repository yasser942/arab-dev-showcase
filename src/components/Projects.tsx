import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "منصة التجارة الإلكترونية",
      description: "منصة شاملة للتجارة الإلكترونية مع نظام إدارة المخزون ومعالجة المدفوعات",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "تطبيق إدارة المشاريع",
      description: "أداة لإدارة المشاريع والمهام مع ميزات التعاون الجماعي والتقارير المفصلة",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "منصة التعلم الإلكتروني",
      description: "منصة تعليمية تفاعلية مع نظام إدارة الدورات والاختبارات وتتبع التقدم",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop",
      tech: ["Vue.js", "Python", "Django", "Redis"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "تطبيق الصحة واللياقة",
      description: "تطبيق جوال لتتبع الأنشطة الرياضية والتغذية مع تحليلات شخصية",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      tech: ["React Native", "Firebase", "Node.js", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "نظام إدارة المحتوى",
      description: "نظام إدارة محتوى مخصص مع محرر مرئي ونظام إدارة المستخدمين",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      tech: ["React", "Express", "MySQL", "AWS"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "أداة تحليل البيانات",
      description: "لوحة تحكم تفاعلية لتحليل البيانات مع رسوم بيانية متقدمة",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tech: ["D3.js", "Python", "Pandas", "Docker"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-arabic text-4xl md:text-5xl font-bold mb-6 text-foreground">
            أعمالي ومشاريعي
          </h2>
          <p className="font-arabic text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            مجموعة مختارة من المشاريع التي عملت عليها، والتي تُظهر خبرتي في مختلف التقنيات
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden bg-card/30 backdrop-blur-sm border-border/50 hover:shadow-elegant transition-smooth">
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                
                {/* Hover Actions */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-smooth">
                  <Button variant="hero" size="sm">
                    <ExternalLink className="w-4 h-4" />
                    عرض مباشر
                  </Button>
                  <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/20">
                    <Github className="w-4 h-4" />
                    كود المصدر
                  </Button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="font-arabic text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-smooth">
                  {project.title}
                </h3>
                <p className="font-arabic text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary" 
                      className="bg-secondary/50 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="portfolio" size="lg" className="font-arabic">
            عرض المزيد من المشاريع
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;