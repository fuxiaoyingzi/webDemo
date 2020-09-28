import VueRouter from "vue-router";
import Vue from "vue";
import a from "../components/a.vue";
import b from "../components/b.vue";
import todo from "../components/todo.vue";
import todoOne from "../components/todo_one.vue";
import todoTwo from "../components/todo_two.vue";
import moreRouter from "../components/more-router.vue";
import leftView from "../components/left-view.vue";
import rightView from "../components/right-view.vue";
import helloView from "../components/hello.vue";
import error from "../components/error.vue";
Vue.use(VueRouter);
//路由表
const routes = [
  //路由 钩子函数
  {
    path: "/a",
    name: "a",
    component: a,
    beforeEnter: (to, from, next) => {
      console.log(to);
      console.log(from);
      next(true); //允许跳转
    },
  },
  { path: "/b", name: "b", component: b },
  {
    path: "/todo",
    component: todo,
    children: [
      {
        path: "/",
        name: "todo",
        component: todoOne,
      },
      {
        path: "todo_one",
        name: "todoOne",
        component: todoOne,
      },
      {
        path: "todo_two",
        name: "todoTwo",
        component: todoTwo,
      },
    ],
  },
  //   url 传参(添加正则，只能传递数字)
  {
    path: "/more-router/:userId(\\d+)/:userName",
    component: moreRouter,
    children: [
      {
        path: "/",
        components: {
          header: helloView,
          left: leftView,
          right: rightView,
        },
      },
    ],
  },
  // 路由重定向
  { path: "/goHome", redirect: "/a" },
  //带参数 重定向
  {
    path: "/goParams/:userId(\\d+)/:userName",
    redirect: "/more-router/:userId(\\d+)/:userName",
  },
  //路由别名
  { path: "/todo_two", component: todoTwo, alias: "/shadow" },
  //404页面
  { path: "*", component: error },
];

//创建路由对象
const vuerouter = new VueRouter({ mode: "history", routes });

//这句必须加，否则找不到
export default vuerouter;
