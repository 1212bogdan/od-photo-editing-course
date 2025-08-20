import { Button } from "@/components/ui/button";
import { CourseSection } from "./CourseSection";
import beforeAfterImage1 from "@/assets/before-after-1.avif";
import beforeAfterImage2 from "@/assets/before-after-2.avif";

import Lottie from "lottie-react";
import InstagramReactions from "@/lotties/Instagram-reactions.json";
import InstagramLike from "@/lotties/Instagram-like.json";

export const ExamplesSection = () => {
  return (
    <CourseSection>
      <div className="flex flex-col justify-center items-center text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-foreground">
          ОСЬ КІЛЬКА ПРИКЛАДІВ,
        </h2>
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 bg-gradient-gold bg-clip-text text-transparent">
          ЯК ШВИДКО МОЖНА ЗРОБИТИ РЕТУШ ФОТО
        </h3>

        <p className="text-sm sm:text-base lg:text-lg text-card-foreground mb-6 sm:mb-8 max-w-2xl">
          В курсі є не лише інформація по швидкій обробці фото/відео але і багато
          матеріалу про те, як зняти якісний кадр з першої спроби і що на це впливає
        </p>

        {/* Before/After Examples */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="relative bg-glass backdrop-blur-glass rounded-xl p-4 sm:p-6 border border-glass">
            <img
              src={beforeAfterImage1}
              alt="Приклад до і після обробки фото"
              className="w-full aspect-square object-cover rounded-sm mb-3 sm:mb-4"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-start justify-end pointer-events-none">
              <div className="w-3/5 -mt-[12%]">
                <Lottie animationData={InstagramReactions} loop autoplay />
              </div>
            </div>
            <h4 className="text-lg sm:text-xl font-semibold text-primary mb-2 uppercase">
              ПРИКЛАД 1 - ПОРТРЕТНА ЗЙОМКА
            </h4>
            <p className="text-xs sm:text-sm text-card-foreground">
              Професійний результат за 10 хвилин
            </p>
          </div>

          <div className="relative bg-glass backdrop-blur-glass rounded-xl p-4 sm:p-6 border border-glass">
            <img
              src={beforeAfterImage2}
              alt="Приклад до і після обробки фото"
              className="w-full aspect-square object-cover rounded-sm mb-3 sm:mb-4"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-end justify-start pointer-events-none">
              <div className="w-1/5 mb-[25%] ml-[5%]">
                <Lottie animationData={InstagramLike} loop autoplay />
              </div>
            </div>
            <h4 className="text-lg sm:text-xl font-semibold text-primary mb-2 uppercase">
              ПРИКЛАД 2 - МАКРОЗЙОМКА
            </h4>
            <p className="text-xs sm:text-sm text-card-foreground">
              До і після швидкої обробки на телефоні
            </p>
          </div>
        </div>

        <Button variant="cta" size="lg">
          ПРИДБАТИ КУРС ЗА 240 ГРН
        </Button>
      </div>
    </CourseSection>
  );
};
