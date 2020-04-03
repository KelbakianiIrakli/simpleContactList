$(function () {
    console.log("loaded")
})
//navbar toggle active
$("#add-contacts-form").submit(function (event) {
    event.preventDefault();
    var form = $('#add-contacts-form')[0]
    var formData = new FormData(form);

    $.ajax({
        url: '/contacts',
        type: 'POST',
        data: formData,
        async: false,
        cache: false,
        contentType: false,
        enctype: 'multipart/form-data',
        processData: false,
        success: function (response) {
            console.log(response);
            location.reload();
        }
    });

    return false;
});
$("#contacts-groups-form").submit(function (event) {
    event.preventDefault();
    var arrayOfSavedGroups = $('#contacts-groups-form').serializeArray()

    if (arrayOfSavedGroups && arrayOfSavedGroups.length) {
        arrayOfSavedGroups = arrayOfSavedGroups.filter(function (element) { return element.value }).map(function (element) { return element.value })
    }
    Store.setDropDownOptions(arrayOfSavedGroups)
    location.reload()
});
function loadPageFillByGroups() {
    var dropDownOptions = Store.getdropDownOptions()
    for (var i = 0; i < dropDownOptions.length; i++) {
        $('#fieldForgroups' + (i + 1)).val(dropDownOptions[i])
        if (i < dropDownOptions.length - 1) additionalGroupsField()
    }
}
var byteArray;
var readURL = function (input, id) {
    byteArray = ""
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        byteArray = "OLAA"
        reader.onload = function (e) {
            byteArray = e.target.result
            $('#' + id).attr('src', byteArray);
        }

        reader.readAsDataURL(input.files[0]);
    }
}

$("#profile-image-upload").on('change', function () {
    readURL(this, "avatarImage");
});

function fireClickOnUploadButton() {
    $("#profile-image-upload").click();
};

// document.querySelector('#book-form').addEventListener('submit', function (e){
//     e.preventDefault()
//     let date= new Date()
//     const firstName = document.querySelector('#firstName').value
//     const  lastName = document.querySelector('#lastName').value
//     const favourite= document.getElementById('favourite').checked
//     var mobileNumbers = []
//     const groups = $('.selectpicker').val()
//     $('input[id^="mobileNumber"]').each(function(input){
//         var value = $('input[id^="mobileNumber"]').val();
//         mobileNumbers.push(value)
//         });
//     var posting = $.post("/ajax/addContact",
//         {
//             firstName :  firstName,
//             lastName : lastName,
//             groups : groups,
//             favourite: favourite,
//             mobileNumbers: mobileNumbers,
//         });
//         posting.done(function (response) {
//             if (response.data.status ==200){
//                 reloadData()
//             }
//             else{
//                 errorPopup("შეცდომა! \n" + "წარუმატებელი კონტაქტის დამატება")
//             }
//         });

// })
function savePicture(book, coverEncoded) {
    if (coverEncoded == null) return
    const cover = JSON.parse(coverEncoded)
    if (cover != null && imageMimeTypes.includes(cover.type)) {
        book.coverImage = new Buffer.from(cover.data, 'base64')
        book.coverImageType = cover.type
    }
}
// function sendPatchRequest(data) {
//     // var formData = new FormData(data);
//     $.ajax({
//         url: '/contacts/'+data.contactId,
//         type: 'PATCH',
//         data: data,
//         async: false,
//         cache: false,
//         contentType: false,
//         enctype: 'multipart/form-data',
//         processData: false,
//         success: function (response) {
//             console.log(response);
//             location.reload();
//         }
//     });

//     return false;
// };

function sendPatchRequest(formData, id) {

    $.ajax({
        url: '/contacts/' + id,
        type: 'PATCH',
        data: formData,
        async: false,
        cache: false,
        contentType: false,
        enctype: 'multipart/form-data',
        processData: false,
        success: function (response) {
            console.log(response);
            reloadData()
            document.getElementById('userPopUpFooter').innerHTML = ('<button type="button" id="successfullyEditedButton" class="btn btn-success btn-lg btn-block no-click"><i class="fas fa-check"></i> Success</button>')
            $('#manageUserPopUp #successfullyEditedButton').on('click', function () {
                $('#manageUserPopUp').modal('hide');
                $('#manageUserPopUp').remove();
            })
        },
        error: function (response) {

        }
    });

    return false;
}
function arraysEqual(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2) || arr1.length != arr2.length)
        return false;
    var sortedArr1 = arr1.concat().sort();
    var sortedArr2 = arr2.concat().sort();
    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i])
            return false;
    }
    return true;
}
function fillMainPageWithGroups() {
    var dropDownOptions = Store.getdropDownOptions()
    for (var i = 0; i < dropDownOptions.length; i++) {
        $("#groups-main").append('<option>'+ dropDownOptions[i] + '</option>');
    }
    $('#groups-main').selectpicker("refresh");
}
// Storing for all possible groups - I think there is no need to save this data in backend
class Store {
    static getdropDownOptions() {
        let dropDownOptions;
        if (localStorage.getItem('dropDownOptions') == null) {
            dropDownOptions = []
        } else {
            dropDownOptions = JSON.parse(localStorage.getItem('dropDownOptions'))
        }

        return dropDownOptions;

    }
    static setDropDownOptions(options) {
        localStorage.setItem('dropDownOptions', JSON.stringify(options))

    }
    static removeGroups() {

    }
}
