import { CourseSection } from "./CourseSection";
import { CheckCircle } from "lucide-react";
export const DifferenceSection = () => {
  const differences = ["Системна та структурована інформація", "Тут не лише про ретуш, а й про те як з першого разу зняти якісні фото/відео", "Приклади на звичайних клієнтських фото", "На курсі тільки те, що перевірено мною на практиці і не вимагає великих зусиль", "Проста подача інформації", "Надано кілька варіантів ретуші та схем світла, серед яких Ви можете обирати"];
  return <CourseSection>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-center">
          ЧИМ МІЙ КУРС
          <br />
          <span className="bg-gradient-gold bg-clip-text text-transparent">ВІДРІЗНЯЄТЬСЯ ВІД ІНШИХ</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {differences.map((difference, index) => <div key={index} className="flex items-center gap-4 bg-card rounded-2xl p-3 md:p-4">
              <CheckCircle className="w-5 h-5 md:w-8 md:h-8 text-primary flex-shrink-0" />
              <p className="text-card-foreground font-medium text-sm md:text-base">
                {difference}
              </p>
            </div>)}
        </div>
      </div>
    </CourseSection>;
};