const dbApi = require("../../dataAccess/dbHandler");
exports.getContacts = async function () {
    return dbApi.find("testDB", {}, {});
}