import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// 配置 element-plus 按需引入
import ElementPlus from "unplugin-element-plus/vite";
// 导入 path
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  base:'/study',
  plugins: [vue(), ElementPlus()],
  server: {
    port: 5000,
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src')
      },
      // {
      //   find: 'store',
      //   replacement: path.resolve(__dirname, 'src/store')
      // },
      // {
      //   find: 'comps',
      //   replacement: path.resolve(__dirname, 'src/components')
      // },
      // {
      //   find: 'utils',
      //   replacement: path.resolve(__dirname, 'src/utils')
      // },
      // {
      //   find: 'modules',
      //   replacement: path.resolve(__dirname, 'src/modules')
      // },
      // {
      //   find: 'router',
      //   replacement: path.resolve(__dirname, 'src/router')
      // },
      // {
      //   find: 'widgets',
      //   replacement: path.resolve(__dirname, 'src/widgets')
      // },
      // {
      //   find: 'mixins',
      //   replacement: path.resolve(__dirname, 'src/mixins')
      // }
    ]
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: "@import './src/styles/element-variables.scss';"
      }
    }
  }
});
