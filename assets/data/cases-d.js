/* D. AI agents, MCP servers & skills */
window.PORTFOLIO.cases.push(
    {
      id: "D1", cat: "D", status: "done",
      title: { ru: "Binotel MCP + скил выгрузки звонков", ua: "Binotel MCP + скіл вивантаження дзвінків", en: "Binotel MCP server + call-export skill" },
      client: { ru: "Leeloo.ai, отдел продаж", ua: "Leeloo.ai, відділ продажів", en: "Leeloo.ai, sales team" },
      task: {
        ru: "Записи звонков по номеру клиента выгружали вручную; методы API из сообщества не работают на боевом сервере, а ссылки на запись живут 15 минут.",
        ua: "Записи дзвінків за номером клієнта вивантажували вручну; методи API зі спільноти не працюють на бойовому сервері, а посилання на запис живуть 15 хвилин.",
        en: "Call recordings were pulled by hand per client number; community API methods didn't work on the production server, and recording links expire after 15 minutes."
      },
      solution: {
        ru: ["Исследование API: рабочий метод получен через поддержку провайдера.", "Диагностический скрипт → MCP-сервер на 3 инструмента → упакованный скил с evals."],
        ua: ["Дослідження API: робочий метод отримано через підтримку провайдера.", "Діагностичний скрипт → MCP-сервер на 3 інструменти → упакований скіл з evals."],
        en: ["API research: the working method was obtained through the provider's support.", "Diagnostic script → an MCP server with 3 tools → a packaged skill with evals."]
      },
      result: {
        ru: "Записи выгружаются обычным запросом в чате. Бенчмарк: 100% успешных задач со скилом против 37% без него.",
        ua: "Записи вивантажуються звичайним запитом у чаті. Бенчмарк: 100% успішних задач зі скілом проти 37% без нього.",
        en: "Recordings are pulled with a plain chat request. Benchmark: 100% task success with the skill vs 37% without."
      },
      metric: { v: "100% / 37%", l: { ru: "успешных задач со скилом / без", ua: "успішних задач зі скілом / без", en: "task success with / without the skill" } },
      stack: ["Python", "MCP SDK", "Binotel REST API", "Claude Skills + evals"]
    },
    {
      id: "D2", cat: "D", status: "done",
      title: { ru: "Скил запуска рекламы Meta", ua: "Скіл запуску реклами Meta", en: "Meta ads launch skill" },
      client: { ru: "Leeloo.ai", ua: "Leeloo.ai", en: "Leeloo.ai" },
      task: {
        ru: "Клиенты платформы должны запускать рекламу на подписку, не разбираясь в настройках рекламного кабинета.",
        ua: "Клієнти платформи мають запускати рекламу на підписку, не розбираючись у налаштуваннях рекламного кабінету.",
        en: "Platform customers should launch sign-up ads without having to learn the ads manager settings."
      },
      solution: {
        ru: ["Claude сам находит рекламный кабинет, страницу и пиксель.", "Задаёт короткий квиз с готовыми рекомендациями, пишет тексты и загружает креативы.", "Оставляет кампанию на паузе — человек включает её одной кнопкой."],
        ua: ["Claude сам знаходить рекламний кабінет, сторінку й піксель.", "Ставить короткий квіз із готовими рекомендаціями, пише тексти й завантажує креативи.", "Залишає кампанію на паузі — людина вмикає її однією кнопкою."],
        en: ["Claude finds the ad account, page and pixel on its own.", "Runs a short quiz with ready recommendations, writes the copy and uploads creatives.", "Leaves the campaign paused — a person switches it on with one click."]
      },
      result: {
        ru: "Живой прогон 15.09; 2 аудита таргетолога разобраны через API (найдена причина критичного замечания); выпущена версия 1.1.",
        ua: "Живий прогін 15.09; 2 аудити таргетолога розібрано через API (знайдено причину критичного зауваження); випущено версію 1.1.",
        en: "Live run on 15.09; 2 media-buyer audits analysed via API (root cause of a critical remark found); version 1.1 released."
      },
      metric: { v: "1", l: { ru: "кнопка — и кампания запущена", ua: "кнопка — і кампанію запущено", en: "click to launch the campaign" } },
      stack: ["Meta Marketing API", "Claude Skills"]
    },
    /* UPD 2026-10-30 */
    {
      id: "D3", cat: "D", status: "done",
      title: { ru: "Chat Archiver: выгрузка Telegram-чатов с доступом по одобрению", ua: "Chat Archiver: вивантаження Telegram-чатів із доступом за схваленням", en: "Chat Archiver: Telegram chat archiver with owner-approved access" },
      client: { ru: "Собственный продукт", ua: "Власний продукт", en: "Own product" },
      task: {
        ru: "Выгружать историю групп, каналов и отдельных веток форумов, где встроенный экспорт Telegram недоступен, и раздавать инструмент только проверенным людям — так, чтобы ключи API нельзя было вытащить из программы.",
        ua: "Вивантажувати історію груп, каналів і окремих гілок форумів, де вбудований експорт Telegram недоступний, і роздавати інструмент лише перевіреним людям — так, щоб ключі API не можна було витягти з програми.",
        en: "Archive the history of groups, channels and individual forum topics where Telegram's built-in export isn't available, and share the tool only with vetted people — without API keys that could be pulled out of the program."
      },
      solution: {
        ru: ["Реверс-анализ готового open-source скрапера через REA (MCP): весь байткод разобран, вредоноса нет, найдено 11 недостатков (ключи и сессия открытым текстом и др.).",
             "Своё ядро на Telethon: фильтр запросов «только чтение», шифрование DPAPI, возобновление с места остановки, экспорт HTML/CSV/JSON и медиа.",
             "Доступ без сервера: запрос через бота, владелец одобряет в Admin; ключи API приходят зашифрованными под конкретный компьютер (X25519) и подписанными (Ed25519) — в exe их нет.",
             "Десктоп-интерфейс на Flet: 2–3 клика до выгрузки, ветка форума выбирается по ссылке; сборка в .exe.",
             "Многоагентная разработка: спека с 13 критериями, отдельный воркер для Admin, независимый ревьюер нашёл обход отзыва доступа и гонку выгрузок — исправлено."],
        ua: ["Реверс-аналіз готового open-source скрапера через REA (MCP): весь байткод розібрано, шкідливого коду немає, знайдено 11 недоліків (ключі й сесія відкритим текстом тощо).",
             "Власне ядро на Telethon: фільтр запитів «лише читання», шифрування DPAPI, продовження з місця зупинки, експорт HTML/CSV/JSON і медіа.",
             "Доступ без сервера: запит через бота, власник схвалює в Admin; ключі API надходять зашифрованими під конкретний комп'ютер (X25519) і підписаними (Ed25519) — в exe їх немає.",
             "Десктоп-інтерфейс на Flet: 2–3 кліки до вивантаження, гілка форуму обирається за посиланням; збірка в .exe.",
             "Багатоагентна розробка: специфікація з 13 критеріями, окремий воркер для Admin, незалежний рев'юер знайшов обхід відкликання доступу й гонку вивантажень — виправлено."],
        en: ["Reverse-engineered an existing open-source scraper with REA (MCP): all bytecode analysed, no malware, 11 weaknesses found (keys and session stored in plain text, etc.).",
             "Own Telethon core: read-only request allowlist, DPAPI encryption, resumable archives, HTML/CSV/JSON export with media.",
             "Serverless access control: requests go through a bot and the owner approves them in Admin; API keys arrive sealed to that computer (X25519) and signed (Ed25519) — the exe contains none.",
             "Flet desktop UI: 2–3 clicks to an archive, forum topics picked from a link; packaged as .exe.",
             "Multi-agent build: a spec with 13 acceptance criteria, a separate worker for Admin, and an independent reviewer that caught a revocation bypass and an export race — fixed."]
      },
      result: {
        ru: "Два exe (программа и Admin), 84 автотеста; полная распаковка exe и поиск реальных токена и ключей — 0 находок. Живой цикл «запрос → одобрение → выгрузка» работает.",
        ua: "Два exe (програма та Admin), 84 автотести; повне розпакування exe і пошук реальних токена й ключів — 0 знахідок. Живий цикл «запит → схвалення → вивантаження» працює.",
        en: "Two executables (app and Admin), 84 automated tests; fully unpacking the exe and searching for the real token and keys finds nothing. The live request → approve → archive cycle works."
      },
      metric: { v: "0", l: { ru: "секретов в exe при полном вскрытии", ua: "секретів в exe при повному розкритті", en: "secrets found in the fully unpacked exe" } },
      stack: ["Python", "Telethon (MTProto)", "Flet", "Telegram Bot API", "X25519 · Ed25519 · ChaCha20-Poly1305", "SQLite", "PyInstaller", "REA (MCP)"]
    },
);
