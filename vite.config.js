import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
  federation({
    name: 'profile-app',
    filename: 'remoteEntry.js',
    exposes: {
      './profile': './src/App.jsx'
    },
    shared: ['react', 'react-dom'],
  })
  ],
  build: {
    target: 'esnext',
    minify: false,
  },

});
