$(document).ready(function(){
$('#name').bind('change keyup',function () {
  if( $('.years .scrollableList .selectedOption').text() !== '' ){
    $('.btn-primary').css('background','#2aabcb');
}
if ($('#name').val() == ''){
  $('.btn-primary').css('background','#94d5e5');
 }
})
$('.years .scrollableList .selectedOption').bind('DOMSubtreeModified', function () {
         if($('#name').val() !== ''){
    $('.btn-primary').css('background','#2aabcb');
         } 
  });

//////page
var path=window.location.href.split('?').pop();
var accountNoti1= '<div class="btn-switch">'+'<div class="btn-switch-text">'
    +'<p class="bold big">Ẩn Mokinet trên thiết bị này</p>'
    +'<p class="medium small">Ẩn ứng dụng Mokinet trên thiết bị này để con bạn không thể nhìn thấy chúng</p></div>'
+'<div class="btn-switch-button">'
    +'<label class="switch">'
+'<input type="checkbox" checked>'
+'<span class="slider round"></span>'
+'</label></div></div>';
var accountNoti2= '<div class="btn-switch"><div class="btn-switch-text">'
    +'<p class="bold big">Bảo vệ cấu hình hệ thống Android</p>'
    +'<p class="medium small">Yêu cầu mật khẩu Mokinet để truy cập cấu hình hệ thống Android</p>'
+'</div><div class="btn-switch-button"><label class="switch"><input type="checkbox">'
+'<span class="slider round"></span></label></div></div><div class="btn-switch"><div class="btn-switch-text">'
    +'<p class="bold big">Bảo vệ cấu hình Mokinet</p>'
    +'<p class="medium small">Yêu cầu mật khẩu Mokinet để đăng nhập ứng dụng Mokinet trên thiết bị này</p>'
+'</div><div class="btn-switch-button"><label class="switch"><input type="checkbox" checked>'
+'<span class="slider round"></span></label></div></div>';
var accountNoti3= '<div class="btn-switch">'+'<div class="btn-switch-text">'
+'<p class="bold big">Bật Mokinet VPN</p>'
+'<p class="medium small">Cho phép cha mẹ giám sát hoạt động của con trên internet và ứng dụng</p></div>'
+'<div class="btn-switch-button">'
+'<label class="switch">'
+'<input type="checkbox" checked>'
+'<span class="slider round"></span>'
+'</label></div></div>';
if(path=='Desktop-Windows'){
  $('.Text-Device').html('<a href="./devicesIndex.html" class="backToPrevious col-1"><i class="fas fa-arrow-left"></i></a><div class="col-10">Desktop-Windows</div>');
  $('.editinputdevice').attr('value','Desktop-Windows');
  $('.link-editdevice').attr('href','./editdevices.html?Desktop-Windows');
  $('.nonpro-device').attr('href','./devicesNoAssigned.html?Desktop-Windows');
  $('.account-notification').append(accountNoti1);
} else if(path=='Mobile-Android'){
  $('.Text-Device').html('<a href="./devicesIndex.html" class="backToPrevious col-1"><i class="fas fa-arrow-left"></i></a><div class="col-10">Mobile-Android</div>');
  $('.editinputdevice').attr('value','Mobile-Android');
  $('.link-editdevice').attr('href','./editdevices.html?Mobile-Android');
  $('.nonpro-device').attr('href','./devicesNoAssigned.html?Mobile-Android');
  $('.account-notification').append(accountNoti2);
} else if(path=='Mobile-iOS-iPhone'){
  $('.Text-Device').html("<a href='./devicesIndex.html' class='backToPrevious col-1'><i class='fas fa-arrow-left'></i></a><div class='col-10'>Mobile-iOS-iPhone</div>");
  $('.editinputdevice').attr('value',"Mobile-iOS-iPhone");
  $('.link-editdevice').attr('href',"./editdevices.html?Mobile-iOS-iPhone");
  $('.nonpro-device').attr('href','./devicesNoAssigned.html?Mobile-iOS-iPhone');
  $('.account-notification').append(accountNoti3);
}
else if(path=='Desktop-MacOS'){
  $('.Text-Device').html('<a href="./devicesIndex.html" class="backToPrevious col-1"><i class="fas fa-arrow-left"></i></a><div class="col-10">Desktop-MacOS</div>');
  $('.editinputdevice').attr('value',"Desktop-MacOS");
  $('.link-editdevice').attr('href',"./editdevices.html?Desktop-MacOS");
  $('.nonpro-device').attr('href','./devicesNoAssigned.html?Desktop-MacOS');
  $('.account-notification').append(accountNoti1);
}


///Selected

$('.scrollableList ul li').click(function () {
  if($('.scrollableList ul li').hasClass('SelectBold')){
    $('.scrollableList ul li').removeClass('SelectBold');
  }
  $('.scrollableList ul li:first-child').css('font-weight','500');

  $(this).addClass('SelectBold');
})


/////Show password
$('.eyepassword').click(function () {
  var text= $('.acc-password').val();
  var pass='*********';
  if($('.text-password div').hasClass('showpass')){
    $('.text-password div').html(pass);
    $('.text-password div').removeClass('showpass');
  }else{
    $('.text-password div').addClass('showpass');
    $('.text-password div').html(text);
  }
})

$('.showHidepass').click(function () {
  if( $('.editpass').attr('type') === 'password'){
    $('.editpass').attr('type','text');
  } else{
    $('.editpass').attr('type','password');
  }
})

});