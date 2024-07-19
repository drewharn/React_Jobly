const webpack = require('webpack');

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      // Add polyfills
      webpackConfig.resolve.fallback = {
        "stream": require.resolve("stream-browserify"),
        "crypto": require.resolve("crypto-browserify"),
        "buffer": require.resolve("buffer/"),
        "process": require.resolve("process/"),
        "util": require.resolve("util/"),
        "vm": require.resolve("vm-browserify")
      };

      // Add ProvidePlugin to handle the Buffer and process modules
      webpackConfig.plugins = [
        ...webpackConfig.plugins,
        new webpack.ProvidePlugin({
          Buffer: ['buffer', 'Buffer'],
          process: 'process/browser'
        })
      ];

      return webpackConfig;
    },
  },
};


