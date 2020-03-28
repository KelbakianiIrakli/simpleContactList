const config = require('../setup/configuration')
const mongoUtil = require('../setup/mongoUtil');
const DBURL = config.getDbUrl();
/**
 * Inserts the given elements to the given collection.
 * @param {String} collectionName Name of the collection you want to insert into.
 * @param {Object} dataArray Array of data you want to insert.
 * @returns {Promise} Empty Promise resolve.
 * @throws {Error} Database error.
 */
exports.insert = function (collectionName, dataArray) {
    var dbo = mongoUtil.getDb();
    return new Promise((resolve, reject) => {
        dbo.collection(collectionName).insert(dataArray, function (err, result) {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
}



/**
 * Updates multiple elements in a given collection.
 * @param {String} collectionName Name of the collection you want to update.
 * @param {Object} query Query object you want to search with.
 * @param {Object} newValues Object describing the method of the update.
 * @param {Boolean} isUpsertNeeded Flag that indicates if upsert is needed.
 * @returns {Promise} Empty Promise resolve.
 * @throws {Error} Database error.
 */

exports.updateMultiple = function (collectionName, query, newValues, isUpsertNeeded = false, isMultiNeeded = true) {
    var dbo = mongoUtil.getDb();
    //var new_values = { $set: newValues };
    return new Promise((resolve, reject) => {
        dbo.collection(collectionName).update(query, newValues, { multi: isMultiNeeded, upsert: isUpsertNeeded }, function (err, result) {
            if (err !== null) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
}



/**
 * Finds elements in the given collection, which are matching the query.
 * @param {String} collectionName Name of the collection you want to search.
 * @param {Object} query Query object you want to search with.
 * @param {Boolean} needExceptionIfEmpty If true, throws error when the result is empty.
 * @returns {Promise} Array of the matching elements, wrapped by a Promise.
 * @throws {Error} Database error/Document not found error.
 */


exports.find = function (collectionName, query, filter, needExceptionIfEmpty = false) {
    var dbo = mongoUtil.getDb();
    return new Promise((resolve, reject) => {
        dbo.collection(collectionName).find(query, filter).toArray(function (err, res) {
            if (err !== null) {
                reject(err);
            } else {
                if (needExceptionIfEmpty && res.length == 0) {
                    reject(dbMessages.documentNotFound)
                } else {
                    resolve(res);
                }
            }
        });
    });
}

/**
 * Finds people in the given collection, which are matching the query.
 * The user can search for people by their Name, NSN ID etc...
 * @param {String} collectionName Name of the collection you want to search.
 * @param {Object} query Query object you want to search with. 
 * @returns {Promise} Array of the matching elements, wrapped by a Promise.
 * @throws {Error} Database error.
 */

exports.findPerson = async function (collectionName, key, value, exceptionNeeded = false) {
    var queryObj = {};
    queryObj["people." + key] = { $all: [value] };
    //console.log(queryObj)
    var ret = await exports.find(collectionName, queryObj, {});
    if (ret.length === 0) {
        return null;
    }

    var returnedPeople = [];

    for (let i = 0; i < ret[0].people.length; i++) {
        let person = ret[0].people.find(person => person[key] === value)
        return person;
    }
}
exports.findPersonOccurances = async function (collectionName, key, value, exceptionNeeded = false) {
    var queryObj = {};
    queryObj["people." + key] = { $all: [value] };
    //console.log(queryObj)
    var ret = await exports.find(collectionName, queryObj, {});
    if (ret.length === 0) {
        return null;
    }

    var returnedPeople = [];
    for (var z = 0 ; z < ret.length ; z++){
        let person = ret[z].people.find(person => person[key] === value)
        returnedPeople.push(person)
    }
    return returnedPeople;
}



/**
 * Deletes documents matching the query.
 * @param {String} collectionName Name of the collection you want to copy.
 * @param {Object} query Query object for the delete.
 * @returns {Promise} Empty Promise.
 * @throws {Error} Database error.
 */

exports.deleteDoc = function (collName, query) {
    var dbo = mongoUtil.getDb();
    return new Promise(function (resolve, reject) {
        dbo.collection(collName).remove(query, function (err, delRes) {
            if (err) {
                reject(err);
            } else {
                resolve()
            }
        });
    });
}

exports.aggregate = function (collName, pipeLine) {
    var dbo = mongoUtil.getDb();
    return new Promise((resolve, reject) =>{
        dbo.collection(collName).aggregate(pipeLine).toArray(function(err, res){
            (err ? reject(err) : resolve(res));
        });
    });
}


const dbMessages = {
    databaseError: {
        status: 500,
        error: "Database error."
    },
    documentNotFound: {
        status: 404,
        error: "Document not found."
    }
}

