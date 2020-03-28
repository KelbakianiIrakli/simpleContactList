
const config = require('./configuration.js');
var mongojs = require('mongojs');
var _db;
module.exports = {
  connectToServer: function() {
    var db = mongojs(config.getDbName());
    _db = db;
  },
  getDb: function() {
    return _db;
  }
};