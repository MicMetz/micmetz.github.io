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
		images         : {
				loader     : 'custom',
				loaderFile : 'src/utilities/imageLoader.js',
				unoptimized: true,
				types      : [ 'png', 'jpg', 'jpeg', 'gif', 'webp', 'svg', 'ico', 'bmp', 'tiff' ]
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
		async redirects() {
				return [
						/* {
							source     : "/resources",
							destination: "/illustration-resources",
							permanent  : true,
							}, */
						{
								source     : "/library",
								destination: "/theHook",
								permanent  : true,
						},
				];
		},
} );



