# Checklist de Validação Visual – Home (01-home.png)

## Referência
- Arquivo: `documentacao/imagens/home.png`
- Baseline: `/baseline/desktop-1440/01-home.png`
- URL original: https://trilha-praticando-o-caminho.comunidadevitral.workers.dev/

## 1. Header / Navegação
- [ ] Logotipo “Praticando o Caminho · Comunidade Vitral” presente e alinhado à esquerda
- [ ] Navegação desktop com 3 links: Início (ativo), Material Complementar, Mapa
- [ ] Estados hover/focus visíveis
- [ ] Header sticky ao rolar a página
- [ ] Versão mobile (hamburger) aberta/fechada

## 2. Hero
- [ ] Label “ESTAÇÃO 2 — PRATICANDO O CAMINHO”
- [ ] Título “Esteja com Jesus, Torne-se como Ele, Faça como Ele fez”
- [ ] Subtítulo explicando jornada de 17 passos
- [ ] Botões CTAs “Começar a jornada” e “Material complementar”

## 3. Seção “Os 17 Passos da Jornada”
- [ ] Container `etapas-container` renderiza etapas
- [ ] `steps-grid` exibe cards em 3 por linha no desktop (ajuste aplicado)
- [ ] Cada `step-card` contém: número, status, título, subtítulo, semana, link/“Em breve”
- [ ] Cards bloqueados com classe `locked` e texto “Em breve”
- [ ] Espaçamento e tipografia iguais ao original

## 4. Footer
- [ ] Texto “Praticando o Caminho · Comunidade Vitral”
- [ ] Frase “Esteja com Jesus, Torne-se como Ele, Faça como Ele fez”
- [ ] Link “Voltar ao topo”

## 5. Assets / Tracking
- [ ] CSS `/css/tokens.css` e `/css/estilo.css` carregados
- [ ] JS `/js/app.js` carregado (is:inline no layout)
- [ ] Scripts de tracking/pixel não removidos

## Resultado
- Conforme: ✅
- Não conforme: ❌
- Observações:
  - Header, navegação e hero presentes (validados via curl)
  - CSS override para 3 cards/linha ativo
  - Scripts e assets carregados


