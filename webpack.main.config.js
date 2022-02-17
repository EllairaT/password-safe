const nodeExternals = require("webpack-node-externals")
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")
module.exports = {
	/**
	 * This is the main entry point for your application, it's the first file
	 * that runs in the main process.
	 */
	entry: "./src/electron/index.ts",

	// Put your normal webpack config below here
	target: "node",
	externals: [nodeExternals()], // Need this to avoid error when working with Express
	module: {
		rules: require("./webpack.rules"),
	},
	plugins: [new NodePolyfillPlugin()],
	resolve: {
		alias: {
			process: "process/browser",
		},
		extensions: [".js", ".ts", ".jsx", ".tsx", ".css", ".json"],
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
