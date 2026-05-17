import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  const reactAppDefines = Object.keys(env)
    .filter((key) => key.startsWith('REACT_APP_'))
    .reduce((acc, key) => {
      acc[`process.env.${key}`] = JSON.stringify(env[key]);
      return acc;
    }, {});

  return {
    plugins: [react()],
    publicDir: 'public',
    base: './',
    build: {
      outDir: 'build',
      sourcemap: false,
    },
    server: {
      port: 3000,
      open: true,
    },
    preview: {
      port: 3000,
    },
    define: {
      'process.env.PUBLIC_URL': JSON.stringify(''),
      'process.env.NODE_ENV': JSON.stringify(mode),
      ...reactAppDefines,
    },
  };
});
