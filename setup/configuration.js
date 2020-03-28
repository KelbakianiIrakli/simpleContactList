var dbUrl = "mongodb://localhost:27017/testDB";
var _port = 3000;
var dbName = "testDB"

var orgDBName = "testData";

exports.setDbUrl = function (url) {
    dbUrl = url;
    logger.info("New database URL:", dbUrl);
}

exports.getDbUrl = function () {
    return dbUrl;
}

exports.getOrgDBName = function () {
    return orgDBName;
}

exports.getDbName = function(){
    return dbName;
}

exports.setPort = function (port) {
    _port = port;
    logger.info("Port for listening:", _port);
}

exports.getPort = function () {
    return _port;
}