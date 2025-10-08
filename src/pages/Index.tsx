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
    },
    {
      title: "Землетрясенье",
      year: "1829",
      excerpt: "Поколебался мир: природа / Внезапной ужаса полна..."
    },
    {
      title: "А.Н. Очкину",
      year: "1824",
      excerpt: "Мы любим шумные пиры, / Хмельной товарищества глас..."
    },
    {
      title: "Тригорское",
      year: "1826",
      excerpt: "Тригорское! Я никогда / Не позабуду дней веселых..."
    }
  ];

  const interestingFacts = [
    {
      icon: "Sparkles",
      title: "Студенческий поэт",
      text: "Языков провел в Дерптском университете 8 лет вместо положенных 4, наслаждаясь студенческой жизнью и не спеша с экзаменами."
    },
    {
      icon: "Heart",
      title: "Друг Пушкина",
      text: "Пушкин называл Языкова 'надеждой нашей словесности' и посвящал ему стихи. Их дружба началась в 1826 году."
    },
    {
      icon: "Wine",
      title: "Поэт застолья",
      text: "Языков был известен своими застольными песнями. Его стихи 'Из страны, страны далёкой' стали популярной студенческой песней."
    },
    {
      icon: "BookHeart",
      title: "Романтик природы",
      text: "Поэт черпал вдохновение в природе, особенно любил водные стихии — реки, водопады, море."
    },
    {
      icon: "Feather",
      title: "Мастер ритма",
      text: "Белинский высоко ценил стихи Языкова за их 'удалую разгульность', энергию и звучность."
    },
    {
      icon: "Home",
      title: "Языково",
      text: "Родовое имение Языково в Симбирской губернии стало местом литературных встреч и творческого вдохновения."
    }
  ];

  const galleryImages = [
    {
      url: "https://img-fotki.yandex.ru/get/9805/97833783.2e/0_cd7e7_6f1a8c8b_orig.jpg",
      title: "Портрет Н.М. Языкова",
      description: "Литография середины XIX века"
    },
    {
      url: "https://ic.pics.livejournal.com/k_istine_888/78614898/906187/906187_original.jpg",
      title: "Николай Михайлович Языков",
      description: "Портрет из музейного собрания"
    },
    {
      url: "https://avatars.dzeninfra.ru/get-zen_doc/1652270/pub_5e7c8f8c9c944637e2f5d6c5_5e7c9049c3e8f9267eb8d91e/scale_1200",
      title: "Н.М. Языков в молодости",
      description: "Работа неизвестного художника"
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Tartu_University_main_building.jpg/1200px-Tartu_University_main_building.jpg",
      title: "Дерптский университет",
      description: "Главное здание университета в Тарту"
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Simbirsk_XIX.jpg/1200px-Simbirsk_XIX.jpg",
      title: "Симбирск в XIX веке",
      description: "Родной город поэта"
    },
    {
      url: "https://www.culture.ru/storage/images/e4f5b9a5e8e9c1d8c7a5f2f0c0d5e8f9/huge.jpg",
      title: "Памятник Н.М. Языкову",
      description: "В Ульяновске (бывшем Симбирске)"
    },
    {
      url: "https://topvoyager.com/wp-content/uploads/2018/08/yazykovskiy-park.jpg",
      title: "Языковский парк",
      description: "Усадьба Языково, современный вид"
    },
    {
      url: "https://img-fotki.yandex.ru/get/15490/7857920.c/0_7d2c5_c8c5a8f0_orig.jpg",
      title: "Рукопись Языкова",
      description: "Автограф стихотворения поэта"
    },
    {
      url: "https://www.culture.ru/storage/images/a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6/big.jpg",
      title: "Книга стихов Языкова",
      description: "Прижизненное издание 1833 года"
    }
  ];

  const timeline = [
    { year: "1803", event: "Родился 4 марта в Симбирске в богатой дворянской семье" },
    { year: "1814", event: "Начало обучения в Петербургском горном кадетском корпусе" },
    { year: "1822", event: "Поступил в Дерптский университет на философский факультет" },
    { year: "1824", event: "Первые публикации стихов в альманахе 'Северные цветы'" },
    { year: "1826", event: "Знакомство и начало переписки с Пушкиным" },
    { year: "1829", event: "Написаны поэмы 'Пловец' и 'Землетрясенье'" },
    { year: "1831", event: "Переезд в имение Языково, начало тяжелой болезни" },
    { year: "1838", event: "Лечение за границей в Германии и Италии" },
    { year: "1843", event: "Возвращение в Россию, жизнь в Москве" },
    { year: "1846", event: "Скончался 26 декабря в Москве, похоронен в Симбирске" }
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
            {["biography", "facts", "works", "poems", "gallery", "timeline", "bibliography"].map((section) => (
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
                {section === "facts" && "Интересные факты"}
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
                С 1831 года Языков страдал от тяжелой болезни позвоночника, что вынудило его покинуть университет. 
                Он провел несколько лет на лечении в Германии и Италии (1838-1843). Несмотря на физические 
                страдания, поэт продолжал писать до конца жизни.
              </p>
              <p className="text-lg">
                Языков умер 26 декабря 1846 года в Москве в возрасте 43 лет. Его тело было перевезено в Симбирск 
                и похоронено в родовом имении Языково. Творчество поэта оказало значительное влияние на развитие 
                русской романтической поэзии.
              </p>
            </div>
          </Card>
        </div>
      </section>

      <section id="facts" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-8">
            <Icon name="Lightbulb" className="text-[#8B4513]" size={40} />
            <h2 className="text-4xl font-bold text-[#8B4513]">Интересные факты</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interestingFacts.map((fact, index) => (
              <Card 
                key={index} 
                className="p-6 bg-[#F5E6D3] border-2 border-[#8B4513] shadow-lg hover:shadow-2xl transition-all hover:scale-105"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-[#DAA520] rounded-full flex items-center justify-center mb-4">
                    <Icon name={fact.icon as any} className="text-[#2C1810]" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-[#8B4513] mb-3">{fact.title}</h3>
                  <p className="text-[#2C1810] leading-relaxed">{fact.text}</p>
                </div>
              </Card>
            ))}
          </div>
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
                <p className="text-lg mb-4">
                  Дерптский период — время расцвета таланта Языкова. Его стихи этого времени полны 
                  жизнерадостности, энергии и свободолюбия. Он воспевал студенческое братство, 
                  пиры и дружеские встречи. Стихотворения 'Пловец', 'А.Н. Очкину', 'Элегия' принесли 
                  ему широкую известность.
                </p>
                <p className="text-lg">
                  В это время Языков создает яркие образы природы, моря, бурь. Его поэзия наполнена 
                  движением, динамикой, звучностью. Белинский писал о 'стихийной силе' его стихов.
                </p>
              </div>
              <Separator className="bg-[#DAA520]" />
              <div>
                <h3 className="text-2xl font-semibold text-[#8B4513] mb-4 flex items-center gap-2">
                  <Icon name="PenTool" size={24} />
                  Зрелое творчество (1831-1846)
                </h3>
                <p className="text-lg mb-4">
                  В зрелый период творчества тональность стихов Языкова меняется. Появляются 
                  философские размышления, религиозные мотивы. Поэт обращается к темам веры, 
                  смысла жизни и предназначения человека.
                </p>
                <p className="text-lg">
                  Болезнь и страдания наложили отпечаток на творчество. Стихи становятся более 
                  глубокими, размеренными, появляется тема смирения и принятия судьбы. Языков 
                  сближается со славянофилами и пишет патриотические стихотворения.
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
            {galleryImages.map((image, index) => (
              <Card 
                key={index} 
                className="overflow-hidden border-2 border-[#8B4513] shadow-xl hover:shadow-2xl transition-all hover:scale-105 cursor-pointer"
              >
                <div className="aspect-square bg-[#EDD9C3] overflow-hidden">
                  <img 
                    src={image.url} 
                    alt={image.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = '<div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#8B4513] to-[#2C1810]"><svg class="w-20 h-20 text-[#F5E6D3] opacity-30" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg></div>';
                      }
                    }}
                  />
                </div>
                <div className="p-4 bg-[#F5E6D3]">
                  <p className="text-center text-[#2C1810] font-semibold mb-1">
                    {image.title}
                  </p>
                  <p className="text-center text-[#2C1810]/70 text-sm">
                    {image.description}
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