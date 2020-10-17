const path = require("path");

module.exports = {
  productionSourceMap: false,
  chainWebpack: config => {
    // 清除默认入口
    config.entry("app").clear();

    // 定义入口
    config.entry("app").add(path.resolve(__dirname, "examples/main.js"));

    // 设置路径别名
    config.resolve.alias
      .set("@", path.resolve(__dirname, "examples"))
      .set("~", path.resolve(__dirname, "src"));
  }
};
