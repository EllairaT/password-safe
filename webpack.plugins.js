const webpack = require("webpack")
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin")

module.exports = [
	new ForkTsCheckerWebpackPlugin({ async: false }),
	new webpack.ProvidePlugin({
		process: "process/browser",
	}),
]
