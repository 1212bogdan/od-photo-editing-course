import { CourseSection } from "./CourseSection";

export const TargetAudienceSection = () => {
  return (
    <CourseSection dark>
      <div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-center text-foreground"> 
          <span className="bg-gradient-gold bg-clip-text text-transparent">ДЛЯ КОГО </span>
           Я СТВОРИЛА ЦЕЙ&nbsp;КУРС?
        </h2>
        
        <div className="bg-glass backdrop-blur-glass rounded-2xl p-4 sm:p-6 lg:p-8 border border-glass">
          <div className="space-y-4 sm:space-y-6">
            <div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary mb-3 sm:mb-4">
                ДЛЯ МАЙСТРІВ ПЕРМАНЕНТУ
              </h3>
              <div className="space-y-3 text-sm sm:text-base text-card-foreground">
                <p>
                  Ти робиш якісну роботу, але фото не передає її і не продає. Твій візуальний 
                  стиль далекий від того, що ти бачиш на сторінках популярних майстрів твого міста.
                </p>
                <p>
                  Стомилась платити за ретуш яка виглядає пластмасовою, хочеш робити так як ти це бачиш.
                </p>
                <p>
                  Хочеш нарешті робити нормальний контент і при цьому не витрачати купу часу.
                </p>
              </div>
            </div>
            
            <div className="border-t border-glass pt-4 sm:pt-6">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary mb-3 sm:mb-4">
                ДЛЯ ВСІХ, ХТО ХОЧЕ НАВЧИТИСЬ ШВИДКО ТА ЕСТЕТИЧНО ОБРОБЛЯТИ ФОТО
              </h3>
              <div className="space-y-3 text-sm sm:text-base text-card-foreground">
                <p>
                  Якщо ти не майстер перманенту, але твоя робота пов'язана з б'юті або ти 
                  починаєш свій шлях, як SMM для б'юті майстрів.
                </p>
                <p>
                  Чи просто хочеш для себе навчитись обробляти свої фото, в цьому курсі 
                  ти навчишся обробляти їх швидко та без зайвих витрат.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CourseSection>
  );
};