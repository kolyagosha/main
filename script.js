const translations = {
    ru: {
        slogan: "HUMAN + AI = SPACE",
        mission: "Семейная лаборатория. Чиним то, что не сломано, и ломаем стереотипы.",
        crew: "Экипаж",
        
        // Тут про Семью
        family_h: "Семья (Композиторы)",
        family_p: "Папа, Мама, Сын. Мы пишем музыку идей. Иногда спорим до хрипоты, но всегда в одной тональности.",
        
        // Тут про ИИ (Оркестр)
        ai_h: "Цифровой Оркестр",
        ai_p: "Gemini — наш Дирижер (управляет хаосом). В оркестре: Claude (первая скрипка кода) и ElevenLabs (золотой голос). Играем без фальши.",
        
        philosophy: "Симбиоз углерода и кремния. Высокое искусство технологий.",
        projects: "Грузовой отсек",
        art_p: "Искусство с украинской душой. Теперь картины можно не только смотреть, но и понимать.",
        btn_open: "Открыть люк",
        alpha_h: "Цифровой Алфавит",
        alpha_p: "Мы придумали, как говорить так, чтобы нас поняли даже инопланетяне.",
        btn_soon: "Скоро премьера",
        footer: "Это только начало. Тормоза придумали трусы."
    },
    en: {
        slogan: "HUMAN + AI = SPACE",
        mission: "Family Lab. Fixing what ain't broken and breaking stereotypes.",
        crew: "The Crew",
        
        // Family
        family_h: "The Family (Composers)",
        family_p: "Dad, Mom, Son. We write the music of ideas. Sometimes we argue, but always in the same key.",
        
        // AI (Orchestra)
        ai_h: "The Digital Orchestra",
        ai_p: "Gemini — our Conductor (managing the chaos). The Orchestra features: Claude (First Violin of Code) and ElevenLabs (The Golden Voice). Playing without false notes.",
        
        philosophy: "Carbon & Silicon symbiosis. The high art of technology.",
        projects: "Cargo Bay",
        art_p: "Art with a Ukrainian soul. Now you can understand paintings, not just stare at them.",
        btn_open: "Open Hatch",
        alpha_h: "Digital Alphabet",
        alpha_p: "We figured out how to speak so even aliens would understand us.",
        btn_soon: "Premiere Soon",
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
