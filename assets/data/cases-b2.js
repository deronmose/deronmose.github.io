/* B. Integrations & automation (B4-B6) */
window.PORTFOLIO.cases.push(
    {
      id: "B4", cat: "B", status: "done",
      title: { ru: "Запись через Google Calendar + Apps Script", ua: "Запис через Google Calendar + Apps Script", en: "Booking via Google Calendar + Apps Script" },
      client: { ru: "Юридический онлайн-курс; затем — переиспользуемый скил", ua: "Юридичний онлайн-курс; згодом — скіл для повторного використання", en: "Online law course; later a reusable skill" },
      task: {
        ru: "Запись на консультацию прямо со страницы — без платных посредников вроде n8n, Make или Calendly.",
        ua: "Запис на консультацію просто зі сторінки — без платних посередників на кшталт n8n, Make чи Calendly.",
        en: "Book a consultation straight from the page — without paid middlemen such as n8n, Make or Calendly."
      },
      solution: {
        ru: ["HTML-календарь на странице со слотами по 30 минут.", "Apps Script создаёт событие с Google Meet или Zoom.", "Поля брони и теги уходят в CRM, клиенту приходит напоминание со ссылкой на звонок."],
        ua: ["HTML-календар на сторінці зі слотами по 30 хвилин.", "Apps Script створює подію з Google Meet або Zoom.", "Поля бронювання й теги йдуть у CRM, клієнт отримує нагадування з посиланням на дзвінок."],
        en: ["An HTML calendar on the page with 30-minute slots.", "Apps Script creates the event with a Google Meet or Zoom link.", "Booking fields and tags go to the CRM; the client gets a reminder with the call link."]
      },
      result: {
        ru: "Схема работает у клиента и стала скилом: новые проекты записи собираются по готовому шаблону.",
        ua: "Схема працює у клієнта й стала скілом: нові проєкти запису збираються за готовим шаблоном.",
        en: "Live for the client and turned into a skill: new booking projects are assembled from a ready template."
      },
      metric: { v: "0", l: { ru: "платных сервисов-посредников", ua: "платних сервісів-посередників", en: "paid middleman services" } },
      stack: ["HTML/JS", "Google Apps Script", "Google Calendar", "PHP", "Leeloo API"]
    },
    {
      id: "B5", cat: "B", status: "done",
      title: { ru: "ROI-калькулятор недвижимости в чат-боте", ua: "ROI-калькулятор нерухомості в чат-боті", en: "Real-estate ROI calculator inside a chatbot" },
      client: { ru: "Агентство зарубежной недвижимости (Мальдивы, Бали)", ua: "Агентство закордонної нерухомості (Мальдіви, Балі)", en: "Overseas real-estate agency (Maldives, Bali)" },
      task: {
        ru: "Клиент в чате должен сразу видеть доходность объекта — без менеджера и Excel.",
        ua: "Клієнт у чаті має одразу бачити дохідність об'єкта — без менеджера й Excel.",
        en: "A prospect in the chat should see a property's return right away — without a manager or Excel."
      },
      solution: {
        ru: ["Бот собирает регион, тип объекта и цену → вебхук на PHP-скрипт.", "Расчёт ROI, денежного потока, окупаемости и прогноза на 5 лет → ответ в чат и запись показателей в карточку через API.", "Справочник регионов настраивается без кода; формулы выведены из Excel-моделей клиента."],
        ua: ["Бот збирає регіон, тип об'єкта й ціну → вебхук на PHP-скрипт.", "Розрахунок ROI, грошового потоку, окупності та прогнозу на 5 років → відповідь у чат і запис показників у картку через API.", "Довідник регіонів налаштовується без коду; формули виведено з Excel-моделей клієнта."],
        en: ["The bot collects region, property type and price → webhook to a PHP script.", "Computes ROI, cash flow, payback and a 5-year forecast → replies in chat and writes the figures to the contact card via API.", "The region list is configurable without code; formulas derived from the client's Excel models."]
      },
      result: {
        ru: "Эталонные тесты формул: 8 из 8 сходятся с Excel. Проверены граничные сценарии — русские названия («вилла», «Бали»), нулевая цена, неизвестный регион, невалидный JSON — корректные ответы 200/400.",
        ua: "Еталонні тести формул: 8 з 8 збігаються з Excel. Перевірено граничні сценарії — назви російською («вилла», «Бали»), нульова ціна, невідомий регіон, невалідний JSON — коректні відповіді 200/400.",
        en: "Reference formula tests: 8 of 8 match Excel. Edge cases checked — Russian names, zero price, unknown region, invalid JSON — all return correct 200/400 responses."
      },
      metric: { v: "8/8", l: { ru: "тестов формул сходятся с Excel", ua: "тестів формул збігаються з Excel", en: "formula tests match Excel" } },
      stack: ["PHP 8.3", "cURL", "Leeloo API v2", "Custom fields", "Python tests"]
    },
    {
      id: "B6", cat: "B", status: "done",
      title: { ru: "Восстановление прод-бота после апгрейда n8n", ua: "Відновлення прод-бота після оновлення n8n", en: "Restoring a production bot after an n8n upgrade" },
      client: { ru: "Leeloo.ai, маркетинговый бот", ua: "Leeloo.ai, маркетинговий бот", en: "Leeloo.ai, marketing bot" },
      task: {
        ru: "После обновления n8n 1.121 → 2.28 пользователи бесконечно видели «Создание стратегии в процессе…».",
        ua: "Після оновлення n8n 1.121 → 2.28 користувачі нескінченно бачили «Створення стратегії в процесі…».",
        en: "After upgrading n8n 1.121 → 2.28, users were stuck forever on ‘Creating your strategy…’."
      },
      solution: {
        ru: ["Разбор живых запусков: найдены 2 регрессии выражений из-за более строгого парсера и неподключённый выход ошибок.", "Через API прямо в проде поставлены таймауты на модели и обработка ошибок — ничего не удалено."],
        ua: ["Розбір живих запусків: знайдено 2 регресії виразів через суворіший парсер і непідключений вихід помилок.", "Через API просто в продакшні поставлено таймаути на моделі та обробку помилок — нічого не видалено."],
        en: ["Analysed live executions: found 2 expression regressions caused by a stricter parser and an unconnected error output.", "Added model timeouts and error handling in production via the API — nothing deleted."]
      },
      result: {
        ru: "Зависший запрос теперь завершается ошибкой и сбрасывает состояние пользователя вместо вечной загрузки.",
        ua: "Завислий запит тепер завершується помилкою й скидає стан користувача замість вічного завантаження.",
        en: "A hung request now ends with an error and resets the user's state instead of loading forever."
      },
      metric: { v: "2", l: { ru: "регрессии найдены и закрыты", ua: "регресії знайдено й закрито", en: "regressions found and fixed" } },
      stack: ["n8n 2.x API", "LangChain nodes", "OpenRouter", "MongoDB", "Telegram"]
    },
);
