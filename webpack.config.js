const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const GoogleFontsPlugin = require("@beyonk/google-fonts-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.join(__dirname, "dist/js"),
        filename: "bundle.js"
    },
    
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                },
                resolve: {
                    extensions: ['.js', '.jsx', '*']
                },
            },
        {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
         {
            test: /\.(png|jpg|gif)$/i,
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        limit: 8192
                    }
                }
            ]
        },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "./index.html"
         }),
         new GoogleFontsPlugin({
			fonts: [
				{ family: "Ubuntu" },
				{ family: "Poppins", variants: [ "400", "700italic" ], display: "block" }
			]
			/* ...options */
		}),
            new MiniCssExtractPlugin({
            linkType: 'text/css',
        }),
    ]
}