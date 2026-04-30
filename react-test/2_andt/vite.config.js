import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import babel from 'vite-plugin-babel'
 
export default defineConfig({
  define: {
    global: 'window',
  },
  plugins: [
    babel({
      filter: /\.[jt]sx?$/,
      babelConfig: {
        babelrc: false,
        configFile: false,
        presets: ['@babel/preset-react'],
        plugins: [
          ['@babel/plugin-proposal-decorators', { legacy: true }],
          ['@babel/plugin-proposal-class-properties', { loose: true }],
        ],
      },
    }),
    react(),
  ],
})