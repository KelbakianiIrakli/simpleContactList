var counterForNumbers = 1
const limitForNumbers = 5
var counterForGroups = 1
var limitForGroups = 20

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
        <p>'+ text + ' </p>\
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
  $('#yesOrNoPopup').modal({ 'backdrop': 'static' });

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
        <p>'+ text + '</p>\
      </div>\
      <div class="modal-footer">\
        <button type="button" class="btn btn-primary"  id="closeButton" data-dismiss="modal">Close</button>\
      </div>\
    </div>\
  </div>\
</div>')
  $(".modal").draggable({ handle: ".modal-header" });
  $('#errorPopup').modal({ 'backdrop': 'static' });

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
          <p>'+ text + '</p>\
        </div>\
        <div class="modal-footer">\
          <button type="button" class="btn btn-primary"  id="closeButton" data-dismiss="modal">Close</button>\
        </div>\
      </div>\
    </div>\
  </div>')
  $(".modal").draggable({ handle: ".modal-header" });
  $('#warningPopup').modal({ 'backdrop': 'static' });

  $('#warningPopup #closeButton').on('click', function (evt) {
    $('#warningPopup').modal('hide');
  })

  $('#warningPopup').on('hidden.bs.modal', function () {
    $('#warningPopup').remove();
  });

}
function manageUserPopUp(input) {
  var imageSrc = input.contact.contactImage && input.contact.contactImage != "none" ? "../../" + input.contact.contactImage : "../../" + "avatar.png"
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
        <table align="center" >\
        <tr><td><div class="avatar"> <div class="avatar-container avatar-size" id= "avatarContainerForEdit" data-id ="'+ input.contact._id + '" > <img id = "avatarImageForEdit" src="' + imageSrc + '" title="სურათი მხოლოდ jpeg ან png ფორმატში." \
        class="avatar-image" /> <div class="edit-container"> <div>📷</div> </div> </div> </div>\</td><td><input id="profile-image-upload-edit" name="profile-image-edit" class="hidden" type="file">\
        <span class="edit-red-color" id="warning-message">ყურადღებით ჩაასწორეთ დეტალები, გაეცანით გაფრთხილებას შესაბამისი ველისთვის.</span>\
        <tr><td><font size="2">სახელი:</font></td><td><textarea form="form-group" style="resize:none" rows="1" class="form-control" id="firstName-edit" placeholder ="სახელი"></textarea>\
        <tr><td><font size="2">გვარი:</font></td><td><textarea form="form-group" style="resize:none" rows="1" class="form-control" id="lastName-edit" placeholder ="გვარი"></textarea> \
        <tr><td><font size="2">ჯგუფები:</font></td><td> <select id= "select-edit" class="form-control" name = "groups-edit" class="selectpicker"  title="აირჩიეთ ჯგუფები" data-width="100%"  multiple="multiple"></select>\
        <tr><td><font size="2">შენიშვნა:</font></td><td><textarea form="form-group" style="resize:none" rows="3" class="form-control" id="remark-edit" placeholder ="შენიშვნა"></textarea> \
        <tr><td><font size="2">ფავორიტი:</font></td><td><select id="favourite-edit" class="form-control">\<option value="Yes">კი</option>\<option value="No">არა</option>\</select>\
        <tr><td><font size="2" class= "p-3 mb-2 bg-danger text-white"> *გაფრთხილება! </font></td><td><textarea disabled style="background-color: red;color:#fff;" form="form-group" style="resize:none" rows="4" class="form-control" id="warning" >შეგიძლიათ მაქსიმუმ 5 ნომრის დამატება. ნომრები გამოყოფილი უნდა იყოს მძიმით. ნომერი შეიცავს მხოლოდ ციფრებს და სურვილისამებრ შეიძლება დასაწყისში ჰქონდეს სიმბოლო +</textarea>\
        <tr><td><font size="2">მობილურის ნომერი:</font></td><td><textarea form="form-group" style="resize:none" rows="3" class="form-control"  id="PhoneNumber-group-edit"></textarea> <span class="edit-red-color" id="textarea_message"></span>\
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
  $('#lastName-edit').val(input.contact.lastName);
  $('#remark-edit').val(input.contact.remark);
  $('#PhoneNumber-group-edit').val(phoneNumbers);
  $('#favourite-edit').val(favourite);
  $('#select-edit').selectpicker();
  var dropDownOptions = Store.getdropDownOptions()
  unionOfTwoArrays = [...new Set([...input.contact.groups, ...dropDownOptions])]
  unionOfTwoArrays.forEach(function (item, index) {
    var isSelected = input.contact.groups.indexOf(item) > -1 ? true : false
    if (isSelected) {
      $("#select-edit").append('<option value="' + index + 1 + '" selected="">' + item + '</option>');
    }
    else {
      $("#select-edit").append('<option value="' + index + 1 + '">' + item + '</option>');
    }
  })
  $("#select-edit").selectpicker("refresh");

  $(".modal").draggable({ handle: ".modal-header" });
  $('#manageUserPopUp').modal({ 'backdrop': 'static' });
  $('#manageUserPopUp #avatarContainerForEdit').on('click', function () {
    $("#profile-image-upload-edit").click();
    $("#profile-image-upload-edit").on('change', function () {
      readURL(this, "avatarImageForEdit");
    });
  })

  $('#PhoneNumber-group-edit').on('keyup', function () {
    var regex = RegExp('^$|^[+-]?[0-9]+(,[+-]?[0-9]+){0,4}$');
    var userInputNumbers = $('#PhoneNumber-group-edit').val().trim()
    var isInputProperlyTyped = regex.test(userInputNumbers);
    if (!isInputProperlyTyped) {
      $('#textarea_message').text('* არასწორად შევსებული ველი. გაითვალისწინეთ გაფრთხილება!');
      $('#saveEditedValues').prop('disabled', true)
    }
    else {
      $('#textarea_message').text('');
      $('#saveEditedValues').prop('disabled', false)
    }
  });

  $('#manageUserPopUp #saveEditedValues').on('click', function () {
    var data = { contactId: input.contact._id }
    var selectedOptions = $.map($("#select-edit option:selected"),
      function (el) {
        return $(el).text()
      })
    var userInputNumbers = $('#PhoneNumber-group-edit').val().trim()
    if (userInputNumbers) {
      var userInputNumbersArray = userInputNumbers.split(',')
      data["phoneNumber[]"] = userInputNumbersArray
    }
    //check if the array gotten from db same selected
    var sameGroupsInBothPlaces = arraysEqual(selectedOptions, input.contact.groups)
    // add values which need to be updated
    if (!sameGroupsInBothPlaces) { data["groups[]"] = selectedOptions }
    if ($('#firstName-edit').val() != input.contact.firstName) data.firstName = $('#firstName-edit').val()
    if ($('#lastName-edit').val() != input.contact.lastName) data.lastName = $('#lastName-edit').val()
    if ($('#remark-edit').val() != input.contact.remark) data.remark = $('#remark-edit').val()
    if ($('#favourite-edit').val() != favourite) $('#favourite-edit').val() == "Yes" ? data.favourite = "on" : data.favourite = ""


    var form_data = new FormData();
    for (var key in data) {
      if (key == 'phoneNumber[]' || key == "groups[]") {
        for (var i = 0; i < data[key].length; i++) {
          form_data.append(key, data[key][i]);
        }
      }
      else {
        form_data.append(key, data[key]);
      }
    }
    if ($('#profile-image-upload-edit')[0].files[0]) form_data.append('profile-image-edit', $('#profile-image-upload-edit')[0].files[0]);

    sendPatchRequest(form_data, input.contact._id)
  })
  $('#manageUserPopUp #closeButton').on('click', function (evt) {
    $('#manageUserPopUp').modal('hide');
  })

  $('#manageUserPopUp').on('hidden.bs.modal', function () {
    $('#manageUserPopUp').remove();
  });
};
function additionalPhoneNumberField() {
  if (counterForNumbers >= limitForNumbers) {
    warningPopup("დაშვებულია მაქსიმუმ 5 ნომრის დამატება")
  }
  else {
    $('#phoneNumbersForm').append('\
    <div class="input-group" id="inputGroup">\
        <input type="text" name="phoneNumber" id="mobileNumber'+ ++counterForNumbers + '" placeholder = "მობილურის ნომერი №' + counterForNumbers + '" oninput=setCustomValidity("") pattern="^$|^[+-]?[0-9]+$" class="form-control">\
        <span class="input-group-btn">\
            <button class="btn  btn-danger" id="removeRow" type="button"><i class="fas fa-minus"></i>&nbsp ნომრის წაშლა.</button>\
        </span>\
    </div>'
    )
  }
}
function additionalGroupsField() {
  if (counterForGroups >= limitForGroups) {
    warningPopup("დაშვებულია მაქსიმუმ 20 ჯგუფის დამატება")
  }
  else {
    $('#group-fields').append('\
    <div class="input-group">\
        <input type="text" name="fieldForgroups" id="fieldForgroups'+ ++counterForGroups + '" placeholder = "ჯგუფი №' + counterForGroups + '" class="form-control">\
        <span class="input-group-btn">\
            <button class="btn  btn-danger" id="removeRow" type="button"><i class="fas fa-minus"></i>&nbsp ჯგუფის წაშლა.</button>\
        </span>\
    </div>'
    )
  }
}


$(document).on('click', '#removeRow', function (e) {
  console.log(e)
  e.preventDefault()
  if (document.documentURI.indexOf('groups.html') > -1) {
    var _id = 'fieldForgroups';
    var _text = 'ჯგუფი №'
    counterForGroups--
  }
  else {
    var _id = 'mobileNumber';
    var _text = 'მობილურის ნომერი №'
    counterForNumbers--
  }

  var removedElementsId = $(this).parent().parent().children()[0].id
  $(this).parent().parent().remove();
  var numeralOfRemovedElement = parseInt(removedElementsId.match(/\d+/)[0])
  // 
  while (document.getElementById(_id + (++numeralOfRemovedElement))) {
    $('#' + _id + numeralOfRemovedElement).attr('placeholder', _text + (numeralOfRemovedElement - 1))
    $('#' + _id + numeralOfRemovedElement).attr('id', _id + (numeralOfRemovedElement - 1))

  }
});

