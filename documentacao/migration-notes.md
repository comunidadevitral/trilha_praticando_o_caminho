# Notas de Migração — Praticando o Caminho - Comunidade Vitral

## 1. Resumo da Migração
Migração de um site estático HTML/CSS/JS para Astro 6+ com Tailwind v4, preservando exatamente o visual e o conteúdo das 17 páginas de passos, páginas de Material Complementar e Mapa. O grau de paridade desejado é **Paridade visual fiel**. Nenhuma página será removida, e nenhuma nova página será adicionada nesta fase (além das já existentes). O site não possui formulários, então nenhuma integração com banco de dados ou Cloudflare D1 é necessária.

## 2. Páginas Removidas
| Página | Motivo | Referências a remover |
|--------|--------|-----------------------|
| Nenhuma | Todas as páginas existentes serão preservadas | N/A |

## 3. Assets a Remover
- Nenhum asset será removido. Todos os assets existentes (favicon.svg, fontes via Google Fonts, ícones SVGs, iframes externos) serão preservados ou otimizados.
- Os arquivos de script JavaScript (`js/app.js`, `scripts/gerar-passos.js`, `scripts/migrar-passos.js`) serão substituídos pela arquitetura de componentes do Astro, portanto não serão incluídos no build final, mas sua funcionalidade será replicada nativamente no Astro.

## 4. Redirects Necessários
Verificar §8.3b do formulário (domínio antigo controlável?):
- O domínio antigo é **comunidadevitral.github.io** (GitHub Pages), que **não é controlável** para redirects no sentido tradicional (não podemos editar o servidor do GitHub Pages além de modificar o conteúdo).
- Estratégia alternativa:
  - **Canonical no site antigo**: Adicionar `<link rel="canonical" href="https://praticandocaminho.com.br/">` no `<head>` de cada página do site antigo para indicar a versão preferida aos mecanismos de busca.
  - **Aviso visual no site antigo**: Implementar um banner discreto informando os usuários de que o site foi migrado e fornecendo um link para o novo domínio.
  - **Aceitar perda parcial de SEO**: Monitorar o tráfego orgânico durante a transição e trabalhar para recuperar posições através de bom conteúdo e backlinks naturais.
  - **Registrar no `prd.md` §10**: Já foi registrado que o domínio antigo não é controlável e que estratégia alternativa será usada.

### Estratégia detalhada para domínios não controláveis:
1. Antes do deploy do novo site, atualizar o site antigo (GitHub Pages) para incluir:
   - Tag canonical apontando para o novo domínio em todas as páginas
   - Mensagem no topo do body: "Este site foi migrado para https://praticandocaminho.com.br. Clique aqui para acessar a nova versão." (link para novo domínio)
   - Manter todo o conteúdo e funcionamento do site antigo intacto para evitar quebra de experiência para usuários que ainda acessam o antigo.
2. Após o deploy do novo site e verificação de que está funcionando, manter o site antigo ativo por um período de transição (ex: 30-60 dias) com os avisos acima.
3. Após o período de transição, opcionalmente redirecionar todo o tráfego via GitHub Pages para uma página simples que apenas redireciona (se possível através de um repositório separado apenas para redirect, ou usando um serviço de redirect externo como Netlify ou Cloudflare Redirects se o domínio for transferido para nossa conta).
4. Se o domínio `comunidadevitral.github.io` for apenas um subdomínio do GitHub e nós controlamos o repositório, podemos configurar um redirect usando um arquivo `_redirects` ou similar se estiver usando um custom domain no GitHub Pages, mas no caso de subdomínio do github.io, não é possível.

## 5. SEO Legado
- URLs indexadas atualmente: Todas as 19 páginas (17 passos + complementar + mapa) no subdomínio github.io.
- Backlinks: Desconhecidos, mas presumimos que sejam mínimos já que é um site de comunidade específica.
- Sitemap antigo: Não há sitemap.xml explícito no site atual (verificar).
- Estratégia:
  - Gerar sitemap.xml novo no site Astro e submetê-lo ao Google Search Console e Bing Webmaster Tools.
  - Se possível, usar a ferramenta de mudança de endereço do Google Search Console (requer acesso à conta do site antigo).
  - Monitorar o tráfego e posições nas SERPs durante a transição.
  - Implementar estrutura de dados estruturados (JSON-LD) para melhorar a aparência nos resultados de busca.

## 6. Riscos de Migração
| Risco | Impacto | Mitigação |
|-------|---------|-----------|
| Diferenças sutis de rendering entre navegadores | Médio | Testar em Chrome, Firefox, Safari, Edge; aceitar diferenças mínimas de sub-pixel rendering |
| Links externos não funcionarem ou mudarem | Médio | Verificar periodicidade dos links; implementar página de erro customizada para links quebrados (embora sejam externos, podemos monitorar) |
| Problemas com iframes externos (Spotify, YouTube) | Médio | Implementar fallbacks para mensagens "em breve" quando o serviço não estiver disponível (embora os iframes devam continuar funcionando se as URLs forem válidas) |
| Sobrecarga na equipe de desenvolvimento com nova stack | Alto | Fornecer documentação e tempo de aprendizado; iniciar com componentes simples |
| Perda de tráfego orgânico durante transição | Alto | Implementar canonical tags no site antigo; manter avisos visuais; monitorar Search Console e Analytics; comunicar a mudança à comunidade antecipadamente |
| Inconsistências no conteúdo durante a migração | Médio | Usar o inventário como fonte de verdade; validar amostras de conteúdo antes e depois; envolver equipe de conteúdo na revisão |
| Falha na preservação de micro-interações (hover, foco) | Médio | Comparar diretamente com site original; usar ferramentas de inspeção para garantir que os estilos sejam idênticos |
| Problemas de performance na versão nova (pior que o original) | Médio | Otimizar imagens, usar Astro Fonts API para self-hosting, minificar assets, usar lazy loading onde apropriado |

## 7. Inconsistências Encontradas no Original
(baseado no Protocolo §B.4 — token-migration-map)
- As cores de acento são dinâmicas baseadas no atributo `data-etapa` (Etapa 1: #EAB308, Etapa 2: #0d9466). Isso é consistente no CSS e no HTML.
- As fontes são Inter e Playfair Display via Google Fonts, consistente em todo o site.
- Não foram encontradas inconsistências críticas de cores ou tipografia no CSS original.
- Pequenas inconsistências de espaçamento podem existir devido ao uso de valores hardcoded em alguns componentes, mas serão padronizados durante a migração para usar o escala de espaçamento definida no design system.
- Alguns elementos têm estados de hover/foco que podem não estar documentados em todos os componentes, mas serão padronizados com base nos padrões encontrados (ex: botões primários têm elevação e mudança de sombra).

## 8. Decisões que Dependem do Responsável
- [ ] Definir o prazo final para conclusão da migração (Líder do projeto)
- [ ] Confirmar orçamento para ferramentas ou serviços externos necessários (Patrocinador do projeto)
- [ ] Agendar treinamento em Astro para a equipe de desenvolvimento (Líder técnico)
- [ ] Definir data de corte para migração completa (quando o site antigo será desativado ou terá apenas avisos de redirect)
- [ ] Aprovar o plano de comunicação da migração para a comunidade (Líder de comunicação)
- [ ] Definir responsáveis pela revisão de conteúdo pós-migração (Equipe de conteúdo)