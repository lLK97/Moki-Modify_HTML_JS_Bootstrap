$(document).ready(function () {
    $(document).ready(function () {
        //Variable
        const ColorWhite = 'white';
        const DropDashBoard_Ti = '.acc-activities .dropdown .title';
        const DropDashBoard_Ele = '.acc-activities li div ul li';
        const DashBoard_Ele = '.acc-activities li';
        const allow = 'allow';
        const wanring = 'warning';
        const block = 'block'; 
        const ignore = 'ignore';
        const icon_allow='./images/Icon_Accept.png';
        const icon_alert = './images/Icon_Alert.png';
        const icon_block = './images/Icon_Block.png';
        const icon_delete = './images/Delete.png';
        const dots = './images/dots.png';
        const TextItemFilter  = [
            [icon_allow,'Educational'],
            [icon_allow,'Government'],
            [icon_allow,'Entertainment'],
            [icon_allow,'Search Portals'],
            [icon_allow,'News'],
            [icon_allow,'Sports'],
            [icon_allow,'Business'],
            [icon_allow,'Health'],
            [icon_allow,'Technology'],
            [icon_allow,'Games'],
            [icon_allow,'Travel'],
            [icon_allow,'Religion'],
            [icon_allow,'Shopping'],
            [icon_allow,'Employment'],
            [icon_allow,'Webmail'],
            [icon_allow,'Forums'],
            [icon_allow,'Social Network'],
            [icon_allow,'Chat'],
            [icon_allow,'File Sharing'],
            [icon_block,'Gambling'],
            [icon_block,'Proxies/Loopholes'],
            [icon_block,'Violence'],
            [icon_block,'Weapons'],
            [icon_block,'Profanity'],
            [icon_block,'Mature Content'],
            [icon_block,'Pornography'],
            [icon_block,'Alcohol'],
            [icon_block,'Drugs'],
            [icon_block,'Tobacco']
        ];
            const CountItemFilter= TextItemFilter.length;
        //Variable
        
        // Function
        function  Show_Add_Website_item(textWeb, imgItemWeb) {
            var status;
            if(imgItemWeb==icon_allow){
                status=allow;
            } else if(imgItemWeb==icon_block){
                status=block;
            } else if(imgItemWeb==icon_alert){
                status=wanring;
            }else if(imgItemWeb='https://emojigraph.org/media/openmoji/cross-mark_274c.png'){
                status = ignore;
            }
            $('.Item-WebNone').append('<div class="row Item-Filter" data-title="'+textWeb+'">'+
            '<div class="col-1 img">'+
               '<img src="'+imgItemWeb+'" data-title='+textWeb+' alt=""></div>'+
            '<div class="text-filter col-5">'+textWeb+'</div>'+
            '<div class="Set-status col-4"><img src="'+dots+'" alt="" class="dots" data-title="'+textWeb+'" data-status="'+status+'" ></div></div>');
        }
        function Add_Website_item(textWeb,WebStatus) {
            var imgItemWeb;
                $('.Tab-item').removeClass('Tab-active');
                $('.Tab-item:nth-child(2)').addClass('Tab-active');
                $('.Categories').css('display','none');
                $('.AddWeb').css('display','block');
                $('.Item-WebNone').css('opacity','1');
                $('.button').html('Thêm Websites');
                if($('.Item-WebNone').html().replace(/\s/g, '') == 'Chưacótrangwebnàođượcthêmvào'){
                    $('.Item-WebNone').html('');
                }
                console.log($('.Item-WebNone').html());
                $('.Item-WebNone').css('line-height','1.1');
                if(WebStatus=='Allow'){
                    imgItemWeb=icon_allow;
                } else if(WebStatus=='Alert'){
                    imgItemWeb=icon_alert;
                } else if(WebStatus=='Block'){
                    imgItemWeb=icon_block;
                } 
                Show_Add_Website_item(textWeb, imgItemWeb);
            }
        

        function Active_Arrow_Dashboard() {
            if ($(DashBoard_Ele + 'button').hasClass('btn--reverse')) {
                $(DashBoard_Ele + 'button').removeClass('btn--reverse');
            } else {
                $(DashBoard_Ele + 'button').addClass('btn--reverse');
            }
        }

        function Active_ElementDashboard() {
            if ($(DashBoard_Ele).hasClass(AcColor)) {
                $(DashBoard_Ele).removeClass(AcColor);
                $(this).addClass(AcColor);
            } else if ($(DropDashBoard_Ele).hasClass(AcColor)) {
                $(DropDashBoard_Ele).removeClass(AcColor);
                $(this).addClass(AcColor);
            } else {
                $(this).addClass(AcColor);
            }
        }

        function Active_ArrowInfoAccount() {
            if ($('.dropdown-menu').css('display') == 'block') {
                $('.bt-arrow').css('transform', 'rotate(180deg)');
            } else {
                $('.bt-arrow').css('transform', 'rotate(0deg)');
            }
        }

        function Hide_Button() {
            $('.setting, .config-close').removeClass('acti');
            $('.main, .headerContent').css({
                'filter': '',
                'pointer-events': ''
            });
            $('.div-sett, .div-phone').css('visibility', 'hidden');
            $('.config-close img').attr('src', './images/config-clip.png');
        }

        function Show_Button() {
            $('.main, .headerContent').css({
                'filter': 'brightness(50%)',
                'pointer-events': 'none'
            });
            $('.config-close').addClass('acti');
            $('.div-sett, .div-phone').css('visibility', 'visible');
            $('.config-close img').attr('src', './images/close.png');
        }

        function Show_SetRule() {
            $('.setting').addClass('acti');
            $('.SetRule').show();
        }

        function Hide_SetRule() {
            $('.SetRule').hide();
            Hide_Button();
            Active_ArrowInfoAccount();
        }

        function Config_Button() {
            if (!$('.config-close').hasClass('acti')) {
                Show_Button();
            } else {
                Hide_Button();
                Active_ArrowInfoAccount();
            }
        }
      
        function HideDashboard(e) {
            if (!$('.dashboard-content').is(e.target) &&
                ($('.dashboard-content').has(e.target).length === 0) &&
                !$('.headerContent').is(e.target)) {
                if ($('.Time-box').css('display') != 'block') {
                    $('.dashboard-content').removeClass('ac-dashboard');
                    $('.icon-icon').css('display', '');
                    $('.content-TimeLimit').css('filter', '');
                    $('.content-TimeLimit').css('pointer-events', '');
                }
            }
        }
        function Active1HideDashboard(e) {
            if (!$('.dashboard-content').is(e.target) &&
                ($('.dashboard-content').has(e.target).length === 0) &&
                !$('.headerContent').is(e.target)) {
            
                    $('.dashboard-content').removeClass('ac-dashboard');
                    $('.icon-icon').css('display', '');
                    $('.content-TimeLimit').css('filter', '');
                    $('.content-TimeLimit').css('pointer-events', '');

            }
        }
        function ActiveHideDashboard() {
            if( $('.dashboard-content').hasClass('ac-dashboard')){
                $('.icon-icon').css('display', 'none');
                $('.content-TimeLimit').css('filter', 'blur(1px)');
                $('.content-TimeLimit').css('pointer-events', 'none');
            }
           
        }
        function ShowDashboard() {
            $('.dashboard-content').addClass('ac-dashboard');
            $('.icon-icon').css('display', 'none');
            $('.content-TimeLimit').css('filter', 'blur(1px)');
            $('.content-TimeLimit').css('pointer-events', 'none');
        }

        function HideSetting() {
            $('.icon-icon').css('display', '');
            $('.Time-box').css('display', 'none');
        }

        function ShowSetting() {
            $('.icon-icon').css('display', 'none');
            $('.Time-box').css('display', 'block');
        }

 
        function ShowDashBoard() {
            $('.dashboard-content').addClass('ac-dashboard');
            $('.icon-icon').css('display', 'none');
            $('.content-TimeLimit').css('filter', 'blur(1px)');
            $('.content-TimeLimit').css('pointer-events', 'none');
        }

        function ShowSetting() {
            $('.icon-icon').css('display', 'none');
            $('.Time-box').css('display', 'block');
        }

        function HideArrow() {
            $('.icon-icon').css('display', '');
            $('.Time-box').css('display', 'none');
        }
        function ItemFilter(img, title, status) {
            $('.Categories').append('<div class="row Item-Filter">'+
            '<div class="col-1 img">'+
               '<img src="'+img+'" data-title='+title+' alt=""></div>'+
            '<div class="text-filter col-5">'+title+'</div>'+
            '<div class="Set-status col-4"><img src="'+dots+'" alt="" class="dots" data-title="'+title+'"></div></div>');
        }
        function AddItemFilter(img, title) {
            if (img==icon_allow){
                $('.Categories').append(ItemFilter(img, title, allow));
        } else if(img==icon_alert){
            $('.Categories').append(ItemFilter(img, title, wanring));
        } else if(img==icon_block){
            $('.Categories').append(ItemFilter(img, title, block));
        }
        }
  
        function DisableRestrictBoard(){
            $('.description').css({'opacity':'0.5','pointer-events':'none'});
            $('.Item-Filter').css({'opacity':'0.5','pointer-events':'none'});
        }
        function EnableRestrictBoard(){
            $('.description').css({'opacity':'1','pointer-events':''});
            $('.Item-Filter').css({'opacity':'1','pointer-events':''});
        }
        function SetDistantFilter() {
          
            var widthsrceen = $(window).width();
            var heightScreenMobile = $(window).height()-2*$('.headerContent').height();
            var heightScreen = $(window).height()-$('.headerContent').height();
            if(widthsrceen==768 && $(window).height()==1024){
                $('.content-TimeLimit').css('height',heightScreenMobile-280); 
            }
    else if(widthsrceen==375 && $(window).height()==812){
                    $('.content-TimeLimit').css('height',heightScreenMobile-50); 
                }
            else if(widthsrceen<830 && widthsrceen>667 && $('.Tab-active').html().replace(/\s/g, '')=='Websites'){
                if($('.AddWeb-content').css('display')=='none'){
                    $('.content-TimeLimit').css('height','400px'); 
                }else if($('.AddWeb-content').css('display')=='block'){
                    $('.content-TimeLimit').css('height',heightScreenMobile); 
                }
            } else if(widthsrceen<830 && widthsrceen>667){
                $('.content-TimeLimit').css('height',heightScreenMobile); 
            }
            else if(widthsrceen<667 && $('.Tab-active').html().replace(/\s/g, '')=='Websites'){
                if($('.AddWeb-content').css('display')=='none'){
                $('.content-TimeLimit').css('height','415px'); 
            }else if($('.AddWeb-content').css('display')=='block'){
                $('.content-TimeLimit').css('height',heightScreenMobile); 
            }
            }
            else if(widthsrceen<667){
                $('.content-TimeLimit').css('height',heightScreenMobile); 
            }
            else if(widthsrceen>1220){
               if($('.Tab-active').html().replace(/\s/g, '')=='Websites'){
           
                $('.content-TimeLimit').css('height','600px'); 
               
               }else{
                $('.content-TimeLimit').css('height',heightScreen); 
               }
                   
              
            
        }
        }
      function ShowContentWebTab(text) {
        if(text=='Websites'){
            $('.Categories').css('display','none');
            $('.AddWeb').css('display','block');
            $('.button').html('Thêm Websites');
       
        }
        else{
            $('.Categories').css('display','');
            $('.AddWeb').css('display','none');
            $('.button').html('Chọn tất cả');
        }
      }
      function HideStatusDashBoard() {
        if($('.button').html().replace(/\s/g, '')=='Chọntấtcả'){
        $('.Board-Status').css('display','none');
    } else if($('.button').html().replace(/\s/g, '')=='ThêmWebsites'){
        $('.Board-Status--UpdateAddWeb').css('display','none');
    }
        $('.dots').removeClass('dot-show');
      }
      function HideBoardStatusSelectAll() {
        $('.Board-Status--SelectAll').css('display','none');
        $('.Board-Status--SelectAll').removeClass('active');
      }
      function ActiveBoardStatusSelectAll() {
          var pos =$('.button').position();
         
          $('.Board-Status--SelectAll').css('display','block');
          $('.Board-Status--SelectAll').css('top',pos.top+$(window).height()/1.30);
          $('.Board-Status--SelectAll').css('left',pos.left-318);
          $('.Board-Status--SelectAll').addClass('active');
        
      }
      function CheckdDataTextInput() {
        var CheckText = $('.textAddWeb input').val();
        var text = CheckText.includes('.');
        if(CheckText==''){
            $('.textAddWeb input').css('border-color','#c84851');
            $('.label-noti').css('color','#c84851');
            $('.label-noti').html('Yêu cầu nhập URL là bắt buộc');
        } else if(text==true && CheckText!=''){
            $('.textAddWeb input').css('border-color','#2aabcb');
            $('.label-noti').html('');
        } else if(text==false && CheckText!=''){
            $('.textAddWeb input').css('border-color','#c84851');
            $('.label-noti').css('color','#c84851');
            $('.label-noti').html('Bạn phải thêm tên trang web hợp lệ');
        }
      }
      function ShowAddWebItem() {
        if($('.button').html()=='Thêm Websites'){
            $('.Time-box').css('visibility','hidden');
            $('.Filter-title').css('display','none');
            $('.Filter-limit').css('display','none');
            $('.AddWeb-title').css('display','block');
            $('.AddWeb-content').css('display','block');
  
        } 
      }
      function HideAddWebItem() {
            $('.Filter-title').css('display','block');
            $('.Filter-limit').css('display','block');
            $('.Time-box').css('visibility','visible');
            $('.AddWeb-title').css('display','none');
            $('.AddWeb-content').css('display','none');
   
      }
      function ShowSettingMaxWidth(){
        if($(window).width() > 830){
            if($('.AddWeb-content').css('display')=='none'){
                $('.Time-box').css('visibility','visible');
                $('.Time-box').css('display','block');
            } else{

            }
            $('.content-TimeLimit').css('filter', '');
            $('.content-TimeLimit').css('pointer-events', '');
        }
        if($(window).width() < 830){
            ActiveHideDashboard();
            $(document).mouseup(e => {
              Active1HideDashboard(e);
            })
        }
       
    }
 function GetPositionBoard() {
     if($('.dots').hasClass('dot-show')){
     var pos1= $('.dot-show').position();
     $('.Board-Status').css('top',pos1.top+30);
     $('.Board-Status').css('left',pos1.left-230);
     $('.Board-Status--UpdateAddWeb').css('top',pos1.top+30);
     $('.Board-Status--UpdateAddWeb').css('left',pos1.left-230);

     }
         if($('.Board-Status--SelectAll').hasClass('active')){
             var width = $(window).width();
            $('.Board-Status--SelectAll').css('top','87%');
           if(width<=375){
             $('.Board-Status--SelectAll').css('left','-10px');
           } else if (width>375 && width <= 414){
            $('.Board-Status--SelectAll').css('left','3%');
          } else if (width>=414 && width<580){
            $('.Board-Status--SelectAll').css('left','15%');
          }else if (width>=580 && width<830 ){
            $('.Board-Status--SelectAll').css('left','25%');
          } else if (width>=830 && width<=1220){
            $('.Board-Status--SelectAll').css('left','15%');
          } else if (width>=1220){
            $('.Board-Status--SelectAll').css('left','23%');
          }
 }
}
      //Add
      for(var i=0; i< CountItemFilter;i++){
        AddItemFilter(...TextItemFilter[i]);
      }
      setInterval(ShowSettingMaxWidth);
      setInterval(SetDistantFilter);
      setInterval(GetPositionBoard);

     
    //  console.log(TextItemFilter);

     
      //Add
   
        //Action
        $('.back-filter').click(function () {
            HideAddWebItem();
        })
        $('.bt-AddWeb').click(function () {
        
            CheckdDataTextInput();
            $('.textAddWeb input').bind('change keyup',function () {
                CheckdDataTextInput();
            })
            var text = $('.textAddWeb .text-AddWeb').val();
            var label = $('.label-noti').html();
            var statusWeb =$('.check').attr('data-status'); 
        
            if(!text=='' && label == ''){
            Add_Website_item(text,statusWeb);
            HideAddWebItem();
            }
        })

    
        $('.Board-Status--AddWeb .item').click(function () {
            if($('.Board-Status--AddWeb .item').find('.cricle input').prop('checked')==true){
            $('.Board-Status--AddWeb .item').find('.cricle input').prop('checked', false);
            $('.cricle input').removeClass('check');
            }
            $(this).find('.cricle input').prop('checked', true);
            $(this).find('.cricle input').addClass('check');
        })
        $('.dots').click(function () {
            if(!$('.dots').hasClass('dot-show')){
                var pos;
                $(this).addClass('dot-show');
                title = $(this).attr('data-title'); ///get data-title of Item-FilterDashBoard 
               pos = $(this).position();
                if($('.button').html().replace(/\s/g, '')=='Chọntấtcả'){
                    $('.Board-Status').css('top',pos.top+30);
                    $('.Board-Status').css('left',pos.left-230);
                    $('.Board-Status').css('display','block');
                } else if($('.button').html().replace(/\s/g, '')=='ThêmWebsites'){
                    $('.Board-Status--UpdateAddWeb').css('top',pos.top+30);
                    $('.Board-Status--UpdateAddWeb').css('left',pos.left-230);
                    $('.Board-Status--UpdateAddWeb').css('display','block');
                }
            }  else if($('.dots').hasClass('dot-show')){
                $(this).removeClass('dot-show');
                HideStatusDashBoard();
            }
        });
        $(document).mouseup(function (e) {
           var title;
            if (!$('.Board-Status').is(e.target) &&
                $('.Board-Status').has(e.target).length === 0) {
                    if($('.Board-Status').css('display')=='block'){
                    HideStatusDashBoard();
                }
            }     
            if (!$('.Board-Status--UpdateAddWeb').is(e.target) &&
                $('.Board-Status--UpdateAddWeb').has(e.target).length === 0) {
                      if($('.Board-Status--UpdateAddWeb').css('display')=='block'){
                    HideStatusDashBoard();
                }
            } 
           if (!$('.Board-Status--SelectAll').is(e.target) &&
            $('.Board-Status--SelectAll').has(e.target).length === 0) {
                if($('.Board-Status--SelectAll').css('display')=='block'){
                    HideBoardStatusSelectAll();
                }
            }
            if (!$('.textAddWeb input').is(e.target) &&
            $('.textAddWeb input').has(e.target).length === 0) {
                $('.textAddWeb input').css('border-color','');
                $('.label-noti').html('');
            }
            $('.dots').click(function () {
                if(!$('.dots').hasClass('dot-show')){
                    var pos;
                    $(this).addClass('dot-show');
                    title = $(this).attr('data-title'); ///get data-title of Item-FilterDashBoard 
                   pos = $(this).position();
                    if($('.button').html().replace(/\s/g, '')=='Chọntấtcả'){
                        $('.Board-Status').css('top',pos.top+30);
                        $('.Board-Status').css('left',pos.left-230);
                        $('.Board-Status').css('display','block');
                    } else if($('.button').html().replace(/\s/g, '')=='ThêmWebsites'){
                        $('.Board-Status--UpdateAddWeb').css('top',pos.top+30);
                        $('.Board-Status--UpdateAddWeb').css('left',pos.left-230);
                        $('.Board-Status--UpdateAddWeb').css('display','block');
                    }
                }  else if($('.dots').hasClass('dot-show')){
                    $(this).removeClass('dot-show');
                    HideStatusDashBoard();
                }
            });
            $('.button').click(function () {
                if( !$('.Board-Status--SelectAll').hasClass('active')){
                ActiveBoardStatusSelectAll();
               
             } else if($('.Board-Status--SelectAll').hasClass('active')){
                $('.Board-Status--SelectAll').css('display','');
               
                $('.Board-Status--SelectAll').removeClass('active');
             }
             ShowAddWebItem();
            })
       
               
                $('.Board-Status .item').click(function () {
                    var srcc =$(this).find('.img img').attr('src');
                    $('.Item-Filter .img img[data-title="'+title+'"]').attr('src',srcc);
                    HideStatusDashBoard();
                })
                $('.Board-Status--UpdateAddWeb .item').click(function () {
                    var srcc =$(this).find('.img img').attr('src');
                    if(srcc==icon_delete){
                        $('.Item-Filter[data-title="'+title+'"]').remove();
                        HideStatusDashBoard();
                    }
                    else{
                    $('.Item-Filter .img img[data-title="'+title+'"]').attr('src',srcc);
                    HideStatusDashBoard();
                    }
                })
                $('.Board-Status--SelectAll .item').click(function () {
                    var srcc =$(this).find('.img img').attr('src');
                    var defa = $(this).find('.text-filter').html();
                    $('.Item-Filter .img img').attr('src',srcc);
                    if(defa=='Khôi phục giá trị mặc định'){
                        $('.Item-Filter').remove();
                        for(var i=0; i< 29;i++){
                            AddItemFilter(...TextItemFilter[i]);
                          }
                    }
                    
 
                    HideBoardStatusSelectAll();
        })


            
        });

        $(document).on('click', function (e) {
            if (!$('.config-close, .div-icon').is(e.target) &&
                $('.config-close, .div-icon').has(e.target).length === 0) {
                Hide_SetRule();
            }
           
        });

       
       
        $('.btn-Web').click(function(){
            if($('.btn-Webfilter').hasClass('Enabled')){
                $('.btn-Webfilter').removeClass('Enabled');
                DisableRestrictBoard();
            }
            else{
                $('.btn-Webfilter').addClass('Enabled');
                EnableRestrictBoard();
            }
        })
        $('.btn-res').click(function(){
            if($('.btn-restrict').hasClass('Enabled')){
                $('.btn-restrict').removeClass('Enabled');
                DisableRestrictBoard();
            }
            else{
                $('.btn-restrict').addClass('Enabled');
                EnableRestrictBoard();
            }
      
        })
        $('.Tab-item').click(function () {
            var text = $(this).html().replace(/\s/g, '');;
            $('.Tab-item').removeClass('Tab-active');
            $(this).addClass('Tab-active');
            ShowContentWebTab(text);
        });
        $(".acc-activities .dropdown .title").click(function () {
            Active_Arrow_Dashboard();
        })

        $(".acc-activities li:not(.dropdown)").click(function () {
            Active_ElementDashboard();
        })
        $('.rightClick').click(function () {
            Active_ArrowInfoAccount();
        });
        $('.setting').click(function () {
            Show_SetRule();
        })
        $('.config-close').click(function () {
            Config_Button();
        });

       


        $(DashBoard_Ele + ':not(.dropdown)').click(function () {
            if ($(DashBoard_Ele).hasClass(AcColor)) {
                $(DashBoard_Ele).removeClass(AcColor);
                $(this).addClass(AcColor);
            } else if ($(DropDashBoard_Ele).hasClass(AcColor)) {
                $(DropDashBoard_Ele).removeClass(AcColor);
                $(this).addClass(AcColor);
            } else {
                $(this).addClass(AcColor);
            }
        })

        $('.acc-activities .dropdown div ul li').mouseover(function () {
            $(DropDashBoard_Ti).css('background-color', ColorWhite);
        })
        $(DropDashBoard_Ti).mouseout(function () {
            $(DropDashBoard_Ti).css('background-color', ColorWhite);
        })
        $(DropDashBoard_Ti).mouseover(function () {
            $(DropDashBoard_Ti).css('background-color', '#f4f5f7');
        })

        $('.arrow-dashboard').click(function () {
            ShowDashboard();
        })
        $('.setting-dashboard').click(function () {
            ShowSetting();
            $('.Time-box').css('visibility','visible');
        })
        $('.Time-box-arrow img').click(function () {
            HideSetting();
            $('.Time-box').css('visibility','hidden');
        })

        $(document).mouseup(e => {
            HideDashboard(e);
        })
        //////Effect Dashboard

        $('.arrow-dashboard').click(function () {
            ShowDashBoard();
        })
        $('.Time-box-arrow img').click(function () {
            HideArrow();
        })

        $('.square').click(function(){
            
        })
                $(document).mouseup(e => {
            if (!$('.dashboard-content').is(e.target) &&
                ($('.dashboard-content').has(e.target).length === 0) &&
                !$('.headerContent').is(e.target)) {
                if ($('.Time-box').css('display') != 'block') {
                    $('.dashboard-content').removeClass('ac-dashboard');
                    $('.icon-icon').css('display', '');
                    $('.content-TimeLimit').css('filter', '');
                    $('.content-TimeLimit').css('pointer-events', '');
                }
            }
        })




      

    });

});