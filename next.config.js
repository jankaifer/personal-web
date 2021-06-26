const withImages = require("next-images");
const withMDX = require("@next/mdx")();

module.exports = withMDX(
  withImages({
    images: {
      domains: ["www.gravatar.com"],
    },
    pageExtensions: ["ts", "tsx", "mdx"],
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
  })
);
