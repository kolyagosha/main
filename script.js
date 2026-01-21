const translations = {
    ua: {
        slogan: "HUMAN + AI = SPACE",
        mission: "Сімейна лабораторія. Лагодимо те, що не зламане, і ламаємо стереотипи.",
        crew: "Екіпаж",
        family_h: "Сім'я (Композитори ідей)",
        family_p: "Тато, Мама, Син. Ми пишемо музику ідей. Сперечаємось до хрипу, але завжди в одній тональності. Творимо під час блекаутів, бо світло всередині нас.",
        ai_h: "Цифровий Джаз-Бенд",
        ai_p: "ШІ — це партнери, а не просто інструменти, і кожен веде свою партію! Gemini — диригент. Ритм-секція: Claude (код). Голос: ElevenLabs. Соло та драйв: Grok. Візуальні ефекти: Midjourney/DALL-E.",
        proj_ready: "На орбіті (Готові)",
        art_p: "Мистецтво з українською душею. Розуміти, а не просто дивитися. Живий MVP, готовий до грантів.",
        btn_open: "Відкрити люк",
        alpha_h: "Цифровий Алфавіт",
        alpha_p: "Нова мова комунікації. Сюрреалістичний погляд на реальність. Сайт altctrdel.xyz",
        btn_launch: "На старт",
        proj_dev: "В ангарі (Розробка)",
        ssrm_p: "Математика стосунків. Динамічна модель теорії ігор для порятунку шлюбів. Чекаємо на вердикт професора Батаб'яла.",
        btn_check: "Перевірити статус",
        sport_h: "Проєкт \"Фіз-Ра\"",
        sport_p: "Складай тести онлайн, поки ми кодимо між відключеннями світла. Студентський спорт без болю.",
        btn_dev: "У збірці",
        dream_title: "НАША МРІЯ",
        dream_p: "SSRM.BAR — віртуальний бар, де напої розкривають таємні бажання. Складно. Дорого. Неминуче.",
        support_link: "Пригостити екіпаж кавою, а ІІ — плюшкою",
        footer: "Це тільки початок. Гальма вигадали боягузи."
    },
    en: {
        slogan: "HUMAN + AI = SPACE",
        mission: "Family Lab. Fixing what ain't broken and breaking stereotypes.",
        crew: "The Crew",
        family_h: "The Family (Idea Composers)",
        family_p: "Dad, Mom, Son. We write the music of ideas. We argue until we're hoarse, but we're always in the same key. Creating through blackouts.",
        ai_h: "Digital Jazz Band",
        ai_p: "AI are partners, not just tools, and everyone plays their part! Gemini — Conductor. Rhythm section: Claude (code). Voice: ElevenLabs. Solos & drive: Grok. Visuals: Midjourney/DALL-E.",
        proj_ready: "On Orbit (Ready)",
        art_p: "Art with a Ukrainian soul. To understand, not just to stare. MVP ready for grants.",
        btn_open: "Open Hatch",
        alpha_h: "Digital Alphabet",
        alpha_p: "A new language of communication. A surreal take on reality. Live at altctrdel.xyz",
        btn_launch: "Liftoff",
        proj_dev: "In Hangar (Dev)",
        ssrm_p: "The Mathematics of Relationships. Game theory model for saving marriages. Awaiting Professor Batabyal's verdict.",
        btn_check: "Check Status",
        sport_h: "Project \"Phys-Ed\"",
        sport_p: "Pass your tests online while we code between blackouts. Student sports without the pain.",
        btn_dev: "Assembling",
        dream_title: "OUR DREAM",
        dream_p: "SSRM.BAR — a virtual bar where drinks reveal hidden desires. Complex. Expensive. Inevitable.",
        support_link: "Buy the crew a coffee or the AI a donut",
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
