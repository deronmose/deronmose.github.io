/* A. AI assistants & LLM systems (A1-A2) */
window.PORTFOLIO.cases.push(
    {
      id: "A1", cat: "A", status: "done",
      title: { ru: "AI-ассистент продаж для учебной академии", ua: "AI-асистент продажів для навчальної академії", en: "AI sales assistant for a training academy" },
      client: { ru: "Академия обучения работе с косметологическими аппаратами, Германия", ua: "Академія навчання роботі з косметологічними апаратами, Німеччина", en: "Academy training specialists on cosmetology devices, Germany" },
      task: {
        ru: "Менеджеры вручную отвечали на первичные вопросы по 5 учебным модулям. Тема юридически чувствительная — ошибка в ответе недопустима.",
        ua: "Менеджери вручну відповідали на первинні запитання щодо 5 навчальних модулів. Тема юридично чутлива — помилка у відповіді неприпустима.",
        en: "Managers answered first-contact questions about 5 training modules by hand. The topic is legally sensitive, so a wrong answer is not an option."
      },
      solution: {
        ru: ["Ассистент на 3 языках (RU/UA/DE): промпт ~96 тыс. знаков, база знаний из 40+ файлов.", "6 функций: уведомление команде, запись поля, тег, отметка «непрочитано», план продаж, перенос сделки.", "Жёсткие границы: цены и даты только после подтверждения, никаких медицинских оценок, передача менеджеру."],
        ua: ["Асистент 3 мовами (RU/UA/DE): промпт ~96 тис. знаків, база знань із 40+ файлів.", "6 функцій: сповіщення команді, запис поля, тег, позначка «непрочитане», план продажів, перенесення угоди.", "Жорсткі межі: ціни й дати лише після підтвердження, жодних медичних оцінок, передача менеджеру."],
        en: ["Assistant in 3 languages (RU/UA/DE): ~96k-character prompt and a knowledge base of 40+ files.", "6 functions: team notification, field write, tag, mark as unread, sales pipeline, deal move.", "Hard boundaries: no prices or dates without confirmation, no medical assessments, handoff to a manager."]
      },
      result: {
        ru: "155 тестовых ответов, 116 сверены с базой построчно: 0 ошибок в фактах и арифметике. 3 нарушения границ найдены и закрыты, FAQ покрыт 22 из 22. Проект передан клиенту.",
        ua: "155 тестових відповідей, 116 звірено з базою построково: 0 помилок у фактах і арифметиці. 3 порушення меж знайдено й закрито, FAQ покрито 22 з 22. Проєкт передано клієнту.",
        en: "155 test answers, 116 checked line by line against the knowledge base: 0 factual or arithmetic errors. 3 boundary violations found and fixed; FAQ coverage 22/22. Handed over to the client."
      },
      metric: { v: "0", l: { ru: "ошибок в 116 сверенных ответах", ua: "помилок у 116 звірених відповідях", en: "errors in 116 verified answers" } },
      stack: ["Leeloo AI Assistant (OpenAI)", "Function calling", "Markdown knowledge base", "JSONL evals", "Custom MCP tester (Node)"]
    },
    {
      id: "A2", cat: "A", status: "done",
      title: { ru: "AI-ассистент первого контакта в WhatsApp", ua: "AI-асистент першого контакту у WhatsApp", en: "First-contact AI assistant on WhatsApp" },
      client: { ru: "Франшиза окон и дверей, Испания", ua: "Франшиза вікон і дверей, Іспанія", en: "Window and door franchise, Spain" },
      task: {
        ru: "Менеджер не успевает ответить за 15 минут, ночной трафик теряется. По брифу к конкурентам уже ушли 5–6 клиентов с бюджетом от €60 000.",
        ua: "Менеджер не встигає відповісти за 15 хвилин, нічний трафік втрачається. За брифом до конкурентів уже пішли 5–6 клієнтів із бюджетом від €60 000.",
        en: "Managers couldn't reply within 15 minutes and night-time leads were lost. Per the brief, 5–6 clients with budgets from €60,000 had already gone to competitors."
      },
      solution: {
        ru: ["Сначала узнаёт удобное время звонка, затем квалифицирует: тип объекта, стадия, объём работ.", "5 языков; пишет отчёт в карточку клиента, двигает сделку и уведомляет команду; цены не называет.", "Боевой прогон выявил 2 критичных дефекта — оба исправлены."],
        ua: ["Спершу дізнається зручний час дзвінка, потім кваліфікує: тип об'єкта, стадія, обсяг робіт.", "5 мов; пише звіт у картку клієнта, рухає угоду й сповіщає команду; ціни не називає.", "Бойовий прогін виявив 2 критичні дефекти — обидва виправлено."],
        en: ["First asks for a convenient call time, then qualifies the lead: property type, stage, scope of work.", "5 languages; writes a summary to the contact card, moves the deal and notifies the team; never quotes prices.", "A live run surfaced 2 critical defects — both fixed."]
      },
      result: {
        ru: "Ассистент подключён к WhatsApp-воронке клиента: первый ответ и квалификация больше не ждут менеджера.",
        ua: "Асистента підключено до WhatsApp-воронки клієнта: перша відповідь і кваліфікація більше не чекають менеджера.",
        en: "The assistant runs in the client's WhatsApp funnel: the first reply and qualification no longer wait for a manager."
      },
      metric: { v: "5", l: { ru: "языков общения", ua: "мов спілкування", en: "conversation languages" } },
      stack: ["Leeloo AI Assistant (OpenAI)", "WhatsApp", "Function calling", "MCP tester"]
    },
);
