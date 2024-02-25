// nav
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.getElementById("Nav").style.position = "fixed";
    document.getElementById("Nav").style.boxShadow =
      "0 12px 12px 0 rgb(0 0 0 / 2%)";
    document.getElementById("Nav").style.top = "0";
    document.getElementById("Nav").style.transition = "0.5s";
  } else {
    document.getElementById("Nav").style.position = "relative";
    document.getElementById("Nav").style.transition = "0.5s";
    document.getElementById("Nav").style.boxShadow = "none";
  }
}

// back to top
$(document).ready(function () {
  var btn = $("#backToTop");
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 1000) {
      btn.addClass("show");
    } else {
      btn.removeClass("show");
    }
  });
  btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      "1000"
    );
  });
});

// toggle
(function ($) {
  var toggle = $(".nav-toggle");

  toggle.on("click", function (e) {
    $(this).toggleClass("opened");
  });
})(jQuery);
