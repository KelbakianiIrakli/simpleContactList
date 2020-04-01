var counter = 1
const limit = 5 

function yesOrNoWarningPopup(text, cb) {
    $('body').append('\
<div class="modal" id="yesOrNoPopup";>\
  <div class="modal-dialog modal-dialog-centered modal-sm" role="document">\
    <div class="modal-content bg-info">\
      <div class="modal-header">\
        <h5 class="modal-title w-100 fas fa-bell" style="color:red"\>&nbsp ყურადღება!</h5>\
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">\
          <span aria-hidden="true">&times;</span>\
        </button>\
      </div>\
      <div class="modal-body"style="color:red">\
        <p>'+text+' </p>\
      </div>\
      <div class="modal-footer">\
        <button type="button" id="deletionApproved" class="btn btn-primary">კი</button>\
        <button type="button" id="closeButton" class="btn btn-secondary" data-dismiss="modal">არა</button>\
      </div>\
    </div>\
  </div>\
</div>\
')
$(".modal").draggable({ handle: ".modal-header" });
$('#yesOrNoPopup').modal({'backdrop' : 'static'});

$('#yesOrNoPopup #deletionApproved').on('click', function () {
  cb(true);
})
    $('#yesOrNoPopup #closeButton').on('click', function () {
      $('#yesOrNoPopup').modal('hide');
    })
  
    $('#yesOrNoPopup').on('hidden.bs.modal', function () {
      $('#yesOrNoPopup').remove();
    });

}
  function errorPopup(text) {
  $('body').append(' \
  <div class="modal" id="errorPopup">\
  <div class="modal-dialog modal-sm" role="document">\
    <div class="modal-content bg-light">\
      <div class="modal-header">\
        <h5 class="modal-title w-100 text-center fas fa-exclamation-triangle" style="color:red"\>შეცდომა!</h5>\
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">\
          <span aria-hidden="true">&times;</span>\
        </button>\
      </div>\
      <div class="modal-body w-100 text-center" >\
        <p>'+text+'</p>\
      </div>\
      <div class="modal-footer">\
        <button type="button" class="btn btn-primary"  id="closeButton" data-dismiss="modal">Close</button>\
      </div>\
    </div>\
  </div>\
</div>')
$(".modal").draggable({ handle: ".modal-header" });
$('#errorPopup').modal({'backdrop' : 'static'});
  
    $('#errorPopup #closeButton').on('click', function (evt) {
      $('#errorPopup').modal('hide');
    })
  
    $('#errorPopup').on('hidden.bs.modal', function () {
      $('#errorPopup').remove();
    });
  
  }

  function warningPopup(text) {
    $('body').append(' \
    <div class="modal" id="warningPopup">\
    <div class="modal-dialog modal-sm" role="document">\
      <div class="modal-content bg-light">\
        <div class="modal-header">\
          <h5 class="modal-title w-100 text-center far fa-bell" style="color:blue"\>&nbspგაფრთხილება!</h5>\
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">\
            <span aria-hidden="true">&times;</span>\
          </button>\
        </div>\
        <div class="modal-body w-100 text-center" >\
          <p>'+text+'</p>\
        </div>\
        <div class="modal-footer">\
          <button type="button" class="btn btn-primary"  id="closeButton" data-dismiss="modal">Close</button>\
        </div>\
      </div>\
    </div>\
  </div>')
  $(".modal").draggable({ handle: ".modal-header" });
  $('#warningPopup').modal({'backdrop' : 'static'});
    
      $('#warningPopup #closeButton').on('click', function (evt) {
        $('#warningPopup').modal('hide');
      })
    
      $('#warningPopup').on('hidden.bs.modal', function () {
        $('#warningPopup').remove();
      });
    
    }
  function manageUserPopUp(input){
    var imageSrc = input.contact.contactImage &&  input.contact.contactImage != "none" ? "../../"+ input.contact.contactImage :  "../../"+ "flamingo2.png"
    var favourite = input.contact.favourite == 'on' ? "Yes" : "No"
    var phoneNumbers = input.contact.phoneNumber ? input.contact.phoneNumber.length > 0 ? input.contact.phoneNumber.join() : "" : ""
    $('body').append(' \
    <div class="modal" id="manageUserPopUp">\
    <div class="modal-dialog modal-lg" role="document">\
      <div id ="modal-content" class="modal-content bg-info mb-3">\
        <div class="modal-header">\
          <h5 class="modal-title w-100 text-center fas fa-pen-square" style="color:blue"\>&nbspდეტალების ჩასწორება.</h5>\
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">\
            <span aria-hidden="true">&times;</span>\
          </button>\
        </div>\
        <form id="edit-contacts-form">\
        <div class="modal-body" style="overflow-y: auto" >\
        <table align="center">\
        <tr><td><div class="avatar"> <div class="avatar-container avatar-size" id= "avatarContainerForEdit" data-id ="'+input.contact._id +'" > <img id = "avatarImageForEdit" src="'+imageSrc+'" class="avatar-image" /> <div class="edit-container"> <div>📷</div> </div> </div> </div>\</td><td><input id="profile-image-upload-edit" name="profile-image-edit" class="hidden" type="file">\
        <tr><td><font size="2">სახელი:</font></td><td><textarea form="form-group" style="resize:none" rows="1" class="form-control" id="firstName-edit"></textarea>\
        <tr><td><font size="2">გვარი:</font></td><td><textarea form="form-group" style="resize:none" rows="1" class="form-control" id="lastName-edit" placeholder ="გვარი"></textarea> \
        <tr><td><font size="2">ჯგუფები:</font></td><td> <select id= "select-edit" class="form-control" name = "groups" class="selectpicker"  title="აირჩიეთ ჯგუფები" data-width="100%" id = "groups"  multiple="multiple"></select>\
        <tr><td><font size="2">შენიშვნა:</font></td><td><textarea form="form-group" style="resize:none" rows="3" class="form-control" id="remark-edit" placeholder ="შენიშვნა"></textarea> \
        <tr><td><font size="2">ფავორიტი:</font></td><td><select id="favourite-edit" class="form-control">\<option value="Yes">კი</option>\<option value="No">არა</option>\</select>\
        <tr><td><font size="2" class= "p-3 mb-2 bg-danger text-white"> *გაფრთხილება! </font></td><td><textarea disabled style="background-color: red;color:#fff;" form="form-group" style="resize:none" rows="4" class="form-control" id="warning" >შეგიძლიათ მაქსიმუმ 5 ნომრის დამატება. ნომრები გამოყოფილი უნდა იყოს მძიმით.</textarea>\
        <tr><td><font size="2">მობილურის ნომერი:</font></td><td><textarea form="form-group" style="resize:none" rows="3" class="form-control" id="PhoneNumber-group-edit"></textarea>\
        </table>\
        </div>\
        <div class="modal-footer" id= "userPopUpFooter">\
          <button type="button" id="saveEditedValues" class="btn btn-primary">Save changes</button>\
          <button type="button" id= "closeButton" class="btn btn-primary" data-dismiss="modal">Close</button>\
        </div>\
        </form>\
      </div>\
    </div>\
  </div>')
  
  $('#firstName-edit').val(input.contact.firstName);
  $('#lastName-edit').val( input.contact.lastName);
  $('#remark-edit').val(input.contact.remark);
  $('#PhoneNumber-group-edit').val(phoneNumbers);
  $('#favourite-edit').val(favourite);
  $('#select-edit').selectpicker();
  dropDownOptions.forEach(function(item, index){
    var isSelected = input.contact.groups.indexOf(item) > -1 ? true : false
    if(isSelected){
      $("#select-edit").append('<option value="'+ index+1 +'" selected="">'+dropDownOptions[index]+'</option>');
    }
    else{
      $("#select-edit").append('<option value="'+index+1+'">'+dropDownOptions[index]+'</option>');
    }
  })
   $("#select-edit").selectpicker("refresh");
   
  $(".modal").draggable({ handle: ".modal-header" });
  $('#manageUserPopUp').modal({'backdrop' : 'static'});
  $('#PhoneNumber-group-edit').val(phoneNumbers);
  $('#favourite-edit').val(favourite);
  $('#manageUserPopUp #avatarContainerForEdit').on('click', function(){
    $("#profile-image-upload-edit").on('change', function () {
      readURL(this, "avatarImageForEdit");
  });
    $("#profile-image-upload-edit").click();

  })
     $('#manageUserPopUp #saveEditedValues').on('click', function () {
      var data = {contactId: input.contact._id}
      
      if($('#firstName-edit').val() != input.contact.firstName) data.firstName = $('#firstName-edit').val() 
      if($('#lastName-edit').val() != input.contact.lastName) data.lastName = $('#lastName-edit').val()
      if($('#remark-edit').val() != input.contact.remark) data.remark = $('#remark-edit').val()
      // if($('#PhoneNumber-group-edit').val() == input.contact.lastName) data.lastName == $('#lastName-edit').val()
      if($('#favourite-edit').val() != input.contact.lastName) data.favourite == $('#favourite-edit').val()
      
      var form_data = new FormData();
      for ( var key in data ) {
          form_data.append(key, data[key]);
      }
      // console.log($('input[type=file]')[0].fildes[0])
      if($('#profile-image-upload-edit')[0].files[0]) form_data.append('profile-image-edit', $('#profile-image-upload-edit')[0].files[0]);
      sendPatchRequest(form_data, input.contact._id)
    })
    $('#manageUserPopUp #closeButton').on('click', function (evt) {
      $('#manageUserPopUp').modal('hide');
    })
  
    $('#manageUserPopUp').on('hidden.bs.modal', function () {
      $('#manageUserPopUp').remove();
    });
  };
  function additionalPhoneNumberField(){
    if(counter >= limit ){
      warningPopup("დაშვებულია მაქსიმუმ 5 ნომრის დამატება")
    }
    else{
    $('#phoneNumbersForm').append('\
    <div class="input-group" id="inputGroup">\
        <input type="text" name="phoneNumber" id="mobileNumber'+ ++counter +'" placeholder = "მობილურის ნომერი №'+ counter +'" class="form-control">\
        <span class="input-group-btn">\
            <button class="btn  btn-danger" id="removeRow" type="button"><i class="fas fa-minus"></i>&nbsp ნომრის წაშლა.</button>\
        </span>\
    </div>'
    )}
  }
    
    $(document).on('click', '#removeRow', function (e) {
      console.log(e)
      e.preventDefault()
      counter--;
      var removedElementsId= $(this).parent().parent().children()[0].id
      $(this).parent().parent().remove();
      var numeralOfRemovedElement = parseInt(removedElementsId.match(/\d+/)[0])
      // 
      while(document.getElementById("mobileNumber"+ (++numeralOfRemovedElement))){
        $('#mobileNumber'+numeralOfRemovedElement ).attr('placeholder', 'მობილურის ნომერი №'+ (numeralOfRemovedElement-1))
        $('#mobileNumber'+numeralOfRemovedElement ).attr('id', 'mobileNumber'+ (numeralOfRemovedElement-1))
        
      }
      // if(numeralOfRemovedElement > 1 ){
      //   for (;numeralOfRemovedElement < 5; numeralOfRemovedElement++){
      //     $('#inputGroup'+numeralOfRemovedElement ).attr('placeholder', 'მობილურის ნომერი №'+ numeralOfRemovedElement)
      //   }
      // }
      // console.log($(this).parent().parent())
  });
    // $('#inputGroup').remove()

