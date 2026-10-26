# CodeBloom Landing Page — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Landing page estática em pt-BR para vender o curso CodeBloom (programação gamificado, Taxonomia de Bloom, 12+), com checkout via Stripe payment links.

**Architecture:** 3 arquivos estáticos na raiz (index.html, style.css, script.js), sem build, sem framework, sem backend. GitHub Pages serve como está. Reveal-on-scroll via IntersectionObserver como enhancement (noscript-safe).

**Tech Stack:** HTML5 semântico, CSS puro (custom properties, grid/flex), JS vanilla (IntersectionObserver).

**Spec:** `docs/superpowers/specs/2026-10-26-codebloom-landing-design.md`

## Global Constraints

- Idioma: pt-BR (`<html lang="pt-BR">`). Todo o copy em português.
- Zero build, zero dependências, zero analytics/tracking/cookies.
- Links de checkout: placeholders `#checkout-mensal` e `#checkout-vitalicio` com `target="_blank" rel="noopener"`.
- Noscript-safe: `<html>` começa com `class="no-js"` (removida pelo script.js); CSS garante `.reveal` visível sob `html.no-js`.
- Paleta híbrida: seções claras (hero, depoimentos, preços, FAQ, CTA final) + seção escura (trilha Bloom).
- Garantias/reembolsos: seguir o CDC (Código de Defesa do Consumidor) — copy explícito.
- Course facts (m0042): curso do zero, sem experiência prévia; linguagens TypeScript + JavaScript; roadmap "Em breve" de outros cursos em outras linguagens para quem já sabe programar.
- Preços: Mensal R$ 97/mês; Vitalício R$ 997 pagamento único.
- Sem framework de testes: verificação manual via navegador (passos com `python3 -m http.server` + checks listados).
- Commits após cada task; mensagens `feat:`/`style:`/`test:` em inglês simples, coerentes com o repo.

---

### Task 1: `index.html` — estrutura e conteúdo completo

**Files:**
- Create: `index.html`

**Interfaces:**
- Produces (usados pelas Tasks 2–3): IDs de seção `#hero`, `#depoimentos`, `#trilha`, `#precos`, `#faq`, `#cta-final`; classes `.reveal` (cards de scroll-reveal), `.bloom-level` (6 cards da escada), `.plan-card` (2 planos), `.checkout-btn` (botões Stripe).

- [x] **Step 1: Escrever o `index.html` completo**

Estrutura semântica, na ordem (todo o copy já definitivo — não inventar texto novo na hora):

