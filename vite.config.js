import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "node:path";
import UnoCSS from "unocss/vite";
import vueJsx from "@vitejs/plugin-vue-jsx";
import ElementPlus from "unplugin-element-plus/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), UnoCSS(), vueJsx(), ElementPlus()],
  resolve: {
    alias: [
      { find: "@", replacement: resolve(__dirname, "src") },
      // {
      //     find: 'vue', replacement: 'vue/dist/vue.esm-bundler',
      // }
    ],
  },
});
