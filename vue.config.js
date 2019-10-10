const MonacoWebpackPlugin = require("monaco-editor-esm-webpack-plugin");

module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.js/,
          enforce: "pre",
          include: /node_modules[\\\/]monaco-editor[\\\/]esm/,
          use: MonacoWebpackPlugin.loader
        }
      ]
    },
    plugins: [new MonacoWebpackPlugin()]
  }
};
