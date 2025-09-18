import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom', // <- gir deg window/document
    // setupFiles: ['./vitest.setup.ts'], // valgfritt
    projects: [
      'src/tests', // tester i src/tests
      'src' // tester i src
    ],
  },
});