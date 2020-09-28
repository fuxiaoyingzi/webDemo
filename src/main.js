//创建vue根实例
import Vue from "vue";
//导入 APP组件
import App from "./app.vue";
import vuerouter from "./router/router.js";

import ElementUI from "element-ui";
//import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);

//挂载APP组件

new Vue({
  el: "#app",
  router: vuerouter,
  render: (h) => h(App),
});

vuerouter.push({ name: "a" });
