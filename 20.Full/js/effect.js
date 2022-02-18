$(document).ready(function () {
    $(document).ready(function () {
        //Variable
        const ColorWhite = 'white';
        const DropDashBoard_Ti = '.acc-activities .dropdown .title';
        const DashBoard_Ele = '.acc-activities li';
        // const AcColor = 'active__color';
        const BlueGray = '#3b465a';
        const Gray = '#b0b4bd';
        const Red = '#cc0001';
        const ColorMokinet = '#2aabcb';
        const Maxdeg = 'rotate(360deg)';
        const rotate0 = 'rotate(0deg)';
        const TimeTransition = '0.5s all ease-in-out';
        var currentday = new Date();
        var dayIndex = currentday.getDay();
        const Number_Tick_Minute = 60;
        const MaxHours = '24';
        const MinHoursToMinute = '00';
        const DayInWeek = 7;
        const morning = '.morning';
        const afternoon = '.afternoon';
        const night = '.night';
        const allow = 'allow';
        const wanring = 'warning';
        const block = 'block';
        const ignore = 'ignore';
        const icon_allow = './images/Icon_Accept.png';
        const icon_alert = './images/Icon_Alert.png';
        const icon_block = './images/Icon_Block.png';
        const icon_delete = './images/Delete.png';
        const dots = './images/dots.png';
        const TextItemFilter = [
            [icon_allow, 'Educational'],
            [icon_allow, 'Government'],
            [icon_allow, 'Entertainment'],
            [icon_allow, 'Search Portals'],
            [icon_allow, 'News'],
            [icon_allow, 'Sports'],
            [icon_allow, 'Business'],
            [icon_allow, 'Health'],
            [icon_allow, 'Technology'],
            [icon_allow, 'Games'],
            [icon_allow, 'Travel'],
            [icon_allow, 'Religion'],
            [icon_allow, 'Shopping'],
            [icon_allow, 'Employment'],
            [icon_allow, 'Webmail'],
            [icon_allow, 'Forums'],
            [icon_allow, 'Social Network'],
            [icon_allow, 'Chat'],
            [icon_allow, 'File Sharing'],
            [icon_block, 'Gambling'],
            [icon_block, 'Proxies/Loopholes'],
            [icon_block, 'Violence'],
            [icon_block, 'Weapons'],
            [icon_block, 'Profanity'],
            [icon_block, 'Mature Content'],
            [icon_block, 'Pornography'],
            [icon_block, 'Alcohol'],
            [icon_block, 'Drugs'],
            [icon_block, 'Tobacco']
        ];
        const TextItemCall = [
            [icon_allow, 'Cho phép cuộc gọi đến'],
            [icon_allow, 'Cho phép cuộc gọi đi'],
        ];
        const CountItemFilter = TextItemFilter.length;
        const CountItemCall = TextItemCall.length;

        const IOS = 'IOS';
        const android = 'android';
        const facebook = 'facebook';
        const youtube = 'youtube';
        const messenger = 'messenger';
        const zalo = 'zalo';
        const vinID = 'vinID';
        const be = 'be';
        const phone = 'phone';
        const google = 'google';
        const Time_Limit = 'TimeLimit';
        var title;
        //Variable


        // Function
        function Active_Arrow_Dashboard() {
            if ($(DashBoard_Ele + 'button').hasClass('btn--reverse')) {
                $(DashBoard_Ele + 'button').removeClass('btn--reverse');
            } else {
                $(DashBoard_Ele + 'button').addClass('btn--reverse');
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

        function Add_Tick() {
            for (var i = 1; i <= Number_Tick_Minute; i++) {
                $('.group-tick').append('<div class="tick-radius" data-minute=' + i + '><div class="tickmark"></div></div>');
            }
        }

        function HideDashboard(e) {
            if (!$('.dashboard-content').is(e.target) &&
                ($('.dashboard-content').has(e.target).length === 0) &&
                !$('.headerContent').is(e.target)) {
                if ($('.Time-box').css('display') != 'block') {
                    $('.dashboard-content').removeClass('ac-dashboard');
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
                $('.content-TimeLimit').css('filter', '');
                $('.content-TimeLimit').css('pointer-events', '');
                if ($(window).width() > 1025) {

                }

            }
        }
        function ActiveHideDashboard() {
            if ($('.dashboard-content').hasClass('ac-dashboard')) {
                $('.content-TimeLimit').css('filter', 'blur(1px)');
                $('.content-TimeLimit').css('pointer-events', 'none');
            }

        }


        function ShowSetting() {
            $('.Time-box').css('display', 'block');
            $('.content-TimeLimit').addClass("mobileActive");
            $('.Time-limit, .restrict-limit, .Filter-limit, .AddWeb-content').hide();
        }
   
        function ShowSettingMaxWidth() {
            if ($(window).width() > 1025) {
                if($('.AddWeb-content--webFilter').length==0){
                $('.Time-box').css('display', '');
                }
                $('.content-TimeLimit').css('filter', '');
                $('.content-TimeLimit').css('pointer-events', '');
            }
            if ($(window).width() < 1025) {
                ActiveHideDashboard();
                $(document).mouseup(e => {

                    Active1HideDashboard(e);
                });
            }
        }
        function Change() {
            $('.dott').change(function () {
                $('.content-TimeLimit').css({
                    'touch-action': 'none',
                    'height': 'calc(' + $(window).height() + ')-18rem',
                    'overflow': 'hidden'
                });
                window.scroll(0, 1);
            })
        }

        //   Restrict Time
        function AddItemTableRestrict() {
            for (var i = 1; i <= DayInWeek; i++) {
                $('.square').append('<div class="item col-1 small-item"></div>');
            }
        }
        function AddHourTableRestrict(session) {
            var Minhours;
            var Maxhours;
            if (session == '.morning') {
                Minhours = 6;
                Maxhours = 11;
                for (var i = Minhours; i <= Maxhours; i++) {
                    $(session).append('<div class="col-12 row hours">' +
                        '<div class="h-text">' + i + 'am</div>' +
                        '<div class="square col-12 row"></div></div>');
                }
                $(session).append('<div class="col-12 row hours">' +
                    '<div class="h-text">' + 12 + 'pm</div>' +
                    '<div class="square col-12 row"></div></div>');
            } else if (session == '.afternoon') {
                Minhours = 2;
                Maxhours = 8;
                for (var i = Minhours; i <= Maxhours; i++) {
                    $(session).append('<div class="col-12 row hours">' +
                        '<div class="h-text">' + i + 'pm</div>' +
                        '<div class="square col-12 row"></div></div>');
                }
            } else if (session == '.night') {
                Minhours = 10;
                Maxhours = 11;
                for (var i = Minhours; i <= Maxhours; i++) {
                    $(session).append('<div class="col-12 row hours">' +
                        '<div class="h-text">' + i + 'pm</div>' +
                        '<div class="square col-12 row"></div></div>');
                }
                $(session).append('<div class="col-12 row hours">' +
                    '<div class="h-text">' + 12 + 'am</div>' +
                    '<div class="square col-12 row"></div></div>');
                for (var i = 1; i <= 4; i++) {
                    $(session).append('<div class="col-12 row hours">' +
                        '<div class="h-text">' + i + 'am</div>' +
                        '<div class="square col-12 row"></div></div>');
                }
            }
            $('.session .hours:nth-child(9) .h-text').css('opacity', '1');
            $('.session .hours:nth-child(9) .h-text').css('margin-top', '-5px');
            $('.session .hours:nth-child(9) .square').css('margin-top', '-12px');

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
        function LargeTableRestrict(session) {
            $('' + session + ' .hours .square .item').removeClass('small-item');
            $('' + session + ' .hours:nth-child(9) .square .item').css('height', '68px');
            $('' + session + ' .hours .square .item').css({ 'margin-top': '0px' });
            $('' + session + ' .hours .first-sq').css({ 'margin-top': '-9px' });
            $('' + session + ' .hours .h-text').css('opacity', '1');
            $('.restrict-limit').css('top', '6px');
            $('.Time-box').css('top', '6px');

        }
        function SmallTableRestrict(session) {
            $('' + session + ' .hours .square .item').addClass('small-item');
            $('' + session + ' .hours:nth-child(9) .square .item').css('height', '12px');
            $('' + session + ' .hours .square').css({ 'margin-top': '-14px' });
            $('' + session + ' .hours .first-sq').css({ 'margin-top': '-10px' });
            $('' + session + ' .hours .h-text').css('opacity', '0');
            $('' + session + ' .hours .first-te').css('opacity', '1');
            $('' + session + ' .hours:nth-child(9) .h-text').css('opacity', '1');
            $('' + session + ' .hours:nth-child(9) .h-text').css('margin-top', '-5px');
            $('' + session + ' .hours:nth-child(9) .square').css('margin-top', '-12px');
            $('.restrict-limit').css('top', '6px');
            $('.Time-box').css('top', '6px');
        }
        function DisableRestrictBoard() {
            $('.action, .table-restrict, .description, .Item-Filter, .button-webfilter--outside').css({ 'opacity': '0.5', 'pointer-events': 'none' });
        }
        function EnableRestrictBoard() {
            $('.action, .table-restrict, .description, .Item-Filter, .button-webfilter--outside').css({ 'opacity': '1', 'pointer-events': '' });
        }
        function AdjustDistance() {
            if ($('.morning .hours .square .item').hasClass('small-item') && $('.afternoon .hours .square .item').hasClass('small-item') && $('.night .hours .square .item').hasClass('small-item')) {
                $('.restrict-limit').css('top', '-41px');
                $('.Time-box').css('top', '-41px');
            }
        }
        function ShowSettingMaxWidthRestrict() {
            if ($(window).width() > 1025) {
                $('.Time-box').css('display', '');
                $('.content-TimeLimit').css('filter', '');
                $('.content-TimeLimit').css('pointer-events', '');
            }
            if ($(window).width() < 1025) {
                ActiveHideDashboard();
                $(document).mouseup(e => {
                    Active1HideDashboard(e);
                })
            }
            var GetItemWidthday = $('.day-item').outerWidth();
            $('.square .item').css('width', GetItemWidthday);
        }
        function SetContentReponsive() {
            var height = $(window).height();
            var width = $(window).width();
            if ($('.content-TimeLimit').hasClass('content-TimeLimit--YoutubeMonitor')) {
                $('.content-TimeLimit').css('overflow-x', 'hidden');
                // if ((height == 731 && width == 411)
                //     || (height == 736 && width == 414)
                //     || (height == 812 && width == 375)
                //     || (height == 823 && width == 411)) {
                //     $('.content-TimeLimit, .content').css('height', height);
                // }
                // else if (height == 1024 && width == 768) {
                //     $('.content-TimeLimit, .content').css('height', height);
                   
                // }  else if (height == 768 && width == 1024) {
                //     $('.content-TimeLimit, .content').css('height', height);
               
                // }
                //  else if (height == 1366 && width == 1024) {
                //     $('.content-TimeLimit, .content').css('height', height / 1.18 - 500);
      
                // }
                // else if (height >= 668 && width < 500) {
                //     $('.content-TimeLimit').css('height', height);
            
           
                // } else if (height < 668 && width < 500) {
                //     $('.content-TimeLimit').css('height', height / 1.18 + 100);
                 
                // } else if (height < 668 && width > 500) {
                //     $('.content-TimeLimit, .content').css('height', height);
               
                // }
                // else if (height < 400 && width > 800) {
                //     $('.content-TimeLimit').css('height', height);
                 
                // }
                // else if (height > 720 && width > 1025 ) {
                //     $('.content-TimeLimit').css('height', height / 1.18 + 50);
                   
                // }

            } 
            // else if ($('.content-TimeLimit').hasClass('content-TimeLimit--Game')) {
            //     $('.content-TimeLimit').css('height', height);  
             
               
            // }



        }

        //Add
        if ($('.content-TimeLimit').hasClass('content-TimeLimit--restrictTime')) {
            AddHourTableRestrict(morning);
            AddHourTableRestrict(afternoon);
            AddHourTableRestrict(night);
            AddItemTableRestrict();
            AddaActiveItemRestrictDash();

        }
        setInterval(ShowSettingMaxWidthRestrict, 50);
        setInterval(SetContentReponsive);
        setInterval(AccessYouTubeWeb);
        setInterval(function () {
            $('html').css('height', $(window).height());
            $('body').css('height', $(window).height());
            $('html').css('overflow', 'hidden');
            $('body').css('overflow', 'hidden');

            if ($(window).width() < 1025 && $('.Time-box').css('display') == 'block') {
                $('html').css('position', 'fixed');
            } else {
                $('html').css('position', '');
            }
        });
        /* Web Filter */

        function Show_Add_Website_item(textWeb, imgItemWeb, text_number) {
            var status;
            if (imgItemWeb == icon_allow) {
                status = allow;
            } else if (imgItemWeb == icon_block) {
                status = block;
            } else if (imgItemWeb == icon_alert) {
                status = wanring;
            } else if (imgItemWeb = 'https://emojigraph.org/media/openmoji/cross-mark_274c.png') {
                status = ignore;
            }
            if (!$('.Item-WebNone').hasClass('Item-WebNone--call')) {
                $('.Item-WebNone').append('<div class="row Item-Filter" data-title="' + textWeb + '">' +
                    '<div class="col-1 img">' +
                    '<img src="' + imgItemWeb + '" data-title=' + textWeb + ' alt=""></div>' +
                    '<div class="text-filter col-5">' + textWeb + '</div>' +
                    '<div class="Set-status col-4"><img src="' + dots + '" alt="" id="dots-addweb" class="dots" data-title="' + textWeb + '" data-status="' + status + '" ></div></div>');
            }
            else {
                $('.Item-WebNone').append('<div class="row Item-Filter" data-title="' + textWeb + '">' +
                    '<div class="col-1 img">' +
                    '<img src="' + imgItemWeb + '" data-title=' + textWeb + ' alt=""></div>' +
                    '<div class="text-filter col-5 row">' +
                    '<div class="col-12 text">' + textWeb + '</div>' +
                    '<div class="col-12 number">' + text_number + '</div>' +
                    '</div>' +
                    '<div class="Set-status col-4"><img src="' + dots + '" alt="" id="dots-addweb" class="dots" data-title="' + textWeb + '" data-status="' + status + '" ></div></div>');
            }
        }


        function Add_Website_item(textWeb, WebStatus, text_number) {
            var imgItemWeb;
            $('.Tab-item').removeClass('Tab-active');
            $('.Tab-item:nth-child(2)').addClass('Tab-active');
            $('.Categories').css('display', 'none');
          
            $('.AddWeb').css('display', 'block');
            $('.Item-WebNone').css('opacity', '1');
            if(!$('.button').hasClass('button--call')){
                $('.button').html('Thêm Website');
            }
     
            if ($('.Item-WebNone').html().replace(/\s/g, '') == 'Chưacótrangwebnàođượcthêmvào' ||
                $('.Item-WebNone').html().replace(/\s/g, '') == 'Chưacósốđiệnthoạinàođượcthêmvào') {
                $('.Item-WebNone').html('');
            }

            $('.Item-WebNone').css('line-height', '1.1');
            if (WebStatus == 'Allow') {
                imgItemWeb = icon_allow;
            } else if (WebStatus == 'Alert') {
                imgItemWeb = icon_alert;
            } else if (WebStatus == 'Block') {
                imgItemWeb = icon_block;
            }
            Show_Add_Website_item(textWeb, imgItemWeb, text_number);
            $('.PopUp').css('display', 'flex');
            $('.PopUp .text').html('Cuộc gọi đã được thêm vào');
            setTimeout(function () {
                $('.PopUp').css('display', '');
            }, 5000)

        }

        function ItemFilter(img, title, status) {
            if (!$('.Categories').hasClass('Categories--location')) {
                $('.Categories').append('<div class="row Item-Filter">' +
                    '<div class="col-1 img">' +
                    '<img src="' + img + '" data-title="' + title + '" alt=""></div>' +
                    '<div class="text-filter col-8">' + title + '</div>' +
                    '<div class="Set-status col-3"><img src="' + dots + '" alt="" class="dots" data-title="' + title + '"></div></div>');
            }
        }

        function AddItemFilter(img, title) {
            if (img == icon_allow) {
                $('.Categories').append(ItemFilter(img, title, allow));
            } else if (img == icon_alert) {
                $('.Categories').append(ItemFilter(img, title, wanring));
            } else if (img == icon_block) {
                $('.Categories').append(ItemFilter(img, title, block));
            }
        }

        function SetDistantFilter() {
            // if ($('.content-TimeLimit').hasClass('')) {
            //     var widthsrceen = $(window).width();
            //     var heightScreenMobile = $(window).height() - 2 * $('.headerContent').height();
            //     var heightScreen = $(window).height() - $('.headerContent').height();
                
            //     if(!$('.content-TimeLimit').hasClass('content-TimeLimit--call')){
            //         if (widthsrceen == 768 && $(window).height() == 1024) {
            //             $('.content-TimeLimit').css('height', heightScreenMobile - 280);
              
            //         }
            //         else if (widthsrceen == 375 && $(window).height() == 812) {
            //             $('.content-TimeLimit').css('height', heightScreenMobile - 50);
                 
            //         }
            //         else if (widthsrceen < 830 && widthsrceen > 667 && $('.Tab-active').length && $('.Tab-active').html().replace(/\s/g, '') == 'Websites') {
            //             if ($('.AddWeb-content').css('display') == 'none') {
            //                 $('.content-TimeLimit').css('height', '400px');
                      
            //             } else if ($('.AddWeb-content').css('display') == 'block') {
            //                 $('.content-TimeLimit').css('height', heightScreenMobile);
                         
            //             }
            //         } else if (widthsrceen < 830 && widthsrceen > 667) {
            //             $('.content-TimeLimit').css('height', heightScreenMobile);
              
            //         }
            //         else if (widthsrceen < 667 && $('.Tab-active').length && $('.Tab-active').html().replace(/\s/g, '') == 'Websites') {
               
            //             if ($('.AddWeb-content').css('display') == 'none') {
            //                 $('.content-TimeLimit').css('height', '415px');
            //             } else if ($('.AddWeb-content').css('display') == 'block') {
            //                 $('.content-TimeLimit').css('height', heightScreenMobile);
                   
            //             }
            //         }
            //         else if (widthsrceen < 667) {
            //             $('.content-TimeLimit').css('height', heightScreenMobile + 150);
               
            //         }
            //         else if (widthsrceen > 1220) {
            //             if ($('.Tab-active').length && $('.Tab-active').html().replace(/\s/g, '') == 'Websites') {

            //                 $('.content-TimeLimit').css('height', '600px');
                      
            //             } else {
            //                 $('.content-TimeLimit').css('height', heightScreen);
                          
                            
            //             }
            //         }
            // }


            // }
        }

        function ShowContentWebTab(text) {
            if (text == 'Websites' || text == 'Danhbạ') {
                $('.Categories').css('display', 'none');
                $('.AddWeb').css('display', 'block');
             
                if(!$('.button').hasClass('button--call')){
                    $('.button').html('Thêm Website');
                }
                $('.button--call').html('Thêm số điện thoại');
                $('.button--call').css('opacity', '1');
              
            }
            else if (text == 'Quytắc') {
                $('.button--call').css('opacity', '0');
                $('.button--call').css(' pointer-events', 'none');
                $('.button--call').html('');
                $('.Categories').css('display', '');
                $('.AddWeb').css('display', 'none');

            }
            else {
                $('.Categories').css('display', '');
                $('.AddWeb').css('display', 'none');
     
                $('.button').html('Chọn tất cả');
            }
        }

        function HideStatusDashBoard() {
            if ($('.button').html().replace(/\s/g, '') == 'Chọntấtcả' || $('.button').html().replace(/\s/g, '') == '') {
                $('.Board-Status').css('display', 'none');
            } else if ($('.button').html().replace(/\s/g, '') == 'ThêmWebsite' || $('.button').html().replace(/\s/g, '') == 'Thêmsốđiệnthoại') {
                $('.Board-Status--UpdateAddWeb').css('display', 'none');
               
               
            }
            $('.dots').removeClass('dot-show');
          
        }
        function HideBoardStatusSelectAll() {
            $('.Board-Status--SelectAll').css('display', 'none');
            $('.Board-Status--SelectAll').removeClass('active');
        }
        function ActiveBoardStatusSelectAll() {
            var pos = $('.button').position();
            $('.Board-Status--SelectAll').css('display', 'block');
            $('.Board-Status--SelectAll').css('top', pos.top + $(window).height() / 1.3);
            $('.Board-Status--SelectAll').css('left', pos.left - 318);
            $('.Board-Status--SelectAll').addClass('active');
     
        }

        function Fomat_Number_false() {
            $('.textcall--number input').css('border-color', '#c84851');
            $('.textcall--number .label-noti').css('color', '#c84851');
            $('.textcall--number .label-noti').html('Số điện thoại này không đúng định dạng');
            $('.textcall--number .label-noti').css('opacity', '1');
        }
        function Fomat_Number_true() {
            $('.textcall--number input').css('border-color', '#2aabcb');
            $('.textcall--number .label-noti').html('Trống');
            $('.textcall--number .label-noti').css('opacity', '0');
        }
        function ChangeInputnumber(type_input) {
            if (type_input.length >= 10) {
                Fomat_Number_true();

            } else {
                Fomat_Number_false();
            }

        }
        function isValidURL(string) {
            var res = string.match(/[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
            return (res !== null)
        };
        function CheckdDataTextInput() {
            var CheckText = $('.textAddWeb input').val();
            var number = $('.textcall--number input').val();
            var name = $('.textcall--name input').val();
            var text = isValidURL(CheckText);
            var Check_number = isNaN(number);
            if (!$('.textAddWeb').hasClass('textcall')) {
                if (CheckText == '') {
                    $('.textAddWeb input').css('border-color', '#c84851');
                    $('.label-noti').css('color', '#c84851');
                    $('.label-noti').html('Yêu cầu nhập URL là bắt buộc');
                    $('.label-noti').css('opacity', '1');
                } else if (text == true && CheckText != '') {
                    $('.textAddWeb input').css('border-color', '#2aabcb');
                    $('.label-noti').html('Trống');
                    $('.label-noti').css('opacity', '0');
                } else if (text == false && CheckText != '') {
                    $('.textAddWeb input').css('border-color', '#c84851');
                    $('.label-noti').css('color', '#c84851');
                    $('.label-noti').html('Bạn phải thêm tên trang web hợp lệ');
                    $('.label-noti').css('opacity', '1');

                }
            } else if ($('.textAddWeb').hasClass('textcall')) {


                if (number != '') {
                    if (Check_number != true) {
                        ChangeInputnumber(number);
                        $('.textcall--name input').css('border-color', '#2aabcb');
                        $('.textcall--name .label-noti').html('Trống');
                        $('.textcall--name .label-noti').css('opacity', '0');

                    } else {
                        if (name != '') {
                            Fomat_Number_false();
                            $('.textcall--name input').css('border-color', '#2aabcb');
                            $('.textcall--name .label-noti').html('Trống');
                            $('.textcall--name .label-noti').css('opacity', '0');
                        }

                        else if (name == '') {

                            Fomat_Number_false();
                            $('.textAddWeb input').css('border-color', '#c84851');
                            $('.textcall--name .label-noti').css('color', '#c84851');
                            $('.textcall--name .label-noti').html('Yêu cầu nhập tên là bắt buộc');
                            $('.textcall--name .label-noti').css('opacity', '1');
                        }
                    }
                }
                else if (number == '' || name == '') {

                    if (number == '' && name != '') {
                        Fomat_Number_false();
                    }
                    else if (name == '' && number != '') {

                        $('.textAddWeb input').css('border-color', '#c84851');
                        $('.textcall--name .label-noti').css('color', '#c84851');
                        $('.textcall--name .label-noti').html('Yêu cầu nhập tên là bắt buộc');
                        $('.textcall--name .label-noti').css('opacity', '1');
                    } else if (number == '' && name == '') {

                        Fomat_Number_false();
                        $('.textAddWeb input').css('border-color', '#c84851');
                        $('.textcall--name .label-noti').css('color', '#c84851');
                        $('.textcall--name .label-noti').html('Yêu cầu nhập tên là bắt buộc');
                        $('.textcall--name .label-noti').css('opacity', '1');
                    }
                }

            }


        }
        function ShowAddWebItem() {
            if ($('.button').html() == 'Thêm Website' || $('.button').html() == 'Thêm số điện thoại') {
                $('.Time-title').css('display', 'block');
                $('.Filter-limit').css('display', 'none');
                $('.AddWeb-title').css('display', 'block');
                $('.AddWeb-content').css('display', 'block');
               
                $(".content-TimeLimit").addClass("mobileActive");
                $('.Time-box').css('display', 'none');
            }
        }
        function HideAddWebItem() {
            $('.Time-title').css('display', 'block');
            $('.Filter-limit').css('display', 'block');
            $('.AddWeb-title').css('display', 'none');
            $('.AddWeb-content').css('display', 'none');
          
            $(".content-TimeLimit").removeClass("mobileActive");
            $('.Time-box').css('visibility', 'block');

        }

        function GetPositionBoard() {
            var width = $(window).width();
            if ($('.dots').hasClass('dot-show')) {
                var pos1 = $('.dot-show').position();
                $('.Board-Status').css('left', pos1.left - 230);
                var positionMenu = $('.dot-show').offset().top + 191;
                var positionMenu1 = $('.dot-show').offset().top + 220;
                if ($(window).width() <= 1025) {
                    if (positionMenu > $(window).height()) {
                        if($('.Board-Status').hasClass('Board-Status__call--rule')){
                            $('.Board-Status').css('top', pos1.top - 110);
                        }else{
                            $('.Board-Status').css('top', pos1.top - 161);
                        }
                    } else if (positionMenu < $(window).height()) {
                        $('.Board-Status').css('top', pos1.top + 30);
                    }

                    if (positionMenu1 > $(window).height()) {
                        if ($(window).width()>600){
                            if( $('.Board-Status--UpdateAddWeb').hasClass('Board-Status--UpdateCall--outside')){
                                $('.Board-Status--UpdateAddWeb').css('top', pos1.top); 
                            } else{
                                $('.Board-Status--UpdateAddWeb').css('top', pos1.top - 140);
                           
                            }
                           
                        } else{
                            if( $('.Board-Status--UpdateAddWeb').hasClass('Board-Status--UpdateCall--outside')){
                                $('.Board-Status--UpdateAddWeb').css('top', pos1.top-80);
                            } else if($('.Board-Status--UpdateAddWeb').hasClass('Board-Status--UpdateAddWeb--outside')){
                                // if ($(window).width()>1025){
                                //     $('.Board-Status--UpdateAddWeb').css('top', pos1.top-90);
                                //     console.log(20);
                                // } else{
                                    $('.Board-Status--UpdateAddWeb').css('top', pos1.top-140);
                                // }
                           
                   
                         }
                         else{
                            $('.Board-Status--UpdateAddWeb').css('top', pos1.top - 140);
                           
                        }
                }
                    } else if (positionMenu1 < $(window).height()) {
                        if( $('.Board-Status--UpdateAddWeb').hasClass('Board-Status--UpdateCall--outside')){
                            if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) 
                            {
                                $('.Board-Status--UpdateAddWeb').css('top', pos1.top+30);     
                            }
                            else{
                            $('.Board-Status--UpdateAddWeb').css('top', pos1.top+120);
                          
                            }
                    }else if($('.Board-Status--UpdateAddWeb--outside').hasClass('Board-Status--UpdateAddWeb--outside')){
                        if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) 
                        {
                            $('.Board-Status--UpdateAddWeb').css('top', pos1.top+30);     
                        }
                        else{
                        $('.Board-Status--UpdateAddWeb').css('top', pos1.top+120);
                  
                        }
             
                    } 
                    else{
                       
                        $('.Board-Status--UpdateAddWeb').css('top', pos1.top + 30);
                   
                    }
                    }
                    $('.Board-Status--UpdateAddWeb').css('left', pos1.left -270);
                    $('.Board-Status--UpdateCall').css('left', pos1.left-270);
                } else if ($(window).width() > 1025) {
                    if (positionMenu > $(window).height()) {
                        $('.Board-Status').css('top', pos1.top - 161);
                    } else if (positionMenu < $(window).height()) {
                        $('.Board-Status').css('top', pos1.top + 30);
                    }


                   
                    if (positionMenu1 > $(window).height()) {
                        $('.Board-Status--UpdateAddWeb').css('top', pos1.top - 250);
                        $('.Board-Status--UpdateCall').css('top', pos1.top -165);
                    } else if (positionMenu1 < $(window).height()) {
                        $('.Board-Status--UpdateAddWeb').css('top', pos1.top + 100);
                        $('.Board-Status--UpdateCall').css('top', pos1.top + 30);
                    }
                    if($(window).width()>=1800 ){
                        $('.Board-Status--UpdateAddWeb').css('left', pos1.left+$(window).width()/6);
                        $('.Board-Status--UpdateCall').css('left', pos1.left-20);
                    } else if($(window).width()>=1220 && $(window).width()<1800){
                        $('.Board-Status--UpdateAddWeb').css('left', pos1.left+$(window).width()/8);
                        $('.Board-Status--UpdateCall').css('left', pos1.left-20);
                    } else if($(window).width()<1220 && $(window).width()>=1025){
                        $('.Board-Status--UpdateAddWeb').css('left', pos1.left-150);
                        $('.Board-Status--UpdateCall').css('left', pos1.left-280);
                    }
                   
                
                }


             


            }
            if ($('.Board-Status--SelectAll').hasClass('active')) {

                $('.Board-Status--SelectAll').css('top', '87%');
                if (width <= 375) {
                    $('.Board-Status--SelectAll').css('left', '15px');
                    $('.PopUp').css('left', '-10px');
                } else if (width > 375 && width <= 414) {
                    $('.Board-Status--SelectAll').css('left', '8%');
                    $('.PopUp').css('left', '8%');
                } else if (width >= 414 && width < 580) {
                    $('.Board-Status--SelectAll').css('left', '15%');
                    $('.PopUp').css('left', '15%');
                } else if (width >= 580 && width < 830) {
                    $('.Board-Status--SelectAll').css('left', '25%');
                    $('.PopUp').css('left', '25%');
                } else if (width >= 830 && width <= 1220) {
                    $('.Board-Status--SelectAll').css('left', '30%');
                    $('.PopUp').css('left', '15%');
                } else if (width >= 1220) {
                    $('.Board-Status--SelectAll').css('left', '23%');
                    $('.PopUp').css('left', '23%');
                }
            }
            if (width <= 375) {
                $('.PopUp').css('left', '10%');
            } else if (width > 375 && width <= 414) {
                $('.PopUp').css('left', '15%');
            } else if (width >= 414 && width < 580) {
                $('.PopUp').css('left', '25%');
            } else if (width >= 580 && width < 1025) {
                $('.PopUp').css('left', '35%');
            } else if (width >= 1025 && width <= 1220) {
                $('.PopUp').css('left', '55%');
            } else if (width >= 1220) {
                $('.PopUp').css('left', '45%');
            }
            // $('.PopUp').css('left','');
        }
        function switch_Apps(device) {
            $('.bt-arrow-limit--' + device).css('transform', 'rotate(0deg)');
            $('.limit-today--' + device).removeClass('ac-switch');
            $('.limit-day--' + device + ', .limit-cricle--' + device + ', .limit-grbt--' + device + '').css('display', 'none');
        }
        function AddCategoryItem() {
            if (!$('.Categories').hasClass('Categories--call')) {
                for (var i = 0; i < CountItemFilter; i++) {
                    AddItemFilter(...TextItemFilter[i]);
                }
            } else {
                for (var i = 0; i < CountItemCall; i++) {
                    AddItemFilter(...TextItemCall[i]);
                }
            }
        }

        function ClosePopUp() {
            $('.PopUp').css('display', 'none');
        }


        function Check_ItemNone() {
            if (!$('.Item-WebNone').hasClass('Item-WebNone--call')) {
                if ($('.Item-WebNone').html() == '') {
                    $('.Item-WebNone').html('Chưa có trang web nào được thêm vào');
                    $('.Item-WebNone').css('line-height', '140px');
                    $('.Item-WebNone').css('opacity', '0.6');
                }

            }
            else {
                if ($('.Item-WebNone--call').html() == '') {
                    $('.Item-WebNone--call').html('Chưa có số điện thoại nào được thêm vào');
                    $('.Item-WebNone--call').css('line-height', '140px');
                    $('.Item-WebNone--call').css('opacity', '0.6');
                }
            }
        }
        function AccessYouTubeWeb() {
            if ($('.ac-youtubeWeb').prop('checked') == false) {
                $('.access').attr('data-bs-target', '#Notetime');;
                $('.access').attr('data-bs-toggle', 'modal');
            }
        }
        function Access__App() {
            if ($('.ac-App--gameApp').prop('checked') == false) {
                $('.youtube, .facebook, .messenger, .zalo, .VinID, .be, .phone, .google').css('opacity', '0.6');
                $('.youtube, .facebook, .messenger, .zalo, .VinID, .be, .phone, .google').css('pointer-events', 'none');
                switch_Apps(youtube);
                switch_Apps(facebook);
                switch_Apps(messenger);
                switch_Apps(zalo);
                switch_Apps(vinID);
                switch_Apps(be);
                switch_Apps(phone);
                switch_Apps(google);


            } else if ($('.ac-App--gameApp').prop('checked') == true) {
                $('.youtube, .facebook, .messenger, .zalo, .VinID, .be, .phone, .google').css('opacity', '1');
                $('.youtube, .facebook, .messenger, .zalo, .VinID, .be, .phone, .google').css('pointer-events', '');
            }
        }
        function Hide_setting_mobile(){
            if ($('.Time-limit').css('display') == 'block' ||
            $('.restrict-limit').css('display') == 'block' ||
            $('.Filter-limit').css('display') == 'block'
        ) {
            $('.arrow-dashboard a').attr('href', "setupRules.html");
        }
        else if ($('.Time-limit').css('display') == 'none' ||
            $('.restrict-limit').css('display') == 'none' ||
            $('.Filter-limit').css('display') == 'none' ||
            $('.setupRules-content').css('display') != 'block'
        ) {
            $('.arrow-dashboard a').attr('href', "");
        }
        else if ($('.setupRules-content').css('display') == 'block') {
        }
        }
        //           //Action
        AddCategoryItem();
        $('.ac-App--gameApp').click(function () {
            Access__App();
        });
        $('.access').click(function () {
            if ($('.ac-youtubeWeb').prop('checked') == true) {
                $('.ac-youtubeWeb').prop('checked', false);
                $('.access-Web .label').css('opacity', '0.5');
            }
        })
        $('.btn-confirm').click(function () {
            if ($('.ac-youtubeWeb').prop('checked') == false) {
                $('.access').removeAttr('data-bs-target');
                $('.access').removeAttr('data-bs-toggle');
                $('.ac-youtubeWeb').prop('checked', true);
                $('.access-Web .label').css('opacity', '1');
            }
        })
        $('.back-filter').click(function () {
            HideAddWebItem();
        })
        $('.PopUp div .close').click(function () {
            ClosePopUp();
        });
        $('.bt-AddWeb').click(function () {
            $('.textAddWeb input').bind('change keyup', function () {
                CheckdDataTextInput();
            })
            CheckdDataTextInput();

            if (!$('.textAddWeb').hasClass('textcall')) {
                var text = $('.textAddWeb .text-AddWeb').val().replace(/\s/g, '');
                var label = $('.label-noti').html();
                var statusWeb = $('.check').attr('data-status');
                
                if (text != '' && label == 'Trống') {
                    Add_Website_item(text, statusWeb, 0);
                    HideAddWebItem();
                  
                }
            } else {
                var text_name = $('.textcall--name .text-AddWeb').val().replace(/\s/g, '');
                var text_number = $('.textcall--number .text-AddWeb').val().replace(/\s/g, '');
                var label_name = $('.textcall--name .label-noti').html();
                var label_number = $('.textcall--number .label-noti').html();
                var statusWeb = $('.check').attr('data-status');
                if (text_name != '' && text_number != '' && label_number == 'Trống' && label_name == 'Trống') {
                    Add_Website_item(text_name, statusWeb, text_number);
                    HideAddWebItem();
                }
            }
        })

        $('.Board-Status--AddWeb .item').click(function () {
            $('.cricle input').removeClass('check');
            if ($('.Board-Status--AddWeb .item').find('.cricle input').prop('checked') == true) {
                $('.Board-Status--AddWeb .item').find('.cricle input').prop('checked', false);
            }
            $(this).find('.cricle input').prop('checked', true);
            $(this).find('.cricle input').addClass('check');
        })

        $('body').on('click', function (event) {
            $(this).find('.Board-Status').hide();
        });
        $('.dots').on('click', function (event) {
            if ($('.button').html().replace(/\s/g, '') == 'Chọntấtcả') {
                $('.Board-Status').css('display', 'block');
                $('.Board-Status--UpdateAddWeb').css('display', 'none');
            } else if ($('.button').html().replace(/\s/g, '') == 'ThêmWebsite') {
                $('.Board-Status--UpdateAddWeb').css('display', 'block');
                $('.Board-Status').css('display', 'none');

            }
            else {
                $('.Board-Status').css('display', 'block');


            }
            event.stopPropagation(); //ko tí­nh click body
        });

        $('.dots').on('mousedow touchstart', function () {
            if ($(window).width() <= 768) {
                if ($('.dots').hasClass('dot-show')) {
                    $(this).css('background-color', 'white');
                } else {
                    $(this).css('background-color', 'rgba(147, 147, 147, 0.1)');
                }
            }
        });
        setInterval(function () {
            if ($('.Board-Status').css('display') == 'none' && $(window).width() <= 768) {
                $('.dots').css('background-color', 'white');
            }
            if ($(window).width() < 1025 && $('.AddWeb-content--call').css('display') == 'block') {
                $('.Time-title').html('Thêm liên hệ');
                $('.Time-title').css('display', 'block');
                $('.mobileActive').css('height', $(window).height());
            }
            if ($(window).width() < 1025 && $('.AddWeb-content--call').css('display') == 'none') {
                $('.Time-title').html('Cuộc gọi và SMS');
            }
            else if ($(window).width() >= 1025 && $('.AddWeb-content--call').css('display') == 'block') {
                $('.Time-title').html('Cuộc gọi và SMS');
                $('.Time-title').css('display', 'none');
            }
        });

        $('.morning .hours .square .item').click(function () {
            if (!$(this).hasClass('ac-item') && !$('.morning .hours .square .item').hasClass('small-item')) {
                $(this).addClass('ac-item');
            } else if ($(this).hasClass('ac-item') && !$('.morning .hours .square .item').hasClass('small-item')) {
                $(this).removeClass('ac-item');
            }
            if ($('.morning .hours .square .item').hasClass('small-item')) {
                LargeTableRestrict(morning);
                SmallTableRestrict(afternoon);
                SmallTableRestrict(night);
            }
            AdjustDistance();
        });

        $('.morning .text').click(function () {
            if (!$('.morning .hours .square .item').hasClass('small-item')) {
                SmallTableRestrict(morning);
            } else {
                SmallTableRestrict(afternoon);
                SmallTableRestrict(night);
                LargeTableRestrict(morning);

            }
            AdjustDistance();

        })
        $('.afternoon .hours .square .item').click(function () {
            if (!$(this).hasClass('ac-item') && !$('.afternoon .hours .square .item').hasClass('small-item')) {
                $(this).addClass('ac-item');
            } else if ($(this).hasClass('ac-item') && !$('.afternoon .hours .square .item').hasClass('small-item')) {
                $(this).removeClass('ac-item');
            }
            if ($('.afternoon .hours .square .item').hasClass('small-item')) {
                LargeTableRestrict(afternoon);
                SmallTableRestrict(morning);
                SmallTableRestrict(night);
            }
            AdjustDistance();
        });

        $('.afternoon .text').click(function () {
            if (!$('.afternoon .hours .square .item').hasClass('small-item')) {
                SmallTableRestrict(afternoon);
            } else {
                LargeTableRestrict(afternoon);
                SmallTableRestrict(morning);
                SmallTableRestrict(night);
            }
            AdjustDistance();
        })
        $('.night .hours .square .item').click(function () {
            if (!$(this).hasClass('ac-item') && !$('.night .hours .square .item').hasClass('small-item')) {
                $(this).addClass('ac-item');
            } else if ($(this).hasClass('ac-item') && !$('.night .hours .square .item').hasClass('small-item')) {
                $(this).removeClass('ac-item');
            }
            if ($('.night .hours .square .item').hasClass('small-item')) {
                LargeTableRestrict(night);
                SmallTableRestrict(morning);
                SmallTableRestrict(afternoon);
            }
            AdjustDistance();
        });

        $('.night .text').click(function () {
            if (!$('.night .hours .square .item').hasClass('small-item')) {
                SmallTableRestrict(night);
            } else {
                LargeTableRestrict(night);
                SmallTableRestrict(morning);
                SmallTableRestrict(afternoon);
            }
            AdjustDistance();
        })



        $('.btn-res').click(function () {
            if ($('.btn-restrict').hasClass('Enabled')) {
                $('.btn-restrict').removeClass('Enabled');
                DisableRestrictBoard();
                SmallTableRestrict(morning);
                SmallTableRestrict(afternoon);
                SmallTableRestrict(night);
            }
            else {
                $('.btn-restrict').addClass('Enabled');
                EnableRestrictBoard();
            }

        })
        $('.btn-Web').click(function () {
            if ($('.btn-Webfilter').hasClass('Enabled')) {
                $('.btn-Webfilter').removeClass('Enabled');
                DisableRestrictBoard();
            }
            else {
                $('.btn-Webfilter').addClass('Enabled');
                EnableRestrictBoard();
            }
        })
        $(document).mouseup(function (e) {
            $('.dots').on('click', function () {
                if (!$('.dots').hasClass('dot-show') && $(this).is(e.target) && !$('.dots').hasClass('dot-show')) {
                    var pos;
                    $('.dots').removeClass('dot-show');
                    title = $(this).attr('data-title'); ///get data-title of Item-FilterDashBoard
                    $(this).addClass('dot-show');

                    pos = $(this).position();
                    if ($('.button').html().replace(/\s/g, '') == 'Chọntấtcả' || $('.button').html().replace(/\s/g, '') == '') {
                        $('.Board-Status').css('display', 'block');
                        $('.Board-Status--SelectAll').css('display', 'none');

                    }
                    else if ($('.button').html().replace(/\s/g, '') == 'ThêmWebsite' || $('.button').html().replace(/\s/g, '') == 'Thêmsốđiệnthoại') {
                     
                            // $('.Board-Status--UpdateAddWeb').css('top', pos.top + 30);
                            // $('.Board-Status--UpdateAddWeb').css('left', pos.left - 270);
                            $('.Board-Status--UpdateAddWeb').css('display', 'block');
                       
                        // console.log(12);
                    }
                } else if ($('.dots').hasClass('dot-show') && $(this).is(e.target) && !$('.dots').hasClass('dot-show')) {
                    var pos;
                    $('.dots').removeClass('dot-show');
                    title = $(this).attr('data-title'); ///get data-title of Item-FilterDashBoard
                    $(this).addClass('dot-show');

                    pos = $(this).position();
                    if ($('.button').html().replace(/\s/g, '') == 'Chọntấtcả' || $('.button').html().replace(/\s/g, '') == '') {
                        $('.Board-Status').css('display', 'block');
                        $('.Board-Status--SelectAll').css('display', 'none');

                    }
                    else if ($('.button').html().replace(/\s/g, '') == 'ThêmWebsite') {
                     
                        // $('.Board-Status--UpdateAddWeb').css('top', pos.top + 30);
                        // $('.Board-Status--UpdateAddWeb').css('left', pos.left - 270);
                        $('.Board-Status--UpdateAddWeb').css('display', 'block');
                       

                    }
                }
                else {
                    $('.dots').removeClass('dot-show');
                    HideStatusDashBoard();

                }
            });
            if (!$('.Board-Status').is(e.target) &&
                $('.Board-Status').has(e.target).length === 0) {
                if ($('.Board-Status').css('display') == 'block') {
                    HideStatusDashBoard();
                }
            }
            if (!$('.Board-Status--UpdateAddWeb').is(e.target) &&
                $('.Board-Status--UpdateAddWeb').has(e.target).length === 0) {
                if ($('.Board-Status--UpdateAddWeb').css('display') == 'block' 
                || $('.Board-Status--UpdateCall--outside').css('display') == 'block') {
                    HideStatusDashBoard();

                }
             
            }
            if (!$('.Board-Status--SelectAll').is(e.target) &&
                $('.Board-Status--SelectAll').has(e.target).length === 0) {
                if ($('.Board-Status--SelectAll').css('display') == 'block') {
                    HideBoardStatusSelectAll();
                
                }
                
          
            }
            if (!$('.textAddWeb input').is(e.target) &&
                $('.textAddWeb input').has(e.target).length === 0) {
                $('.textAddWeb input').css('border-color', '');
                $('.label-noti').html('Trống');
                $('.label-noti').css('opacity', '0');
            }

            $('.button').click(function () {
              
                if (!$('.Board-Status--SelectAll').hasClass('active')) {
                    if($('.Board-Status--SelectAll').hasClass('Board-Status--UpdateAddWeb--inside') || $('.Board-Status--SelectAll').hasClass('Board-Status--UpdateAddWeb--outside')){
                        $('.Board-Status--UpdateAddWeb--inside').css('display','block');
                        $('.Board-Status--UpdateAddWeb--inside').addClass('active');
                        $('.Board-Status--SelectAll--outside').css('display','block');
                        $('.Board-Status--SelectAll--outside').addClass('active');
                        console.log(12);
                    } else {
                        ActiveBoardStatusSelectAll();
                    }
            
                } else if ($('.Board-Status--SelectAll').hasClass('active')) {
                    $('.Board-Status--SelectAll').css('display', '');
                    $('.Board-Status--SelectAll').removeClass('active');
                    $('.Board-Status--UpdateAddWeb--inside').css('display','');
                }
                ShowAddWebItem();
            })

            $('.Board-Status .item').click(function () {
                var srcc = $(this).find('.img img').attr('src');
                $('.Item-Filter .img img[data-title="' + title + '"]').attr('src', srcc);
                HideStatusDashBoard();
            })
            $('.Board-Status--UpdateAddWeb .item').click(function () {
                var srcc = $(this).find('.img img').attr('src');
                if (srcc == icon_delete) {
                    $('.Item-Filter[data-title="' + title + '"]').remove();
                    if ($('.Board-Status--UpdateAddWeb').hasClass('Board-Status--UpdateCall')) {
                        $('.PopUp').css('display', 'flex');
                        $('.PopUp .text').html('Gỡ bỏ quy tắc gọi điện cho Liêm');
                        setTimeout(function () {
                            $('.PopUp').css('display', '');
                        }, 5000);
                        $('.Board-Status--UpdateAddWeb').css('display', 'none');
                    } else {
                        $('.Board-Status--UpdateAddWeb').css('display', 'none');
                    }

                }
                else {
                    $('.Item-Filter .img img[data-title="' + title + '"]').attr('src', srcc);
                    if (srcc == icon_block) {
                        if ($('.Board-Status--UpdateAddWeb').hasClass('Board-Status--UpdateCall')) {
                            $('.PopUp').css('display', 'flex');
                            $('.PopUp .text').html('Tất cả các cuộc gọi của Liêm đã bị chặn');
                            setTimeout(function () {
                                $('.PopUp').css('display', '');
                            }, 5000);
                            $('.Board-Status--UpdateAddWeb').css('display', 'none');
                        } else {
                            $('.Board-Status--UpdateAddWeb').css('display', 'none');
                        }
                    } else if (srcc == icon_allow) {
                        if ($('.Board-Status--UpdateAddWeb').hasClass('Board-Status--UpdateCall')) {
                            $('.PopUp').css('display', 'flex');
                            $('.PopUp .text').html('Tất cả các cuộc gọi của Liêm được cho phép');
                            setTimeout(function () {
                                $('.PopUp').css('display', '');
                            }, 5000);
                            $('.Board-Status--UpdateAddWeb').css('display', 'none');
                        } else {
                            $('.Board-Status--UpdateAddWeb').css('display', 'none');
                        }

                    } else if (srcc == icon_alert) {
                        $('.Board-Status--UpdateAddWeb').css('display', 'none');
                    }

                }
            })

         

            $('.Tab-item').click(function () {
                var text = $(this).html().replace(/\s/g, '');;
                $('.Tab-item').removeClass('Tab-active');
                $(this).addClass('Tab-active');
                ShowContentWebTab(text);
            });

            //Action 


            function ReplaceToDefault_Webfilter(img, title, i) {
                $('.Item-Filter:nth-child(' + i + ') .img img').attr('src', img);
                $('.Item-Filter:nth-child(' + i + ') .text-filter').html(title);

            }
            $('.Board-Status--SelectAll .item').click(function () {
                var srcc = $(this).find('.img img').attr('src');
                var defa = $(this).find('.text-filter').html();
                $('.Item-Filter .img img').attr('src', srcc);
                if (defa == 'Khôi phục giá trị mặc định') {
                    for (var x = 5, i = 0; x <= 34, i < 29; x++, i++) {
                        ReplaceToDefault_Webfilter(...TextItemFilter[i], x);
                    }

                }
                HideBoardStatusSelectAll();
            })
           
        });

        // Function
        setInterval(Change(), 50);
        // AddSẻ
        Add_Tick();
        $('.tick-radius').each(function () {
            var min = $(this).data('minute');
            var degrees = min / 60 * 360;
            $(this).css('transform', 'rotate(' + degrees + 'deg)');
            if (min % 5 == 0) $(this).addClass("bold");
        });
        setInterval(ShowSettingMaxWidth
            , 100);

        //Action 



        $(".acc-activities .dropdown .title").click(function () {
            Active_Arrow_Dashboard();
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
            Hide_setting_mobile();

        })
        $('.setting-dashboard').click(function () {
            ShowSetting();
            $('.content-TimeLimit').scrollTop(0);
        })
    

        $(document).mouseup(e => {
            HideDashboard(e);
        })

  

        $(document).mouseup(e => {
            if (!$('.dashboard-content').is(e.target) &&
                ($('.dashboard-content').has(e.target).length === 0) &&
                !$('.headerContent').is(e.target)) {
                if ($('.Time-box').css('display') != 'block') {
                    $('.dashboard-content').removeClass('ac-dashboard');
                    $('.content-TimeLimit').css('filter', '');
                    $('.content-TimeLimit').css('pointer-events', '');
                }
            }
        })

        $('.location').click(function () {
            if ($('.location').prop('checked') == false) {
                $('.text-location').html('Chức năng giám sát vị trí đã TẮT');
            } else if ($('.location').prop('checked') == true) {
                $('.text-location').html('Chức năng giám sát vị trí đã BẬT');
            }
        }

        );


        function LimitApp(device) {
            var minute = 0;
            var hours = 0;
            var is_dragging;
            var angle, center_x, center_y, circle, delta_x, delta_y, pos_x, pos_y, touch;
            var HoursDevice = $('.hours--' + device + ' .number');
            var MinuteDevice = $('.minute--' + device + ' .number');
            var DayItemDevice = $('.day-item--' + device + '');
            var TextDayDevice = $('.day--' + device + '');
            for (var i = 2; i <= 8; i++) {
                this["textday--" + device + i] = '';
                this["hours--" + device + i] = '24';
                this["minute--" + device + i] = '00';
                this["item1tbg--" + device + i] = '';
                this["item2tbg--" + device + i] = '';
                this["item3tbg--" + device + i] = '';
                this["item4tbg--" + device + i] = '';
                this["item5tbg--" + device + i] = '';
                this["item6tbg--" + device + i] = '';
                this["crimobgangle--" + device + i] = 0;
                this['it23angle--' + device + i] = 0;
                this['item1op--' + device + i] = 0;
                this['item4op--' + device + i] = 0;
                this['item5op--' + device + i] = 0;
                this['colorDay--' + device + i] = '';
                this['text--' + device + i] = '';
                this['touch--' + device + i];
                this['lock--' + device + i];
                this['clock--' + device + i];
                $('.SaveStyle--' + device).append($('<div>').html('').addClass('touchsave' + i));
                $('.SaveStyle--' + device).append($('<div>').html('').addClass('locksave' + i));
                $('.SaveStyle--' + device).append($('<div>').html('').addClass('clocksave' + i));

            }

            function ArrowLimitYoutubeAppDisabled() {
                $('.bt-arrow-limit--' + device).css('transform', 'rotate(0deg)');
                $('.limit-today--' + device).removeClass('ac-switch');
                $('.limit-day--' + device + ', .limit-cricle--' + device + ', .limit-grbt--' + device + '').css('display', 'none');
            }
            function ArrowLimitYoutubeAppEnabled() {
                $('.bt-arrow-limit').css('transform', 'rotate(0deg)');
                $('.limit-today').removeClass('ac-switch');
                $('.limit-day, .limit-cricle, .limit-grbt').css('display', 'none');
                $('.bt-arrow-limit--' + device).css('transform', 'rotate(180deg)');
                $('.limit-today--' + device).addClass('ac-switch');
                $('.limit-day--' + device + ', .limit-cricle--' + device + ', .limit-grbt--' + device + '').css('display', '');
            }
            function Active_ArrowLimitYoutubeApp() {
                if (!$('.limit-today--' + device).hasClass('ac-switch')) {
                    ArrowLimitYoutubeAppEnabled();
                }
                else if ($('.limit-today--' + device).hasClass('ac-switch')) {
                    ArrowLimitYoutubeAppDisabled();
                }
            }





            function Set_Day_OfWeekTiTle() {
                var current = 'Hôm nay';
                var currenthours = $('.hours--' + device + ' .number').html().replace(/\s/g, '');
                var currentminute = $('.minute--' + device + ' .number').html().replace(/\s/g, '');
                if (dayIndex == 1) {
                    if ($('.day-active--' + device + ' div').html() == 'T2') {
                        $('.day--' + device + '').html(current);
                        TimeLimitToday(currenthours, currentminute);
                    } else {
                        if (this["hours--" + device + 2] == '24'
                            || $.type(this["hours--" + device + 2]) == 'undefined') {
                            if (currenthours != '24') {
                                TimeLimitTodayUnBlock();
                                // if(currenthours == '00'){
                                //     $('.title--'+device).html('Đã chặn');
                                // }else{
                                //     $('.title--'+device).html('Giới hạn');
                                // }
                            } else if (currenthours == '24') {
                                // $('.title--'+device).html('Cho phép');
                                if ((this["hours--" + device + 2] == '24' || $.type(this["hours--" + device + 2]) == 'undefined')
                                    && (this["hours--" + device + 3] == '24' || $.type(this["hours--" + device + 3]) == 'undefined')
                                    && (this["hours--" + device + 4] == '24' || $.type(this["hours--" + device + 4]) == 'undefined')
                                    && (this["hours--" + device + 5] == '24' || $.type(this["hours--" + device + 5]) == 'undefined')
                                    && (this["hours--" + device + 6] == '24' || $.type(this["hours--" + device + 6]) == 'undefined')
                                    && (this["hours--" + device + 7] == '24' || $.type(this["hours--" + device + 7]) == 'undefined')
                                    && (this["hours--" + device + 8] == '24' || $.type(this["hours--" + device + 8]) == 'undefined')
                                ) {
                                    TimeLimitTodayDefault();

                                } else {
                                    TimeLimitTodayUnBlock();
                                }
                            }

                        } else {
                            if ($.type(this["hours--" + device + 2]) == 'undefined' || this["hours--" + device + 2] == '24') {
                                if (currenthours != '24') {
                                    TimeLimitTodayUnBlock();
                                    // if(currenthours == '00'){
                                    //     $('.title--'+device).html('Đã chặn');
                                    // }else{
                                    //     $('.title--'+device).html('Giới hạn');
                                    // }
                                } else if (currenthours == '24') {
                                    // $('.title--'+device).html('Cho phép');
                                    if ((this["hours--" + device + 2] == '24' || $.type(this["hours--" + device + 2]) == 'undefined')
                                        && (this["hours--" + device + 3] == '24' || $.type(this["hours--" + device + 3]) == 'undefined')
                                        && (this["hours--" + device + 4] == '24' || $.type(this["hours--" + device + 4]) == 'undefined')
                                        && (this["hours--" + device + 5] == '24' || $.type(this["hours--" + device + 5]) == 'undefined')
                                        && (this["hours--" + device + 6] == '24' || $.type(this["hours--" + device + 6]) == 'undefined')
                                        && (this["hours--" + device + 7] == '24' || $.type(this["hours--" + device + 7]) == 'undefined')
                                        && (this["hours--" + device + 8] == '24' || $.type(this["hours--" + device + 8]) == 'undefined')
                                    ) {
                                        TimeLimitTodayDefault();
                                        
                                    } else {
                                        TimeLimitTodayUnBlock();
                                    }
                                }
                            } else {
                                TimeLimitToday(this["hours--" + device + 2], this["minute--" + device + 2]);
                            }
                        }
                    }
                } else if (dayIndex == 2) {
                    if ($('.day-active--' + device + ' div').html() == 'T3') {
                        $('.day--' + device).html(current);
                        TimeLimitToday(currenthours, currentminute);
                    } else {
                        if (this["hours--" + device + 3] == '24'
                            || $.type(this["hours--" + device + 3]) == 'undefined') {
                            if (currenthours != '24') {
                                TimeLimitTodayUnBlock();
                                // if(currenthours == '00'){
                                //     $('.title--'+device).html('Đã chặn');
                                // }else{
                                //     $('.title--'+device).html('Giới hạn');
                                // }
                            } else if (currenthours == '24') {
                                // $('.title--'+device).html('Cho phép');
                                if ((this["hours--" + device + 2] == '24' || $.type(this["hours--" + device + 2]) == 'undefined')
                                    && (this["hours--" + device + 3] == '24' || $.type(this["hours--" + device + 3]) == 'undefined')
                                    && (this["hours--" + device + 4] == '24' || $.type(this["hours--" + device + 4]) == 'undefined')
                                    && (this["hours--" + device + 5] == '24' || $.type(this["hours--" + device + 5]) == 'undefined')
                                    && (this["hours--" + device + 6] == '24' || $.type(this["hours--" + device + 6]) == 'undefined')
                                    && (this["hours--" + device + 7] == '24' || $.type(this["hours--" + device + 7]) == 'undefined')
                                    && (this["hours--" + device + 8] == '24' || $.type(this["hours--" + device + 8]) == 'undefined')
                                ) {
                                    TimeLimitTodayDefault();

                                } else {
                                    TimeLimitTodayUnBlock();
                                }
                            }

                        } else {
                            if ($.type(this["hours--" + device + 3]) == 'undefined' || this["hours--" + device + 3] == '24') {
                                if (currenthours != '24') {
                                    TimeLimitTodayUnBlock();
                                    // if(currenthours == '00'){
                                    //     $('.title--'+device).html('Đã chặn');
                                    // }else{
                                    //     $('.title--'+device).html('Giới hạn');
                                    // }
                                } else if (currenthours == '24') {
                                    // $('.title--'+device).html('Cho phép');
                                    if ((this["hours--" + device + 2] == '24' || $.type(this["hours--" + device + 2]) == 'undefined')
                                        && (this["hours--" + device + 3] == '24' || $.type(this["hours--" + device + 3]) == 'undefined')
                                        && (this["hours--" + device + 4] == '24' || $.type(this["hours--" + device + 4]) == 'undefined')
                                        && (this["hours--" + device + 5] == '24' || $.type(this["hours--" + device + 5]) == 'undefined')
                                        && (this["hours--" + device + 6] == '24' || $.type(this["hours--" + device + 6]) == 'undefined')
                                        && (this["hours--" + device + 7] == '24' || $.type(this["hours--" + device + 7]) == 'undefined')
                                        && (this["hours--" + device + 8] == '24' || $.type(this["hours--" + device + 8]) == 'undefined')
                                    ) {
                                        TimeLimitTodayDefault();

                                    } else {
                                        TimeLimitTodayUnBlock();
                                    }
                                }
                            } else {
                                TimeLimitToday(this["hours--" + device + 3], this["minute--" + device + 3]);
                            }
                        }
                    }
                } else if (dayIndex == 3) {
                    if ($('.day-active--' + device + ' div').html() == 'T4') {
                        $('.day--' + device + '').html(current);

                        TimeLimitToday(currenthours, currentminute);
                    } else {
                        if (this["hours--" + device + + 4] == '24'
                            || $.type(this["hours--" + device + + 4]) == 'undefined') {
                            if (currenthours != '24') {
                                TimeLimitTodayUnBlock();
                                // if(currenthours == '00'){
                                //     $('.title--'+device).html('Đã chặn');
                                // }else{
                                //     $('.title--'+device).html('Giới hạn');
                                // }
                            } else if (currenthours == '24') {
                                // $('.title--'+device).html('Cho phép');
                                if ((this["hours--" + device + 2] == '24' || $.type(this["hours--" + device + 2]) == 'undefined')
                                    && (this["hours--" + device + 3] == '24' || $.type(this["hours--" + device + 3]) == 'undefined')
                                    && (this["hours--" + device + 4] == '24' || $.type(this["hours--" + device + 4]) == 'undefined')
                                    && (this["hours--" + device + 5] == '24' || $.type(this["hours--" + device + 5]) == 'undefined')
                                    && (this["hours--" + device + 6] == '24' || $.type(this["hours--" + device + 6]) == 'undefined')
                                    && (this["hours--" + device + 7] == '24' || $.type(this["hours--" + device + 7]) == 'undefined')
                                    && (this["hours--" + device + 8] == '24' || $.type(this["hours--" + device + 8]) == 'undefined')
                                ) {
                                    TimeLimitTodayDefault();

                                } else {
                                    TimeLimitTodayUnBlock();
                                }
                            }

                        } else {
                            if ($.type(this["hours--" + device + + 4]) == 'undefined' || this["hours--" + device + + 4] == '24') {
                                if (currenthours != '24') {
                                    TimeLimitTodayUnBlock();
                                    // if(currenthours == '00'){
                                    //     $('.title--'+device).html('Đã chặn');
                                    // }else{
                                    //     $('.title--'+device).html('Giới hạn');
                                    // }
                                } else if (currenthours == '24') {
                                    // $('.title--'+device).html('Cho phép');
                                    if ((this["hours--" + device + 2] == '24' || $.type(this["hours--" + device + 2]) == 'undefined')
                                        && (this["hours--" + device + 3] == '24' || $.type(this["hours--" + device + 3]) == 'undefined')
                                        && (this["hours--" + device + 4] == '24' || $.type(this["hours--" + device + 4]) == 'undefined')
                                        && (this["hours--" + device + 5] == '24' || $.type(this["hours--" + device + 5]) == 'undefined')
                                        && (this["hours--" + device + 6] == '24' || $.type(this["hours--" + device + 6]) == 'undefined')
                                        && (this["hours--" + device + 7] == '24' || $.type(this["hours--" + device + 7]) == 'undefined')
                                        && (this["hours--" + device + 8] == '24' || $.type(this["hours--" + device + 8]) == 'undefined')
                                    ) {
                                        TimeLimitTodayDefault();

                                    } else {
                                        TimeLimitTodayUnBlock();
                                    }
                                }
                            } else {
                                TimeLimitToday(this["hours--" + device + 4], this["minute--" + device + 4]);
                            }
                        }
                    }
                } else if (dayIndex == 4) {
                    if ($('.day-active--' + device + ' div').html() == 'T5') {
                        $('.day--' + device).html(current);
                        TimeLimitToday(currenthours, currentminute);
                    } else {
                        if (this["hours--" + device + 5] == '24'
                            || $.type(this["hours--" + device + 5]) == 'undefined') {
                            if (currenthours != '24') {
                                TimeLimitTodayUnBlock();
                                // if(currenthours == '00'){
                                //     $('.title--'+device).html('Đã chặn');
                                // }else{
                                //     $('.title--'+device).html('Giới hạn');
                                // }
                            } else if (currenthours == '24') {
                                // $('.title--'+device).html('Cho phép');
                                if ((this["hours--" + device + 2] == '24' || $.type(this["hours--" + device + 2]) == 'undefined')
                                    && (this["hours--" + device + 3] == '24' || $.type(this["hours--" + device + 3]) == 'undefined')
                                    && (this["hours--" + device + 4] == '24' || $.type(this["hours--" + device + 4]) == 'undefined')
                                    && (this["hours--" + device + 5] == '24' || $.type(this["hours--" + device + 5]) == 'undefined')
                                    && (this["hours--" + device + 6] == '24' || $.type(this["hours--" + device + 6]) == 'undefined')
                                    && (this["hours--" + device + 7] == '24' || $.type(this["hours--" + device + 7]) == 'undefined')
                                    && (this["hours--" + device + 8] == '24' || $.type(this["hours--" + device + 8]) == 'undefined')
                                ) {
                                    TimeLimitTodayDefault();

                                } else {
                                    TimeLimitTodayUnBlock();
                                }
                            }

                        } else {
                            if ($.type(this["hours--" + device + 5]) == 'undefined' || this["hours--" + device + 5] == '24') {
                                if (currenthours != '24') {
                                    TimeLimitTodayUnBlock();
                                    // if(currenthours == '00'){
                                    //     $('.title--'+device).html('Đã chặn');
                                    // }else{
                                    //     $('.title--'+device).html('Giới hạn');
                                    // }
                                } else if (currenthours == '24') {
                                    // $('.title--'+device).html('Cho phép');
                                    if ((this["hours--" + device + 2] == '24' || $.type(this["hours--" + device + 2]) == 'undefined')
                                        && (this["hours--" + device + 3] == '24' || $.type(this["hours--" + device + 3]) == 'undefined')
                                        && (this["hours--" + device + 4] == '24' || $.type(this["hours--" + device + 4]) == 'undefined')
                                        && (this["hours--" + device + 5] == '24' || $.type(this["hours--" + device + 5]) == 'undefined')
                                        && (this["hours--" + device + 6] == '24' || $.type(this["hours--" + device + 6]) == 'undefined')
                                        && (this["hours--" + device + 7] == '24' || $.type(this["hours--" + device + 7]) == 'undefined')
                                        && (this["hours--" + device + 8] == '24' || $.type(this["hours--" + device + 8]) == 'undefined')
                                    ) {
                                        TimeLimitTodayDefault();
                                    } else {
                                        TimeLimitTodayUnBlock();
                                    }
                                }
                            } else {
                                TimeLimitToday(this["hours--" + device + 5], this["minute--" + device + 5]);
                            }
                        }
                    }
                } else if (dayIndex == 5) {
                    if ($('.day-active--' + device + ' div').html() == 'T6') {
                        $('.day--' + device).html(current);
                        TimeLimitToday(currenthours, currentminute);
                    } else {
                        if (this["hours--" + device + 6] == '24'
                            || $.type(this["hours--" + device + 6]) == 'undefined') {
                            if (currenthours != '24') {
                                TimeLimitTodayUnBlock();
                                // if(currenthours == '00'){
                                //     $('.title--'+device).html('Đã chặn');
                                // }else{
                                //     $('.title--'+device).html('Giới hạn');
                                // }
                            } else if (currenthours == '24') {
                                // $('.title--'+device).html('Cho phép');
                                if ((this["hours--" + device + 2] == '24' || $.type(this["hours--" + device + 2]) == 'undefined')
                                    && (this["hours--" + device + 3] == '24' || $.type(this["hours--" + device + 3]) == 'undefined')
                                    && (this["hours--" + device + 4] == '24' || $.type(this["hours--" + device + 4]) == 'undefined')
                                    && (this["hours--" + device + 5] == '24' || $.type(this["hours--" + device + 5]) == 'undefined')
                                    && (this["hours--" + device + 6] == '24' || $.type(this["hours--" + device + 6]) == 'undefined')
                                    && (this["hours--" + device + 7] == '24' || $.type(this["hours--" + device + 7]) == 'undefined')
                                    && (this["hours--" + device + 8] == '24' || $.type(this["hours--" + device + 8]) == 'undefined')
                                ) {
                                    TimeLimitTodayDefault();

                                } else {
                                    TimeLimitTodayUnBlock();
                                }
                            }

                        } else {
                            if ($.type(this["hours--" + device + 6]) == 'undefined' || this["hours--" + device + 6] == '24') {
                                if (currenthours != '24') {
                                    TimeLimitTodayUnBlock();
                                    // if(currenthours == '00'){
                                    //     $('.title--'+device).html('Đã chặn');
                                    // }else{
                                    //     $('.title--'+device).html('Giới hạn');
                                    // }
                                } else if (currenthours == '24') {
                                    // $('.title--'+device).html('Cho phép');
                                    if ((this["hours--" + device + 2] == '24' || $.type(this["hours--" + device + 2]) == 'undefined')
                                        && (this["hours--" + device + 3] == '24' || $.type(this["hours--" + device + 3]) == 'undefined')
                                        && (this["hours--" + device + 4] == '24' || $.type(this["hours--" + device + 4]) == 'undefined')
                                        && (this["hours--" + device + 5] == '24' || $.type(this["hours--" + device + 5]) == 'undefined')
                                        && (this["hours--" + device + 6] == '24' || $.type(this["hours--" + device + 6]) == 'undefined')
                                        && (this["hours--" + device + 7] == '24' || $.type(this["hours--" + device + 7]) == 'undefined')
                                        && (this["hours--" + device + 8] == '24' || $.type(this["hours--" + device + 8]) == 'undefined')
                                    ) {
                                        TimeLimitTodayDefault();

                                    } else {
                                        TimeLimitTodayUnBlock();
                                    }
                                }
                            } else {
                                TimeLimitToday(this["hours--" + device + 6], this["minute--" + device + 6]);
                            }
                        }
                    }
                } else if (dayIndex == 6) {
                    if ($('.day-active--' + device + ' div').html() == 'T7') {
                        $('.day--' + device).html(current);
                        TimeLimitToday(currenthours, currentminute);
                    } else {
                        if (this["hours--" + device + 7] == '24'
                            || $.type(this["hours--" + device + 7]) == 'undefined') {
                            if (currenthours != '24') {
                                TimeLimitTodayUnBlock();
                                // if(currenthours == '00'){
                                //     $('.title--'+device).html('Đã chặn');
                                // }else{
                                //     $('.title--'+device).html('Giới hạn');
                                // }
                            } else if (currenthours == '24') {
                                // $('.title--'+device).html('Cho phép');
                                if ((this["hours--" + device + 2] == '24' || $.type(this["hours--" + device + 2]) == 'undefined')
                                    && (this["hours--" + device + 3] == '24' || $.type(this["hours--" + device + 3]) == 'undefined')
                                    && (this["hours--" + device + 4] == '24' || $.type(this["hours--" + device + 4]) == 'undefined')
                                    && (this["hours--" + device + 5] == '24' || $.type(this["hours--" + device + 5]) == 'undefined')
                                    && (this["hours--" + device + 6] == '24' || $.type(this["hours--" + device + 6]) == 'undefined')
                                    && (this["hours--" + device + 7] == '24' || $.type(this["hours--" + device + 7]) == 'undefined')
                                    && (this["hours--" + device + 8] == '24' || $.type(this["hours--" + device + 8]) == 'undefined')
                                ) {
                                    TimeLimitTodayDefault();

                                } else {
                                    TimeLimitTodayUnBlock();
                                }
                            }

                        } else {
                            if ($.type(this["hours--" + device + 7]) == 'undefined' || this["hours--" + device + 7] == '24') {
                                if (currenthours != '24') {
                                    TimeLimitTodayUnBlock();
                                    // if(currenthours == '00'){
                                    //     $('.title--'+device).html('Đã chặn');
                                    // }else{
                                    //     $('.title--'+device).html('Giới hạn');
                                    // }
                                } else if (currenthours == '24') {
                                    // $('.title--'+device).html('Cho phép');
                                    if ((this["hours--" + device + 2] == '24' || $.type(this["hours--" + device + 2]) == 'undefined')
                                        && (this["hours--" + device + 3] == '24' || $.type(this["hours--" + device + 3]) == 'undefined')
                                        && (this["hours--" + device + 4] == '24' || $.type(this["hours--" + device + 4]) == 'undefined')
                                        && (this["hours--" + device + 5] == '24' || $.type(this["hours--" + device + 5]) == 'undefined')
                                        && (this["hours--" + device + 6] == '24' || $.type(this["hours--" + device + 6]) == 'undefined')
                                        && (this["hours--" + device + 7] == '24' || $.type(this["hours--" + device + 7]) == 'undefined')
                                        && (this["hours--" + device + 8] == '24' || $.type(this["hours--" + device + 8]) == 'undefined')
                                    ) {
                                        TimeLimitTodayDefault();

                                    } else {
                                        TimeLimitTodayUnBlock();
                                    }
                                }
                            } else {
                                TimeLimitToday(this["hours--" + device + 7], this["minute--" + device + 7]);
                            }
                        }
                    }
                } else if (dayIndex == 0) {
                    if ($('.day-active--' + device + ' div').html() == 'CN') {
                        $('.day--' + device).html(current);
                        TimeLimitToday(currenthours, currentminute);
                    } else {
                        if (this["hours--" + device + 8] == '24'
                            || $.type(this["hours--" + device + 8]) == 'undefined') {
                            if (currenthours != '24') {
                                TimeLimitTodayUnBlock();
                                // if(currenthours == '00'){
                                //     $('.title--'+device).html('Đã chặn');
                                // }else{
                                //     $('.title--'+device).html('Giới hạn');
                                // }
                            } else if (currenthours == '24') {
                                // $('.title--'+device).html('Cho phép');
                                if ((this["hours--" + device + 2] == '24' || $.type(this["hours--" + device + 2]) == 'undefined')
                                    && (this["hours--" + device + 3] == '24' || $.type(this["hours--" + device + 3]) == 'undefined')
                                    && (this["hours--" + device + 4] == '24' || $.type(this["hours--" + device + 4]) == 'undefined')
                                    && (this["hours--" + device + 5] == '24' || $.type(this["hours--" + device + 5]) == 'undefined')
                                    && (this["hours--" + device + 6] == '24' || $.type(this["hours--" + device + 6]) == 'undefined')
                                    && (this["hours--" + device + 7] == '24' || $.type(this["hours--" + device + 7]) == 'undefined')
                                    && (this["hours--" + device + 8] == '24' || $.type(this["hours--" + device + 8]) == 'undefined')
                                ) {
                                    TimeLimitTodayDefault();

                                } else {
                                    TimeLimitTodayUnBlock();
                                }
                            }

                        } else {
                            if ($.type(this["hours--" + device + 8]) == 'undefined' || this["hours" + device + 8] == '24') {
                                if (currenthours != '24') {
                                    TimeLimitTodayUnBlock();
                                    // if(currenthours == '00'){
                                    //     $('.title--'+device).html('Đã chặn');
                                    // }else{
                                    //     $('.title--'+device).html('Giới hạn');
                                    // }
                                } else if (currenthours == '24') {
                                    // $('.title--'+device).html('Cho phép');
                                    if ((this["hours--" + device + 2] == '24' || $.type(this["hours--" + device + 2]) == 'undefined')
                                        && (this["hours--" + device + 3] == '24' || $.type(this["hours--" + device + 3]) == 'undefined')
                                        && (this["hours--" + device + 4] == '24' || $.type(this["hours--" + device + 4]) == 'undefined')
                                        && (this["hours--" + device + 5] == '24' || $.type(this["hours--" + device + 5]) == 'undefined')
                                        && (this["hours--" + device + 6] == '24' || $.type(this["hours--" + device + 6]) == 'undefined')
                                        && (this["hours--" + device + 7] == '24' || $.type(this["hours--" + device + 7]) == 'undefined')
                                        && (this["hours--" + device + 8] == '24' || $.type(this["hours--" + device + 8]) == 'undefined')
                                    ) {
                                        TimeLimitTodayDefault();

                                    } else {
                                        TimeLimitTodayUnBlock();
                                    }
                                }
                            } else {
                                TimeLimitToday(this["hours--" + device + 8], this["minute--" + device + 8]);
                            }
                        }
                    }

                }

            }
            function ChangeColor_Status(x) {
                if (($('.SaveStyle--' + device + ' .touchsave' + x).html() == 'true' + x) || ($('.SaveStyle--' + device + ' .locksave' + x).html() == 'true' + x) || ($('.SaveStyle--' + device + ' .clocksave' + x).html() == 'true' + x)) {
                    $('.day-item--' + device + ':nth-child(' + (x - 1) + ') div').css('color', $('.SaveStyle--' + device + ' .savecolor').html());
                    $('.day-item--' + device + ':nth-child(' + (x - 1) + ')').css('border', '1px solid ' + $('.SaveStyle--' + device + ' .savecolor').html() + '');
                    if ($('.SaveStyle--' + device + ' .savecolor').html().replace(/\s/g, '') == 'black') {
                        $('.day-item--' + device + ':nth-child(' + (x - 1) + ')').css('border', '1px solid #ececec');
                    } else {
                        $('.day-item--' + device + ':nth-child(' + (x - 1) + ')').css('border', '1px solid ' + $('.SaveStyle--' + device + ' .savecolor').html() + '');
                    }
                }
            }
            function Detect_Status(y) {
                $('.cricle-tick--' + device).on('click mouseup touchstart touchmove', function () {
                    this['touch--' + device + y] = 'true' + y;
                    $('.SaveStyle--' + device + ' .touchsave' + y).html('true' + y);
                })
                $('.lock--' + device).on('mouseup touchstart', function () {
                    this['lock--' + device + y] = 'true' + y;
                    $('.SaveStyle--' + device + ' .locksave' + y).html('true' + y);
                })

                $('.clock--' + device).on('mouseup touchstart', function () {
                    this['clock--' + device + y] = 'true' + y;
                    $('.SaveStyle--' + device + ' .clocksave' + y).html('true' + y);
                })


            }

            function SaveStatus(i, textday, colorDay, text, hours, minute, item1tbg, itemb2bg, itemb3bg, itemb4bg, itemb5bg, itemb6bg, crimobgangle, it23angle, op1, op4, op5) {
                this["textday--" + device + i] = textday;
                this['colorDay--' + device + i] = colorDay;
                this['text--' + device + i] = text;
                this["hours--" + device + i] = hours;
                this["minute--" + device + i] = minute;
                this["item1tbg--" + device + i] = item1tbg;
                this["item2tbg--" + device + i] = itemb2bg;
                this["item3tbg--" + device + i] = itemb3bg;
                this["item4tbg--" + device + i] = itemb4bg;
                this["item5tbg--" + device + i] = itemb5bg;
                this["item6tbg--" + device + i] = itemb6bg;
                this["crimobgangle--" + device + i] = crimobgangle;
                this['it23angle--' + device + i] = it23angle;
                this['item1op--' + device + i] = op1;
                this['item4op--' + device + i] = op4;
                this['item5op--' + device + i] = op5;
            }


            function Change_Clock(i) {
                $('#textday--' + device).text(this["textday--" + device + i]);
                HoursDevice.html(this["hours--" + device + i]);
                MinuteDevice.html(this["minute--" + device + i]);
                $('.day-active--' + device).css('background-color', this['colorDay--' + device + i]);
                $('.day-active--' + device + ' div').css('color', this['text--' + device + i]);
                $('.item--1--' + device).css('background-color', this["item1tbg--" + device + i]);
                $('.item--2--' + device).css('background-color', this["item2tbg--" + device + i]);
                $('.item--3--' + device).css('background-color', this["item3tbg--" + device + i]);
                $('.item--4--' + device).css('background-color', this["item4tbg--" + device + i]);
                $('.item--5--' + device).css('background-color', this["item5tbg--" + device + i]);
                $('.item--6--' + device).css('background-color', this["item6tbg--" + device + i]);
                $(".cricle-mouse-bg--" + device).css("transform", this["crimobgangle--" + device + i]);
                $('.it--23--' + device).css("transform", this['it23angle--' + device + i]);
                $('.item--1--' + device).css("opacity", this['item1op--' + device + i]);
                $('.item--4--' + device).css("opacity", this['item4op--' + device + i]);
                $('.item--5--' + device).css("opacity", this['item5op--' + device + i]);
            }
            function Access_DisabledYouTubeApp() {
                if ($('.ac-App--' + device).prop('checked') == false) {
                    $('.logo--' + device).css('opacity', '0.6');
                    $('.active-limit--' + device + ' .text').css('opacity', '0.6');
                    $('.active-limit--' + device + ' .text').css('pointer-events', 'none');
                    ArrowLimitYoutubeAppDisabled();

                } else if ($('.ac-App--' + device).prop('checked') == true) {
                    $('.logo--' + device).css('opacity', '1');
                    $('.active-limit--' + device + ' .text').css('opacity', '1');
                    $('.active-limit--' + device + ' .text').css('pointer-events', '');
                    // ArrowLimitYoutubeAppEnabled();
                }
            }

            function HideTimeLimit() {
                $('.limit-day--' + device + ', .limit-cricle--' + device + ', .limit-grbt--' + device).css('display', 'none');
            }
            function TimeLimitToday(hour, minute) {
                if (hour == '00'
                    && minute == '00') {
                    TimeLimitTodayBlock();///here
                    $('.title--'+device).html('Đã chặn');
                } else if (hour == '24') {
                    if ((this["hours--" + device + 2] == '24' || $.type(this["hours--" + device + 2]) == 'undefined')
                        && (this["hours--" + device + 3] == '24' || $.type(this["hours--" + device + 3]) == 'undefined')
                        && (this["hours--" + device + 4] == '24' || $.type(this["hours--" + device + 4]) == 'undefined')
                        && (this["hours--" + device + 5] == '24' || $.type(this["hours--" + device + 5]) == 'undefined')
                        && (this["hours--" + device + 6] == '24' || $.type(this["hours--" + device + 6]) == 'undefined')
                        && (this["hours--" + device + 7] == '24' || $.type(this["hours--" + device + 7]) == 'undefined')
                        && (this["hours--" + device + 8] == '24' || $.type(this["hours--" + device + 8]) == 'undefined')
                    ) {
                        TimeLimitTodayDefault();
                     
                    } else {
                        TimeLimitTodayUnBlock();
                    }
                    // $('.title--'+device).html('Cho phép');
                }
                else {
                    TimeLimitTodayCurrent(hour, minute);
                    // $('.title--'+device).html('Giới hạn');
                }
            }
            function TimeLimitTodayCurrent(hour, minute) {
                $('.limit-today--' + device + ' .text').html(' Giới hạn hôm nay: ' + hour + ' giờ ' + minute + ' phút');
                $('.limit-today--' + device + ' .text').css('color', 'rgba(0,0,0,0.6)');
                // if($(window).width()>450){
                 if($(window).width()>=405){
                    $('.limit-today--' + device + ' .text').css('width', '240px');
                 } else{
                    $('.limit-today--' + device + ' .text').css('width', '200px');
                 }
             
        

            }
            function TimeLimitTodayDefault() {
                $('.limit-today--' + device + ' .text').html('Thiết lập giới hạn thời gian');
                $('.limit-today--' + device + ' .text').css('color', 'rgba(0,0,0,0.6)');
                $('.limit-today--' + device + ' .text').css('width', 'auto');
            
            }
            function TimeLimitTodayBlock() {
                $('.limit-today--' + device + ' .text').html('Hôm nay: Đã chặn');
                $('.limit-today--' + device + ' .text').css('color', Red);
                $('.limit-today--' + device + ' .text').css('width', '140px');
            }
            function TimeLimitTodayUnBlock() {
                $('.limit-today--' + device + ' .text').html('Đã đặt giới hạn thời gian');
                $('.limit-today--' + device + ' .text').css('color', 'rgba(0,0,0,0.6)');
                $('.limit-today--' + device + ' .text').css('width', '190px');
            }


            DayItemDevice.click(function () {
                $(this).children('div').css('color', ColorWhite);
                var day;
                day = $(this).text().replace(/\s/g, '');
                $('.day-active--' + device + ' div').css('color', 'black');
                if (DayItemDevice.hasClass('day-active--' + device)) {
                    if (HoursDevice.html().replace(/\s/g, '') != MaxHours) {
                        $('.SaveStyle--' + device + ' .savecolor').html($('.day-active--' + device).css('background-color'));
                        $('.day-active--' + device + ' div').css('color', '' + $('.SaveStyle--' + device + ' .savecolor').html().replace(/\s/g, ''));
                        $('.day-active--' + device).css('border', '1px solid ' + $('.SaveStyle--' + device + ' .savecolor').html().replace(/\s/g, '') + '');
                    } else if (HoursDevice.html().replace(/\s/g, '') == MaxHours) {
                        $('.SaveStyle--' + device + ' .savecolor').html('black');
                    }
                    $('.SaveStyle--' + device + ' .position').html($('.day-active--' + device + ' div').html());
                    DayItemDevice.removeClass('day-active--' + device);
                    DayItemDevice.css('background-color', '');
                    $(this).addClass('day-active--' + device);
                    $(this).children('div').css('color', ColorWhite);

                } else {
                    $(this).addClass('day-active--' + device);
                }


                $('.it--23--' + device).css({
                    'transform': Maxdeg,
                    'transition': TimeTransition
                });
                $('.cricle-mouse-bg--' + device).css({
                    'transform': Maxdeg,
                    'transition': TimeTransition
                });



                // $('.item--1').css({'opacity':'0'});
                $('.item--5--' + device + ', .item--1--' + device + ', .item--2--' + device + ', .item--3--' + device + '').css({
                    'background-color': BlueGray
                });
                $('.day-active--' + device + '').css("background-color", ColorMokinet);

                setTimeout("$('.cricle-mouse-bg--" + device + "').css( 'transition', '')", 500);
                setTimeout("$('.it--23--" + device + "').css({'transition': ''})", 500);
                HoursDevice.html(MaxHours);
                MinuteDevice.html(MinHoursToMinute);
                if (DayItemDevice.hasClass('day-active--' + device)) {
                    var d = $('.day-active--' + device).text().replace(/\s/g, '');
                    for (var i = 2; i <= 7; i++) {
                        if (d == 'T' + i) {
                            Detect_Status(i);
                        }
                    }
                    if (d == 'CN') {
                        Detect_Status(8);
                    }
                }

                var pos = $('.SaveStyle--' + device + ' .position').text().replace(/\s/g, '');
                for (var i = 2; i <= 7; i++) {
                    if (pos == 'T' + i) {
                        ChangeColor_Status(i);
                    }
                }
                if ($('.SaveStyle--' + device + ' .position').text().replace(/\s/g, '') == 'CN') {
                    ChangeColor_Status(8);
                }
                var sett = $('.SaveStyle--' + device + ' .setting').html().replace(/\s/g, '');
                for (var i = 2; i <= 7; i++) {
                    if (sett == 'T' + i && pos == 'T' + i) {
                        $('.day-item--' + device + ':nth-child(' + (i - 1) + ') div').css('color', 'black');
                    }
                }
                if (sett == 'CN' && pos == 'CN') {
                    $('.day-item--' + device + ':last-child div').css('color', 'black');
                }
                if (day == 'T2') {
                    Change_Clock(2);
                    TextDayDevice.html('Thứ hai');
                } else if (day == 'T3') {
                    Change_Clock(3);
                    TextDayDevice.html('Thứ ba');

                } else if (day == 'T4') {
                    Change_Clock(4);
                    TextDayDevice.html('Thứ tư');

                } else if (day == 'T5') {
                    Change_Clock(5);
                    TextDayDevice.html('Thứ năm');

                } else if (day == 'T6') {
                    Change_Clock(6);
                    TextDayDevice.html('Thứ sáu');

                } else if (day == 'T7') {
                    Change_Clock(7);
                    TextDayDevice.html('Thứ bảy');

                } else if (day == 'CN') {
                    Change_Clock(8);
                    TextDayDevice.html('Chủ nhật');

                }
                if (HoursDevice.html() != MinHoursToMinute) {
                    $('.text-lock--' + device).html('Chặn');
                    $('.lock--' + device + ' img').attr('src', './images/keyBlock.png');
                    if (Number(HoursDevice.html()) <= 12) {
                        $('.item--1--' + device).css('background-color', 'rgb(176, 180, 189)');
                    } else if (Number(HoursDevice.html()) > 12) {
                        $('.item--1--' + device).css('opacity', '0');
                    }
                } else if (HoursDevice.text().replace(/\s/g, '') == MinHoursToMinute) {
                    $('.text-lock--' + device).html('Bỏ Chặn');
                    $('.lock--' + device + ' img').attr('src', './images/UnBlock.png');

                }

            });

            DayItemDevice.click(function () {
                $(this).children('div').css('color', ColorWhite);
                var day;
                day = $(this).text().replace(/\s/g, '');
                $('.day-active--' + device + ' div').css('color', 'black');
                if (DayItemDevice.hasClass('day-active--' + device)) {
                    if (HoursDevice.html().replace(/\s/g, '') != MaxHours) {
                        $('.SaveStyle--' + device + ' .savecolor').html($('.day-active--' + device).css('background-color'));
                        $('.day-active--' + device + ' div').css('color', '' + $('.SaveStyle--' + device + ' .savecolor').html().replace(/\s/g, ''));
                        $('.day-active--' + device).css('border', '1px solid ' + $('.SaveStyle--' + device + ' .savecolor').html().replace(/\s/g, '') + '');
                    } else if (HoursDevice.html().replace(/\s/g, '') == MaxHours) {
                        $('.SaveStyle--' + device + ' .savecolor').html('black');
                    }
                    $('.SaveStyle--' + device + ' .position').html($('.day-active--' + device + ' div').html());
                    DayItemDevice.removeClass('day-active--' + device);
                    DayItemDevice.css('background-color', '');
                    $(this).addClass('day-active--' + device);
                    $(this).children('div').css('color', ColorWhite);

                } else {
                    $(this).addClass('day-active--' + device);
                }


                $('.it--23--' + device).css({
                    'transform': Maxdeg,
                    'transition': TimeTransition
                });
                $('.cricle-mouse-bg--' + device).css({
                    'transform': Maxdeg,
                    'transition': TimeTransition
                });



                // $('.item--1').css({'opacity':'0'});
                $('.item--5--' + device + ', .item--1--' + device + ', .item--2--' + device + ', .item--3--' + device + '').css({
                    'background-color': BlueGray
                });
                $('.day-active--' + device + '').css("background-color", ColorMokinet);

                setTimeout("$('.cricle-mouse-bg--" + device + "').css( 'transition', '')", 500);
                setTimeout("$('.it--23--" + device + "').css({'transition': ''})", 500);
                HoursDevice.html(MaxHours);
                MinuteDevice.html(MinHoursToMinute);
                if (DayItemDevice.hasClass('day-active--' + device)) {
                    var d = $('.day-active--' + device).text().replace(/\s/g, '');
                    for (var i = 2; i <= 7; i++) {
                        if (d == 'T' + i) {
                            Detect_Status(i);
                        }
                    }
                    if (d == 'CN') {
                        Detect_Status(8);
                    }
                }

                var pos = $('.SaveStyle--' + device + ' .position').text().replace(/\s/g, '');
                for (var i = 2; i <= 7; i++) {
                    if (pos == 'T' + i) {
                        ChangeColor_Status(i);
                    }
                }
                if ($('.SaveStyle--' + device + ' .position').text().replace(/\s/g, '') == 'CN') {
                    ChangeColor_Status(8);
                }
                var sett = $('.SaveStyle--' + device + ' .setting').html().replace(/\s/g, '');
                for (var i = 2; i <= 7; i++) {
                    if (sett == 'T' + i && pos == 'T' + i) {
                        $('.day-item--' + device + ':nth-child(' + (i - 1) + ') div').css('color', 'black');
                    }
                }
                if (sett == 'CN' && pos == 'CN') {
                    $('.day-item--' + device + ':last-child div').css('color', 'black');
                }
                if (day == 'T2') {
                    Change_Clock(2);
                    TextDayDevice.html('Thứ hai');
                } else if (day == 'T3') {
                    Change_Clock(3);
                    TextDayDevice.html('Thứ ba');

                } else if (day == 'T4') {
                    Change_Clock(4);
                    TextDayDevice.html('Thứ tư');

                } else if (day == 'T5') {
                    Change_Clock(5);
                    TextDayDevice.html('Thứ năm');

                } else if (day == 'T6') {
                    Change_Clock(6);
                    TextDayDevice.html('Thứ sáu');

                } else if (day == 'T7') {
                    Change_Clock(7);
                    TextDayDevice.html('Thứ bảy');

                } else if (day == 'CN') {
                    Change_Clock(8);
                    TextDayDevice.html('Chủ nhật');

                }
                if (HoursDevice.html() != MinHoursToMinute) {
                    $('.text-lock--' + device).html('Chặn');
                    $('.lock--' + device + ' img').attr('src', './images/keyBlock.png');
                    if (Number(HoursDevice.html()) <= 12) {
                        $('.item--1--' + device).css('background-color', 'rgb(176, 180, 189)');
                    } else if (Number(HoursDevice.html()) > 12) {
                        $('.item--1--' + device).css('opacity', '0');
                    }
                } else if (HoursDevice.text().replace(/\s/g, '') == MinHoursToMinute) {
                    $('.text-lock--' + device).html('Bỏ Chặn');
                    $('.lock--' + device + ' img').attr('src', './images/UnBlock.png');

                }

            });

            $('.lock--' + device).click(function () {
                // Set_DayCurrentBlock();
                var d = $('.day-active--' + device).text().replace(/\s/g, '');
                for (var i = 2; i <= 7; i++) {
                    if (d == 'T' + i) {
                        this['lock--' + device + i] = 'true' + i;
                        $('.SaveStyle--' + device + ' .locksave' + i).html('true' + i);
                    }
                }
                if (d == 'CN') {
                    this['lock--' + device + i] = 'true' + i;
                    $('.SaveStyle--' + device + ' .locksave' + i).html('true' + i);
                }
                if ($('.lock--' + device + ' img').attr('src') == './images/keyBlock.png') {
                    $('.text-lock--' + device).html('Bỏ Chặn');
                    $('.lock--' + device + ' img').attr('src', './images/UnBlock.png');
                    $('.cricle-mouse-bg--' + device).css({
                        'transform': 'rotate(0deg)',
                        'transition': TimeTransition
                    });

                    $('.it--23--' + device).css({
                        'transform': 'rotate(0deg)',
                        'transition': TimeTransition
                    });
                    HoursDevice.html(MinHoursToMinute);
                    MinuteDevice.html(MinHoursToMinute);

                    if (angle > 180) {
                        $('.it--15--' + device).css({
                            'transform': 'rotate(-180deg)',
                            'transition': TimeTransition
                        });

                        setTimeout("$('.it--23--" + device + "').css({'transition': '', 'transform': 'rotate(0deg)'})", 500);

                    }
                    $('.item--5--' + device + ', .item--1--' + device + ', .item--2--' + device + ', .item--3--' + device + '').css({
                        'background-color': Red,
                        'transition': TimeTransition
                    });
                    $('.item--1--' + device).css("opacity", "1");
                    $('.day-active--' + device).css("background-color", Red);
                    angle = 0;
                    if (DayItemDevice.hasClass('day-active--' + device)) {
                        var ContentChange_lock = [
                            $('.day-active--' + device).css('background-color'),
                            $('.day-active--' + device + ' div').css('color'),
                            MinHoursToMinute,
                            MinHoursToMinute,
                            Red,
                            Red,
                            Red,
                            $('.item--4--' + device).css('background-color'),
                            Red,
                            $('.item--6--' + device).css('background-color'),
                            rotate0,
                            $('.it--23--' + device).css("transform"),
                            $('.item--1--' + device).css("opacity"),
                            $('.item--4--' + device).css("opacity"),
                            $('.item--5--' + device).css("opacity")
                        ];
                        if ($('.day-active--' + device + ' div').html() == 'T2') {
                            ContentChange_lock.unshift(2, 'Thứ hai');
                            SaveStatus(...ContentChange_lock);
                        } else if ($('.day-active--' + device + ' div').html() == 'T3') {
                            ContentChange_lock.unshift(3, 'Thứ ba');
                            SaveStatus(...ContentChange_lock);
                        } else if ($('.day-active--' + device + ' div').html() == 'T4') {
                            ContentChange_lock.unshift(4, 'Thứ tư');
                            SaveStatus(...ContentChange_lock);
                        } else if ($('.day-active--' + device + ' div').html() == 'T5') {
                            ContentChange_lock.unshift(5, 'Thứ năm');
                            SaveStatus(...ContentChange_lock);
                        } else if ($('.day-active--' + device + ' div').html() == 'T6') {
                            ContentChange_lock.unshift(6, 'Thứ sáu');
                            SaveStatus(...ContentChange_lock);
                        } else if ($('.day-active--' + device + ' div').html() == 'T7') {
                            ContentChange_lock.unshift(7, 'Thứ bảy');
                            SaveStatus(...ContentChange_lock);
                        } else if ($('.day-active--' + device + ' div').html() == 'CN') {
                            ContentChange_lock.unshift(8, 'Chủ nhật');
                            SaveStatus(...ContentChange_lock);
                        }
                    }
                } else {
                    $('.text-lock--' + device).html('Chặn');
                    $('.lock--' + device + ' img').attr('src', './images/keyBlock.png');
                    $('.cricle-mouse-bg--' + device).css({
                        'transform': Maxdeg,
                        'transition': TimeTransition
                    });
                    HoursDevice.html(MaxHours);
                    MinuteDevice.html(MinHoursToMinute);
                    $('.it--23--' + device).css({
                        'transform': Maxdeg,
                        'transition': TimeTransition
                    });
                    $('.item--1--' + device).css('background-color', BlueGray);
                    $('.item--1--' + device).css({
                        'opacity': '0'
                    });
                    $('.item--5--' + device + ', .item--1--' + device + ',.item--2--' + device + ', .item--3--' + device + '').css({
                        'background-color': BlueGray,
                        'transition': TimeTransition
                    });
                    $('.day-active--' + device + '').css("background-color", ColorMokinet);
                    angle = 360;
                    var rotate360 = Maxdeg;
                    if (DayItemDevice.hasClass('day-active--' + device + '')) {
                        var ContentChange_lock = [
                            $('.day-active--' + device + '').css('background-color'),
                            $('.day-active--' + device + ' div').css('color'), MaxHours,
                            MinHoursToMinute, BlueGray, BlueGray,
                            BlueGray, $('.item--4--' + device).css('background-color'),
                            BlueGray, $('.item--6--' + device).css('background-color'),
                            rotate360, $('.it--23--' + device).css("transform"),
                            $('.item--1--' + device).css("opacity"), $('.item--4--' + device).css("opacity"), $('.item--5--' + device).css("opacity")
                        ];
                        if ($('.day-active--' + device + ' div').html() == 'T2') {
                            ContentChange_lock.unshift(2, 'Thứ hai');
                            SaveStatus(...ContentChange_lock);
                        } else if ($('.day-active--' + device + ' div').html() == 'T3') {
                            ContentChange_lock.unshift(3, 'Thứ ba');
                            SaveStatus(...ContentChange_lock);
                        } else if ($('.day-active--' + device + ' div').html() == 'T4') {
                            ContentChange_lock.unshift(4, 'Thứ tư');
                            SaveStatus(...ContentChange_lock);
                        } else if ($('.day-active--' + device + ' div').html() == 'T5') {
                            ContentChange_lock.unshift(5, 'Thứ năm');
                            SaveStatus(...ContentChange_lock);
                        } else if ($('.day-active--' + device + ' div').html() == 'T6') {
                            ContentChange_lock.unshift(6, 'Thứ sáu');
                            SaveStatus(...ContentChange_lock);
                        } else if ($('.day-active--' + device + ' div').html() == 'T7') {
                            ContentChange_lock.unshift(7, 'Thứ bảy');
                            SaveStatus(...ContentChange_lock);
                        } else if ($('.day-active--' + device + ' div').html() == 'CN') {
                            ContentChange_lock.unshift(8, 'Chủ nhật');
                            SaveStatus(...ContentChange_lock);
                        }
                    }



                    // setTimeout("$('.it--15--android').css({'transition': '', 'transform': 'rotate(0deg)'})",500);
                }
                setTimeout("$('.item--1--" + device + "').css({'transition': ''})", 2000);
                setTimeout(function () {
                    $('.cricle-mouse-bg--' + device).css('transition', '');
                    $('.item--5--' + device + ', item--1--' + device + ', .item--2--' + device + ', .item--3--' + device).css({
                        'transition': ''
                    });
                    $('.it--23--' + device).css({
                        'transition': '',
                        'transform': 'rotate(0deg)'
                    });
                    $('.it--15--' + device).css({
                        'transition': '',
                        'transform': 'rotate(0deg)'
                    });
                }, 500);
            })

            $('.setting-dashboard').click(function () {
                ShowSetting();
                $('.Time-box').css('visibility', 'visible');
            })
      
            $('.clock--' + device).click(function () {

                //    Set_DayCurrentUnBlock();
                $('.text-lock--' + device).html('Chặn');
                $('.lock--' + device + ' img').attr('src', './images/keyBlock.png');
                var d = $('.day-active--' + device).text().replace(/\s/g, '');
                for (var i = 2; i <= 7; i++) {
                    if (d == 'T' + i) {
                        this['clock--' + device + i] = 'true' + i;
                        $('.SaveStyle--' + device + ' .clocksave' + i).html('true' + i);
                    }
                }
                if (d == 'CN') {
                    this['clock--' + device + i] = 'true' + i;
                    $('.SaveStyle--' + device + ' .clocksave' + i).html('true' + i);
                }

                $('.cricle-mouse-bg--' + device).css({
                    'transform': Maxdeg,
                    'transition': TimeTransition
                });
                HoursDevice.html(MaxHours);
                MinuteDevice.html(MinHoursToMinute);
                $('.it--23--' + device).css({
                    'transform': Maxdeg,
                    'transition': TimeTransition
                });

                $('.item--1--' + device).css({
                    'opacity': '0'
                });
                $('.item--5--' + device + ', .item--1--' + device + ', .item--2--' + device + ', .item--3--' + device).css({
                    'background-color': BlueGray,
                    'transition': TimeTransition
                });
                $('.day-active--' + device).css("background-color", ColorMokinet);
                angle = 360;

                if (DayItemDevice.hasClass('day-active--' + device)) {
                    var ContentChange_lock = [$('.day-active--' + device).css('background-color'),
                    $('.day-active--' + device + ' div').css('color'), MaxHours,
                        MinHoursToMinute, BlueGray, BlueGray,
                        BlueGray, $('.item--4--' + device).css('background-color'),
                        BlueGray, $('.item--6--' + device).css('background-color'),
                        Maxdeg, Maxdeg,
                    $('.item--1--' + device).css("opacity"), $('.item--4--' + device).css("opacity"), $('.item--5--' + device).css("opacity")
                    ]
                    if ($('.day-active--' + device + ' div').html() == 'T2') {
                        ContentChange_lock.unshift(2, 'Thứ hai');
                        SaveStatus(...ContentChange_lock);
                    } else if ($('.day-active--' + device + ' div').html() == 'T3') {
                        ContentChange_lock.unshift(3, 'Thứ ba');
                        SaveStatus(...ContentChange_lock);
                    } else if ($('.day-active--' + device + ' div').html() == 'T4') {
                        ContentChange_lock.unshift(4, 'Thứ tư');
                        SaveStatus(...ContentChange_lock);
                    } else if ($('.day-active--' + device + ' div').html() == 'T5') {
                        ContentChange_lock.unshift(5, 'Thứ năm');
                        SaveStatus(...ContentChange_lock);
                    } else if ($('.day-active--' + device + ' div').html() == 'T6') {
                        ContentChange_lock.unshift(6, 'Thứ sáu');
                        SaveStatus(...ContentChange_lock);
                    } else if ($('.day-active--' + device + ' div').html() == 'T7') {
                        ContentChange_lock.unshift(7, 'Thứ bảy');
                        SaveStatus(...ContentChange_lock);
                    } else if ($('.day-active--' + device + ' div').html() == 'CN') {
                        ContentChange_lock.unshift(8, 'Chủ nhật');
                        SaveStatus(...ContentChange_lock);
                    }
                }
                setTimeout("$('.item--1--" + device + "').css({'transition': ''})", 2000);
                setTimeout(function () {
                    $('.cricle-mouse-bg--' + device).css('transition', '');
                    $('.item--5--' + device + ', item--1--' + device + ', .item--2--' + device + ', .item--3--' + device + '').css({
                        'transition': ''
                    });
                    $('.it--23--' + device).css({
                        'transition': ''
                    });
                }, 500);
            })


            ////slider cricle
            var minute = 0;
            var hours = 0;
            var is_dragging;
            //   is_dragging ;
            $('.cricle-texttime--' + device).unbind("click");
            var angle, center_x, center_y, circle, delta_x, delta_y, pos_x, pos_y, touch;
            $(document).on("mousedown touchstart", '.cricle-tick--' + device, function (e) {
                e.preventDefault();
                $('.content-TimeLimit').css('overflow-y', 'hidden');
                return is_dragging = true;
            });
            $(document).on("mousedown touchstart", '.cricle-texttime--' + device, function (e) {

                $('.content-TimeLimit').css('overflow-y', '');
                return is_dragging = false;
            });
            $(document).on("mousedown touchstart", '.space--' + device, function (e) {
                $('.content-TimeLimit').css('overflow-y', '');
                return is_dragging = false;
            });
            $(document).on("touchend", '.cricle-tick--' + device, function (e) {
                $('.content-TimeLimit').css('overflow-y', '');
                return is_dragging = false;
            });
            $(document).on("mouseup", function (e) {
                $('.content-TimeLimit').css('overflow-y', '');
                return is_dragging = false;
            });
            $(document).on("mousemove touchmove mousedown touchstart", function (e) {
                if (is_dragging) {
                    e.preventDefault();
                    $('.content-TimeLimit').css('overflow-y', 'hidden');
                    circle = $(".mouse-tick--" + device);
                    touch = void 0;
                    if (e.originalEvent.touches) {
                        touch = e.originalEvent.touches[0];
                    }
                    center_x = ($(circle).outerWidth() / 2) + $(circle).offset().left;
                    center_y = ($(circle).outerHeight() / 2) + $(circle).offset().top;
                    pos_x = e.pageX || touch.pageX;
                    pos_y = e.pageY || touch.pageY;
                    delta_y = center_y - pos_y;
                    delta_x = center_x - pos_x;
                    angle = Math.atan2(delta_y, delta_x) * (180 / Math.PI);
                    angletam = Math.atan2(delta_y, delta_x) * (180 / Math.PI);
                    angle -= 90;
                    if (angle < 0) {
                        angle = 360 + angle;
                    }
                    angle = Math.round(angle);
                    $(".cricle-mouse-bg--" + device).css("transform", "rotate(" + angle + "deg)");
                    $('.it--23--' + device).css("transform", "rotate(" + angle + "deg)");
                    if (angle < 180 && angle > 3.75) {
                        $('.text-lock--' + device).html('Chặn');
                        $('.lock--' + device + ' img').attr('src', './images/keyBlock.png');
                        $('.item--4--' + device).css("opacity", "0");
                        $('.item--1--' + device).css("opacity", "1");
                        $('.item--2--' + device + ',.item--1--' + device).css("background-color", Gray);
                        $('.item--4--' + device + ',.item--3--' + device).css("background-color", BlueGray);
                        $('.item--5--' + device).css({
                            'opacity': '0'
                        });
                    } else if (angle > 180) {
                        $('.text-lock--' + device).html('Chặn');
                        $('.lock--' + device + ' img').attr('src', './images/keyBlock.png');
                        $('.item--4--' + device).css("opacity", "1");
                        $('.item--1--' + device).css("opacity", "0");
                        $('.item--3--' + device + ',.item--4--' + device).css("background-color", BlueGray);
                        $('.item--2--' + device).css("background-color", Gray);
                        $('.item--5--' + device).css({
                            'background-color': BlueGray,
                            'opacity': '1'
                        });

                    } else if (angle < 3.75 && angle > 0) {
                        $('.item--4--' + device + ',.item--3' + device + ',.item--2' + device + '').css("background-color", Red);
                        $('.item--5--' + device).css("opacity", "1");
                        $('.item--1--' + device).css("opacity", "1");
                        $('.item--1--' + device).css("background-color", Red);
                        $('.item--5--' + device).css("background-color", Red);
                        $('.item--1--' + device).css("background-color", Red);
                        $('.day-active--' + device).css("background-color", Red);
                        $('.text-lock--' + device).html('Bỏ Chặn');
                        $('.lock--' + device + ' img').attr('src', './images/UnBlock.png');
                    }
                    if (angle == 0) {
                        $('.text-lock--' + device).html('Bỏ Chặn');
                        $('.lock--' + device + ' img').attr('src', './images/UnBlock.png');
                        $('.item--5--' + device + ', .item--1--' + device + ' ,.day-active--' + device).css({
                            'background-color': Red
                        });
                        $('.item--1--' + device).css("opacity", "1");
                    }

                    if (angle >= 3.75 && angle < 360) {
                        $('.text-lock--' + device).html('Chặn');
                        $('.lock--' + device + ' img').attr('src', './images/keyBlock.png');
                        var dX;
                        var dY;
                        dX = 0;
                        dY = 0;

                        if (Math.abs(delta_x) >= Math.abs(delta_y)) {
                            dX = 150 / 2 + Math.sign(delta_x) * 150 / 2;
                            dY = 150 / 2 + (delta_y) / Math.abs(delta_x) * 150 / 2;
                        } else {
                            dX = 150 / 2 + (delta_x) / Math.abs(delta_y) * 150 / 2;
                            dY = 150 / 2 + Math.sign(delta_y) * 150 / 2;
                        }
                        dX = 100 - Math.round(dX / 150 * 100)
                        dY = 100 - Math.round(dY / 150 * 100)
                        $('.day-active--' + device).css("background-color", ColorMokinet);

                    } else if (angle == 360) {
                        $('.day-active--' + device).css("background-color", ColorMokinet);
                        $('.item--4--' + device + ',.item--3--' + device + ',.item--2--' + device + ',.item--1--' + device + ',.item--5--' + device).css("background-color", BlueGray);

                        $('.text-lock--' + device).html('Chặn');
                        $('.lock--' + device + ' img').attr('src', './images/keyBlock.png');
                    }

                    var deg = angle;
                    var p = Math.floor(deg / 3.75) * 15;
                    var tamgio = '';
                    var tamminute = '';
                    if (Number.isInteger(p)) {
                        hours = Math.floor(p / 60);
                        minute = p - hours * 60;
                    }
                    if (hours < 10) {
                        HoursDevice.html('0' + hours);
                        tamgio = HoursDevice.html().replace(/\s/g, '');
                    } else {
                        HoursDevice.html(hours);
                        tamgio = HoursDevice.html().replace(/\s/g, '');
                    }
                    if (minute < 10) {
                        MinuteDevice.html('0' + minute);
                        tamminute = MinuteDevice.html().replace(/\s/g, '');
                    } else {
                        MinuteDevice.html(minute);
                        tamminute = MinuteDevice.html().replace(/\s/g, '');
                    }

                    if (DayItemDevice.hasClass('day-active--' + device)) {
                        var ContentChange_lock = [$('.day-active--' + device).css('background-color'),
                        $('.day-active--' + device + ' div').css('color'), tamgio,
                            tamminute, $('.item--1--' + device).css('background-color'), $('.item--2--' + device).css('background-color'),
                        $('.item--3--' + device).css('background-color'), $('.item--4--' + device).css('background-color'),
                        $('.item--5--' + device).css('background-color'), $('.item--6--' + device).css('background-color'),
                        $(".cricle-mouse-bg--" + device).css("transform"), $('.it--23--' + device).css("transform"),
                        $('.item--1--' + device).css("opacity"), $('.item--4--' + device).css("opacity"), $('.item--5--' + device).css("opacity")
                        ];
                        if ($('.day-active--' + device + ' div').html() == 'T2') {
                            ContentChange_lock.unshift(2, 'Thứ hai');
                            SaveStatus(...ContentChange_lock);

                        } else if ($('.day-active--' + device + ' div').html() == 'T3') {
                            ContentChange_lock.unshift(3, 'Thứ ba');
                            SaveStatus(...ContentChange_lock);

                        } else if ($('.day-active--' + device + ' div').html() == 'T4') {
                            ContentChange_lock.unshift(4, 'Thứ tư');
                            SaveStatus(...ContentChange_lock);

                        } else if ($('.day-active--' + device + ' div').html() == 'T5') {
                            ContentChange_lock.unshift(5, 'Thứ năm');
                            SaveStatus(...ContentChange_lock);

                        } else if ($('.day-active--' + device + ' div').html() == 'T6') {
                            ContentChange_lock.unshift(6, 'Thứ sáu');
                            SaveStatus(...ContentChange_lock);

                        } else if ($('.day-active--' + device + ' div').html() == 'T7') {
                            ContentChange_lock.unshift(7, 'Thứ bảy');
                            SaveStatus(...ContentChange_lock);

                        } else if ($('.day-active--' + device + ' div').html() == 'CN') {
                            ContentChange_lock.unshift(8, 'Chủ nhật');
                            SaveStatus(...ContentChange_lock);

                        }
                    }
                }
            });
            Detect_Status(2);
            ChangeColor_Status(2);
            if (device == Time_Limit) {

            } else {
                Set_Day_OfWeekTiTle();
                HideTimeLimit();
                setInterval(function () {
                    Set_Day_OfWeekTiTle()

                });
            }


            $('.access-App--' + device + ' .btn-switch-button').click(function () {
                Access_DisabledYouTubeApp();
            });
            $('.limit-today--' + device).click(function () {
                Active_ArrowLimitYoutubeApp();
            });
           
      
        }
        function Status_Title_Text(device){
            if($('.cricle-texttime').length>0){
                if($('.hours--'+device+' .number').html().replace(/\s/g, '') == '24'){
                    $('.title--'+device).html('Cho phép');
            
                } else if($('.hours--'+device+' .number').html().replace(/\s/g, '') == '00' &&
                $('.minute--'+device+' .number').html().replace(/\s/g, '') == '00'){
                    $('.title--'+device).html('Đã chặn');
                } else{
                    $('.title--'+device).html('Giới hạn');
                  
                }
            }
         }
        if ($('.access-App').hasClass('access-App--IOS')) {
            LimitApp(android);
            LimitApp(IOS);
        } else if ($('.access-App').hasClass('access-App--youtube')) {
            LimitApp(facebook);
            LimitApp(youtube);
            LimitApp(messenger);
            LimitApp(zalo);
            LimitApp(vinID);
            LimitApp(be);
            LimitApp(phone);
            LimitApp(google);
        } else {
            LimitApp(Time_Limit);
        }



        setInterval(function () {
            ShowSettingMaxWidth();
            SetDistantFilter();
            GetPositionBoard();
            Check_ItemNone();
            if ($('.access-App').hasClass('access-App--IOS')) {
                Status_Title_Text(android);
                Status_Title_Text(IOS);
            } else if ($('.access-App').hasClass('access-App--youtube')) {
                Status_Title_Text(facebook);
                Status_Title_Text(youtube);
                Status_Title_Text(messenger);
                Status_Title_Text(zalo);
                Status_Title_Text(vinID);
                Status_Title_Text(be);
                Status_Title_Text(phone);
                Status_Title_Text(google);
            } else {
                Status_Title_Text(Time_Limit);
            }
            // SetWidthChartDasboard()
        });



        /*--------------Move to Location of Dahboard-Info---------------------*/


        if ($('.acc-activities .dropdown').find('li').hasClass('active__color')) {
            var position_activeElement = $('.active__color').offset();
            if (position_activeElement.top > ($(window).height() - 45)) {
                $('.acc-activities').scrollTop(position_activeElement.top);
            }
        }


        /*--------------Move to Location of Dahboard-Info---------------------*/


        /*--------------------Hide DashBoard Item when return page Home-DashBoard  */
        const WidthMaxMobile = 1025;
        function HideItemDashBoard() {

            if ($(window).width() >= WidthMaxMobile) {
                if ($('.content-right--dashboard').css('display') == 'flex') {
                    $('.board-item').css('display', 'none');
                
                }
                $('.icon-sys').css('display', 'none');
            } else if ($(window).width() < WidthMaxMobile) {
                if ($('.more-applist-content').css('display') == 'block'
                    || $('.more-time').css('display') == 'block') {
                    $('.board-item').css('display', 'none');
                    $('.icon-sys').css('display', 'block');


                } else if ($('.content-right--timeline').css('display') == 'block') {
                    $('.icon-sys').css('display', 'block');
                }
                else if ($('.content-right--dashboard').css('display') != 'flex') {
                    $('.icon-sys').css('display', 'none');
                }
                else {
                    $('.board-item').css('display', 'block');
                    $('.icon-sys').css('display', 'block');
                }
            }


        }
        HideItemDashBoard()
        setInterval(HideItemDashBoard);

        /*--------------------Hide DashBoard Item when return page Home-DashBoard  */
     
        /*-------------------Adjust dropmenu for page Timeline-----------------*/

        function AdjustTimeline() {
            if ($('.dashboard-dropdown').hasClass('show')) {
                var positionMenu = $('.time-used').find('.show:nth-child(3)').offset().top + 196;
                if ($(window).width() <= 1025 && $(window).width() >= 700) {
                    if (positionMenu > $(window).height()) {
                        $('.show:nth-child(3)').css('margin-top', '-33%');
                    }
                }
                else if ($(window).width() <= 375) {
                    if (positionMenu > $(window).height()) {
                        $('.show:nth-child(3)').css('margin-top', '-75%');
                    }
                }
                else if ($(window).width() > 375 && $(window).width() < 700) {
                    if (positionMenu > $(window).height()) {
                        $('.show:nth-child(3)').css('margin-top', '-40%');
                    }
                }
                else if ($(window).width() > 1025) {
                    if (positionMenu > $(window).height()) {
                        $('.show:nth-child(3)').css('margin-top', '-50%');
                    }
                }


            }

        }
        setInterval(AdjustTimeline);
        /*-------------------Adjust dropmenu for page Timeline-----------------*/

        /*-------------------Adjust dropmenu for page Timeline-----------------*/

        function AdjustTimeYoutube() {
            if ($('.dropdown-appyoutube').hasClass('show')) {
                var positionMenu = $('.time-used').find('.show:nth-child(3)').offset().top + 98;
                if ($(window).width() <= 1025 && $(window).width() > 700) {
                    if (positionMenu > $(window).height()) {
                        $('.show:nth-child(3)').css('margin-top', '-20%');
                    }
                } else if ($(window).width() < 700) {
                    if (positionMenu > $(window).height()) {
                        $('.show:nth-child(3)').css('margin-top', '-35%');
                    }
                } else if ($(window).width() > 1025) {
                    if (positionMenu > $(window).height()) {
                        $('.show:nth-child(3)').css('margin-top', '-25%');
                    }
                }


            }

        }
        setInterval(AdjustTimeYoutube);
        /*-------------------Adjust dropmenu for page Timeline-----------------*/


        /*-------------------Adjust dropmenu for page Timeline-----------------*/

        function AdjustTimeCall() {
            if ($('.dropdown-call').hasClass('show')) {
                var positionMenu = $('.time-used').find('.show:nth-child(3)').offset().top + 98;
                if ($(window).width() <= 1025 && $(window).width() > 700) {
                    if (positionMenu > $(window).height()) {
                        $('.show:nth-child(3)').css('margin-top', '-20%');
                    }
                } else if ($(window).width() < 700) {
                    if (positionMenu > $(window).height()) {
                        $('.show:nth-child(3)').css('margin-top', '-24%');
                    }
                } else if ($(window).width() > 1025) {
                    if (positionMenu > $(window).height()) {
                        $('.show:nth-child(3)').css('margin-top', '-25%');
                    }
                }

            }

        }
        setInterval(AdjustTimeCall);
        /*-------------------Adjust dropmenu for page Timeline-----------------*/
        function ChangeSettingMobileToDahBoard() {
            if ($('content-right--setup').css('display') != 'block') {
                if ($(window).width() > 1025) {
                    $('.content-right--dashboard--setup').css('display', 'flex');
                    $('content-right--setup').css('display', 'none');
                } else {
                    $('.content-right--dashboard--setup').css('display', 'none')
                    $('content-right--setup').css('display', 'block');
                }
            }

        }
        setInterval(ChangeSettingMobileToDahBoard);

    });
    /*----------Hide bt of web-filter when categories show---------------*/
    function Hide_button_SelectALl(){
        if ($('.Categories').css('display') == 'none') {
            $('.Board-Status--SelectAll--outside').css('display','none');
        if($('.AddWeb-content').css('display') == 'block'){
            $('.button-webfilter--outside, .button--call-outside').css('display','none');
        
            // console.log(1212);
        } 
        else {
            $('.button-webfilter--outside, .button--call-outside').css('display','block');
        // console.log(123); 
        }
    }
        if($('.Time-box').css('display')=='block'){
            $('.button-webfilter--outside').css('display','none');
        }
       
    }
    function Hide_settingIcon_mobile() {
        if($('.Time-box').css('display')=='block'){
            $('.setting-dashboard').css('visibility','hidden');
        } else {
            $('.setting-dashboard').css('visibility','visible');
        }
    }
    function remove_disable_button() {
        if($('.content-right--webFilter').length>0){
        if($('.button-webfilter--outside').html().replace(/\s/g, '')=='Chọntấtcả' && !$('.btn-Webfilter').hasClass('Enabled') ){
            $('.button-webfilter--outside').css({ 'opacity': '0.5', 'pointer-events': 'none' });
        }
        else{
            $('.button-webfilter--outside').css({ 'opacity': '1', 'pointer-events': '' });
        }
    }
    }
    function Change_text_icon_setting() {
        if($('.Time-box').css('display')=='block'){
            if($(window).width()<1025){
                $('.Time-title').html('Cài đặt và thông báo');
            } else if($(window).width()>=1025){
             
                if($('.content-TimeLimit').hasClass('mobileActive')){
                    $('.restrict-limit, .Time-limit').css('display','block');
                    if ($('.AddWeb-content').css('display')=='block'){
                        $('.Filter-limit').css('display','none');
                    }else{
                        $('.Filter-limit').css('display','block');
                    }
                    $('.content-TimeLimit').removeClass('mobileActive');
                }
             
                // console.log(123);
                if($('.Time-limit--Time').length >0){
                    $('.Time-title').html('Giới hạn thời gian hàng ngày');
                } else if($('.restrict-limit').length >0){
                    $('.Time-title').html('Hạn chế thời gian');
                } else if($('.Time-limit--game').length >0){
                    $('.Time-title').html('Trò chơi và ứng dụng');
                } else if($('.Filter-limit').length >0){
                    $('.Time-title').html('Bộ lọc web');
                }
            }
        } 
    }
    function change_width() {
            if($('.AddWeb-content').css('display')=='block'){
                $('.content-TimeLimit--TimeLimit, .content-TimeLimit--restrictTime').css('height', $(window).height());
            
            }
          
    }
    function change_more_applist_content() {
        if( $(window).height()<600){
        if($('.more-applist-content').css('display')=='block'){
            $('.content-right--dashboard').css('height','90vh');
        } else{
            $('.content-right--dashboard').css('height','100vh');
        }
    } else {
        $('.content-right--dashboard').css('height','100vh');
    }
    }


    function Hide_sysicon_Desktop() {
    if($('.content-right--dashboard').length>0){
        if($(window).width()>=1025 ){
            if($('.content-right--dashboard').length>0){
                if($('.modal-sys-icon').css('display')=='block'){
                $('.btn-close-dashboard').click();
                }
            } else{
                $('.btn-secondary').click();
            }
            if($('.more-applist-content').css('display')=='block' && $('.swiper-wrapper').css('display')=='flex'){
                 $('.close-button').click();
            }
            if($('.more-applist-content').css('display')=='block' ){
                $('.swiper-slide').css('width','100%'); 
            }
            else{
                $('.swiper-slide').css('width',''); 
            }
            $('.swiper-wrapper').css('transform','none');
     
        }
    } 
}
function Set_Height_Content() {
    if($(window).width()<1025){
        if($('.content-TimeLimit').hasClass('content-TimeLimit--call')){
            // if($(window).width()>=768){
                if($('.Categories').css('display')=='block'){
                    $('.content-TimeLimit').css('height',$(window).height()-68);
                } else if ($('.Categories').css('display')=='none'){
                    if($('.AddWeb').css('display')=='block' && $('.AddWeb-content--call').css('display')=='none'){
                        $('.content-TimeLimit').css('height',$(window).height()-150);
                    }else{
                        $('.content-TimeLimit').css('height',$(window).height());
                    }
                // }
                
            } 
        }    
        else if($('.content-TimeLimit').hasClass('content-TimeLimit--webFilter')){
            $('.content-TimeLimit').css('height',$(window).height()-145);
            // console.log(12);
        }
        else{
            if($('.content-TimeLimit').hasClass('content-TimeLimit--TimeLimit')){
               
                $('.content-TimeLimit').css('overflow','scroll');
                $('.content-TimeLimit').css('padding-bottom','0');
                if($('.Time-box').css('display')=='block'){
                    $('.content-TimeLimit').css('height',$(window).height());
                 
                } else{
                   
                    $('.content-TimeLimit').css('height',$(window).height()-86);
                }
           
            } else if($('.content-TimeLimit').hasClass('content-TimeLimit--location')){
                if($(window).height()<600){
                    $('.content-TimeLimit').css('height',$(window).height()+86);
                } else{
                    $('.content-TimeLimit').css('height',$(window).height());
                }
            }
            else{
                $('.content-TimeLimit').css('height',$(window).height());
      
                
            }
        } 
    } else if($(window).width()>=1025){
        if($('.content-TimeLimit').hasClass('content-TimeLimit--call')){
            $('.content-TimeLimit').css('height',$(window).height() - 68);
          
        }
    
    else if($('.content-TimeLimit').hasClass('content-TimeLimit--webFilter')){
        $('.content-TimeLimit').css('height',$(window).height()-145);
     
    }
    else{
       
                $('.content-TimeLimit').css('height',$(window).height() - 68);
             
     
    }
        
    } 
}
function Hide_button_Addweb(){
    if($(window).width()>=1025){
        if($('.AddWeb-content').css('display')=='block'){
        $('.button-webfilter--outside, .button--call-outside').css('display','none');
    //   console.log(20);
    } else {
        
        if($('.Categories--call').css('display')=='block' ){
            $('.button--call-outside').css('display','none');
            // console.log(20);
        } else{
            $('.button--call-outside').css('display','');
            //  console.log(20);
        }
        $('.button-webfilter--outside').css('display','block');
   
    }
} else {
    if( $('.Time-box').css('display')=='block' || $('.AddWeb-content').css('display')=='block'){
        $('.button-webfilter--outside').css('display','none');
        $('.button--call-outside').css('display','none');
        $('.content-TimeLimit--webFilter').css('height', $(window).height());
     
    } 
}
}
function Hide_text_webfilter_Desktop(){
    if($('.content-TimeLimit--webFilter').length>0){
        
            if($('.AddWeb-content').css('display')=='block'){
                if($(window).width()>=1025){
                $('.content-TimeLimit--webFilter .Time-title').css('display','none');
                $('.Time-box').css('display', 'none');
                $('.AddWeb-title').css('display','block');
                } else{
                    $('.content-TimeLimit--webFilter .Time-title').css('display','block');
                    $('.AddWeb-title').css('display','none');
                    // $('.AddWeb-content--webFilter').css('margin-top','0px');
                }
            //Set height add content
        
            }else{
                // console.log(23);
                // $('.content-TimeLimit--webFilter .Time-title').css('display','none');
                if($(window).width()>=1025){
                $('.content-TimeLimit--webFilter .Time-title').css('display','block');
                }
            }
        
         
    }
}

// Set_ScrollToTop_safari();
function detect_mobile() {
    if( /Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent) ) {
   $('.content-right--YoutubeDetail').css('height','95vh');
} else{
    $('.content-right--YoutubeDetail').css('height','');
}
}
    function Screen_Mobile() {
        if($(window).width()<=1025){
            /*--Hide button when categories show---------------*/
            Hide_button_SelectALl();
            /*-----Hide wnhen setting show-------------*/
            Hide_settingIcon_mobile();
            /* -----------remove Disable when change tab----------*/
            remove_disable_button();
           
            change_width();
            change_more_applist_content();
            // Set_Width_Content();
       
            // Image_Locaion() ;
        }
         /*----Change text icon setting -----------*/
         Change_text_icon_setting();
        Set_Height_Content();
        Hide_sysicon_Desktop();
        Hide_button_Addweb();
        Hide_text_webfilter_Desktop();
        detect_mobile();
        // Set_ScrollToTop_safari();
        // Show_content_Desktop();
    }

    setInterval(Screen_Mobile);
    function change_width_setup_content() {
        if($('.setupRules-content').css('display')=='block'){
            if($(window).width()<1025){
                $('.setupRules-content').css('height',$(window).height()-84);
            } 
        }
      
    }
   setInterval(change_width_setup_content) ;
     /*----------Hide bt of web-filter when categories show---------------*/

  
  
 
     
});