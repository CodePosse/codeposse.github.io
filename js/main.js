jQuery(document).ready(function($) {
  "use strict";

  /* ---------------------------------------------------------------------- */
  /*	------------------------------- Loading ----------------------------- */
  /* ---------------------------------------------------------------------- */

  /*Page Preloading*/
  $(window).load(function() {
    $("#spinner").fadeOut(100);
    $("#preloader")
      .delay(100)
      .fadeOut("slow");
    $(".wrapper").fadeIn(200);
    $("#customize-style").fadeIn(200);
  });

  /* ---------------------------------------------------------------------- */
  /* ------------------------------- Taps profile ------------------------- */
  /* ---------------------------------------------------------------------- */

  $(".collapse_tabs").click(function() {
    if ($(this).hasClass("collapsed")) {
      $(this)
        .find("i.glyphicon")
        .removeClass("glyphicon-chevron-down")
        .addClass("glyphicon-chevron-up");
    } else {
      $(this)
        .find("i.glyphicon")
        .removeClass("glyphicon-chevron-up")
        .addClass("glyphicon-chevron-down");
    }
  });

  /* ---------------------------------------------------------------------- */
  /* -------------------------- easyResponsiveTabs ------------------------ */
  /* ---------------------------------------------------------------------- */

  $("#verticalTab").easyResponsiveTabs({
    type: "vertical",
    width: "auto",
    fit: true
  });

  $("h2.resp-accordion").click(function() {
    $(this)
      .find(".icon_menu")
      .addClass("icon_menu_active");
    $("h2.resp-accordion")
      .not(this)
      .find(".icon_menu")
      .removeClass("icon_menu_active");

    /*	Scroll To */
    $("html, body").animate(
      { scrollTop: $("h2.resp-accordion").offset().top - 50 },
      600
    );
  });

  $(".resp-tabs-list li").click(function() {
    $(this)
      .find(".icon_menu")
      .addClass("icon_menu_active");
    $(".resp-tabs-list li")
      .not(this)
      .find(".icon_menu")
      .removeClass("icon_menu_active");
  });

  $(".resp-tabs-list li").hover(
    function() {
      $(this)
        .find(".icon_menu")
        .addClass("icon_menu_hover");
    },
    function() {
      $(this)
        .find(".icon_menu")
        .removeClass("icon_menu_hover");
    }
  );

  $("h2.resp-accordion").hover(
    function() {
      $(this)
        .find(".icon_menu")
        .addClass("icon_menu_hover");
    },
    function() {
      $(this)
        .find(".icon_menu")
        .removeClass("icon_menu_hover");
    }
  );

  /* ---------------------------------------------------------------------- */
  /* --------------------------- Scroll tabs ------------------------------ */
  /* ---------------------------------------------------------------------- */

  $(".content_2").mCustomScrollbar({
    theme: "dark-2",
    contentTouchScroll: true,
    advanced: {
      updateOnContentResize: true,
      updateOnBrowserResize: true,
      autoScrollOnFocus: false
    }
  });

  /* ---------------------------------------------------------------------- */
  /* ------------------------- Effect tabs -------------------------------- */
  /* ---------------------------------------------------------------------- */

  var animation_style = "bounceIn";

  $(".dropdown-select").change(function() {
    animation_style = $(".dropdown-select").val();
  });

  $("ul.resp-tabs-list li[class^=tabs-]").click(function() {
    var tab_name = $(this).attr("data-tab-name");

    $(".resp-tabs-container").addClass("animated " + animation_style);
    $(".resp-tabs-container").one(
      "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
      function() {
        $(".resp-tabs-container").removeClass("animated " + animation_style);
      }
    );

    $(".content_2").mCustomScrollbar("destroy");
    $(".content_2").mCustomScrollbar({
      theme: "dark-2",
      contentTouchScroll: true,
      advanced: {
        updateOnContentResize: true,
        updateOnBrowserResize: true,
        autoScrollOnFocus: false
      }
    });

    if (tab_name == "contact") initialize();

    return false;
  });

  $("#verticalTab h2.resp-accordion").click(function() {
    initialize();
  });

  /* ---------------------------------------------------------------------- */
  /* ---------------------- redimensionnement ----------------------------- */
  /* ---------------------------------------------------------------------- */

  function redimensionnement() {
    if (window.matchMedia("(max-width: 800px)").matches) {
      $(".content_2").mCustomScrollbar("destroy");
      $(".resp-vtabs .resp-tabs-container").css("height", "auto");
      $(".content_2").css("height", "auto");
    } else {
      $(".resp-vtabs .resp-tabs-container").css("height", "580px");
      $(".content_2").css("height", "580px");
      $(".content_2").mCustomScrollbar("destroy");
      $(".content_2").mCustomScrollbar({
        theme: "dark-2",
        contentTouchScroll: true,
        advanced: {
          updateOnContentResize: true,
          updateOnBrowserResize: true,
          autoScrollOnFocus: false
        }
      });
    }
  }

  // On lie l'événement resize à la fonction
  window.addEventListener("load", redimensionnement, false);
  window.addEventListener("resize", redimensionnement, false);

  $("#verticalTab h2.resp-accordion").click(function() {
    initialize();
  });

  /* ---------------------------------------------------------------------- */
  /* -------------------------- Contact Form ------------------------------ */
  /* ---------------------------------------------------------------------- */

  // Needed variables
  var $contactform = $("#contactform");
  var $success = " Your message has been sent. Thank you!";
  var response = "";

  $("#contactform").submit(function() {
    $.ajax({
      type: "POST",
      url: "php/contact.php",
      data: $(this).serialize(),
      success: function(msg) {
        var msg_error = msg.split(",");
        var output_error = "";

        if (msg_error.indexOf("error-message") != -1) {
          $("#contact-message").addClass("has-error");
          $("#contact-message").removeClass("has-success");
          output_error = "Please enter your message.";
        } else {
          $("#contact-message").addClass("has-success");
          $("#contact-message").removeClass("has-error");
        }

        if (msg_error.indexOf("error-email") != -1) {
          $("#contact-email").addClass("has-error");
          $("#contact-email").removeClass("has-success");
          output_error = "Please enter valid e-mail.";
        } else {
          $("#contact-email").addClass("has-success");
          $("#contact-email").removeClass("has-error");
        }

        if (msg_error.indexOf("error-name") != -1) {
          $("#contact-name").addClass("has-error");
          $("#contact-name").removeClass("has-success");
          output_error = "Please enter your name.";
        } else {
          $("#contact-name").addClass("has-success");
          $("#contact-name").removeClass("has-error");
        }

        if (msg == "success") {
          response =
            '<div class="alert alert-success success-send">' +
            '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' +
            '<i class="glyphicon glyphicon-ok" style="margin-right: 5px;"></i> ' +
            $success +
            "</div>";

          $(".reset").trigger("click");
          $("#contact-name").removeClass("has-success");
          $("#contact-email").removeClass("has-success");
          $("#contact-message").removeClass("has-success");
        } else {
          response =
            '<div class="alert alert-danger error-send">' +
            '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' +
            '<i class="glyphicon glyphicon-remove" style="margin-right: 5px;"></i> ' +
            output_error +
            "</div>";
        }
        // Hide any previous response text
        $(".error-send,.success-send").remove();
        // Show response message
        $contactform.prepend(response);
      }
    });
    return false;
  });

  /* ---------------------------------------------------------------------- */
  /* ----------------------------- Portfolio ------------------------------ */
  /* ---------------------------------------------------------------------- */

  var filterList = {
    init: function() {
      // MixItUp plugin
      // http://mixitup.io
      $("#portfoliolist").mixitup({
        targetSelector: ".portfolio",
        filterSelector: ".filter",
        effects: ["fade"],
        easing: "snap",
        // call the hover effect
        onMixEnd: filterList.hoverEffect()
      });
    },
    hoverEffect: function() {
      // Simple parallax effect
      /*$('#portfoliolist .portfolio').hover(
		function() {
		$(this).find('.label').stop().animate({bottom: 0}, 200);
		$(this).find('img').stop().animate({top: -30}, 500);
		},
		function() {
		$(this).find('.label').stop().animate({bottom: -40}, 200);
		$(this).find('img').stop().animate({top: 0}, 300);
		}
		);*/
    }
  };

  // Run the show!
  filterList.init();

  /* ---------------------------------------------------------------------- */
  /* ----------------------------- prettyPhoto ---------------------------- */
  /* ---------------------------------------------------------------------- */

  $("a[rel^='portfolio']").prettyPhoto({
    animation_speed: "fast" /* fast/slow/normal */,
    social_tools: "",
    theme: "pp_default",
    horizontal_padding: 5,
    deeplinking: false
  });

  /* ---------------------------------------------------------------------- */
  /* ------------------------------ Google Maps --------------------------- */
  /* ---------------------------------------------------------------------- */

/*   var map;
  function initialize() {
    map = new GMaps({
      div: "#map",
      lat: -37.817917,
      lng: 144.965065,
      zoom: 16
    });
    map.addMarker({
      lat: -37.81792,
      lng: 144.96506,
      title: "Marker with InfoWindow",
      icon: "images/map-marker.png",
      infoWindow: {
        content: "<p>Melbourne Victoria, 300, Australia</p>"
      }
    });
  } */

  /* ---------------------------------------------------------------------- */
  /* --------------------------------- Blog ------------------------------- */
  /* ---------------------------------------------------------------------- */

  // More blog
  $("a.read_m").click(function() {
    var pagina = $(this).attr("href");
    var postdetail = pagina + "-page";

    if (pagina.indexOf("#post-") != -1) {
      $("#blog-page").hide();

      $(postdetail).show();
      $(".tabs-blog").trigger("click");
    }

    return false;
  });

  // More blog
  $("a.read_more").click(function() {
    var pagina = $(this).attr("href");
    var postdetail = pagina + "-page";

    if (pagina.indexOf("#post-") != -1) {
      $("#blog-page").hide();

      $(postdetail).show();
      $(".tabs-blog").trigger("click");
    }

    return false;
  });

  //pagination All
  $(".content-post a").click(function() {
    var pagina = $(this).attr("href");

    if (pagina == "#blog") {
      $(".content-post").hide();
      $("#blog-page").show();
      $(".tabs-blog").trigger("click");
    }

    return false;
  });

  //pagination blog
  $(".content-post #pagination").click(function() {
    var pagina = $(this).attr("href");
    var postdetail = pagina + "-page";

    if (pagina.indexOf("#post-") != -1) {
      $("#blog-page").hide();
      $(".content-post").hide();

      $(postdetail).show();
      $(".tabs-blog").trigger("click");
    }

    return false;
  });

  /* ---------------------------------------------------------------------- */
  /* ---------------------------- icon menu ------------------------------- */
  /* ---------------------------------------------------------------------- */

  $(".resp-tabs-container h2.resp-accordion").each(function() {
    if ($(this).hasClass("resp-tab-active")) {
      $(this).append(
        "<i class='glyphicon glyphicon-chevron-up arrow-tabs'></i>"
      );
    } else {
      $(this).append(
        "<i class='glyphicon glyphicon-chevron-down arrow-tabs'></i>"
      );
    }
  });

  $(".resp-tabs-container h2.resp-accordion").click(function() {
    if ($(this).hasClass("resp-tab-active")) {
      $(this)
        .find("i.arrow-tabs")
        .removeClass("glyphicon-chevron-down")
        .addClass("glyphicon-chevron-up");
    }

    $(".resp-tabs-container h2.resp-accordion").each(function() {
      if (!$(this).hasClass("resp-tab-active")) {
        $(this)
          .find("i.arrow-tabs")
          .removeClass("glyphicon-chevron-up")
          .addClass("glyphicon-chevron-down");
      }
    });
  });

  /* ---------------------------------------------------------------------- */
  /* -------------------------------- skillbar ---------------------------- */
  /* ---------------------------------------------------------------------- */

  $(".tabs-resume").click(function() {
    $(".skillbar").each(function() {
      $(this)
        .find(".skillbar-bar")
        .width(0);
    });

    $(".skillbar").each(function() {
      $(this)
        .find(".skillbar-bar")
        .animate(
          {
            width: $(this).attr("data-percent")
          },
          2000
        );
    });
  });

  $("#resume")
    .prev("h2.resp-accordion")
    .click(function() {
      $(".skillbar").each(function() {
        $(this)
          .find(".skillbar-bar")
          .width(0);
      });

      $(".skillbar").each(function() {
        $(this)
          .find(".skillbar-bar")
          .animate(
            {
              width: $(this).attr("data-percent")
            },
            2000
          );
      });
    });

  //Change for demo page
  $("input:radio[name=page_builder]").on("change", function() {
    $("input:radio[name=page_builder]").each(function() {
      var $this = $(this);

      if ($(this).prop("checked")) {
        window.location.replace($this.val());
      }
    });

    return false;
  });

  //hash url page changer
  if ("onhashchange" in window) {
    var hash = location.hash;

    if (hash == "") return false;

    var pages_array = ["profile", "resume", "portfolio", "blog", "contact"];

    var hash = hash.replace("#", "");

    if (!($.inArray(hash, pages_array) > -1)) {
      return false;
    } else {
      $(".tabs-" + hash).trigger("click");
    }
  }
});
var title = "codeposse+github";
var myUrl = "www.ItsSoBig.com";
var myName = "Tim Hunold";
a = {
  Name: "Tim Hunold",
  Location: "LA, and sometimes Vegas",
  Experience: "20+ years",
  Phone: "310-929-7155 (email me fist)",
  Site_Personal: "ItsSoBig.com",
  Site_Professional: "linkedin.com/in/itssobig",
  Email: title + "@gmail.com",
  Specialties:
    "HTML, jQuery, JavaScript, Gulp, CSS/SASS/SCSS, CMS, NGx (Angular 2- x), WebPack",
  Domain: location.hostname 
};
console.info(
  "%c Yeah, I got a GitHub and this is a stupid dev trick. If you saw this in console, congrats. If you saw this in view-source, bite me. " +
    "Now expand the object below.",
  "background: #222; color: #bada55"
);
console.dir(a);
