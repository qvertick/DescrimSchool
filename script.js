const BASE_RATE_RUB = 3000; // Base price per finished minute; edit to match your real pricing.
const BASE_RATE_USD = 35;   // Example USD base rate per finished minute.
const INCLUDED_REVISION_ROUNDS = 2;
const EXTRA_REVISION_RATE = 0.10;
const RUSH_RATE = 0.25;

const complexityMultipliers = { simple: 1, standard: 1.5, advanced: 2.2 };
const styleMultipliers = { shortform: 1, talkinghead: 1.1, motion: 1.8, longform: 1.25 };

const translations = {
  ru: {
    estimate:"ОЦЕНИ СВОЙ ПРОЕКТ", eyebrow:"МОНТАЖ ВИДЕО / КАЛЬКУЛЯТОР ЦЕН", heading:'Рассчитай стоимость<br><span>своего проекта.</span>',
    intro:"Выбери формат, сложность и дополнительные опции — получи предварительную оценку за несколько секунд.",
    styleTitle:"Стиль монтажа",styleSubtitle:"Какой результат тебе нужен?",shortDesc:"Динамичные вертикальные видео для Reels, TikTok и Shorts.",
    talkDesc:"Видео с говорящим человеком, чисткой пауз, субтитрами и вставками.",motionDesc:"Моушн-графика, анимация текста, визуальные эффекты и композитинг.",
    longDesc:"Длинные видео для YouTube, интервью, обзоров и образовательного контента.",
    complexityTitle:"Сложность монтажа",complexitySubtitle:"Уровень постпродакшена",simpleTitle:"Базовый",
    simpleDesc:"Склейки, базовая цветокоррекция и звук",standardTitle:"Стандартный",
    standardDesc:"Ритм, саунд-дизайн, титры и дополнительные вставки",advancedTitle:"Сложный",
    advancedDesc:"Сложная графика, VFX, трекинг или композитинг",durationTitle:"Хронометраж",
    durationSubtitle:"Длительность готового видео",minutesLabel:"Минут готового видео",min:"мин.",minSmall:"мин",
    extrasTitle:"Дополнительные условия",extrasSubtitle:"Настрой стоимость под свой проект",revisionsTitle:"Раунды правок",
    revisionsDesc:"2 раунда включены в стоимость",rushTitle:"Срочный заказ",rushDesc:"Приоритетная работа и ускоренный дедлайн",
    summaryLabel:"ПРЕДВАРИТЕЛЬНАЯ СТОИМОСТЬ",summaryTitle:"Твоя оценка",summaryNote:"Предварительная стоимость проекта",
    baseLine:"База за хронометраж",complexityLine:"Сложность",styleLine:"Стиль",revisionsLine:"Доп. правки",rushLine:"Срочность",
    included:"2 раунда правок включены",contact:"Обсудить проект",
    disclaimer:"Расчёт ориентировочный. Финальная цена зависит от исходников, технического задания и сроков.",
    footerText:"МОНТАЖ · МОУШН-ДИЗАЙН",minuteWord:"мин.",revisionWord:"раундов",rushOn:"25% добавлено"
  },
  en: {
    estimate:"ESTIMATE YOUR PROJECT",eyebrow:"VIDEO EDITING / PRICE CALCULATOR",heading:'Calculate the cost<br><span>of your project.</span>',
    intro:"Choose a format, complexity and add-ons to get an instant preliminary estimate.",
    styleTitle:"Editing style",styleSubtitle:"What kind of result do you need?",shortDesc:"Fast-paced vertical videos for Reels, TikTok and Shorts.",
    talkDesc:"On-camera videos with pauses removed, captions and supporting cutaways.",motionDesc:"Motion graphics, animated typography, visual effects and compositing.",
    longDesc:"Longer YouTube videos, interviews, reviews and educational content.",
    complexityTitle:"Editing complexity",complexitySubtitle:"Post-production level",simpleTitle:"Basic",
    simpleDesc:"Cuts, basic color correction and audio cleanup",standardTitle:"Standard",
    standardDesc:"Pacing, sound design, titles and supporting cutaways",advancedTitle:"Advanced",
    advancedDesc:"Complex graphics, VFX, tracking or compositing",durationTitle:"Video duration",
    durationSubtitle:"Length of the finished video",minutesLabel:"Minutes of finished video",min:"min",minSmall:"min",
    extrasTitle:"Additional options",extrasSubtitle:"Customize the estimate for your project",revisionsTitle:"Revision rounds",
    revisionsDesc:"2 rounds included in the price",rushTitle:"Rush delivery",rushDesc:"Priority workflow and a tighter deadline",
    summaryLabel:"ESTIMATED PROJECT COST",summaryTitle:"Your estimate",summaryNote:"Preliminary project estimate",
    baseLine:"Duration base",complexityLine:"Complexity",styleLine:"Style",revisionsLine:"Extra revisions",rushLine:"Rush fee",
    included:"2 revision rounds included",contact:"Discuss your project",
    disclaimer:"This is an estimate. Final pricing depends on source footage, the brief and deadline.",
    footerText:"CREATIVE EDITING · MOTION DESIGN",minuteWord:"min",revisionWord:"rounds",rushOn:"25% added"
  }
};

