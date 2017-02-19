var express = require('express');
var path = require('path');

var app = express();

app.use(express.static('./dist'));

app.use('/', (req,res) => {
    res.sendFile(path.resolve('client/index.html'));
});

var port = 9553;

app.listen(port, (error) => {
    if (error) throw error;
    console.log("Server listening on port ", port);
});
