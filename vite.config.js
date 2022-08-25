import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// 配置 element-plus 按需引入
import ElementPlus from "unplugin-element-plus/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), ElementPlus()],
});
