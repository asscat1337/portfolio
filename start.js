var express = require('express'),
    app = express();

app.use(express.static(__dirname + '/portfolio'));

app.listen(8080);