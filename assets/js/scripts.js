function scroll_to(clicked_link, nav_height) {
  let element_class = clicked_link.attr("href").replace("#", ".");
  let scroll_to = 0;
  if (element_class != ".top-content") {
    element_class += "-container";
    scroll_to = $(element_class).offset().top - nav_height;
  }
  if ($(window).scrollTop() != scroll_to) {
    $("html, body")
      .stop()
      .animate({ scrollTop: scroll_to }, 1000);
  }
}

jQuery(document).ready(function() {
  /*
	    Navigation
	*/
  $("a.scroll-link").on("click", function(e) {
    e.preventDefault();
    scroll_to($(this), $("nav").outerHeight());
  });
  // toggle "navbar-no-bg" class
  $(".top-content .text").waypoint(function() {
    $("nav").toggleClass("navbar-no-bg");
  });

  /*
        Wow
    */
  new WOW().init();
});
