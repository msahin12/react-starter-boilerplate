const HtmlWebPackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const webpack = require("webpack");
const path = require("path");
const InterpolateHtmlPlugin = require("react-dev-utils/InterpolateHtmlPlugin");

const isDevelopment = process.env.NODE_ENV !== "production";
const publicPath = "/";

module.exports = {
  mode: isDevelopment ? "development" : "production",
  entry: {
    app: ["react-hot-loader/patch", "./src/index"]
  },
  output: {
    pathinfo: isDevelopment,
    path: path.join(process.cwd(), "dist"),
    filename: isDevelopment ? `bundle.js` : `[name].[contenthash:8].js`,
    chunkFilename: isDevelopment
      ? `[name].chunk.js`
      : `[name].[contenthash:8].chunk.js`,
    publicPath: "/"
  },
  resolve: {
    modules: ["node_modules"],
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
    alias: {
      "react-dom": "@hot-loader/react-dom",
      SRC: path.join(process.cwd(), "src"),
      ASSETS: path.join(process.cwd(), "src/assets"),
      COMPONENTS: path.join(process.cwd(), "src/components"),
      CONTEXT: path.join(process.cwd(), "src/context"),
      HELPERS: path.join(process.cwd(), "src/helpers"),
      HOOKS: path.join(process.cwd(), "src/hooks"),
      PAGES: path.join(process.cwd(), "src/pages"),
      UTILS: path.join(process.cwd(), "src/utils")
    }
  },
  devtool: "source-map",
  devServer: {
    contentBase: "./public",
    watchContentBase: true,
    historyApiFallback: true,
    host: "localhost",
    publicPath,
    open: true,
    hot: true,
    compress: true,
    inline: true,
    stats: {
      warnings: false,
      modules: false,
      hash: false,
      children: false
    },
    watchOptions: {
      ignored: /node_modules/
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    }),
    new ESLintPlugin({
      files: "src/**/*.ts"
    }),
    new InterpolateHtmlPlugin(HtmlWebPackPlugin, {
      PUBLIC_URL: "",
      NODE_ENV: "development"
    })
  ].filter(Boolean)
};