```html
<!DOCTYPE html>
<html lang="pt-BR" class="no-js">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CodeBloom — Curso de Programação Gamificado para jovens a partir de 12 anos</title>
  <meta name="description" content="CodeBloom: curso de programação gamificado do zero ao profissional, baseado na Taxonomia de Bloom. TypeScript e JavaScript, a partir de 12 anos.">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header id="hero" class="section section-light">
    <nav class="nav">
      <span class="logo">🌱 CodeBloom</span>
      <a class="nav-cta" href="#precos">Ver planos</a>
    </nav>
    <div class="hero-content">
      <h1>Seu filho aprende a programar do zero ao profissional — jogando.</h1>
      <p>CodeBloom é o curso de programação gamificado com metodologia real: a Taxonomia de Bloom. A partir de 12 anos, em TypeScript e JavaScript, sem experiência prévia.</p>
      <a class="checkout-btn btn-primary" href="#precos">Quero inscrever meu filho</a>
    </div>
    <div class="hero-teaser reveal" aria-hidden="true">
      <!-- teaser gamificado: 6 mini-badges emoji com os ranks -->
      <span>🌱 Iniciante</span><span>🌿 Explorador</span><span>⚔️ Aventureiro</span>
      <span>🔍 Estrategista</span><span>🛡️ Guardião</span><span>👑 Mestre</span>
    </div>
  </header>

  <section id="depoimentos" class="section section-light">
    <h2>Famílias que já começaram a jornada</h2>
    <div class="cards-3">
      <!-- 3 depoimentos placeholder; substituir por reais depois -->
      <figure class="testimonial reveal"><blockquote>"Meu filho de 13 anos pediu para continuar depois da primeira quest."</blockquote><figcaption>— Pai de aluno (placeholder)</figcaption></figure>
      <figure class="testimonial reveal"><blockquote>"Do zero para escrever código de verdade em semanas. A metodologia fez sentido."</blockquote><figcaption>— Mãe de aluna (placeholder)</figcaption></figure>
      <figure class="testimonial reveal"><blockquote>"A trilha de evolução motiva. É o único 'jogo' que eu aprovo."</blockquote><figcaption>— Responsável (placeholder)</figcaption></figure>
    </div>
  </section>

  <section id="trilha" class="section section-dark">
    <h2>A Trilha CodeBloom — 6 quests, 6 níveis de aprendizado</h2>
    <p class="section-sub">Cada quest segue um nível da Taxonomia de Bloom: metodologia reconhecida, progressão de verdade.</p>
    <div class="bloom-ladder">
      <!-- 6 .bloom-level, um por nível; nth-child posiciona degraus -->
      <article class="bloom-level reveal">
        <span class="bloom-rank">🌱 Iniciante</span>
        <h3>1. Lembrar</h3>
        <p>Lógica, algoritmos e pseudocódigo — a base de tudo.</p>
        <div class="xp-bar" data-xp="20"></div>
      </article>
      <article class="bloom-level reveal">
        <span class="bloom-rank">🌿 Explorador</span><h3>2. Entender</h3>
        <p>O primeiro código real: HTML e JavaScript.</p>
        <div class="xp-bar" data-xp="35"></div>
      </article>
      <article class="bloom-level reveal">
        <span class="bloom-rank">⚔️ Aventureiro</span><h3>3. Aplicar</h3>
        <p>Projetos práticos e primeiros frameworks.</p>
        <div class="xp-bar" data-xp="50"></div>
      </article>
      <article class="bloom-level reveal">
        <span class="bloom-rank">🔍 Estrategista</span><h3>4. Analisar</h3>
        <p>Análise de requisitos e versionamento com Git.</p>
        <div class="xp-bar" data-xp="65"></div>
      </article>
      <article class="bloom-level reveal">
        <span class="bloom-rank">🛡️ Guardião</span><h3>5. Avaliar</h3>
        <p>Arquitetura, revisão de código e boas práticas.</p>
        <div class="xp-bar" data-xp="80"></div>
      </article>
      <article class="bloom-level reveal">
        <span class="bloom-rank">👑 Mestre</span><h3>6. Criar</h3>
        <p>Projeto final e deploy de um portfólio profissional.</p>
        <div class="xp-bar" data-xp="100"></div>
      </article>
    </div>
  </section>

  <section id="precos" class="section section-light">
    <h2>Escolha o plano da jornada</h2>
    <div class="cards-2">
      <article class="plan-card reveal">
        <h3>Mensal</h3>
        <p class="price">R$ 97<span>/mês</span></p>
        <ul>
          <li>Acesso completo à trilha</li>
          <li>Cancele quando quiser</li>
        </ul>
        <a class="checkout-btn" href="#checkout-mensal" target="_blank" rel="noopener">Assinar mensal</a>
      </article>
      <article class="plan-card plan-featured reveal">
        <h3>Vitalício</h3>
        <p class="price">R$ 997<span>pagamento único</span></p>
        <ul>
          <li>Acesso para sempre</li>
          <li>Todas as atualizações futuras</li>
        </ul>
        <a class="checkout-btn btn-primary" href="#checkout-vitalicio" target="_blank" rel="noopener">Garantir vitalício</a>
      </article>
    </div>
    <p class="trust">🔒 Pagamento seguro via Stripe · Garantias e reembolsos conforme o Código de Defesa do Consumidor (CDC), respeitando o tempo de serviço oferecido e utilizado.</p>
  </section>

  <section id="faq" class="section section-light">
    <h2>Perguntas de pais e responsáveis</h2>
    <!-- 5 details/summary, um por pergunta; + 1 "Em breve" -->
    <details class="reveal"><summary>A partir de que idade?</summary><p>O CodeBloom foi desenhado para jovens a partir de 12 anos.</p></details>
    <details class="reveal"><summary>Precisa de experiência prévia?</summary><p>Não. O curso começa do zero absoluto: lógica, algoritmos e pseudocódigo antes do primeiro código.</p></details>
    <details class="reveal"><summary>Quais linguagens meu filho vai aprender?</summary><p>TypeScript e JavaScript — do zero ao profissional, incluindo projetos, frameworks e deploy.</p></details>
    <details class="reveal"><summary>Eu consigo acompanhar a evolução?</summary><p>Sim. A trilha de quests e níveis de XP mostra exatamente em que nível da Taxonomia de Bloom seu filho está.</p></details>
    <details class="reveal"><summary>E se não funcionar para a gente?</summary><p>Garantias e reembolsos seguem estritamente o Código de Defesa do Consumidor, respeitando o tempo de serviço oferecido e utilizado.</p></details>
    <details class="reveal"><summary>Em breve: outros cursos</summary><p>Para quem já sabe programar mas quer expertise em uma linguagem específica, outros cursos estão a caminho.</p></details>
  </section>

  <section id="cta-final" class="section section-light">
    <h2>Pronto para começar a jornada?</h2>
    <div class="cards-2">
      <a class="checkout-btn" href="#checkout-mensal" target="_blank" rel="noopener">Mensal — R$ 97/mês</a>
      <a class="checkout-btn btn-primary" href="#checkout-vitalicio" target="_blank" rel="noopener">Vitalício — R$ 997</a>
    </div>
  </section>

  <footer class="footer">
    <span class="logo">🌱 CodeBloom</span>
    <a href="mailto:contato@codebloom.dev">contato@codebloom.dev</a>
    <a href="#termos">Termos</a> · <a href="#privacidade">Privacidade</a>
  </footer>

  <script src="script.js" defer></script>
</body>
</html>
```

