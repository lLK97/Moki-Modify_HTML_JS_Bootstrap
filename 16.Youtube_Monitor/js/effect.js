
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
        const IOS= 'IOS';
        const android = 'android';
        var currentday = new Date();
        var dayIndex = currentday.getDay();
        const Number_Tick_Minute = 60;
        const MaxHours = '24';
        const MinHoursToMinute = '00';


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
                            } else if (currenthours == '24') {
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
                                } else if (currenthours == '24') {
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
                            } else if (currenthours == '24') {
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
                                } else if (currenthours == '24') {
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
                            } else if (currenthours == '24') {
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
                                } else if (currenthours == '24') {
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
                            } else if (currenthours == '24') {
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
                                } else if (currenthours == '24') {
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
                            } else if (currenthours == '24') {
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
                                } else if (currenthours == '24') {
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
                            } else if (currenthours == '24') {
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
                                } else if (currenthours == '24') {
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
                            } else if (currenthours == '24') {
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
                                } else if (currenthours == '24') {
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
                    $('.day-item--' + device + ':nth-child(' + (x - 1) + ') div').css('color', $('.savecolor').html());
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
                    ArrowLimitYoutubeAppEnabled();
                }
            }
    
            function HideTimeLimit() {
                $('.limit-day--' + device + ', .limit-cricle--' + device + ', .limit-grbt--' + device).css('display', 'none');
            }
            function TimeLimitToday(hour, minute) {
                if (hour == '00'
                    && minute == '00') {
                    TimeLimitTodayBlock();
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
                }
                else {
                    TimeLimitTodayCurrent(hour, minute);
                }
            }
            function TimeLimitTodayCurrent(hour, minute) {
                $('.limit-today--' + device + ' .text').html(' Giới hạn hôm nay: ' + hour + ' giờ ' + minute + ' phút');
                $('.limit-today--' + device + ' .text').css('color', 'rgba(0,0,0,0.6)');
                $('.limit-today--' + device + ' .text').css('width', '240px');
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
            DayItemDevice.click(function () {
                $(this).children('div').css('color', ColorWhite);
                var day;
                day = $(this).text().replace(/\s/g, '');
                $('.day-active--' + device + ' div').css('color', 'black');
                if (DayItemDevice.hasClass('day-active--' + device)) {
                    if (HoursDevice.html().replace(/\s/g, '') != MaxHours) {
                        $('.SaveStyle--' + device + ' .savecolor').html($('.day-active--' + device).css('background-color'));
                        $('.day-active--' + device + ' div').css('color',  ''+$('.SaveStyle--' + device + ' .savecolor').html().replace(/\s/g, ''));
                        $('.day-active--' + device).css('border',  '1px solid '+$('.SaveStyle--' + device + ' .savecolor').html().replace(/\s/g, '')+'');
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
                    $('.lock--' + device + ' img').attr('src', './images/Block.png');
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
                if ($('.lock--' + device + ' img').attr('src') == './images/Block.png') {
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
                    $('.lock--' + device + ' img').attr('src', './images/Block.png');
                    // Set_DayCurrentUnBlock();
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
            $('.Time-box-arrow img').click(function () {
                HideSetting();
                $('.Time-box').css('visibility', 'hidden');
            })
            $('.clock--' + device).click(function () {
    
                //    Set_DayCurrentUnBlock();
                $('.text-lock--' + device).html('Chặn');
                $('.lock--' + device + ' img').attr('src', './images/Block.png');
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
                return is_dragging = true;
            });
            $(document).on("mousedown touchstart", '.cricle-texttime--' + device, function (e) {
                return is_dragging = false;
            });
            $(document).on("mousedown touchstart", '.space--' + device, function (e) {
                return is_dragging = false;
            });
            $(document).on("touchend", '.cricle-tick--' + device, function (e) {
                return is_dragging = false;
            });
            $(document).on("mouseup", function (e) {
                return is_dragging = false;
            });
            $(document).on("mousemove touchmove mousedown touchstart", function (e) {
                if (is_dragging) {
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
                        $('.lock--' + device + ' img').attr('src', './images/Block.png');
                        $('.item--4--' + device).css("opacity", "0");
                        $('.item--1--' + device).css("opacity", "1");
                        $('.item--2--' + device + ',.item--1--' + device).css("background-color", Gray);
                        $('.item--4--' + device + ',.item--3--' + device).css("background-color", BlueGray);
                        $('.item--5--' + device).css({
                            'opacity': '0'
                        });
                    } else if (angle > 180) {
                        $('.text-lock--' + device).html('Chặn');
                        $('.lock--' + device + ' img').attr('src', './images/Block.png');
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
                        $('.lock--' + device + ' img').attr('src', './images/Block.png');
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
                        $('.lock--' + device + ' img').attr('src', './images/Block.png');
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
            
            Set_Day_OfWeekTiTle();
            HideTimeLimit();
            $('.access-App--' + device + ' .btn-switch-button').click(function () {
                Access_DisabledYouTubeApp();
            });
            $('.limit-today--' + device).click(function () {
                Active_ArrowLimitYoutubeApp();
            });
            setInterval(function () {
                Set_Day_OfWeekTiTle()
            });
        }
        
LimitApp(android);
LimitApp(IOS);
























        
        //Variable
        // Function
        function SetContentReponsive() {
            var height = $(window).height();
            var width = $(window).width();
           if((height==812 && width==375) || (height==823 && width==411)){
                $('.content-TimeLimit').css('height',height/1.18-60);
            } 
            else if((height==731 && width==411)
            || (height==736 && width==414)){
                $('.content-TimeLimit').css('height',height/1.18);
            }
            else if(height==1024 && width==768){
                $('.content-TimeLimit').css('height',height/1.18-250);
            }else if(height==1366 && width==1024){
                $('.content-TimeLimit').css('height',height/1.18-500);
            }
            else if(height>=668 && width<500){
                $('.content-TimeLimit').css('height',height/1.18 +40);
            } else if(height<668 && width<500){
                $('.content-TimeLimit').css('height',height/1.18-10);
            }
            else if(height<400 && width>800){
                $('.content-TimeLimit').css('height',height/1.18-10);
            }
            else if(height>=400 && height<=720 && width>800){
                $('.content-TimeLimit').css('height',height/1.18 +30);
            }
            else if(height>720 && width>800){
                $('.content-TimeLimit').css('height',height/1.18 +50);
            }
            
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

        function Add_Tick() {
            for (var i = 1; i <= Number_Tick_Minute; i++) {
                $('.group-tick').append('<div class="tick-radius" data-minute=' + i + '><div class="tickmark"></div></div>');
            }
        }

        function HideDashboard(e) {
            if (!$('.dashboard-content').is(e.target) &&
                ($('.dashboard-content').has(e.target).length === 0) &&
                !$('.headerContent').is(e.target)) {
                    $('.dashboard-content').removeClass('ac-dashboard');
                    $('.icon-icon').css('display', '');
                    $('.content-TimeLimit').css('filter', '');
                    $('.content-TimeLimit').css('pointer-events', '');
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

        function ShowDashBoard() {
            $('.dashboard-content').addClass('ac-dashboard');
            $('.icon-icon').css('display', 'none');
            $('.content-TimeLimit').css('filter', 'blur(1px)');
            $('.content-TimeLimit').css('pointer-events', 'none');
        }

     

    
        function ShowSettingMaxWidth(){
          
            if($(window).width() < 830){
                ActiveHideDashboard();
                $(document).mouseup(e => {
                  Active1HideDashboard(e);
                })
            }
        }
        function AccessYouTubeWeb() {
            if($('.ac-youtubeWeb').prop('checked')==false){
                $('.access').attr('data-bs-target', '#Notetime');;
                $('.access').attr('data-bs-toggle','modal');
            }
        }   
     

       

        // Add
        Add_Tick();
        $('.tick-radius').each(function () {
            var min = $(this).data('minute');
            var degrees = min / 60 * 360;
            $(this).css('transform', 'rotate(' + degrees + 'deg)');
            if (min % 5 == 0) $(this).addClass("bold");
        });
        setInterval(ShowSettingMaxWidth, 100);
        setInterval(function () {
            AccessYouTubeWeb();
            SetContentReponsive();
        });
        //Action 

     



        $('.access').click(function () {
            if($('.ac-youtubeWeb').prop('checked')==true){
               $('.ac-youtubeWeb').prop('checked', false);
               $('.access-Web .label').css('opacity','0.5');
           }
       })
       $('.btn-confirm').click(function () {
           if($('.ac-youtubeWeb').prop('checked')==false){
               $('.access').removeAttr('data-bs-target');
               $('.access').removeAttr('data-bs-toggle');
              $('.ac-youtubeWeb').prop('checked', true);
              $('.access-Web .label').css('opacity','1');
           }
       })
       $(".acc-activities .dropdown .title").click(function () {
           Active_Arrow_Dashboard();
       })
      /*Show Hide Limit Time App*/



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
   
 

       $(document).mouseup(e => {
           HideDashboard(e);
       })

       //////Effect Dashboard

       $('.arrow-dashboard').click(function () {
           ShowDashBoard();
       })
  



       $(document).mouseup(e => {
           if (!$('.dashboard-content').is(e.target) &&
               ($('.dashboard-content').has(e.target).length === 0) &&
               !$('.headerContent').is(e.target)) {
                   $('.dashboard-content').removeClass('ac-dashboard');
                   $('.icon-icon').css('display', '');
                   $('.content-TimeLimit').css('filter', '');
                   $('.content-TimeLimit').css('pointer-events', '');
      
           }
       })



        /*Show Hide Limit Time App*/
       

    






      

    
    });

