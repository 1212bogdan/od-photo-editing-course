import { CourseSection } from "./CourseSection";
import { Plus } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
export const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const toggleItem = (index: number) => {
    if (openItems.includes(index)) {
      setOpenItems(openItems.filter(i => i !== index));
    } else {
      setOpenItems([...openItems, index]);
    }
  };
  const faqs = [{
    question: "Для ретуші треба платні версії програм?",
    answer: "Достатньо лише 1 платної підписки за 7.99$ в місяць, всі інші програми достатньо безкоштовної версії."
  }, {
    question: "Скільки часу треба для ретуш 1 фото?",
    answer: "Надаю кілька програм для ретуші на вибір, залежно від вихідних даних і від бачення кінцевого результату. Загалом від 30 секунд до 15 хвилин достатньо для обробки 1 фото."
  }, {
    question: "Чи потрібен для ретуші комп'ютер?",
    answer: "Ні, вся ретуш виконується на телефоні"
  }, {
    question: "Я не вмію робити фото. Чи допоможе мені цей курс?",
    answer: "Так, в курсі є блок по ідеям, по постановці світла, загальна інформація від чого залежить фото"
  }, {
    question: "А якщо у мене виникнуть додаткові питання?",
    answer: "Щомісяця буде проходити прямий ефір, якщо ви маєте термінові питання ви можете підписатись на мій Instagram і задавати питання в Direct"
  }, {
    question: "Чи треба фотоапарат для фото по-вашому курсу?",
    answer: "Ні, всі фото і ретуш виконання на телефоні"
  }];
  return <CourseSection>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-center">
          <span className="bg-gradient-gold bg-clip-text text-transparent">ЗАПИТАННЯ/ВІДПОВІДІ</span>
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => <div key={index} className="bg-card rounded-2xl border border-border overflow-hidden">
              <button onClick={() => toggleItem(index)} className="w-full p-4 md:p-6 text-left flex items-center justify-between hover:bg-muted transition-colors">
                <h3 className="text-sm md:text-lg font-semibold text-card-foreground pr-4">
                  {faq.question}
                </h3>
                <Plus className={cn("w-6 h-6 text-primary transition-transform duration-300", openItems.includes(index) && "rotate-45")} />
              </button>
              
              {openItems.includes(index) && <div className="p-4 md:p-6">
                  <p className="text-xs md:text-base text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>}
            </div>)}
        </div>
      </div>
    </CourseSection>;
};