Nota: `#termos`/`#privacidade` são placeholders de âncora (como os de checkout) — páginas jurídicas ficam fora do escopo da spec.

- [x] **Step 2: Smoke-check no navegador**

```bash
python3 -m http.server 8000 --directory . &
```
Abrir `http://localhost:8000` — conteúdo visível (sem CSS ainda, mas estrutura legível). Matar o servidor.

- [x] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat: index.html com estrutura e copy da landing CodeBloom"
```

---

### Task 2: `style.css` — tema, escada de Bloom, responsivo, animações

**Files:**
- Create: `style.css`

**Interfaces:**
- Consumes: classes/IDs do Task 1 (`section-light`, `section-dark`, `.reveal`, `.bloom-level`, `.xp-bar`, `.plan-card`, `.checkout-btn`, `.bloom-ladder`, `.cards-3`, `.cards-2`, `.nav`, `.hero-*`, `.footer`, `details`).
- Produces: estado inicial `.reveal` invisível + classe `.reveal.visible` aplicada pelo JS da Task 3; `.xp-bar::before` com largura via `data-xp` (`width: calc(var(--xp) * 1%)` com `--xp` setado por CSS `nth-child`).

- [x] **Step 1: Escrever o `style.css`**

Pontos-chave (valores concretos, não abstratos):

- Custom properties: `--bg-light: #faf9f6`, `--bg-dark: #12122b` (azul-noite quest), `--accent: #4caf50` (verde), `--gold: #d4a017` (dourado nível 6), texto claro `#1f2430` / escuro `#eef`.
- Cores por nível `.bloom-level:nth-child(1..6)`: borda/barra verde → lima → amarelo → laranja → âmbar → dourado (`--lvl` por nth-child).
- Escada: `.bloom-level` com `margin-left` incremental (`nth-child(n)` desloca `calc((n - 1) * 6%)`); `@media (max-width: 720px) { .bloom-level { margin-left: 0 } }` empilha.
- `.bloom-ladder { position: relative }` + `::before` linha vertical central (2px, gradiente verde→dourado) atrás dos cards.
- `.xp-bar::before { width: calc(var(--xp) * 1%) }` — `--xp` vem de `.bloom-level:nth-child(n) { --xp: 20/35/50/65/80/100 }`.
- Reveal: `.reveal { opacity: 0; transform: translateY(24px); transition: opacity .6s ease, transform .6s ease } .reveal.visible { opacity: 1; transform: none }`.
- **Noscript-safe:** dentro de `@media (scripting: none)` OU fallback: `html.no-js .reveal { opacity: 1; transform: none }` (Task 3 remove a classe `no-js` antes de registrar o observer). No JS que seta: `.visible` via observer.
- Botões: `.checkout-btn` pílula; `.btn-primary` verde com hover escurecido.
- Mobile-first: grid das seções com `grid-template-columns: 1fr` e `auto-fit`/`repeat(auto-fit, minmax(240px, 1fr))` para cards.
- Scroll suave: `html { scroll-behavior: smooth }` (progressive enhancement; Task 3 é redundância de UX já coberta aqui — manter ambas é barato).

- [x] **Step 2: Verificação visual**

```bash
python3 -m http.server 8000 --directory . &
```
No navegador: hero claro, trilha escura com 6 cards em escada, botões estilizados, XP bars. DevTools: 375px — escada empilhada. Matar o servidor.

