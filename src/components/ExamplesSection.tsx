import { Button } from "@/components/ui/button";
import { CourseSection } from "./CourseSection";
import beforeAfterImage1 from "@/assets/before-after-1.jpg";
import beforeAfterImage2 from "@/assets/before-after-1.jpg";

export const ExamplesSection = () => {
  return (
    <CourseSection>
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-foreground">
          ОСЬ ЛИШЕ КІЛЬКА ПРИКЛАДІВ,
        </h2>
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 bg-gradient-gold bg-clip-text text-transparent">
          ЯК ШВИДКО МОЖНА ЗРОБИТИ РЕТУШ ФОТО
        </h3>
        
        <p className="text-sm sm:text-base lg:text-lg text-card-foreground mb-6 sm:mb-8">
          В курсі є не лише інформація по швидкій обробці фото але і багато матеріалу про те, 
          як зробити хороший ісходник і що на нього впливає
        </p>
        
        {/* Before/After Examples */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="bg-glass backdrop-blur-glass rounded-xl p-4 sm:p-6 border border-glass">
            <img src={beforeAfterImage1} alt="Приклад до і після обробки фото" className="w-full h-32 sm:h-48 lg:h-64 object-cover rounded-lg mb-3 sm:mb-4" />
            <h4 className="text-lg sm:text-xl font-semibold text-primary mb-2">ПРИКЛАД 1</h4>
            <p className="text-xs sm:text-sm text-card-foreground">До і після швидкої обробки</p>
          </div>
          
          <div className="bg-glass backdrop-blur-glass rounded-xl p-4 sm:p-6 border border-glass">
            <img src={beforeAfterImage2} alt="Приклад до і після обробки фото" className="w-full h-32 sm:h-48 lg:h-64 object-cover rounded-lg mb-3 sm:mb-4" />
            <h4 className="text-lg sm:text-xl font-semibold text-primary mb-2">ПРИКЛАД 2</h4>
            <p className="text-xs sm:text-sm text-card-foreground">Професійний результат за 10 хвилин</p>
          </div>
        </div>
        
        <Button variant="cta" size="lg">
          КУПИТИ ЗА 240 ГРН
        </Button>
      </div>
    </CourseSection>
  );
};