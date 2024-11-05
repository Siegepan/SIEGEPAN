import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
  viteStaticCopy({
    targets: [
      {
        src: 'src/assets/lotties/0H93rE5C00.json',
        dest: 'assets/lotties',
      },
    ],
  }),
  ],
  base: "/", // Define a base para o seu aplicativo, geralmente a raiz "/"
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  server: {
    historyApiFallback: true, // Permite que todas as rotas apontem para index.html
  },
})
