import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import process from 'process'

export default defineConfig({
  plugins: [preact()],
  base: "/Kasa/" 
});
