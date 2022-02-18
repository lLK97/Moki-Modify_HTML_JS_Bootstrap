

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



  ///reverse arrow 
  $(".acc-activities .dropdown .title").click(function () {
    if($('.acc-activities li button').hasClass('btn--reverse')){
      $('.acc-activities li button').removeClass('btn--reverse');
    } else{
      $('.acc-activities li button').addClass('btn--reverse');
    }
  })

  ///Change color when click dashboard
  $(".acc-activities li:not(.dropdown)").click(function () {
    if( $(".acc-activities li").hasClass('active__color') ){
      $(".acc-activities li").removeClass('active__color');
      $(this).addClass('active__color');
    } else if($(".acc-activities li div ul li").hasClass('active__color')){
      $(".acc-activities li div ul li").removeClass('active__color');
      $(this).addClass('active__color');
    } 
    else{
      $(this).addClass('active__color');
    }})
 $(".acc-activities li div ul li").click(function () {
  if($(".acc-activities li div ul li").hasClass('active__color')){
        $(".acc-activities .dropdown div ul li").removeClass('active__color');
        $(this).addClass('active__color');
        
      } else if($(".acc-activities li").hasClass('active__color')) {
        $(".acc-activities li").removeClass('active__color');
        $(this).addClass('active__color');
      }  else{
        $(this).addClass('active__color');
      }
    })
/////change color dropdown  
  $('.acc-activities .dropdown div ul li').mouseover(function () {
      $(".acc-activities .dropdown .title").css('background-color','white');
  })
  $('.acc-activities .dropdown .title').mouseover(function () {
    $(".acc-activities .dropdown .title").css('background-color','#f4f5f7');
})
$('.acc-activities .dropdown .title').mouseout(function () {
  $(".acc-activities .dropdown .title").css('background-color','white');
})

});