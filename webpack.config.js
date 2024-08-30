const path = require('path');

module.exports = {
    entry: './src/index.js', // Adjust the entry point if necessary
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        fallback: {
            "http": require.resolve("stream-http"),
            "https": require.resolve("https-browserify"),
            "util": require.resolve("util/"),
            "zlib": require.resolve("browserify-zlib")
        }
    },
    // Add any other Webpack configurations you need
};
