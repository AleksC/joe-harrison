$(document).ready(function(){
	$(".head").fadeIn(500);
	$(".nav").fadeIn(1000);
	var backArrow = function(page){
		$(".back-arrow").click(function(){
			$(".head").fadeIn(500);
			$(".nav").fadeIn(1000);
			$(page).hide();
		});
	};
	var showMenuItem = function(page){
		backArrow(page);
		$(".head").fadeOut(10).fadeIn(500);
		$(".nav").hide();
		$(page).fadeIn(500);		
	};
	$(".about").click(function(page){
		showMenuItem(".about-page");
	});
	$(".book").click(function(){
		showMenuItem(".book-page");
	});
	$(".buy").click(function(){
		showMenuItem(".buy-page");
	});
});

