# Proposta de Arquitetura — Migração para Astro

## Contexto
Este documento apresenta a proposta de arquitetura para migrar o site atual da Trilha Praticando o Caminho (HTML/CSS/JS estático) para uma stack moderna baseada em Astro 6+, preservando exatamente o visual e o conteúdo enquanto melhora performance, acessibilidade e facilidade de manutenção.

A migração foi previamente definida no `PRD.md`, com o design system detalhado em `design.md`, inventário completo em `inventario.md` e plano de implementação em `implementacao.md`.

## Arquitetura Proposta

### 1. Stack Tecnológica
- **Framework**: Astro 6+ (modo estático por padrão, com potencial para SSR se necessário no futuro)
- **Estilização**: Tailwind CSS v4 (configurado para usar os tokens de design extraídos do site original)
- **Tipografia**: Astro Fonts API (self-hosting das fontes Inter e Playfair Display para zero CLS e melhor performance)
- **Ícones**: Lucide via lucide-astro (substituindo os SVGs inline por componentes otimizados)
- **Build**: Vite (built-in do Astro)
- **Deploy**: Cloudflare Pages (com integração direta ao repositório GitHub)

### 2. Estrutura de Pastas
```
src/
├── components/
│   ├── UI/                  # Componentes reutilizados de baixo nível
│   │   ├── Button.astro
│   │   ├── Link.astro
│   │   ├── Card.astro
│   │   ├── Badge.astro
│   │   ├── ThemeToggle.astro
│   │   ├── Layout.astro
│   │   ├── SkipLink.astro
│   │   └── Breadcrumb.astro
│   ├── Layouts/             # Layouts de página
│   │   └── BaseLayout.astro
│   ├── Sections/            # Seções específicas de páginas
│   │   ├── HeroSection.astro
│   │   ├── StepNav.astro
│   │   ├── OrganizeseSection.astro
│   │   └── TransicaoSection.astro
│   └── Widgets/             # Widgets de conteúdo
│       ├── MediteWidget.astro
│       ├── AssistaWidget.astro
│       ├── AprofundeWidget.astro
│       ├── PratiqueWidget.astro
│       └── OrganizeseWidget.astro
├── content/
│   ├── steps/               # Coleção dos 17 passos
│   │   ├── passo-1.md
│   │   ├── passo-2.md
│   │   └── ... até passo-17.md
│   ├── complementar.md      # Página de material complementar
│   └── mapa.md              # Página do mapa da jornada
├── data/
│   └── passos.json          # Dados transformados (opcional, para uso em componentes)
├── layouts/
│   └── Layout.astro         # Layout base da aplicação
├── pages/
│   ├── index.astro          # Página inicial
│   ├── passo-[id].astro     # Páginas dinâmicas dos passos (1-17)
│   ├── complementar.astro   # Página de material complementar
│   └── mapa.astro           # Página do mapa da jornada
├── styles/
│   ├── base.css             # CSS base e reset
│   ├── tokens.css           # Tokens de design exportados do original
│   └── responsive.css       # Media queries e ajustes responsivos
├── public/
│   └── favicon.svg          # Favicon preservado
└── astro.config.mjs         # Configuração do Astro
```

### 3. Estratégia de Conteúdo
- **Content Collections (Markdown)**: Todo o conteúdo das páginas será armazenado como arquivos Markdown em `src/content/` com frontmatter YAML para metadados
  - Cada passo terá seu próprio arquivo: `passo-1.md` através de `passo-17.md`
  - Frontmatter contendo: título, subtitulo, etapa, status, semana, além de campos para medite, assista, aprofunde, pratique, organizese, para_comecar e ouca
- **Componentização de Seções**: Cada seção de um passo (Medite, Assista, Aprofunde, etc.) será um componente Astro reutilizável que aceita props do frontmatter
- **Dados Tipados Opcionais**: O arquivo original `dados/passos.json` pode ser mantido em `src/data/passos.json` para uso em componentes que precisem acessar todos os dados de uma vez (como navegação entre passos)

### 4. Componentes Principais
#### Componentes de Layout
- **BaseLayout.astro**: Estrutura básica com `<slot />` para conteúdo, inclui `<Head />` com meta tags
- **Header.astro**: Logo, navegação desktop, ThemeToggle
- **Footer.astro**: Informações da Comunidade Vitral, links legais
- **ThemeToggle.astro**: Componente que altera o atributo `data-etapa` no elemento `<html>` para controlar as cores da Etapa 1 (amarela) e Etapa 2 (verde)

#### Componentes de Navegação
- **NavDesktop.astro**: Links para Início, Material Complementar, Mapa
- **NavMobile.astro**: Menu hamburger que se expande em telas < 769px
- **StepNav.astro**: Links "Anterior" e "Próximo" com indicadores de passo (X de Y)
- **Breadcrumb.astro**: Navegação secundária mostrando localização atual

