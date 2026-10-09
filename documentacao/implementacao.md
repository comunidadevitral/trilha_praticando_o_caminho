# Plano de Implementação — Praticando o Caminho - Comunidade Vitral

## 1. Estrutura de Pastas da v2
```
src/
├── components/
│   ├── Header.astro
│   ├── Footer.astro
│   ├── NavDesktop.astro
│   ├── NavMobile.astro
│   ├── Button.astro
│   ├── Link.astro
│   ├── Card.astro
│   ├── Badge.astro
│   ├── ThemeToggle.astro
│   ├── Layout.astro
│   ├── SkipLink.astro
│   ├── Breadcrumb.astro
│   ├── StepCard.astro
│   ├── WeekPlan.astro
│   ├── ResourceList.astro
│   ├── VideoPlaceholder.astro
│   ├── AudioPlaceholder.astro
│   └── UI/
│       ├── typography.css
│       ├── reset.css
│       └── animations.css
├── content/
│   ├── steps/
│   │   ├── passo-1.md
│   │   ├── passo-2.md
│   │   └── ... (17 total)
│   ├── complementar.md
│   └── mapa.md
├── data/
│   └── passos.json (transformed for Astro consumption)
├── layouts/
│   └── Layout.astro
├── pages/
│   ├── index.astro
│   ├── passo-[id].astro
│   ├── complementar.astro
│   └── mapa.astro
├── styles/
│   ├── base.css
│   ├── tokens.css (migrated from original)
│   └── responsive.css
├── scripts/
│   └── (migrated from original if needed, ideally replaced by Astro built-ins)
└── env.d.ts
```

## 2. Estratégia de Conteúdo
- **Content Collections (MD/MDX)**: All 17 pasos, complementar.md, mapa.md will be stored as markdown files in `src/content/` with frontmatter for metadata (title, subtitle, etapa, status, semana, etc.)
- **Dados tipados**: The `passos.json` will be transformed into a TypeScript interface or imported as JSON data in `src/data/passos.json` for use in generating dynamic routes and page props.
- **Schemas Zod**: Not strictly necessary for this content-focused site, but we can define a Zod schema for validating the frontmatter of each markdown file if desired.
- **Content Mapping**: 
  - Frontmatter from original JSON's `medite.devocional`, `assista`, `aprofunde`, `pratique`, `organizese`, `para_comecar`, `ouca` fields will become markdown sections.
  - The `titulo`, `subtitulo`, `etapa`, `status`, `semana` become frontmatter fields.
  - Content is written in markdown with Astro components for UI elements (buttons, links, etc.) where needed.

## 3. Fases de Implementação

### Fase 1 — Fundação
- **Objetivo**: Setup do projeto Astro 6+ com Tailwind v4, configuração de tokens CSS e layout base.
- **Entregáveis**: 
  - Projeto Astro inicializado com template básico
  - Tokens CSS migrados para `src/styles/tokens.css` (ou integrados ao Tailwind config)
  - Layout base component (`src/layouts/Layout.astro`) com slot para conteúdo
  - Configuração do Tailwind para usar as cores, fontes, espaçamento do design system
  - Instalação de dependências essenciais: astro, @astrojs/tailwind, lucide-astro
- **Critérios de saída**: 
  - `npm run dev` funciona e mostra uma página em branco com layout aplicado
  - Tokens CSS estão sendo usados corretamente (verificar via inspect)

### Fase 2 — Shell
- **Objetivo**: Implementar componentes de shell (header, footer, navegação, tema).
- **Entregáveis**:
  - `Header.astro` com logo, navegação desktop, ThemeToggle
  - `Footer.astro` com informações da Comunidade Vitral
  - `NavDesktop.astro` e `NavMobile.astro` para navegação responsiva
  - `ThemeToggle.astro` que altera o atributo `data-etapa` no elemento html (ou classe no body)
  - Layout atualizado para incluir header e footer
  - Mobile menu funcionando (abrir/fechar)
- **Critérios de saída**:
  - Header e footer aparecem em todas as páginas
  - Navegação funciona para /, /complementar, /mapa
  - ThemeToggle muda entre Etapa 1 (amarela) e Etapa 2 (verde) visualmente
  - Menu mobile abre e fecha corretamente em telas < 769px

