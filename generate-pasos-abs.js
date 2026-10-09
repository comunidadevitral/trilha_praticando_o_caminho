const fs = require('fs');
const path = require('path');

const jsonPath = '/home/ismael/Projetos/migracao/projetos/trilha_praticando_o_caminho/original/trilha_praticando_o_caminho/dados/passos.json';
const data = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
const pasos = data['passos'];

const outputDir = path.join('/home/ismael/Projetos/migracao/projetos/trilha_praticando_o_caminho/v2', 'src', 'content', 'steps');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Helper to escape YAML strings for multiline
function yamlString(str) {
  if (str === null || str === undefined) return '';
  // Replace newlines with \n and then we'll use |- block scalar
  return str.replace(/\n/g, '\\n');
}

pasos.forEach(paso => {
  const { id, titulo, subtitulo, etapa, status, semana, medite, assista, aprofunde, pratiche, organizese, para_comecar, ouca } = paso;
  
  let frontmatter = '---\n';
  frontmatter += `titulo: "${titulo.replace(/"/g, '\\\"')}"\n`;
  frontmatter += `subtitulo: "${subtitulo.replace(/"/g, '\\\"')}"\n`;
  frontmatter += `etapa: ${etapa}\n`;
  frontmatter += `status: "${status}"\n`;
  frontmatter += `semana: ${semana}\n`;
  
  if (medite) {
    frontmatter += 'medite:\n';
    frontmatter += `  base_biblica: "${medite.base_biblica.replace(/"/g, '\\\"')}"\n`;
    frontmatter += `  devocional: |\n`;
    // Split devocional by newline and indent each line by 4 spaces
    const devocionalLines = medite.devocional.split('\n');
    devocionalLines.forEach(line => {
      frontmatter += `    ${line.replace(/"/g, '\\\"')}\n`;
    });
  }
  
  if (assista) {
    frontmatter += 'assista:\n';
    frontmatter += `  titulo: "${assista.titulo.replace(/"/g, '\\\"')}"\n`;
    if (assista.url) {
      frontmatter += `  url: "${assista.url}"\n`;
    }
  }
  
  if (aprofunde) {
    frontmatter += 'aprofunde:\n';
    if (aprofunde.livro) {
      frontmatter += '  livro:\n';
      frontmatter += `    titulo: "${aprofunde.livro.titulo.replace(/"/g, '\\\"')}"\n`;
      if (aprofunde.livro.autor) {
        frontmatter += `    autor: "${aprofunde.livro.autor.replace(/"/g, '\\\"')}"\n`;
      }
      if (aprofunde.livro.url) {
        frontmatter += `    url: "${aprofunde.livro.url}"\n`;
      }
    }
    if (aprofunde.musica) {
      frontmatter += '  musica:\n';
      frontmatter += `    titulo: "${aprofunde.musica.titulo.replace(/"/g, '\\\"')}"\n`;
      if (aprofunde.musica.artista) {
        frontmatter += `    artista: "${aprofunde.musica.artista.replace(/"/g, '\\\"')}"\n`;
      }
      if (aprofunde.musica.url) {
        frontmatter += `    url: "${aprofunde.musica.url}"\n`;
      }
    }
  }
  
  if (pratique) {
    frontmatter += 'pratique:\n';
    if (pratique.desafio !== undefined && pratique.desafio !== null) {
      frontmatter += `  desafio: "${pratique.desafio.replace(/"/g, '\\\"')}"\n`;
    }
    frontmatter += `  experimento: "${pratique.experimento.replace(/"/g, '\\\"')}"\n`;
    frontmatter += `  pergunta: "${pratique.pergunta.replace(/"/g, '\\\"')}"\n`;
    if (pratique.instrucoes) {
      frontmatter += `  instrucoes: |\n`;
      const instrucoesLines = pratique.instrucoes.split('\n');
      instrucoesLines.forEach(line => {
        frontmatter += `    ${line.replace(/"/g, '\\\"')}\n`;
      });
    }
  }
  
  if (organizese) {
    frontmatter += 'organizese:\n';
    if (organizese.dias) {
      frontmatter += '  dias:\n';
      organizese.dias.forEach(dia => {
        frontmatter += '  - ';
        frontmatter += `dia: "${dia.dia.replace(/"/g, '\\\"')}"`;
        if (dia.tema) {
          frontmatter += `, tema: "${dia.tema.replace(/"/g, '\\\"')}"`;
        }
        if (dia.leitura) {
          frontmatter += `, leitura: "${dia.leitura.replace(/"/g, '\\\"')}"`;
        }
        frontmatter += '\n';
      });
    }
    if (organizese.desafio_semana) {
      frontmatter += `  desafio_semana: "${organizese.desafio_semana.replace(/"/g, '\\\"')}"\n`;
    }
  }
  
  if (para_comecar) {
    frontmatter += 'para_comecar:\n';
    frontmatter += `  resumo: |\n`;
    const resumoLines = para_comecar.resumo.split('\n');
    resumoLines.forEach(line => {
      frontmatter += `    ${line.replace(/"/g, '\\\"')}\n`;
    });
    if (para_comecar.apostila_pdf) {
      frontmatter += `  apostila_pdf: "${para_comecar.apostila_pdf}"\n`;
    }
  }
  
  if (ouca) {
    frontmatter += 'ouca:\n';
    frontmatter += `  titulo: "${ouca.titulo.replace(/"/g, '\\\"')}"\n`;
    if (ouca.spotify_url) {
      frontmatter += `  spotify_url: "${ouca.spotify_url}"\n`;
    }
  }
  
  frontmatter += '---\n\n';
  // Body can be empty or we can put a placeholder
  const body = '';
  
  const filePath = path.join(outputDir, `paso-${id}.md`);
  fs.writeFileSync(filePath, frontmatter + body, 'utf8');
  console.log(`Generated: paso-${id}.md`);
});

console.log('All paso files generated.');
