# Carlos Freires — Main Portfolio

Portfólio profissional desenvolvido para apresentar projetos e habilidades técnicas, com foco em **performance, acessibilidade, design e JavaScript puro**.

Este projeto não utiliza frameworks, reforçando domínio profundo da **plataforma web nativa**, arquitetura limpa e controle total sobre comportamento, estilo e performance.

---

## ✨ Visão Geral

O portfólio foi projetado como uma **Single Page Application (SPA-like)** utilizando apenas tecnologias web padrão:

- HTML semântico
- CSS moderno (tokens, glassmorphism, gradientes, responsividade avançada)
- JavaScript Vanilla (sem dependências externas obrigatórias)

O foco está em:

- Experiência do usuário
- Código legível, organizado e escalável
- Facilidade de manutenção e evolução

---

## 🧠 Conceitos e Filosofia

- **Sem frameworks por escolha**, não por limitação  
- Arquitetura orientada a componentes
- Design system próprio via CSS Tokens
- Separação clara de responsabilidades
- Acessibilidade e responsividade como prioridade.

---

## 🧱 Estrutura do Projeto

```text
├── assets/
├── src/
│   ├── components/
│   │   ├── about-component.js
│   │   ├── contact-component.js
│   │   ├── home-component.js
│   │   ├── index-components.js
│   │   ├── projects-component.js
│   │   └── skills-component.js
│   ├── data/
│   │   ├── contact-data.js
│   │   ├── index-data.js
│   │   ├── profile-data.js
│   │   ├── projects-data.js
│   │   └── skills-data.js
│   ├── i18n/
│   │   ├── en-i18n.js
│   │   ├── es-i18n.js
│   │   ├── main-i18n.js
│   │   ├── pt-i18n.js
│   │   └── zh-i18n.js
│   ├── Themes/
│   │   ├── index-themes.js
│   │   ├── point-constellation-theme.js
│   │   └── point-random-theme.js
│   ├── main.js
│   └── router.js
├── index.html
├── README.md
└── style.css
```

## 🧩 Componentes Principais

### 🔹 Navbar (Glass Navigation)

- Barra fixa com efeito glassmorphism

- Menu responsivo com dropdown animado

- Seletor de idioma com menu suspenso

- Totalmente acessível (focus-visible, keyboard friendly)

### 🔹 Language Switcher (i18n)

- Sistema próprio de internacionalização

- Troca dinâmica de idioma sem reload

- Estrutura extensível para novos idiomas

### 🔹 Router (SPA)

- Navegação por rotas sem recarregar a página

- URLs limpas

- Carregamento dinâmico de conteúdo

🔹 Background Effects

- Canvas animado em background

- Glow dinâmico seguindo o cursor

- Respeita prefers-reduced-motion

## 🎨 Estilo & Design System

O projeto utiliza um Design System próprio, baseado em CSS Variables (Tokens):

- Tokens de Espaçamento

- Tokens de Cores

### Conceitos Visuais

- Glassmorphism controlado

- Gradientes sutis e neon refinado

- Tipografia moderna (Inter + JetBrains Mono)

- Animações suaves e não intrusivas

## 📱 Responsividade

- Mobile-first mindset

- Layout fluido com clamp() e auto-fit

- Grid adaptativo

- Header, menus e footer otimizados para telas pequenas

---

## ♿ Acessibilidade

- :focus-visible bem definido

- Navegação via teclado

- Contraste adequado

- Suporte a prefers-reduced-motion

---

## 🚀 Como Usar o Projeto

### 🔽 Clonar o repositório

```bash
git clone https://github.com/carlosfreires/carlosfreires-main-portfolio.git
```

### 📂 Entrar na pasta

```bash
cd carlosfreires-main-portfolio
```

▶️ Rodar localmente

Você pode abrir diretamente o index.html ou usar um servidor local simples:

```bash
# usando Node.js
npx serve
```

ou

```bash
# usando Python
python -m http.server
```

---

### 🍴 Fork do Projeto

1. Clique em Fork no GitHub

1. Clone o seu fork:

```bash
git clone https://github.com/carlosfreires/carlosfreires-main-portfolio.git
```

1. Crie uma branch:

```bash
git checkout -b feature/minha-feature
```

1. Commit e push:

```bash
git commit -m "Minha melhoria"
git push origin feature/minha-feature
```

---

## 🌐 Deploy

O projeto é compatível com:

- GitHub Pages

- Netlify

- Vercel

- Qualquer servidor estático

### GitHub Pages

1. Vá em Settings > Pages

2. Selecione a branch main

3. Pasta /root

4. Pronto 🎉

---

## 📄 Licença

Este projeto é de código aberto e está licenciado sob a MIT License. Sinta-se livre para se inspirar e colaborar!
