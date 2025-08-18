import { Button } from "@/components/ui/button";
import { CourseSection } from "./CourseSection";

export const ProgramSection = () => {
  const programItems = ["Що треба для якісного фото та відео", "Налаштування камери та режимів зйомки", "Світло, схеми світла, ракурси", "Фони для фото", "Ідеї, натхнення, референси, сценарії", "Обробка фото", "Корекція червоної шкіри", "Обробка портретних фото", "Обробка макро, детальних фото, швидкі колажі", "Обробка відео", "Швидкий монтаж відео", "Технічні моменти для подачі фото", "Нестандартна подача фото, колажі"];
  return <CourseSection>
      <div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-center">
          ПРОГРАМА 
          <span className="bg-gradient-gold bg-clip-text text-transparent"> КУРСУ</span>
        </h2>
        
        <div className="bg-glass backdrop-blur-glass rounded-2xl p-4 sm:p-6 lg:p-8 border border-glass mb-8">
          <div className="grid grid-cols-1 gap-4">
            {programItems.map((item, index) => <div key={index} className="flex gap-4 p-4 px-[4px] py-[4px] items-center">
                <div className="flex-shrink-0 w-6 h-6 bg-gradient-gold rounded-full flex items-center justify-center text-primary-foreground font-bold">
                  {index + 1}
                </div>
                <p className="text-sm sm:text-base text-card-foreground">{item}</p>
              </div>)}
          </div>
        </div>
        
        <div className="text-center">
          <Button variant="cta" size="lg">
            КУПИТИ КУРС
          </Button>
        </div>
      </div>
    </CourseSection>;
};