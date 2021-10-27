import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
const path = require('path');

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, './src') },
      { find: '@components', replacement: '/src/components' },
      { find: '@services', replacement: '/src/_services' },
      { find: '@utils', replacement: '/src/_utils' },
      { find: '@hooks', replacement: '/src/hooks' },
    ],
  },
});
