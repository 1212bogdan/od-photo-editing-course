import { Button } from "@/components/ui/button";
import { CourseSection } from "./CourseSection";
import { Clock } from "lucide-react";
import programImage from "@/assets/course.webp";

export const ProgramSection = () => {
  const programItems = [
    "Що треба для якісного фото та відео",
    "Налаштування камери та режимів",
    "Світло, схеми світла, ракурси",
    "Фони для фото",
    "Ідеї, натхнення, референси, сценарії",
    "Обробка фото",
    "Корекція червоної шкіри",
    "Обробка портретних фото",
    "Обробка макро, детальних фото",
    "Обробка відео",
    "Швидкий монтаж відео",
    "Технічні моменти для подачі фото",
    "Нестандартна подача фото, колажі",
  ];
  return (
    <CourseSection>
      <img
        src={programImage}
        alt="Автор курсу - Оксана Данилюк"
        className="flex self-end w-full md:w-3/5 object-cover mb-3 sm:mb-4"
        loading="lazy"
      />

      <div className="relative z-10 flex flex-col justify-between items-center px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-center">
          ПРОГРАМА
          <span className="bg-gradient-gold bg-clip-text text-transparent">
            {" "}
            КУРСУ
          </span>
        </h2>

        {/* Duration Badge */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 bg-glass backdrop-blur-glass rounded-full px-2 py-1 sm:px-4 sm:py-2 border border-primary/20">
            <Clock className="w-4 h-4 text-primary" />
            <span className="text-xs sm:text-sm font-medium text-primary">
              Загальна тривалість: 2 години
            </span>
          </div>
        </div>

        <div className="bg-glass backdrop-blur-glass rounded-2xl p-2 sm:p-6 lg:p-8 border border-gold-light mb-8 max-w-lg">
          <div className="grid grid-cols-1 gap-2 md:gap-4">
            {programItems.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 p-4 px-[4px] py-[4px] items-center"
              >
                <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 bg-gradient-gold rounded-full flex items-center justify-center text-primary-foreground font-bold">
                  {index + 1}
                </div>
                <p className="text-sm sm:text-base md:text-lg text-card-foreground">
                  {item}
                </p>
              </div>
            ))}
          </div>
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
