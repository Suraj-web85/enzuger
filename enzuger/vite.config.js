import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import simpleHtmlPlugin from 'vite-plugin-simple-html';

export default defineConfig({
  plugins: [
    react(),
    simpleHtmlPlugin({
      inject: {
        injectTo: 'head',
        tags: [
          {
            tag: 'meta',
            attrs: {
              name: 'description',
              content: 'My awesome app',
            },
          },
          {
            tag: 'script',
            attrs: {
              src: 'https://code.jquery.com/jquery-3.4.1.min.js',
            },
          },
          // You can add more tags here as needed
        ],
      },
    }),
  ],
});