- [x] **Step 3: Commit**

```bash
git add style.css
git commit -m "style: tema claro/escuro, escada de Bloom, XP bars, responsivo, reveal"
```

---

### Task 3: `script.js` — reveal on scroll + fallback

**Files:**
- Create: `script.js`

**Interfaces:**
- Consumes: `.reveal` (Task 2) — aplica `.visible` ao entrar no viewport.
- Produces: nada consumido por outros arquivos.

- [x] **Step 1: Escrever o `script.js`**

```js
// Reveal on scroll (enhancement — sem JS, conteúdo visível via .no-js fallback no CSS)
const html = document.documentElement;
html.classList.remove('no-js');

const io = new IntersectionObserver((entries) => {
  for (const e of entries) {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target); // revela uma vez só
    }
  }
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
```

(CSS do Task 2 deve setar `html.no-js .reveal { opacity: 1; transform: none }` — o `<html>` ganha `class="no-js"` no Task 1? **Não** — ajuste no Task 3: `document.documentElement.classList.add('no-js')` deve rodar como primeira linha inline ANTES do CSS? Errado para estático. Correção aplicada ao plano: Task 1 inclui `<html lang="pt-BR" class="no-js">` e o CSS (Task 2) tem o fallback `html.no-js .reveal`. Este script remove `no-js` no load. Executor: garantir os três pontos consistentes.)

- [x] **Step 2: Verificar comportamento**

```bash
python3 -m http.server 8000 --directory . &
```
- Scrollar até a trilha: cards revelam em cascata.
- DevTools → "Disable JavaScript" + reload: todo conteúdo visível (fallback `no-js`).
Matar o servidor.

- [x] **Step 3: Commit**

```bash
git add script.js index.html
# index.html pode ter o ajuste class="no-js" do Step 1 desta task
git commit -m "feat: reveal on scroll via IntersectionObserver com fallback no-js"
```

---

### Task 4: Testes manuais finais (checklist da spec, seção 6)

**Files:**
- Modify: nenhum (verificação; correções inline se algo falhar)

- [x] **Step 1: Rodar o checklist completo da spec**

```bash
python3 -m http.server 8000 --directory . &
```
Checklist (spec §6):
1. Abrir `http://localhost:8000`.
2. Clicar em TODOS os links/âncoras: nav CTA, hero CTA, 2 botões de preços, 2 do CTA final, mailto e âncoras do footer, summaries do FAQ.
3. DevTools 375px e 768px: empilhamento, escada vira pilha, sem overflow horizontal.
4. Confirmar scroll-reveal em cascata na trilha.
5. JS desligado: conteúdo 100% visível.

- [x] **Step 2: Corrigir o que falhar e commit (se houver correção)**

```bash
git add -A && git commit -m "fix: ajustes do checklist manual da spec"
```
(Se nada falhar: `git commit --allow-empty -m "test: checklist manual da spec aprovado"` — ou pular commit.)

---

### Task 5: Deploy GitHub Pages (adiado até user indicar remote)

**Files:**
- Modify: nenhum arquivo local — é configuração do repo remoto.

- [x] **Step 1: Esperar o usuário indicar o repo remoto**

O usuário já decidiu GitHub Pages (m0026). Quando o remote existir:

```bash
git remote add origin <URL_DO_USER>   # usuário fornece
git push -u origin main
```
- Settings → Pages → Source: `main` branch, `/ (root)`. Página em `https://<user>.github.io/<repo>/`.

- [x] **Step 2: Smoke-check da URL pública**

Abrir a URL publicada, repetir item 2 do Task 4 (links/âncoras).

## Self-Review (executado ao escrever o plano)

- **Cobertura da spec:** §3.1–3.7 → Tasks 1–2 ✔; §2 (JS mínimo) → Task 3 ✔; §5 edge cases (noscript, placeholders, mobile) → Tasks 2–4 ✔; §6 testes → Task 4 ✔; §8.5 deploy → Task 5 ✔. Fora de escopo respeitado (sem analytics, sem links Stripe reais).
- **Placeholders:** os únicos "placeholders" são os deliberados da spec (depoimentos, `#checkout-*`, âncoras jurídicas) — intencionais e documentados.
- **Consistência:** `.reveal`/`.visible`/`no-js` e nomes de classes consistentes entre Tasks 1–3; o ajuste `class="no-js"` no `<html>` está documentado em Task 1 (adicionar ao escrever o arquivo) — executor deve aplicá-lo lá, não no Task 3.
