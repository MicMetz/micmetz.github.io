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
		webpack        : function ( config ) {
				config.module.rules.push( {
						test: /\.md$/,
						use : 'raw-loader',
				} );
				// config.module.rules.push({
				//   test: /\.svg$/,
				//   issuer: {
				//     test: /\.(js|ts)x?$/,
				//   },
				//   use: ['@svgr/webpack'],
				// });
				// config.module.rules.push({
				//   test: /\.(png|jpe?g|gif|svg)$/i,
				//   loader: 'file-loader',
				//   options: {
				//     outputPath: 'images',
				//   },
				// });
				config.module.rules.forEach( rule => {
						if ( rule.toString().includes( '.scss' ) ) {
								rule.rules = rule.use.map( useRule => {
										if ( typeof useRule === 'string' ) {
												return { loader: useRule };
										}
										if ( useRule.loader === 'css-loader' ) {
												return {
														oneOf: [
																{
																		test   : new RegExp( '.global.scss$' ),
																		loader : useRule.loader,
																		options: {},
																},
																{
																		loader : useRule.loader,
																		options: { modules: true }
																},
														],
												};
										}
										return useRule;
								} );
								delete rule.use;
						}
				} );
				return config
		}
} );



