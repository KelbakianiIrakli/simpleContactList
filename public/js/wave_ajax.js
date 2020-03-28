$(function () {
    console.log("loaded")
})

	
    var readURL = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#avatarImage').attr('src', e.target.result);
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

document.querySelector('#book-form').addEventListener('submit', function (e){
    e.preventDefault()
    const firstName = document.querySelector('#firstName').value
    const  lastName = document.querySelector('#lastName').value
    const favourite= document.getElementById('favourite').checked
    var mobileNumbers = []
    const groups = $('.selectpicker').val()
    $('input[id^="mobileNumber"]').each(function(input){
        var value = $('input[id^="mobileNumber"]').val();
        mobileNumbers.push(value)
        });
    var posting = $.post("/ajax/addContact",
        {
            firstName :  firstName,
            lastName : lastName,
            groups : groups,
            favourite: favourite,
            mobileNumbers: mobileNumbers
        });
        posting.done(function (response) {
            if (response.data.status ==200){
                reloadData()
            }
            else{
                errorPopup("შეცდომა! \n" + "წარუმატებელი კონტაქტის დამატება")
            }
        });

})
