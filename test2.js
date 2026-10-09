const fs = require('fs');
const path = require('path');

const jsonPath = '/home/ismael/Projetos/migracao/projetos/trilha_praticando_o_caminho/original/trilha_praticando_o_caminho/dados/passos.json';
const data = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
const pasos = data['passos'];

pasos.forEach(paso => {
  console.log(paso.pratique);
});
