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
);
