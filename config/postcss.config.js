module.exports = {
	plugins: [
		"postcss-easy-import",
		'tailwindcss',
		'tailwindcss/nesting',
		'autoprefixer',
		'postcss-import',
		...process.env.NODE_ENV === 'production'
			? [ require( 'cssnano' ) ]
			: []
	]
}
