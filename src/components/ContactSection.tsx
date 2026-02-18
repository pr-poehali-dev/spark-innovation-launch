import { useEffect, useRef, useState, FormEvent } from "react";
import { cn } from "@/lib/utils";
import Icon from "@/components/ui/icon";

interface ContactInfo {
  icon: "Mail" | "Phone" | "GraduationCap";
  label: string;
  value: string;
}

const contactDetails: ContactInfo[] = [
  {
    icon: "Mail",
    label: "Email",
    value: "student@university.ru",
  },
  {
    icon: "Phone",
    label: "Телефон",
    value: "+7 (999) 123-45-67",
  },
  {
    icon: "GraduationCap",
    label: "Университет",
    value: "Название университета",
  },
];

export default function ContactSection() {
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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section
      ref={sectionRef}
      id="contacts"
      className="bg-zinc-950 py-24 px-8 md:px-16"
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
            Контакты
          </h2>
          <p className="max-w-xl text-lg text-white/60">
            Свяжитесь со мной для сотрудничества или обсуждения проектов.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Contact Info */}
          <div
            className={cn(
              "transform transition-all duration-700 ease-out",
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            )}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="space-y-6">
              {contactDetails.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white">
                    <Icon name={item.icon} size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-white/50">{item.label}</p>
                    <p className="text-base text-white">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={cn(
              "transform transition-all duration-700 ease-out",
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            )}
            style={{ transitionDelay: "400ms" }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm text-white/60"
                >
                  Имя
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors duration-200 focus:border-white/30 focus:bg-white/10"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm text-white/60"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors duration-200 focus:border-white/30 focus:bg-white/10"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm text-white/60"
                >
                  Сообщение
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Ваше сообщение..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors duration-200 focus:border-white/30 focus:bg-white/10"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3 text-sm font-medium text-zinc-950 transition-all duration-200 hover:bg-white/90 hover:shadow-lg hover:shadow-white/10 active:scale-[0.98]"
              >
                <Icon name="Send" size={16} />
                Отправить
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
