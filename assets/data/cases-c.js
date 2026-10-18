/* C. Web development & sales tools */
window.PORTFOLIO.cases.push(
    {
      id: "C1", cat: "C", status: "done",
      title: { ru: "Sales-визуализатор кровли и сайдинга", ua: "Sales-візуалізатор покрівлі та сайдингу", en: "Roofing & siding sales visualizer" },
      client: { ru: "Подрядчик кровельных и фасадных работ, США (фриланс)", ua: "Підрядник покрівельних і фасадних робіт, США (фриланс)", en: "Roofing and siding contractor, USA (freelance)" },
      task: {
        ru: "Менеджеру на встрече нужно за 1–2 минуты показать, из чего состоит работа и как будет выглядеть дом клиента.",
        ua: "Менеджеру на зустрічі треба за 1–2 хвилини показати, з чого складається робота і як виглядатиме будинок клієнта.",
        en: "In a meeting, a sales rep needs 1–2 minutes to show what the job involves and how the client's house will look."
      },
      solution: {
        ru: ["HTML-лендинг со скролл-историей: сайдинг (10 этапов) и кровля (9 этапов), фото-кадры, перекраска.", "102 цвета по 5 линейкам материалов извлечены скриптом с сайта клиента.", "Офлайн-пакет для iPad/Mac/Windows, обёртки Electron и PWA; v2 по UI/UX-аудиту — 97 находок, доступность WCAG AA."],
        ua: ["HTML-лендинг зі скрол-історією: сайдинг (10 етапів) і покрівля (9 етапів), фото-кадри, перефарбування.", "102 кольори з 5 лінійок матеріалів витягнуто скриптом із сайту клієнта.", "Офлайн-пакет для iPad/Mac/Windows, обгортки Electron і PWA; v2 за UI/UX-аудитом — 97 знахідок, доступність WCAG AA."],
        en: ["A scroll-story HTML landing: siding (10 steps) and roofing (9 steps), photo frames, recolouring.", "102 colours across 5 material lines extracted from the client's website by a script.", "Offline package for iPad/Mac/Windows, Electron and PWA wrappers; v2 after a UI/UX audit — 97 findings, WCAG AA accessibility."]
      },
      result: {
        ru: "Проект закончен и передан. 82 URL кадров и 102 палитры проверены автоматически.",
        ua: "Проєкт завершено й передано. 82 URL кадрів і 102 палітри перевірено автоматично.",
        en: "Completed and handed over. 82 frame URLs and 102 palettes verified automatically."
      },
      metric: { v: "102", l: { ru: "цвета материалов в палитре", ua: "кольори матеріалів у палітрі", en: "material colours in the palette" } },
      stack: ["HTML/CSS/JS (no build)", "Python (Pillow)", "Image generation", "Electron", "PWA", "git"]
    },
    {
      id: "C2", cat: "C", status: "done",
      title: { ru: "Дашборд «Продажи × Facebook Ads»", ua: "Дашборд «Продажі × Facebook Ads»", en: "Sales × Facebook Ads dashboard" },
      client: { ru: "Leeloo.ai, маркетинг", ua: "Leeloo.ai, маркетинг", en: "Leeloo.ai, marketing" },
      task: {
        ru: "Продажи не были связаны с кампаниями и креативами Meta, а метрики расходились с Ads Manager.",
        ua: "Продажі не були пов'язані з кампаніями та креативами Meta, а метрики розходилися з Ads Manager.",
        en: "Sales weren't linked to Meta campaigns and creatives, and the metrics didn't match Ads Manager."
      },
      solution: {
        ru: ["Аудит существующего SPA: 9 находок, включая XSS.", "Сбор UTM в момент события воронки через HTTP-блок; приоритеты привязки продажи к источнику.", "Аудит метрик (уникальный CTR, охват и частота не суммируются); иерархия кампания → креатив → дата с историей с 12.2025."],
        ua: ["Аудит наявного SPA: 9 знахідок, зокрема XSS.", "Збір UTM у момент події воронки через HTTP-блок; пріоритети прив'язки продажу до джерела.", "Аудит метрик (унікальний CTR, охоплення й частота не сумуються); ієрархія кампанія → креатив → дата з історією з 12.2025."],
        en: ["Audit of the existing SPA: 9 findings, including XSS.", "UTM capture at the funnel event via an HTTP block; priority rules for attributing a sale to its source.", "Metrics audit (unique CTR, reach and frequency don't add up); campaign → creative → date hierarchy with history since 12.2025."]
      },
      result: {
        ru: "Построчные метрики совпадают с Ads Manager; продажи за 90 дней привязаны к UTM.",
        ua: "Построкові метрики збігаються з Ads Manager; продажі за 90 днів прив'язано до UTM.",
        en: "Row-level metrics match Ads Manager; 90 days of sales are attributed to UTMs."
      },
      metric: { v: "90", l: { ru: "дней продаж привязаны к UTM", ua: "днів продажів прив'язано до UTM", en: "days of sales attributed to UTMs" } },
      stack: ["Vanilla JS", "PHP (PDO)", "MySQL", "Facebook Marketing API", "Webhooks"]
    },
);
