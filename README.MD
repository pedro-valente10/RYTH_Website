# RYTH Website

Site institucional da RYTH, construído com **Vite + TypeScript**, sem framework de UI (HTML/CSS/TS puro).

## Stack

- [Vite](https://vitejs.dev/) — bundler e dev server
- TypeScript
- HTML + CSS puro (sem framework de UI)

## Pré-requisitos

- Node.js (LTS mais recente recomendado)
- npm

## Configuração do ambiente

Clone o repositório e instale as dependências:

```bash
git clone <url-do-repositorio>
cd ryth_website
npm install
```

Rode o servidor de desenvolvimento:

```bash
npm run dev
```

A aplicação abre em `http://localhost:5173/`.

Build de produção:

```bash
npm run build
```

Os arquivos finais são gerados em `dist/`.

## Estrutura de pastas

```
ryth_website/
├── index.html                  # Página inicial (home) — entry point do Vite
├── public/                     # Arquivos estáticos servidos sem processamento
│   └── favicon.svg
├── src/
│   ├── main.ts                 # Entry point TypeScript, importa estilos e inicializa componentes globais
│   ├── vite-env.d.ts           # Referência de tipos do Vite (necessário p/ imports de .svg, .css, etc.)
│   ├── styles/
│   │   ├── reset.css
│   │   ├── global.css
│   │   └── variables.css       # Cores, fontes e outras variáveis CSS globais
│   ├── assets/
│   │   └── icons/
│   │       └── ryth-logo.svg   # Logo usada nos componentes (navbar, footer)
│   ├── components/
│   │   ├── navbar/
│   │   │   ├── navbar.ts       # Template + função renderNavbar()
│   │   │   └── navbar.css
│   │   └── footer/
│   │       ├── footer.ts       # Template + função renderFooter()
│   │       └── footer.css
│   └── pages/                  # Páginas internas do site (cada uma com seu próprio index.html)
├── tsconfig.json
└── vite.config.ts
```

## Convenções do projeto

### Componentes globais (Navbar / Footer)

Navbar e footer são **iguais em todas as páginas do site**. Em vez de duplicar HTML, cada um é uma função TypeScript que injeta seu template num container:

```html
<!-- em qualquer página -->
<div id="navbar-root"></div>
<!-- ...conteúdo da página... -->
<div id="footer-root"></div>
```

```ts
// no main.ts (ou entry point da página)
import { renderNavbar } from "./components/navbar/navbar";
import { renderFooter } from "./components/footer/footer";

renderNavbar();
renderFooter();
```

Essa abordagem foi escolhida por performance: o HTML já vem como string estática no `.ts`, sem `fetch` nem parsing assíncrono extra.

### CSS

Nomenclatura de classes em **BEM** (`bloco__elemento--modificador`), ex: `navbar__link--login`.

Variáveis globais (cores, fontes) ficam centralizadas em `src/styles/variables.css` e são consumidas via `var(--nome-da-variavel)` nos demais arquivos CSS.

### Assets: `src/assets/` vs `public/`

- **`src/assets/`** — para tudo que é referenciado dentro do código (importado em `.ts`/`.css`). O Vite processa, otimiza e faz cache-busting desses arquivos no build. Ex: a logo usada no navbar/footer.
- **`public/`** — para arquivos que precisam de uma URL fixa, sem processamento (ex: `favicon.svg`). Tudo aqui é copiado como está para a raiz do `dist` no build, e pode ser referenciado por caminho absoluto (`/favicon.svg`) de qualquer página.

### Múltiplas páginas

O projeto é multi-página: a home fica na raiz (`index.html`), e páginas internas devem ser criadas em `src/pages/<nome>/index.html`.

Ao criar uma **segunda** página, é necessário declarar todas as entradas no `vite.config.ts` (incluindo a da raiz) em `build.rollupOptions.input`, já que o Vite por padrão só builda o `index.html` da raiz automaticamente. Há um exemplo comentado no próprio `vite.config.ts`.

## Troubleshooting comum

- **`Cannot find module` em algum import**: confira se o caminho relativo bate com a localização real do arquivo (ex: `main.ts` está em `src/`, então imports dele para `src/components/...` devem ser `./components/...`, sem repetir `src/`).
- **Erro 404 de algum `.ts`/`.css` no navegador**: caminhos absolutos (`/algo`) no HTML são resolvidos a partir da raiz do projeto (onde fica o `vite.config.ts`), não da pasta onde está o HTML.
- **`Cannot find module '...svg'` no TypeScript**: confirme que existe `src/vite-env.d.ts` com `/// <reference types="vite/client" />`, e que o `tsconfig.json` tem `"include": ["src"]` (não só um arquivo específico).