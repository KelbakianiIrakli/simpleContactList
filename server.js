
var path = require('path');
var bodyParser = require('body-parser');
const config = require("./setup/configuration");
var express = require('express')
var app = express()
const contactRoutes = require("./routes/contacts");
const mongoose = require("mongoose")
mongoose.connect('mongodb+srv://IrakliK:project-add-contacts@cluster0-7u34x.mongodb.net/test?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true });
// mongoose.connect('mongodb+srv://IrakliK:'+process.env.MONGO_ATLAS_PSS+'@cluster0-7u34x.mongodb.net/test?retryWrites=true&w=majority');
// mongoose.connect('mongodb+srv://Irakli:'+ process.env.MONGO_ATLAS_PSS +'@cluster0-brtk0.mongodb.net/test?retryWrites=true&w=majority');
mongoose.Promise = global.Promise;
app.use(express.static(__dirname))
app.use('/uploads', express.static('uploads'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
// mongoUtil.connectToServer();
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

app.use("/contacts", contactRoutes);
app.get('/messages', (req, res) => {
  res.send(messages)
})
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

app.use((req, res, next) => {
  const error = new Error('Not found')
  error.status = 404
  next(error)
})
app.use((error, req, res, next) => {
  res.status(error.status || 500)
  res.json({
    error: { message: error.message }
  })
})
module.exports = app;
var server = app.listen(config.getPort(), () => {
  console.log('server is listening on port', server.address().port)
})