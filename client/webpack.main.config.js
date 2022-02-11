const nodeExternals = require("webpack-node-externals")
module.exports = {
	/**
	 * This is the main entry point for your application, it's the first file
	 * that runs in the main process.
	 */
	entry: "./src/index.ts",

	// Put your normal webpack config below here
	target: "electron-main",
	node: {
		// Need this when working with express, otherwise the build fails
		__dirname: false, // if you don't put this is, __dirname
		__filename: false, // and __filename return blank or /
	},
	externals: [nodeExternals()], // Need this to avoid error when working with Express
	module: {
		rules: require("./webpack.rules"),
	},
	resolve: {
		extensions: [".js", ".ts", ".jsx", ".tsx", ".css", ".json"],
	},
}
