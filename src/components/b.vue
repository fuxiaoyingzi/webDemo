<template>
  <div>
    <h1>hello world -- 1!</h1>
    <h1 @click="openB">{{ msg }}</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "跳转TodoList",
    };
  },
  methods: {
    openB() {
      this.$router.push({ name: "todo" });
    },
  },

  //路由钩子 函数
  beforeRouteLeave: (to, from, next) => {
    console.log("页面B --- 准备离开页面");
    next();
  },
  beforeRouteEnter: (to, from, next) => {
    console.log("页面 B -- 准备进入页面");
    next();
  },
};
</script>
<style scoped></style>
