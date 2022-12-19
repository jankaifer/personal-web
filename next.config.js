// eslint-disable-next-line @typescript-eslint/no-var-requires
const withMDX = require("@next/mdx")();

module.exports = withMDX({
  images: {
    domains: ["www.gravatar.com"],
  },
  pageExtensions: ["ts", "tsx", "mdx"],
  compiler: {
    styledComponents: true,
  },
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
