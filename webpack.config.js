var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

module.exports = {
    entry: ['./js/main.jsx'],
    output: {
        filename: 'bundle.js',
        publicPath: 'http://localhost:8090/assets'
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node-modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            // {
            //     test:   /\.css$/,
            //     loader: "style-loader!css-loader!postcss-loader"
            // }
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            },
            { test: /\.(woff2?|svg)$/, loader: 'url?limit=10000' },
            { test: /\.(ttf|eot)$/, loader: 'file' },
            { test: /bootstrap-sass\/assets\/javascripts\//, loader: 'imports?jQuery=jquery' }
        ]
    },
    sassLoader: {
        includePaths: [path.resolve(__dirname, "./scss")]
    }
    //,
    //postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ]
}