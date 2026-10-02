Inventário de produção do portfólio: protótipo `docs/prototype/Main.dc.html` → componente → dados → rota, com o estado de cada parte e as decisões que divergem do protótipo ou das especificações em `docs/specs/`.

## Inventário

| Protótipo | Componente | Dados | Rota | Status |
|---|---|---|---|---|
| Navegação fixa, ambiente da seção | `components/navigation/site-nav.tsx` | — | todas | IMPLEMENTED |
| Hero (vídeo, poster, cena, Flight, Wind) | `components/hero/hero.tsx` | `content/site.ts` | `/` | IMPLEMENTED |
| Manifesto + Petal (uma vez por sessão) | `components/manifesto/manifesto.tsx` | `content/site.ts` | `/` | IMPLEMENTED |
| Capabilities (lista numerada, disclosure) | `components/capabilities/capabilities.tsx` | `content/capabilities.ts` | `/` | IMPLEMENTED |
| Selected Work (jornada fixada, índice 01/03, porta do arquivo) | `components/selected-work/selected-work.tsx` | `content/projects.ts` | `/` | IMPLEMENTED |
| Track record teaser | `components/track-record/track-teaser.tsx` | `content/experience.ts` | `/` | IMPLEMENTED |
| Archive (ALL/WEB/MOBILE/IOT/AI + busca + URL) | `components/project-archive/archive.tsx` | `content/projects.ts` | `/projects` | IMPLEMENTED |
| Estudo de caso + Proof of Work | `components/project-detail/*`, `components/proof-of-work/*` | `content/projects.ts` | `/projects/[slug]` | IMPLEMENTED · REQUIRES CONTENT |
| Workbench | `components/workbench/workbench.tsx` | `content/workbench.ts` | `/lab` | IMPLEMENTED · REQUIRES CONTENT |
| Track record | `components/track-record/track-record.tsx` | `content/experience.ts` | `/about` | IMPLEMENTED · REQUIRES CONTENT |
| Horizon / Contact + relógio | `components/horizon/horizon.tsx`, `components/live-clock/live-clock.tsx` | `content/site.ts` | todas exceto detalhe; `/contact` | IMPLEMENTED · REQUIRES CONTENT |
| Transições de página (open/return, forward/back) | `components/project-transition/*` | — | todas | IMPLEMENTED |
| Revelações Wind/Draft | `components/section-transition/motion-controller.tsx` | — | todas | IMPLEMENTED |

## Conteúdo ainda marcado

Nada foi inventado. O que falta aparece na página como `[CONTENT REQUIRED]`, `[RESULT NOT MEASURED]`, `[LINK REQUIRED]` ou `[STATUS REQUIRED]`:

- Papel, período e status de Vetor, Delphos e Cafey; problema e objetivo de Delphos e de Vetor; implementação e limitações de Delphos.
- Status de todos os projetos do arquivo, exceto Cafey (`Phase 1 · schematic validated`).
- Stack do Rosary Store.
- "Why" e status de cada item do Workbench; nenhum equipamento físico confirmado.
- Período, cargo e contribuição na Alfabra Elevadores; contribuições dos projetos acadêmicos 01–04.
- Links de Email e LinkedIn; registros de deploy (Delphos, Cafey) e arquivos do modelo FreeCAD.

## Decisões de implementação

- **Navegação com View Transitions nativa.** `navigate.ts` chama `document.startViewTransition` em volta do `router.push` e só resolve depois que a rota nova monta (`RouteSettled`). Isso preserva a coreografia do protótipo (desenrolar sobre a faixa da entrada, retorno à mesma prancha) sem dependências. Sem suporte do navegador, a navegação acontece sem animação.
- **Jornada fixada só com JS.** O pin depende do atributo `data-pinned`. Sem JS, em janelas baixas/estreitas ou com movimento reduzido, Selected Work é um scroll horizontal nativo com snap.
- **Altura mínima da jornada.** O protótipo só fixava a jornada com a janela a partir de 760px de altura; abaixo disso, a seção virava uma faixa nativa e a página descia direto, o que contraria o handoff. O conteúdo fixado mede 618px a partir de 1280px de largura e 666px entre 1024px e 1279px, então a jornada passou a fixar a partir de 640px e 680px de altura, respectivamente. Abaixo desses limites, mantém a faixa nativa. A altura da seção fixada é `max(min(100vh, 760px), min(100vh, 62.5vw))`: igual ao protótipo com a janela a partir de 760px de altura e igual à altura da janela abaixo disso.
- **Card final.** O percurso termina quando o centro da porta do arquivo coincide com o centro da janela (`railTravel`); o card não foi aumentado.
- **GitHub no rodapé** aponta para `github.com/Tavaressan`, a conta que hospeda todos os repositórios citados no briefing. O protótipo ainda marcava `[LINK REQUIRED]`.
- **Repositórios verificados** com `git ls-remote` em 2026-10-02: todos os de `Tavaressan/*` existem, inclusive `cafey`. `RafaelBorges22/PI-5SM-BACK` (backend do UP Barber) não pôde ser lido nesta sessão; o link do protótipo foi mantido.
- **Mídia.** `hero.mp4` (H.264, CRF 26, faststart, sem áudio) 1,6 MB; `hero.webm` (VP9) 1,4 MB; poster WebP 90 kB. O original tinha 5,2 MB e nenhuma faixa de áudio.

## Divergências classificadas

| Item | Classe | Nota |
|---|---|---|
| Relógio `São Paulo · UTC−03` | REINTERPRETED | Segue o handoff; sem `SYSTEM ONLINE`. |
| Card final "View all projects" | REINTERPRETED | O protótipo dizia "All projects"; o handoff pede "VIEW ALL PROJECTS". |
| Grupos do Workbench | NEEDS DECISION | Usam os nomes do handoff. KiCad e FreeCAD, que o protótipo agrupava como "Hardware", ficaram em "Physical Workbench"; são ferramentas de projeto, não equipamento. |
| Capabilities | NEEDS DECISION | Mantidas as quatro linhas do protótipo, todas com evidência. A lista conceitual do handoff cita Kafka, Redis, ROS2, FreeRTOS e MCP, que ainda não têm projeto ou evidência no conteúdo. |
| Workbench preview na Home | NEEDS DECISION | Está no DESIGN_DIRECTION, mas fica fora da arquitetura do handoff e do protótipo; não foi implementado. |
| BLE na stack do Cafey | IMPLEMENTED | Confirmado no handoff; incluído na lista completa e no alt da Fig. 03. |
| Espaçamento vertical das linhas abaixo de 1024px | IMPLEMENTED | O `row-gap: 8px` do protótipo é anulado por um `!important`; o resultado aprovado tem 24px, e foi esse que ficou. |
| Jornada fixada em janelas de 640–759px de altura | REINTERPRETED | O protótipo desligava a jornada abaixo de 760px; ela agora fixa onde o conteúdo cabe, como pede o handoff. |
| Busca e filtros sem JS | REINTERPRETED | Sem JS, `/projects` mostra o arquivo inteiro; os filtros exigem JS. |
