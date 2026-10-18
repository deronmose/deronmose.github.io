/* About + categories */
Object.assign(window.PORTFOLIO, {
  about: {
    summary: {
      ru: "Инженер по no-code / low-code автоматизации и интеграциям, 4+ года строю рабочие процессы в n8n (продвинутый уровень), Make и Zapier. Глубокая интеграция LLM (Claude, OpenAI), RAG-пайплайны, оркестрация API через REST, вебхуки и OAuth. Делаю автоматизацию «под ключ»: логику CRM и воронок продаж, AI-сценарии для клиентов, и превращаю нетехнические требования в стабильные, задокументированные решения. Только удалённо, асинхронная работа.",
      ua: "Інженер з no-code / low-code автоматизації та інтеграцій, 4+ роки будую робочі процеси в n8n (просунутий рівень), Make і Zapier. Глибока інтеграція LLM (Claude, OpenAI), RAG-пайплайни, оркестрація API через REST, вебхуки й OAuth. Роблю автоматизацію «під ключ»: логіку CRM і воронок продажів, AI-сценарії для клієнтів, і перетворюю нетехнічні вимоги на стабільні, задокументовані рішення. Лише віддалено, асинхронна робота.",
      en: "No-code / low-code automation and integration engineer with 4+ years building production workflows in n8n (advanced), Make and Zapier. Deep LLM integration (Claude, OpenAI), RAG pipelines and API orchestration over REST, webhooks and OAuth. I build end-to-end automation for real business problems — CRM and sales-funnel logic, AI-powered customer flows — and turn non-technical requirements into stable, well-documented solutions. Remote only, async-first."
    },
    jobs: [
      {
        company: "Leeloo.AI", years: { ru: "2024 — сейчас", ua: "2024 — зараз", en: "2024 — present" },
        role: { ru: "Technical Support & Automation Engineer", ua: "Technical Support & Automation Engineer", en: "Technical Support & Automation Engineer" },
        points: {
          ru: ["Сложные n8n-воркфлоу: ветвления, обработка ошибок, повторы, JavaScript-ноды для прода.", "AI-пайплайны на Claude / OpenAI API с RAG, эмбеддингами и векторным хранилищем.", "Интеграции 10+ CRM через REST, вебхуки и OAuth; связки маркетинговой автоматизации.", "Лендинги на HTML/CSS с PHP-функциями для передачи данных в платформу.", "Разбор сложных обращений: отладка API, трассировка вебхуков, поиск причины и исправление; документация и видеоуроки."],
          ua: ["Складні n8n-воркфлоу: розгалуження, обробка помилок, повтори, JavaScript-ноди для продакшну.", "AI-пайплайни на Claude / OpenAI API з RAG, ембедингами та векторним сховищем.", "Інтеграції 10+ CRM через REST, вебхуки й OAuth; зв'язки маркетингової автоматизації.", "Лендинги на HTML/CSS з PHP-функціями для передачі даних у платформу.", "Розбір складних звернень: налагодження API, трасування вебхуків, пошук причини й виправлення; документація та відеоуроки."],
          en: ["Complex n8n workflows: branching, error handling, retries, JavaScript Code nodes in production.", "AI pipelines on Claude / OpenAI APIs with RAG, embeddings and vector storage.", "Integrations with 10+ CRMs via REST, webhooks and OAuth; marketing-automation stacks.", "HTML/CSS landing pages with PHP functions that pass data into the platform.", "Hard support cases: API debugging, webhook tracing, root cause and fix; docs and video tutorials."]
        }
      },
      {
        company: "Seller Insiders", years: "2021 — 2023",
        role: { ru: "Technical Support & Content Creator", ua: "Technical Support & Content Creator", en: "Technical Support & Content Creator" },
        points: {
          ru: ["Участвовал в разработке и внедрении первых AI-инструментов и автоматизаций для внутренних процессов.", "Настраивал чат-боты для автоматизации бизнес-процессов.", "Техподдержка клиентов Amazon FBA; обучающий контент и YouTube-канал компании."],
          ua: ["Брав участь у розробці та впровадженні перших AI-інструментів і автоматизацій для внутрішніх процесів.", "Налаштовував чат-боти для автоматизації бізнес-процесів.", "Техпідтримка клієнтів Amazon FBA; навчальний контент і YouTube-канал компанії."],
          en: ["Helped build and roll out early AI tools and automations for internal operations.", "Configured chatbots for business-process automation.", "Technical support for Amazon FBA clients; educational content and the company YouTube channel."]
        }
      },
      {
        company: "Owlab (freelance)", years: "2019 — 2021",
        role: { ru: "Lead Generation Specialist", ua: "Lead Generation Specialist", en: "Lead Generation Specialist" },
        points: {
          ru: ["B2B-лидогенерация: автоматические пайплайны рассылок и ручная квалификация для команд разработки."],
          ua: ["B2B-лідогенерація: автоматичні пайплайни розсилок і ручна кваліфікація для команд розробки."],
          en: ["B2B lead generation: automated outreach pipelines and manual qualification for software teams."]
        }
      }
    ],
    education: {
      ru: "Запорожский государственный университет — бакалавр, радиоэлектронные технологии, 2015–2019",
      ua: "Запорізький державний університет — бакалавр, радіоелектронні технології, 2015–2019",
      en: "Zaporizhzhia State University — B.Sc., Radioelectronic Technology, 2015–2019"
    },
    languages: {
      ru: "Украинский и русский — родные · английский — B2 (письменный)",
      ua: "Українська та російська — рідні · англійська — B2 (письмова)",
      en: "Ukrainian and Russian — native · English — B2 (written)"
    },
    format: {
      ru: "Только удалённо, по всему миру · Киев, UTC+2 · асинхронная работа в тексте",
      ua: "Лише віддалено, по всьому світу · Київ, UTC+2 · асинхронна робота в тексті",
      en: "Remote only, worldwide · Kyiv, UTC+2 · async, text-based collaboration"
    },
    stack: [
      { k: "Automation", v: "n8n (advanced), Make, Zapier" },
      { k: "AI / LLM", v: "Claude API, OpenAI API, RAG, Embeddings, Vector DBs, Prompt Engineering, AI Agents, MCP" },
      { k: "APIs", v: "REST, Webhooks, OAuth, JSON" },
      { k: "Code", v: "JavaScript, Python, PHP, HTML, CSS, Git" },
      { k: "CRM", v: "HubSpot, Pipedrive, Salesforce, Monday, Airtable, Zoho, Asana, AmoCRM, KeyCRM" },
      { k: "Marketing", v: "ActiveCampaign, Customer.io, Klaviyo, Meta Marketing API" },
      { k: "Video", v: "Remotion, ffmpeg, ElevenLabs, Whisper, ComfyUI" },
      { k: "Docs / PM", v: "Confluence, Notion, Jira, Google Sheets" }
    ]
  },

  categories: [
    { id: "A", title: { ru: "AI-ассистенты и LLM-системы", ua: "AI-асистенти та LLM-системи", en: "AI assistants & LLM systems" },
      lead: { ru: "Ассистенты, которые разговаривают с клиентами, и системы оценки на LLM — с тестами, границами и измеримой точностью.", ua: "Асистенти, що спілкуються з клієнтами, і системи оцінювання на LLM — з тестами, межами та вимірюваною точністю.", en: "Assistants that talk to customers and LLM-based evaluation systems — with tests, hard boundaries and measurable accuracy." } },
    { id: "B", title: { ru: "Интеграции и автоматизация", ua: "Інтеграції та автоматизація", en: "Integrations & automation" },
      lead: { ru: "Связываю CRM, мессенджеры, календари и платежи так, чтобы данные не терялись и не дублировались.", ua: "Поєдную CRM, месенджери, календарі та платежі так, щоб дані не губилися й не дублювалися.", en: "Connecting CRMs, messengers, calendars and payments so data is never lost or duplicated." } },
    { id: "C", title: { ru: "Веб-разработка и инструменты продаж", ua: "Веброзробка та інструменти продажів", en: "Web development & sales tools" },
      lead: { ru: "Статические и PHP-сайты, дашборды и интерактивные инструменты для менеджеров по продажам.", ua: "Статичні та PHP-сайти, дашборди й інтерактивні інструменти для менеджерів з продажів.", en: "Static and PHP sites, dashboards and interactive tools for sales teams." } },
    { id: "D", title: { ru: "AI-агенты, MCP-серверы и скилы", ua: "AI-агенти, MCP-сервери та скіли", en: "AI agents, MCP servers & skills" },
      lead: { ru: "Даю AI-агентам доступ к реальным системам и упаковываю рутину в проверенные скилы.", ua: "Даю AI-агентам доступ до реальних систем і пакую рутину в перевірені скіли.", en: "Giving AI agents access to real systems and packaging routine work into tested skills." } },
    { id: "E", title: { ru: "Видео и AI-продакшн", ua: "Відео та AI-продакшн", en: "Video & AI production" },
      lead: { ru: "Обучающие и рекламные ролики: код-монтаж, синтез голоса, генеративное видео и автопроверки.", ua: "Навчальні та рекламні ролики: код-монтаж, синтез голосу, генеративне відео й автоперевірки.", en: "Tutorials and ads: code-driven editing, voice synthesis, generative video and automated checks." } },
    { id: "F", title: { ru: "Техническая документация", ua: "Технічна документація", en: "Technical documentation" },
      lead: { ru: "Структура документации, привязанная к продукту, и массовые операции через API.", ua: "Структура документації, прив'язана до продукту, і масові операції через API.", en: "Documentation structure tied to the product, and bulk operations via API." } }
  ]
});
