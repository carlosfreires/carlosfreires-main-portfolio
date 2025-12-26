import { i18n } from "../i18n/main-i18n.js";
import { projects } from "../data/projects-data.js";

export const Projects = () => {
    const lang = i18n.getCurrentLang();
    const currentProjects = projects[lang] || projects.en;

    return `
    <section id="projects">
        <h2>${i18n.get("projects.title")}</h2>

        <div class="grid-3">
            ${currentProjects.map(p => `
                <div class="card" style="display: flex; flex-direction: column;">
                    <h3 style="margin-bottom: 0.5rem;">${p.title}</h3>

                    <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1rem; flex-grow: 1;">
                        ${p.desc}
                    </p>

                    <div style="margin-bottom: 1.5rem;">
                        ${p.tech.map(t => `
                            <span class="skill-tag" style="background: rgba(255,255,255,0.05); color: var(--text-muted);">
                                ${t}
                            </span>
                        `).join("")}
                    </div>

                    <div style="display: flex; gap: 1rem;">
                        ${p.repo ? `
                            <a href="${p.repo}" target="_blank" class="btn secondary" style="padding: 0.5rem 1rem; font-size: 0.8rem;">
                                <i data-lucide="github"></i> ${i18n.get("projects.view_code")}
                            </a>
                        ` : ""}

                        ${p.live ? `
                            <a href="${p.live}" target="_blank" class="btn" style="padding: 0.5rem 1rem; font-size: 0.8rem;">
                                <i data-lucide="external-link"></i> ${i18n.get("projects.view_live")}
                            </a>
                        ` : ""}
                    </div>
                </div>
            `).join("")}
        </div>
    </section>
    `;
};