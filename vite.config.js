import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration: React plugin + relative base path so the built site
// can be opened from any folder or hosted on GitHub Pages.
export default defineConfig({
  plugins: [react()],
  base: './',
});
