var path = require("path");
module.exports = {
  entry: {
    app: ["./src/entry.js"]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: ["file-loader?hash=sha512&digest=hex&name=[hash].[ext]"]
      }
    ]
  }
};
