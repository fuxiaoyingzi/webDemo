<template>
  <div>
    <h1>hello shadow,单页面多路由</h1>
    <p>传递过来的参数id--- {{ $route.params.userId }}</p>
    <p>传递过来的参数name--- {{ $route.params.userName }}</p>
    <router-link to="/goHome">路由重定向 goHome</router-link>
    <router-view
      name="header"
      style="width: 98%; height: 200px; text-align: center; background-color: darkorange;margin-top: 30px;"
    ></router-view>
    <router-view
      name="left"
      style="float: left; width: 20%; height: 500px; background-color: burlywood;"
    ></router-view>
    <router-view
      name="right"
      style="float: left; width: 78%; height: 500px; background-color: cyan;"
    ></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style></style>
