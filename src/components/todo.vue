<template>
  <div>
    <main-header></main-header>

    <input
      type="text"
      placeholder="请输入内容"
      v-model="content"
      maxlength="10"
    />
    <el-button @click="addItem">添加</el-button>

    <ul>
      <li v-for="(item, index) in dataList">{{ item }}</li>
    </ul>

    <!-- 带参数传递 -->
    <router-link
      :to="{
        name: 'todoOne',
        params: { username: 'shadow', userId: '18238636138' },
      }"
      pa
      >todo-one</router-link
    >
    <router-link to="todo_two">todo-two</router-link>
    <router-link to="/more-router/516107/付小影子">单页面 多路由</router-link>
    <!-- 子路由 -->
    <router-view></router-view>
  </div>
</template>
<script>
import "D:/vue_todo/webDemo/assets/styles/main.css";

import mainHeader from "./mainHeader.vue";

export default {
  name: "app",

  data() {
    return {
      content: "",
      dataList: ["shadow1", "shadow1", "shadow3"],
    };
  },

  methods: {
    addItem() {
      if (this.content === "") return;
      this.dataList.push(this.content);
      this.content = "";
    },
  },

  components: {
    //组件名：组件对象
    mainHeader: mainHeader,
  },
};
</script>

<style scoped>
h1 {
  color: pink;
  font-size: 50px;
}

input {
  display: inline;
  font-weight: 500;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
}

li:nth-of-type(odd) {
  color: #00ccff;
}
</style>
