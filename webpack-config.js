const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  
  return {
    entry: './src/index.js',
    output: {
      filename: isProduction ? '[name].[contenthash].js' : '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
      publicPath: isProduction 
        ? '/sophie-agent/' // Your GitHub repo name
        : '/',
    },
    mode: argv.mode,
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', {
                  targets: {
                    browsers: ['last 2 versions']
                  }
                }],
                ['@babel/preset-react', { runtime: 'automatic' }]
              ]
            }
          },
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        // Add support for Lucide React SVG icons
        {
          test: /\.svg$/,
          use: ['@svgr/webpack']
        },
        // Add support for other assets
        {
          test: /\.(png|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx'],
      // Add alias for easier imports
      alias: {
        components: path.resolve(__dirname, 'src/components/'),
      }
    },
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      compress: true,
      port: 9000,
      hot: true,
      historyApiFallback: true,
      client: {
        overlay: true, // Shows compiler errors in browser
      },
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public/index.html'),
        title: 'Sophie Task Management Agent',
        favicon: path.resolve(__dirname, 'public/favicon.ico'), // If you have a favicon
      }),
    ],
    optimization: {
      moduleIds: 'deterministic',
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    },
    performance: {
      hints: isProduction ? 'warning' : false,
    },
  };
};