#### Componentes de Conteúdo
- **MediteWidget.astro**: Exibe conteúdo meditative com base bíblica e devocional
- **AssistaWidget.astro**: Exibe seção "Assista" com iframe opcional para vídeo
- **AprofundeWidget.astro**: Exibe recursos sugeridos (livros, música)
- **PratiqueWidget.astro**: Exibe desafio, experimento e pergunta da semana
- **OrganizeseWidget.astro**: Exibe planejamento semanal de práticas
- **ParaComecarWidget.astro**: Exibe resumo e link para apostila em PDF

#### Componentes de UI
- **Button.astro**: Variantes primária (gradiente), secundária (border) e link
- **Link.astro**: Link estilizado com estados hover/foco
- **Card.astro**: Card com efeito de elevação no hover, variações para passos, recursos e podcasts
- **Badge.astro**: Indicador de etapa, número do passo, status ("Em breve", etc.)

### 5. Estratégia de Estilização
- **Tokens CSS**: Todos os valores de `:root` e `[data-etapa]` do `tokens.css` original serão convertidos para variáveis CSS em `src/styles/tokens.css`
- **Tailwind Config**: O `tailwind.config.cjs` será configurado para:
  - Usar a escala de espaçamento (4px, 8px, 12px, etc.) do design system
  - Definir as cores personalizadas (--color-bg, --color-surface, etc.)
  - Configurar o raio de borda (--radius-sm, --radius-md, etc.)
  - Definir as sombras (--shadow-lg, etc.)
  - Configurar as transições padrão
- **Classes Utilitárias**: Componentes usarão classes Tailwind sempre que possível, com CSS customizado apenas quando necessário para efeitos complexos (como gradientes de botão)
- **Modo Claro/Escuro**: Manter apenas o modo claro (conforme decisão no formulário), controlado pelo atributo `data-etapa` no `<html>`

### 6. Otimizações de Performance
- **Astro Fonts API**: Self-hosting das fontes Inter e Playfair Display para eliminar dependência externa e zero CLS
- **Component Framework**: Astro compila para HTML estático mínimo com JavaScript apenas quando necessário (islands architecture)
- **Img Optimization**: Quando houver imagens rasterizadas (atualmente não há no conteúdo principal), usar `<picture>` com WebP/AVIF
- **Prefetching**: Astro prefeta links visíveis na viewport
- **CSS/JS Minification**: Built-in do Astro em produção
- **Lazy Loading**: Componentes abaixo da dobra podem ser carregados pereciosamente se necessário
- **Cache Headers**: Configuração adequada em `astro.config.mjs` para aproveitar o cache do Cloudflare

### 7. Estratégia de Rastreamento e Analytics
Preservação exata de todos os elementos de rastreamento do site original:
- **UTM Parameters**: Preservados em todos os links externos
- **Pixels e Scripts de Rastreamento**: 
  - Google Analytics (se presente)
  - Facebook Pixel (se presente)
  - Qualquer outro script de rastreamento encontrado no `<head>` ou antes do `</body>` do site original
- **Eventos Personalizados**: Qualquer `data-gtm`, `data-pixel`, `data-event` ou similares serão preservados exatamente como estão
- **Ausência de Formulários**: Como não há formulários no site atual, não há necessidade de proteger contra spam ou integrar com APIs de email

### 8. SEO Técnico
- **Meta Tags Dinâmicas**: Title e description gerados dinamicamente do frontmatter de cada página
- **Open Graph**: Tags og:title, og:description, og:image para melhor compartilhamento em redes sociais
- **Twitter Cards**: Tags twitter:card, twitter:title, twitter:description (se relevante)
- **JSON-LD**: 
  - WebSite para o site inteiro
  - BreadcrumbList para navegação
  - FAQPage (onde aplicável)
  - BlogPosting (para apostilas de passos)
- **Sitemap.xml**: Gerado automaticamente (@astrojs/sitemap ou custom)
- **Robots.txt**: Configurado adequadamente
- **Canonical Tags**: Tag canônica autorreferencial em cada página
- **Heading Structure**: Hierarquia correta de H1-H6 em cada página
- **Semantic HTML**: Uso adequado de header, nav, main, section, article, footer, aside

### 9. Acessibilidade (WCAG 2.2 AA)
- **Contraste**: Todas as combinações de texto/fundo verificadas para contraste mínimo de 4.5:1 (texto normal) e 3:1 (texto grande)
- **Navegação por Teclado**: Ordem lógica de tab através de header → main → footer
- **Focus Visível**: Outline de 3px solid var(--accent) com 2px offset em todos os elementos interativos
- **Skip Link**: Link "Ir para o conteúdo" visível apenas ao receber foco
- **Landmark Elements**: header, nav, main, footer, aside usados adequadamente
- **Labels e Aria**: Quando aplicável (formulários futuros, campos de entrada)
- **Reduced Motion**: Respeita preferência do sistema para reduzir animações
- **Touch Targets**: Mínimo 44x44px para elementos interativos
- **Font Size Relative**: Uso de rem e em para permitir redimensionamento pelo usuário
- **Page Title**: Título descritivo e único para cada página
- **Language**: Atributo lang="pt-BR" no elemento html

