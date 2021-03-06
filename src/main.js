//创建vue根实例
import Vue from "vue";
//导入 APP组件
import App from "./app.vue";
import vuerouter from "./router/router.js";
import store from "./store/store.js";

import ElementUI from "element-ui";
//import "element-ui/lib/theme-chalk/index.css";

import "./api/mock/mock"

Vue.use(ElementUI);

//挂载APP组件

new Vue({
  el: "#app",
  router: vuerouter,
  store: store,
  render: (h) => h(App),
});

vuerouter.push({ name: "a" });
