
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
            name: "lastName",
            title: "გვარი"
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
            name: "remark",
            title: "შენიშვნა"
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
    $.get('/contacts').then(function (dbData) {
        usersModel = dbData.data;
        var id = 1;
        var users = dbData.contacts.map(function (elem) {
            var contactImage;
            contactImage = elem.contactImage && elem.contactImage !="none" ? '../../' + elem.contactImage : "../../"+ "flamingo2.png"
            var user = {};
            user._id = elem._id
            user.id = id;
            id++;
            user.pic = '<img id = "avatarImage" data-id ="'+user._id+'" src="'+ contactImage + '" class="avatar-size" >';
            user.firstName = elem.firstName;
            user.lastName = elem.lastName;
            user.mobileNumbers = elem.phoneNumber
            user.groups = elem.groups;
            user.remark = elem.remark;
            user.favourite = elem.favourite == "on" ? '<div <i class="fas fa-star fa-2x" style="color:yellow"></i> </div>' : ""
            // user.viewOrgs = (elem.viewOrgNames.length == 0 ? "<b>None.</b>" : elem.viewOrgNames.join(", "));
            // user.modifyOrgs = (elem.modifyOrgNames.length == 0 ? "<b>None.</b>" : elem.modifyOrgNames.join(", "));
            // user.role = elem.role;
            user.actions = '<div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups"><button class="btn btn-sm btn-primary fas fa-pen-square" onClick=modifyUser("' + elem._id +'")>\
            </button><button class="btn btn-sm btn-danger fas fa-trash-alt" onClick=deleteUser("'+elem._id+'")></button></div>'
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

function modifyUser(id) {
    $.ajax({
        url: '/contacts/'+id,
        type: 'GET',
        async: false,
        processData: false,
        success: function (response) {
            console.log(response);
            manageUserPopUp(response);
        }
    });

    
}

var handleReturn = function (retData) {
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

function deleteUser(id) {
    yesOrNoWarningPopup("ნამდვილად გსურთ კონტაქტებიდან წაშალოთ ეს კონტაქტი?", function (decision) {
        if (decision == true) {
            $.ajax({
                url: '/contacts/'+id,
                type: 'Delete',
                async: false,
                processData: false,
                success: function (response) {
                    console.log(response);
                    // fs.unlinkSync('../../'+response.link)
                    reloadData();
                    $('#yesOrNoPopup').modal('hide');
                }
            });
            
        }
    });
}