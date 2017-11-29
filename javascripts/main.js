var r = parseInt($('.option-a').css('width')) / parseInt($('.zoom').css('width'));

$(".option-a").mousemove(function(e) {
	var parentOffset = $(this).parent().offset();
	var relX = e.pageX - parentOffset.left;
	var relY = e.pageY - parentOffset.top;

	if ((relX > 0) && (relY > 0) && (relX < parseInt($(this).css('width'))) && (relY < parseInt($(this).css('height')))) {
		$('.option-a .zoom').fadeIn('fast');
		$('.option-a .zoom').css('left', relX - parseInt($('.option-a .zoom').css('width')) / 2 + 'px');
		$('.option-a .zoom').css('top', relY - parseInt($('.option-a .zoom').css('height')) / 2 + 'px');

		var bgwidth = parseInt($('.option-a').css('width'));
		var bgheight = parseInt($('.option-a').css('height'));

		var mouseleft = relX;
		var mousetop = relY;

		var prelX = 100 * (mouseleft / bgwidth);

		var prelY = 100 * (mousetop / bgheight);
		$('.option-a .zoom').css('background-position', prelX + '%' + ' ' + prelY + '%');
	} else {
		$('.option-a .zoom').fadeOut('fast');
	}
});

$(".option-b").mousemove(function(e) {
	var parentOffset = $(this).parent().offset();
	var relX = e.pageX - parentOffset.left;
	var relY = e.pageY - parentOffset.top;

	if ((relX > 0) && (relY > 0) && (relX < parseInt($(this).css('width'))) && (relY < parseInt($(this).css('height')))) {
		$('.option-b .zoom').fadeIn('fast');
		$('.option-b .zoom').css('left', relX - parseInt($('.option-b .zoom').css('width')) / 2 + 'px');
		$('.option-b .zoom').css('top', relY - parseInt($('.option-b .zoom').css('height')) / 2 + 'px');

		var bgwidth = parseInt($('.option-b').css('width'));
		var bgheight = parseInt($('.option-b').css('height'));

		var mouseleft = relX;
		var mousetop = relY;

		var prelX = 100 * (mouseleft / bgwidth);

		var prelY = 100 * (mousetop / bgheight);
		$('.option-b .zoom').css('background-position', prelX + '%' + ' ' + prelY + '%');
	} else {
		$('.option-b .zoom').fadeOut('fast');
	}
});

$(function () {

	$('.region').click(function () {
		$(this).addClass("active").siblings().removeClass("active");
	});

	// results accordian
	$('#result-01-wine').find(".expanded-content").show();
	$('#result-01-wine').find(".expand-contract").addClass("expanded");

	$('.expand-contract').click(function () {
		$(this).toggleClass("expanded");
		$(this).parent().find(".expanded-content").slideToggle();
		$(this).parent().siblings().find(".expanded-content").slideUp();
		$(this).parent().siblings().find(".expand-contract").removeClass("expanded");
		$('html,body').animate({scrollTop:$(this).offset().top -30}, 800, '');
	});

	// smooth scroll button
	$('a.smooth-scroll').on('click', function(event){     
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 800, '');
	});

	$('.option-a').click(function () {
		$(this).addClass("active");
		$('.option-b').removeClass("active");
	});

});