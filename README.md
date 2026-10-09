# Trilha Praticando o Caminho — v2 (Astro)

Migração do site original `trilha-praticando-o-caminho.comunidadevitral.workers.dev` para Astro 6 + Tailwind v4, mantendo paridade visual, tracking e performance.

## Pré-requisitos

* Node.js 22.12+
* npm >= 9

## Instalação

```bash
npm install
```

## Desenvolvimento

```bash
npm run dev
```

Servidor em http://localhost:4321

## Build

```bash
npm run build
```

Saída em `dist/`.

## Estrutura

```
src/
  layouts/BaseLayout.astro
  pages/
    index.astro
    mapa.astro
    complementar.astro
    passo-1.astro ... passo-17.astro
  styles/global.css
  data/html/   # HTMLs originais extraídos
public/
  css/
  js/
  favicon.svg
```

## Deploy

Cloudflare Pages / Netlify. Configure `site` em `astro.config.mjs`.

## Documentação

Veja `documentacao/` na raiz do repositório para PRD, design, inventário e protocolo de migração visual.
