import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Zap, Clock, Smartphone, FileVideo, Coins } from "lucide-react";
import { CourseSection } from "./CourseSection";
import footer from "@/assets/footer.webp";

export const PersonalLetterSection = () => {
  return (
    <CourseSection>
      <div className="relative -ml-2 -mr-2 md:hidden">
        <img
          src={footer}
          alt="Автор курсу - Оксана Данилюк"
          className="flex self-end w-full md:w-3/5 object-cover md:opacity-0"
          loading="lazy"
        />
        {/* <div
          className="absolute inset-0 bg-cover bg-center opacity-0 md:opacity-100"
          style={{
            backgroundImage: `url(${footer})`,
            maskImage:
              "linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.2) 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 75%, rgba(0,0,0,0.2) 85%, rgba(0,0,0,0) 100%)",
          }}
        /> */}
      </div>
      <div className="flex flex-col justify-center items-center">
        {/* <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8 text-foreground">
          Особисте послання від Оксани
        </h3> */}

        {/* Personal Letter */}
        <div className="relative z-10 mb-8 bg-gradient-to-r from-secondary/15 to-primary/15 rounded-2xl p-4 sm:p-6 lg:p-8 border border-primary max-w-5xl mx-auto">
          {/* Background image */}
          {/* <div
            className="absolute inset-0 opacity-20 rounded-3xl bg-cover bg-center"
            style={{
              backgroundImage: `url(${footer})`,
              maskImage:
                "linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.2) 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.2) 100%)",
            }}
          /> */}
          <blockquote className="max-w-4xl mx-auto">
            <p className="sm:text-base lg:text-lg leading-relaxed text-card-foreground mb-4">
              Дорога колего! Я знаю, як важко прийняти рішення яке змінить твоє
              життя. Три роки тому я сама була на твоєму місці — витрачала
              тисячі гривень на фотографів і години та дні на те, щоб
              розібратися з програмами, але все одно не розуміла, чому мої
              клієнти не реагують на пости.
            </p>

            <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-card-foreground mb-4">
              Переломний момент настав, коли я навчилася створювати якісний контент сама.
              За рік мій дохід подвоївся, до мене почали звертатися клієнти з
              інших міст. Зі знаннями які викладені в цьому
              курсі, я навчилася на стільки ефективно використовувати свій час
              що з'явилися нові можливості для розвитку, відпочинку, сім'ї.
            </p>

            <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-card-foreground">
              Сьогодні у тебе є шанс пройти мій шлях за 2 години замість 3 років
              спроб і помилок. Не втрачай цю можливість. Твоє успішне майбутнє
              починається з одного кліку. <strong className="text-primary">Я вірю в тебе!</strong>
            </p>
          </blockquote>
        </div>

        {/* Trust Badges */}
        <div className="flex justify-center gap-2 md:gap-4 mb-8 flex-wrap">
          <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
            <Shield className="w-4 h-4 mr-2" />
            Безпечна оплата
          </Badge>
          <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
            <Zap className="w-4 h-4 mr-2" />
            Миттєвий доступ
          </Badge>
          <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
            <Clock className="w-4 h-4 mr-2" />
            Навчайся 24/7
          </Badge>
          <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
            <Smartphone className="w-4 h-4 mr-2" />
            Тільки смартфон
          </Badge>
          <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
            <FileVideo className="w-4 h-4 mr-2" />2 год.
          </Badge>
          <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
            <Coins className="w-4 h-4 mr-2" />
            Гарантія повернення коштів
          </Badge>
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
