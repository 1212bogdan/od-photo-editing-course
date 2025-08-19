import { CourseSection } from "./CourseSection";
import { Send, Instagram, Facebook, Mail } from "lucide-react";
// import footer from "@/assets/footer.png";

export const FooterSection = () => {
  return (
    <CourseSection dark className="!pb-0 ">
        {/* Background image */}
        {/* <div 
          className="absolute inset-0 opacity-20 rounded-3xl bg-cover bg-center"
          style={{
            backgroundImage: `url(${footer})`,
            maskImage: 'linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0) 100%)'
          }}
        /> */}

      <div className="relative z-10">
        <div className="bg-glass backdrop-blur-glass rounded-2xl p-6 sm:p-8 lg:p-10 border border-glass rounded-b-none border-b-0">
          <div className="text-center space-y-6">
            {/* Соціальні мережі */}
            <div className="flex justify-center gap-4 mb-8">
              <a
                href="https://t.me/od_permanent"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-primary/10 hover:bg-primary/20 rounded-full border border-primary/20 hover:border-primary/40 transition-all duration-300 group"
                aria-label="Telegram"
              >
                <Send className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="https://instagram.com/od.permanent"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-primary/10 hover:bg-primary/20 rounded-full border border-primary/20 hover:border-primary/40 transition-all duration-300 group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="https://www.facebook.com/tatuazh.vinnitsya/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-primary/10 hover:bg-primary/20 rounded-full border border-primary/20 hover:border-primary/40 transition-all duration-300 group"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="mailto:ksu2002@ukr.net"
                className="flex items-center justify-center w-12 h-12 bg-primary/10 hover:bg-primary/20 rounded-full border border-primary/20 hover:border-primary/40 transition-all duration-300 group"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>

            {/* Company Info */}
            <div>
              <h3 className="text-base sm:text-lg font-bold text-primary mb-2">
                ФОП Данилюк Оксана Анатоліївна
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
