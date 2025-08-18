import { Button } from "@/components/ui/button";
import { CourseSection } from "./CourseSection";

import testimonials_1 from "@/assets/testimonials/t-1.webp";
import testimonials_2 from "@/assets/testimonials/t-2.webp";
import testimonials_3 from "@/assets/testimonials/t-3.webp";
import testimonials_4 from "@/assets/testimonials/t-4.webp";
import testimonials_5 from "@/assets/testimonials/t-5.webp";
import testimonials_6 from "@/assets/testimonials/t-6.webp";


// import { Star, Quote } from "lucide-react";

import Lottie from "lottie-react";
import Stars from "@/lotties/Stars.json";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      image: testimonials_1,
      text: "Дякую за курс! Тепер можу робити красиві фото своїх робіт за 5 хвилин. Клієнти в захваті!",
    },
    {
      image: testimonials_2,
      text: "Нарешті знайшла курс, який реально працює. Економлю купу грошей на ретуші та контенті.",
    },
    {
      image: testimonials_3,
      text: "Курс змінив моє ведення Instagram. Тепер мої фото виглядають як у топових майстрів!",
    },
    {
      image: testimonials_4,
      text: "Курс змінив моє ведення Instagram. Тепер мої фото виглядають як у топових майстрів!",
    },
    {
      image: testimonials_5,
      text: "Курс змінив моє ведення Instagram. Тепер мої фото виглядають як у топових майстрів!",
    },
    {
      image: testimonials_6,
      text: "Курс змінив моє ведення Instagram. Тепер мої фото виглядають як у топових майстрів!",
    }
  ];

  return (
    <CourseSection dark>
      <div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-center text-foreground">
          А ОСЬ ЩО ГОВОРЯТЬ ПРО&nbsp;КУРС 
          <span className="bg-gradient-gold bg-clip-text text-transparent"> МОЇ СТУДЕНТИ</span>
        </h2>

        <div className="flex justify-center mb-6">
          <Lottie animationData={Stars} loop autoplay className="w-36" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className=""
            >
              <img src={testimonial.image} alt={testimonial.text} className="w-full h-auto object-cover bg-white rounded-xl overflow-hidden py-2" />
              {/* <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-primary mb-3 sm:mb-4" /> */}
              
              {/* <div className="flex mb-3 sm:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-primary fill-current" />
                ))}
                <Lottie animationData={Stars} loop autoplay className="w-24" />
              </div> */}
              
              {/* <p className="text-card-foreground text-base mb-4 sm:mb-6 italic">
                "{testimonial.text}"
              </p> */}
              
              {/* <div className="border-t border-glass pt-3 sm:pt-4">
                <h4 className="text-primary font-bold text-sm sm:text-base">{testimonial.name}</h4>
                <p className="text-card-foreground text-xs sm:text-sm">{testimonial.profession}</p>
              </div> */}
            </div>
          ))}
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