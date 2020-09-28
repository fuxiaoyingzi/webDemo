<template>
  <div>
    <h1>hello world，hello vue，hello shadow!</h1>
    <h1 @click="openB">{{ msg }}</h1>
    <router-link to="/goParams/123456/重定向传参，付小影子"
      >重定向传参</router-link
    >
    <router-link to="/shadow">todo-two的路由别名</router-link>
    <router-link to="/todo_two">todo_two</router-link>
    <router-link to="/111">跳转404</router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "代码跳转 TO B",
    };
  },
  methods: {
    openB() {
      console.log("跳转B");
      this.$router.push({ name: "b" });
    },
  },
};
</script>
<style scoped></style>
