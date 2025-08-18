import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-author.webp";
import { CheckCircle } from "lucide-react";

export const HeroSection = () => {
  const features = [
    "Без Photoshop та інших складних програм",
    "Достатньо лише смартфона",
  ];

  return (
    <section className="relative h-screen bg-background overflow-hidden">
      {/* Author Image positioned at bottom right */}
      <div
        className="absolute bottom-0 right-0 w-4/5 sm:w-2/3 md:1/2 h-3/5 sm:h-4/5 md:h-full bg-cover bg-left md:bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
          maskImage:
            "linear-gradient(to left, rgba(0,0,0,1) 20%, rgba(0,0,0,0.9) 60%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage:
            "linear-gradient(to left, rgba(0,0,0,1) 20%, rgba(0,0,0,0.9) 60%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        <div className="max-w-6xl mx-auto w-full flex flex-col h-full">
          {/* Top section */}
          <div className="flex-1 max-w-full sm:max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 mb-4 sm:mb-6 border border-primary/20">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <p className="text-xs sm:text-sm text-foreground font-medium">
                Курс від бьюті-майстра з досвідом
              </p>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight text-foreground">
              ЯК ШВИДКО СТВОРЮВАТИ ТА
              <span className="bg-gradient-gold bg-clip-text text-transparent">
                {" "}
                ОБРОБЛЯТИ КОНТЕНТ{" "}
              </span>
              МАЙСТРУ
            </h1>

            {/* Feature blocks */}
            {/* <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6 w-fit uppercase">
              <div className="bg-card/60 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-primary/10">
                <p className="text-xs sm:text-sm text-card-foreground">
                  Без Photoshop та інших складних програм
                </p>
              </div>
              
              <div className="bg-card/60 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-primary/10">
                <p className="text-xs sm:text-sm text-card-foreground">
                  Достатньо лише базових навичок та смартфону
                </p>
              </div>
            </div> */}
            <div className="grid grid-cols-1 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 md:gap-4 bg-card/60 backdrop-blur-sm rounded-xl p-2 pr-4 md:p-3 md:pr-5 w-fit"
                >
                  <CheckCircle className="w-4 h-4 md:w-6 md:h-6 text-primary flex-shrink-0" />
                  <p className="text-card-foreground font-medium text-xs sm:text-sm uppercase">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom section - Price and CTA */}
          <div className="mt-auto">
            {/* Price section */}
            <div className="mb-6">
              <div className="flex flex-col place-items-start mb-3">
                <span className="flex items-baseline gap-3">
                  <span className="text-lg sm:text-xl text-muted-foreground line-through">
                    480 грн
                  </span>
                  <div className="bg-card text-card-foreground px-2 py-1 rounded-full font-bold text-xs sm:text-sm">
                    -50%
                  </div>
                </span>
                <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
                  240 грн
                </span>
              </div>

              {/* CTA Button positioned to overlap photo area */}
              <div className="flex justify-start">
                <Button
                  variant="cta"
                  size="lg"
                  className="text-sm sm:text-lg md:text-xl px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-6 relative z-20"
                >
                  Приєднатись
                </Button>
              </div>
            </div>

            {/* Bonus section */}
            <div className="flex items-start gap-2 bg-card/40 backdrop-blur-sm rounded-lg p-3 border border-primary/10 w-fit">
              {/* <div className="text-primary text-sm sm:text-base">🎁</div> */}
              <div>
                <p className="text-sm font-semibold text-primary mb-1">
                  🎁 БОНУС після реєстрації:
                </p>
                <p className="text-xs text-card-foreground">
                  Прямі ефіри, додаткові ресурси, <br/>шаблони, чек-листи, референси
                </p>
              </div>
            </div>
          </div>

          {/* Author info - positioned to avoid photo */}
          <div className="flex flex-col self-start md:self-center mt-4 border-gold-dark border-l-2 pl-2">
            <p className="text-primary text-sm font-bold">ОКСАНА ДАНИЛЮК</p>
            <p className="text-primary-light text-xs">майстер перманенту</p>
          </div>
        </div>
      </div>
    </section>
  );
};
