import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: "./src/main.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist/"),
    publicPath: "./dist",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@": path.resolve(__dirname, "src/"),
    },
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    devMiddleware: {
      publicPath: "public",
    },
    watchFiles: ["src/**/*"],
    compress: true,
    host: "127.0.0.1",
    port: 3000,
    hot: true,
    liveReload: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              ["@babel/preset-react", { runtime: "automatic" }],
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
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
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
