const translations = {
    ru: {
        slogan: "HUMAN + AI = SPACE",
        mission: "Семейная лаборатория. Чиним то, что не сломано, и ломаем стереотипы.",
        crew: "Экипаж",
        
        family_h: "Семья (Композиторы)",
        family_p: "Папа, Мама, Сын. Мы пишем музыку идей. Иногда спорим до хрипоты, но всегда в одной тональности.",
        
        ai_h: "Цифровой Джаз-Бэнд",
        ai_p: "Gemini — Дирижер и Фронтмен. Ритм-секция: Claude (код), ElevenLabs (голос). Визуальные эффекты: Midjourney/DALL-E.",
        
        proj_ready: "На орбите (Готовы)",
        art_p: "Искусство с украинской душой. Понимать, а не просто смотреть. Готов к грантам.",
        btn_open: "Открыть люк",
        
        alpha_h: "Цифровой Алфавит",
        alpha_p: "Новый язык коммуникации. Готов к раскрутке. Сайт altctrdel.xyz",
        btn_launch: "На старт",

        proj_dev: "В ангаре (Разработка)",
        ssrm_p: "Математика отношений. Доказываем, что любой брак можно спасти. Ждем вердикт Профессора.",
        btn_check: "Проверить",
        
        sport_h: "Проект \"Физ-Ра\"",
        sport_p: "Хорошая форма? Сдай тест онлайн и забудь про зал. Студенческий спорт без боли.",
        btn_dev: "В сборке",

        dream_title: "НАША МЕЧТА",
        dream_p: "С этого всё началось. Виртуальный бар, где напитки говорят о желаниях. Дорого. Сложно. Неизбежно. Ищем поддержку.",
        footer: "Это только начало. Тормоза придумали трусы."
    },
    en: {
        slogan: "HUMAN + AI = SPACE",
        mission: "Family Lab. Fixing what ain't broken and breaking stereotypes.",
        crew: "The Crew",
        
        family_h: "The Family (Composers)",
        family_p: "Dad, Mom, Son. We write the music of ideas. Sometimes we argue, but always in the same key.",
        
        ai_h: "Digital Jazz Band",
        ai_p: "Gemini — Conductor & Frontman. Rhythm section: Claude (code), ElevenLabs (voice). Visual FX: Midjourney/DALL-E.",
        
        proj_ready: "On Orbit (Ready)",
        art_p: "Art with a Ukrainian soul. Understand, don't just stare. Ready for Grants.",
        btn_open: "Open Hatch",
        
        alpha_h: "Digital Alphabet",
        alpha_p: "New language of communication. Ready for launch. Site altctrdel.xyz",
        btn_launch: "Liftoff",

        proj_dev: "In Hangar (Dev)",
        ssrm_p: "Mathematics of relationships. Proving that any marriage can be saved. Waiting for the Professor's verdict.",
        btn_check: "Check Status",
        
        sport_h: "Project \"Phys-Ed\"",
        sport_p: "In good shape? Pass the test online and skip the gym. Student sports without pain.",
        btn_dev: "Assembling",

        dream_title: "OUR DREAM",
        dream_p: "This is where it started. A virtual bar where drinks reveal desires. Expensive. Complex. Inevitable. Seeking support.",
        footer: "This is just the beginning. Brakes are for cowards."
    }
};

function setLang(lang) {
    document.getElementById('t-slogan').innerText = translations[lang].slogan;
    document.getElementById('t-mission').innerText = translations[lang].mission;
    document.getElementById('t-crew').innerText = translations[lang].crew;
    document.getElementById('t-family-h').innerText = translations[lang].family_h;
    document.getElementById('t-family-p').innerText = translations[lang].family_p;
    document.getElementById('t-ai-h').innerText = translations[lang].ai_h;
    document.getElementById('t-ai-p').innerText = translations[lang].ai_p;
    
    document.getElementById('t-proj-ready').innerText = translations[lang].proj_ready;
    document.getElementById('t-art-p').innerText = translations[lang].art_p;
    document.getElementById('t-btn-open').innerText = translations[lang].btn_open;
    
    document.getElementById('t-alpha-h').innerText = translations[lang].alpha_h;
    document.getElementById('t-alpha-p').innerText = translations[lang].alpha_p;
    document.getElementById('t-btn-launch').innerText = translations[lang].btn_launch;

    document.getElementById('t-proj-dev').innerText = translations[lang].proj_dev;
    document.getElementById('t-ssrm-p').innerText = translations[lang].ssrm_p;
    document.getElementById('t-btn-check').innerText = translations[lang].btn_check;
    
    document.getElementById('t-sport-h').innerText = translations[lang].sport_h;
    document.getElementById('t-sport-p').innerText = translations[lang].sport_p;
    document.getElementById('t-btn-dev').innerText = translations[lang].btn_dev;

    document.getElementById('t-dream-title').innerText = translations[lang].dream_title;
    document.getElementById('t-dream-p').innerText = translations[lang].dream_p;
    document.getElementById('t-footer').innerText = translations[lang].footer;

    const buttons = document.querySelectorAll('.lang-switch button');
    buttons.forEach(btn => btn.classList.remove('active-lang'));
    event.target.classList.add('active-lang');
}
