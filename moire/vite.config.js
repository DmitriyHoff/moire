import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // eslint-disable-next-line no-undef
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [vue()],
    base: env.MODE === 'development' ? '/' : '/moire/',
    publicPath: env.MODE === 'development' ? '/' : '/moire/',
    resolve: {
      alias: {},
    },
  };
});
