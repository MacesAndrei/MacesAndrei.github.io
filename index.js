		$(function() 
			{
			
			$('.nav-link').click(function(event , delta)
				{
				
					if($(this).prop('href') == 'file:///D:/EuroScola/Site%20%E2%97%8B/index.html#bg-1')
					{
						
							$(".nav-link").css('color' , 'black');
					}
					
					else if($(this).prop('href') == 'file:///D:/EuroScola/Site%20%E2%97%8B/index.html#bg-2')
					{
						
							$(".nav-link").css('color' , '#555');
					}
					
					else if($(this).prop('href') == 'file:///D:/EuroScola/Site%20%E2%97%8B/index.html#bg-3')
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
		
			