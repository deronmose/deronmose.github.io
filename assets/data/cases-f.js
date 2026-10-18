/* F. Technical documentation */
window.PORTFOLIO.cases.push(
    {
      id: "F1", cat: "F", status: "done",
      title: { ru: "Документация платформы", ua: "Документація платформи", en: "Platform documentation" },
      client: { ru: "Leeloo.ai", ua: "Leeloo.ai", en: "Leeloo.ai" },
      task: {
        ru: "Документации нужна понятная структура на 3 языках, привязанная к продукту, и релиз-ноты к новым версиям.",
        ua: "Документації потрібна зрозуміла структура 3 мовами, прив'язана до продукту, і реліз-ноти до нових версій.",
        en: "The docs needed a clear 3-language structure tied to the product, plus release notes for new versions."
      },
      solution: {
        ru: ["Карта 16 разделов платформы, привязанная к PRD, на 3 языках.", "Перестройка UA-раздела Confluence скриптом через move-endpoint: 103 операции без правки содержимого страниц.", "Релиз-ноты 0.80 на 3 языках; описание блока OpenAI Responses."],
        ua: ["Карта 16 розділів платформи, прив'язана до PRD, 3 мовами.", "Перебудова UA-розділу Confluence скриптом через move-endpoint: 103 операції без редагування вмісту сторінок.", "Реліз-ноти 0.80 3 мовами; опис блоку OpenAI Responses."],
        en: ["A map of 16 platform sections tied to the PRD, in 3 languages.", "Restructured the UA Confluence space with a script via the move endpoint: 103 operations without touching page content.", "Release notes for 0.80 in 3 languages; documentation for the OpenAI Responses block."]
      },
      result: {
        ru: "Структура документации перестроена без потери контента; релиз-ноты выпущены на 3 языках.",
        ua: "Структуру документації перебудовано без втрати контенту; реліз-ноти випущено 3 мовами.",
        en: "Docs restructured with no content lost; release notes published in 3 languages."
      },
      metric: { v: "103", l: { ru: "операции без правки страниц", ua: "операції без редагування сторінок", en: "operations, zero page edits" } },
      stack: ["Confluence REST", "Python", "Markdown", "SVG diagrams"]
    }
);
