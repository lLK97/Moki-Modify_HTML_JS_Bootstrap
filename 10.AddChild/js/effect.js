
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

  
});