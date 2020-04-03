
exports.addContact = async function (req) {
    var requiredValues = ["firstName", "lastName", "mobileNumbers"]
    var templateValues = ["სახელი","გვარი","მობილურის ნომერი"]
    missingValues= ""
    // var bindata = new Buffer(req.body.imgByteArray.split(",")[1],"base64");
    // let buff = new Buffer(bindata , 'base64');
    // req.body.imgByteArray = buff
    // let text = buff.toString('ascii');
    for (i = 0 ; i < requiredValues.length; i++) {
        if (!req.body[requiredValues[i]] || req.body[requiredValues[i]].length ==0 ){

            missingValues+=templateValues[i]
            i < requiredValues.length -1 ? templateValues+=", " : templateValues+="- გამოტოვებული აუცილებელი ველები"
        }
    }
    if(missingValues != ""){
        return { success: false, status: 400, error: 'Bad Request', data: { data: missingValues } };
    }
    var a = async function(){await dbApi.insert("testDB", [req.body])}();
//console.log(req);
//console.log(req.body)
//const neededOrg = await dbApi.find("testDB", {firstName : "asas"}, {}, needExceptionIfEmpty = false);
//console.log(neededOrg)
    // let collName = hc.getCollectionNameByDbName(req.body.db_name);
    // let collection = hc.getCollectionByName(req.body.db_name);
    // if (collection.db_type == 'Global' || collection.db_type == 'NSB') {
    //     var dbTypeOfSecondCollection = collection.db_type == 'Global' ? 'NSB' : 'Global';
    //     var secondCollection = hc.getCollectionsByFilter({ state: 'implementation', db_type: dbTypeOfSecondCollection }, false);
    // }
    // let orgName = req.body.name;
    // let orgId = req.body.org_id;  // this field use internally (i.e in case of merge where org_id must be copied from new SAP)
    // let parentId = req.body.parent;
    // if (!req.body.org_id) {
    //     orgId = await newGeneratedOrgNr(collName, collection.db_type);
    // }
    // else {        //check if the user input contains only digits
    //     orgId = req.body.org_id.trim()
    // }

    // var checkOrgToInsert = await orgOperations.getOrg(collName, orgId);
    // if (checkOrgToInsert !== undefined) {
    //     throw { success: false, status: 404, data: null, error: "The given Org Id already exists in " + collection.db_name + " database!" };
    // }
    // if (secondCollection && secondCollection.length >= 1) {
    //     secondCollection = secondCollection[0];
    //     var checkOrgToInsertInSecondDb = await orgOperations.getOrg(secondCollection.collection_name, orgId);
    //     if (checkOrgToInsertInSecondDb != undefined) {
    //         throw { success: false, status: 404, data: null, error: "The given Org Id already exists in " + secondCollection.db_name + " database!" };
    //     }
    // }

    // var parentOrg = await orgOperations.getOrg(collName, parentId);
    // var newAncestors = parentOrg.ancestors;
    // newAncestors.push(parentId);
    // let orgObject = {};
    // orgObject.org_id = orgId;
    // orgObject.name = orgName;
    // orgObject.lm_nokia_id = null;
    // orgObject.lm_nokia_name = null;
    // orgObject.parent = parentId;
    // orgObject.ancestors = newAncestors;
    // orgObject.people = [];
    // if (req.body.action == "Add virtual team") { orgObject.isVirtual = true }



    // await dbApi.insert(collName, orgObject);


    // await dbApi.updateMultiple(collName, { org_id: parentId }, { $unset: { accepted_transfer: false, rejected_transfer: false } });

    return { success: true, status: 200, error: null, data: { data: "that is cool" } };

}




