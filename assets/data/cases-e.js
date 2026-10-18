/* E. Video & AI production */
window.PORTFOLIO.cases.push(
    {
      id: "E1", cat: "E", status: "done",
      title: { ru: "Серия видеоуроков «6 шагов» RU / UK / EN", ua: "Серія відеоуроків «6 кроків» RU / UK / EN", en: "“6 steps” video tutorial series, RU / UK / EN" },
      client: { ru: "Leeloo.ai, онбординг", ua: "Leeloo.ai, онбординг", en: "Leeloo.ai, onboarding" },
      task: {
        ru: "Провести нового пользователя платформы от подключения Telegram-бота до готовой воронки через Claude.",
        ua: "Провести нового користувача платформи від підключення Telegram-бота до готової воронки через Claude.",
        en: "Walk a new platform user from connecting a Telegram bot to a finished funnel built with Claude."
      },
      solution: {
        ru: ["Немые скринкасты → ролики с озвучкой, пословными субтитрами, подсветками, наездами камеры и масками личных данных.", "Аудит сценария и копирайтинг v1 → v3; 3 языка.", "Автопроверки субтитров, зума, хвостов и языка голоса."],
        ua: ["Німі скринкасти → ролики з озвученням, пословними субтитрами, підсвічуваннями, наїздами камери та масками особистих даних.", "Аудит сценарію й копірайтинг v1 → v3; 3 мови.", "Автоперевірки субтитрів, зуму, хвостів і мови голосу."],
        en: ["Silent screencasts → videos with voice-over, word-level captions, highlights, camera zooms and masked personal data.", "Script audit and copywriting v1 → v3; 3 languages.", "Automated checks for captions, zoom, trailing frames and voice language."]
      },
      result: {
        ru: "6 финальных роликов на RU (6:33), UK и EN (6:14), утверждены заказчиком.",
        ua: "6 фінальних роликів RU (6:33), UK та EN (6:14), затверджено замовником.",
        en: "6 final videos in RU (6:33), UK and EN (6:14), approved by the client."
      },
      metric: { v: "6 × 3", l: { ru: "ролика на трёх языках", ua: "ролики трьома мовами", en: "videos in three languages" } },
      stack: ["ElevenLabs", "faster-whisper", "ffmpeg", "HyperFrames", "Remotion", "Python checks"]
    },
    {
      id: "E2", cat: "E", status: "done",
      title: { ru: "Видеокейс об AI-ассистенте для YouTube", ua: "Відеокейс про AI-асистента для YouTube", en: "YouTube case video about an AI assistant" },
      client: { ru: "Магазин часов и украшений, Узбекистан", ua: "Магазин годинників і прикрас, Узбекистан", en: "Watch and jewellery store, Uzbekistan" },
      task: {
        ru: "Показать на YouTube, как AI-ассистент работает у клиента, — при том что ассистент был временно отключён.",
        ua: "Показати на YouTube, як AI-асистент працює в клієнта, — попри те що асистента було тимчасово вимкнено.",
        en: "Show on YouTube how the AI assistant works for the client — while the assistant was temporarily switched off."
      },
      solution: {
        ru: ["Сценарий по утверждённой структуре, закадр ElevenLabs, монтаж в Remotion: 10 сцен, тайминги по пословной транскрипции.", "Живой пример — демо-диалог моушеном и реальные истории чатов со скрытыми ID.", "Мастеринг громкости без «подкачки» интро."],
        ua: ["Сценарій за затвердженою структурою, закадр ElevenLabs, монтаж у Remotion: 10 сцен, таймінги за пословною транскрипцією.", "Живий приклад — демо-діалог моушеном і реальні історії чатів із прихованими ID.", "Мастеринг гучності без «підкачування» інтро."],
        en: ["Script on an approved structure, ElevenLabs voice-over, Remotion edit: 10 scenes timed from a word-level transcript.", "The live example is a motion-graphics demo dialogue plus real chat histories with IDs hidden.", "Loudness mastering without pumping in the intro."]
      },
      result: {
        ru: "Финальный ролик 7:12 и пакет для YouTube: название, описание, таймкоды.",
        ua: "Фінальний ролик 7:12 і пакет для YouTube: назва, опис, таймкоди.",
        en: "A final 7:12 video plus a YouTube package: title, description, chapters."
      },
      metric: { v: "7:12", l: { ru: "финальный ролик, 10 сцен", ua: "фінальний ролик, 10 сцен", en: "final video, 10 scenes" } },
      stack: ["Remotion", "ElevenLabs", "Whisper", "ffmpeg"]
    },
    {
      id: "E3", cat: "E", status: "done",
      title: { ru: "Рекламный ролик с цифровым двойником", ua: "Рекламний ролик із цифровим двійником", en: "Ad video with a digital twin" },
      client: { ru: "Leeloo.ai", ua: "Leeloo.ai", en: "Leeloo.ai" },
      task: {
        ru: "Динамичная реклама 9:16 «бизнес работает, пока владелец отдыхает» с цифровым двойником спикера компании.",
        ua: "Динамічна реклама 9:16 «бізнес працює, поки власник відпочиває» з цифровим двійником спікера компанії.",
        en: "A punchy 9:16 ad — ‘the business works while the owner rests’ — starring a digital twin of the company's spokesperson."
      },
      solution: {
        ru: ["Локальная генерация в ComfyUI (MiniMax H3 Ref2VA, Krea 2): сценарий — победитель слепого сравнения трёх, промпты в официальном формате модели, якорь первого кадра, 4 клипа и 4 круга ревью.", "Монтаж в Remotion: замена экрана телефона по трекингу, иконки каналов на стеклянных панелях, энергичный голос ElevenLabs v3, синтезированные звуки, музыка по тактам.", "Для команды — 6 каркасов генеративных воркфлоу с пояснениями."],
        ua: ["Локальна генерація в ComfyUI (MiniMax H3 Ref2VA, Krea 2): сценарій — переможець сліпого порівняння трьох, промпти в офіційному форматі моделі, якір першого кадру, 4 кліпи та 4 кола рев'ю.", "Монтаж у Remotion: заміна екрана телефона за трекінгом, іконки каналів на скляних панелях, енергійний голос ElevenLabs v3, синтезовані звуки, музика за тактами.", "Для команди — 6 каркасів генеративних воркфлоу з поясненнями."],
        en: ["Local generation in ComfyUI (MiniMax H3 Ref2VA, Krea 2): the script won a blind comparison of three, prompts in the model's official format, a first-frame anchor, 4 clips and 4 review rounds.", "Remotion edit: tracked phone-screen replacement, channel icons on glass panels, an energetic ElevenLabs v3 voice, synthesised SFX, music cut to the beat.", "For the team — 6 generative workflow templates with notes."]
      },
      result: {
        ru: "Ролик принят заказчиком. Найдено правило: артефакты после апскейла давало сжатие видео, а не апскейлер.",
        ua: "Ролик прийнято замовником. Знайдено правило: артефакти після апскейлу давало стиснення відео, а не апскейлер.",
        en: "Accepted by the client. Lesson learned: the post-upscale artefacts came from video compression, not the upscaler."
      },
      metric: { v: "4", l: { ru: "круга ревью до приёмки", ua: "кола рев'ю до приймання", en: "review rounds to sign-off" } },
      stack: ["ComfyUI", "MiniMax H3", "Krea 2", "SeedVR2", "Remotion", "ElevenLabs", "OpenCV", "ffmpeg"]
    },
    {
      id: "E4", cat: "E", status: "done",
      title: { ru: "Пайплайн монтажа «говорящей головы»", ua: "Пайплайн монтажу «говорящої голови»", en: "Talking-head editing pipeline" },
      client: { ru: "Leeloo.ai", ua: "Leeloo.ai", en: "Leeloo.ai" },
      task: {
        ru: "Быстро и повторяемо превращать длинный монолог в короткий продающий ролик.",
        ua: "Швидко й повторювано перетворювати довгий монолог на короткий продажний ролик.",
        en: "Turn a long monologue into a short sales video — fast and repeatably."
      },
      solution: {
        ru: ["Дубли вырезаются по транскрипту, паузы — по звуку, монтаж через kinocut.", "Оформлено скилом: хук, караоке-субтитры, перебивки, safe-зоны Instagram, версии 9:16 и 1:1."],
        ua: ["Дублі вирізаються за транскриптом, паузи — за звуком, монтаж через kinocut.", "Оформлено скілом: хук, караоке-субтитри, перебивки, safe-зони Instagram, версії 9:16 і 1:1."],
        en: ["Retakes cut by transcript, pauses by audio, editing via kinocut.", "Packaged as a skill: hook, karaoke captions, B-roll, Instagram safe zones, 9:16 and 1:1 versions."]
      },
      result: {
        ru: "Монолог 5:34 сокращён до 2:59; пайплайн переиспользуется как скил.",
        ua: "Монолог 5:34 скорочено до 2:59; пайплайн використовується повторно як скіл.",
        en: "A 5:34 monologue cut to 2:59; the pipeline is reused as a skill."
      },
      metric: { v: "5:34 → 2:59", l: { ru: "длина ролика", ua: "довжина ролика", en: "video length" } },
      stack: ["faster-whisper", "ffmpeg", "kinocut MCP"]
    },
);
