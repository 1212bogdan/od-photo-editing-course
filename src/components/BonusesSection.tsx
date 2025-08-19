import { Button } from "@/components/ui/button";
import { CourseSection } from "./CourseSection";
// import { Gift, Users, FileText, Camera, Calendar } from "lucide-react";

import Lottie from "lottie-react";

import Live from "@/lotties/Live.json";
import Resources from "@/lotties/Resources.json";
import OpenAI from "@/lotties/OpenAI.json";
import Instagram from "@/lotties/Instagram.json";
import Content from "@/lotties/Content.json";
import Certificate from "@/lotties/Certificate.json";

export const BonusesSection = () => {
  const bonuses = [
    {
      icon: Live,
      title: "Щомісячні прямі ефіри з автором",
      description:
        "Прямий ефір з питаннями та відповідями що у вас назбирались",
    },
    {
      icon: Resources,
      title: "Додаткові ресурси та чек-листи",
      description:
        "Додаткові ресурси та матеріали, які доповнять ваше навчання",
    },
    {
      icon: OpenAI,
      title: "Шаблони для ChatGPT",
      description:
        "Ефективні шаблони завдань для чату-GPT",
    },
    {
      icon: Instagram,
      title: "Референси поз для Instagram",
      description: "Приклади вдалих поз для фото у соцмережах",
    },
    {
      icon: Content,
      title: "Контент план",
      description: "Детальний контент план на один місяць",
    },
    {
      icon: Certificate,
      title: "Сертифікат",
      description: "Сертифікат про проходження курсу",
    },
  ];

  return (
    <CourseSection dark>
      <div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-center text-foreground">
          <span className="bg-gradient-gold bg-clip-text text-transparent">
            БОНУСИ ПІСЛЯ ПОКУПКИ
          </span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-6 mb-8">
          {bonuses.map((bonus, index) => (
            <div
              key={index}
              className="bg-glass backdrop-blur-glass rounded-xl p-4 sm:p-6 border border-glass hover:border-primary/40 transition-all duration-300"
            >
              {/* <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-gold rounded-full mb-4 mx-auto">
                <bonus.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
              </div> */}
              <div className="flex items-center justify-center w-24 h-24 mb-0 mx-auto">
                <Lottie animationData={bonus.icon} loop autoplay />
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
            ПРИДБАТИ КУРС ЗА 240 ГРН
          </Button>
        </div>
      </div>
    </CourseSection>
  );
};
