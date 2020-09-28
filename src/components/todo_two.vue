<template>
  <h1>{{ msg }}</h1>
</template>
<script>
export default {
  data() {
    return {
      msg: "hello children two",
    };
  },
};
</script>
<style scoped>
h1 {
  color: blue;
}
</style>
