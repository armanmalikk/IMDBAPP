var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'src');

function getPlugins(){
  var plugins = [];

  plugins.push(new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                "window.jQuery": "jquery'",
                "window.$": "jquery"
              })
            )
  return plugins;
}

var config = {
    entry: APP_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module : {
        loaders : [
            {
                test : /\.jsx?/,
                include : APP_DIR,
                loader : 'babel',
                query:{
                  plugins:['transform-decorators-legacy','transform-object-rest-spread']
                }
            },
            { test: /vendor\/.+\.(jsx|js|ico)$/,
              loader: 'imports?jQuery=jquery,$=jquery,this=>window'
            }
        ],
        plugins: getPlugins()
    }
};

module.exports = config;
