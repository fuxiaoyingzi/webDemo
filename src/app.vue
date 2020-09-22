<template>
  <div>
    <h1>TodoList</h1>

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
  </div>
</template>
<script>
import img from "../assets/images/111.png";
import "../assets/styles/main.css";
// import "../assets/styles/global.styl";

//@import url("//unpkg.com/element-ui@2.13.2/lib/theme-chalk/index.css");

export default {
  name: "app",
  created() {
    console.log(img);
  },
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
};
</script>
<!-- lang="stylus" -->
<!-- scoped 样式只影响当前文件 -->
<style scoped>
h1 {
  color: pink;
  font-size: 50px;
  /* transform: translate(100px, 100px); */
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
