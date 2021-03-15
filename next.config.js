const withImages = require("next-images");

module.exports = withImages({
  webpack: (config) => ({
    ...config,
    module: {
      ...config.module,
      rules: [
        ...config.module.rules,
        {
          test: /\.md$/,
          loader: "emit-file-loader",
          options: {
            name: "dist/[path][name].[ext]",
          },
        },
        {
          test: /\.md$/,
          loader: "raw-loader",
        },
      ],
    },
  }),
});
