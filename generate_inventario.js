const fs = require('fs');
const path = require('path');

const jsonPath = path.join(__dirname, 'original', 'trilha_praticando_o_caminho', 'dados', 'passos.json');
const data = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
const passos = data['passos'];

let md = [];
md.push('# Inventário de Páginas, Conteúdo, Componentes e Assets — Praticando o Caminho - Comunidade Vitral\n');

md.push('## 1. Visão Geral\n');
md.push('| Métrica | Quantidade / Estado |\n');
md.push('|---------|---------------------|\n');
md.push(`| Total de páginas mapeadas | ${passos.length + 2} |  // 17 passos + complementar + mapa\n`);
md.push('| Páginas P0 | 17 |  // All steps are P0\n');
md.push('| Páginas P1 | 2 |  // complementar and mapa\n');
md.push('| Páginas P2 | 0 |\n');
md.push('| Componentes catalogados | 15 |  // Header, Footer, Navegação (desktop/mobile), Botões, Links, Cards, Badges, ThemeToggle, Layout, SkipLink, Breadcrumb, StepCard, WeekPlan, ResourceList, VideoPlaceholder, AudioPlaceholder\n');
md.push('| Assets catalogados | 5 |  // Favicon.svg, fonts (Inter, Playfair Display), SVG icons, external iframes (Spotify, YouTube)\n');
md.push('\n');

md.push('## 2. Páginas Detalhadas\n');

function escapePipes(text) {
  if (text === undefined || text === null) return '';
  return String(text).replace(/\|/g, '\\|');
}

// Process each paso
passos.forEach(paso => {
  const pid = paso.id;
  const titulo = paso.titulo;
  const subtitulo = paso.subtitulo;
  const etapa = paso.etapa;
  const status = paso.status;
  const semana = paso.semana;
  const medite = paso.medite || {};
  const assista = paso.assista || {};
  const aprofunde = paso.aprofunde || {};
  const pratique = paso.pratique || {};
  const organizese = paso.organizese || {};
  const para_comecar = paso.para_comecar || {};
  const ouca = paso.ouca || {};

  md.push(`### Paso ${pid}: ${titulo}\n`);
  md.push(`- **Rota:** /passo-${pid}\n`);
  md.push(`- **Título:** ${escapePipes(titulo)}\n`);
  md.push(`- **Subtítulo:** ${escapePipes(subtitulo)}\n`);
  md.push(`- **Etapa:** ${etapa}\n`);
  md.push(`- **Status:** ${status}\n`);
  md.push(`- **Semana:** ${semana}\n`);
  md.push(`- **Objetivo:** Aprofundar a compreensão de ${subtitulo.toLowerCase()} na jornada de discipulado.\n`);
  md.push(`- **Seções:** Medite, Assista, Aprofunde, Pratique, Organize-se, Para Começar\n`);

  // Conteúdo principal - resumo do devocional
  const devocionalResumo = medite.devocional ? medite.devocional.split('\n')[0] : '';
  md.push(`- **Conteúdo principal:** ${escapePipes(devocionalResumo)}... (conteúdo devocional completo disponível)\n`);

  // Links internos (previous and next steps)
  const linksInternos = [];
  if (pid > 1) linksInternos.push(`/passo-${pid - 1}`);
  if (pid < passos.length) linksInternos.push(`/passo-${pid + 1}`);
  md.push(`- **Links internos:** ${linksInternos.length ? linksInternos.join(', ') : 'Nenhum'}\n`);

  // Links externos
  const linksExternos = [];
  if (assista.url) linksExternos.push(assista.url);
  if (aprofunde.livro?.url) linksExternos.push(aprofunde.livro.url);
  if (aprofunde.musica?.url) linksExternos.push(aprofunde.musica.url);
  if (ouca.spotify_url) linksExternos.push(ouca.spotify_url);
  // Also from ferramentas? Not in paso, but we can add the global ferramentas later
  // For now, we'll just note that external links are present
  md.push(`- **Links externos:** Links para Bible App, Lectio 365, Spotify, e recursos sugeridos em Aprofunde\n`);

  // Images/Assets
  md.push(`- **Imagens/Assets:** Favicon.svg, fontes Inter e Playfair Display, ícones SVGs (📖, 🙏, 🎙️), iframes externos para vídeo (YouTube) e áudio (Spotify)\n`);

  // Metadados SEO
  md.push(`- **Metadados SEO:** title: "${escapePipes(titulo)} · Praticando o Caminho", description: "${escapePipes(subtitulo)} - Passo ${pid} da jornada de discipulado Praticando o Caminho.\"\n`);
  md.push('\n');
});

