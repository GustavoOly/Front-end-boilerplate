import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: "./src/app.jsx",
  output: {
    path: path.resolve(__dirname, "dist/"),
    filename: "bundle.js",
    publicPath: "/dist/",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devServer: {
    static: {
      directory: path.join(__dirname),
    },
    devMiddleware: {
      publicPath: "/dist/",
    },
    watchFiles: ["src/**/*"],
    compress: true,
    host: "127.0.0.1",
    port: 8080,
    hot: true,
    liveReload: true,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: ["tailwindcss", "autoprefixer"],
              },
            },
          },
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
};
