import { Home, About, Skills, Projects, Contact  } from './components/index-components.js';

export class Router {
    constructor(appElement) {
        this.app = appElement;
        this.routes = {
            '': Home,
            'home': Home,
            'about': About,
            'skills': Skills,
            'projects': Projects,
            'contact': Contact // () => `<section id="contact"><h2>Contact</h2><p class="card" style="display:inline-block">alex@example.com</p></section>`
        };
    }

    navigate() {
        // Get hash without the #
        const hash = window.location.hash.slice(1) || 'home';
        
        // Find renderer
        const renderer = this.routes[hash] || this.routes['home'];
        
        // Render
        this.app.innerHTML = renderer();
        
        // Re-initialize Icons and Animations
        window.lucide.createIcons();
        this.animateIn();
    }

    animateIn() {
        // GSAP transition for the new content
        gsap.fromTo("section", 
            { opacity: 0, y: 20 }, 
            { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
        );
    }

    init() {
        window.addEventListener('hashchange', () => this.navigate());
        this.navigate(); // Initial load
    }
}