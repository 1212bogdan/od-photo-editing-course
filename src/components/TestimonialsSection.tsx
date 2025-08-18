import { Button } from "@/components/ui/button";
import { CourseSection } from "./CourseSection";
// import { Star, Quote } from "lucide-react";

import Lottie from "lottie-react";
import Stars from "@/lotties/Stars.json";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Марія К.",
      profession: "Майстер перманентного макіяжу",
      text: "Дякую за курс! Тепер можу робити красиві фото своїх робіт за 5 хвилин. Клієнти в захваті!",
      rating: 5
    },
    {
      name: "Олена С.",
      profession: "Бровіст",
      text: "Нарешті знайшла курс, який реально працює. Економлю купу грошей на ретуші та контенті.",
      rating: 5
    },
    {
      name: "Анна В.",
      profession: "Lash-майстер",
      text: "Курс змінив моє ведення Instagram. Тепер мої фото виглядають як у топових майстрів!",
      rating: 5
    }
  ];

  return (
    <CourseSection dark>
      <div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-center text-foreground">
          А ОСЬ ЩО КАЖУТЬ 
          <span className="bg-gradient-gold bg-clip-text text-transparent"> МОЇ СТУДЕНТИ</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-glass backdrop-blur-glass rounded-xl p-4 sm:p-6 border border-glass hover:border-primary/40 transition-all duration-300"
            >
              {/* <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-primary mb-3 sm:mb-4" /> */}
              
              <div className="flex mb-3 sm:mb-4">
                {/* {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-primary fill-current" />
                ))} */}
                <Lottie animationData={Stars} loop autoplay className="w-24" />
              </div>
              
              <p className="text-card-foreground text-base mb-4 sm:mb-6 italic">
                "{testimonial.text}"
              </p>
              
              <div className="border-t border-glass pt-3 sm:pt-4">
                <h4 className="text-primary font-bold text-sm sm:text-base">{testimonial.name}</h4>
                <p className="text-card-foreground text-xs sm:text-sm">{testimonial.profession}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="cta" size="lg">
            ПРИЄДНАТИСЬ
          </Button>
        </div>
      </div>
    </CourseSection>
  );
};