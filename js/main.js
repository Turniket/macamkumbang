$(function() {$('#menu-tabs li').click(function () {
		var abc = this.className.slice(0, 2);
		$('div.t1').hide();
		$('div.t2').hide();
		$('div.t3').hide();
		$('div.' + abc).fadeIn(500);
		$('#menu-tabs li').removeClass('active');
		$(this).addClass('active');
		return false;
	});
    $('li.t1').click(); 
   
	
	
});
$(document).ready(function(){
  $('.bxslider').bxSlider();
});