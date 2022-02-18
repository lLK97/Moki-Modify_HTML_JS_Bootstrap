$(document).ready(function () {
    $(document).ready(function () {
        //Variable
        const ColorWhite = 'white';
        const DropDashBoard_Ti = '.acc-activities .dropdown .title';
        const DropDashBoard_Ele = '.acc-activities li div ul li';
        const DashBoard_Ele = '.acc-activities li';
        const AcColor = 'active__color';
        const DayInWeek = 7;
        const morning = '.morning';
        const afternoon = '.afternoon';
        const night = '.night';
        //Variable


        // Function
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

 
       

        function ShowSetting() {
            $('.icon-icon').css('display', 'none');
            $('.Time-box').css('display', 'block');
        }

        function HideArrow() {
            $('.icon-icon').css('display', '');
            $('.Time-box').css('display', 'none');
        }
        function AddItemTableRestrict(){
            
            for (var i = 1; i <= DayInWeek; i++) {
                $('.square').append('<div class="item col-1 small-item"></div>');
      
            }
        }
        function AddHourTableRestrict(session){
            var Minhours;
            var Maxhours;
            if(session == '.morning'){
                Minhours = 6;
                Maxhours = 11;
                for (var i = Minhours; i <= Maxhours; i++) {
                    $(session).append('<div class="col-12 row hours">'+
                    '<div class="h-text">'+i+'am</div>'+
                    '<div class="square col-12 row"></div></div>');
                }
                $(session).append('<div class="col-12 row hours">'+
                '<div class="h-text">'+12+'pm</div>'+
                '<div class="square col-12 row"></div></div>');
            } else if(session == '.afternoon'){
                Minhours = 2;
                Maxhours = 8;
                for (var i = Minhours; i <= Maxhours; i++) {
                    $(session).append('<div class="col-12 row hours">'+
                    '<div class="h-text">'+i+'pm</div>'+
                    '<div class="square col-12 row"></div></div>');
                }
            } else if(session == '.night'){
                Minhours = 10;
                Maxhours = 11;
                for (var i = Minhours; i <= Maxhours; i++) {
                    $(session).append('<div class="col-12 row hours">'+
                    '<div class="h-text">'+i+'pm</div>'+
                    '<div class="square col-12 row"></div></div>');
                }
                $(session).append('<div class="col-12 row hours">'+
                '<div class="h-text">'+12+'am</div>'+
                '<div class="square col-12 row"></div></div>');
                for (var i = 1; i <= 4; i++) {
                    $(session).append('<div class="col-12 row hours">'+
                    '<div class="h-text">'+i+'am</div>'+
                    '<div class="square col-12 row"></div></div>');
                }
            }
            $('.session .hours:nth-child(9) .h-text').css('opacity','1');
            $('.session .hours:nth-child(9) .h-text').css('margin-top','-5px');
            $('.session .hours:nth-child(9) .square').css('margin-top','-12px');
        
        }
    function AddaActiveItemRestrictDash() {
        $('.morning .hours:nth-child(2) .square .item').addClass('ac-item');
        $('.morning .hours:nth-child(3) .square .item').addClass('ac-item');
        $('.afternoon .hours:nth-child(9) .square .item:nth-child(1)').addClass('ac-item');
        $('.afternoon .hours:nth-child(9) .square .item:nth-child(2)').addClass('ac-item');
        $('.afternoon .hours:nth-child(9) .square .item:nth-child(3)').addClass('ac-item');
        $('.afternoon .hours:nth-child(9) .square .item:nth-child(4)').addClass('ac-item');
        $('.afternoon .hours:nth-child(9) .square .item:nth-child(5)').addClass('ac-item');
        $('.night .hours .square .item').addClass('ac-item');
        $('.night .hours:nth-child(2) .square .item:nth-child(6)').removeClass('ac-item');
        $('.night .hours:nth-child(2) .square .item:nth-child(7)').removeClass('ac-item');
    }
        // Function
        function LargeTableRestrict(session){
            $(''+session+' .hours .square .item').removeClass('small-item');
            $(''+session+' .hours:nth-child(9) .square .item').css('height','68px');
            $(''+session+' .hours .square .item').css({'margin-top':'0px'});
            $(''+session+' .hours .first-sq').css({'margin-top':'-9px'});
            $(''+session+' .hours .h-text').css('opacity','1');
            $('.restrict-limit').css('top', '6px');
            $('.Time-box').css('top', '6px');
        
        }
        function SmallTableRestrict(session){
            $(''+session+' .hours .square .item').addClass('small-item');
            $(''+session+' .hours:nth-child(9) .square .item').css('height','12px');
            $(''+session+' .hours .square').css({'margin-top':'-14px'});
            $(''+session+' .hours .first-sq').css({'margin-top':'-10px'});
            $(''+session+' .hours .h-text').css('opacity','0');
            $(''+session+' .hours .first-te').css('opacity','1');
            $(''+session+' .hours:nth-child(9) .h-text').css('opacity','1');
            $(''+session+' .hours:nth-child(9) .h-text').css('margin-top','-5px');
            $(''+session+' .hours:nth-child(9) .square').css('margin-top','-12px');
            $('.restrict-limit').css('top', '6px');
            $('.Time-box').css('top', '6px');
        }
        function DisableRestrictBoard(){
            $('.action').css({'opacity':'0.5','pointer-events': 'none'});
            $('.table-restrict').css({'opacity':'0.5','pointer-events':'none'});
        }
        function EnableRestrictBoard(){
            $('.action').css({'opacity':'1','pointer-events': ''});
            $('.table-restrict').css({'opacity':'1','pointer-events':''});
        }
        function AdjustDistance(){
            if($('.morning .hours .square .item').hasClass('small-item') && $('.afternoon .hours .square .item').hasClass('small-item') && $('.night .hours .square .item').hasClass('small-item')){
                $('.restrict-limit').css('top', '-41px');
                $('.Time-box').css('top', '-41px');
            }
        }
        function ShowSettingMaxWidth(){
            if($(window).width() > 830){
                $('.Time-box').css('display', '');
                $('.content-TimeLimit').css('filter', '');
                $('.content-TimeLimit').css('pointer-events', '');
            }
            if($(window).width() < 830){
                ActiveHideDashboard();
                $(document).mouseup(e => {
                  Active1HideDashboard(e);
                })
            }
            var GetItemWidthday = $('.day-item').outerWidth();
          $('.square .item').css('width',GetItemWidthday);
        }
//Add
AddHourTableRestrict(morning);
AddHourTableRestrict(afternoon);
AddHourTableRestrict(night);
AddItemTableRestrict();
AddaActiveItemRestrictDash();
setInterval(ShowSettingMaxWidth, 50);
        //Action 
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
        $('.morning .hours .square .item').click(function(){
            if(!$(this).hasClass('ac-item') && !$('.morning .hours .square .item').hasClass('small-item')){
                $(this).addClass('ac-item');
                } else if ($(this).hasClass('ac-item') && !$('.morning .hours .square .item').hasClass('small-item')){
                    $(this).removeClass('ac-item');
                }
            if($('.morning .hours .square .item').hasClass('small-item')){
                LargeTableRestrict(morning);
                SmallTableRestrict(afternoon);
                SmallTableRestrict(night);
            }
            AdjustDistance();
        });
      
        $('.morning .text').click(function(){
                if(!$('.morning .hours .square .item').hasClass('small-item')){
                    SmallTableRestrict(morning);
                    } else{
                        SmallTableRestrict(afternoon);
                        SmallTableRestrict(night);
                        LargeTableRestrict(morning);
                        
                    }
                    AdjustDistance();
              
        })
        $('.afternoon .hours .square .item').click(function(){
            if(!$(this).hasClass('ac-item') && !$('.afternoon .hours .square .item').hasClass('small-item')){
                $(this).addClass('ac-item');
                } else if ($(this).hasClass('ac-item') && !$('.afternoon .hours .square .item').hasClass('small-item')){
                    $(this).removeClass('ac-item');
                }
            if($('.afternoon .hours .square .item').hasClass('small-item')){
                LargeTableRestrict(afternoon);
                SmallTableRestrict(morning);
                SmallTableRestrict(night);
            }
            AdjustDistance();
        });
      
        $('.afternoon .text').click(function(){
                if(!$('.afternoon .hours .square .item').hasClass('small-item')){
                    SmallTableRestrict(afternoon);
                    } else{
                        LargeTableRestrict(afternoon);
                        SmallTableRestrict(morning);
                        SmallTableRestrict(night);
                    }
                    AdjustDistance();
        })
        $('.night .hours .square .item').click(function(){
            if(!$(this).hasClass('ac-item') && !$('.night .hours .square .item').hasClass('small-item')){
                $(this).addClass('ac-item');
                } else if ($(this).hasClass('ac-item') && !$('.night .hours .square .item').hasClass('small-item')){
                    $(this).removeClass('ac-item');
                }
            if($('.night .hours .square .item').hasClass('small-item')){
                LargeTableRestrict(night);
                SmallTableRestrict(morning);
                SmallTableRestrict(afternoon);
            }
            AdjustDistance();
        });
      
        $('.night .text').click(function(){
                if(!$('.night .hours .square .item').hasClass('small-item')){
                    SmallTableRestrict(night);
                    } else{
                        LargeTableRestrict(night);
                        SmallTableRestrict(morning);
                        SmallTableRestrict(afternoon);
                    }
                    AdjustDistance();
        })
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

        $(document).on('click', function (e) {
            if (!$('.config-close, .div-icon').is(e.target) &&
                $('.config-close, .div-icon').has(e.target).length === 0) {
                Hide_SetRule();
            }
        })


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

       
        $('.setting-dashboard').click(function () {
            ShowSetting();
        })
        $('.Time-box-arrow img').click(function () {
            HideSetting();
        })

        $(document).mouseup(e => {
            HideDashboard(e);
        })
        //////Effect Dashboard

        $('.arrow-dashboard').click(function () {
            ShowDashboard();
        })
        $('.setting-dashboard').click(function () {
            ShowSetting();
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