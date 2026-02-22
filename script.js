const translations = {
    ua: {
        slogan: "HUMAN + AI = SPACE",
        mission: "Сімейна лабораторія. Лагодимо те, що не зламане, і ламаємо стереотипи.",
        crew: "Хто ми",
        family_h: "Сім'я",
        family_p: "Тато. Мама. Син. Різні погляди — спільні цінності. Вважаємо, що в наш час важливіше чинити, ніж викидати. Стосунки, ідеї, красу — все можна відремонтувати.",
        ai_h: "ШІ-партнери",
        ai_p: "ШІ для нас — не інструменти, а партнери. Кожен зі своєю роллю: Gemini думає стратегічно. Claude будує і кодить. ElevenLabs дає голос. Grok провокує і штовхає вперед. Nana Banana і Veo створюють візуальні світи.",
        proj_ready: "Готово",
        art_p: "Мистецтво з українською душею. Розуміти, а не просто дивитися. Живий MVP, готовий до грантів.",
        btn_open: "Відкрити люк",
        alpha_h: "Цифровий Алфавіт",
        alpha_p: "Нова мова комунікації. Сюрреалістичний погляд на реальність. Сайт altctrdel.xyz",
        btn_launch: "На старт",
        proj_dev: "В процесі",
        ssrm_h: "Математика стосунків",
        ssrm_p: "Математика стосунків. Динамічна модель для збереження шлюбів. Чекаємо на вердикт Професора.",
        btn_check: "Побачити візуалізацію",
        sport_h: "Проєкт \"Фіз-Ра\"",
        sport_p: "Складай тести онлайн, поки ми кодимо між відключеннями світла. Студентський спорт без болю.",
        btn_dev: "У збірці",
        dream_title: "Мрія",
        dream_p: "З цього все почалося. sovet.bar — інтерактивний бар де тебе просто вислухають. Безкоштовно. ШІ-бармен готовий говорити — а вибір напитку розкаже про твій настрій більше ніж ти думаєш. І якщо захочеш — він може стати свахою. Не Тіндер. Краще. 75% звернень до психологів — це просто потреба бути почутим. Ми зробимо це цивілізовано.",
        support_link: "Пригостити екіпаж кавою, а ШІ — плюшкою",
        footer: "Це тільки початок. Гальма вигадали боягузи."
    },
    en: {
        slogan: "HUMAN + AI = SPACE",
        mission: "Family Lab. Fixing what ain't broken and breaking stereotypes.",
        crew: "Who We Are",
        family_h: "The Family",
        family_p: "Dad, Mom, Son. Different views — shared values. We believe it's better to repair than replace. Relationships, ideas, beauty — everything can be fixed.",
        ai_h: "AI Partners",
        ai_p: "AI are not tools for us — they are partners. Each with their own role: Gemini thinks strategically. Claude builds and codes. ElevenLabs gives voice to the mission. Grok provokes and drives forward. Nana Banana and Veo create visual worlds.",
        proj_ready: "Ready",
        art_p: "Art with a Ukrainian soul. To understand, not just to stare. MVP ready for grants.",
        btn_open: "Open Hatch",
        alpha_h: "Digital Alphabet",
        alpha_p: "A new language of communication. A surreal take on reality. Live at altctrdel.xyz",
        btn_launch: "Liftoff",
        proj_dev: "In Progress",
        ssrm_h: "Relationship Mathematics",
        ssrm_p: "The Mathematics of Relationships. A dynamic model for saving marriages. Awaiting the Professor's verdict.",
        btn_check: "See Visualization",
        sport_h: "Project \"Phys-Ed\"",
        sport_p: "Pass your tests online while we code between blackouts. Student sports without the pain.",
        btn_dev: "Assembling",
        dream_title: "The Dream",
        dream_p: "This is where it all began. sovet.bar — an interactive bar where you will simply be heard. For free. The AI bartender is ready to talk — and your drink choice will reveal more about your mood than you think. And if you want — he might just play matchmaker. Not Tinder. Better. 75% of therapy visits are simply a need to be heard. We'll do it with dignity.",
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
    document.getElementById('t-ssrm-h').innerText = translations[lang].ssrm_h;
    document.getElementById('t-ssrm-p').innerText = translations[lang].ssrm_p;
    document.getElementById('t-btn-check').innerText = translations[lang].btn_check;
    
    document.getElementById('t-sport-h').innerText = translations[lang].sport_h;
    document.getElementById('t-sport-p').innerText = translations[lang].sport_p;
    document.getElementById('t-btn-dev').innerText = translations[lang].btn_dev;

    document.getElementById('t-dream-title').innerText = translations[lang].dream_title;
    document.getElementById('t-dream-p').innerText = translations[lang].dream_p;
    document.getElementById('t-support-link').innerText = translations[lang].support_link;
    document.getElementById('t-footer').innerText = translations[lang].footer;

   const buttons = document.querySelectorAll('.lang-switch button');
    buttons.forEach(btn => btn.classList.remove('active-lang'));
    event.target.classList.add('active-lang');
}
