/* H. Prototypes */
window.PORTFOLIO.prototypes = [
    {
      id: "H1",
      title: { ru: "Vision-бот контроля веса блюд", ua: "Vision-бот контролю ваги страв", en: "Vision bot for dish-weight control" },
      client: { ru: "Суши-ресторан", ua: "Суші-ресторан", en: "Sushi restaurant" },
      idea: {
        ru: "Повар фотографирует блюдо на весах, бот читает вес с дисплея и сверяет с техкартой (296 позиций меню парсятся с сайта ежедневно); вердикт, журнал, статистика.",
        ua: "Кухар фотографує страву на вагах, бот читає вагу з дисплея й звіряє з техкартою (296 позицій меню парсяться із сайту щодня); вердикт, журнал, статистика.",
        en: "The cook photographs a dish on the scale; the bot reads the weight off the display and checks it against the recipe card (296 menu items parsed from the website daily); verdict, log, stats."
      },
      result: {
        ru: "Вес читается верно на реальных фото; клиент утвердил допуск 2,9%; подготовлено ТЗ на этапы — база в Google Sheets, распознавание блюда по фото.",
        ua: "Вага зчитується правильно на реальних фото; клієнт затвердив допуск 2,9%; підготовлено ТЗ на етапи — база в Google Sheets, розпізнавання страви за фото.",
        en: "Weights read correctly on real photos; the client approved a 2.9% tolerance; a phased spec prepared — Google Sheets base, dish recognition from photos."
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
