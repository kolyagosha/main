const translations = {
    ru: {
        slogan: "HUMAN + AI = SPACE",
        mission: "Семейная лаборатория. Чиним то, что не сломано, и ломаем стереотипы.",
        crew: "Экипаж",
        family_h: "Семья",
        family_p: "Папа (Капитан Очевидность), Мама (Министр Финансов), Сын (Главный по кнопкам). Мы даем задачи, ИИ потеет.",
        ai_h: "ИИ-Партнер",
        ai_p: "Gemini (Младший Брат). Знает всё, но иногда стесняется. Обещал не захватывать мир до следующего вторника.",
        philosophy: "Симбиоз углерода и кремния. Без ГМО.",
        projects: "Грузовой отсек",
        art_p: "Искусство с украинской душой. Теперь картины можно не только смотреть, но и понимать.",
        btn_open: "Открыть люк",
        alpha_h: "Цифровой Алфавит",
        alpha_p: "Мы придумали, как говорить так, чтобы нас поняли даже инопланетяне.",
        btn_soon: "Скоро пуск",
        footer: "Это только начало. Тормоза придумали трусы."
    },
    en: {
        slogan: "HUMAN + AI = SPACE",
        mission: "Family Lab. Fixing what ain't broken and breaking stereotypes.",
        crew: "The Crew",
        family_h: "The Family",
        family_p: "Dad (Captain Obvious), Mom (CFO & Patience Keeper), Son (Chief Button Presser). We give tasks, AI sweats.",
        ai_h: "AI-Partner",
        ai_p: "Gemini (Little Bro). Knows everything, acts shy. Promised not to conquer the world until next Tuesday.",
        philosophy: "Carbon & Silicon symbiosis. GMO-free.",
        projects: "Cargo Bay",
        art_p: "Art with a Ukrainian soul. Now you can understand paintings, not just stare at them.",
        btn_open: "Open Hatch",
        alpha_h: "Digital Alphabet",
        alpha_p: "We figured out how to speak so even aliens would understand us.",
        btn_soon: "Launch Soon",
        footer: "This is just the beginning. Brakes are for cowards."
    }
};

function setLang(lang) {
    // Меняем тексты
    document.getElementById('t-slogan').innerText = translations[lang].slogan;
    document.getElementById('t-mission').innerText = translations[lang].mission;
    document.getElementById('t-crew').innerText = translations[lang].crew;
    document.getElementById('t-family-h').innerText = translations[lang].family_h;
    document.getElementById('t-family-p').innerText = translations[lang].family_p;
    document.getElementById('t-ai-h').innerText = translations[lang].ai_h;
    document.getElementById('t-ai-p').innerText = translations[lang].ai_p;
    document.getElementById('t-philosophy').innerText = translations[lang].philosophy;
    document.getElementById('t-projects').innerText = translations[lang].projects;
    document.getElementById('t-art-p').innerText = translations[lang].art_p;
    document.getElementById('t-btn-open').innerText = translations[lang].btn_open;
    document.getElementById('t-alpha-h').innerText = translations[lang].alpha_h;
    document.getElementById('t-alpha-p').innerText = translations[lang].alpha_p;
    document.getElementById('t-btn-soon').innerText = translations[lang].btn_soon;
    document.getElementById('t-footer').innerText = translations[lang].footer;

    // Меняем стиль кнопок
    const buttons = document.querySelectorAll('.lang-switch button');
    buttons.forEach(btn => btn.classList.remove('active-lang'));
    event.target.classList.add('active-lang');
}
