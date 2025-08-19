import { Badge } from "@/components/ui/badge";
// import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Zap, Clock, Smartphone } from "lucide-react";
import { CourseSection } from "./CourseSection";

export const FinalPersuasionSection = () => {
  const transformationStory = {
    before: {
      title: "Ти зараз",
      items: [
        "Витрачаєш тисячі на фотографів",
        "Клієнти не реагують на пости",
        "Соромишся своїх робіт в соцмережах",
        "Конкуренти випереджають",
        "Немає часу на те щоб обробити фото",
      ],
    },
    after: {
      title: "Ти через тиждень",
      items: [
        "Створюєш студійні фото за 5 хвилин",
        "Клієнти самі пишуть у Direct",
        "Пишаєшся кожним постом",
        "Ти встановлюєш тренди",
        "Економиш час для родини",
      ],
    },
  };

  // const finalReasons = [
  //   {
  //     icon: Heart,
  //     title: "Зроби це для себе",
  //     description: "Ти заслуговуєш на успіх і визнання своєї роботи",
  //   },
  //   {
  //     icon: TrendingUp,
  //     title: "Зроби це для бізнесу",
  //     description: "Твій талант заслуговує на гідну оплату",
  //   },
  //   {
  //     icon: CheckCircle,
  //     title: "Зроби це для клієнтів",
  //     description: "Вони заслуговують бачити справжню красу твоїх робіт",
  //   },
  // ];

  return (
    <CourseSection dark>
      <div className="flex flex-col justify-center items-center">
        <div className="text-center mb-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 sm:mb-6">
            УЯВИ СВОЄ ЖИТТЯ
            <span className="bg-gradient-gold bg-clip-text text-transparent">
              {" "}
              ЧЕРЕЗ РІК
            </span>
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-card-foreground max-w-2xl">
            Два шляхи лежать перед тобою. Який обереш?
          </p>
        </div>

        {/* Transformation Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div className="bg-glass backdrop-blur-glass rounded-xl p-4 sm:p-6 lg:p-8 text-card-foreground border border-glass">
            <h3 className="text-2xl font-bold mb-6 text-center">
              😞 {transformationStory.before.title}
            </h3>
            <ul className="space-y-4">
              {transformationStory.before.items.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-card/50 rounded-xl p-4 sm:p-6 border border-primary/30">
            <h3 className="text-2xl font-bold mb-6 text-center">
              😍 {transformationStory.after.title}
            </h3>
            <ul className="space-y-4">
              {transformationStory.after.items.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </CourseSection>
  );
};
