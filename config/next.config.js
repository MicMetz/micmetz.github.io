const withPWA = require( "next-pwa" );

module.exports = withPWA( {
		reactStrictMode: true,
		assetPrefix    : process.env.NODE_ENV === 'production' ? 'micmetz.github.io/' : '',
		baseUrl        : process.env.NODE_ENV === 'production' ? 'micmetz.github.io/' : '',
		url            : process.env.NODE_ENV === 'production' ? 'micmetz.github.io/' : '',
		hostnames      : [ 'micmetz.github.io', 'localhost', 'raw.githubusercontent.com', 'github.com' ],
		compiler       : { styledComponents: true, },
		types          : [ 'png', 'jpg', 'jpeg', 'gif', 'webp', 'svg', 'ico', 'bmp', 'tiff', 'gltf' ],
		loader         : 'file-loader',
		options        : {
				publicPath: '/_next/static/images', // the path access the assets via url
				outputPath: 'static/images/', // where to store on disk
		},
		pwa            : {
				disable    : process.env.NODE_ENV === "development",
				register   : true,
				scope      : "/app",
				sw         : "service-worker.js",
				dest       : "public",
				skipWaiting: true,
		},
		use            : [
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
		webpack: (config, { isServer }) => {
				// Fixes npm packages that depend on `fs` module
				if (!isServer) {
						config.node = {
								fs: 'empty'
						}
				}
				return config
		},
		async redirects() {
				return [
						/* {
							source     : "/resources",
							destination: "/illustration-resources",
							permanent  : true,
							}, */
						{
								source     : "/library",
								destination: "/library",
								permanent  : true,
						},
				];
		},
} );



