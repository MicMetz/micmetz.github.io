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
		future         : {
				webpack5: true, // by default, if you customize webpack config, they switch back to version 4.
				// Looks like backward compatibility approach.
		},
		webpack( config ) {
				config.resolve.fallback = {
						...config.resolve.fallback, // if you miss it, all the other options in fallback, specified
						// by next.js will be dropped. Doesn't make much sense, but how it is
						fs: false, // the solution
				};

				return config;
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



