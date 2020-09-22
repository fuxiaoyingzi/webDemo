//1.导入 公共配置
const baseConfig = require("./webpack.base.js");
//2.导入 merge
//const merge = require("webpack-merge");
const { merge } = require("webpack-merge");

//3.配置 开发环境特有的参数
//webpack热加载 https://www.webpackjs.com/guides/hot-module-replacement/
const webpack = require("webpack");

const devConfig = {
  //development 开发模式 production：生产模式
  mode: "development",

  //source map 功能，将编译后的代码映射回原始源代码。定位问题 如果一个错误来自于 b.js，source map 就会明确的告诉你。
  devtool: "inline-source-map",

  //devServer 配置,实时更新变化配置
  devServer: {
    //指定服务器根目录
    contentBase: "./dist",
    //自动打开浏览器
    open: true,
    //开启热模块替换 只有dev需要
    hot: true,
  },

  //插件配置，放置插件的实例对象
  plugins: [new webpack.HotModuleReplacementPlugin()],
};

//合并代码
module.exports = merge(baseConfig, devConfig);