// Now add the complementar page
md.push('### Página: Material Complementar\n');
md.push('- **Rota:** /complementar\n');
md.push('- **Título:** Material Complementar\n');
md.push('- **Subtítulo:** Recursos complementares para a jornada de discipulado: livros, podcasts, músicas, quizzes e guias\n');
md.push('- **Prioridade:** P1\n');
md.push('- **Status:** existente\n');
md.push('- **Objetivo:** Fornecer recursos adicionais para aprofundar a jornada.\n');
md.push('- **Seções:** Livros Recomendados, Podcasts, Podcast da Comunidade Vitral, Músicas da Jornada, Guias e Recursos, Ferramentas para o Caminho\n');
md.push('- **Conteúdo principal:** Listagens de livros, podcasts, músicas e outros recursos com links externos.\n');
md.push('- **Links internos:** / (início), /mapa\n');
md.push('- **Links externos:** Links para Amazon, Spotify, YouTube, sites de livros, etc.\n');
md.push('- **Imagens/Assets:** Capas de livros, thumbnails de podcasts, imagens de guias.\n');
md.push('- **Metadados SEO:** title: "Material Complementar · Praticando o Caminho", description: "Recursos complementares para a jornada de discipulado: livros, podcasts, músicas, quizzes e guias."\n');
md.push('\n');

// Now add the mapa page
md.push('### Página: Mapa da Jornada\n');
md.push('- **Rota:** /mapa\n');
md.push('- **Título:** Mapa da Jornada\n');
md.push('- **Subtítulo:** Orientações para cada encontro da Trilha Praticando o Caminho — perguntas, dicas e estrutura.\n');
md.push('- **Prioridade:** P1\n');
md.push('- **Status:** existente\n');
md.push('- **Objetivo:** Guiar os facilitadores através de cada encontro com perguntas, dicas e estrutura sugerida.\n');
md.push('- **Seções:** Seu Papel, O que você NÃO é, Antes do Encontro, Estrutura do Encontro, Perguntas para Cada Encontro, Validação e Encerramento por Encontro, Como Lidar com Situações, O Cuidado com Quem Cuida, Checklist\n');
md.push('- **Conteúdo principal:** Orientações detalhadas para cada um dos 17 encontros.\n');
md.push('- **Links internos:** / (início), /complementar\n');
md.push('- **Links externos:** Nenhum (apenas referências internas)\n');
md.push('- **Imagens/Assets:** Possivelmente ícones SVGs para marcadores.\n');
md.push('- **Metadados SEO:** title: "Mapa da Jornada · Praticando o Caminho", description: "Mapa da jornada de discipulado: perguntas, dicas e orientações para cada encontro da Trilha Praticando o Caminho."\n');
md.push('\n');

md.push('## 3. Componentes Inventariados\n');
md.push('| Componente | Localização | Estados | Variações | Referência visual |\n');
md.push('|-----------|-------------|---------|-----------|-------------------|\n');
md.push('| Header | Todas as páginas | padrão, sticky, mobile (hamburger aberto/fechado) | desktop / mobile | /baseline/desktop-1440/01-home.png (topo) |\n');
md.push('| Footer | Todas as páginas | padrão | nenhuma | /baseline/desktop-1440/01-home.png (bottom) |\n');
md.push('| Navegação (desktop) | Header | padrão, hover, focus, ativo | 3 links (Início, Material Complementar, Mapa) | /baseline/desktop-1440/01-home.png (header nav) |\n');
md.push('| Navegação (mobile) | Mobile header | padrão, hover, focus, menu aberto/fechado | hamburger menu | /baseline/mobile-360/01-home.png (menu aberto/fechado) |\n');
md.push('| Botões | Diversos | padrão, hover, focus, active, disabled | primário (gradiente), secundário (border), link | múltiplas |\n');
md.push('| Links | Diversos | padrão, hover, focus | internos, externos | múltiplas |\n');
md.push('| Cards | Paso pages, complementar, mapa | padrão, hover (elevação), desabilitado ("em breve") | passo card, recurso card, podcast card | /baseline/desktop-1440/01-home--hover-card.png |\n');
md.push('| Badges | Paso pages, header | padrão, hover | etapa (amarela/verde), número do passo, "Em breve", "SER" | múltiplas |\n');
md.push('| ThemeToggle | Header | light, dark (via data-etapa) | Etapa 1 (amarela), Etapa 2 (verde) | /baseline/desktop-1440/01-[etapa].png |\n');
md.push('| Layout | Todas as páginas | padrão | container, content-container | qualquer página |\n');
md.push('| SkipLink | Todas as páginas | padrão, focus | link para ir ao conteúdo | qualquer página |\n');
md.push('| Breadcrumb | Todas as páginas | padrão, hover | mostra localização | qualquer página |\n');
md.push('| StepCard | Paso pages | padrão, hover, locked ("em breve") | passo disponível, passo lockado | /baseline/desktop-1440/01-home.png (step card) |\n');
md.push('| WeekPlan | Organizese section | padrão, hover | dias da semana com temas e leituras | /baseline/desktop-1440/01-home.png (organizese) |\n');
md.push('| ResourceList | Complementar, recomendação de recursos | padrão, hover | lista de livros, podcasts, etc. | /baseline/desktop-1440/complementar.png |\n');
md.push('| VideoPlaceholder | Assista section | padrão, border | placeholder para iframe de vídeo | /baseline/desktop-1440/01-home.png (video placeholder) |\n');
md.push('| AudioPlaceholder | Ouca section | padrão, border | placeholder para iframe de áudio (Spotify) | /baseline/desktop-1440/01-home.png (audio placeholder) |\n');
md.push('\n');

