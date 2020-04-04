var _port = 3000;
var dbName = "testDB"
exports.getDbName = function () {
    return dbName;
}
exports.setPort = function (port) {
    _port = port;
    logger.info("Port for listening:", _port);
}
exports.getPort = function () {
    return _port;
}