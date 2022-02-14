const rules = require("./webpack.rules")
const plugins = require("./webpack.plugins")

rules.push({
	test: /\.css$/,
	use: [{ loader: "style-loader" }, { loader: "css-loader" }],
})

module.exports = {
	module: {
		rules,
	},
	plugins: plugins,
	resolve: {
		alias: {
			process: "process/browser",
		},
		extensions: [".js", ".ts", ".jsx", ".tsx", ".css"],
		fallback: {
			fs: false,
			tls: false,
			net: false,
			http: require.resolve("stream-http"),
			https: false,
			zlib: require.resolve("browserify-zlib"),
			path: require.resolve("path-browserify"),
			stream: require.resolve("stream-browserify"),
			path: require.resolve("path-browserify"),
			crypto: require.resolve("crypto-browserify"),
		},
	},
}
