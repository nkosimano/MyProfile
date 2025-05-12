// vite.config.ts
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const base = env.NODE_ENV === 'production' && process.env.DEPLOY_ENV === 'custom_domain'
    ? '/'
    : '/MyProfile/';

  return {
    plugins: [react()],
    base: base,
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
  };
});