module.exports = {
  mode: "production",

  devtool: "source-map",

  resolve: {
    // https://github.com/webpack/webpack-dev-server/issues/993#issuecomment-427615155
    modules: ["src", "node_modules"],
    extensions: [".ts", ".tsx", ".js"]
  },

  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
  },

  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  }
};