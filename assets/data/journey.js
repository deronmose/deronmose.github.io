/* G. Customer journey */
window.PORTFOLIO.journey = {
    title: { ru: "Путь клиента и воронки продаж", ua: "Шлях клієнта та воронки продажів", en: "Customer journey & sales funnels" },
    lead: {
      ru: "Воронки на платформе Leeloo.ai — один блок опыта, а не отдельные кейсы. Ниже — ниши, цели и то, что внутри.",
      ua: "Воронки на платформі Leeloo.ai — один блок досвіду, а не окремі кейси. Нижче — ніші, цілі й те, що всередині.",
      en: "Funnels on the Leeloo.ai platform are one block of experience rather than separate cases. Below are the niches, goals and what's inside."
    },
    can: {
      ru: "Проектирую путь от первого касания (реклама, комментарий, лендинг, квиз) до целевого действия (покупка, запись, тест-драйв, передача менеджеру): сегментация тегами и полями, ветвления, дожимы по таймерам, A/B-варианты, защита от повторного входа, передача данных с лендинга в CRM.",
      ua: "Проєктую шлях від першого дотику (реклама, коментар, лендинг, квіз) до цільової дії (покупка, запис, тест-драйв, передача менеджеру): сегментація тегами й полями, розгалуження, дотиснення за таймерами, A/B-варіанти, захист від повторного входу, передача даних із лендингу в CRM.",
      en: "I design the path from first touch (ad, comment, landing page, quiz) to the target action (purchase, booking, test drive, handoff to a manager): segmentation with tags and fields, branching, timed follow-ups, A/B variants, re-entry protection, landing-to-CRM data transfer."
    },
    rows: [
      { niche: { ru: "Дилер премиальных авто", ua: "Дилер преміальних авто", en: "Premium car dealer" },
        goal: { ru: "квалификация → подбор модели → тест-драйв", ua: "кваліфікація → підбір моделі → тест-драйв", en: "qualification → model match → test drive" },
        inside: { ru: "бот-квиз из 10 шагов с пошаговыми дожимами, A/B «квиз в боте vs квиз-лендинг», интерактивный гайд по безопасности за контакты", ua: "бот-квіз із 10 кроків із покроковими дотисненнями, A/B «квіз у боті vs квіз-лендинг», інтерактивний гайд із безпеки за контакти", en: "a 10-step bot quiz with per-step follow-ups, A/B ‘in-bot quiz vs quiz landing’, an interactive safety guide in exchange for contacts" } },
      { niche: { ru: "Интернет-магазин косметики", ua: "Інтернет-магазин косметики", en: "Online cosmetics store" },
        goal: { ru: "персональный подбор ухода → покупка", ua: "персональний підбір догляду → покупка", en: "personal skincare match → purchase" },
        inside: { ru: "HTML-квиз (20 вопросов) → 20 персональных результатов → страница подборки", ua: "HTML-квіз (20 запитань) → 20 персональних результатів → сторінка добірки", en: "HTML quiz (20 questions) → 20 personal results → a curated product page" } },
      { niche: { ru: "Юридический онлайн-курс", ua: "Юридичний онлайн-курс", en: "Online law course" },
        goal: { ru: "продажа курса → доступ → обучение", ua: "продаж курсу → доступ → навчання", en: "course sale → access → learning" },
        inside: { ru: "3 оффера и ручные оплаты, автодоступ в 8 закрытых каналов, домашние задания, консультации, реактивация, стоп-метки", ua: "3 офери й ручні оплати, автодоступ до 8 закритих каналів, домашні завдання, консультації, реактивація, стоп-мітки", en: "3 offers and manual payments, automatic access to 8 private channels, homework, consultations, re-activation, stop tags" } },
      { niche: { ru: "Онлайн-академия IT", ua: "Онлайн-академія IT", en: "Online IT academy" },
        goal: { ru: "лид-магнит → мини-курс → продажа", ua: "лід-магніт → міні-курс → продаж", en: "lead magnet → mini-course → sale" },
        inside: { ru: "кодовое слово в Direct или комментарии → проверка подписки → мини-курс → дожим (10 цепочек, перенос с SendPulse)", ua: "кодове слово в Direct або коментарі → перевірка підписки → міні-курс → дотиснення (10 ланцюжків, перенесення з SendPulse)", en: "keyword in DMs or comments → subscription check → mini-course → follow-up (10 chains migrated from SendPulse)" } },
      { niche: { ru: "Онлайн-школа английского", ua: "Онлайн-школа англійської", en: "Online English school" },
        goal: { ru: "запись на урок", ua: "запис на урок", en: "lesson booking" },
        inside: { ru: "выбор формата → бронь в календаре → теги подтверждения", ua: "вибір формату → бронювання в календарі → теги підтвердження", en: "format choice → calendar booking → confirmation tags" } },
      { niche: { ru: "Франшиза окон и дверей", ua: "Франшиза вікон і дверей", en: "Window and door franchise" },
        goal: { ru: "быстрый первый контакт → звонок", ua: "швидкий перший контакт → дзвінок", en: "fast first contact → call" },
        inside: { ru: "WhatsApp-воронка с AI-ассистентом", ua: "WhatsApp-воронка з AI-асистентом", en: "WhatsApp funnel with an AI assistant" } },
      { niche: { ru: "Клиника медтуризма", ua: "Клініка медтуризму", en: "Medical tourism clinic" },
        goal: { ru: "лид из CRM → диалог в мессенджере", ua: "лід із CRM → діалог у месенджері", en: "CRM lead → messenger conversation" },
        inside: { ru: "WhatsApp-шаблон из CRM, синхронизация статусов", ua: "WhatsApp-шаблон із CRM, синхронізація статусів", en: "WhatsApp template triggered from the CRM, status sync" } },
      { niche: { ru: "Агентство недвижимости (Дубай)", ua: "Агентство нерухомості (Дубай)", en: "Real-estate agency (Dubai)" },
        goal: { ru: "лидогенерация → расчёт доходности в боте", ua: "лідогенерація → розрахунок дохідності в боті", en: "lead generation → yield calculation in the bot" },
        inside: { ru: "лендинг-«калькулятор» → Telegram-бот с расчётом", ua: "лендинг-«калькулятор» → Telegram-бот із розрахунком", en: "calculator landing page → Telegram bot with the calculation" } },
      { niche: { ru: "Окна (Украина), ипотека (Испания), психология", ua: "Вікна (Україна), іпотека (Іспанія), психологія", en: "Windows (Ukraine), mortgages (Spain), psychology" },
        goal: { ru: "лидогенерация", ua: "лідогенерація", en: "lead generation" },
        inside: { ru: "квизы с передачей ответов в поля CRM", ua: "квізи з передачею відповідей у поля CRM", en: "quizzes passing answers into CRM fields" } },
      { niche: { ru: "Эксперт-психолог", ua: "Експерт-психолог", en: "Psychologist (expert)" },
        goal: { ru: "гайд → квиз → запись на консультацию", ua: "гайд → квіз → запис на консультацію", en: "guide → quiz → consultation booking" },
        inside: { ru: "лендинг со встроенной формой подписки", ua: "лендинг із вбудованою формою підписки", en: "landing page with an embedded sign-up form" } }
    ],
    stack: ["Leeloo.ai funnels", "Landing pages (LGT)", "Tags & custom fields", "Sales pipelines", "Offers", "Smart Answers", "Filters & delays", "Telegram", "Instagram", "WhatsApp", "HTML/CSS/JS quizzes", "MCP + Claude Code"]
};
