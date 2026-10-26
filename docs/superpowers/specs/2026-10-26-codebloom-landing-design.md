# CodeBloom — Landing Page de Venda (Design Spec)

**Data:** 2026-10-26
**Status:** Aprovado (brainstorming concluído)
**Caminho:** Arquitetural — spec → plano → implementação

## 1. Visão Geral

Landing page estática em pt-BR para venda do **CodeBloom**, curso de programação gamificado baseado na Taxonomia de Bloom, para alunos a partir de 12 anos. Página puramente estática (HTML/CSS/JS), zero backend, checkout via links de pagamento do Stripe. Hospedagem: GitHub Pages.

**Público da página:** pais/responsáveis decidem e compram; a criança consome. A página fala com os pais (confiança, pedagogia, segurança) e tem uma seção gamificada que empolga a criança.

## 2. Abordagem Técnica

- **3 arquivos na raiz do repo:** `index.html`, `style.css`, `script.js`.
- **Sem build step**, sem frameworks, sem node_modules. GitHub Pages serve como está.
- Escada de Bloom: HTML/CSS puro (grid + cores por nível).
- Botões de checkout: Stripe payment links colados direto no HTML. Até os links reais existirem, placeholders `#checkout-mensal` e `#checkout-vitalicio` (abrem em nova aba).
- JS mínimo: smooth scroll + reveal on scroll via IntersectionObserver. Sem analytics, tracking ou cookies.

## 3. Estrutura da Página (topo → rodapé)

### 3.1 Hero (claro)
Fala com os pais: CodeBloom — curso de programação gamificado com metodologia real (Taxonomia de Bloom), a partir de 12 anos, do zero ao profissional. CTA principal para a seção de preços. Teaser visual gamificado.

### 3.2 Prova social (claro)
3 cards de depoimentos (placeholders a substituir por depoimentos reais).

### 3.3 Trilha do curso — Escada de Bloom (seção escura, modo quest)
6 quests mapeadas nos 6 níveis de Bloom:

| Nível Bloom | Quest | Conteúdo |
|---|---|---|
| 1. Lembrar | 🌱 Iniciante | Lógica, algoritmos, pseudocódigo |
| 2. Entender | 🌿 Explorador | Primeiro código real (HTML/JS) |
| 3. Aplicar | ⚔️ Aventureiro | Projetos práticos, frameworks |
| 4. Analisar | 🔍 Estrategista | Análise de requisitos, versionamento (Git) |
| 5. Avaliar | 🛡️ Guardião | Arquitetura, revisão de código, boas práticas |
| 6. Criar | 👑 Mestre | Projeto final + deploy de portfólio profissional |

Visual: cada nível é um card com cor própria (verde → dourado), barra de XP estilizada, linha vertical conectando os níveis como trilha de evolução. Animação CSS: cards revelam ao scroll, cada um 1 degrau acima do anterior (escada literal). No mobile, empilha verticalmente.

### 3.4 Preços (claro)
Dois planos com botões Stripe (payment links):
- **Mensal:** R$ 97/mês
- **Vitalício:** R$ 997 (pagamento único)

Selos de garantia/segurança. Garantias e reembolsos seguem estritamente o Código de Defesa do Consumidor (CDC), respeitando o tempo de serviço oferecido/usado.

### 3.5 FAQ (claro)
Perguntas de pais:
- A partir de que idade? → 12 anos
- Precisa de experiência prévia? → Não, o curso começa do zero
- Quais linguagens? → TypeScript e JavaScript (curso do zero)
- Acompanhamento dos pais? → Sim (detalhar no copy)
- Garantia/reembolso? → Conforme CDC (item 3.4)

Roadmap: outros cursos em outras linguagens, para quem já sabe programar mas não tem expertise numa linguagem específica — exibir como "Em breve".

### 3.6 CTA final (claro)
Repetição dos 2 planos + botão Stripe.

### 3.7 Footer
Logo, contato, termos/privacidade.

## 4. Identidade Visual

- Nome: **CodeBloom** (jogo com Bloom).
- Paleta híbrida: seções claras (confiança: hero, depoimentos, FAQ, preços) + seção escura gamificada (trilha/quests).
- Polish fino será feito depois com o skill `impeccable` (passada pós-build).

## 5. Edge Cases

- JS desligado: conteúdo 100% visível (reveal é noscript-safe — animação é enhancement, não requisito).
- Sem links Stripe reais ainda: placeholders de âncora, não quebram nada.
- Mobile-first responsivo; escada de Bloom empilha no mobile.

## 6. Testes (manuais, sem framework)

1. Abrir `index.html` no navegador.
2. Clicar em todos os links/âncoras (CTAs, footer, FAQ).
3. DevTools: largura mobile — verificar empilhamento e responsividade.
4. Confirmar animação de scroll-reveal.
5. Testar com JS desligado — conteúdo visível.

## 7. Fora de Escopo

- Backend, auth, banco de dados.
- Analytics/tracking/cookies.
- Copiar links reais do Stripe (feitos "no momento oportuno" via Stripe CLI/MCP).
- Polish final (skill impeccable — passada futura).

## 8. Passos de Implementação

1. `index.html` — toda a estrutura semântica + conteúdo.
2. `style.css` — tema claro/escuro, escada de Bloom, responsivo, animações reveal.
3. `script.js` — smooth scroll + IntersectionObserver (reveal).
4. Testes manuais (seção 6).
5. Deploy GitHub Pages (quando o usuário indicar o repo remoto).
