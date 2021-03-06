var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "index_bundle.js"
	},
	module: {
		rules: [
			{ test: /\.(js)$/, exclude: /node_modules/, use: "babel-loader" },
			{ test: /\.css$/, use: ["style-loader", "css-loader"] },
			{
				test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
				use: ["file-loader"]
			}
		]
	},
	mode: "development",
	plugins: [
		new HtmlWebpackPlugin({
			template: "public/index.html"
		})
	]
};
