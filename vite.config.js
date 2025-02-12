import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dotenv from 'dotenv';

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), ViteImageOptimizer({})],
  base: '/SkyPrint/dist/',
  //base: process.env.NODE_ENV === 'production' ? '/SkyPrint/dist/' : '/', // Укажите имя репозитория
  define: {
    'process.env': process.env, 
  },
})
