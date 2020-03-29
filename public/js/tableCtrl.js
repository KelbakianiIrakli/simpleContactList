var usersModel = [];
var ft;
$().dropdown('toggle')

jQuery(function ($) {
    ft = FooTable.init('.table', {
        "paging": {
            "enabled": true
        },
        "filtering": {
            "enabled": true
        },
        "editing": {
            "enabled": false
        },
        "sorting": {
            "enabled": true
        },
        "columns": [{
            name: "pic",
            title: "სურათი"
        },
        {
            name: "favourite",
            title: "ფავორიტი"
        },
        {
            name: "firstName",
            title: "სახელი"
        },
        {
            name : "lastName",
            title : "გვარი"
        },
        {
            name: "mobileNumbers",
            title: "ტელეფონის ნომრები"
        },
        {
            name: "groups",
            title: "ჯგუფები"
        },
        {
            name: "actions",
            title: "შესწორება"
        },
        ],

    });

    reloadData()

});
function reloadData() {
$.get('/contacts').then(function (dbData){
    usersModel = dbData.data;
    var id = 1;
    var users = dbData.contacts.map(function (elem) {
        delete elem._id;
        var user = {};
        user.id = id;
        id++;
        user.pic = '<img id = "avatarImage" src="../../'+elem.contactImage+'" class="avatar-size" >';
        user.firstName = elem.firstName;
        user.lastName = elem.lastName;
        user.mobileNumbers = elem.phoneNumber
        user.groups = elem.groups;
        user.remark = elem.remark;
        user.favourite = elem.favourite && elem.favourite != "no" ? '<div <i class="fas fa-star fa-2x" style="color:yellow"></i> </div>' : ""
        // user.viewOrgs = (elem.viewOrgNames.length == 0 ? "<b>None.</b>" : elem.viewOrgNames.join(", "));
        // user.modifyOrgs = (elem.modifyOrgNames.length == 0 ? "<b>None.</b>" : elem.modifyOrgNames.join(", "));
        // user.role = elem.role;
        user.actions = '<div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups"><button class="btn btn-sm btn-primary fas fa-pen-square" onClick=modifyUser("' + elem.firstName+ '")></button><button class="btn btn-sm btn-danger fas fa-trash-alt" onClick=deleteUser("' + elem.firstName+ '")></button></div>'
        return user
    });

    ft.rows.load(users)

})

}
// function reloadData() {
//     $.get('/ajax/getContacts').then(function (dbData) {
//         usersModel = dbData.data;
//         var id = 1;
//         var users = dbData.data.map(function (elem) {
//             delete elem._id;
//             var user = {};
//             user.id = id;
//             id++;
//             user.pic = '<img id = "avatarImage" src="../../uploads/WIN_20160422_16_44_32_Pro.jpg" class="avatar-size" >';
//             user.firstName = elem.firstName;
//             user.lastName = elem.lastName;
//             user.mobileNumbers = elem.mobileNumbers
//             user.groups = elem.groups;
//             user.favourite = elem.favourite && elem.favourite!="false" ? '<div <i class="fas fa-star fa-2x" style="color:yellow"></i> </div>' : ""
//             // user.viewOrgs = (elem.viewOrgNames.length == 0 ? "<b>None.</b>" : elem.viewOrgNames.join(", "));
//             // user.modifyOrgs = (elem.modifyOrgNames.length == 0 ? "<b>None.</b>" : elem.modifyOrgNames.join(", "));
//             // user.role = elem.role;
//             user.actions = '<div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups"><button class="btn btn-sm btn-primary fas fa-pen-square" onClick=modifyUser("' + elem.firstName+ '")></button><button class="btn btn-sm btn-danger fas fa-trash-alt" onClick=deleteUser("' + elem.firstName+ '")></button></div>'
//             return user
//         });

//         ft.rows.load(users)

//     })

// }

function modifyUser(element) {
    // var actualUser = usersModel.filter(function (elem) {
    //     return (elem.email == email,)
    // })[0];
    manageUserPopUp(element, "modifyUser", handleReturn)
}

var handleReturn = function (retData){
    if (retData.cancel === undefined) {

        var posting = $.post("/ajax/manageUser",
            {
                action: retData.action,
                email: retData.data.email,
                new_email: retData.data.email,
                viewRights: retData.data.viewRights,
                modifyRights: retData.data.modifyRights,
                role: retData.data.role
            });
        posting.done(function (res) {
            reloadData()
            return;
        })
        posting.fail(function (error) {
            reloadData()
            var content = error.responseJSON.error;
            console.log("error \n" + content);
            errorPopup("Error: \n" + content);
        });

    }
    return;
}

function addNewUser() {
    var userObject = {
        email: "",
        role: "Planner",
        modifyOrgNames: [],
        modifyRights: [],
        viewOrgNames: [],
        viewRights: []
    }
    manageUserPopUp2(userObject, "addUser", handleReturn)
}

function deleteUser(email) {
    var actualUser = usersModel.filter(function (elem) {
        return (elem.email == email)
    })[0];
    yesOrNoWarningPopup("Are you sure you want to delete user: " + actualUser.email + " ?", function(decision){
        if(decision == true){
            var retData = {};
            retData.data = actualUser;
            retData.action = "deleteUser";
            handleReturn(retData);
            reloadData()
        }
    });
}