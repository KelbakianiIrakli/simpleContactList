$(function () {
    console.log("loaded")
})

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
var byteArray;
var readURL = function (input) {
    byteArray = ""
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        byteArray = "OLAA"
        reader.onload = function (e) {
            byteArray = e.target.result
            $('#avatarImage').attr('src', byteArray);
        }

        reader.readAsDataURL(input.files[0]);
    }
}

$("#profile-image-upload").on('change', function () {
    readURL(this);
});

function fireClickOnUploadButton() {
    console.log("hi")
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
