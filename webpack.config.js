const exportModules = {
    // Main indexes
    frameworks : './_src/frameworks/index.js',
    components: './_src/components/index.js'
};


const path = require('path');
module.exports = {
    entry: exportModules,
    output: {
        path: path.resolve(__dirname),
        filename: '[name]/index.js',
        libraryTarget: 'commonjs'
    },
    externals: {
        'react'     : 'commonjs react',
        'prop-types': 'prop-types',
    },
    module:{
        rules: [
            {
                test: /.svg$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'svg-inline-loader'
            },
            {
                exclude: /(node_modules|bower_components)/,
                test: /\.jsx?$/, 
                loader: 'babel-loader'
            },
            {
                test: /.css$/,
                exclude: /(node_modules|bower_components)/,
                use: ['style-loader', 'css-loader']
            },

        ]
    }
}