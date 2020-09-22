// 用于生产环境配置

//1.导入 公共配置
const baseConfig = require("./webpack.base.js");

//2.导入 merge
const { merge } = require("webpack-merge");

//3.添加当前环境 特有的配置
const devConfig = {
  //development 开发模式 production：生产模式
  mode: "production",
};

//4.合并代码
module.exports = merge(baseConfig, devConfig);
