# Vitor Tavares — Portfolio

Next.js 16 (App Router, TypeScript), sem bibliotecas de UI ou de animação. Implementa o protótipo validado em `docs/prototype/`, a partir das especificações em `docs/specs/`.

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build && npm start
```

## Estrutura

- `app/`: rotas `/`, `/projects`, `/projects/[slug]`, `/lab`, `/about`, `/contact`.
- `content/`: todo o conteúdo e os contratos de tipo. Os componentes só apresentam.
- `components/`: um diretório por parte da experiência, cada um com seu CSS.
- `styles/`: `tokens.css` (tipo, grid, movimento), `themes.css` (ambientes Paper/Night), `globals.css`, `motion.css` (revelações e View Transitions).
- `public/media/`: vídeo do Hero (WebM + MP4), poster e retrato.
- `docs/IMPLEMENTATION_NOTES.md`: inventário, conteúdo pendente e decisões.

## Conteúdo

Nada é inventado. O que falta aparece como `[CONTENT REQUIRED]`, `[RESULT NOT MEASURED]`, `[LINK REQUIRED]` ou `[STATUS REQUIRED]`. Para completar, edite os arquivos em `content/`.
