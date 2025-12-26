import { Router } from './router.js';
import { i18n } from "./i18n/main-i18n.js"
//import { initPointConstellationTheme } from './Themes/index-themes.js';
import { initPointRandomTheme } from './Themes/index-themes.js';

const app = document.getElementById('app');
const router = new Router(app);

const LANG_LABELS = {
    en: 'EN',
    pt: 'PT',
    es: 'ES',
    zh: '中文'
};

// 1. Router
router.init();

// 2. Language UI
const langBtn = document.getElementById('lang-toggle');

function updateLangUI() {
    const current = i18n.getCurrentLang();

    langBtn.textContent = LANG_LABELS[current];

    document.querySelectorAll('[data-i18n]').forEach(el => {
        el.textContent = i18n.get(el.dataset.i18n);
    });

    document.querySelectorAll('.lang-menu li').forEach(li => {
        li.classList.toggle('active', li.dataset.lang === current);
    });
}

// menu suspenso
document.querySelectorAll('.lang-menu li').forEach(item => {
    item.addEventListener('click', (e) => {
        e.stopPropagation();

        const lang = item.dataset.lang;
        if (lang === i18n.getCurrentLang()) return;

        i18n.setLang(lang);
        updateLangUI();
        router.navigate();
    });
});

// inicial
updateLangUI();

// 3. Theme
//initPointConstellationTheme();
initPointRandomTheme();

// remove foco ao clicar fora
document.addEventListener('click', (e) => {
    if (!e.target.closest('.lang-wrapper')) {
        document.activeElement.blur();
    }
});

// ================================
// Mobile menu basic toggle (functional only)
// ================================
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        navLinks.classList.toggle('open');
    });

    document.addEventListener('click', () => {
        navLinks.classList.remove('open');
    });

    navLinks.addEventListener('click', (e) => {
        e.stopPropagation();
    });
}