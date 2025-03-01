import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
// @ts-expect-error - no TS types yet for beta test.
import PluginObject from 'babel-plugin-react-compiler'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    [PluginObject],
    react(),
    tailwindcss(),
  ],
})
