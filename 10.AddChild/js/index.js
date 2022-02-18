function myFunction(x) {
    if (x.matches) { // If media query matches
        jQuery("#navbars").addClass("offcanvas");
        jQuery(".left-sidebar .navigation-menu").prepend(jQuery(".logo"));
        jQuery(".left-sidebar").css("visibility", "hidden");
        jQuery(".offcanvas-backdrop.show").css("opacity", "0.5");
    } else {
        jQuery("#navbars").removeClass("offcanvas");
        // jQuery("#navbars .offcanvas-backdrop").remove();
        jQuery(".headerContent .row").prepend(jQuery(".logo"));
        jQuery(".left-sidebar").css("visibility", "visible");
        jQuery(".offcanvas-backdrop.show").css("opacity", "0");
    }
}

var x = window.matchMedia("(max-width: 992px)");
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes

jQuery(document).ready(function() {
    jQuery('.makeMeList').each(function(index, element) {
        jQuery(this).parent()
            .after()
            .append('<div class="scrollableList"><div class="selectedOption" type="selected"></div><ul></ul></div>');

        jQuery(element).each(function(idx, elm) {
            jQuery('option', elm).each(function(id, el) {
                jQuery('.scrollableList ul:last').append('<li>' + el.text + '</li>');
            });
            jQuery('.scrollableList ul').hide();
        });
        jQuery('.genderField .scrollableList:last').children('div.selectedOption').text(jQuery(".genderField option:selected").text());
    });

    jQuery('.selectedOption').on('click', function() {
        jQuery(this).next('ul').slideToggle(200);
        jQuery('.selectedOption').not(this).next('ul').hide();
    });

    jQuery('.scrollableList ul li').on('click', function() {
        var selectedLI = jQuery(this).text();
        jQuery(this).parent().prev('.selectedOption').text(selectedLI);
        jQuery(this).parent('ul').hide();
    });

    jQuery('.scrollableList').show();
    jQuery('.makeMeList').hide();
})