//创建vue根实例
import Vue from "vue";
//导入 APP组件
import App from "./app.vue";

import ElementUI from "element-ui";
//import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);
//创建vue根实例

// new Vue({
//   el: "#app",
//   components: {
//     //组件名：组件对象
//     App: App,
//   },
//   template: "<App/>", //组件名
// });

//挂载APP组件

new Vue({
  el: "#app",
  render: (h) => h(App),
});
