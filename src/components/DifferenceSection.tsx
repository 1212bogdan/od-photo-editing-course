import { CourseSection } from "./CourseSection";
import { CheckCircle } from "lucide-react";
export const DifferenceSection = () => {
  const differences = ["Системна та структурована інформація", "Тут не лише про ретуш, а й про те що передує ретуші", "Приклади на звичайних клієнтських фото", "Тут те що перевірено на практиці майстра і не вимагає великих зусиль", "Проста подача інформації", "Надано кілька варіантів ретуші, схем світла серед яких ви можете обирати"];
  return <CourseSection>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-center">
          ЧИМ МІЙ КУРС
          <br />
          <span className="bg-gradient-gold bg-clip-text text-transparent">ВІДРІЗНЯЄТЬСЯ ВІД ІНШИХ</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {differences.map((difference, index) => <div key={index} className="flex items-start gap-4 bg-card rounded-2xl p-6 shadow-gold px-[16px] py-[16px]">
              <CheckCircle className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <p className="text-card-foreground font-medium text-sm">
                {difference}
              </p>
            </div>)}
        </div>
      </div>
    </CourseSection>;
};