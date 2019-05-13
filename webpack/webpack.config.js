const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "js/script.js"
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc)ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
        test: /\.css/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "static/css"
            }
          }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "static/fonts"
            }
          }
        ]
      },
      {
        test: /\.pug/,
        loader: "pug-loader"
      },
      {
        test: /\.svg/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "static/content/svg",
              useRelativePath: true
            }
          }
        ]
      },
      {
        test: /\.gif/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "static/content/gif",
              useRelativePath: true
            }
          }
        ]
      },
      {
        test: /\.(jpg|png)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "static/content/img",
              useRelativePath: true
            }
          }
        ]
      },
      {
        loader: "image-webpack-loader",
        options: {
          mozjpeg: {
            progressive: true,
            quality: 65
          },
          // optipng.enabled: false will disable optipng
          optipng: {
            enabled: true
          },
          pngquant: {
            quality: "65-90",
            speed: 4
          },
          gifsicle: {
            interlaced: false
          },
          // the webp option will enable WEBP
          webp: {
            quality: 75
          }
        }
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.pug",
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: "css/style.css"
    })
  ]
};
