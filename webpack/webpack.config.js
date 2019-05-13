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
        // Compiler SCSS/SASS in miniCss
        test: /\.(sa|sc)ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
        // Loader for css
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
        // Loader for fonts
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
        // Compiler and loader for PUG in HTML
        test: /\.pug/,
        loader: "pug-loader"
      },
      {
        // Loader for files SVG
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
        // Loader for files Gif
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
        // Loader for files jpg and png
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
        // Loader for files .mov and .mp4
        test: /\.(mov|mp4)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "static/content/mp4",
              useRelativePath: true
            }
          }
        ]
      },
      {
        // Loader for files .mp3
        test: /\.mp3/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "static/content/mp3"
            }
          }
        ]
      },
      {
        // Loader for images and minified images
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
    // Minified files HTML
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
    // Minified files CSS
    new MiniCssExtractPlugin({
      filename: "css/style.css"
    })
  ]
};
