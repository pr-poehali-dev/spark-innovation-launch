import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import Icon from "@/components/ui/icon";

interface SkillCard {
  title: string;
  description: string;
  icon: "Palette" | "Code" | "Terminal";
}

const skills: SkillCard[] = [
  {
    title: "Веб-дизайн",
    description:
      "Разработка макетов и прототипов, работа с цветом, типографикой и композицией.",
    icon: "Palette",
  },
  {
    title: "Вёрстка",
    description:
      "Адаптивная кроссбраузерная вёрстка с использованием HTML, CSS и современных фреймворков.",
    icon: "Code",
  },
  {
    title: "Программирование",
    description:
      "Создание интерактивных веб-приложений на JavaScript, TypeScript и React.",
    icon: "Terminal",
  },
];

export default function AboutSection() {
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
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="bg-zinc-950 py-24 px-8 md:px-16"
    >
      <div className="container mx-auto max-w-5xl">
        <div
          className={cn(
            "transform transition-all duration-700 ease-out",
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          )}
        >
          <h2 className="mb-6 text-4xl font-light text-white md:text-5xl">
            Обо мне
          </h2>
          <p className="mb-16 max-w-2xl text-lg leading-relaxed text-white/70">
            Я студент, и это моя практическая работа по созданию портфолио.
            В рамках учебного проекта я изучаю современные технологии
            веб-разработки и применяю их на практике, создавая данный сайт
            как демонстрацию полученных навыков.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className={cn(
                "transform transition-all duration-700 ease-out",
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              )}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              <div className="group rounded-2xl border border-white/10 bg-white/5 p-8 transition-colors duration-300 hover:border-white/20 hover:bg-white/10">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white transition-colors duration-300 group-hover:bg-white/20">
                  <Icon name={skill.icon} size={24} />
                </div>
                <h3 className="mb-3 text-xl font-medium text-white">
                  {skill.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/60">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
