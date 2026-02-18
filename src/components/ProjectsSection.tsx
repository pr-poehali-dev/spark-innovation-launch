import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import Icon from "@/components/ui/icon";

interface Project {
  title: string;
  description: string;
  image: string;
  tag: string;
}

const projects: Project[] = [
  {
    title: "Лендинг для стартапа",
    description:
      "Одностраничный сайт с анимациями и адаптивной вёрсткой для презентации продукта.",
    image:
      "https://cdn.poehali.dev/templates/creative-portfolio-ru/gallery-1.jpg",
    tag: "React",
  },
  {
    title: "Интернет-магазин",
    description:
      "Каталог товаров с фильтрацией, корзиной и страницей оформления заказа.",
    image:
      "https://cdn.poehali.dev/templates/creative-portfolio-ru/gallery-2.jpg",
    tag: "TypeScript",
  },
  {
    title: "Корпоративный сайт",
    description:
      "Многостраничный сайт с формой обратной связи и интеграцией карт.",
    image:
      "https://cdn.poehali.dev/templates/creative-portfolio-ru/gallery-4.jpg",
    tag: "Tailwind CSS",
  },
];

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="bg-zinc-900 py-24 px-8 md:px-16"
    >
      <div className="container mx-auto max-w-5xl">
        <div
          className={cn(
            "mb-16 transform transition-all duration-700 ease-out",
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          )}
        >
          <h2 className="mb-4 text-4xl font-light text-white md:text-5xl">
            Мои работы
          </h2>
          <p className="max-w-xl text-lg text-white/60">
            Проекты, выполненные в ходе обучения и практики.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={cn(
                "transform transition-all duration-700 ease-out",
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              )}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              <div className="group cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all duration-300 hover:scale-[1.03] hover:border-white/20 hover:shadow-2xl hover:shadow-white/5">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                      <Icon name="Sparkles" size={12} />
                      {project.tag}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-lg font-medium text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/60">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
