/* Projects in progress — separate tab. UPD 2026-10-18 */
window.PORTFOLIO.inwork = {
  title: { ru: "Проекты в работе", ua: "Проєкти в роботі", en: "Work in progress" },
  lead: {
    ru: "Что строю прямо сейчас: задача, что уже сделано, что дальше и на каком стеке.",
    ua: "Що будую просто зараз: задача, що вже зроблено, що далі й на якому стеку.",
    en: "What I'm building right now: the problem, what's done, what's next and the stack."
  },
  labels: {
    done: { ru: "Что уже сделано", ua: "Що вже зроблено", en: "Done so far" },
    next: { ru: "Что дальше", ua: "Що далі", en: "Next" },
    stage: {
      active: { ru: "в работе", ua: "в роботі", en: "in progress" },
      waiting: { ru: "ждёт решения", ua: "чекає рішення", en: "awaiting decision" },
      paused: { ru: "на паузе", ua: "на паузі", en: "on hold" }
    }
  },
  items: [
    {
      id: "W1", stage: "active",
      title: { ru: "Сайт кейсов support.leeloo.ai v2 с конструктором", ua: "Сайт кейсів support.leeloo.ai v2 з конструктором", en: "support.leeloo.ai v2: case site with a page builder" },
      client: { ru: "Leeloo.ai", ua: "Leeloo.ai", en: "Leeloo.ai" },
      task: {
        ru: "v1 визуально повторял главную leeloo.ai. Нужен свой сайт кейсов в фирменном стиле, куда команда может добавить новый кейс в любой момент — с телефона или ноутбука.",
        ua: "v1 візуально повторював головну leeloo.ai. Потрібен власний сайт кейсів у фірмовому стилі, куди команда може додати новий кейс будь-коли — з телефона чи ноутбука.",
        en: "v1 looked like a copy of the leeloo.ai homepage. The goal is a case site of its own, on-brand, where the team can add a new case any time from a phone or laptop."
      },
      done: {
        ru: ["v1 на сайте с 17.10.2026: 3 языка, 28 кейсов, скрытая админка; проверки живого сайта 61/61, защита от CSRF, перебора паролей и XSS.", "v2: своя дизайн-система на токенах (палитра день/ночь, контраст AA), каталог с поиском и фильтрами по нише, задаче и инструменту.", "Страница кейса — история из трёх частей: как помогли бизнесу → что сделали → результат цифрами; 28 кейсов переписаны на 3 языках.", "Конструктор: 9 типов блоков (галерея, таймлайн, CTA и др.), проверка готовности к публикации, удобен с телефона. Проверки v2: 47/47 + 61/61."],
        ua: ["v1 на сайті з 17.10.2026: 3 мови, 28 кейсів, прихована адмінка; перевірки живого сайту 61/61, захист від CSRF, перебору паролів і XSS.", "v2: власна дизайн-система на токенах (палітра день/ніч, контраст AA), каталог із пошуком і фільтрами за нішею, задачею та інструментом.", "Сторінка кейсу — історія з трьох частин: як допомогли бізнесу → що зробили → результат цифрами; 28 кейсів переписано 3 мовами.", "Конструктор: 9 типів блоків (галерея, таймлайн, CTA тощо), перевірка готовності до публікації, зручний із телефона. Перевірки v2: 47/47 + 61/61."],
        en: ["v1 live since 17.10.2026: 3 languages, 28 cases, a hidden admin panel; live-site checks 61/61, CSRF, brute-force and XSS protection verified.", "v2: its own token-based design system (light/dark palette, AA contrast), a catalogue with search and filters by niche, task and tool.", "A case page is a three-part story: how we helped → what we did → the result in numbers; 28 cases rewritten in 3 languages.", "Page builder: 9 block types (gallery, timeline, CTA and more), a publish-readiness check, phone-friendly. v2 checks: 47/47 + 61/61."]
      },
      next: {
        ru: ["Финальная приёмка и выкладка v2 вместо v1."],
        ua: ["Фінальне приймання й викладка v2 замість v1."],
        en: ["Final sign-off and rollout of v2 in place of v1."]
      },
      stack: ["PHP 8.3", "Vanilla JS", "JSON storage", "Design tokens (CSS)", "bcrypt", "Python checks", "FTP deploy"],
      links: [{ href: "https://support.leeloo.ai/", label: { ru: "Сайт (v1)", ua: "Сайт (v1)", en: "Website (v1)" } }]
    },
    {
      id: "W2", stage: "active",
      title: { ru: "Воронка подбора авто: бот-квиз против квиз-лендинга", ua: "Воронка підбору авто: бот-квіз проти квіз-лендингу", en: "Car-match funnel: bot quiz vs quiz landing" },
      client: { ru: "Дилер премиальных авто", ua: "Дилер преміальних авто", en: "Premium car dealer" },
      task: {
        ru: "Квалифицировать лида, подобрать модель под образ жизни и довести до тест-драйва — и выяснить, что работает лучше: квиз прямо в боте или квиз на лендинге.",
        ua: "Кваліфікувати ліда, підібрати модель під спосіб життя й довести до тест-драйву — і з'ясувати, що працює краще: квіз просто в боті чи квіз на лендингу.",
        en: "Qualify the lead, match a model to their lifestyle and bring them to a test drive — and find out what works better: a quiz inside the bot or a quiz on a landing page."
      },
      done: {
        ru: ["Бот-квиз из 10 шагов с пошаговыми дожимами (основная и демо-версия с короткими задержками) — собран через MCP.", "Вариант B: квиз-лендинг, ответы уходят в одно поле карточки клиента.", "Интерактивный гайд «Индекс безопасности семьи»: итог сохраняется в CRM, кнопка «Сохранить в Telegram»."],
        ua: ["Бот-квіз із 10 кроків із покроковими дотисненнями (основна й демоверсія з короткими затримками) — зібрано через MCP.", "Варіант B: квіз-лендинг, відповіді йдуть в одне поле картки клієнта.", "Інтерактивний гайд «Індекс безпеки родини»: підсумок зберігається в CRM, кнопка «Зберегти в Telegram»."],
        en: ["A 10-step bot quiz with per-step follow-ups (main and a demo copy with short delays), built via MCP.", "Variant B: a quiz landing page; answers go into one field on the contact card.", "An interactive ‘Family safety index’ guide: the result is saved to the CRM, plus a ‘Save to Telegram’ button."]
      },
      next: {
        ru: ["Армянская версия, вычитка текстов клиентом, матрица баллов для подбора модели.", "Запуск A/B-теста двух вариантов."],
        ua: ["Вірменська версія, вичитка текстів клієнтом, матриця балів для підбору моделі.", "Запуск A/B-тесту двох варіантів."],
        en: ["Armenian version, client proofreading, a scoring matrix for model matching.", "Launch the A/B test of both variants."]
      },
      stack: ["Leeloo.ai funnels", "MCP + Claude Code", "Landing pages (LGT)", "JS bundles", "Telegram bot", "Tags & custom fields"],
      links: [
        { href: "https://wep.wf/86grxg", label: { ru: "Квиз-лендинг", ua: "Квіз-лендинг", en: "Quiz landing" } },
        { href: "https://wep.wf/ab40xr", label: { ru: "Гайд", ua: "Гайд", en: "Guide" } },
        { href: "https://wep.wf/0xpqer", label: { ru: "Бот-квиз", ua: "Бот-квіз", en: "Bot quiz" } }
      ]
    },
    {
      id: "W3", stage: "waiting",
      title: { ru: "SMM-фабрика контента: плагин Claude", ua: "SMM-фабрика контенту: плагін Claude", en: "SMM content factory: a Claude plugin" },
      client: { ru: "Leeloo.ai, маркетинг", ua: "Leeloo.ai, маркетинг", en: "Leeloo.ai, marketing" },
      task: {
        ru: "Один плагин Claude (скилы + MCP) на всю цепочку: анализ конкурентов и виральных роликов → хуки → генерация или монтаж сырой записи с моушеном → версии UA / RU / EN.",
        ua: "Один плагін Claude (скіли + MCP) на весь ланцюжок: аналіз конкурентів і віральних роликів → хуки → генерація або монтаж сирого запису з моушеном → версії UA / RU / EN.",
        en: "One Claude plugin (skills + MCP) for the whole chain: competitor and viral-video analysis → hooks → generating or editing raw footage with motion → UA / RU / EN versions."
      },
      done: {
        ru: ["Ресерч и выбор сервисов: метрики через Apify MCP, свой MCP анализа видео (yt-dlp, PySceneDetect, Whisper, Gemini), HeyGen и ElevenLabs через MCP.", "Скрипт метрик на yt-dlp без платных скреперов: TikTok, YouTube Shorts, Instagram, с обработкой лимитов 429.", "Правило локализации: переводим сырую запись, а не готовый монтаж — дешевле собрать версии заново.", "21 вопрос к бизнесу и разбор противоречий в исходных документах."],
        ua: ["Ресерч і вибір сервісів: метрики через Apify MCP, власний MCP аналізу відео (yt-dlp, PySceneDetect, Whisper, Gemini), HeyGen та ElevenLabs через MCP.", "Скрипт метрик на yt-dlp без платних скреперів: TikTok, YouTube Shorts, Instagram, з обробкою лімітів 429.", "Правило локалізації: перекладаємо сирий запис, а не готовий монтаж — дешевше зібрати версії заново.", "21 запитання до бізнесу й розбір суперечностей у вихідних документах."],
        en: ["Research and tool selection: metrics via Apify MCP, a custom video-analysis MCP (yt-dlp, PySceneDetect, Whisper, Gemini), HeyGen and ElevenLabs via MCP.", "A metrics script on yt-dlp with no paid scrapers: TikTok, YouTube Shorts, Instagram, with 429 rate-limit handling.", "Localization rule: translate the raw recording, not the finished edit — rebuilding versions is cheaper.", "21 questions for the business and a review of contradictions in the source documents."]
      },
      next: {
        ru: ["Решения бизнеса по целям, рынкам и формату видео.", "Пилот: MCP анализа видео и скил разбора виральных роликов."],
        ua: ["Рішення бізнесу щодо цілей, ринків і формату відео.", "Пілот: MCP аналізу відео та скіл розбору віральних роликів."],
        en: ["Business decisions on goals, markets and video format.", "Pilot: the video-analysis MCP and a viral-video breakdown skill."]
      },
      stack: ["Claude plugins & skills", "MCP", "Apify", "yt-dlp", "PySceneDetect", "Whisper", "Gemini", "HeyGen", "ElevenLabs", "Python"]
    },
    {
      id: "W4", stage: "active",
      title: { ru: "Моушн-промо «Первая продажа через бота»", ua: "Моушн-промо «Перший продаж через бота»", en: "Motion promo: ‘First sale through a bot’" },
      client: { ru: "Leeloo.ai", ua: "Leeloo.ai", en: "Leeloo.ai" },
      task: {
        ru: "Премиальный моушн-ролик 9:16 на ~21 секунду в стиле спек-рекламы: бот запускается в мессенджерах и приносит первую продажу. Собрать в двух инструментах и оставить лучший.",
        ua: "Преміальний моушн-ролик 9:16 на ~21 секунду в стилі спек-реклами: бот запускається в месенджерах і приносить перший продаж. Зібрати у двох інструментах і залишити кращий.",
        en: "A premium ~21-second 9:16 motion piece in a spec-ad style: a bot goes live in messengers and brings the first sale. Build it in two tools and keep the better one."
      },
      done: {
        ru: ["Референс разобран покадрово (каждые 0,2 с) с таймкодами голоса по словам.", "Голос выбран по метрикам: 6 пробников и 3 дубля, WER 0.", "Производственный план: 27 моушенов, текст, звук, сборка и проверки."],
        ua: ["Референс розібрано покадрово (кожні 0,2 с) з таймкодами голосу за словами.", "Голос обрано за метриками: 6 пробників і 3 дублі, WER 0.", "Виробничий план: 27 моушенів, текст, звук, збірка й перевірки."],
        en: ["The reference broken down frame by frame (every 0.2 s) with word-level voice timings.", "Voice chosen by metrics: 6 samples and 3 takes, WER 0.", "A production plan: 27 motion beats, copy, sound, build and checks."]
      },
      next: {
        ru: ["Сборка в Remotion и HyperFrames, слепое сравнение двух версий."],
        ua: ["Збірка в Remotion і HyperFrames, сліпе порівняння двох версій."],
        en: ["Build in Remotion and HyperFrames, then a blind comparison of both."]
      },
      stack: ["Remotion", "HyperFrames", "ElevenLabs v3", "faster-whisper", "ffmpeg", "Python"]
    },
    {
      id: "W5", stage: "paused",
      title: { ru: "Локализация демо-ролика EN / UA", ua: "Локалізація демо-ролика EN / UA", en: "Demo video localization, EN / UA" },
      client: { ru: "Leeloo.ai", ua: "Leeloo.ai", en: "Leeloo.ai" },
      task: {
        ru: "Сделать английскую и украинскую версии демо-ролика платформы (3:47): не только голос, но и новые субтитры и переведённые плашки.",
        ua: "Зробити англійську й українську версії демо-ролика платформи (3:47): не лише голос, а й нові субтитри та перекладені плашки.",
        en: "Produce English and Ukrainian versions of a 3:47 platform demo video: not just the voice, but new captions and translated on-screen labels."
      },
      done: {
        ru: ["Пословный транскрипт оригинала и раскадровка.", "Выбран клон голоса спикера для всех языков."],
        ua: ["Пословний транскрипт оригіналу й розкадровка.", "Обрано клон голосу спікера для всіх мов."],
        en: ["A word-level transcript of the original and a shot breakdown.", "A clone of the speaker's voice chosen for all languages."]
      },
      next: {
        ru: ["Получить исходник монтажа и пересобрать версии по его таймингам."],
        ua: ["Отримати вихідник монтажу й перезібрати версії за його таймінгами."],
        en: ["Get the edit's source project and rebuild the versions on its timings."]
      },
      stack: ["ElevenLabs (voice clone)", "Whisper", "ffmpeg"]
    }
  ]
};
