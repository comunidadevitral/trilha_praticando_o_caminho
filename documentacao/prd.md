# PRD — Praticando o Caminho - Comunidade Vitral

## 1. Resumo do Produto
Uma jornada de discipulado de 17 passos para estar com Jesus, tornar-se como Ele e fazer como Ele fez. Destina-se a pessoas que desejam aprofundar sua fé de forma intencional e comunitária. O projeto consiste em migrar um site estático HTML/CSS/JS para uma stack mais moderna (Astro) mantendo o visual e o conteúdo idênticos, melhorando performance, acessibilidade e facilidade de manutenção.

## 2. Contexto
O site atual da Trilha Praticando o Caminho é um site estático construído com HTML, CSS e JavaScript que hospeda uma jornada de discipulado estruturada em 17 passos divididos em duas etapas. Com o crescimento da comunidade e a necessidade de melhorar a experiência do usuário, especialmente em dispositivos móveis, decidiu-se migrar para uma tecnologia que ofereça melhor performance, SEO facilitado e manutenção mais simples.

## 3. Objetivos
1. Migrar o site atual para Astro preservando exatamente o visual e o conteúdo
2. Melhorar o desempenho do site (Lighthouse ≥ 95 em todas as categorias)
3. Garantir acessibilidade WCAG 2.2 AA
4. Facilitar a atualização de conteúdo através de Markdown/MDX
5. Melhorar a experiência em dispositivos móveis
6. Implementar suporte para PWA (funcionalidade offline)

## 4. Não-objetivos
- Implementar funcionalidades de e-commerce ou doação online nesta fase
- Criar área administrativa complexa de gerenciamento de usuários
- Implementar busca avançada com facetas múltiplas
- Adicionar suporte a múltiplos idiomas (i18n) no MVP
- Desenvolver funcionalidades de rede social interna ou fóruns

## 5. Usuários e Personas
- **Persona Principal**: Membros da Comunidade Vitral que participam da jornada de discipulado
- **Persona Secundária**: Pessoas interessadas em crescimento espiritual que descobrem a jornada através de busca orgânica ou recomendações
- **Contexto de Uso**: Acesso principalmente em dispositivos móveis durante o dia para leitura das apostilas e reflexões, e em desktops para estudos mais aprofundados

## 6. Escopo de Páginas
| Rota | Título | Prioridade | Status | Observação |
|------|--------|-----------|--------|------------|
| / | Início | P0 | existente | Landing page com apresentação da jornada |
| /passo-1 | O Convite Para Ser Aprendiz | P0 | existente | Conteúdo do passo 1 |
| /passo-2 | A Formação Que Começa Em Deus | P0 | existente | Conteúdo do passo 2 |
| /passo-3 | O Caminho Da Transformação | P0 | existente | Conteúdo do passo 3 |
| /passo-4 | As Práticas Que Nos Formam | P0 | existente | Conteúdo do passo 4 |
| /passo-5 | Dor E Sofrimento | P0 | existente | Conteúdo do passo 5 |
| /passo-6 | Cura Do Pecado | P0 | existente | Conteúdo do passo 6 |
| /passo-7 | Minha Regra De Vida | P0 | existente | Conteúdo do passo 7 |
| /passo-8 | Vida Em Comunidade | P0 | existente | Conteúdo do passo 8 |
| /passo-9 | O Descanso Como Ritmo De Graça | P0 | existente | Conteúdo do passo 9 |
| /passo-10 | O Ritmo Da Oração | P0 | existente | Conteúdo do passo 10 |
| /passo-11 | O Jejum Como Espaço Para Deus | P0 | existente | Conteúdo do passo 11 |
| /passo-12 | O Silêncio Como Espaço Sagrado | P0 | existente | Conteúdo do passo 12 |
| /passo-13 | A Generosidade Como Estilo De Vida | P0 | existente | Conteúdo do passo 13 |
| /passo-14 | A Meditação Como Leitura Orante | P0 | existente | Conteúdo do passo 14 |
| /passo-15 | A Comunidade Como Corpo De Cristo | P0 | existente | Conteúdo do passo 15 |
| /passo-16 | O Serviço Como Expressão Do Reino | P0 | existente | Conteúdo do passo 16 |
| /passo-17 | O Testemunho Como Coerência De Vida | P0 | existente | Conteúdo do passo 17 |
| /complementar | Material Complementar | P1 | existente | Recursos complementares: livros, podcasts, músicas, quizzes e guias |
| /mapa | Mapa da Jornada | P1 | existente | Mapa da jornada com perguntas, dicas e orientações para cada encontro |

## 7. Requisitos Funcionais
- RF-001: O sistema deve permitir navegação sequencial entre os passos (anterior/próximo)
- RF-002: O sistema deve exibir indicadores de progresso (passo X de Y)
- RF-003: O sistema deve marcar visualmente os passos concluídos vs. "em breve"
- RF-004: O sistema deve integrar-se com recursos externos (Bible App, Lectio 365, Spotify) via links
- RF-005: O sistema deve permitir transição visual entre Etapa 1 e Etapa 2
- RF-006: O sistema deve ser totalmente responsivo em breakpoints mobile (360px, 390px), tablet (768px) e desktop (1440px+)
- RF-007: O sistema deve preservar exatamente o mesmo header e footer em todas as páginas
- RF-008: O sistema deve manter a mesma tipografia (Inter para texto corporal, Playfair Display para títulos)
- RF-009: O sistema deve manter as mesmas cores de acento dinâmicas baseadas na etapa (amarela para Etapa 1, verde para Etapa 2)
- RF-010: O sistema deve suportar micro-interações (hover, foco) em elementos interativos

