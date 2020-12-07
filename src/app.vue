<template>
  <div>
    <button @click="goGo">前进</button>
    <button @click="goBack">后退</button>
    <button @click="goHome">首页</button>
    <button @click="mockTest">mock测试</button>
    <div>
      <span style="color: blanchedalmond; font-size: 26px;">{{userInfo.userName}}</span>
      <span style="font-size: 26px; margin-left: 10px; color: blanchedalmond;">{{userInfo.nickName}}</span>
    </div>
    <transition name="slide-fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import img from "../assets/images/111.png";
  import "../assets/styles/main.css";
  // import "../assets/styles/global.styl";

  //@import url("//unpkg.com/element-ui@2.13.2/lib/theme-chalk/index.css");

  import api from "./api/apis"
  export default {
    name: "app",
    created() {
      console.log(img);
    },
    data() {
      return {
        content: "",
        dataList: ["shadow1", "shadow1", "shadow3"],
        userInfo: {
          userName: "",
          nickName: '',
        }
      };
    },
    methods: {
      addItem() {
        if (this.content === "") return;
        this.dataList.push(this.content);
        this.content = "";
      },
      goGo() {
        console.log("前进");
        this.$router.go(1);
      },
      goBack() {
        console.log("后退");
        this.$router.go(-1);
      },
      goHome() {
        console.log("首页");
        this.$router.push("/a");
      },
      mockTest() {
        console.log("hello，mock测试")
        api.getUserInfo().then((res) => {
          console.log("获取成功---" + JSON.stringify(res))
          this.userInfo = res.data
        }).catch((e) => {
          console.log("获取失败---" + JSON.stringify(e))
        })

      }
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

  .slide-fade {
    position: absolute;
    left: 0;
    right: 0;
  }

  .slide-fade-enter-active {
    transition: all 1.2s ease;
  }

  .slide-fade-leave-active {
    transition: all 0.1s cubic-bezier(2, 0.5, 0.8, 1);
  }

  .slide-fade-enter,
  .slide-fade-leave-to {
    left: 0;
    right: 0;
    transform: translateX(50px);
    opacity: 0;
  }
</style>