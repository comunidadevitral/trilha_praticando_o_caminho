# COMANDOS DE EXTRAÇÃO ORIGINAL

Execute estes comandos exatamente como estão, sem interpretação ou resumo.

## 1. Estrutura de diretórios e arquivos
```bash
find original/trilha_praticando_o_caminho -type f | sort
```

## 2. Detalhes de todos os arquivos
```bash
find original/trilha_praticando_o_caminho -type f -exec ls -la {} \;
```

## 3. Conteúdo de arquivos HTML (texto puro, sem tags)
```bash
find original/trilha_praticando_o_caminho -name "*.html" -exec sh -c 'echo "=== {} ==="; lynx -dump -nolist {} 2>/dev/null || html2text {} 2>/dev/null || cat {} ; echo ""' \;
```

## 4. Verificação de scripts de tracking/analytics
```bash
find original/trilha_praticando_o_caminho -name "*.html" -exec sh -c 'echo "=== {} ==="; grep -i "gtm\|analytics\|ga\-||facebook\|pixel\|hotjar\|clarity\|tiktok\|yandex\|utm_" {} \; 2>/dev/null || true' \;
```

## 5. Arquivos de CSS e seus conteúdos
```bash
find original/trilha_praticando_o_caminho -name "*.css" -exec sh -c 'echo "=== {} ==="; cat {}; echo ""' \;
```

## 6. Arquivos JavaScript e seus conteúdos
```bash
find original/trilha_praticando_o_caminho -name "*.js" -exec sh -c 'echo "=== {} ==="; cat {}; echo ""' \;
```

## 7. Verificação de metadados em HTML
```bash
find original/trilha_praticando_o_caminho -name "*.html" -exec sh -c 'echo "=== {} ==="; grep -E "<title>|<meta|<link|<script" {} | head -20; echo ""' \;
```

## 8. Lista de todos os links internos e externos
```bash
find original/trilha_praticando_o_caminho -name "*.html" -exec sh -c 'echo "=== {} ==="; grep -o "href=\"[^\"]*\"" {} | cut -d"\"" -f2; echo ""' \;
```

## 9. Verificação de assets (imagens, fontes, etc.)
```bash
find original/trilha_praticando_o_caminho \( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" -o -name "*.svg" -o -name "*.woff" -o -name "*.woff2" -o -name "*.ttf" -o -name "*.ico" \) -exec ls -la {} \;
```

## 10. Estrutura do design system se existir
```bash
find original/trilha_praticando_o_caminho/design-system -type f | sort
```

**IMPORTANT:** 
- Não interpretar os resultados
- Não resumir os dados
- Apenas executar os comandos e registrar a saída bruta exatamente como aparece
- Se algum comando falhar (por falta de ferramentas como lynx/html2text), continuar com os próximos