## 8. Requisitos de Conteúdo
- Todo o conteúdo textual das 17 apostilas de passos deve ser preservado exatamente como está no original
- Todo o conteúdo das páginas Material Complementar e Mapa deve ser preservado
- Metadados SEO (title, description) devem ser preservados para cada página
- Links externos para recursos (Bible App, Lectio 365, Spotify) devem ser mantidos
- Iframes externos para vídeos (YouTube, Spotify embeds) devem continuar funcionando
- Favicon deve ser preservado
- Fontes Google (Inter e Playfair Display) devem continuar sendo utilizadas
- Componentes de UI (cards, badges, botões, links) devem manter exatamente o mesmo visual e comportamento

## 9. Requisitos de Integração
- Não há requisitos de integração com banco de dados ou APIs externas além dos links já existentes
- O site não requer autenticação ou áreas de membro
- Integração com analytics será mantida (Cloudflare Analytics, Google Analytics, etc.)

## 10. Requisitos de SEO
- Meta tags title e description devem ser preservadas exatamente como no original
- Implementar tags Open Graph (og:title, og:description, og:image) para melhor compartilhamento em redes sociais
- Gerar sitemap.xml automaticamente
- Configurar robots.txt adequado
- Implementar JSON-LD para dados estruturados onde aplicável
- Para domínios antigos controláveis, implementar redirects 301 de URLs antigas para novas
- Para domínios antigos não controláveis (como github.io), manter canonical tags e avisos visuais quando possível

## 11. Requisitos de Acessibilidade
- Conformidade com WCAG 2.2 AA nível mínimo
- Contraste mínimo de 4.5:1 para texto normal e 3:1 para texto grande
- Navegação totalmente acessível via teclado (tab order lógico)
- Skip link para ir diretamente ao conteúdo principal
- Labels ARIA adequados para todos os controles interativos
- Suporte para prefers-reduced-motion
- Landmark elementos adequados (header, nav, main, footer)
- Tamanho de fonte relativo (rem, em) para permitir redimensionamento pelo usuário
- Foco visível em todos os elementos interativos

## 12. Requisitos de Performance
- Lighthouse ≥ 95 em todas as categorias (Performance, Acessibilidade, SEO, Best Practices)
- Core Web Vitals alvo: Excelente (LCP ≤ 1.8s, INP ≤ 100ms, CLS ≤ 0.05)
- Otimização de imagens (quando presentes) para formatos modernos (WebP, AVIF)
- Minificação de HTML, CSS e JavaScript
- Lazy loading de recursos não-críticos
- Preload de fontes críticas
- Uso de CDN para entrega eficiente de assets
- Estratégia de cache adequada para assets estáticos

## 13. Requisitos de Segurança
- HTTPS obrigatório em todos os domínios
- Headers de segurança adequados (X-Content-Type-Options, X-Frame-Options, etc.)
- Política de Segurança de Conteúdo (CSP) restritiva
- Proteção contra XSS e CSRF (embora seja um site estático, quaisquer componentes dinâmicos devem seguir boas práticas)
- Não há coleta de dados de usuários que exija preocupações adicionais de privacidade além do padrão

## 14. Critérios de Aceite do MVP
- Todas as 19 páginas (17 passos + complementar + mapa) acessíveis e renderizando corretamente
- Navegação funcional entre passos (anterior/próximo working)
- Design responsivo validado em múltiplos viewports
- Visual idêntico ao site original (paridade visual fiel)
- Lighthouse ≥ 90 em todas as categorias como mínimo para lançamento inicial
- Todos os links externos funcionando
- Iframes de recursos externos (Spotify, YouTube) carregando corretamente
- Favicon carregando na aba do navegador
- Meta tags title e description presentes e corretas em todas as páginas

## 15. Métricas de Sucesso
- Redução de 50% no tempo de carregamento inicial (medido por Lighthouse FCP)
- Manutenção ou aumento no tempo médio de sessão dos usuários
- Redução da taxa de rejeição em dispositivos móveis
- Feedback positivo da comunidade sobre a nova experiência
- Facilitação medida na atualização de conteúdo (tempo para publicar nova apostila reduzido em 70%)

## 16. Riscos e Mitigações
| Risco | Probabilidade | Impacto | Mitigação |
|-------|--------------|---------|-----------|
| Diferenças sutis de rendering entre navegadores | Média | Médio | Testar em Chrome, Firefox, Safari, Edge; aceitar diferenças mínimas de sub-pixel rendering |
| Links externos não funcionarem ou mudarem | Baixa | Médio | Verificar periodicidade dos links; implementar página de erro customizada para links quebrados |
| Problemas com iframes externos (Spotify, YouTube) | Média | Médio | Implementar fallbacks para mensagens "em breve" quando o serviço não estiver disponível |
| Sobrecarga na equipe de desenvolvimento com nova stack | Média | Alto | Fornecer documentação e tempo de aprendizado; iniciar com componentes simples |
| Perda de tráfego orgânico durante transição | Baixa | Alto | Implementar redirects 301 adequados; manter sitemap atualizado; monitorar Search Console |

## 17. Dependências
- Dependência humana: Equipe de desenvolvimento com experiência em Astro e frontend moderno
- Dependência técnica: Astro 6+, Node.js 18+, npm/yarn/pnpm
- Dependência externa: Serviços de hospedagem (Cloudflare Pages), domínios registrados
- Dependência de conteúdo: Equipo responsável pela revisão e aprovação do conteúdo migrado

## 18. Perguntas em Aberto
- Qual será o prazo final para conclusão da migração?
- Há restrições de orçamento para serviços externos ou ferramentas?
- A equipe tem experiência prévia com Astro ou será necessário tempo de aprendizado?
- O domínio praticandocaminho.com.br está disponível para registro?
- Há planos para implementar formulário de contato ou newsletter em fases futuras?