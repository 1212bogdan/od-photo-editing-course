import { Button } from "@/components/ui/button";
import { CourseSection } from "./CourseSection";
import { Gift, Users, FileText, Camera, Calendar } from "lucide-react";

export const BonusesSection = () => {
  const bonuses = [
    {
      icon: Users,
      title: "Щомісячні прямі ефіри",
      description: "Прямий ефір з питаннями та відповідями що у вас назбирались"
    },
    {
      icon: FileText,
      title: "Додаткові ресурси",
      description: "Додаткові ресурси та матеріали, які доповнять ваше навчання"
    },
    {
      icon: Gift,
      title: "Шаблони для ChatGPT",
      description: "Шаблони для завдань для чату-GPT, щоб спростити ведення Instagram"
    },
    {
      icon: Camera,
      title: "Референси поз",
      description: "Референси вдалих поз для фото"
    },
    {
      icon: Calendar,
      title: "Контент план",
      description: "Контент план на один місяць"
    }
  ];

  return (
    <CourseSection dark>
      <div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-center text-foreground">
          <span className="bg-gradient-gold bg-clip-text text-transparent">БОНУСИ:</span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
          {bonuses.map((bonus, index) => (
            <div key={index} className="bg-glass backdrop-blur-glass rounded-xl p-4 sm:p-6 border border-glass hover:border-primary/40 transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-gold rounded-full mb-4 mx-auto">
                <bonus.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
              </div>
              <h3 className="text-sm sm:text-lg font-bold text-primary mb-2 sm:mb-4 text-center">
                {bonus.title}
              </h3>
              <p className="text-xs sm:text-sm text-card-foreground text-center">
                {bonus.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="cta" size="lg">
            КУПИТИ
          </Button>
        </div>
      </div>
    </CourseSection>
  );
};