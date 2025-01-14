import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from "@originjs/vite-plugin-federation"
import path from 'path';
import {BootstrapVueNextResolver} from "unplugin-vue-components/resolvers"
import Components from "unplugin-vue-components/vite"
import Icons from "unplugin-icons/vite"
import IconsResolve from "unplugin-icons/resolver"
import { fileURLToPath, URL } from 'node:url';

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3006,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "*",
      "Access-Control-Allow-Headers": "*",
  },    
  },
  plugins: [
    vue(),
    federation({
      name: "remoteApp",  //app name
      remotes: {
        remoteApp: "http://localhost:7070/assets/remoteEntry.js",
      },
      shared: ["vue"],
    }),
    Components({
      dts: true,
    }),
    Icons({
      compiler: "vue3",
      autoInstall: true,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./', import.meta.url)),
    },
  },
})
