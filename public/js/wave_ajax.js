$(function () {
    console.log("loaded")
})
// var input = document.querySelector('input[type=file]');
// input.onchange = function () {
//     var file = input.files[0],
//       reader = new FileReader();
  
//     reader.onloadend = function () {
//       console.log(reader.result)
//       var b64 = reader.result.replace(/^data:.+;base64,/, '');
//       console.log(b64)
//       console.log(b64); //-> "R0lGODdhAQABAPAAAP8AAAAAACwAAAAAAQABAAACAkQBADs="
//     };
  
//     reader.readAsDataURL(file);
//   };
var byteArray;	
    var readURL = function(input) {
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
   
    $("#profile-image-upload").on('change', function(){
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
