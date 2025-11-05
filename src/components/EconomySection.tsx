import { Button } from "@/components/ui/button";
import { CourseSection } from "./CourseSection";
// import { TrendingDown, DollarSign, Zap } from "lucide-react";
export const EconomySection = () => {
  return (
    <CourseSection>
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
          КУРС, ЯКИЙ КОШТУЄ, ЯК
          <span className="bg-gradient-gold bg-clip-text text-transparent">
            {" "}
            РЕТУШ 2-Х ФОТО
          </span>
        </h2>

        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-6 sm:mb-8 text-foreground">
          ВЖЕ ЗА ПЕРШИЙ МІСЯЦЬ ЗЕКОНОМИТЬ ТОБІ ЯК МІНІМУМ
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {/* Savings Cards */}
          <div className="bg-glass backdrop-blur-glass rounded-2xl p-4 sm:p-6 lg:p-8 text-card-foreground border border-glass">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-4">
              💸 3000 ГРН
            </h3>
            <p className="text-sm sm:text-lg lg:text-xl mb-1 sm:mb-2">
              НА ПОСЛУГАХ РЕТУШЕРА
            </p>
            <p className="text-xs sm:text-sm lg:text-lg opacity-90">
              25 фото × 120 ГРН
            </p>
          </div>

          <div className="bg-glass backdrop-blur-glass rounded-2xl p-4 sm:p-6 lg:p-8 text-card-foreground border border-glass">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-4">
              💸 6000 ГРН
            </h3>
            <p className="text-sm sm:text-lg lg:text-xl mb-1 sm:mb-2">
              НА КОНТЕНТ-МЕЙКЕРІ
            </p>
            <p className="text-xs sm:text-sm lg:text-lg opacity-80">
              якщо ти знайдеш такого бюджетного
            </p>
          </div>
        </div>

        <div className="bg-glass backdrop-blur-glass rounded-2xl p-4 sm:p-6 lg:p-8 border border-glass mb-6 sm:mb-8">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary mb-4 sm:mb-6">
            І ЦЕ ЛИШЕ ЗА ОДИН МІСЯЦЬ, ПРИ ВАРТОСТІ КУРСУ ВСЬОГО 240 ГРН
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-card/50 rounded-xl p-4 sm:p-6 border border-primary/30">
              <h4 className="text-base sm:text-lg font-bold text-primary mb-2 sm:mb-4">
                ✨ Спойлер 1
              </h4>
              <p className="text-sm sm:text-sm text-card-foreground">
                Ви отримаєте не лише більш естетично привабливу сторінку, але й
                збільшите продажі своїх послуг
              </p>
            </div>

            <div className="bg-card/50 rounded-xl p-4 sm:p-6 border border-primary/30">
              <h4 className="text-base sm:text-lg font-bold text-primary mb-2 sm:mb-4">
                ✨ Спойлер 2
              </h4>
              <p className="text-sm sm:text-sm text-card-foreground">
                Ви отримаєте додатковий дохід на швидкій ретуші фото
              </p>
            </div>
          </div>
        </div>

        <Button variant="cta" size="lg">
          ПРИДБАТИ КУРС ЗА 240 ГРН
        </Button>
      </div>
    </CourseSection>
  );
};
