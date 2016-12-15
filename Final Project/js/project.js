//=== Fixed Header v1.1 ===//
// var boxToAppend = 'header';
//   var boxParent = $(boxToAppend).parent();
//   $(boxToAppend).clone().appendTo(boxParent).css({"position":"fixed", "left":"0", "top":"0", "width":"100%", "z-index":"899"}).children().remove();
//   $(boxToAppend).css({"position":"fixed", "left":"auto", "top":"0px", "width":"100%", "z-index":"999", "border-style":"none none none none", "border-width":"0px", "background":"none"
// });

//=== Lead Generation Button with MailChimp ===//
$("button").on("click", function() {
	var email = $("#email").val();

	$.getJSON("42e725e79aedff59f13d13fdaec94ccf-us14", function(data) {
	listsubscribe();
	});
});

// ===== Scroll to Top ==== //
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});