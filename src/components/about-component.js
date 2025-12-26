import { i18n } from "../i18n/main-i18n.js";
import { profile } from "../data/profile-data.js";
import { Skills } from "./skills-component.js";

export const About = () => {
    // Obtém o perfil correto para o idioma atual
    const currentLang = i18n.getCurrentLang();
    const currentProfile = profile[currentLang] || profile.en;
    
    return `
        <section id="about">
            <h2>${i18n.get("about.title")}</h2>

            <div class="grid-2">
                <div>
                    <p style="font-size: 1.1rem; margin-bottom: 2rem;">
                        ${i18n.get("about.summary")}
                    </p>

                    <div style="display: flex; gap: 1rem; align-items: center;">
                        <a href="${currentProfile.resumeLink}" target="_blank" class="btn">
                            <i data-lucide="file-text"></i> ${i18n.get("about.resume")}
                        </a>

                        <a href="#certifications" class="btn secondary">
                            <i data-lucide="award"></i> ${i18n.get("about.certs_btn")}
                        </a>
                    </div>
                </div>

                <div id="certifications" class="card">
                    <h3 style="margin-bottom: 1rem;">
                        ${i18n.get("about.certs_title")}
                    </h3>

                    <ul style="list-style: none;">
                        ${currentProfile.certs.map(c => `
                            <li style="margin-bottom: 0.8rem; display: flex; align-items: center; gap: 0.5rem;">
                                <i data-lucide="check-circle" style="width: 16px; color: var(--accent);"></i>
                                <a href="${c.link}" style="color: var(--text-main); text-decoration: none; border-bottom: 1px dotted var(--text-muted);">
                                    ${c.name}
                                </a>
                            </li>
                        `).join("")}
                    </ul>
                </div>
            </div>
        </section>
        ${Skills()}
    `;
};