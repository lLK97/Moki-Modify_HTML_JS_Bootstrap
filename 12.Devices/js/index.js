function myFunction(x) {
  if (x.matches) { // If media query matches
    jQuery("#navbars").addClass("offcanvas");
    jQuery(".left-sidebar .navigation-menu").prepend(jQuery(".logo" ));
    jQuery(".left-sidebar").css("visibility","hidden");
    jQuery(".offcanvas-backdrop.show").css("opacity","0.5");
  } else {
    jQuery("#navbars").removeClass("offcanvas");
    // jQuery("#navbars .offcanvas-backdrop").remove();
    jQuery(".headerContent .row").prepend(jQuery(".logo" ));
    jQuery(".left-sidebar").css("visibility","visible");
    jQuery(".offcanvas-backdrop.show").css("opacity","0");
  }
}

var x = window.matchMedia("(max-width: 992px)");
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes

jQuery(document).ready(function() {
    jQuery('.makeMeList').each(function (index, element) {
        jQuery(this).parent()
            .after()
            .append('<div class="scrollableList"><div class="selectedOption"></div><ul></ul></div>');

        jQuery(element).each(function (idx, elm) {
            jQuery('option', elm).each(function (id, el) {
                jQuery('.scrollableList ul:last').append('<li data-option="'+el.value+'" data-img="'+el.dataset["img"]+'">' + el.text + '</li>');
            });
            jQuery('.scrollableList ul').hide();
        });
        var buttonSearch = '<button class="button-search"><i class="fas fa-search"></i></button>';
        jQuery('.genderField .scrollableList:last').children('div.selectedOption').html(jQuery(".genderField option:selected").text() + buttonSearch);
    });

    jQuery('.selectedOption').on('click', function () {
        jQuery(this).next('ul').slideToggle(200);
        jQuery('.selectedOption').not(this).next('ul').hide();
    });

    jQuery('.scrollableList ul li').on('click', function () {
        var buttonSearch = '<button class="button-search"><i class="fas fa-search"></i></button>';
        var selectedLI = jQuery(this).text();
        var deviceId = jQuery(this).data('option');
        if ('.formField.searchSelect') {
            jQuery(this).parent().prev('.selectedOption').html(selectedLI + buttonSearch);
        }   else {
            jQuery(this).parent().prev('.selectedOption').text(selectedLI);
        }
        // JQuery(this).css('font-weight', 'bold');
        jQuery(this).parent('ul').hide();
        jQuery(".devices-userguide").hide();
        jQuery('#'+deviceId).show();
        jQuery(".device-img img").attr("src", "images/"+jQuery(this).data("img"));

    });

    jQuery('.scrollableList').show();
    jQuery('.makeMeList').hide();

    jQuery(".dropdown button").on('click', function(){
        jQuery("#activesDropdown").collapse('toggle');
    });
})
