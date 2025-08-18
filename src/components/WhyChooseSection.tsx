import { CourseSection } from "./CourseSection";
import { Clock, Target, Users, Lightbulb } from "lucide-react";

export const WhyChooseSection = () => {
  return (
    <CourseSection dark>
      <div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-center text-foreground">
          ЧОМУ ВАРТО ОБРАТИ
          <br />
          <span className="bg-gradient-gold bg-clip-text text-transparent">САМЕ ЦЕЙ КУРС?</span>
        </h2>
        
        <div className="bg-glass backdrop-blur-glass rounded-2xl p-4 sm:p-6 lg:p-8 border border-glass mb-6 sm:mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div>
              <Clock className="w-12 h-12 sm:w-16 sm:h-16 text-primary mb-4 sm:mb-6" />
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary mb-2 sm:mb-4">Ефективність і швидкість</h3>
              <p className="text-card-foreground text-sm sm:text-base lg:text-lg leading-relaxed">
                Я зробила курс, який має дешеву ціну, але дозволяє створити швидко якісний 
                контент і швидко його відредагувати.
              </p>
            </div>
            
            <div>
              <Target className="w-12 h-12 sm:w-16 sm:h-16 text-primary mb-4 sm:mb-6" />
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary mb-2 sm:mb-4">Практичний підхід</h3>
              <p className="text-card-foreground text-sm sm:text-base lg:text-lg leading-relaxed">
                Оскільки я активно працюючий з клієнтами майстер, мій принцип — не витрачати 
                на подачу контенту і його ретуш багато часу.
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div className="bg-glass backdrop-blur-glass rounded-xl p-4 sm:p-6 border border-glass">
            <Users className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-3 sm:mb-4" />
            <p className="text-card-foreground text-sm sm:text-base lg:text-lg">
              Так, є багато курсів, де тебе будуть довго вчити створювати кіношну картинку і 
              журнальну ретуш, але за цим стоїть купа часу, зусиль і коштів.
            </p>
          </div>
          
          <div className="bg-glass backdrop-blur-glass rounded-xl p-4 sm:p-6 border border-glass">
            <Lightbulb className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-3 sm:mb-4" />
            <p className="text-card-foreground text-sm sm:text-base lg:text-lg">
              Для чого все це робити, якщо тоді не лишиться часу на клієнтів. 
              <strong className="text-primary"> Я за прості рішення!</strong>
            </p>
          </div>
        </div>
      </div>
    </CourseSection>
  );
};