### Fase 2.5 — Página /design-system
- **Objetivo**: Criar uma página de documentação do design system para referência futura (opcional, mas útil).
- **Entregáveis**:
  - Página `/design-system.astro` que mostra todos os tokens, componentes e variações
  - Tabela de cores, tipografia, espaçamento, etc.
- **Critérios de saída**:
  - Página acessível e documenta visualmente o design system
  - Útil para desenvolvimento futuro e manutenção

### Fase 3 — Conteúdo
- **Objetivo**: Migrar o conteúdo markdown e setup de Content Collections.
- **Entregáveis**:
  - `src/content/steps/passo-[1-17].md` com frontmatter e conteúdo em markdown
  - `src/content/complementar.md` e `src/content/mapa.md`
  - Configuração do `content.config.ts` para definir a estrutura das collections
  - Criação de um componente `ContentDisplay.astro` que renderiza o markdown com componentes Astro para elementos customizados (botões, links, cards, etc.)
- **Critérios de saída**:
  - Conteúdo das páginas está sendo carregado corretamente do Content Collection
  - Frontmatter está acessível (título, subtitulo, etc.)
  - Markdown é renderizado com formatação básica (parágrafos, listas, etc.)

### Fase 4 — Páginas
- **Objetivo**: Criar as páginas reais usando os componentes e layouts.
- **Entregáveis**:
  - `src/pages/index.astro` (landing page)
  - `src/pages/passo-[id].astro` (páginas dinâmicas de passos)
  - `src/pages/complementar.astro`
  - `src/pages/mapa.astro`
  - Cada página usa o Layout e busca os dados apropriados:
    - Index: dados estáticos ou de uma collection especial
    - Passo: busca por ID na collection de steps
    - Complementar e Mapa: busca por slug fixo
  - Implementação de navegação entre passos (anterior/próximo) usando dados da collection
  - Indicadores de passo (X de Y) e status (aberto/em breve)
- **Critérios de saída**:
  - Todas as 19 páginas são acessíveis via rotas corretas
  - Conteúdo de cada passo corresponde ao original (verificar amostras)
  - Navegação entre passos funciona (clicar em "Próximo" vai para o próximo passo)
  - Indicadores de passo e status são exibidos corretamente

### Fase 5 — Formulário + Cloudflare D1
- **Objetivo**: Esta fase é **PULADA** pois não há formulários no projeto atual.
- **Entregáveis**: Nenhum
- **Critérios de saída**: Fase marcada como não aplicável

### Fase 6 — SEO, acessibilidade, performance
- **Objetivo**: Implementar melhorias de SEO, garantir acessibilidade e otimizar performance.
- **Entregáveis**:
  - **SEO**: 
    - Meta tags title e description dinâmicas baseadas no frontmatter
    - Open Graph tags (og:title, og:description, og:image) geradas
    - Sitemap.xml gerado automaticamente (`@astrojs/sitemap` ou custom)
    - Robots.txt adequado
    - JSON-LD para Website e BreadcrumbList
  - **Acessibilidade**:
    - Verificação de contraste em todas as combinações de cores
    - Skip link funcional (Ir para o conteúdo)
    - Navegação por teclado com ordem lógica
    - Labels ARIA onde aplicável (embora seja majoritariamente links e botões simples)
    - Suporte para prefers-reduced-motion (desativar animações se configurado)
    - Landmark elements (header, nav, main, footer) corretos
  - **Performance**:
    - Otimização de fontes via Astro Fonts API (self-hosting de Inter e Playfair Display)
    - Minificação de HTML, CSS, JS (built-in do Astro)
    - Lazy loading de componentes não-críticos (se aplicável)
    - Preload de fontes críticas
    - Uso de `<picture>` para imagens quando houver (atualmente só SVG e iframes)
    - Configuração de cache adequada em `astro.config.mjs`
- **Critérios de saída**:
  - Lighthouse ≥ 90 em todas as categorias (métrica intermediária)
  - Contraste de texto passa WCAG AA em todos os elementos testados
  - Nenhum erro de acessibilidade reportado pelo axe core em verificação manual
  - Sitemap.xml e robots.txt estão gerados e acessíveis

