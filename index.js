var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var controller = require('./controllers');
var contentful = require('contentful');


var app = express();
app.use(bodyParser.json());


app.get('/api/components', controller.getComponents);


var port = 3000;
app.listen(port, () => {console.log(`My ears hurt from constantly listening on port ${port}`)});