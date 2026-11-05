/* Live demos: things to click or watch. UPD 2026-10-18 */
window.PORTFOLIO.demos = {
  title: { ru: "Демо: посмотреть и покликать", ua: "Демо: подивитися й поклікати", en: "Demos: watch and click" },
  lead: {
    ru: "Живые страницы и фрагменты роликов из кейсов. Квизы и лендинги — рабочие страницы клиентов на платформе Leeloo.ai.",
    ua: "Живі сторінки та фрагменти роликів із кейсів. Квізи й лендинги — робочі сторінки клієнтів на платформі Leeloo.ai.",
    en: "Live pages and video snippets from the cases. Quizzes and landing pages are real client pages on the Leeloo.ai platform."
  },
  open: { ru: "Открыть", ua: "Відкрити", en: "Open" },
  toCase: { ru: "К кейсу", ua: "До кейсу", en: "See the case" },
  items: [
    /* UPD 2026-11-05 */
    {
      type: "link", href: "https://github.com/deronmose/sushi-qc-bot", caseId: "H1",
      kind: { ru: "Код на GitHub", ua: "Код на GitHub", en: "Code on GitHub" },
      title: { ru: "Sushi QC Bot", ua: "Sushi QC Bot", en: "Sushi QC Bot" },
      caption: { ru: "Воркфлоу n8n, демо-техкарты на 30 блюд, инструкция по установке и офлайн-тесты.", ua: "Воркфлоу n8n, демо-техкарти на 30 страв, інструкція зі встановлення та офлайн-тести.", en: "n8n workflow, demo recipe cards for 30 dishes, setup guide and offline tests." }
    },
    /* UPD 2026-10-30 */
    {
      type: "link", href: "https://github.com/deronmose/chat-archiver", caseId: "D3",
      kind: { ru: "Код на GitHub", ua: "Код на GitHub", en: "Code on GitHub" },
      title: { ru: "Chat Archiver", ua: "Chat Archiver", en: "Chat Archiver" },
      caption: { ru: "Исходники, модель безопасности и скриншоты демо-режима.", ua: "Вихідний код, модель безпеки та скриншоти демо-режиму.", en: "Source code, security model and demo-mode screenshots." }
    },
    {
      type: "video", caseId: "E3",
      src: "assets/media/ad-twin-preview.mp4", poster: "assets/media/ad-twin-poster.jpg",
      kind: { ru: "Видео", ua: "Відео", en: "Video" },
      title: { ru: "Реклама с цифровым двойником", ua: "Реклама з цифровим двійником", en: "Ad with a digital twin" },
      caption: { ru: "Фрагмент ролика 9:16: генерация в ComfyUI, монтаж в Remotion.", ua: "Фрагмент ролика 9:16: генерація в ComfyUI, монтаж у Remotion.", en: "A 9:16 ad snippet: generated in ComfyUI, edited in Remotion." }
    },
    {
      type: "link", href: "https://bonus.elfashop.ua/holat6", row: 1,
      kind: { ru: "Квиз", ua: "Квіз", en: "Quiz" },
      title: { ru: "Подбор ухода за лицом", ua: "Підбір догляду за обличчям", en: "Skincare match quiz" },
      caption: { ru: "Интернет-магазин косметики: 20 вопросов → 20 персональных результатов.", ua: "Інтернет-магазин косметики: 20 запитань → 20 персональних результатів.", en: "Online cosmetics store: 20 questions → 20 personal results." }
    },
    {
      type: "link", href: "https://wep.wf/86grxg", row: 0,
      kind: { ru: "Квиз-лендинг", ua: "Квіз-лендинг", en: "Quiz landing" },
      title: { ru: "Подбор автомобиля", ua: "Підбір автомобіля", en: "Car match quiz" },
      caption: { ru: "Дилер премиальных авто: 10 шагов → модель под образ жизни → тест-драйв.", ua: "Дилер преміальних авто: 10 кроків → модель під спосіб життя → тест-драйв.", en: "Premium car dealer: 10 steps → a model for your lifestyle → test drive." }
    },
    {
      type: "link", href: "https://wep.wf/ab40xr", row: 0,
      kind: { ru: "Интерактивный гайд", ua: "Інтерактивний гайд", en: "Interactive guide" },
      title: { ru: "Индекс безопасности семьи", ua: "Індекс безпеки родини", en: "Family safety index" },
      caption: { ru: "Тот же дилер: гайд-калькулятор с баллами — выдаётся в обмен на контакты.", ua: "Той самий дилер: гайд-калькулятор із балами — видається в обмін на контакти.", en: "Same dealer: a scoring guide-calculator given in exchange for contacts." }
    },
    {
      type: "link", href: "https://wep.wf/0xpqer", row: 0,
      kind: { ru: "Бот-квиз", ua: "Бот-квіз", en: "Bot quiz" },
      title: { ru: "Квиз в Telegram-боте", ua: "Квіз у Telegram-боті", en: "Quiz inside a Telegram bot" },
      caption: { ru: "Тот же дилер: вход в воронку — квиз проходит прямо в мессенджере с дожимами.", ua: "Той самий дилер: вхід у воронку — квіз проходить просто в месенджері з дотисненнями.", en: "Same dealer: funnel entry — the quiz runs inside the messenger with follow-ups." }
    },
    {
      type: "link", href: "https://support.leeloo.ai/", caseId: "W1",
      kind: { ru: "Сайт", ua: "Сайт", en: "Website" },
      title: { ru: "support.leeloo.ai", ua: "support.leeloo.ai", en: "support.leeloo.ai" },
      caption: { ru: "Сайт поддержки на 3 языках с каталогом кейсов и админкой (v1).", ua: "Сайт підтримки 3 мовами з каталогом кейсів і адмінкою (v1).", en: "A 3-language support site with a case catalogue and admin panel (v1)." }
    }
  ]
};
