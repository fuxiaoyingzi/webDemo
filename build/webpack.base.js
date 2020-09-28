//导入path模块
const path = require("path");
//导入 HTML插件
const HtmlWebpackPlugin = require("html-webpack-plugin"); //通过 npm 安装
//引入clean-webpack-plugin 每次打包前的时候，都删除dist目录，生成新的文件
//es6结构语法
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); //通过 npm 安装

//引入vue-loader插件 固定写法
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  //打包入口文件
  entry: "./src/main.js",

  //打包的出口文件
  output: {
    filename: "bundle.js",
    //当前目录下，创建dist文件，打包生成文件名称bundle
    path: path.resolve(__dirname, "../dist"),
  },
  //配置打包规则
  module: {
    rules: [
      //打包vue文件
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      //打包图片
      {
        test: /\.(png|jpg|gif)$/,
        loader: "file-loader",
      },
      //低于指定大小的图片，以base64格式打包图片
      // {
      //   test: /\.(png|jpg|gif)$/,
      //   use: [
      //     {
      //       loader: "url-loader",
      //       options: {
      //         //小于 8k的时候 使用base64打包图片，超过时候 使用fileLoader
      //         limit: 2048,
      //       },
      //     },
      //   ],
      // },
      //打包css文件
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
      {
        test: /\.styl(us)?$/,
        use: [
          "vue-style-loader",
          "css-loader",
          "stylus-loader",
          
        ],
      },
    ],
  },
  //插件配置，放置插件的实例对象
  plugins: [
    // 请确保引入这个插件来施展魔法
    new VueLoaderPlugin(),
    //以当前目录下的 index.html为模板，生成dist目录下的index.html
    new HtmlWebpackPlugin({ template: "./index.html" }),
    new CleanWebpackPlugin(),
  ],
  resolve: {
    alias: {
      vue: "vue/dist/vue.js",
    },
    extensions: [".js", "*", ".css"], //现在就没问题了
  },
};
