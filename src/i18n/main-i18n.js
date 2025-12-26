import { en } from "./en-i18n.js";
import { pt } from "./pt-i18n.js";
import { es } from "./es-i18n.js";
import { zh } from "./zh-i18n.js";

// Dictionary centralizado
const translations = { en, pt, es, zh };

export class I18n {
    constructor() {
        this.lang = localStorage.getItem("lang") || "en";
    }

    get(key) {
        const keys = key.split(".");
        let value = translations[this.lang];
        keys.forEach(k => {
            value = value ? value[k] : key;
        });
        return value ?? key;
    }

    // ✅ NOVO — necessário para o menu suspenso
    setLang(lang) {
        if (!translations[lang]) return;
        this.lang = lang;
        localStorage.setItem("lang", lang);
    }

    // Mantido para compatibilidade (se quiser usar depois)
    toggle() {
        const order = ["en", "pt", "es", "zh"];
        const next = (order.indexOf(this.lang) + 1) % order.length;
        this.setLang(order[next]);
        return this.lang;
    }

    getCurrentLang() {
        return this.lang;
    }
}

// Singleton
export const i18n = new I18n();