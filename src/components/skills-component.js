import { i18n } from "../i18n/main-i18n.js";
import { skills } from "../data/skills-data.js";

export const Skills = () => {
    // Obtém o idioma atual e pega as skills corretas
    const currentLang = i18n.getCurrentLang();
    const currentSkills = skills[currentLang] || skills.en;
    
    return `
        <section id="skills">
            <h2>${i18n.get("skills.title")}</h2>

            <div class="grid-3">
                ${currentSkills.map(cat => `
                    <div class="card">
                        <h3 style="margin-bottom: 1rem; color: var(--accent);">
                            ${cat.category}
                        </h3>

                        <div style="display: flex; flex-wrap: wrap;">
                            ${cat.items.map(item => `
                                <span class="skill-tag">${item}</span>
                            `).join("")}
                        </div>
                    </div>
                `).join("")}
            </div>
        </section>
    `;
};