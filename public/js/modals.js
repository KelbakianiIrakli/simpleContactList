var counter = 1
const limit = 5 
// var s = document.createElement("script");
// s.type = "text/javascript";
// s.src = "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.13.1/js/bootstrap-select.min.js";
$(".js-example-tokenizer").select2({
  tags: true,
  tokenSeparators: [',', ' ']
})
function yesOrNoWarningPopup(text, cb) {
    $('body').append(' \
    <div class="modal fade" id="yesOrNoWarningPopup" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" autofocus> \
    <div class="modal-dialog" role="document"> \
      <div class="modal-content"> \
        <div class="modal-header modal-header-warning"> \
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button> \
          <h5 class="modal-title" id="myModalLabel"><b>Warning</b></h5> \
        </div> \
        <div class="modal-body"> \
          <p class="text-center"> \
        ' + text + '\
          </p> \
        </div> \
        <div class="modal-footer"> \
        <button type="button" class="btn btn-default" id="yesButton">Yes</button> \
        <button type="button" class="btn btn-default" id="noButton">No</button> \
        </div> \
      </div> \
    </div> \
    </div> \
  ')}
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
  function manageUserPopUp(text){
    $('body').append(' \
    <div class="modal" id="manageUserPopUp">\
    <div class="modal-dialog modal-xl" role="document">\
      <div class="modal-content bg-light">\
        <div class="modal-header">\
          <h5 class="modal-title w-100 text-center fas fa-pen-square" style="color:blue"\>&nbspდეტალების ჩასწორება.</h5>\
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">\
            <span aria-hidden="true">&times;</span>\
          </button>\
        </div>\
        <div class="modal-body" style="overflow-y: auto" >\
        <table>\
        <tr><td><font size="2">სახელი:</font></td><td><textarea form="form-group" style="resize:none" rows="1" class="form-control" id="firstName-edit" placeholder ="სახელი"></textarea>\
        <tr><td><font size="2">გვარი:</font></td><td><textarea form="form-group" style="resize:none" rows="1" class="form-control" id="lastName-edit" placeholder ="გვარი"></textarea>\
        <tr><td><font size="2">მობილურის ნომერი:</font></td><td><textarea form="form-group" style="resize:none" rows="2" class="form-control" id="group-edit" placeholder ="Comment"></textarea>\
        <tr><td><font size="2">ჯგუფები:</font></td><td> <select id= "select" class="form-control" name = "groups" class="selectpicker" title="აირჩიეთ ჯგუფები" data-width="100%" id = "groups" multiple="multiple"> <option>ოჯახი</option> <option>თანამშრომლები</option> <option>ფეხბურთი</option> <option>კალათბურთი</option> <option>ჭადრაკი</option> </select>\
        <tr><td><font size="2">Onboarding needed:</font></td><td><select id="onboard" class="form-control" >\<option disabled="disabled" selected="selected" value="">Onboarding needed *</option>\<option value="Yes">Yes</option>\<option value="No">No</option>\</select>\
        <tr><td><font size="2">Workchange:</font></td><td><select id="workchange" class="form-control" >\<option disabled="disabled" selected="selected" value="">Is workchange below 50% (Germany 25%) ? *</option>\<option value="Yes">Yes</option>\<option value="No">No</option>\</select>\
        <tr><td><font size="2">Comment:</font></td><td><textarea form="form-group" style="resize:none" rows="2" class="form-control" id="comment" placeholder ="Comment"></textarea>\
        </table>\
        </div>\
        <div class="modal-footer">\
          <button type="button" class="btn btn-primary">Save changes</button>\
          <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>\
        </div>\
      </div>\
    </div>\
  </div>')
  $('.dropdown-menu inner show').click(function(){
    $('#groups').text("hi");
  });
  $(".modal").draggable({ handle: ".modal-header" });
  $('#manageUserPopUp').modal({'backdrop' : 'static'});
    $('#manageUserPopUp #closeButton').on('click', function (evt) {
      $('#manageUserPopUp').modal('hide');
    })
  
    $('#manageUserPopUp').on('hidden.bs.modal', function () {
      $('#manageUserPopUp').remove();
    });
  }
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

