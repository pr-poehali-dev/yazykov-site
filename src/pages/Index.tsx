import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [activeSection, setActiveSection] = useState("biography");

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const poems = [
    {
      title: "Пловец",
      year: "1829",
      excerpt: "Ревет ли зверь в лесу глухом, / Трубит ли рог, гремит ли гром, / Поет ли дева за холмом — / На всякий звук..."
    },
    {
      title: "Элегия",
      year: "1826", 
      excerpt: "Когда, кипя враждой неукротимой, / Народы ополчаются, и вдруг..."
    },
    {
      title: "Водопад",
      year: "1830",
      excerpt: "Шуми, шуми с крутой вершины, / Не умолкай, поток седой!..."
    }
  ];

  const timeline = [
    { year: "1803", event: "Родился в Симбирске в дворянской семье" },
    { year: "1822", event: "Поступил в Дерптский университет" },
    { year: "1826", event: "Издание первых стихотворений" },
    { year: "1829", event: "Написана поэма «Пловец»" },
    { year: "1831", event: "Знакомство с Пушкиным" },
    { year: "1846", event: "Скончался в Москве" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5E6D3] via-[#EDD9C3] to-[#E5CCB3]">
      <nav className="sticky top-0 z-50 bg-[#8B4513]/95 backdrop-blur-sm border-b-2 border-[#DAA520]">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon name="Feather" className="text-[#F5E6D3]" size={32} />
              <h1 className="text-2xl md:text-3xl font-bold text-[#F5E6D3]">
                Николай Михайлович Языков
              </h1>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-4 justify-center">
            {["biography", "works", "poems", "gallery", "timeline", "bibliography"].map((section) => (
              <Button
                key={section}
                onClick={() => scrollToSection(section)}
                variant={activeSection === section ? "default" : "outline"}
                className={`${
                  activeSection === section 
                    ? "bg-[#DAA520] text-[#2C1810] hover:bg-[#C9941F]" 
                    : "bg-[#F5E6D3] text-[#8B4513] hover:bg-[#EDD9C3] border-[#8B4513]"
                }`}
              >
                {section === "biography" && "Биография"}
                {section === "works" && "Творчество"}
                {section === "poems" && "Произведения"}
                {section === "gallery" && "Галерея"}
                {section === "timeline" && "Хронология"}
                {section === "bibliography" && "Библиография"}
              </Button>
            ))}
          </div>
        </div>
      </nav>

      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Icon name="BookOpen" className="absolute top-10 left-10 text-[#8B4513]" size={120} />
          <Icon name="Feather" className="absolute bottom-20 right-20 text-[#8B4513]" size={100} />
        </div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold text-[#8B4513] mb-4 animate-fade-in">
            Языков Николай Михайлович
          </h2>
          <p className="text-xl md:text-2xl text-[#2C1810] italic">
            1803—1846
          </p>
          <Separator className="my-8 bg-[#DAA520] h-1 w-32 mx-auto" />
          <p className="text-lg text-[#2C1810] max-w-2xl mx-auto">
            Один из ярких представителей русского романтизма, 
            друг Пушкина и певец студенческой вольницы
          </p>
        </div>
      </section>

      <section id="biography" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <Icon name="User" className="text-[#8B4513]" size={40} />
            <h2 className="text-4xl font-bold text-[#8B4513]">Биография</h2>
          </div>
          <Card className="p-8 bg-[#F5E6D3] border-2 border-[#8B4513] shadow-xl">
            <div className="space-y-6 text-[#2C1810] leading-relaxed">
              <p className="text-lg first-letter:text-5xl first-letter:font-bold first-letter:text-[#8B4513] first-letter:float-left first-letter:mr-2">
                Николай Михайлович Языков родился 4 марта 1803 года в Симбирске в богатой дворянской семье. 
                Его отец был горным инженером, а мать происходила из старинного дворянского рода.
              </p>
              <p className="text-lg">
                В 1822 году Языков поступил в Дерптский (ныне Тартуский) университет, где провел восемь лет. 
                Студенческая жизнь оказала огромное влияние на его творчество. Именно в Дерпте были написаны 
                его лучшие стихотворения, воспевающие свободу, молодость и дружбу.
              </p>
              <p className="text-lg">
                В 1826 году начали публиковаться его первые стихотворения, которые сразу принесли ему известность. 
                Пушкин высоко ценил талант Языкова и называл его одним из лучших поэтов своего времени.
              </p>
              <p className="text-lg">
                В последние годы жизни Языков страдал от тяжелой болезни позвоночника. Несмотря на физические 
                страдания, он продолжал писать. Умер поэт 26 декабря 1846 года в Москве.
              </p>
            </div>
          </Card>
        </div>
      </section>

      <section id="works" className="py-16 px-4 bg-[#2C1810]/5">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <Icon name="BookOpen" className="text-[#8B4513]" size={40} />
            <h2 className="text-4xl font-bold text-[#8B4513]">Творчество</h2>
          </div>
          <Card className="p-8 bg-[#F5E6D3] border-2 border-[#8B4513] shadow-xl">
            <div className="space-y-6 text-[#2C1810] leading-relaxed">
              <div>
                <h3 className="text-2xl font-semibold text-[#8B4513] mb-4 flex items-center gap-2">
                  <Icon name="Scroll" size={24} />
                  Ранний период (1822-1831)
                </h3>
                <p className="text-lg">
                  Дерптский период — время расцвета таланта Языкова. Его стихи этого времени полны 
                  жизнерадостности, энергии и свободолюбия. Он воспевал студенческое братство, 
                  пиры и дружеские встречи.
                </p>
              </div>
              <Separator className="bg-[#DAA520]" />
              <div>
                <h3 className="text-2xl font-semibold text-[#8B4513] mb-4 flex items-center gap-2">
                  <Icon name="PenTool" size={24} />
                  Зрелое творчество (1831-1846)
                </h3>
                <p className="text-lg">
                  В зрелый период творчества тональность стихов Языкова меняется. Появляются 
                  философские размышления, религиозные мотивы. Поэт обращается к темам веры, 
                  смысла жизни и предназначения человека.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section id="poems" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-8">
            <Icon name="Scroll" className="text-[#8B4513]" size={40} />
            <h2 className="text-4xl font-bold text-[#8B4513]">Произведения</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {poems.map((poem, index) => (
              <Card 
                key={index} 
                className="p-6 bg-[#F5E6D3] border-2 border-[#8B4513] shadow-lg hover:shadow-2xl transition-all hover:scale-105 cursor-pointer"
              >
                <div className="flex items-start gap-3 mb-3">
                  <Icon name="Feather" className="text-[#DAA520] mt-1" size={24} />
                  <div>
                    <h3 className="text-2xl font-bold text-[#8B4513]">{poem.title}</h3>
                    <p className="text-sm text-[#2C1810]/70">{poem.year}</p>
                  </div>
                </div>
                <Separator className="my-4 bg-[#DAA520]" />
                <p className="text-[#2C1810] italic leading-relaxed">
                  {poem.excerpt}
                </p>
                <Button 
                  variant="outline" 
                  className="mt-4 w-full border-[#8B4513] text-[#8B4513] hover:bg-[#8B4513] hover:text-[#F5E6D3]"
                >
                  Читать полностью
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-16 px-4 bg-[#2C1810]/5">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-8">
            <Icon name="Image" className="text-[#8B4513]" size={40} />
            <h2 className="text-4xl font-bold text-[#8B4513]">Галерея</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <Card 
                key={item} 
                className="overflow-hidden border-2 border-[#8B4513] shadow-xl hover:shadow-2xl transition-all"
              >
                <div className="aspect-square bg-gradient-to-br from-[#8B4513] to-[#2C1810] flex items-center justify-center">
                  <Icon name="User" className="text-[#F5E6D3] opacity-30" size={80} />
                </div>
                <div className="p-4 bg-[#F5E6D3]">
                  <p className="text-center text-[#2C1810] font-semibold">
                    Портрет Н.М. Языкова
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="timeline" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <Icon name="Calendar" className="text-[#8B4513]" size={40} />
            <h2 className="text-4xl font-bold text-[#8B4513]">Хронология</h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-[#DAA520]"></div>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="relative flex gap-6 items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-[#8B4513] rounded-full flex items-center justify-center border-4 border-[#F5E6D3] shadow-lg z-10">
                    <span className="text-[#F5E6D3] font-bold">{item.year}</span>
                  </div>
                  <Card className="flex-1 p-6 bg-[#F5E6D3] border-2 border-[#8B4513] shadow-lg">
                    <p className="text-lg text-[#2C1810]">{item.event}</p>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="bibliography" className="py-16 px-4 bg-[#2C1810]/5">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <Icon name="BookMarked" className="text-[#8B4513]" size={40} />
            <h2 className="text-4xl font-bold text-[#8B4513]">Библиография</h2>
          </div>
          <Card className="p-8 bg-[#F5E6D3] border-2 border-[#8B4513] shadow-xl">
            <div className="space-y-4">
              {[
                "Языков Н.М. Полное собрание стихотворений. — М.-Л.: Academia, 1934.",
                "Языков Н.М. Стихотворения и поэмы. — Л.: Советский писатель, 1988.",
                "Переписка Н.М. Языкова с В.А. Жуковским. — СПб., 1903.",
                "Азадовский К.М. Николай Языков. Личность и творчество. — М., 1998.",
                "Гудзий Н.К. Языков. Жизнь и творчество. — М., 1964."
              ].map((book, index) => (
                <div key={index} className="flex items-start gap-3 p-4 hover:bg-[#EDD9C3] rounded transition-colors">
                  <Icon name="Book" className="text-[#DAA520] flex-shrink-0 mt-1" size={20} />
                  <p className="text-[#2C1810]">{book}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <footer className="bg-[#8B4513] text-[#F5E6D3] py-8 px-4 border-t-2 border-[#DAA520]">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Icon name="Feather" size={24} />
            <p className="text-lg font-semibold">Николай Михайлович Языков</p>
          </div>
          <p className="text-sm opacity-80">1803—1846 | Русский поэт-романтик</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;