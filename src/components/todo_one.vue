<template>
  <h1>
    hello shadow ,todo one !! {{ $route.params.username }}----{{
      $route.params.userId
    }}
  </h1>
</template>
<script>
export default {
  data() {
    return {
      msg: "hello children one",
    };
  },
};
</script>
<style scoped>
h1 {
  color: rebeccapurple;
}
</style>
