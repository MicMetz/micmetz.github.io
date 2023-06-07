const withPWA = require( "next-pwa" );

module.exports = withPWA( {
		reactStrictMode: true,
		assetPrefix    : process.env.NODE_ENV === 'production' ? 'micmetz.github.io/' : '',
		baseUrl        : process.env.NODE_ENV === 'production' ? 'micmetz.github.io/' : '',
		url            : process.env.NODE_ENV === 'production' ? 'micmetz.github.io/' : '',
		hostnames      : [ 'micmetz.github.io', 'localhost', 'raw.githubusercontent.com', 'github.com' ],
		compiler       : { styledComponents: true, },
		types          : [ 'png', 'jpg', 'jpeg', 'gif', 'webp', 'svg', 'ico', 'bmp', 'tiff', 'gltf' ],
		pageExtensions : [ 'js', 'jsx', 'ts', 'tsx', 'md', 'mdx' ],
		target         : 'serverless',
		loader         : 'file-loader',
		options        : {
				publicPath: '/_next/static/images', // the path access the assets via url
				outputPath: 'static/images/', // where to store on disk
		},
		use     : [
				{
						loader : '@svgr/webpack',
						options: {
								prettier  : false,
								svgo      : true,
								svgoConfig: { plugins: [ { removeViewBox: false } ] },
								titleProp : true,
						},
				},
		],
		webpack5: true,
		webpack : ( config, { isServer } ) => {
				if ( !isServer ) {
						config.resolve.fallback = {
								fs: false,
						};
				}

				return config;
		},
} );
