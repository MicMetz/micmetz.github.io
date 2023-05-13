module.exports = {
  reactStrictMode: true,
  assetPrefix    : process.env.NODE_ENV === 'production' ? 'micmetz.github.io/' : '',
  baseUrl        : process.env.NODE_ENV === 'production' ? 'micmetz.github.io/' : '',
  url            : process.env.NODE_ENV === 'production' ? 'micmetz.github.io/' : '',
  hostnames      : [ 'micmetz.github.io', 'localhost', 'raw.githubusercontent.com', 'github.com' ],
  types          : [ 'png', 'jpg', 'jpeg', 'gif', 'webp', 'svg', 'ico', 'bmp', 'tiff', 'glb', 'gltf' ],

  loader : 'file-loader',
  options: {
    publicPath: "/_next/static/images", // the path access the assets via url
    outputPath: "static/images/", // where to store on disk
  },
  images : {
    loader     : 'custom',
    loaderFile : 'src/utilities/imageLoader.js',
    unoptimized: true,
    types      : [ 'png', 'jpg', 'jpeg', 'gif', 'webp', 'svg', 'ico', 'bmp', 'tiff' ]
  },
};
