import { CourseSection } from "./CourseSection";
import beforeAfterImage1 from "@/assets/before-after-1.webp";
import beforeAfterImage2 from "@/assets/before-after-2.webp";

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
                НЕ ЛИШЕ ДЛЯ БЬЮТІ&#8209;МАЙСТРІВ
              </h3>
              
              {/* Image for first block */}
              <div className="mb-4">
                <img 
                  src={beforeAfterImage1} 
                  alt="Приклад роботи бьюті-майстра" 
                  className="w-full h-48 sm:h-56 object-cover rounded-xl"
                />
              </div>
              
              <div className="space-y-3 text-sm sm:text-base text-card-foreground">
                <p>
                  Ти робиш якісну роботу, але фото не передає через екран як вона виглядає "в живу" і не приваблює нових клієнтів. Твій візуальний 
                  стиль далекий від того, що ти бачиш на сторінках популярних майстрів твого міста.
                </p>
                <p>
                  Стомилась платити за ретуш, яка виглядає "пластмасовою", маєш власне бачення.
                </p>
                <p>
                  Хочеш нарешті робити якісний контент своїми силами і при цьому не витрачати купу часу.
                </p>
              </div>
            </div>
            
            <div className="border-t border-glass pt-4 sm:pt-6">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary mb-3 sm:mb-4">
                А Й ДЛЯ ВСІХ, ХТО ХОЧЕ ПРОСТО ЗАРАЗ НАВЧИТИСЬ ШВИДКО СТВОРЮВАТИ ТА РЕДАГУВАТИ 📸&nbsp;ФОТО 🎬&nbsp;ВІДЕО КОНТЕНТ
              </h3>
              
              {/* Image for second block */}
              <div className="mb-4">
                <img 
                  src={beforeAfterImage2} 
                  alt="Приклад обробки фото контенту" 
                  className="w-full h-48 sm:h-56 object-cover rounded-xl"
                />
              </div>
              
              <div className="space-y-3 text-sm sm:text-base text-card-foreground">
                <p>
                  Якщо ти не майстер перманенту, але твоя робота тісно пов'язана з б'юті або ти тільки
                  починаєш свій шлях як SMM для майстрів.
                </p>
                <p>
                  Чи просто хочеш для себе навчитись обробляти фото - в цьому курсі 
                  ти навчишся робити це швидко та без зайвих витрат.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CourseSection>
  );
};