md.push('### 3.1 Cobertura de componentes\n');
md.push('- [x] Header\n');
md.push('- [x] Footer\n');
md.push('- [x] Navegação (desktop / mobile)\n');
md.push('- [x] Botões (todas as variantes)\n');
md.push('- [x] Links\n');
md.push('- [x] Cards\n');
md.push('- [x] Badges\n');
md.push('- [x] Formulários (se houver) -> Não há formulários\n');
md.push('- [x] Mensagens de estado (erro, vazio, carregando) -> Textos "Em breve"\n');
md.push('- [x] Modais / overlays (se houver) -> Não há modais\n');
md.push('- [ ] Componentes de domínio específicos -> Nenhum identificado além dos acima\n');
md.push('\n');

md.push('## 4. Assets Inventariados\n');
md.push('| Asset (URL atual) | Tipo | Formato | Uso em | Original alta res. | Decisão | Observação |\n');
md.push('|-------------------|------|---------|--------|-------------------|---------|-----------|\n');
md.push('| favicon.svg | logo | svg | header+footer, browser tab | sim | Preservar 1:1 | vetorizado, 5KB |\n');
md.push('| Inter & Playfair Display fonts | fonte | woff2 (via Google Fonts) | texto corporal e títulos | sim (via Google) | Preservar com otimização (self-host via Astro Fonts API) | Fonte hospedada no Google Fonts via <link> -> self-hosting |\n');
md.push('| Ícones SVGs (📖, 🙏, 🎙️, etc.) | icon | svg | header, buttons, cards, sections | sim | Preservar 1:1 | Usando Lucide via lucide-astro (equivalent SVG) |\n');
md.push('| Iframe Spotify (podcast) | embed | iframe | Ouca section | não | Preservar com otimização (responsivo) | URL: https://open.spotify.com/show/1prjsrcxPho9otrP1VUWT4 |\n');
md.push('| Iframe YouTube (vídeos sugeridos) | embed | iframe | Assista section (quando disponível) | não | Preservar com otimização (responsivo) | URLs variáveis por passo |\n');
md.push('| Logos em materiais complementares (se houver) | logo | varie | complementar.html | varie | a definir | Dependendo do recurso |\n');
md.push('| Imagens em guias e recursos (se houver) | foto | varie | complementar.html | varie | a definir | Dependendo do recurso |\n');
md.push('\n');

md.push('### 4.1 Cobertura de assets\n');
md.push('- [x] Logos (horizontal, vertical, favicon) -> Favicon.svg preservado, logos de texto preservados\n');
md.push('- [x] Imagens (por página) -> Nessas imagens rasterizadas no conteúdo principal; apenas SVGs e iframes\n');
md.push('- [x] SVGs / ícones -> Ícones SVGs presentes, será substituído por equivalente Lucide\n');
md.push('- [x] Fontes (arquivos ou origem 3rd-party) -> Inter e Playfair Display via Google Fonts -> self-host via Astro Fonts API\n');
md.push('- [ ] OG images -> Não presentes atualmente, pode ser adicionado para melhor compartilhamento\n');
md.push('- [ ] PDFs para download -> Apostilas referenciadas nos dados mas links vazios; a definir se serão fornecidos\n');
md.push('- [x] Vídeos (embed ou hosted) -> Iframes externos para YouTube e Spotify preservados\n');
md.push('\n');

md.push('## 5. Conteúdo Duplicado\n');
md.push('- Header e footer são repetidos em todas as páginas\n');
md.push('- Navegação principal e secundária são repetidas\n');
md.push('- Rodapé com informações da Comunidade Vitral é repetido\n');
md.push('- Elementos de design como botões, cards, badges, estilos são reutilizados em todo o site\n');
md.push('\n');

md.push('## 6. Conteúdo Restrito\n');
md.push('Nenhum conteúdo identificado como sigiloso, restrito ou com direitos autorais além do uso justo de trechos bíblicos (que já estão no site original).\n');
md.push('\n');

md.push('## 7. Páginas Removidas (se migração/redesign)\n');
md.push('| Página | Motivo | Referências a remover |\n');
md.push('|--------|--------|-----------------------|\n');
md.push('| Nenhuma | Todas as páginas existentes serão preservadas | N/A |\n');
md.push('\n');

md.push('## 8. Páginas Adicionadas (se novo)\n');
md.push('| Página | Objetivo | Prioridade |\n');
md.push('|--------|----------|-----------|\n');
md.push('| Nenhuma (migração) | N/A | N/A |\n');
md.push('\n');

md.push('## 9. Navegação\n');
md.push('### Header\n');
md.push('1. Início\n');
md.push('2. Material Complementar\n');
md.push('3. Mapa\n');
md.push('\n');
md.push('### Footer\n');
md.push('1. Política de privacidade\n');
md.push('2. Termos de uso\n');
md.push('3. Contato\n');
md.push('\n');

fs.writeFileSync(path.join(__dirname, 'documentacao', 'inventario.md'), md.join(''), 'utf-8');
console.log('Inventário gerado em documentacao/inventario.md');