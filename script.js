const translations = {
  ru: {
    navCourses:"Курсы",navWorks:"Портфолио",navAbout:"О школе",navCta:"Выбрать курс ↗",
    eyebrow:"ШКОЛА DIGITAL-ИСКУССТВА · 2026",heroTitle:'Преврати идеи<br>в <span class="outline">движение.</span>',
    heroSub:"Освой motion design, After Effects и 3D. Создавай работы, которые останавливают скролл и открывают новые возможности.",
    heroCta:'Найти свой курс <span>↗</span>',heroSecondary:'Смотреть работы <span>↓</span>',
    proofStrong:"Практика вместо теории",proofSmall:"От первого кадра до сильного портфолио",heroBottom:"ИДЕИ НЕ ДОЛЖНЫ СТОЯТЬ НА МЕСТЕ",
    coursesEyebrow:"01 / ОБУЧЕНИЕ",coursesTitle:'Выбери свой<br><span class="muted">уровень движения.</span>',
    coursesNote:"Не просто смотри уроки — собирай навыки, делай проекты и формируй собственный визуальный язык.",
    beginner:"С НУЛЯ",intermediate:"СРЕДНИЙ УРОВЕНЬ",advanced:"ПРОДВИНУТЫЙ",
    course1:"Motion Base",course1Desc:"База After Effects, ритм, композиция и первые уверенные анимации.",
    course2:"Motion Artist",course2Desc:"Сложные переходы, выразительная типографика и коммерческие проекты.",
    course3:"3D Playground",course3Desc:"Объём, материалы, свет и создание эффектных 3D-сцен.",
    priceNote:"* Демонстрационные цены — замени их на реальные перед публикацией.",
    manifestoEyebrow:"НЕ ЕЩЁ ОДИН ВИДЕОКУРС",manifestoTitle:'Меньше бесконечных туториалов.<br><span>Больше работ, которыми гордишься.</span>',
    manifestoText:"Обучение построено вокруг практики: понятные задачи, обратная связь и проекты, которые можно добавить в портфолио.",manifestoCta:"Как мы учим ↗",
    worksEyebrow:"02 / ИЗБРАННЫЕ РАБОТЫ",worksTitle:'Движение говорит<br><span class="muted">громче слов.</span>',
    worksNote:"Здесь будут реальные работы школы и учеников. Сейчас это визуальные заглушки для демонстрации дизайна.",
    aboutEyebrow:"03 / ПОДХОД",aboutTitle:'Учись создавать.<br><span class="muted">Не повторять.</span>',
    aboutText:"WHYDESCR1M — концепция школы для тех, кто хочет развивать визуальное мышление и превращать идеи в выразительные цифровые проекты.",
    stat1:"Практические задания",stat2:"Работы для портфолио",stat3:"Рост в своём темпе",
    contactEyebrow:"ТВОЙ СЛЕДУЮЩИЙ ШАГ",contactTitle:'Готов придать идеям<br><span>движение?</span>',
    contactText:"Оставь заявку, чтобы узнать подробности о программах и ближайшем наборе.",contactCta:"Обсудить обучение ↗",
    footer:"Создавай движение.",backTop:"Наверх ↑"
  },
  en: {
    navCourses:"Courses",navWorks:"Portfolio",navAbout:"About",navCta:"Explore courses ↗",
    eyebrow:"DIGITAL ART SCHOOL · 2026",heroTitle:'Turn ideas<br>into <span class="outline">motion.</span>',
    heroSub:"Learn motion design, After Effects and 3D. Create work that stops the scroll and opens new opportunities.",
    heroCta:'Find your course <span>↗</span>',heroSecondary:'Explore the work <span>↓</span>',
    proofStrong:"Practice over theory",proofSmall:"From your first frame to a standout portfolio",heroBottom:"IDEAS WERE NEVER MEANT TO STAND STILL",
    coursesEyebrow:"01 / LEARNING",coursesTitle:'Find your<br><span class="muted">next level.</span>',
    coursesNote:"Don't just watch lessons. Build skills, create projects and develop your own visual language.",
    beginner:"BEGINNER",intermediate:"INTERMEDIATE",advanced:"ADVANCED",
    course1:"Motion Base",course1Desc:"After Effects fundamentals, rhythm, composition and your first confident animations.",
    course2:"Motion Artist",course2Desc:"Complex transitions, expressive typography and commercial-ready projects.",
    course3:"3D Playground",course3Desc:"Depth, materials, lighting and the art of building striking 3D scenes.",
    priceNote:"* Sample prices — replace with your actual prices before publishing.",
    manifestoEyebrow:"NOT ANOTHER VIDEO COURSE",manifestoTitle:'Fewer endless tutorials.<br><span>More work you’re proud of.</span>',
    manifestoText:"Learning is built around practice: clear briefs, feedback and projects you can add to your portfolio.",manifestoCta:"Our approach ↗",
    worksEyebrow:"02 / SELECTED WORK",worksTitle:'Let motion speak<br><span class="muted">louder than words.</span>',
    worksNote:"This section will feature real school and student projects. The current visuals are design placeholders.",
    aboutEyebrow:"03 / OUR APPROACH",aboutTitle:'Learn to create.<br><span class="muted">Not to imitate.</span>',
    aboutText:"WHYDESCR1M is a school concept for curious creatives who want to sharpen their visual thinking and turn ideas into expressive digital work.",
    stat1:"Hands-on assignments",stat2:"Portfolio-ready projects",stat3:"Progress at your pace",
    contactEyebrow:"YOUR NEXT STEP",contactTitle:'Ready to put ideas<br><span>in motion?</span>',
    contactText:"Get in touch to learn more about the programs and the next enrollment.",contactCta:"Talk about learning ↗",
    footer:"Keep ideas moving.",backTop:"Back to top ↑"
  }
};
let language = "ru";
let currency = "RUB";
const priceRub = {base:14900,artist:24900,"3d":32900};
const usdRate = 100; // DEMO ONLY: replace with your actual pricing policy or a trusted exchange-rate API.
function renderPrices(){
  document.querySelectorAll("[data-price]").forEach(el=>{
    const rub = priceRub[el.dataset.price];
    el.textContent = currency === "RUB"
      ? "₽ " + rub.toLocaleString("ru-RU")
      : "$ " + Math.round(rub/usdRate).toLocaleString("en-US");
  });
}
function setLanguage(next){
  language = next;
  document.documentElement.lang = next;
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const value = translations[next][el.dataset.i18n];
    if(value) el.innerHTML = value;
  });
  document.getElementById("langToggle").innerHTML = next === "ru" ? "<b>RU</b> <span>/</span> EN" : "RU <span>/</span> <b>EN</b>";
  document.title = next === "ru" ? "WHYDESCR1M — Школа моушен-дизайна" : "WHYDESCR1M — Motion Design School";
}
document.getElementById("langToggle").addEventListener("click",()=>setLanguage(language === "ru" ? "en" : "ru"));
document.getElementById("currencyToggle").addEventListener("click",()=>{
  currency = currency === "RUB" ? "USD" : "RUB";
  document.getElementById("currencyToggle").innerHTML = currency === "RUB" ? "<b>₽</b> <span>/</span> $" : "₽ <span>/</span> <b>$</b>";
  renderPrices();
});
document.getElementById("menuToggle").addEventListener("click",()=>document.querySelector(".nav nav").classList.toggle("open"));
document.querySelectorAll(".nav nav a").forEach(a=>a.addEventListener("click",()=>document.querySelector(".nav nav").classList.remove("open")));
const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target);}});
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
renderPrices();
