	
	function toggleMenu(x) {
				
				$('.menu').fadeToggle(500);
				$('#container').toggle();
				$('#container').toggleClass('.overflow-invert');
				
				x.classList.toggle("change");
				
			}
			
			$(function() 
			{
			
			$('.menu').hide();
			
			$('.nav-link').click(function(event , delta)
				{
				
					if($(this).prop('href') == 'file:///D:/EuroScola/Site%20%E2%97%8B/index.html#bg-1'|| $(this).prop('href') == 'https://macesandrei.github.io/#bg-1' )
					{
						
							$(".nav-link").css('color' , 'black');
					}
					
					else if($(this).prop('href') == 'file:///D:/EuroScola/Site%20%E2%97%8B/index.html#bg-2' || $(this).prop('href') == 'https://macesandrei.github.io/#bg-2' )
					{
						
							$(".nav-link").css('color' , '#555');
					}
					
					else if($(this).prop('href') == 'file:///D:/EuroScola/Site%20%E2%97%8B/index.html#bg-3' || $(this).prop('href') == 'https://macesandrei.github.io/#bg-3')
					{
						
							$(".nav-link").css('color' , 'white');
					}
				
					console.log($(this).prop('href'));
				
				});
				
			if($(window).width() > 640)
			{
			
				$(".horizontal-scroll").mousewheel(function(event, delta)
				{
				if(this.scrollLeft%$(window).width() == 0)
					this.scrollLeft += $(window).width() * delta;
					
					if(this.scrollLeft == 0)
					{
						if(delta == 1)
						{
							$(".nav-link").css('color' , '#555');
						}
					}
					if(this.scrollLeft == $(window).width())
					{
						if(delta == 1)
						{
							$(".nav-link").css('color' , 'white');
						}
						else if(delta == -1)
						{
							$(".nav-link").css('color' , 'black');
						}
					}
					
					else if(this.scrollLeft == $(window).width() * 2)
					{
						if(delta == -1)
						{
							$(".nav-link").css('color' , '#555');
						}
					}
	
					event.preventDefault();

				});
			}
			else
			{
				$('nav.link').css('font-size' , '5vw');
				$('#container').removeClass('horizontal-scroll');
				$('#container').addClass('vertical-scroll');
			
				$(".vertical-scroll").mousewheel(function(event, delta)
				{
				if(this.scrollTop%$(window).height() == 0)
					this.scrollTop -= $(window).height() * delta;
					
					if(this.scrollTop == 0)
					{
						if(delta == -1)
						{
							$(".nav-link").css('color' , '#555');
						}
					}
					if(this.scrollTop == $(window).height())
					{
						if(delta == -1)
						{
							$(".nav-link").css('color' , 'white');
						}
						else if(delta == 1)
						{
							$(".nav-link").css('color' , 'black');
						}
					}
					
					else if(this.scrollTop == $(window).height() * 2)
					{
						if(delta == 1)
						{
							$(".nav-link").css('color' , '#555');
						}
					}
	
					event.preventDefault();

				});
			}
				
			});
		
// credit: http://www.javascriptkit.com/javatutors/touchevents2.shtml
function swipedetect(el, callback){
  
    var touchsurface = el,
    swipedir,
    startX,
    startY,
    distX,
    distY,
    threshold = 150, //required min distance traveled to be considered swipe
    restraint = 100, // maximum distance allowed at the same time in perpendicular direction
    allowedTime = 300, // maximum time allowed to travel that distance
    elapsedTime,
    startTime,
    handleswipe = callback || function(swipedir){}
  
    touchsurface.addEventListener('touchstart', function(e){
        var touchobj = e.changedTouches[0]
        swipedir = 'none'
        dist = 0
        startX = touchobj.pageX
        startY = touchobj.pageY
        startTime = new Date().getTime() // record time when finger first makes contact with surface
        e.preventDefault()
    }, false)
  
    touchsurface.addEventListener('touchmove', function(e){
        e.preventDefault() // prevent scrolling when inside DIV
    }, false)
  
    touchsurface.addEventListener('touchend', function(e){
        var touchobj = e.changedTouches[0]
        distX = touchobj.pageX - startX // get horizontal dist traveled by finger while in contact with surface
        distY = touchobj.pageY - startY // get vertical dist traveled by finger while in contact with surface
        elapsedTime = new Date().getTime() - startTime // get time elapsed
        if (elapsedTime <= allowedTime){ // first condition for awipe met
            if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){ // 2nd condition for horizontal swipe met
                swipedir = (distX < 0)? 'left' : 'right' // if dist traveled is negative, it indicates left swipe
            }
            else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint){ // 2nd condition for vertical swipe met
                swipedir = (distY < 0)? 'up' : 'down' // if dist traveled is negative, it indicates up swipe
            }
        }
        handleswipe(swipedir)
        e.preventDefault()
    }, false)
}
  
//USAGE:

var el = document.getElementById('swipezone');
swipedetect(el, function(swipedir){
    // swipedir contains either "none", "left", "right", "top", or "down"
    if(swipedir == 'down')
		this.scrollTop += $(window).height();
});

			