### 10. Estratégia de Migração de Assets
- **Favicon.svg**: Preservado 1:1 em `/public/favicon.svg`
- **Fontes**: Inter e Playfair Display migradas de Google Fonts para self-host via Astro Fonts API
- **Ícones SVGs**: Substituídos por componentes Lucide equivalentes (mantendo mesma aparência semântica)
- **Iframes Externos**: Preservados exatamente como estão (YouTube embeds, Spotify embeds)
- **JavaScript**: 
  - `js/app.js`: Funcionalidade replicada por componentes Astro e arquitetura de ilhas
  - `scripts/gerar-passos.js`: Substituído pelo Content Collection do Astro
  - `scripts/migrar-passos.js`: Usado uma vez para transformar dados, depois pode ser arquivado
- **CSS**: 
  - `css/tokens.css`: Convertido para variáveis CSS em `src/styles/tokens.css`
  - `css/estilo.css`: Refinado em componentes Astro e utilitários Tailwind
  - `css/mapa.css` e `css/complementar.css`: Integrados aos componentes específicos ou mantidos como CSS customizado mínimo

### 11. Plano de Fases de Implementação (Resumido)
Conforme detalhado em `implementacao.md`:
1. **Fundação**: Setup Astro + Tailwind + tokens + layout base
2. **Shell**: Header, footer, navegação, tema toggle
3. **Conteúdo**: Migração do conteúdo para Content Collections
4. **Páginas**: Criação das páginas reais com navegação funcional
5. **SEO/Acessibilidade/Performance**: Implementação de melhorias técnicas
6. **Testes, Deploy, Validação**: Preparação para produção e validação da paridade visual

### 12. Riscos e Mitigações
| Risco | Probabilidade | Impacto | Mitigação |
|-------|--------------|---------|-----------|
| Diferenças de rendering entre navegadores | Média | Médio | Testar em Chrome, Firefox, Safari, Edge; aceitar diferenças mínimas de sub-pixel |
| Problemas com iframes externos | Baixa | Médio | Verificar URLs periodicamente; considerar fallbacks se necessário |
| Sobrecarga com nova stack | Média | Alto | Documentação, pair programming, início simples |
| Perda de tráfego orgânico | Média | Alto | Canonical tags no site antigo; avisos visuais; monitoramento de Search Console |
| Inconsistências de conteúdo | Baixa | Médio | Validação amostral; envolvimento da equipe de conteúdo na revisão |
| Falha na preservação de micro-interações | Baixa | Médio | Comparação direta com site original usando ferramentas de inspeção |

### 13. Critérios de Sucesso
- Paridade visual fiel com o site original (validação conforme Protocolo §D.5)
- Lighthouse ≥ 95 em todas as categorias (Performance, Acessibilidade, SEO, Best Practices)
- Core Web Vitals dentro da meta: LCP ≤ 1.8s, INP ≤ 100ms, CLS ≤ 0.05
- Acessibilidade WCAG 2.2 AA (nenhuma violação crítica)
- Funcionalidade de navegação entre passos preservada
- Todos os links externos e iframes funcionando
- Deploy no Cloudflare Pages com domínio customizado funcionando
- Capacidade de rollback testada

### 14. Dependências
- **Humanas**: Equipe de desenvolvimento com disposição para aprender Astro (treinamento mínimo necessário)
- **Técnicas**: Astro 6+, Node.js 18+, npm/yarn/pnpm, git
- **Externas**: Repositório GitHub, conta no Cloudflare Pages, domínio registrado
- **Conteúdo**: Equipe responsável pela validação do conteúdo migrado

### 15. Próximos Passos
1. Revisão e aprovação desta proposta de arquitetura
2. Início da **ETAPA 7: CONSTRUIR** seguindo o plano detalhado em `implementacao.md`
3. Execução da **Fase 1: Fundação** para estabelecer a base do projeto
4. Progresso através das fases subsequentes conforme definido no plano

## Aderência ao Kit
- **1.Persona DEV.md**: Segue diretrizes de pensamento sênior, trade-offs honestos, foco em qualidade e simplicidade
- **2.stack-profiles.md §0**: Usa o perfil "Site Pessoal / Institucional com Extensões Opcionais" sem overrides (confirma-se aderência)
- **3.Formulário Mestre.md**: Baseia-se exatamente nas respostas fornecidas no formulário
- **4.Protocolo de Migração Visual.md**: Implementa todas as seções de captura de baseline, extração de token, inventário de componentes/assets e estratégia de validação de paridade
- **5.prompt gerador.md**: Gera proposta após documentação completa, seguindo o fluxo estabelecido

## O Que Não Será Feito
- Implementação de funcionalidades de formulário, autenticação ou área administrativa nesta fase (conforme escopo definido no PRD)
- Adição de suporte a múltiplos idiomas (i18n) no MVP
- Implementação de busca avançada ou facetas
- Criação de área de membros ou funcionalidades de doação online
- Mudanças intencionais no visual ou conteúdo além das otimizações técnicas necessárias

---
**Data**: 2026-10-09  
**Responsável**: Arquitecto de Soluções  
**Revisado por**: Líder do projeto  
**Próxima Revisão**: Aguardar aprovação para iniciar implementação