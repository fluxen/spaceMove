(function($){
	$.fn.spaceMove=function(){
		$('html').css('overflow','hidden');
		$('body').css('overflow','hidden');
		
		var initValues = function(){
				h = $(window).height();
				w = $(window).width();
				ratioMoveY = (cHeight-h)/h;
				ratioMoveX = (cWidth-w)/w;
		}
		var	container = $(this),
			cHeight = container.outerHeight(),
			cWidth = container.outerWidth();
			
		$(window).resize(function(){initValues()});
		initValues();

		
		this.mousemove(function(e){
			var mouseX = e.pageX,
				mouseY = e.pageY,
				yPos = -1*(mouseY*ratioMoveY),
				xPos = -1*(mouseX*ratioMoveX);

			container.css('top',yPos);
			container.css('left',xPos);
		});

		return this;
	};
})(jQuery);