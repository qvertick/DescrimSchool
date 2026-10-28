/* Изолированная логика модального калькулятора. Не заменяет существующий script.js. */
(() => {
  const root = document.querySelector("[data-pricecalc-modal]");
  if (!root || root.dataset.initialized === "true") return;
  root.dataset.initialized = "true";

  // Примерные тарифы — поменяйте на свой прайс.
  const RATE = { ru: 3000, en: 35 };
  const complexity = { simple: 1, standard: 1.5, advanced: 2.2 };
  const styles = { shortform: 1, talkinghead: 1.1, motion: 1.8, longform: 1.25 };
  const includedRevisions = 2;
  const extraRevisionRate = 0.10;
  const rushRate = 0.25;
  let lang = "ru";
  let lastFocus = null;

  const q = (selector) => root.querySelector(selector);
  const qa = (selector) => [...root.querySelectorAll(selector)];

  const copy = {
    ru: {
      open:"Рассчитать стоимость",eyebrow:"МОНТАЖ ВИДЕО / КАЛЬКУЛЯТОР ЦЕН",title:"Калькулятор стоимости",
      styleTitle:"Стиль монтажа",styleSub:"Выбери формат своего видео",
      shortDesc:"Динамичные вертикальные ролики для Reels, TikTok и Shorts.",
      talkDesc:"Видео с человеком в кадре, субтитрами и дополнительными вставками.",
      motionDesc:"Анимация, моушн-графика, визуальные эффекты и композитинг.",
      longDesc:"Длинные видео для YouTube, интервью и образовательного контента.",
      complexityTitle:"Сложность монтажа",complexitySub:"Уровень постпродакшена",simple:"Базовый",
      simpleDesc:"Склейки, базовая цветокоррекция и звук",standard:"Стандартный",
      standardDesc:"Ритм, саунд-дизайн, титры и вставки",advanced:"Сложный",
      advancedDesc:"Сложная графика, VFX, трекинг и композитинг",
      durationTitle:"Хронометраж",durationSub:"Длительность готового видео",durationLabel:"Минут готового видео",min:"мин.",minShort:"мин",
      extrasTitle:"Дополнительные условия",extrasSub:"Настрой стоимость под свой проект",revisionsTitle:"Раунды правок",
      revisionsSub:"2 раунда включены в стоимость",rushTitle:"Срочный заказ",rushSub:"Приоритетная работа и ускоренный дедлайн",
      estimate:"ПРЕДВАРИТЕЛЬНАЯ СТОИМОСТЬ",yourEstimate:"Твоя оценка",preliminary:"Предварительная стоимость проекта",
      baseLine:"База за хронометраж",complexityLine:"Сложность",styleLine:"Стиль",revisionLine:"Дополнительные правки",
      rushLine:"Срочность",included:"2 раунда правок включены",contact:"Обсудить проект",
      disclaimer:"Расчёт ориентировочный. Финальная цена зависит от исходников, ТЗ и сроков."
    },
    en: {
      open:"Calculate project price",eyebrow:"VIDEO EDITING / PRICE CALCULATOR",title:"Editing price calculator",
      styleTitle:"Editing style",styleSub:"Choose your video format",
      shortDesc:"Fast-paced vertical videos for Reels, TikTok and Shorts.",
      talkDesc:"On-camera videos with captions and supporting cutaways.",
      motionDesc:"Animation, motion graphics, visual effects and compositing.",
      longDesc:"Long-form YouTube videos, interviews and educational content.",
      complexityTitle:"Editing complexity",complexitySub:"Post-production level",simple:"Basic",
      simpleDesc:"Cuts, basic color correction and audio cleanup",standard:"Standard",
      standardDesc:"Pacing, sound design, titles and cutaways",advanced:"Advanced",
      advancedDesc:"Complex graphics, VFX, tracking and compositing",
      durationTitle:"Video duration",durationSub:"Length of the finished video",durationLabel:"Minutes of finished video",min:"min",minShort:"min",
      extrasTitle:"Additional options",extrasSub:"Customize the estimate for your project",revisionsTitle:"Revision rounds",
      revisionsSub:"2 rounds included in the price",rushTitle:"Rush delivery",rushSub:"Priority workflow and a tighter deadline",
      estimate:"ESTIMATED PROJECT COST",yourEstimate:"Your estimate",preliminary:"Preliminary project estimate",
      baseLine:"Duration base",complexityLine:"Complexity",styleLine:"Style",revisionLine:"Extra revisions",
      rushLine:"Rush fee",included:"2 revision rounds included",contact:"Discuss your project",
      disclaimer:"This is an estimate. Final pricing depends on the footage, brief and deadline."
    }
  };

  function money(value) {
    const symbol = lang === "ru" ? "₽" : "$";
    const step = lang === "ru" ? 100 : 1;
    return new Intl.NumberFormat(lang === "ru" ? "ru-RU" : "en-US", { maximumFractionDigits: 0 })
      .format(Math.round(value / step) * step) + " " + symbol;
  }

  function calculate() {
    const duration = Number(q("#pc-duration").value);
    const complexityKey = q('input[name="pc-complexity"]:checked').value;
    const styleKey = q(".pricecalc-style.is-selected").dataset.pcStyle;
    const revisions = Number(q("#pc-revisions").textContent);
    const rush = q("#pc-rush").checked;
    const base = duration * RATE[lang];
    const subtotal = base * complexity[complexityKey] * styles[styleKey];
    const revisionFee = subtotal * Math.max(0, revisions - includedRevisions) * extraRevisionRate;
    const rushFee = rush ? (subtotal + revisionFee) * rushRate : 0;
    const total = subtotal + revisionFee + rushFee;
    const step = lang === "ru" ? 100 : 1;
    const rounded = Math.round(total / step) * step;

    q("#pc-duration-output").textContent = duration;
    q("#pc-currency").textContent = lang === "ru" ? "₽" : "$";
    q("#pc-total").textContent = new Intl.NumberFormat(lang === "ru" ? "ru-RU" : "en-US", {maximumFractionDigits:0}).format(rounded);
    q("#pc-base").textContent = money(base);
    q("#pc-complexity").textContent = "×" + complexity[complexityKey].toFixed(1);
    q("#pc-style").textContent = "×" + (styles[styleKey] % 1 ? styles[styleKey].toFixed(2).replace(/0$/, "") : styles[styleKey].toFixed(1));
    q("#pc-revision-fee").textContent = revisionFee ? "+ " + money(revisionFee) : money(0);
    q("#pc-rush-fee").textContent = rush ? "+ " + money(rushFee) : money(0);
    q("[data-pc-minus]").disabled = revisions <= 0;
    q("[data-pc-plus]").disabled = revisions >= 10;
  }

  function setLanguage(next) {
    lang = next;
    root.querySelectorAll("[data-pc-text]").forEach(el => {
      const key = el.dataset.pcText;
      if (copy[lang][key]) el.textContent = copy[lang][key];
    });
    qa("[data-pc-lang]").forEach(button => {
      button.classList.toggle("is-active", button.dataset.pcLang === lang);
      button.setAttribute("aria-pressed", String(button.dataset.pcLang === lang));
    });
    calculate();
  }

  function openModal() {
    lastFocus = document.activeElement;
    root.classList.add("is-open");
    root.setAttribute("aria-hidden", "false");
    document.body.classList.add("pricecalc-no-scroll");
    q("[data-pricecalc-close]").focus();
  }
  function closeModal() {
    root.classList.remove("is-open");
    root.setAttribute("aria-hidden", "true");
    document.body.classList.remove("pricecalc-no-scroll");
    if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
  }

  document.addEventListener("click", event => {
    const opener = event.target.closest("[data-pricecalc-open]");
    if (opener) openModal();
  });
  q("[data-pricecalc-close]").addEventListener("click", closeModal);
  root.addEventListener("click", event => { if (event.target === root) closeModal(); });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && root.classList.contains("is-open")) closeModal();
  });

  qa("[data-pc-lang]").forEach(button => button.addEventListener("click", () => setLanguage(button.dataset.pcLang)));
  qa("[data-pc-style]").forEach(button => button.addEventListener("click", () => {
    qa("[data-pc-style]").forEach(card => {
      const selected = card === button;
      card.classList.toggle("is-selected", selected);
      card.setAttribute("aria-pressed", String(selected));
    });
    calculate();
  }));
  qa('input[name="pc-complexity"]').forEach(input => input.addEventListener("change", () => {
    qa(".pricecalc-choice").forEach(row => row.classList.toggle("is-selected", row.contains(input)));
    calculate();
  }));
  q("#pc-duration").addEventListener("input", calculate);
  q("#pc-rush").addEventListener("change", () => {
    q(".pricecalc-rush").classList.toggle("is-enabled", q("#pc-rush").checked);
    calculate();
  });
  function changeRevisions(delta) {
    const output = q("#pc-revisions");
    output.textContent = Math.max(0, Math.min(10, Number(output.textContent) + delta));
    calculate();
  }
  q("[data-pc-minus]").addEventListener("click", () => changeRevisions(-1));
  q("[data-pc-plus]").addEventListener("click", () => changeRevisions(1));

  // Ensure modal always sits above the existing site, and lock background scrolling while open.
  const style = document.createElement("style");
  style.textContent = "body.pricecalc-no-scroll{overflow:hidden!important}";
  document.head.appendChild(style);
  setLanguage("ru");
})();
