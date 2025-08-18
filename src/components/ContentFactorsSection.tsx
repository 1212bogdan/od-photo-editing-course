import { CourseSection } from "./CourseSection";
import singleLightExample from "@/assets/single-light-example.jpg";
import threeLightExample from "@/assets/three-light-example.jpg";

export const ContentFactorsSection = () => {
  return (
    <CourseSection>
      <div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-center">
          ЩО ВПЛИВАЄ НА ТВІЙ 
          <span className="bg-gradient-gold bg-clip-text text-transparent"> КОНТЕНТ</span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8">
          <div className="bg-glass backdrop-blur-glass rounded-xl p-4 sm:p-6 text-center border border-glass hover:border-primary/30 transition-all duration-300">
            <div className="text-2xl sm:text-3xl mb-3">📱</div>
            <h3 className="text-sm sm:text-lg font-bold text-primary mb-2">Телефон та його налаштування</h3>
            <p className="text-xs sm:text-sm text-card-foreground">Правильні налаштування камери</p>
          </div>
          
          <div className="bg-glass backdrop-blur-glass rounded-xl p-4 sm:p-6 text-center border border-glass hover:border-primary/30 transition-all duration-300">
            <div className="text-2xl sm:text-3xl mb-3">💡</div>
            <h3 className="text-sm sm:text-lg font-bold text-primary mb-2">Світло та його комбінації</h3>
            <p className="text-xs sm:text-sm text-card-foreground">Схеми освітлення</p>
          </div>
          
          <div className="bg-glass backdrop-blur-glass rounded-xl p-4 sm:p-6 text-center border border-glass hover:border-primary/30 transition-all duration-300">
            <div className="text-2xl sm:text-3xl mb-3">🪄</div>
            <h3 className="text-sm sm:text-lg font-bold text-primary mb-2">Додаткове обладнання</h3>
            <p className="text-xs sm:text-sm text-card-foreground">Світловідбивач, фон, макролінза</p>
          </div>
        </div>
        
        <div className="bg-glass backdrop-blur-glass rounded-2xl p-4 sm:p-6 lg:p-8 border border-glass">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-6 text-center">НАПРИКЛАД:</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6">
            <div className="relative bg-glass backdrop-blur-glass rounded-xl p-4 border border-glass">
              <div className="relative overflow-hidden rounded-lg mb-3">
                <img src={singleLightExample} alt="1 джерело світла" className="w-full h-32 sm:h-40 object-cover" />
              </div>
              <h4 className="text-lg sm:text-xl font-semibold text-muted-foreground mb-2">1 джерело світла</h4>
              <p className="text-xs sm:text-sm text-card-foreground">Звичайний результат з тінями</p>
            </div>
            
            <div className="relative bg-glass backdrop-blur-glass rounded-xl p-4 border border-primary/30">
              <div className="relative overflow-hidden rounded-lg mb-3">
                <img src={threeLightExample} alt="3 джерела світла" className="w-full h-32 sm:h-40 object-cover" />
              </div>
              <h4 className="text-lg sm:text-xl font-semibold text-primary mb-2">3 джерела світла</h4>
              <p className="text-xs sm:text-sm text-card-foreground">Професійне освітлення</p>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-sm sm:text-lg text-primary-light mb-2">
              І ПРО ЦЕ ВСЕ МИ ПОГОВОРИМО НА КУРСІ
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground">
              ЯКОЮ Б КЛАСНОЮ НЕ БУЛА РЕТУШ, АЛЕ ТРОШКИ УВАГИ ПОТРЕБУЄ ПОЧАТКОВЕ ФОТО
            </p>
          </div>
        </div>
      </div>
    </CourseSection>
  );
};