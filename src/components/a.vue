<template>
  <div>
    <h1>hello world，hello vue，hello shadow!</h1>
    <h1 @click="openB">{{ msg }}</h1>
    <h1 @click="increment">store count++</h1>
    <h1 @click="setUser({ num: 10 })">传递对象 store count+10</h1>
    <h1 @click="increment1(10)">传递数字 store count+10</h1>
    <h1>count：{{ $store.state.count }}</h1>
    <h1>计算方法获取store count：{{ doneTodosCount }}</h1>
    <h1>计算方法获取store count：{{ count }}</h1>
    <router-link to="/goParams/123456/重定向传参，付小影子"
      >重定向传参</router-link
    >
    <router-link to="/shadow">todo-two的路由别名</router-link>
    <router-link to="/todo_two">todo_two</router-link>
    <router-link to="/111">跳转404</router-link>
  </div>
</template>
<script>
//mapState 辅助函数仅仅是将 store 中的 state 映射到局部计算属性
import { mapState } from "vuex";
//mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性
import { mapGetters } from "vuex";

//mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部methods方法
import { mapMutations } from "vuex";

//mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部methods方法
import { mapActions } from "vuex";

export default {
  data() {
    return {
      msg: "代码跳转 TO B",
    };
  },
  created() {
    var res = this.getUserInfo();
    console.log("store userIofo ---- " + res);
  },

  methods: {
    openB() {
      console.log("跳转B");
      this.$router.push({ name: "b" });
    },

    //=====如果需要操作多个数据，这时候我们就需要mapMutations，通过它将方法映射过来======
    //mapMutations(['addAge'])这一句就相当于下面的代码
    // addAge(payLoad){
    //   this.$store.commit('addAge',payLoad)
    // }
    //参数我们可以在调用这个方法的时候写入
    //<button @click="addAge({number:5})">测试</button>

    ...mapMutations(["increment", "increment1", "setUser"]),
    // increment() {
    //   this.$store.commit("increment");
    //   console.log(this.$store.state.count);
    // },
    // increment10() {
    //   this.$store.commit("increment1", 10);
    // },

    //============操作store action======
    //等同于
    // getUserInfo(){
    //   return this.$store.dispatch(‘getUserInfo’)
    // }
    ...mapActions(["getUserInfo"]),
  },
  // computed: {
  //   count() {
  //     return this.$store.state.count;
  //   },
  // },

  //当映射的计算属性的名称与 state 的子节点名称相同时，我们也可以给 mapState 传一个字符串数组
  computed: {
    //映射 getters 中方法的名字
    ...mapGetters([
      "doneTodosCount",
      "anotherGetter",
      // ...
    ]),
    ...mapState(["count", "name"]),
  },
};
</script>
<style scoped></style>
