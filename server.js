const mongoUtil = require('./setup/mongoUtil');
var path = require('path');
var bodyParser = require('body-parser');
const config = require("./setup/configuration");
var routes = require('./routes/routes');
var express = require('express')
var app= express()
app.use(express.static(__dirname))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
mongoUtil.connectToServer();
routes(app);
app.get('/messages', (req,res) => {
    res.send(messages)
  })
  
var server = app.listen(config.getPort(), () => {
    console.log('server is listening on port', server.address().port)
  })