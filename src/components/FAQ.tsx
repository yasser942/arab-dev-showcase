import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ChevronDown, Plus, Minus } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      number: "01",
      question: "ما هي الخدمات التي يقدمها مطور البرمجيات؟",
      answer: "أقدم مجموعة من الخدمات تشمل التصميم والهندسة وإدارة المشاريع. أتخصص في تصميم تجربة المستخدم وتطوير الويب وتطوير تطبيقات الجوال وتطوير البرمجيات المخصصة والعلامات التجارية والهوية البصرية والمزيد."
    },
    {
      number: "02",
      question: "كيف يمكن لمطور البرمجيات مساعدة عملي؟",
      answer: "من خلال تطوير حلول تقنية مخصصة تناسب احتياجات عملك، وتحسين العمليات الرقمية، وإنشاء تطبيقات تفاعلية تعزز من تجربة العملاء وتزيد الكفاءة التشغيلية."
    },
    {
      number: "03",
      question: "مع أي صناعات يعمل مطور البرمجيات؟",
      answer: "أعمل مع مختلف الصناعات بما في ذلك التجارة الإلكترونية، الخدمات المالية، الرعاية الصحية، التعليم، والشركات الناشئة التقنية."
    },
    {
      number: "04",
      question: "كم من الوقت يستغرق إكمال مشروع؟",
      answer: "يعتمد ذلك على تعقيد المشروع ومتطلباته. عادة ما تستغرق المشاريع البسيطة 2-4 أسابيع، بينما المشاريع المعقدة قد تستغرق 2-6 أشهر."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* FAQ List */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border border-border overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-6 text-right flex items-center justify-between hover:bg-card/20 transition-smooth"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-primary font-bold text-lg">{faq.number}</span>
                    <h3 className="font-arabic font-semibold text-foreground">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-primary" />
                    ) : (
                      <Plus className="w-5 h-5 text-primary" />
                    )}
                  </div>
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-6 animate-accordion-down">
                    <p className="font-arabic text-muted-foreground leading-relaxed pr-8">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </Card>
            ))}
          </div>

          {/* Question Mark */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl h-[600px] flex items-center justify-center">
              {/* Main Question Mark */}
              <div className="text-[30rem] md:text-[34rem] font-bold text-primary select-none animate-pulse hover:scale-110 transition-all duration-[2000ms] ease-in-out cursor-pointer">
                ؟
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;