import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  //状态对象，类似于vue中的data，通过state来存放状态
  //state会暴露为 store.state 对象 你可以以属性的形式访问这些值
  //store.getters.count
  state: {
    count: 0,
    todos: [
      { id: 1, text: "...", done: true },
      { id: 2, text: "...", done: false },
    ],
    name: "付小影子",
  },

  //Vuex 允许我们在 store 中定义“getter”（可以认为是 store 的计算属性）。就像计算属性一样，
  //getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。
  //Getter 接受 state 作为其第一个参数
  getters: {
    //Getter 会暴露为 store.getters 对象，你可以以属性的形式访问这些值
    //store.getters.doneTodos // -> [{ id: 1, text: '...', done: true }]
    doneTodos: (state) => {
      return state.todos.filter((todo) => todo.done);
    },

    //Getter 也可以接受其他 getter 作为第二个参数：
    //store.getters.doneTodosCount // -> 1
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length;
    },

    //可以通过让 getter 返回一个函数，来实现给 getter 传参。在你对 store 里的数组进行查询时非常有用。
    //store.getters.getTodoById(2) // -> { id: 2, text: '...', done: false }
    getTodoById: (state) => (id) => {
      return state.todos.find((todo) => todo.id === id);
    },
  },

  //操作状态对象 类似于vue中的methods，
  //mutations需要通过commit来调用其里面的方法，它也可以传入参数，第一个参数是state，
  //第二个参数是载荷（payLoad），也就是额外的参数,可以是基本数据，也可以是对象
  //   this.$store.commit('addAge',{
  //     number:5
  //   })
  //mutations只能写同步方法，不能写异步，比如axios、setTimeout等，这些都不能写，mutations的主要作用就是为了修改state的。
  mutations: {
    increment(state) {
      state.count++;
    },
    // 传递参数
    increment1(state, n) {
      state.count += n;
    },

    //传递 对象
    setUser(state, user) {
      state.count += user.num;
    },
  },
  // action类似于mutation
  // 区别：action可以提交mutation
  // action也不要直接去操作state，而是去操作mutation
  // action包含异步操作，类似于axios请求，可以都放在action中写
  // action中的方法默认的就是异步，并且返回promise
  actions: {
    //actions没有提供state当参数
    getUserInfo() {
      return {
        nickname: "Simba",
        age: 20,
      };
    },
    //Action 提交的是 mutation，而不是直接变更状态
    //Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，
    //因此你可以调用 context.commit 提交一个 mutation，
    //或者通过 context.state 和 context.getters 来获取 state 和 getters。
    //Action 通过 store.dispatch 方法触发：store.dispatch('increment')
    increment(context) {
      context.commit("increment");
    },
    incrementAsync({ commit }) {
      setTimeout(() => {
        commit("increment");
      }, 1000);
    },
  },
  modules: {},
});

export default store;
