
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
function modifyContact(id) {
    $.ajax({
        url: '/contacts/' + id,
        type: 'GET',
        async: false,
        processData: false,
        success: function (response) {
            console.log(response);
            manageUserPopUp(response);
        }
    });


}
function reloadData() {
    $.get('/contacts').then(function (dbData) {
        dbData = dbData.contacts.sort(function (a, b) {
            return a.favourite == "on" ? -1 : 1;
        });
        usersModel = dbData.data;
        var id = 1;
        var users = dbData.map(function (elem) {
            var contactImage;
            contactImage = elem.contactImage && elem.contactImage != "none" ? '../../' + elem.contactImage : "../../" + "avatar.png"
            var user = {};
            user._id = elem._id
            user.id = id;
            id++;
            user.pic = '<img id = "avatarImageInTable" data-id ="' + user._id + '" src="' + contactImage + '" class="avatar-size" >';
            user.firstName = elem.firstName;
            user.lastName = elem.lastName;
            user.mobileNumbers = elem.phoneNumber
            user.groups = elem.groups;
            user.remark = elem.remark;
            user.favourite = elem.favourite == "on" ? '<div <i class="fas fa-star fa-2x" style="color:yellow"></i> </div>' : ""
            user.actions = '<div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups"><button class="btn btn-sm btn-primary fas fa-pen-square" onClick=modifyContact("' + elem._id + '")>\
            </button><button class="btn btn-sm btn-danger fas fa-trash-alt" onClick=deleteContact("'+ elem._id + '")></button></div>'
            return user
        });

        ft.rows.load(users)

    })

}

function deleteContact(id) {
    yesOrNoWarningPopup("ნამდვილად გსურთ კონტაქტებიდან წაშალოთ ეს პიროვნება?", function (decision) {
        if (decision == true) {
            $.ajax({
                url: '/contacts/' + id,
                type: 'Delete',
                async: false,
                processData: false,
                success: function (response) {
                    console.log(response);
                    reloadData();
                    $('#yesOrNoPopup').modal('hide');
                }
            });

        }
    });
}