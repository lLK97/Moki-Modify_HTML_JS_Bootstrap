function myFunction(x) {
  if (x.matches) { // If media query matches
    jQuery("#navbars").addClass("offcanvas");
    jQuery(".left-sidebar .navigation-menu").prepend(jQuery(".logo" ));
    jQuery(".left-sidebar").css("visibility","hidden");
    jQuery(".offcanvas-backdrop.show").css("opacity","0.5");
    jQuery(".Time-title").appendTo(".icon-icon .arrow-dashboard a");
    if(jQuery(".board-list .items").length) {
        var swiper = new Swiper('.swiper', {
            slidesPerView: 1,
            // If we need pagination
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
              // Responsive breakpoints
            breakpoints: {
                // when window width is >= 640px
                769: {
                    slidesPerView: 2
                }
            }
        });
    }
  } else {
    jQuery("#navbars").removeClass("offcanvas");
    // jQuery("#navbars .offcanvas-backdrop").remove();
    jQuery(".headerContent .row").prepend(jQuery(".logo" ));
    jQuery(".left-sidebar").css("visibility","visible");
    jQuery(".offcanvas-backdrop.show").css("opacity","0");
    jQuery(".content-TimeLimit > .row").prepend(jQuery(".Time-title"));
    if(jQuery(".board-list .swiper").length) {
        var swiper = new Swiper('.swiper', {
            slidesPerView: 1,
            // If we need pagination
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
              // Responsive breakpoints
            breakpoints: {
                // when window width is >= 640px
                769: {
                    slidesPerView: 2
                }
            }
        });
        swiper.destroy(false, true);
    }
  }
}

var x = window.matchMedia("(max-width: 1025px)");
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes

jQuery(document).ready(function() {
    jQuery('.makeMeList').each(function (index, element) {
        jQuery(this).parent()
            .after()
            .append('<div class="scrollableList"><div class="selectedOption"></div><ul></ul></div>');

        jQuery(element).each(function (idx, elm) {
            jQuery('option', elm).each(function (id, el) {
                var activeClass = el.value === 'allActivities' ? 'active' : '';
                jQuery('.scrollableList ul:last').append('<li class="'+activeClass+'" data-option="'+ el.value +'">' + el.text + '</li>');
            });
            jQuery('.scrollableList ul').hide();
        });
        jQuery('.genderField .scrollableList:last').children('div.selectedOption').text(jQuery(".genderField option:selected").text());
    });

    jQuery('.selectedOption').on('click', function (event) {
        event.stopPropagation();
        jQuery(this).next('ul').slideToggle(200);
        jQuery('.selectedOption').not(this).next('ul').hide();
        if(jQuery(this).text === jQuery('.scrollableList ul li').data('text')) {
            jQuery('.scrollableList ul li').removeClass("active");
            jQuery('.scrollableList ul li[data-text="'+jQuery(this).text+'"]').addClass('active');
        }
    });

    jQuery('body').on('click',function(event) {
        jQuery('.selectedOption').next("ul").fadeOut();
    });

    jQuery('.scrollableList ul li').on('click', function () {
        var selectedLI = jQuery(this).text();
        jQuery(this).parent().prev('.selectedOption').text(selectedLI);
        jQuery(this).parent('ul').hide();
        var displayElement = jQuery(this).data('option');
        if(jQuery(".filter-content").hasClass("active")) {
            jQuery(".filter-content").removeClass("active");
        }
        jQuery("#"+displayElement).addClass("active");
        jQuery('.scrollableList ul li').removeClass("active");
        jQuery(this).addClass("active");
    });

    jQuery('.scrollableList').show();
    jQuery('.makeMeList').hide();

    jQuery(".acc-activities .dropdown .title").on('click', function(){
        jQuery("#activesDropdown").collapse('toggle');
    });

    jQuery(".more-time-action").on("click", function() {
        jQuery(".more-time").show();
        jQuery(".board-list .date-navigation, .board-list .items, .board-item, .icon-sys").hide();
    });

    jQuery(".more-time .close-button").on("click", function() {
        jQuery(".board-list .date-navigation, .board-list .items, .board-item, .icon-sys").show();
        jQuery(".more-time").hide();
    });

    jQuery(".date-navigation ul li").on("click", function() {
        if(jQuery(".date-navigation ul li").hasClass("active")) {
            jQuery(".date-navigation ul li").removeClass("active");
        }
        jQuery(this).addClass("active");
        jQuery(".item-time-content").hide();
        jQuery(".item-time-content."+jQuery(this).find("a").data('item')).show();
    });

    jQuery(".more-time-list ul li").on("click", function() {
        if(jQuery(".more-time-list ul li").hasClass("active")) {
            jQuery(".more-time-list ul li").removeClass("active");
        }
        jQuery(this).addClass("active");
    });

    jQuery(".seeMoreItem").on("click", function(event) {
        jQuery('html, body').animate({scrollTop: $('#more-applist-content').offset().top -100 }, 'slow');
        jQuery(".board-list .items, .board-item, .icon-sys").hide();
        // jQuery(".more-applist-content").append(jQuery(".items .item."+jQuery(this).data('item')+" .item-content")).show();
        var item = jQuery(".items .item."+jQuery(this).data('item'));
        var itemClone = item.first().clone().appendTo(jQuery(".more-applist-content"));
        jQuery(".more-applist-content").append(itemClone).show(function() {
            jQuery("html, body").animate({ scrollTop: 0 }, "slow");
        });
        jQuery(".seeMoreItem").hide();
    });

    jQuery(".more-applist-content .close-button").on("click", function() {
        jQuery(".board-list .items, .seeMoreItem, .board-item, .icon-sys").show();
        jQuery(".more-applist-content .item").remove();
        jQuery(".more-applist-content").hide();
    });

    jQuery('.content-right .items .item').matchHeight({byRow: true});
    var reliabilityNumber = jQuery(".reliability-progress").data("number");
    jQuery(".reliability-progress .arrow-down").css({"right": 'calc(100% - '+reliabilityNumber+'% - 8px)'})
    jQuery('#settingPopup').on('show.bs.modal', function (e) {
        jQuery(".icon-sys").hide();
    });
    jQuery('#settingPopup').on('hide.bs.modal', function (e) {
        jQuery(".icon-sys").show();
    });
    jQuery(".time-used .dropdown-menu li a").on("click", function() {
        var target = jQuery(this).data("target");
        jQuery(target).show();
        setTimeout(function(){
            jQuery(target).hide();
        }, 5000);
    });
    jQuery(".statusModal .btn-close").on("click", function() {
        jQuery(".statusModal").hide();
    });
})

