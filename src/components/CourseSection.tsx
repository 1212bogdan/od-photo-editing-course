import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CourseSectionProps {
  children: ReactNode;
  className?: string;
  dark?: boolean;
}

export const CourseSection = ({ children, className, dark = false }: CourseSectionProps) => {
  return (
    <section 
      className={cn(
        "pt-8 sm:pt-12 lg:pt-16 px-2 sm:px-4 lg:px-6 relative overflow-hidden",
        dark 
          ? "bg-gradient-dark" 
          : "bg-background",
        className
      )}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {children}
      </div>
    </section>
  );
};