/* H. Prototypes */
window.PORTFOLIO.prototypes = [
    {
      id: "H1",
      title: { ru: "Vision-бот контроля веса блюд", ua: "Vision-бот контролю ваги страв", en: "Vision bot for dish-weight control" },
      client: { ru: "Суши-ресторан", ua: "Суші-ресторан", en: "Sushi restaurant" },
      /* UPD 2026-11-05: v2 — Google Sheets, caption↔photo check, public repo */
      idea: {
        ru: "Повар фотографирует блюдо на весах и подписывает название или код. Бот читает вес с дисплея, сверяет его с техкартой (норма ± допуск) и проверяет, что на фото действительно это блюдо: лосось вместо угря — сразу «не совпадает». Техкарты и журнал — в Google Sheets, есть статистика за день.",
        ua: "Кухар фотографує страву на вагах і підписує назву або код. Бот читає вагу з дисплея, звіряє її з техкартою (норма ± допуск) і перевіряє, що на фото справді ця страва: лосось замість вугра — одразу «не збігається». Техкарти й журнал — у Google Sheets, є статистика за день.",
        en: "The cook photographs the dish on the scale and captions it with the name or code. The bot reads the weight off the display, checks it against the recipe card (norm ± tolerance) and verifies the photo really shows that dish — salmon instead of eel is flagged at once. Recipe cards and the log live in Google Sheets, with daily stats."
      },
      result: {
        ru: "Вес читается верно на реальных фото; клиент утвердил допуск 2,9%. Версия 2: один запрос к Vision на фото, 5 вердиктов, подбор блюда по весу без подписи, обработка ошибок. Публичная демо-версия с вымышленным меню и 18 офлайн-тестами логики — на GitHub.",
        ua: "Вага зчитується правильно на реальних фото; клієнт затвердив допуск 2,9%. Версія 2: один запит до Vision на фото, 5 вердиктів, підбір страви за вагою без підпису, обробка помилок. Публічна демоверсія з вигаданим меню та 18 офлайн-тестами логіки — на GitHub.",
        en: "Weights read correctly on real photos; the client approved a 2.9% tolerance. Version 2: one Vision call per photo, 5 verdicts, weight-based dish matching without a caption, error handling. A public demo with a fictional menu and 18 offline logic tests is on GitHub."
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
