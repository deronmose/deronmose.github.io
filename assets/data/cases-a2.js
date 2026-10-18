/* A. AI assistants & LLM systems (A3-A4) */
window.PORTFOLIO.cases.push(
    {
      id: "A3", cat: "A", status: "done",
      title: { ru: "QA интеграции OpenAI Responses API", ua: "QA інтеграції OpenAI Responses API", en: "QA of the OpenAI Responses API integration" },
      client: { ru: "Leeloo.ai, R&D", ua: "Leeloo.ai, R&D", en: "Leeloo.ai, R&D" },
      taskLabel: "context",
      task: {
        ru: "Платформа переходит с Assistants API на Responses API, а документации по новому провайдеру нет. Нужно доказать, что всё работает, до релиза.",
        ua: "Платформа переходить з Assistants API на Responses API, а документації щодо нового провайдера немає. Треба довести, що все працює, до релізу.",
        en: "The platform was moving from the Assistants API to the Responses API with no documentation for the new provider. It had to be proven working before release."
      },
      solution: {
        ru: ["Матрица на 90 тест-кейсов и эталонный тестовый ассистент: 11 функций и база знаний; 3 раунда в живом Telegram.", "Собственный MCP-сервер с неугадываемыми ответами доказывает, что модель реально вызывает инструмент, а не выдумывает результат.", "Найдена причина «молчания» ассистента: пустой список разрешённых моделей в OpenAI Project."],
        ua: ["Матриця на 90 тест-кейсів і еталонний тестовий асистент: 11 функцій і база знань; 3 раунди в живому Telegram.", "Власний MCP-сервер із невгадуваними відповідями доводить, що модель справді викликає інструмент, а не вигадує результат.", "Знайдено причину «мовчання» асистента: порожній список дозволених моделей в OpenAI Project."],
        en: ["A 90-case test matrix and a reference test assistant with 11 functions and a knowledge base; 3 rounds in live Telegram.", "A custom MCP server with unguessable answers proves the model really calls the tool instead of inventing a result.", "Found why the assistant went silent: an empty list of allowed models in the OpenAI Project."]
      },
      result: {
        ru: "Работают 11 из 11 функций платформы, web search, file search, code interpreter, MCP и vision. 2 бага уровня High переданы разработке, рекомендована модель для прода.",
        ua: "Працюють 11 з 11 функцій платформи, web search, file search, code interpreter, MCP і vision. 2 баги рівня High передано розробці, рекомендовано модель для продакшну.",
        en: "11 of 11 platform functions work, plus web search, file search, code interpreter, MCP and vision. 2 High-severity bugs filed to engineering; a production model recommended."
      },
      metric: { v: "90", l: { ru: "тест-кейсов в матрице", ua: "тест-кейсів у матриці", en: "test cases in the matrix" } },
      stack: ["OpenAI Responses API", "Stored Prompts", "Function calling", "Python + FastMCP", "ngrok", "Telegram", "Jira"]
    },
    {
      id: "A4", cat: "A", status: "done",
      title: { ru: "AI-контроль качества звонков отдела продаж", ua: "AI-контроль якості дзвінків відділу продажів", en: "AI quality control for sales calls" },
      client: { ru: "Leeloo.ai, отдел продаж", ua: "Leeloo.ai, відділ продажів", en: "Leeloo.ai, sales team" },
      task: {
        ru: "Ночная AI-оценка звонков была недостоверной: 66% звонков лучшего менеджера получали 100/100, встречались баллы вне шкалы, руководитель подтверждал лишь ~30% оценок. По таким цифрам нельзя коучить и сравнивать менеджеров.",
        ua: "Нічне AI-оцінювання дзвінків було недостовірним: 66% дзвінків найкращого менеджера отримували 100/100, траплялися бали поза шкалою, керівник підтверджував лише ~30% оцінок. За такими цифрами не можна коучити й порівнювати менеджерів.",
        en: "The nightly AI call scoring was unreliable: 66% of the top manager's calls scored 100/100, some scores were off the scale, and the head of sales agreed with only ~30% of them. You can't coach or compare reps on numbers like that."
      },
      solution: {
        ru: ["Сбор данных: n8n-воркфлоу Binotel → Whisper со словарём терминов → разметка ролей → AI-агент ведёт «Базу лидов» (ниша, цели, причина отклика) без выдумок. Работает ежедневно.", "Аудит оценщика: причина инфляции — единственный пример на 100 баллов в промпте.", "Новая архитектура «10 оценщиков + 10 критиков + арбитр», цитата из разговора под каждым баллом, калибровка на эталонных звонках."],
        ua: ["Збір даних: n8n-воркфлоу Binotel → Whisper зі словником термінів → розмітка ролей → AI-агент веде «Базу лідів» (ніша, цілі, причина відгуку) без вигадок. Працює щодня.", "Аудит оцінювача: причина інфляції — єдиний приклад на 100 балів у промпті.", "Нова архітектура «10 оцінювачів + 10 критиків + арбітр», цитата з розмови під кожним балом, калібрування на еталонних дзвінках."],
        en: ["Data collection: n8n workflow Binotel → Whisper with a term dictionary → speaker roles → an AI agent maintains a lead base (niche, goals, reason for reaching out) with no made-up facts. Runs daily.", "Scorer audit: the inflation came from a single 100-point example in the prompt.", "New architecture — 10 scorers + 10 critics + an arbiter, a quote from the call under every score, calibration on reference calls."]
      },
      result: {
        ru: "Совпадение с эталоном — 90% на уверенных звонках (84% на всех). Сильные звонки стабильно получают высший балл, слабые больше не получают ложных. Выбрана gpt-4.1-mini при temperature 0 вместо более дорогой модели.",
        ua: "Збіг з еталоном — 90% на впевнених дзвінках (84% на всіх). Сильні дзвінки стабільно отримують найвищий бал, слабкі більше не отримують хибних. Обрано gpt-4.1-mini при temperature 0 замість дорожчої моделі.",
        en: "90% agreement with the reference on confident calls (84% overall). Strong calls reliably get the top score; weak ones no longer get false highs. gpt-4.1-mini at temperature 0 chosen over a pricier model."
      },
      metric: { v: "90%", l: { ru: "совпадение с эталонной оценкой", ua: "збіг з еталонною оцінкою", en: "agreement with reference scores" } },
      stack: ["n8n", "Binotel API", "Whisper", "LLM agent chains", "Structured Output", "MySQL", "Google Sheets"]
    },
);
