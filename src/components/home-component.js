import { i18n } from "../i18n/main-i18n.js";
import { profile } from "../data/profile-data.js";

export const Home = () => {
    // Obtém o idioma atual e o perfil correspondente
    const currentLang = i18n.getCurrentLang();
    const currentProfile = profile[currentLang] || profile.en;
    
    return `
        <section id="home" class="hero-section" class="hero-section hero--tall">
            <div>
                <p class="highlight" style="font-family: var(--font-code); margin-bottom: 1rem;">
                    ${i18n.get("home.greeting")}
                </p>

                <h1>
                    ${currentProfile.name}<br>
                    <span style="color: var(--text-muted); font-size: 0.6em">
                        ${i18n.get("home.role")}
                    </span>
                </h1>

                <p style="max-width: 500px; margin: 1.5rem 0; font-size: 1.1rem; color: var(--text-muted)">
                    ${i18n.get("home.desc")}
                </p>

                <div style="display: flex; gap: 1rem;">
                    <a href="#projects" class="btn">
                        ${i18n.get("home.cta")} <i data-lucide="arrow-right"></i>
                    </a>
                    <a href="#contact" class="btn secondary">
                        ${i18n.get("home.contact")}
                    </a>
                </div>
            </div>
        </section>
    `;
};