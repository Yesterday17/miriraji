const MonacoWebpackPlugin = require("monaco-editor-esm-webpack-plugin");

module.exports = {
  productionSourceMap: process.env.NODE_ENV !== "production",
  configureWebpack: {
    optimization: {
      minimize: process.env.NODE_ENV === "production"
    },
    module: {
      rules: [
        {
          test: /\.js/,
          enforce: "pre",
          include: /node_modules[/\\]monaco-editor[/\\]esm/,
          use: MonacoWebpackPlugin.loader
        }
      ]
    },
    plugins: [
      new MonacoWebpackPlugin({
        languages: [],
        features: ["hover"]
      })
    ]
  },
  pwa: {
    name: "米粒垃圾工具箱",
    themeColor: "#385DAB"
  }
};
