const mapMessage = require('../server/util/responseMapper');
const addContact = require('../server/requests/addContact')
const manageUserHandler = require('../server/requests/manageUsers')
module.exports = function routes(app) {

    app.post('/ajax/addContact', async function (req, res) {
        try {
            var response = await addContact.addContact(req);
            mapMessage.mapDataToMessage(res, response);
        } catch (error) {
            mapMessage.mapErrorToMessage(res, error);
        }
    })
    app.post('/ajax/editContact', async function (req, res) {
        try {
            var response = await addContact.addContact(req);
            mapMessage.mapDataToMessage(res, response.data);
        } catch (error) {
            mapMessage.mapErrorToMessage(res, error);
        }
    })
    app.post('/ajax/deleteContact', async function (req, res) {
        try {
            var response = await addContact.addContact(req);
            mapMessage.mapDataToMessage(res, response.data);
        } catch (error) {
            mapMessage.mapErrorToMessage(res, error);
        }
    })

    // app.get('/logout', function (req, res) {
    //     sessionManagement.deleteSession(req);
    //     res.redirect('/login');
    // });

    // app.get('/release', checkIfLoggedIn.check, function (req, res) {
    //     res.render('release', { errormessage: "" });
    // });

    // app.get('/login', function (req, res) {
    //     res.render('login', { errormessage: "" });
    // });

    // app.post('/login', loginMakeReq());

    // app.get('/download', checkIfLoggedIn.check, function (req, res) {
    //     var fileLoc = fileHandler2.getFile("")
    //     res.download(fileLoc)
    // });

    // app.get('/getTemplate', checkIfLoggedIn.check, function (req, res) {
    //     res.download(path.join(__dirname, '../Utilfiles/templateOrgs.xlsx'));
    // });
    // app.get('/getPeopleTemplate', checkIfLoggedIn.check, function (req, res) {
    //     res.download(path.join(__dirname, '../Utilfiles/templatePeople.xlsx'));
    // });

    // app.get('/', function (req, res) {
    //     res.redirect('/main')
    // });
    // app.get('/main', checkIfLoggedIn.check, async function (req, res) {
    //     var isAdmin = (req.session.role == 'Admin');
    //     req.body.action = "read";
    //     var b = await fileHandler.settings(req)
    //     settings = {}
    //     b.map(elem => {
    //         settings[elem.setting] = elem.value
    //     })
    //     res.render('main', { isAdmin: isAdmin, username: req.session.displayName, settings: settings });
    // });

    // app.get('/planning', checkIfLoggedIn.check, async function (req, res) {
    //     var isAdmin = (req.session.role == 'Admin');
    //     req.body.action = "read";
    //     var b = await fileHandler.settings(req)
    //     settings = {}
    //     b.map(elem => {
    //         settings[elem.setting] = elem.value
    //     })
    //     res.render('planning', { isAdmin: isAdmin, username: req.session.displayName, settings: settings });
    // });

    // app.get('/apitest', checkIfLoggedIn.check, function (req, res) {
    //     try {
    //         getPermissionLevel.checkIsAdmin(req.session)
    //         res.render('apitest');
    //     } catch (error) {
    //         res.status(error.status).json(error)
    //     }

    // });

    // app.post('/getExtractFile', checkIfLoggedIn.check, function (req, res) {
    //     res.download(path.join(__dirname, "../public/GeneratedFiles/" + req.session.user + "/" + req.body.filename));
    // });
    // app.post('/getExtractFiles', checkIfLoggedIn.check, function (req, res) {
    //     var zip = require('express-zip');
    //     filename = req.body.filename1.substring(0, req.body.filename1.length - 23);
    //     filename = filename + "_extract.zip"
    //     // for (var i=0; i< req.body.filename.length ; i++)
    //     res.zip([
    //         { path: path.join(__dirname, "../public/GeneratedFiles/" + req.session.user + "/" + req.body.filename1), name: req.body.filename1 },
    //         { path: path.join(__dirname, "../public/GeneratedFiles/" + req.session.user + "/" + req.body.filename2), name: req.body.filename2 }
    //     ], filename);
    // });

    // app.get('/userData', checkIfLoggedIn.check, async function (req, res) {
    //     var dir = "./public/GeneratedFiles/" + req.session.user
    //     var fileList = fileHandler.PPTfiles(dir)
    //     var uploadErrors = await getMassuploadErrors.Errorlister(req.session.user)
    //     var isAdmin = false;
    //     if (req.session.role == 'Admin') {
    //         isAdmin = true;
    //     }
    //     req.body.action = "read";
    //     var b = await fileHandler.settings(req)
    //     settings = {}
    //     b.map(elem => {
    //         settings[elem.setting] = elem.value
    //     })
    //     res.render('userData', { files: fileList, uploaderrors: uploadErrors, dir: dir, isAdmin: isAdmin, username: req.session.displayName, settings: settings });
    // });


    // app.post('/downloadFile', checkIfLoggedIn.check, function (req, res) {
    //     var file = fileHandler.downloadFile(req.body.dir, req.body.file)
    //     res.send(file)
    // })

    // app.post('/delDB', function (req, res) {
    //     fileHandler.delDB(req.body.db_name, req.body.collection, req.body.db_type, (result) => {
    //         res.json(result);
    //     })
    // })

    // app.post('/editDB', function (req, res) {
    //     fileHandler.editDB(req.body.db_name, req.body.collection, req.body.new_db_name, req.body.new_comment, (result) => {
    //         res.json(result);
    //     })
    // })

    // app.post('/changeVisibility', function (req, res) {
    //     fileHandler.changeVisibility(req.body.db_name, req.body.collection, req.body.db_type, req.body.action, (result) => {
    //         res.json(result);
    //     })
    // })

    // app.post('/createFlag', function (req, res) {
    //     fileHandler.createFlag(req.body.db_name, req.body.collection, req.body.db_type, req.body.name, req.body.email, (result) => {
    //         res.json(result);
    //     })
    // })

    // app.post('/checkNNP', function (req, res) {
    //     var data = fileHandler.checkOrgName()
    //     res.json(data)
    // })
    // app.post('/checkNsnId', async function (req, res) {
    //     try {
    //         var data = await addPerson.nsnIdChecker(req)
    //         res.json(data)
    //     }
    //     catch (error) {
    //         mapMessage.mapErrorToMessage(res, error);
    //     }
    // })

    // app.post('/createProject', checkIfLoggedIn.check, async function (req, res) {
    //     try {
    //         var response = await projectHandler.createProject(req);
    //         mapMessage.mapDataToMessage(res, response);
    //     }
    //     catch (error) {
    //         mapMessage.mapErrorToMessage(res, error);
    //     }
    // });

    // app.post('/deleteProject', checkIfLoggedIn.check, async function (req, res) {
    //     try {
    //         var response = await projectHandler.deleteProject(req);
    //         mapMessage.mapDataToMessage(res, response);
    //     }
    //     catch (error) {
    //         mapMessage.mapErrorToMessage(res, error);
    //     }
    // });

    // app.post('/delFile', checkIfLoggedIn.check, function (req, res) {
    //     try {
    //         fileHandler.delFile(req.body.file, req.session.user);
    //         res.send("File deleted");
    //     }
    //     catch (err) {
    //         res.send(err);
    //     }
    // })

    // app.post('/serverLog', function (req, res) {
    //     fileHandler.serverLog(req, res, (result) => {
    //         res.json(result);
    //     })
    // })

    // app.post('/emptyOrgsFile', function (req, res) {
    //     fileHandler.emptyOrgsFile(req, res, (result) => {
    //         res.json(result);
    //     })
    // })

    // app.post('/underTransfer', async function (req, res) {
    //     await fileHandler.checkUnderTransfer();
    //     fileHandler.underTransferFile(req, res, (result) => {
    //         res.json(result);
    //     })        
    // })

    // app.get('/searchN2Orgs', checkIfLoggedIn.check, async function (req, res) {
    //     try {
    //         var response = await searchN2OrgsHandler.searchN2OrgsHandler(req)
    //         mapMessage.mapDataToMessage(res, response.data);
    //     } catch (error) {
    //         mapMessage.mapErrorToMessage(res, error);
    //     }
    // });

    // app.post('/ajax/searchOrgs', checkIfLoggedIn.check, async function (req, res) {
    //     try {
    //         var response = await searchOrgsHandler.searchOrgsHandler(req);
    //         mapMessage.mapDataToMessage(res, response);
    //     }
    //     catch (error) {
    //         mapMessage.mapErrorToMessage(res, error);
    //     }
    // });

    app.get('/ajax/getContacts', async function (req, res) {
        try {

            var response = await manageUserHandler.getContacts();
           mapMessage.mapDataToMessage(res, response);
        }
        catch (error) {
            mapMessage.mapErrorToMessage(res, error);
        }
    });

    // app.get('/admin', checkIfLoggedIn.check, async function (req, res) {
    //     try {
    //         await manageUserHandler.syncUsers(req);
    //         req.session.underTransfer = await fileHandler.checkUnderTransfer();
    //         var isAdmin = true;
    //         getPermissionLevel.checkIsAdmin(req.session);
    //         var userList = await manageUserHandler.getUsers();
    //         var modifiedUserList = userList.map((item) => {
    //             if (item.orgName == undefined) {
    //                 item.orgName = "Not set";
    //             }

    //             var modOrgs2 = [];
    //             var viewOrgs2 = [];
    //             for (var i = 0; i < item.modifyRights.length; i++) {
    //                 modOrgs2.push({ org_id: item.modifyRights[i], org_name: (item.modifyOrgNames === undefined ? "Not set." : item.modifyOrgNames[i]) });
    //             }
    //             for (var i = 0; i < item.viewRights.length; i++) {
    //                 viewOrgs2.push({ org_id: item.viewRights[i], org_name: (item.viewOrgNames === undefined ? "Not set." : item.viewOrgNames[i]) });
    //             }

    //             item.modifyOrgs = modOrgs2;
    //             item.viewOrgs = viewOrgs2;

    //             return item;
    //         }); // TODO - remove if not neccesary
    //         var projectList = await dbApi.find("project", {}, {}, needExceptionIfEmpty = false);
    //         var headerList = await dbApi.find("headers", {}, {}, needExceptionIfEmpty = false);
    //         var filteredHeaders = headerList.filter(obj => (obj.db_name.length > 0 && obj.db_type != 'financial')); // TODO - why?
    //         req.body.action = "read";
    //         var b = await fileHandler.settings(req)
    //         settings = {}
    //         b.map(elem => {
    //             settings[elem.setting] = elem.value
    //         })
    //         let mergeErrors = await getMassuploadErrors.mergeErrors();
    //         let uploadError = await dbApi.find("uploadError", {})
    //         let uploadError2 = await dbApi.find("uploadError2", {})
    //         res.render('admin', { userData: modifiedUserList, mergeErrors: mergeErrors, projectData: projectList, dbData: filteredHeaders, isAdmin: isAdmin, username: req.session.displayName, settings: settings,uploadError:uploadError,uploadError2:uploadError2});
    //         //res.render('admin', { userData: modifiedUserList, projectData: projectList, dbData: filteredHeaders, isAdmin: isAdmin, username: req.session.displayName, settings: settings, uploadError: uploadError, uploadError2: uploadError2 });
    //     } catch (error) {
    //         mapMessage.mapErrorToMessage(res, error); // TODO - render error page
    //     }
    // });

    // app.post('/upload', checkIfLoggedIn.check, async function (req, res) {
    //     try {
    //         getPermissionLevel.checkIsAdmin(req.session)
    //         var response = await FormParser.FormParser(req);
    //         mapMessage.mapDataToMessage(res, response);
    //     } catch (error) {
    //         logger.info(error);
    //         req.session.processStatus.data = null;
    //         req.session.processStatus.error = error.error;
    //         req.session.save();
    //         mapMessage.mapErrorToMessage(res, error);
    //     }


    // });


    // // TODO - rename to /ajax/getExtract (even in the wave_ajax.js)
    // app.post('/getExtract', checkIfLoggedIn.check, async function (req, res) {
    //     try {
    //         var response = await getExtractHandler.getExtractHandler(req);
    //         mapMessage.mapDataToMessage(res, response.data)
    //     }
    //     catch (error) {
    //         mapMessage.mapErrorToMessage(res, error);
    //     }
    // });


    // /*
    //     AJAX calls
    // */

    // app.post('/ajax/manageUser', checkIfLoggedIn.check, async function (req, res) {
    //     try {
    //         getPermissionLevel.checkIsAdmin(req.session);
    //         var response = await manageUserHandler.manageUser(req);
    //         mapMessage.mapDataToMessage(res, response.data);
    //     } catch (error) {
    //         mapMessage.mapErrorToMessage(res, error);
    //     }
    // });

    // app.get('/ajax/syncronizeUsers', async function (req, res) {
    //     try {
    //         getPermissionLevel.checkIsAdmin(req.session);
    //         var response = await manageUserHandler.syncUsers(req);
    //         mapMessage.mapDataToMessage(res, response.data);
    //     } catch (error) {
    //         mapMessage.mapErrorToMessage(res, error);
    //     }
    // });

    // app.post('/ajax/getDbs', checkIfLoggedIn.check, function (req, res) {
    //     getDbsHandler.getDbsHandler(req, res, function (result) {
    //         if (result.success) {
    //             res.json(result.data);
    //         } else {
    //             res.status(result.status);
    //             res.json(result.error);
    //         }
    //     });
    // });

    // // TODO - remove this call, and get the username from template
    // app.get('/ajax/getUsername', checkIfLoggedIn.check, function (req, res) {
    //     getUsernameHandler.getUsername(req, res, function (result) {
    //         res.status(result.status).json(result);
    //     });
    // });

    // // TODO - refactor, including permission and formal check and implementing exception handling
    // app.post('/ajax/getSubTreeOnDemand', checkIfLoggedIn.check, async function (req, res) {
    //     try {
    //         var response = await getSubTreeOnDemandHandler.getSubTreeOnDemandHandler(req, res);
    //         mapMessage.mapDataToMessage(res, response);
    //     } catch (error) {
    //         mapMessage.mapErrorToMessage(res, error);
    //     }
    // });

    // app.post('/ajax/getCompTree', checkIfLoggedIn.check, async function (req, res) {
    //     try {
    //         var response = await getCompTreeHandler.getCompTreeHandler(req, res);
    //         mapMessage.mapDataToMessage(res, response);
    //     } catch (error) {
    //         mapMessage.mapErrorToMessage(res, error);
    //     }
    // });

    // app.post('/ajax/rename', checkIfLoggedIn.check, async function (req, res) {
    //     try {
    //         var response = await rename.renameOrgHandler(req);
    //         mapMessage.mapDataToMessage(res, response.data);
    //     } catch (error) {
    //         mapMessage.mapErrorToMessage(res, error);
    //     }
    // });

    // app.post('/ajax/addOrg', checkIfLoggedIn.check, async function (req, res) {
    //     try {
    //         var response = await addOrgHandler.addOrgHandler(req);
    //         mapMessage.mapDataToMessage(res, response.data);
    //     } catch (error) {
    //         mapMessage.mapErrorToMessage(res, error);
    //     }
    // });

    // app.post('/ajax/change_lm', checkIfLoggedIn.check, async function (req, res) {
    //     try {
    //         var response = await modifyLMHandler.changeLMHandler(req);
    //         mapMessage.mapDataToMessage(res, response);
    //     } catch (error) {
    //         mapMessage.mapErrorToMessage(res, error);
    //     }
    // });

    // app.post('/ajax/remove_lm', checkIfLoggedIn.check, async function (req, res) {
    //     try {
    //         var response = await modifyLMHandler.removeLM(req);
    //         mapMessage.mapDataToMessage(res, response.data);
    //     } catch (error) {
    //         mapMessage.mapErrorToMessage(res, error);
    //     }
    // });

    // app.post('/ajax/checkIfHasPeople', checkIfLoggedIn.check, async function (req, res) {
    //     try {
    //         var response = await delFlag.checkIfHasPeople(req);
    //         mapMessage.mapDataToMessage(res, response);
    //     } catch (error) {
    //         mapMessage.mapErrorToMessage(res, error);
    //     }

    // });

    // app.post('/ajax/delete', checkIfLoggedIn.check, async function (req, res) {
    //     try {
    //         var response = await delFlag.changeDelFlag(req);
    //         mapMessage.mapDataToMessage(res, response.data);
    //     } catch (error) {
    //         mapMessage.mapErrorToMessage(res, error);
    //     }

    // });

    // app.post('/ajax/move', checkIfLoggedIn.check, async function (req, res) {
    //     try {
    //         var response = await moveOrgHandler.moveOrgHandler(req);
    //         mapMessage.mapDataToMessage(res, response.data);
    //     } catch (error) {
    //         mapMessage.mapErrorToMessage(res, error);
    //     }
    // });

    // app.post('/ajax/sendPeopleDataOnMove', checkIfLoggedIn.check, async function (req, res) {
    //     try {
    //         var response = await moveOrgHandler.sendPeopleDataOnMove(req.body.org_id, req.body.db_name);
    //         mapMessage.mapDataToMessage(res, response);
    //     } catch (error) {
    //         mapMessage.mapErrorToMessage(res, error);
    //     }
    // });

    // // TODO - refactor, including permission and formal check and implementing exception handling (and/or redesign)
    // app.post('/check_status', checkIfLoggedIn.check, (req, res) => {
    //     if (req.session.processStatus.error != null) {
    //         res.status(500);
    //         res.send(req.session.processStatus.error);
    //     } else {
    //         res.send(req.session.processStatus)
    //     }
    // });

    // // TODO - refactor, including permission and formal check and implementing exception handling
    // app.post('/ajax/orgChartPost', checkIfLoggedIn.check, (req, res) => {
    //     if (req.session.processStatus.data == null || req.session.processStatus.data.includes(".pptx") || req.session.processStatus.data.includes("_analysis.xlsx")) {
    //         orgChartPost.sendOrgChartPost(req, res);
    //         res.send("Generate started");
    //     } else if (req.session.processStatus.data.includes("Generating") || req.session.processStatus.data.includes("Sending") || req.session.processStatus.data.includes("PPT received")) {
    //         res.send("You have a ppt or analysis generation in process please wait until its finished to start a new one! The opened window status refers to the previously submitted ppt generation!")
    //     } else {
    //         orgChartPost.sendOrgChartPost(req, res);
    //         res.send("Generate started");
    //     }
    // });

    // app.post('/ajax/orgChartOneByOnePost', checkIfLoggedIn.check, async function (req, res) {
    //     for (let elem of req.body.data) {
    //         var req2 = req
    //         req2.body = elem;
    //         await orgChartPost.sendOrgChartPost(req2, res);
    //     }
    //     res.send("Generate started");
    // });

    // app.post('/ajax/generateSAP', checkIfLoggedIn.check, async function (req, res) {
    //     try {
    //         var response = await generateSAP.SAPextract(req, res);
    //         res.send(response);
    //     } catch (error) {
    //         mapMessage.mapErrorToMessage(res, error);
    //     }
    // });

    // app.post('/ajax/generateNSB', checkIfLoggedIn.check, async function (req, res) {
    //     try {
    //         var response = await generateNSB.NSBextract(req, res);
    //         res.send(response);
    //     } catch (error) {
    //         mapMessage.mapErrorToMessage(res, error);
    //     }
    // });

    // app.post('/ajax/operativeDataDump', checkIfLoggedIn.check, async function (req, res) {
    //     try {
    //         var response = await OpDataDump.OperativeRawDataExtract(req, res);
    //         res.send(response);
    //     } catch (error) {
    //         mapMessage.mapErrorToMessage(res, error);
    //     }
    // });

    // app.post('/ajax/rawDataDump', checkIfLoggedIn.check, async function (req, res) {
    //     try {
    //         var response = await rawDataDump.RawDataExtract(req, res);
    //         res.send(response);
    //     } catch (error) {
    //         mapMessage.mapErrorToMessage(res, error);
    //     }
    // });

    // app.post('/ajax/generateAnalysis', checkIfLoggedIn.check, (req, res) => {
    //     generateAnalysis.analysisExcel(req, res)
    //     res.send("Generate started");
    // });
    
    // app.post('/ajax/generateSAPExcelForPlanning', checkIfLoggedIn.check, async function (req, res) {
    //     try {
    //         var response = await generateExcelForPlanning.excelForPlanningPage(req, res);
    //         res.send(response);
    //     } catch (error) {
    //         mapMessage.mapErrorToMessage(res, error);
    //     }
    // });
    // // app.post('/ajax/', checkIfLoggedIn.check, (req, res) => {
    // //     generateExcelForPlanning.excelForPlanningPage(req, res)
    // //     res.send("Generation started");
    // // });

    // app.post('/ajax/getDetails', checkIfLoggedIn.check, async function (req, res) {
    //     try {
    //         var response = await getDetails.getDetails(req);
    //         mapMessage.mapDataToMessage(res, response);
    //     } catch (error) {
    //         mapMessage.mapErrorToMessage(res, error);
    //     }
    // });

    // app.post('/ajax/getMoreDetails', checkIfLoggedIn.check, async function (req, res) {
    //     try {
    //         var response = await getMoreDetails.getMoreDetails(req);
    //         res.json(response);
    //         //mapMessage.mapDataToMessage(res, response);
    //     } catch (error) {
    //         mapMessage.mapErrorToMessage(res, error);
    //     }
    //     // getMoreDetails.getMoreDetails(req, res, function (data) {
    //     //     res.json(data);
    //     // });
    // });

    // app.post('/ajax/getPersonDetails', checkIfLoggedIn.check, function (req, res) {
    //     getMoreDetails.getPersonDetails(req, res, function (data) {
    //         res.json(data);
    //     });
    // });

    // app.post('/ajax/getn2', checkIfLoggedIn.check, (req, res) => {
    //     getn2Handler.getN2Handler(req, res, (result) => {
    //         res.status(result.status);
    //         delete result.status;
    //         delete result.success;
    //         res.json(result);
    //     });
    // });

    // app.post('/ajax/getPeopleByNameOrId', checkIfLoggedIn.check, function (req, res) {
    //     getPeopleByNameOrIdHandler.getPeopleByNameOrIdHandler(req, res, function (result) {
    //         if (result.success) {
    //             res.json(result.data);
    //         } else {
    //             res.status(result.status_code);
    //             res.json(result.error);
    //         }
    //     });
    // });

    // app.post('/ajax/transfer', checkIfLoggedIn.check, async function (req, res) {
    //     try {
    //         var response = await trasferOrgHandler.transferOrgHandler(req);
    //         mapMessage.mapDataToMessage(res, response.data);
    //     } catch (error) {
    //         mapMessage.mapErrorToMessage(res, error);
    //     }
    // })

    // app.post('/ajax/acceptTransfer', checkIfLoggedIn.check, async function (req, res) {
    //     try {
    //         var response = await trasferOrgHandler.acceptTransfer(req);
    //         mapMessage.mapDataToMessage(res, response.data);
    //     } catch (error) {
    //         mapMessage.mapErrorToMessage(res, error);
    //     }
    // });

    // app.post('/ajax/rejectTransfer', checkIfLoggedIn.check, async function (req, res) {
    //     try {
    //         var response = await trasferOrgHandler.rejectTransfer(req);
    //         mapMessage.mapDataToMessage(res, response.data);
    //     } catch (error) {
    //         mapMessage.mapErrorToMessage(res, error);
    //     }
    // });
    // app.post('/ajax/uploadTemplate', checkIfLoggedIn.check, async function (req, res) {
    //     try {
    //         var response = await uploadTemplate.uploadTemplate(req);
    //         mapMessage.mapDataToMessage(res, response.data);
    //     } catch (error) {
    //         mapMessage.mapErrorToMessage(res, error);
    //     }
    // });
    // app.post('/ajax/isMergeViewNeeded', checkIfLoggedIn.check, function (req, res) {
    //     checkConflict.checkConflict(req, res, function (result) {
    //         res.status(result.status).json(result.data);
    //     })
    // })
    // app.post('/ajax/undeleteOrg', async function (req, res) {
    //     try {
    //         var response = await delFlag.changeDelFlag(req);
    //         mapMessage.mapDataToMessage(res, response.data);
    //     } catch (error) {
    //         mapMessage.mapErrorToMessage(res, error);
    //     }
    // })
    // app.post('/ajax/keepChange', async function (req, res) {
    //     try {
    //         await keepChangeHandler.keepChangeHandler(req)
    //         mapMessage.mapDataToMessage(res, '');
    //     } catch (error) {
    //         mapMessage.mapErrorToMessage(res, error);
    //     }
    // })
    // app.post('/ajax/copyOrgWithLm', async function (req, res) {
    //     try {
    //         await copyOrgWithLm.copyOrgWithLm(req)
    //         mapMessage.mapDataToMessage(res, '');
    //     } catch (error) {
    //         mapMessage.mapErrorToMessage(res, error);
    //     }
    // })
    // app.post('/ajax/removePerson', async function (req, res) {
    //     try {
    //         await modifyLMHandler.deletePerson(req)
    //         mapMessage.mapDataToMessage(res, '');
    //     } catch (error) {
    //         mapMessage.mapErrorToMessage(res, error);
    //     }
    // });
    // app.post('/ajax/movePerson', async function (req, res) {
    //     try {
    //         await modifyLMHandler.movePerson(req)
    //         mapMessage.mapDataToMessage(res, '');
    //     } catch (error) {
    //         mapMessage.mapErrorToMessage(res, error);
    //     }
    // })

    // app.post('/ajax/moveMorePerson', async function (req, res) {
    //     try {
    //         await modifyLMHandler.moveMorePerson(req)
    //         mapMessage.mapDataToMessage(res, '');
    //     } catch (error) {
    //         mapMessage.mapErrorToMessage(res, error);
    //     }
    // })
    // // app.post('/ajax/manageSapOrgID', async function (req, res) {
    // //     try {
    // //         await manageDottedOrgLinkHandler.manageSapOrgID(req)
    // //         mapMessage.mapDataToMessage(res, '');
    // //     } catch (error) {
    // //         mapMessage.mapErrorToMessage(res, error);
    // //     }
    // // });
    // app.post('/ajax/manageDottedOrgLink', async function (req, res) {
    //     try {
    //         await manageDottedOrgLinkHandler.manageDottedOrgLinkHandler(req)
    //         mapMessage.mapDataToMessage(res, '');
    //     } catch (error) {
    //         mapMessage.mapErrorToMessage(res, error);
    //     }
    // });
    // app.post('/ajax/manageDottedPeopleLink', async function (req, res) {
    //     try {
    //         await peopleLinkHandler.peopleLinkHandler(req)
    //         mapMessage.mapDataToMessage(res, '');
    //     } catch (error) {
    //         mapMessage.mapErrorToMessage(res, error);
    //     }
    // });

    // app.post('/ajax/transferPerson', async function (req, res) {
    //     try {
    //         await modifyLMHandler.transferPerson(req)
    //         mapMessage.mapDataToMessage(res, '');
    //     } catch (error) {
    //         mapMessage.mapErrorToMessage(res, error);
    //     }
    // });

    // app.post('/ajax/acceptPersonTransfer', async function (req, res) {
    //     try {
    //         await modifyLMHandler.acceptPersonTransfer(req)
    //         mapMessage.mapDataToMessage(res, '');
    //     } catch (error) {
    //         mapMessage.mapErrorToMessage(res, error);
    //     }
    // });


    // app.post('/ajax/rejectPersonTransfer', async function (req, res) {
    //     try {
    //         var data = await modifyLMHandler.rejectPersonTransfer(req)
    //         mapMessage.mapDataToMessage(res, data);
    //     } catch (error) {
    //         mapMessage.mapErrorToMessage(res, error);
    //     }
    // });

    // app.post('/ajax/addPerson', async function (req, res) {
    //     try {
    //         await addPerson.addPerson(req)
    //         mapMessage.mapDataToMessage(res, '');
    //     } catch (error) {
    //         mapMessage.mapErrorToMessage(res, error);
    //     }
    // })
    // app.post('/ajax/commentPerson', async function (req, res) {
    //     try {
    //         await commentPerson.commentPerson(req)
    //         mapMessage.mapDataToMessage(res, '');
    //     } catch (error) {
    //         mapMessage.mapErrorToMessage(res, error);
    //     }
    // })
    // app.post('/ajax/editPerson', async function (req, res) {
    //     try {
    //         var response = await editPerson.editPerson(req)
    //         mapMessage.mapDataToMessage(res, response);
    //     } catch (error) {
    //         mapMessage.mapErrorToMessage(res, error);
    //     }
    // })
    // app.post('/ajax/addDelPrivateDb', async function (req, res) {
    //     try {
    //         await addDelPrivateDbHandler.addDelPrivateDbHandler(req)
    //         mapMessage.mapDataToMessage(res, '');
    //     } catch (error) {
    //         mapMessage.mapErrorToMessage(res, error);
    //     }
    // });

    // app.post('/ajax/copyOrg', async function (req, res) {
    //     try {
    //         await modifyLMHandler.copyOrg(req);
    //         mapMessage.mapDataToMessage(res, '');
    //     } catch (error) {
    //         mapMessage.mapErrorToMessage(res, error);
    //     }
    // });

    // app.post('/ajax/copyPerson', async function (req, res) {
    //     try {
    //         await modifyLMHandler.copyPerson(req);
    //         mapMessage.mapDataToMessage(res, '');
    //     } catch (error) {
    //         mapMessage.mapErrorToMessage(res, error);
    //     }
    // });

    // app.post('/ajax/renamePerson', async function (req, res) {
    //     try {
    //         await modifyLMHandler.renamePerson(req);
    //         mapMessage.mapDataToMessage(res, '');
    //     } catch (error) {
    //         mapMessage.mapErrorToMessage(res, error);
    //     }
    // });

    // app.post('/ajax/copyMorePerson', async function (req, res) {
    //     try {
    //         await modifyLMHandler.copyMorePerson(req);
    //         mapMessage.mapDataToMessage(res, '');
    //     } catch (error) {
    //         mapMessage.mapErrorToMessage(res, error);
    //     }
    // });

    // app.post('/ajax/assignLM', async function (req, res) {
    //     try {
    //         await modifyLMHandler.assignLM(req);
    //         mapMessage.mapDataToMessage(res, '');
    //     } catch (error) {
    //         mapMessage.mapErrorToMessage(res, error);
    //     }
    // });

    // app.post('/settings', async function (req, res) {
    //     try {
    //         var resp = await fileHandler.settings(req)
    //         mapMessage.mapDataToMessage(res, resp);
    //     } catch (error) {
    //         mapMessage.mapErrorToMessage(res, error);
    //     }
    // });

    // app.post('/ajax/generateNIMSExtract', checkIfLoggedIn.check, async function (req, res) {
    //     try {
    //         await NIMSExtractHandler.getNIMSExtract(req)
    //         mapMessage.mapDataToMessage(res, '');
    //     } catch (error) {
    //         mapMessage.mapErrorToMessage(res, error);
    //     }
    // })
    // app.post('/ajax/generatePersonLogFile', checkIfLoggedIn.check, async function (req, res) {
    //     try {
    //         response = await generatePersonExtract.generatePersonLogFile(req)
    //         mapMessage.mapDataToMessage(res, response.data);
    //     } catch (error) {
    //         mapMessage.mapErrorToMessage(res, error);
    //     }
    // })
    // app.post('/ajax/generateChangeLogExtracts', checkIfLoggedIn.check, async function (req, res) {
    //     try {
    //         response = await generateChangeLog.generateChangeLogExtracts(req)
    //         mapMessage.mapDataToMessage(res, response.data);
    //     } catch (error) {
    //         mapMessage.mapErrorToMessage(res, error);
    //     }
    // })

    // app.post('/ajax/returnConflicts', checkIfLoggedIn.check, async function (req, res) {
    //     try {
    //         var resp = await keepChangeHandler.returnConflicts(req)
    //         mapMessage.mapDataToMessage(res, resp);
    //     } catch (error) {
    //         mapMessage.mapErrorToMessage(res, error);
    //     }
    // })

    // app.get('/ajax/getNimsDbs', checkIfLoggedIn.check, async function (req, res) {
    //     try {
    //         returned = await NIMSExtractHandler.getNimsDbs(req)
    //         mapMessage.mapDataToMessage(res, returned.data);
    //     } catch (error) {
    //         mapMessage.mapErrorToMessage(res, error);
    //     }
    // })
    // app.get('/ajax/getNIMSMapping', checkIfLoggedIn.check, async function (req, res) {
    //     try {
    //         returned = await NIMSExtractHandler.getMappingTable(req)
    //         mapMessage.mapDataToMessage(res, returned.data);
    //     } catch (error) {
    //         mapMessage.mapErrorToMessage(res, error);
    //     }
    // })

    // // app.get('/testTable', checkIfLoggedIn.check, async function(req, res){
    // //     res.render('testTable')
    // // });

    // // app.get('/hcDump', checkIfLoggedIn.check, async function(req, res){
    // //     res.send(hc.getCollectionsByFilter({}))
    // // });

    // app.get('/createDump', checkIfLoggedIn.check, async function (req, res) {
    //     dump.createBackup()
    // });

    // app.get('/check1', checkIfLoggedIn.check, async function (req, res) {
    //     extraCheck.checkPersonOccurrences();
    // });

    // app.get('/check2', checkIfLoggedIn.check, async function (req, res) {
    //     extraCheck.checkOrgOccurrences(req);
    // });
}
