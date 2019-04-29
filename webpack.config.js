const webpack = require("webpack");
const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const buildFolder = path.resolve(__dirname, "./dist");
const port = 3000;

// Building for development
if (process.env.NODE_ENV !== "production") {
  console.log("Building for development");

  module.exports = {
    entry: {
      main: [
        "webpack-dev-server/client?http://localhost:" + port,
        "./src/index"
      ]
    },
    mode: "development",
    externals: {
      // Use external version of React & ReactDOM via WordPress
      react: "React",
      "react-dom": "ReactDOM"
    },
    output: {
      path: buildFolder,
      filename: "[name].js",
      publicPath: "http://localhost:" + port + "/assets/"
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        },
        {
          test: /\.scss$/,
          use: [
            "style-loader", // creates style nodes from JS strings
            {
              loader: "css-loader",
              options: {
                modules: false // turn off CSS class and id hashing as it seemed to break styles
              }
            },
            // "css-loader", // translates CSS into CommonJS
            "sass-loader" // compiles Sass to CSS, using Node Sass by default
          ]
        }
      ]
    },

    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin()
      //new CleanWebpackPlugin( [ buildFolder ] )
    ],

    devServer: {
      host: "localhost",
      disableHostCheck: true,
      port: port,
      historyApiFallback: true,
      hot: true,
      inline: true,
      headers: { "Access-Control-Allow-Origin": "*" }
    },

    resolve: {
      alias: {
        'react-dom': '@hot-loader/react-dom'
      }
    }
  };
}

// Building for production
if (process.env.NODE_ENV === "production") {
  console.log("Building for production");

  module.exports = {
    entry: {
      main: ["./src/index"]
    },
    mode: "production",
    externals: {
      // Use external version of React & ReactDOM via WordPress
      react: "React",
      "react-dom": "ReactDOM"
    },
    output: {
      path: buildFolder,
      filename: "[name].js"
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        },
        {
          test: /\.scss$/,
          use: [
            "style-loader", // creates style nodes from JS strings
            {
              loader: "css-loader",
              options: {
                modules: false // turn off CSS class and id hashing as it seemed to break styles
              }
            },
            // "css-loader", // translates CSS into CommonJS
            "sass-loader" // compiles Sass to CSS, using Node Sass by default
          ]
        }
      ]
    }
  };
}
