import { CourseSection } from "./CourseSection";
// import aboutBg from "@/assets/about-bg.jpg";

export const AboutSection = () => {
  return (
    <CourseSection>
      <div className="relative">
        {/* Background image */}
        {/* <div 
          className="absolute inset-0 opacity-20 rounded-3xl bg-cover bg-center"
          style={{
            backgroundImage: `url(${aboutBg})`,
            maskImage: 'linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0) 100%)'
          }}
        /> */}
        
        <div className="relative z-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-foreground text-center">
            ХТО Я І ЩО ЦЕ ЗА 
            <span className="bg-gradient-gold bg-clip-text text-transparent"> КУРС</span>?
          </h2>

          <div className="bg-glass backdrop-blur-glass rounded-2xl p-4 sm:p-6 lg:p-8 border border-glass max-w-5xl mx-auto">
            <p className="sm:text-base lg:text-lg leading-relaxed text-card-foreground mb-4">
              Привіт! Мене звуть <strong className="text-primary">Оксана Данилюк</strong>, я 
              майстер перманентного макіяжу і сама веду свою сторінку. Чому? Тому що ніхто з SMM не 
              розуміє нішу перманенту і на що треба звертати увагу, так як майстер.
            </p>
            
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-card-foreground mb-4">
              Я втомилася зливати бюджет на фотографів, контент-мейкерів та ретушерів І отримувати все 
              одно не те, чого хотілось би мені, як я бачу.
            </p>
            
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-card-foreground">
              Тому для себе я напрацювала варіант ведення сторінки, зйомки контенту та 
              найголовніше <strong className="text-primary">швидкої обробки</strong>, який 
              потребує мінімум зусиль і навичок: усе відбувається на телефоні.
            </p>
          </div>
        </div>
      </div>
    </CourseSection>
  );
};