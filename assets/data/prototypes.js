/* H. Prototypes */
window.PORTFOLIO.prototypes = [
    {
      id: "H1",
      title: { ru: "Vision-бот контроля веса блюд в сети кухонь", ua: "Vision-бот контролю ваги страв у мережі кухонь", en: "Vision bot for dish-weight control across a kitchen network" },
      client: { ru: "Суши-ресторан", ua: "Суші-ресторан", en: "Sushi restaurant" },
      /* UPD 2026-11-05: v4 — network of 4 kitchens, under/over tolerances, kitchen lock by Telegram ID, reports */
      idea: {
        ru: "Сеть из 4 кухонь доставки работает по одной техкарте. Повар фотографирует порцию на весах и подписывает название или код. Бот читает вес с дисплея, сверяет с техкартой (недовес строже — −2,9%, перевес мягче — +5%) и проверяет, что на фото действительно это блюдо. Точку определяет Telegram ID повара: закреплённый повар не запишет проверку в чужую точку. Журнал, страницы точек и сводка по сети — в Google Sheets.",
        ua: "Мережа з 4 кухонь доставки працює за однією техкартою. Кухар фотографує порцію на вагах і підписує назву або код. Бот читає вагу з дисплея, звіряє з техкартою (недовага суворіше — −2,9%, перевага м'якше — +5%) і перевіряє, що на фото справді ця страва. Точку визначає Telegram ID кухаря: закріплений кухар не запише перевірку в чужу точку. Журнал, сторінки точок і зведення по мережі — у Google Sheets.",
        en: "A network of 4 delivery kitchens cooks by one set of recipe cards. The cook photographs the portion on the scale and captions it with the name or code. The bot reads the weight off the display, checks it against the card (underweight is strict at −2.9%, overweight softer at +5%) and verifies the photo really shows that dish. The kitchen comes from the cook's Telegram ID, so a cook locked to one kitchen can't log into another. The log, per-kitchen pages and the network summary live in Google Sheets."
      },
      result: {
        ru: "Клиент утвердил допуск 2,9%. Версия 4: отчёты по ролям в Telegram, ежедневная сводка владельцу и менеджерам точек, страницы точек на формулах, 2 недели демо-истории. На тестовом стенде ложные «брак» у честного повара сведены к нулю, похожие подмены ловятся 6 из 6. Публичная демо-версия с вымышленной сетью и 78 офлайн-тестами — на GitHub.",
        ua: "Клієнт затвердив допуск 2,9%. Версія 4: звіти за ролями в Telegram, щоденне зведення власнику й менеджерам точок, сторінки точок на формулах, 2 тижні демо-історії. На тестовому стенді хибні «брак» у сумлінного кухаря зведено до нуля, схожі підміни ловляться 6 з 6. Публічна демоверсія з вигаданою мережею та 78 офлайн-тестами — на GitHub.",
        en: "The client approved a 2.9% tolerance. Version 4: role-based reports in Telegram, a daily summary for the owner and kitchen managers, formula-driven kitchen pages, two weeks of demo history. On the test stand, false rejects for an honest cook dropped to zero and look-alike substitutions are caught 6 of 6. A public demo with a fictional network and 78 offline tests is on GitHub."
      },
      stack: ["n8n", "OpenAI Vision", "Telegram", "Google Sheets"]
    },
    {
      id: "H2",
      title: { ru: "AI-консультант по макияжу", ua: "AI-консультант із макіяжу", en: "AI makeup advisor" },
      client: { ru: "Магазин косметики", ua: "Магазин косметики", en: "Cosmetics store" },
      idea: {
        ru: "Чат-виджет на сайте: AI-агент с памятью подбирает косметику только из реального ассортимента — 10 инструментов чтения каталога и защита от выдуманных товаров.",
        ua: "Чат-віджет на сайті: AI-агент із пам'яттю підбирає косметику лише з реального асортименту — 10 інструментів читання каталогу й захист від вигаданих товарів.",
        en: "A website chat widget: an AI agent with memory recommends products only from the real catalogue — 10 catalogue-reading tools and protection against invented products."
      },
      stack: ["n8n AI Agent", "OpenAI", "Google Sheets", "HTML/JS"]
    },
    {
      id: "H3",
      title: { ru: "AI-консультант с vision и карточками товара", ua: "AI-консультант із vision і картками товару", en: "AI advisor with vision and product cards" },
      client: { ru: "Интернет-магазин косметики", ua: "Інтернет-магазин косметики", en: "Online cosmetics store" },
      idea: {
        ru: "Чат-виджет в стиле бренда: AI-агент понимает фото, помнит диалог и присылает карточки товара с кнопкой «Купить».",
        ua: "Чат-віджет у стилі бренду: AI-агент розуміє фото, пам'ятає діалог і надсилає картки товару з кнопкою «Купити».",
        en: "An on-brand chat widget: the AI agent understands photos, remembers the conversation and sends product cards with a Buy button."
      },
      result: {
        ru: "Подготовлено коммерческое предложение с анкетой для ТЗ.",
        ua: "Підготовлено комерційну пропозицію з анкетою для ТЗ.",
        en: "A commercial proposal with a spec questionnaire was prepared."
      },
      stack: ["Vanilla JS", "n8n", "OpenAI GPT-4o Vision"]
    }
];
