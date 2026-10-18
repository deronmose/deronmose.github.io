/* QA & platform quality — experience block, not a case. UPD 2026-10-18 */
window.PORTFOLIO.qa = {
  title: { ru: "QA и качество платформы", ua: "QA та якість платформи", en: "QA & platform quality" },
  lead: {
    ru: "Это не отдельный кейс, а часть ежедневной работы: нахожу, где платформа ломается, и довожу проблему до разработки в виде понятного баг-репорта.",
    ua: "Це не окремий кейс, а частина щоденної роботи: знаходжу, де платформа ламається, і доводжу проблему до розробки у вигляді зрозумілого баг-репорту.",
    en: "Not a separate case but part of the daily job: I find where the platform breaks and hand the problem to engineering as a clear bug report."
  },
  blocks: [
    {
      title: { ru: "Manual QA в поддержке", ua: "Manual QA у підтримці", en: "Manual QA in support" },
      points: {
        ru: ["Разбираю обращения пользователей пошагово: воспроизвожу проблему и отделяю ошибку платформы от ошибки настройки.", "Отлаживаю API и вебхуки, трассирую поток данных и нахожу первопричину.", "Оформляю баг-репорты в Jira по единому шаблону: предусловия, шаги воспроизведения, ожидаемый и фактический результат — со сверкой с PRD."],
        ua: ["Розбираю звернення користувачів покроково: відтворюю проблему й відокремлюю помилку платформи від помилки налаштування.", "Налагоджую API та вебхуки, трасую потік даних і знаходжу першопричину.", "Оформлюю баг-репорти в Jira за єдиним шаблоном: передумови, кроки відтворення, очікуваний і фактичний результат — зі звіркою з PRD."],
        en: ["I work through user tickets step by step: reproduce the issue and separate platform bugs from configuration mistakes.", "I debug APIs and webhooks, trace the data flow and find the root cause.", "I file Jira bug reports on one template — preconditions, reproduction steps, expected vs actual result — checked against the PRD."]
      },
      stack: ["Jira", "PRD", "REST / Webhooks", "Confluence"]
    },
    {
      title: { ru: "Автоматизированный поиск ошибок через MCP", ua: "Автоматизований пошук помилок через MCP", en: "Automated bug hunting via MCP" },
      points: {
        ru: ["AI-агенты прогоняют инструменты платформы через MCP-коннектор: 5 агентов, 9/9 типов блоков, 12/12 типов контента, 8/8 кнопок, 21/27 действий.", "Реестр из 54 найденных дыр и ограничений для разработки — включая критичные: например, воронка не открывается в интерфейсе при «0 ошибок» валидации.", "Улучшение инструментария платформы: установка плагина «одним промптом», видеоинструкции, скилы для типовых задач."],
        ua: ["AI-агенти проганяють інструменти платформи через MCP-конектор: 5 агентів, 9/9 типів блоків, 12/12 типів контенту, 8/8 кнопок, 21/27 дій.", "Реєстр із 54 знайдених дір і обмежень для розробки — зокрема критичні: наприклад, воронка не відкривається в інтерфейсі при «0 помилок» валідації.", "Покращення інструментарію платформи: встановлення плагіна «одним промптом», відеоінструкції, скіли для типових задач."],
        en: ["AI agents run the platform's tools through the MCP connector: 5 agents, 9/9 block types, 12/12 content types, 8/8 buttons, 21/27 actions.", "A register of 54 gaps and limitations for engineering, including critical ones — e.g. a funnel that won't open in the UI despite ‘0 errors’ from validation.", "Better platform tooling: one-prompt plugin install, video guides, skills for routine tasks."]
      },
      stack: ["MCP", "Claude Code", "Subagents", "Jira"]
    }
  ]
};
