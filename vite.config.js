import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dotenv from 'dotenv';

// Загрузка переменных из .env
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), ViteImageOptimizer({})],
  base: '/SkyPrint1/dist',
  define: {
    'process.env': process.env, // Делаем переменные доступными
  },
})
