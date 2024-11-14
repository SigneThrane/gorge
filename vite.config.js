import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: "Gorge",              
        short_name: "Gorge",        
        description: "Your app's description",
        start_url: "/",              
        display: "standalone",       
        theme_color: "#4DBA87",      
        background_color: "#ffffff", 
        icons: [
          {
            src: './img/icons/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: './img/icons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: './img/icons/android-chrome-maskable-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable'
          },
          {
            src: './img/icons/android-chrome-maskable-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          },
            {
            src: './img/icons/android-chrome-maskable-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          },
          {
            src: './img/icons/apple-touch-icon-76x76.png',
            sizes: '76x76',
            type: 'image/png',
            purpose: 'maskable'
          },
          {
            src: './img/icons/apple-touch-icon-60x60.png',
            sizes: '60x60',
            type: 'image/png',
            purpose: 'maskable'
          },
          {
            src: './img/icons/apple-touch-icon-120x120.png',
            sizes: '120x120',
            type: 'image/png',
            purpose: 'maskable'
          },
          {
            src: './img/icons/apple-touch-icon-152x152.png',
            sizes: '152x152',
            type: 'image/png',
            purpose: 'maskable'
          },
          {
            src: './img/icons/apple-touch-icon-180x180.png',
            sizes: '180x180',
            type: 'image/png',
            purpose: 'maskable'
          },
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
});
