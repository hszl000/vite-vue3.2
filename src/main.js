import { createApp } from "vue";
// import ElementPlus from "element-plus";
// import "element-plus/dist/index.css";

import store from '@/store/index'
import router from '@/router/index'

import widgets from '@/widgets/index.js'

import App from "./App.vue";
// 导入 全局 自定义指令
import initDirectives from '@/directives/index.js'
// 注册 全局属性
import initFilters from '@/Filters/index.js'

const app = createApp(App);

initDirectives(app) // 全局指令
initFilters(app) // 全局属性

// app.use(ElementPlus);
app
  .use(store)
  .use(router)
  .use(widgets)
  .mount("#app");