### Fase 7 — Testes, deploy, validação
- **Objetivo**: Preparar para deploy, executar testes finais e validar a migração.
- **Entregáveis**:
  - Build de produção funcionando (`npm run build`)
  - Deploy de teste no Cloudflare Pages (branch de preview)
  - Testes de links quebrados (usando ferramenta como linkinator ou similar)
  - Validação de paridade visual (ver seção 5.1 abaixo)
  - Documentação final de deploy e variáveis de ambiente
- **Critérios de saída**:
  - Site de preview está acessível e funcionando
  - Nenhum link quebrado interno
  - Build de produção não tem erros
  - Site é responsivo em múltiplos dispositivos (teste manual em chrome devtools)

#### 5.1 Validação de paridade visual (só migração/redesign)
Conforme Protocolo §D.5:
- **Fase 1 — Validação por componente**
  - Screenshot de cada componente (Header, Footer, Botão, Card, etc.) isolado no site original e no novo
  - Comparação lado-a-lace para verificar fidelidade
- **Fase 2 — Validação por página**
  - Após montar cada página (passo 1, passo 2, etc.), validar contra baseline original
  - Todos os breakpoints (360, 390, 768, 1024, 1440, 1920)
  - Todos os estados (padrão, hover, focus, active, disabled, em breve)
- **Fase 3 — Validação cruzada**
  - Navegar pelo site novo completo (início → passo 1 → passo 2 → ... → passo 17 → complementar → mapa)
  - Comparar fluxo de navegação com o antigo
  - Validar âncoras, links internos, links externos
- **Fase 4 — Validação de responsividade**
  - Testar em dispositivos reais ou simulados
  - Viewports: 360, 390, 768, 1024, 1440, 1920
  - Comparar com baseline correspondente
- **Fase 5 — Validação final**
  - Lighthouse (Performance, Acessibilidade, SEO, Best Practices) - alvo ≥ 95
  - Axe DevTools (verificar nenhuma violação de WCAG AA)
  - Validação de HTML/CSS (W3C) - passar sem erros
  - Teste em navegadores: Chrome, Firefox, Safari, Edge (versões estáveis atuais)

## 4. Estratégia do Formulário (SE houver)
Não aplicável - não há formulários no projeto.

## 5. Estratégia de Testes
- **Comandos de teste**:
  - `npm run dev` - desenvolvimento local
  - `npm run build` - build de produção
  - `npm run preview` - preview local do build
  - `npx @astrojs/check` - verificar TypeScript (se usado)
- **Viewports para teste**: 320px, 360px, 390px, 768px, 1024px, 1440px, 1920px (responsividade)
- **Teste de acessibilidade**: 
  - Uso do axe DevTools extension no Chrome/Firefox
  - Teste de navegação por teclado (Tab, Enter, Esc)
  - Verificação de contraste com ferramentas como WebAIM Contrast Checker
- **Teste de links**:
  - Uso do `npm linkinator` ou similar para verificar links internos e externos
  - Links externos marcados para revisão manual (não podemos automatizar o login em serviços externos)
- **Teste de performance**:
  - Lighthouse CI integrado ao pull request (opcional)
  - Teste manual com Lighthouse em chrome devtools
- **em migração: incluir fases de validação visual do Protocolo §D.5** - conforme descrito na seção 5.1 acima

## 6. Deploy
- **Repositório GitHub**: `comunidadevitral/trilha-praticando-o-caminho-v2`
- **Cloudflare Pages**: Nome do projeto: `trilha-praticando-o-caminho-v2`
- **Comando de build**: `npm run build`
- **Diretório de saída**: `dist/` (padrão do Astro)
- **Variáveis de ambiente**: Nenhuma necessária para este site estático (se houver integração futura com APIs, adicionar aqui)
- **Domínio**: `praticandocaminho.com.br` (ou subdomínio de preview durante desenvolvimento)
- **Setup no Cloudflare Pages**:
  - Conectar repositório GitHub
  - Configurar branch de produção (`main`)
  - Configurar comando de build: `npm run build`
  - Configurar diretório de saída: `dist`
  - Adicionar domínio customizado: `praticandocaminho.com.br`
  - Habilitar segurança HTTP/HSTS
  - Configurar redirects 301 (se necessário para migração de URLs antigas)

