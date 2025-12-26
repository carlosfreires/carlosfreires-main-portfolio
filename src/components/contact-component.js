import { i18n } from "../i18n/main-i18n.js";
import { contact } from "../data/contact-data.js";

export const Contact = () => {
    const lang = i18n.getCurrentLang();
    const data = contact[lang] || contact.en;

    return `
        <section id="contact">
            <h2>${i18n.get("nav.contact")}</h2>

            <div class="grid-2" style="max-width: 800px;">
                
                <!-- EMAIL CARD -->
                <a
                    href="${data.email.link}"
                    class="card contact-card"
                >
                    <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.5rem;">
                        <i data-lucide="mail"></i>
                        <h3>${data.email.label}</h3>
                    </div>

                    <p>${data.email.message}</p>
                    <span>${data.email.value}</span>
                </a>

                <!-- WHATSAPP CARD -->
                <a
                    href="${data.whatsapp.link}"
                    target="_blank"
                    rel="noopener"
                    class="card contact-card"
                >
                    <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.5rem;">
                        <i data-lucide="message-circle"></i>
                        <h3>${data.whatsapp.label}</h3>
                    </div>

                    <p>${data.whatsapp.message}</p>
                    <span>${data.whatsapp.value}</span>
                </a>

            </div>
        </section>
    `;
};