let currentLang = "ru";
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

function money(value) {
  const symbol = currentLang === "ru" ? "₽" : "$";
  const rounded = Math.round(value / (currentLang === "ru" ? 100 : 1)) * (currentLang === "ru" ? 100 : 1);
  return new Intl.NumberFormat(currentLang === "ru" ? "ru-RU" : "en-US", {
    maximumFractionDigits: 0
  }).format(rounded) + " " + symbol;
}

function selectedStyle() {
  return $(".style-card.selected")?.dataset.style || "shortform";
}

function calculate() {
  const duration = Number($("#duration").value);
  const complexity = document.querySelector('input[name="complexity"]:checked').value;
  const revisions = Number($("#revisionOutput").value);
  const rush = $("#rush").checked;
  const baseRate = currentLang === "ru" ? BASE_RATE_RUB : BASE_RATE_USD;
  const base = duration * baseRate;
  const complexityFactor = complexityMultipliers[complexity];
  const styleFactor = styleMultipliers[selectedStyle()];
  const subtotal = base * complexityFactor * styleFactor;
  const extraRevisionCount = Math.max(0, revisions - INCLUDED_REVISION_ROUNDS);
  const revisionFee = subtotal * EXTRA_REVISION_RATE * extraRevisionCount;
  const rushFee = rush ? (subtotal + revisionFee) * RUSH_RATE : 0;
  const total = subtotal + revisionFee + rushFee;

  $("#durationOutput").textContent = duration;
  $("#totalPrice").textContent = new Intl.NumberFormat(currentLang === "ru" ? "ru-RU" : "en-US", {maximumFractionDigits:0}).format(Math.round(total / (currentLang === "ru" ? 100 : 1)) * (currentLang === "ru" ? 100 : 1));
  $("#currencySymbol").textContent = currentLang === "ru" ? "₽" : "$";
  $("#basePrice").textContent = money(base);
  $("#complexityPrice").textContent = "×" + complexityFactor.toFixed(1);
  $("#stylePrice").textContent = "×" + styleFactor.toFixed(2).replace(/0$/, "");
  $("#revisionsPrice").textContent = revisionFee ? "+ " + money(revisionFee) : money(0);
  $("#rushPrice").textContent = rush ? "+ " + money(rushFee) : money(0);
  $("#revisionOutput").textContent = revisions;
  $(".included span:last-child").textContent = translations[currentLang].included;
  $("#contactButton").href = "https://t.me/WHYDESCR1M";
}

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  $$("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (translations[lang][key]) element.innerHTML = translations[lang][key];
  });
  $$(".lang-btn").forEach((button) => {
    const active = button.dataset.lang === lang;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  calculate();
}

$$(".lang-btn").forEach(button => button.addEventListener("click", () => setLanguage(button.dataset.lang)));

$$(".style-card").forEach(button => {
  button.addEventListener("click", () => {
    $$(".style-card").forEach(card => {
      const selected = card === button;
      card.classList.toggle("selected", selected);
      card.setAttribute("aria-pressed", String(selected));
    });
    calculate();
  });
});

$$('input[name="complexity"]').forEach(input => input.addEventListener("change", () => {
  $$(".choice-row").forEach(row => row.classList.toggle("selected", row.contains(input)));
  calculate();
}));

$("#duration").addEventListener("input", calculate);
$("#rush").addEventListener("change", () => {
  $(".rush-toggle").classList.toggle("enabled", $("#rush").checked);
  calculate();
});

function updateRevisions(delta) {
  const output = $("#revisionOutput");
  const next = Math.min(10, Math.max(0, Number(output.textContent) + delta));
  output.textContent = next;
  $("#revisionMinus").disabled = next === 0;
  $("#revisionPlus").disabled = next === 10;
  calculate();
}
$("#revisionMinus").addEventListener("click", () => updateRevisions(-1));
$("#revisionPlus").addEventListener("click", () => updateRevisions(1));

setLanguage("ru");
