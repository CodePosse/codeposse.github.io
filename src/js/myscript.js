$(document).ready(function() {
  //this is just silly stuff if you want to look at my source, and to mess with crawlers
  var title = $(this).attr("title");
  var myUrl = "www.ItsSoBig.com";
  var myName = "Tim Hunold";
  a = {
    Name: "Tim Hunold",
    Location: "LA, and sometimes Vegas",
    Experience: "20+ years",
    Phone: "310-929-7155",
    Site_Personal: "ItsSoBig.com",
    Site_Professional: "linkedin.com/in/itssobig",
    Email: title + "@gmail.com",
    Specialties: "HTML, jQuery, JavaScript, Gulp, CSS/SASS/SCSS, CMS, NGx (Angular 2- x), WebPack"
  };
  console.info(
    '%c Yeah, I got a GitHub and this is a stupid dev trick. If you saw this in console, congrats. If you saw this in view-source, bite me. ' +
      'Now expand the object below.', 'background: #222; color: #bada55'
  );
  console.dir(a);
  $(".eml").append(
    "<a href='mailto:" +
      title +
      "@gmail.com?subject=Contact from GitHub&body=Say Something'>" +
      title +
      "@gmail.com</a>"
  );
  $(".myUrl").append("<a href='http://" + myUrl + "/'>" + myUrl + "</a>");
  $(".myName").append(myName);

  //Menu respond
  if ($(window).width() < 480) {
    $(".menu_btn a").click(function() {
      $(".mainmenu").slideToggle("slow");
    });
  }

  //Contact form
  $("#ajax-contact-form").submit(function() {
    var str = $(this).serialize();
    $.ajax({
      type: "POST",
      url: "contact_form/contact_process.php",
      data: str,
      success: function(msg) {
        // Message Sent - Show the 'Thank You' message and hide the form
        if (msg == "OK") {
          result =
            '<div class="notification_ok">Your message has been sent. Thank you!</div>';
          $("#fields").hide();
        } else {
          result = msg;
        }
        $("#note").html(result);
      }
    });
    return false;
  });

  //Image hover
  $(".hover_img").mouseover(function() {
    var info = $(this).find("img");
    info.stop().animate({ opacity: 0.15 }, 500);
  });
  $(".hover_img").mouseout(function() {
    var info = $(this).find("img");
    info.stop().animate({ opacity: 1 }, 500);
  });
});

/*$(window).load(function(){
	vertAlign();
	
});*/

/*$(window).resize(function(){
	vertAlign();
});*/

/*function vertAlign(){
	if ($(window).width()>979){
		var body_h = $(window).height();
		var container_h = $('.wrap').height();	
		var padding_top = Math.abs((body_h - container_h)/2);	
		$('.wrap').css('padding-top', padding_top);
		$('.wrap').css('padding-bottom', padding_top);
	}
}*/
