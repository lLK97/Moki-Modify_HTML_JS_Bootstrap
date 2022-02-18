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