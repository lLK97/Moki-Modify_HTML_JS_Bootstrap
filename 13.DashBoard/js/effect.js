$(document).ready(function () {
    $(document).ready(function () {
        //Variable
        const ColorWhite = 'white';
        const DropDashBoard_Ti = '.acc-activities .dropdown .title';
        const DropDashBoard_Ele = '.acc-activities li div ul li';
        const DashBoard_Ele = '.acc-activities li';
        const AcColor = 'active__color';
        const BlueGray = '#3b465a';
        const Gray = '#b0b4bd';
        const Red = '#cc0001';
        const ColorMokinet = '#2aabcb';
        const Maxdeg = 'rotate(360deg)';
        const rotate0 = 'rotate(0deg)';
        const TimeTransition = '0.5s all ease-in-out';
        var minute = 0;
        var hours = 0;
        var is_dragging;
        var angle, center_x, center_y, circle, delta_x, delta_y, pos_x, pos_y, touch;
        var Hours = $('.hours .number');
        var Minute = $('.minute .number');
        var DayItem = $('.day-item');
        var TextDay = $('.day');
        const Number_Tick_Minute = 60;
        const MaxHours = '24';
        const MinHoursToMinute = '00';
        for (var i = 2; i <= 8; i++) {
            this["textday" + i] = '';
            this["hours" + i] = 0;
            this["minute" + i] = 0;
            this["item1tbg" + i] = '';
            this["item2tbg" + i] = '';
            this["item3tbg" + i] = '';
            this["item4tbg" + i] = '';
            this["item5tbg" + i] = '';
            this["item6tbg" + i] = '';
            this["crimobgangle" + i] = 0;
            this['it23angle' + i] = 0;
            this['item1op' + i] = 0;
            this['item4op' + i] = 0;
            this['item5op' + i] = 0;
            this['colorDay' + i] = '';
            this['text' + i] = '';
            this['touch' + i];
            this['lock' + i];
            this['clock' + i];
            $('.SaveStyle').append($('<div>').html('').addClass('touchsave' + i));
            $('.SaveStyle').append($('<div>').html('').addClass('locksave' + i));
            $('.SaveStyle').append($('<div>').html('').addClass('clocksave' + i));
        }

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


        function ChangeColor_Status(x) {
            if (($('.touchsave' + x).html() == 'true' + x) || ($('.locksave' + x).html() == 'true' + x) || ($('.clocksave' + x).html() == 'true' + x)) {
                $('.day-item:nth-child(' + (x - 1) + ') div').css('color', $('.savecolor').html());
                $('.day-item:nth-child(' + (x - 1) + ')').css('border', '1px solid '+$('.savecolor').html()+'');
                if($('.savecolor').html().replace(/\s/g, '')=='black'){
                    $('.day-item:nth-child(' + (x - 1) + ')').css('border', '1px solid #ececec');
                } else{
                    $('.day-item:nth-child(' + (x - 1) + ')').css('border', '1px solid '+$('.savecolor').html()+'');
                }
            }
        }


        function Detect_Status(y) {
            $('.cricle-tick').on('click mouseup touchstart touchmove', function () {
                this['touch' + y] = 'true' + y;
                $('.touchsave' + y).html('true' + y);
            })
            $('.lock').on('mouseup touchstart', function () {
                this['lock' + y] = 'true' + y;
                $('.locksave' + y).html('true' + y);
            })

            $('.clock').on('mouseup touchstart', function () {
                this['clock' + y] = 'true' + y;
                $('.clocksave' + y).html('true' + y);
            })


        }


        function SaveStatus(i, textday, colorDay, text, hours, minute, item1tbg, itemb2bg, itemb3bg, itemb4bg, itemb5bg, itemb6bg, crimobgangle, it23angle, op1, op4, op5) {
            this["textday" + i] = textday;
            this['colorDay' + i] = colorDay;
            this['text' + i] = text;
            this["hours" + i] = hours;
            this["minute" + i] = minute;
            this["item1tbg" + i] = item1tbg;
            this["item2tbg" + i] = itemb2bg;
            this["item3tbg" + i] = itemb3bg;
            this["item4tbg" + i] = itemb4bg;
            this["item5tbg" + i] = itemb5bg;
            this["item6tbg" + i] = itemb6bg;
            this["crimobgangle" + i] = crimobgangle;
            this['it23angle' + i] = it23angle;
            this['item1op' + i] = op1;
            this['item4op' + i] = op4;
            this['item5op' + i] = op5;


        }



        function Change_Clock(i) {
            $('#textday').text(this["textday" + i]);
            Hours.html(this["hours" + i]);
            Minute.html(this["minute" + i]);
            $('.day-active').css('background-color', this['colorDay' + i]);
            $('.day-active div').css('color', this['text' + i]);
            $('.item--1').css('background-color', this["item1tbg" + i]);
            $('.item--2').css('background-color', this["item2tbg" + i]);
            $('.item--3').css('background-color', this["item3tbg" + i]);
            $('.item--4').css('background-color', this["item4tbg" + i]);
            $('.item--5').css('background-color', this["item5tbg" + i]);
            $('.item--6').css('background-color', this["item6tbg" + i]);
            $(".cricle-mouse-bg").css("transform", this["crimobgangle" + i]);
            $('.it--23').css("transform", this['it23angle' + i]);
            $('.item--1').css("opacity", this['item1op' + i]);
            $('.item--4').css("opacity", this['item4op' + i]);
            $('.item--5').css("opacity", this['item5op' + i]);
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
        }
        function Change() {
            $('.dott').change(function () {
                $('.content-TimeLimit').css({
                    'touch-action': 'none',
                    'height': 'calc(' + $(window).height() + ')-18rem',
                    'overflow': 'hidden'
                });
                window.scroll(0,1);
            })
                
          
        }
        // Function
        setInterval(Change(),50);
        // Add
        Add_Tick();
        $('.tick-radius').each(function () {
            var min = $(this).data('minute');
            var degrees = min / 60 * 360;
            $(this).css('transform', 'rotate(' + degrees + 'deg)');
            if (min % 5 == 0) $(this).addClass("bold");
        });
        setInterval(ShowSettingMaxWidth, 100);


        //Action 

        Detect_Status(2);
        ChangeColor_Status(2);

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

        $('.arrow-dashboard').click(function () {
            ShowDashboard();
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
            ShowDashBoard();
        })
        $('.setting-dashboard').click(function () {
            ShowSetting();
        })
        $('.Time-box-arrow img').click(function () {
            HideArrow();
        })

        DayItem.click(function () {
            $(this).children('div').css('color', ColorWhite);
            var day;
            day = $(this).text().replace(/\s/g, '');
            $('.day-active div').css('color',  'black');
            if (DayItem.hasClass('day-active')) {
                if (Hours.html().replace(/\s/g, '') != MaxHours) {
                    $('.savecolor').html($('.day-active').css('background-color'));
                    $('.day-active div').css('color',  ''+$('.savecolor').html().replace(/\s/g, ''));
                    $('.day-active').css('border',  '1px solid '+$('.savecolor').html().replace(/\s/g, '')+'');
                } else if (Hours.html().replace(/\s/g, '') == MaxHours) {
                    $('.savecolor').html('black');
                }
                $('.position').html($('.day-active div').html());
                DayItem.removeClass('day-active');
                DayItem.css('background-color', '');
                $(this).addClass('day-active');
                $(this).children('div').css('color', ColorWhite);

            } else {
                $(this).addClass('day-active');
            }


            $('.it--23').css({
                'transform': Maxdeg,
                'transition': TimeTransition
            });
            $('.cricle-mouse-bg').css({
                'transform': Maxdeg,
                'transition': TimeTransition
            });



            // $('.item--1').css({'opacity':'0'});
            $('.item--5, .item--1, .item--2, .item--3').css({
                'background-color': BlueGray
            });
            $('.day-active').css("background-color", ColorMokinet);

            setTimeout("$('.cricle-mouse-bg').css( 'transition', '')", 500);
            setTimeout("$('.it--23').css({'transition': ''})", 500);
            Hours.html(MaxHours);
            Minute.html(MinHoursToMinute);




            if (DayItem.hasClass('day-active')) {
                var d = $('.day-active').text().replace(/\s/g, '');
                for (var i = 2; i <= 7; i++) {
                    if (d == 'T' + i) {
                        Detect_Status(i);
                    }
                }
                if (d == 'CN') {
                    Detect_Status(8);
                }
            }
            // console.log( this.touch2);
            var pos = $('.position').text().replace(/\s/g, '');
            for (var i = 2; i <= 7; i++) {
                if (pos == 'T' + i) {
                    ChangeColor_Status(i);
                }
            }
            if ($('.position').text().replace(/\s/g, '') == 'CN') {
                ChangeColor_Status(8);
            }




            var sett = $('.setting').html().replace(/\s/g, '');
            for (var i = 2; i <= 7; i++) {
                if (sett == 'T' + i && pos == 'T' + i) {
                    $('.day-item:nth-child(' + (i - 1) + ') div').css('color', 'black');
                }
            }
            if (sett == 'CN' && pos == 'CN') {
                $('.day-item:last-child div').css('color', 'black');
            }



            if (day == 'T2') {
                Change_Clock(2);
                TextDay.html('Thứ hai');
            } else if (day == 'T3') {
                Change_Clock(3);
                TextDay.html('Thứ ba');

            } else if (day == 'T4') {
                Change_Clock(4);
                TextDay.html('Thứ tư');

            } else if (day == 'T5') {
                Change_Clock(5);
                TextDay.html('Thứ năm');

            } else if (day == 'T6') {
                Change_Clock(6);
                TextDay.html('Thứ sáu');

            } else if (day == 'T7') {
                Change_Clock(7);
                TextDay.html('Thứ bảy');

            } else if (day == 'CN') {
                Change_Clock(8);
                TextDay.html('Chủ nhật');

            }
            if (Hours.html() != MinHoursToMinute) {
                $('.text-clock').html('Chặn');
                $('.lock img').attr('src', './images/Block.png');
                if (Number(Hours.html()) <= 12) {
                    $('.item--1').css('background-color', 'rgb(176, 180, 189)');
                } else if (Number(Hours.html()) > 12) {
                    $('.item--1').css('opacity', '0');
                }
            } else if (Hours.text().replace(/\s/g, '') == MinHoursToMinute) {
                $('.text-clock').html('Bỏ Chặn');
                $('.lock img').attr('src', './images/UnBlock.png');

            }

        });



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


        $('.lock').click(function () {

            var d = $('.day-active').text().replace(/\s/g, '');
            for (var i = 2; i <= 7; i++) {
                if (d == 'T' + i) {
                    this['lock' + i] = 'true' + i;
                    $('.locksave' + i).html('true' + i);
                }
            }
            if (d == 'CN') {
                this['lock' + i] = 'true' + i;
                $('.locksave' + i).html('true' + i);
            }
            if ($('.lock img').attr('src') == './images/Block.png') {
                $('.text-clock').html('Bỏ Chặn');
                $('.lock img').attr('src', './images/UnBlock.png');
                $('.cricle-mouse-bg').css({
                    'transform': 'rotate(0deg)',
                    'transition': TimeTransition
                });

                $('.it--23').css({
                    'transform': 'rotate(0deg)',
                    'transition': TimeTransition
                });
                Hours.html(MinHoursToMinute);
                Minute.html(MinHoursToMinute);
                if (angle > 180) {
                    $('.it--15').css({
                        'transform': 'rotate(-180deg)',
                        'transition': TimeTransition
                    });

                    setTimeout("$('.it--23').css({'transition': '', 'transform': 'rotate(0deg)'})", 500);

                }
                $('.item--5, .item--1, .item--2, .item--3').css({
                    'background-color': Red,
                    'transition': TimeTransition
                });
                $('.item--1').css("opacity", "1");
                $('.day-active').css("background-color", Red);
                angle = 0;
                if (DayItem.hasClass('day-active')) {
                    var ContentChange_lock = [
                        $('.day-active').css('background-color'),
                        $('.day-active div').css('color'),
                        MinHoursToMinute,
                        MinHoursToMinute,
                        Red,
                        Red,
                        Red,
                        $('.item--4').css('background-color'),
                        Red,
                        $('.item--6').css('background-color'),
                        rotate0,
                        $('.it--23').css("transform"),
                        $('.item--1').css("opacity"),
                        $('.item--4').css("opacity"),
                        $('.item--5').css("opacity")
                    ];
                    if ($('.day-active div').html() == 'T2') {
                        ContentChange_lock.unshift(2, 'Thứ hai');
                        SaveStatus(...ContentChange_lock);
                    } else if ($('.day-active div').html() == 'T3') {
                        ContentChange_lock.unshift(3, 'Thứ ba');
                        SaveStatus(...ContentChange_lock);
                    } else if ($('.day-active div').html() == 'T4') {
                        ContentChange_lock.unshift(4, 'Thứ tư');
                        SaveStatus(...ContentChange_lock);
                    } else if ($('.day-active div').html() == 'T5') {
                        ContentChange_lock.unshift(5, 'Thứ năm');
                        SaveStatus(...ContentChange_lock);
                    } else if ($('.day-active div').html() == 'T6') {
                        ContentChange_lock.unshift(6, 'Thứ sáu');
                        SaveStatus(...ContentChange_lock);
                    } else if ($('.day-active div').html() == 'T7') {
                        ContentChange_lock.unshift(7, 'Thứ bảy');
                        SaveStatus(...ContentChange_lock);
                    } else if ($('.day-active div').html() == 'CN') {
                        ContentChange_lock.unshift(8, 'Chủ nhật');
                        SaveStatus(...ContentChange_lock);
                    }
                }
            } else {

                $('.text-clock').html('Chặn');
                $('.lock img').attr('src', './images/Block.png');
                $('.cricle-mouse-bg').css({
                    'transform': Maxdeg,
                    'transition': TimeTransition
                });
                Hours.html(MaxHours);
                Minute.html(MinHoursToMinute);
                $('.it--23').css({
                    'transform': Maxdeg,
                    'transition': TimeTransition
                });
                $('.item--1').css('background-color', BlueGray);
                $('.item--1').css({
                    'opacity': '0'
                });
                $('.item--5, .item--1,.item--2, .item--3').css({
                    'background-color': BlueGray,
                    'transition': TimeTransition
                });
                $('.day-active').css("background-color", ColorMokinet);
                angle = 360;
                var rotate360 = Maxdeg;
                if (DayItem.hasClass('day-active')) {
                    var ContentChange_lock = [
                        $('.day-active').css('background-color'),
                        $('.day-active div').css('color'), MaxHours,
                        MinHoursToMinute, BlueGray, BlueGray,
                        BlueGray, $('.item--4').css('background-color'),
                        BlueGray, $('.item--6').css('background-color'),
                        rotate360, $('.it--23').css("transform"),
                        $('.item--1').css("opacity"), $('.item--4').css("opacity"), $('.item--5').css("opacity")
                    ];
                    if ($('.day-active div').html() == 'T2') {
                        ContentChange_lock.unshift(2, 'Thứ hai');
                        SaveStatus(...ContentChange_lock);
                    } else if ($('.day-active div').html() == 'T3') {
                        ContentChange_lock.unshift(3, 'Thứ ba');
                        SaveStatus(...ContentChange_lock);
                    } else if ($('.day-active div').html() == 'T4') {
                        ContentChange_lock.unshift(4, 'Thứ tư');
                        SaveStatus(...ContentChange_lock);
                    } else if ($('.day-active div').html() == 'T5') {
                        ContentChange_lock.unshift(5, 'Thứ năm');
                        SaveStatus(...ContentChange_lock);
                    } else if ($('.day-active div').html() == 'T6') {
                        ContentChange_lock.unshift(6, 'Thứ sáu');
                        SaveStatus(...ContentChange_lock);
                    } else if ($('.day-active div').html() == 'T7') {
                        ContentChange_lock.unshift(7, 'Thứ bảy');
                        SaveStatus(...ContentChange_lock);
                    } else if ($('.day-active div').html() == 'CN') {
                        ContentChange_lock.unshift(8, 'Chủ nhật');
                        SaveStatus(...ContentChange_lock);
                    }
                }



                // setTimeout("$('.it--15').css({'transition': '', 'transform': 'rotate(0deg)'})",500);
            }
            setTimeout("$('.item--1').css({'transition': ''})", 2000);
            setTimeout(function () {
                $('.cricle-mouse-bg').css('transition', '');
                $('.item--5, item--1, .item--2, .item--3').css({
                    'transition': ''
                });
                $('.it--23').css({
                    'transition': '',
                    'transform': 'rotate(0deg)'
                });
                $('.it--15').css({
                    'transition': '',
                    'transform': 'rotate(0deg)'
                });
            }, 500);
        })
  


        $('.clock').click(function () {
            ;
            $('.text-clock').html('Chặn');
            $('.lock img').attr('src', './images/Block.png');
            var d = $('.day-active').text().replace(/\s/g, '');
            for (var i = 2; i <= 7; i++) {
                if (d == 'T' + i) {
                    this['clock' + i] = 'true' + i;
                    $('.clocksave' + i).html('true' + i);
                }
            }
            if (d == 'CN') {
                this['clock' + i] = 'true' + i;
                $('.clocksave' + i).html('true' + i);
            }

            $('.cricle-mouse-bg').css({
                'transform': Maxdeg,
                'transition': TimeTransition
            });
            Hours.html(MaxHours);
            Minute.html(MinHoursToMinute);
            $('.it--23').css({
                'transform': Maxdeg,
                'transition': TimeTransition
            });

            $('.item--1').css({
                'opacity': '0'
            });
            $('.item--5, .item--1, .item--2, .item--3').css({
                'background-color': BlueGray,
                'transition': TimeTransition
            });
            $('.day-active').css("background-color", ColorMokinet);
            angle = 360;

            if (DayItem.hasClass('day-active')) {
                var ContentChange_lock = [$('.day-active').css('background-color'),
                $('.day-active div').css('color'), MaxHours,
                    MinHoursToMinute, BlueGray, BlueGray,
                    BlueGray, $('.item--4').css('background-color'),
                    BlueGray, $('.item--6').css('background-color'),
                    Maxdeg, Maxdeg,
                $('.item--1').css("opacity"), $('.item--4').css("opacity"), $('.item--5').css("opacity")
                ]
                if ($('.day-active div').html() == 'T2') {
                    ContentChange_lock.unshift(2, 'Thứ hai');
                    SaveStatus(...ContentChange_lock);
                } else if ($('.day-active div').html() == 'T3') {
                    ContentChange_lock.unshift(3, 'Thứ ba');
                    SaveStatus(...ContentChange_lock);
                } else if ($('.day-active div').html() == 'T4') {
                    ContentChange_lock.unshift(4, 'Thứ tư');
                    SaveStatus(...ContentChange_lock);
                } else if ($('.day-active div').html() == 'T5') {
                    ContentChange_lock.unshift(5, 'Thứ năm');
                    SaveStatus(...ContentChange_lock);
                } else if ($('.day-active div').html() == 'T6') {
                    ContentChange_lock.unshift(6, 'Thứ sáu');
                    SaveStatus(...ContentChange_lock);
                } else if ($('.day-active div').html() == 'T7') {
                    ContentChange_lock.unshift(7, 'Thứ bảy');
                    SaveStatus(...ContentChange_lock);
                } else if ($('.day-active div').html() == 'CN') {
                    ContentChange_lock.unshift(8, 'Chủ nhật');
                    SaveStatus(...ContentChange_lock);
                }
            }
            setTimeout("$('.item--1').css({'transition': ''})", 2000);
            setTimeout(function () {
                $('.cricle-mouse-bg').css('transition', '');
                $('.item--5, item--1, .item--2, .item--3').css({
                    'transition': ''
                });
                $('.it--23').css({
                    'transition': ''
                });
            }, 500);
        })


        ////slider cricle
        var minute = 0;
        var hours = 0;
        var is_dragging;

        //   is_dragging ;
        $(".cricle-texttime").unbind("click");
        var angle, center_x, center_y, circle, delta_x, delta_y, pos_x, pos_y, touch;
        $(document).on("mousedown touchstart", '.cricle-tick', function (e) {
        
          
            return is_dragging = true;
        });
        $(document).on("mousedown touchstart", '.cricle-texttime', function (e) {
        
            return is_dragging = false;
        });
        $(document).on("mousedown touchstart", '.space', function (e) {
        
            return is_dragging = false;
        });
        $(document).on("touchend", '.cricle-tick', function (e) {
            return is_dragging = false;
        });
        $(document).on("mouseup", function (e) {
            return is_dragging = false;
        });

        $(document).on("touchend mouseup mouseover", function (e) {
        
        });
        return $(document).on("mousemove touchmove mousedown touchstart", function (e) {
            if (is_dragging) {
               
                circle = $(".mouse-tick");
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
                $(".cricle-mouse-bg").css("transform", "rotate(" + angle + "deg)");
                $('.it--23').css("transform", "rotate(" + angle + "deg)");
                if (angle < 180 && angle > 3.75) {
                    $('.text-clock').html('Chặn');
                    $('.lock img').attr('src', './images/Block.png');
                    $('.item--4').css("opacity", "0");
                    $('.item--1').css("opacity", "1");
                    $('.item--2,.item--1').css("background-color", Gray);
                    $('.item--4,.item--3').css("background-color", BlueGray);
                    $('.item--5').css({
                        'opacity': '0'
                    });
                } else if (angle > 180) {
                    $('.text-clock').html('Chặn');
                    $('.lock img').attr('src', './images/Block.png');
                    $('.item--4').css("opacity", "1");
                    $('.item--1').css("opacity", "0");
                    $('.item--3,.item--4').css("background-color", BlueGray);
                    $('.item--2').css("background-color", Gray);
                    $('.item--5').css({
                        'background-color': BlueGray,
                        'opacity': '1'
                    });

                } else if (angle < 3.75 && angle >= 0) {
                    $('.item--4,.item--3,.item--2,.item--1,.item--5,.day-active').css("background-color", Red);
                    $('.text-clock').html('Bỏ Chặn');
                    $('.lock img').attr('src', './images/UnBlock.png');
                }
                if (angle == 0) {
                    $('.text-clock').html('Bỏ Chặn');
                    $('.lock img').attr('src', './images/UnBlock.png');
                    $('.item--5,.item--1,.day-active').css({
                        'background-color': Red
                    });

                    $('.item--1').css("opacity", "0");
                }

                if (angle >= 3.75 && angle < 360) {
                    $('.text-clock').html('Chặn');
                    $('.lock img').attr('src', './images/Block.png');
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
                    $('.day-active').css("background-color", ColorMokinet);

                } else if (angle == 360) {
                    $('.day-active').css("background-color", ColorMokinet);
                    $('.item--4,.item--3,.item--2,.item--1,.item--5').css("background-color", BlueGray);

                    $('.text-clock').html('Chặn');
                    $('.lock img').attr('src', './images/Block.png');
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
                    Hours.html('0' + hours);
                    tamgio = Hours.html().replace(/\s/g, '');
                } else {
                    Hours.html(hours);
                    tamgio = Hours.html().replace(/\s/g, '');
                }
                if (minute < 10) {
                    Minute.html('0' + minute);
                    tamminute = Minute.html().replace(/\s/g, '');
                } else {
                    Minute.html(minute);
                    tamminute = Minute.html().replace(/\s/g, '');
                }



                if (DayItem.hasClass('day-active')) {
                    var ContentChange_lock = [$('.day-active').css('background-color'),
                    $('.day-active div').css('color'), tamgio,
                        tamminute, $('.item--1').css('background-color'), $('.item--2').css('background-color'),
                    $('.item--3').css('background-color'), $('.item--4').css('background-color'),
                    $('.item--5').css('background-color'), $('.item--6').css('background-color'),
                    $(".cricle-mouse-bg").css("transform"), $('.it--23').css("transform"),
                    $('.item--1').css("opacity"), $('.item--4').css("opacity"), $('.item--5').css("opacity")
                    ];
                    if ($('.day-active div').html() == 'T2') {
                        ContentChange_lock.unshift(2, 'Thứ hai');
                        SaveStatus(...ContentChange_lock);
                    } else if ($('.day-active div').html() == 'T3') {
                        ContentChange_lock.unshift(3, 'Thứ ba');
                        SaveStatus(...ContentChange_lock);
                    } else if ($('.day-active div').html() == 'T4') {
                        ContentChange_lock.unshift(4, 'Thứ tư');
                        SaveStatus(...ContentChange_lock);
                    } else if ($('.day-active div').html() == 'T5') {
                        ContentChange_lock.unshift(5, 'Thứ năm');
                        SaveStatus(...ContentChange_lock);
                    } else if ($('.day-active div').html() == 'T6') {
                        ContentChange_lock.unshift(6, 'Thứ sáu');
                        SaveStatus(...ContentChange_lock);
                    } else if ($('.day-active div').html() == 'T7') {
                        ContentChange_lock.unshift(7, 'Thứ bảy');
                        SaveStatus(...ContentChange_lock);
                    } else if ($('.day-active div').html() == 'CN') {
                        ContentChange_lock.unshift(8, 'Chủ nhật');
                        SaveStatus(...ContentChange_lock);
                    }
                }




            }


        });


    });

});