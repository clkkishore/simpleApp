var express = require('express');
var path = require('path');
var config = require('../webpack.config');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var app = express();

var compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}))
app.use(webpackHotMiddleware(compiler));
app.use(express.static('./dist'));

app.use('/', (req,res) => {
    res.sendFile(path.resolve('client/index.html'));
});

var port = 9553;

app.listen(port, (error) => {
    if (error) throw error;
    console.log("Server listening on port ", port);
});