## 7. Definition of Done
- [ ] Todas as 19 páginas (17 passos + complementar + mapa) estão acessíveis e renderizando corretamente
- [ ] Navegação funcional entre passos (anterior/próximo) e indicadores de progresso (passo X de Y)
- [ ] Design responsivo validado em múltiplos viewports (mobile, tablet, desktop)
- [ ] Visual idêntico ao site original (paridade visual fiel) - validado através do processo de validação visual
- [ ] Lighthouse ≥ 95 em todas as categorias (Performance, Acessibilidade, SEO, Best Practices)
- [ ] Core Web Vitals dentro da meta: LCP ≤ 1.8s, INP ≤ 100ms, CLS ≤ 0.05
- [ ] Acessibilidade WCAG 2.2 AA (nenhuma violação crítica)
- [ ] SEO: sitemap, robots.txt, JSON-LD, meta tags otimizadas
- [ ] Redirects 301 configurados (se aplicável para preservar SEO)
- [ ] Deploy no Cloudflare Pages funcionando com domínio customizado
- [ ] Preview por PR funcionando (para futuras mudanças)
- [ ] Rollback testado (capacidade de reverter para deploy anterior)
- [ ] Analytics (Cloudflare Analytics, Google Analytics, etc.) funcionando
- [ ] Nenhum link quebrado interno válido
- [ ] Textos revisados quanto a encoding (UTF-8 correto em todos os arquivos)

## 8. Mapa de Migração (SE migração/redesign)
| Origem (site atual) | Destino (Astro/Cloudflare) | Tipo de elemento | Observação |
|---------------------|----------------------------|------------------|------------|
| index.html | /index.astro | Página inicial | Landing page com apresentação da jornada |
| passo-*.html | /passo-[id].astro | Páginas de passo | 17 páginas de conteúdo de passos |
| complementar.html | /complementar.astro | Página complementar | Recursos complementares |
| mapa.html | /mapa.astro | Página mapa | Orientações para encontros |
| css/tokens.css | src/styles/tokens.css | Tokens de design | Migrado e integrado ao Tailwind/Astro |
| css/estilo.css | src/styles/base.css + componentes | Estilos principais | Refatorado em componentes Astro |
| css/mapa.css | src/styles/mapa.css (se necessário) | Estilos específicos do mapa | Pode ser integrado aos componentes |
| css/complementar.css | src/styles/complementar.css (se necessário) | Estilos específicos do complementar | Pode ser integrado aos componentes |
| favicon.svg | src/assets/favicon.svg ou public/favicon.svg | Favicon | Preservado 1:1 |
| js/app.js | Componentes Astro substituem | Lógica de renderização | Substituído pelo modelo de componentes Astro |
| scripts/gerar-passos.js | Nencessário (conteúdo em collections) | Script de geração | Substituído pelo Content Collection do Astro |
| scripts/migrar-passos.js | Nencessário (migração única) | Script de migração | Usado uma vez para transformar dados, depois descartado |
| dados/passos.json | src/data/passos.json ou content collection | Dados dos passos | Transformado para frontmatter markdown ou usado como dados tipados |
| design-system/ | Referência apenas | Design system | Informações incorporadas no design.md e tokens |

**Observações gerais de migração**:
- Todos os assets SVG (favicon, ícones inline) serão preservados ou substituídos por equivalentes Lucide
- Iframes externos (Spotify, YouTube) serão preservados exatamente como estão (mesmo URL)
- Fontes Google (Inter e Playfair Display) serão self-hosted via Astro Fonts API para melhor desempenho e controle
- O atributo `data-etapa` será mantido para controlar as cores de acento dinâmicas (Etapa 1 = amarela, Etapa 2 = verde)
- A responsividade será preservada com os mesmos breakpoints e comportamentos
- Micro-interações (hover, foco) serão preservadas com as mesmas transições e efeitos visuais