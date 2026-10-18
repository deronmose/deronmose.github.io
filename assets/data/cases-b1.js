/* B. Integrations & automation (B1-B3) */
window.PORTFOLIO.cases.push(
    {
      id: "B1", cat: "B", status: "done",
      title: { ru: "Синхронизация CRM ⇄ Leeloo без дублей", ua: "Синхронізація CRM ⇄ Leeloo без дублів", en: "Two-way CRM ⇄ Leeloo sync without duplicates" },
      client: { ru: "Клиника медицинского туризма (стоматология, пластика), Стамбул", ua: "Клініка медичного туризму (стоматологія, пластика), Стамбул", en: "Medical tourism clinic (dental, plastic surgery), Istanbul" },
      task: {
        ru: "250–300 лидов в месяц из Meta попадают в CRM, а переписка идёт в Leeloo. Дубли и расхождение статусов между системами.",
        ua: "250–300 лідів на місяць із Meta потрапляють у CRM, а листування йде в Leeloo. Дублі та розбіжність статусів між системами.",
        en: "250–300 leads a month from Meta land in the CRM while conversations happen in Leeloo. Duplicates and mismatched statuses between the two."
      },
      solution: {
        ru: ["4 сценария Make: лиды и статусы в обе стороны без зацикливания.", "Антидубль по ID или последним 9 цифрам телефона + Data Store против гонки внутри пачки вебхука.", "Очередь ошибок и последовательная обработка; правила автоматизации в CRM созданы через API; 12 статусов в плане продаж."],
        ua: ["4 сценарії Make: ліди та статуси в обидва боки без зациклення.", "Антидубль за ID або останніми 9 цифрами телефону + Data Store проти гонки всередині пачки вебхука.", "Черга помилок і послідовна обробка; правила автоматизації в CRM створено через API; 12 статусів у плані продажів."],
        en: ["4 Make scenarios: leads and statuses in both directions without loops.", "De-duplication by ID or the last 9 phone digits, plus a Data Store against race conditions inside a webhook batch.", "Error queue and sequential processing; CRM automation rules created via API; 12 pipeline statuses."]
      },
      result: {
        ru: "Тесты в обе стороны пройдены, живая подписка — без дубля. Ограничение платформы (WhatsApp-канал через Twilio по номеру не создаётся) найдено и задокументировано.",
        ua: "Тести в обидва боки пройдено, жива підписка — без дубля. Обмеження платформи (WhatsApp-канал через Twilio за номером не створюється) знайдено й задокументовано.",
        en: "Both directions passed tests; a live sign-up came through with no duplicate. A platform limitation (a Twilio WhatsApp channel can't be created by phone number) was found and documented."
      },
      metric: { v: "250–300", l: { ru: "лидов в месяц через синхронизацию", ua: "лідів на місяць через синхронізацію", en: "leads a month through the sync" } },
      stack: ["Make", "Zoho CRM API v8", "Leeloo API v2", "Twilio"]
    },
    {
      id: "B2", cat: "B", status: "done",
      title: { ru: "Перенос аудитории 19 тыс. контактов и CRM курсов", ua: "Перенесення аудиторії 19 тис. контактів і CRM курсів", en: "Migrating a 19k-contact audience and a course CRM" },
      client: { ru: "Онлайн-академия IT-профессий, переезд с SendPulse", ua: "Онлайн-академія IT-професій, переїзд із SendPulse", en: "Online IT academy moving off SendPulse" },
      task: {
        ru: "Перенести базу подписчиков и 10 автоворонок, а заказы класть в CRM курсов в правильную воронку.",
        ua: "Перенести базу підписників і 10 автоворонок, а замовлення класти в CRM курсів у правильну воронку.",
        en: "Move the subscriber base and 10 automated funnels, and route orders into the correct pipeline of the course CRM."
      },
      solution: {
        ru: ["Анализ выгрузки 19 395 контактов: доказано, что колонка id — внутренний ID SendPulse, а не ID мессенджера, и что база из Instagram, а не Telegram (23,7% ников в Telegram невозможны). Импорт «как есть» дал бы карточки с мёртвым каналом связи.", "Файлы импорта по годам (19 354 строки), пилот на 20 контактах, отброшенные строки — отдельно; скрипт добора числовых ID через API с обработкой 429.", "Разобраны 10 цепочек — 409 блоков, 180 сообщений, 106 условий, 158 пауз — и перенесены в Leeloo.", "CRM курсов: собственный MCP-сервер; найдено, что воронку задаёт только ID этапа, а неверный ID молча кладёт заказ в чужую воронку. Поп-ап-формы для сайта, отчёты клиенту."],
        ua: ["Аналіз вивантаження 19 395 контактів: доведено, що колонка id — внутрішній ID SendPulse, а не ID месенджера, і що база з Instagram, а не Telegram (23,7% ніків у Telegram неможливі). Імпорт «як є» дав би картки з мертвим каналом зв'язку.", "Файли імпорту за роками (19 354 рядки), пілот на 20 контактах, відкинуті рядки — окремо; скрипт добору числових ID через API з обробкою 429.", "Розібрано 10 ланцюжків — 409 блоків, 180 повідомлень, 106 умов, 158 пауз — і перенесено в Leeloo.", "CRM курсів: власний MCP-сервер; знайдено, що воронку задає лише ID етапу, а неправильний ID мовчки кладе замовлення в чужу воронку. Поп-ап-форми для сайту, звіти клієнту."],
        en: ["Analysed an export of 19,395 contacts and proved the id column was SendPulse's internal ID, not a messenger ID, and that the base came from Instagram, not Telegram (23.7% of the handles are impossible in Telegram). Importing as-is would have created cards with a dead channel.", "Import files split by year (19,354 rows), a 20-contact pilot, rejected rows kept apart; a script that backfills numeric IDs via API with 429 handling.", "Took apart 10 chains — 409 blocks, 180 messages, 106 conditions, 158 delays — and rebuilt them in Leeloo.", "Course CRM: a custom MCP server; found that only the stage ID selects the pipeline, and a wrong ID silently drops the order into someone else's pipeline. Pop-up forms for the site, client reports."]
      },
      result: {
        ru: "Задача закрыта. Предотвращён импорт с нерабочими каналами связи; посчитано, кому можно писать сразу (окна 24 часа / 7 дней).",
        ua: "Задачу закрито. Запобігли імпорту з неробочими каналами зв'язку; пораховано, кому можна писати одразу (вікна 24 години / 7 днів).",
        en: "Done. An import with broken contact channels was prevented, and it was calculated who can be messaged right away (24-hour / 7-day windows)."
      },
      metric: { v: "19 395", l: { ru: "контактов проанализировано", ua: "контактів проаналізовано", en: "contacts analysed" } },
      stack: ["Python", "SendPulse API", "Kwiga REST API", "Node MCP", "xlsx", "HTML"]
    },
    {
      id: "B3", cat: "B", status: "done",
      title: { ru: "Запись на уроки: Calendly + Make + Stripe", ua: "Запис на уроки: Calendly + Make + Stripe", en: "Lesson booking: Calendly + Make + Stripe" },
      client: { ru: "Онлайн-школа английского: 2 преподавателя, 3 типа уроков, один платный", ua: "Онлайн-школа англійської: 2 викладачі, 3 типи уроків, один платний", en: "Online English school: 2 teachers, 3 lesson types, one paid" },
      task: {
        ru: "Ученики должны сами записываться на нужный формат урока, включая платный, а CRM — знать о брони и отмене без ручной работы.",
        ua: "Учні мають самі записуватися на потрібний формат уроку, зокрема платний, а CRM — знати про бронювання й скасування без ручної роботи.",
        en: "Students book the lesson format they need, including a paid one, and the CRM learns about bookings and cancellations with no manual work."
      },
      solution: {
        ru: ["Страница выбора формата → внешний запрос в Make → персональная ссылка Calendly с ID ученика.", "Сценарии подтверждения ставят теги «бронь подтверждена / отменена» и записывают поля брони в карточку."],
        ua: ["Сторінка вибору формату → зовнішній запит у Make → персональне посилання Calendly з ID учня.", "Сценарії підтвердження ставлять теги «бронювання підтверджено / скасовано» і записують поля бронювання в картку."],
        en: ["Format-choice page → external request to Make → a personal Calendly link carrying the student ID.", "Confirmation scenarios set ‘booking confirmed / cancelled’ tags and write booking fields to the contact card."]
      },
      result: {
        ru: "Бронь, отмена и консультация 1-on-1 протестированы и работают в проде. Решение оформлено как переиспользуемый скил и шаблон ТЗ.",
        ua: "Бронювання, скасування й консультацію 1-on-1 протестовано, вони працюють у продакшні. Рішення оформлено як скіл для повторного використання та шаблон ТЗ.",
        en: "Booking, cancellation and 1-on-1 consultation are tested and live. Packaged as a reusable skill and a spec template."
      },
      metric: { v: "3", l: { ru: "типа уроков, один платный", ua: "типи уроків, один платний", en: "lesson types, one paid" } },
      stack: ["Leeloo (landing, external request, API)", "Make", "Calendly", "Stripe", "Google Meet"]
    },
);
