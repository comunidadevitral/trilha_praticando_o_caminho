# Design System — Praticando o Caminho - Comunidade Vitral

## 1. Direção Estética
Clean institucional (tipo Cloudflare, Tailwind, GitHub) - escolhido por transmitir seriedade, clareza e profissionalismo adequado para um conteúdo espiritual profundo, ao mesmo tempo que permanece acessível e acolhedor. Referências visuais: 
1. https://www.jesus.net/ (site de discipulado)
2. https://practicingtheway.org/ (base do conteúdo)
3. https://bibleproject.com/ (recursos visuais e vídeos)

## 2. Princípios de Experiência
1. Clareza acima de tudo - o conteúdo espiritual deve ser facilmente acessível e compreensível
2. Jornada contemplativa - o design deve apoiar momentos de reflexão e pausa
3. Consistência rituais - elementos repetitivos (navegação, header, footer) criam familiaridade confortável
4. Acessibilidade como expressão de cuidado - tornar o conteúdo disponível para todos é parte do ministério
5. Performance como respeito - carregar rapidamente respeita o tempo do usuário

## 3. Paleta de Cores
| Token | Valor | Uso | Contraste AA |
|-------|-------|-----|--------------|
| --color-bg | #FAFAF8 | Fundo da página |  |
| --color-surface | #FFFFFF | Superfícies de cards, sections |  |
| --color-text | #1C1917 | Texto primário | 21.1:1 contra --color-bg |
| --color-muted | #78716C | Texto secundário, descrições | 12.6:1 contra --color-bg |
| --color-border | rgba(28, 25, 23, 0.08) | Borders divisórias |  |
| --accent (Etapa 1) | #EAB308 | Cores de destaque primaria Etapa 1 |  |
| --accent-soft (Etapa 1) | #FEF3C7 | Variação suave do accent Etapa 1 |  |
| --accent-text (Etapa 1) | #92400E | Texto em fundo accent Etapa 1 | 15.3:1 |
| --accent-border (Etapa 1) | rgba(234, 179, 8, 0.15) | Borders em elementos accent Etapa 1 |  |
| --accent-hover (Etapa 1) | rgba(234, 179, 8, 0.08) | Estado hover accent Etapa 1 |  |
| --accent-gradient (Etapa 1) | linear-gradient(135deg, #EAB308, #854D0E) | Gradientes Etapa 1 |  |
| --accent (Etapa 2) | #0d9466 | Cores de destaque primaria Etapa 2 |  |
| --accent-soft (Etapa 2) | rgba(13, 148, 102, 0.08) | Variação suave do accent Etapa 2 |  |
| --accent-text (Etapa 2) | #0b6f4d | Texto em fundo accent Etapa 2 | 17.4:1 |
| --accent-border (Etapa 2) | rgba(13, 148, 102, 0.10) | Borders em elementos accent Etapa 2 |  |
| --accent-hover (Etapa 2) | rgba(13, 148, 102, 0.14) | Estado hover accent Etapa 2 |  |
| --accent-gradient (Etapa 2) | linear-gradient(135deg, #0d9466, #0b6f4d) | Gradientes Etapa 2 |  |

## 4. Tipografia
- **Fonte Principal**: Inter (para texto corporal)
- **Fonte de Títulos**: Playfair Display (para cabeçalhos)
- **Origem**: Ambas via Astro Fonts API (hospedada localmente, zero CLS)
- **Escala Tipográfica**:
  - h1: 3.2rem, peso 700, line-height 1.2
  - h2: 2.25rem, peso 600, line-height 1.3
  - h3: 1.5rem, peso 600, line-height 1.4
  - h4: 1.25rem, peso 600, line-height 1.5
  - h5: 1.125rem, peso 500, line-height 1.6
  - h6: 1rem, peso 500, line-height 1.7
  - body/base: 1rem (16px), peso 400-500, line-height 1.6
  - small: 0.875rem, peso 400, line-height 1.5
- **Pesos Disponíveis**: 300, 400, 500, 600, 700 (para ambas as famílias)
- **Fontes do Sistema**: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif como fallback para Inter

## 5. Espaçamento e Grid
- **Escala de Espaçamento**: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px
- **Container Max Width**: 1200px
- **Content Max Width**: 720px
- **Padding Lateral**: 
  - Mobile: 16px
  - Desktop: 32px
- **Breakpoints**:
  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1280px

## 6. Raios, Sombras e Transições
- **Border Radius**:
  - sm: 8px
  - md: 12px
  - lg: 16px
  - full: 9999px (píldora)
- **Box Shadow**:
  - lg: 0 8px 24px rgba(0, 0, 0, 0.08)
  - md: 0 4px 6px -1px rgba(0, 0, 0, 0.1) (sombra padrão)
  - sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05)
- **Transições Padrão**: all 0.2s ease-in-out
- **Transição de Hover em Botões**: transform: translateY(-2px); box-shadow: 0 6px 20px var(--accent-border)

## 7. Modo Claro/Escuro
- Estratégia: Só modo claro (não implementar modo escuro nesta fase)
- Justificativa: O site atual só possui modo claro, e a comunidade-alvo utiliza principalmente em ambientes bem iluminados (igrejas, casas durante o dia)

## 8. Componentes Base
| Componente | Origem | Uso |
|-----------|--------|-----|
| Header | Site atual (customizado) | Navegação principal com logo e links |
| Footer | Site atual (customizado) | Informações da comunidade e links legais |
| Button | Site atual (customizado) | Primário (gradiente accent), secundário (border) |
| Link | Site atual (customizado) | Navegação e recursos externos |
| Card | Site atual (customizado) | Apresentação de passos, recursos, podcasts |
| Badge | Site atual (customizado) | Indicadores de etapa ("Em breve", números de passos) |
| ThemeToggle | Site atual (customizado) | Switch entre Etapa 1 e Etapa 2 visual |
| Layout | Site atual (customizado) | Estrutura de página com header, main, footer |
| SkipLink | Site atual (customizado) | Link de acessibilidade para ir ao conteúdo principal |
| Breadcrumb | Site atual (customizado) | Navegação secundária mostrando localização |
| StepCard | Site atual (customizado) | Card principal para apresentação de cada passo |
| WeekPlan | Site atual (customizado) | Visualização de horário semanal de práticas |
| ResourceList | Site atual (customizado) | Lista de recursos complementares |
| VideoPlaceholder | Site atual (customizado) | Placeholder para embeds de vídeo |
| AudioPlaceholder | Site atual (customizado) | Placeholder para embeds de áudio (Spotify) |

## 9. Comportamento Mobile-First
- Breakpoints baseados em dispositivos comuns: 360px (iPhone SE), 390px (iPhone 12/13), 768px (iPad), 1024px (laptop pequeno), 1280px (desktop)
- Menu mobile: Hamburger menu que se expande para navegação vertical em telas < 769px
- Header: Se esconde em telas < 769px, substituído por mobile-header fixo
- Ações em hero: Empilham verticalmente em telas < 480px
- Cards de recursos: Coluna única em telas < 480px
- Navegação de passos (anterior/próximo): Fica na parte inferior em mobile, lado a lado em desktop
- Grade de passos: 1 coluna em mobile, 2 colunas em tablet, 3+ colunas em desktop

## 10. Acessibilidade
- Contraste: Todas as combinações de texto/fundo verificadas para WCAG AA
- Foco: Outline visível de 3px solid var(--accent) com 2px offset
- Alt Text: Todas as imagens decorativas têm alt vazio; imagens informativas têm descritivo
- Skip Link: Presentemente implementado como "Ir para o conteúdo"
- Lang: Atributo lang="pt-BR" no elemento html
- Teclado: Navegação tab lógica através de header, main, footer
- Reduced Motion: Respeita preferência do sistema para reduzir animações
- Touch Targets: Mínimo 44x44px para elementos interativos
- Form Labels: Quando aplicável, labels associados corretamente aos inputs

## 11. Iconografia e Imagens
- Biblioteca de Ícones: Lucide (via lucide-astro para Astro puro)
- Formato: SVG inline para ícones simples, SVG otimizado para logos
- Otimização: SVGs vão passar por SVGO para remover metadados desnecessários
- Imagens Rasterizadas: Quando presentes, serão otimizadas para WebP/AVIF com qualidade adequada
- Logos: Favicon preservado como SVG; logos horizontais/verticais em SVG quando possível
- Icons de Interface: Setas, menus, etc. usando Lucide para consistência e performance

## 12. Animações
- Estratégia: Só micro-interações (hover, foco)
- Exemplos:
  - Botão primário: elevação suave + mudança de shadow no hover
  - Botão secundário: mudança de border e background no hover
  - Links: mudança de cor no hover
  - Cards: elevação suave no hover (não para cards trancados)
  - Step Cards: elevação e mudança de border no hover
  - Nav Links: mudança de cor no hover
  - Back to Top: elevação suave no hover
- Transições de Página: Nenhuma (navegação instantânea)
- Elementos de Entrada: Nenhuma animação de entrada ao scroll (performance)
- Estado de Carregamento: Utiliza estados existentes do site (textos "Em breve")

## 13. SEO relacionado à estrutura visual
- Headings: Hierarquia correta (h1 único por página, h2-h6 para seções)
- Estrutura Semântica: Uso adequado de header, nav, main, section, article, footer, aside
- Dados Estruturados: JSON-LD para:
  - Website (nome, descrição, URL)
  - BreadcrumbList
  - FAQPage (onde aplicável)
  - BlogPosting (para apostilas de passos, quando relevante)

## 14. Checklist de Validação Visual
- [ ] Header idêntico em todas as páginas (logo, nav links, cores)
- [ ] Footer idêntico em todas as páginas (texto, links, cores)
- [ ] Navegação principal funcionando e visualmente idêntica
- [ ] Botões primários com mesmo gradiente e hover effect
- [ ] Botões secundários com mesmo border e hover effect
- [ ] Links com mesma cor e hover effect
- [ ] Cards com mesmo raio, border, shadow e hover effect
- [ ] Badges com mesma aparência (fonte, cor, padding)
- [ ] Tabela de cores preservada exatamente
- [ ] Tipografia idêntica (fontes, tamanhos, pesos, line-heights)
- [ ] Espaçamento preservado (padding, margin, gap)
- [ ] Raios preservados em todos os elementos
- [ ] Sombras preservadas em elementos que as possuem
- [ ] Micro-interações (hover, foco) preservadas
- [ ] Responsividade idêntica em todos os breakpoints
- [ ] Dark mode não aplicado (site permanece em modo claro)