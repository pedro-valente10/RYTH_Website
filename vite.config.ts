import { defineConfig } from 'vite';

export default defineConfig({
  // Diz ao Vite que a nova raiz do projeto é a pasta pages
  root: 'src/pages/home',

  build: {
    // Como a raiz mudou, a pasta final de produção (dist) iria parar dentro de src/pages.
    // Isso garante que o build continue sendo gerado na raiz original do projeto.
    outDir: '../../../dist',
    emptyOutDir: true 
  }
});