import { CourseSection } from "./CourseSection";

export const FooterSection = () => {
  return (
    <CourseSection dark className="!pb-0 ">
      <div className="relative z-10">
        <div className="bg-glass backdrop-blur-glass rounded-2xl p-6 sm:p-8 lg:p-10 border border-glass rounded-b-none border-b-0">
          <div className="text-center space-y-6">
            {/* Company Info */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-primary mb-2">
                ФОП Данилюк Оксана Анатолівна
              </h3>
            </div>

            {/* Links */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center">
              <a
                href="/privacy-policy.pdf"
                className="text-primary-light hover:text-primary transition-colors duration-300 underline-offset-4 hover:underline"
              >
                Політика конфіденційності
              </a>
              <a
                href="/public-offer.pdf"
                className="text-primary-light hover:text-primary transition-colors duration-300 underline-offset-4 hover:underline"
              >
                Публічна оферта
              </a>
            </div>

            {/* Copyright */}
            <div className="pt-4 border-t border-primary/20">
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                Усі матеріали на цьому сайті є об'єктом авторського права.
                Будь-яке копіювання, використання чи поширення матеріалів
                дозволяється тільки за попередньою згодою правовласників. Всі
                права захищені.
              </p>
            </div>

            {/* Bottom spacing */}
            <div className="pt-2">
              <p className="text-xs text-muted-foreground/80">
                © 2025 OD.permanent
              </p>
            </div>
          </div>
        </div>
      </div>
    </CourseSection>
  );
};
