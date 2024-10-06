import { defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'
export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/__tests__/setup.ts'], // Adjusted path
    include:['**/*.test.tsx']
  },

  plugins: [react(),tsconfigPaths()],


});
