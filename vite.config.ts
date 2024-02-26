/// <reference types="vite/client" />
import path from "path"
import { TanStackRouterVite } from "@tanstack/router-vite-plugin"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { VitePWA } from "vite-plugin-pwa"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite(),

    react(),

    // https://vite-pwa-org.netlify.app/
    // VitePWA({
    //   registerType: "autoUpdate",
    //   devOptions: {
    //     enabled: true,
    //   },
    //   includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
    //   manifest: {
    //     name: "Vite React Starter",
    //     short_name: "VRS",
    //     description: "Vite + React + TypeScript + TailwindCSS + PWA",
    //     theme_color: "#ffffff",
    //     icons: [
    //       {
    //         src: "android-chrome-192x192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //       {
    //         src: "android-chrome-512x512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //     ],
    //   },
    // }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
