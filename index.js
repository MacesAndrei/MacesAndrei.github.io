			$(function() 
			{
				
				$("#1 > *").toggleClass("1");
				$("#2 > *").toggleClass("2");
				$("#3 > *").toggleClass("3");
				$(".1").delay(500).slideDown(500);
				
			if($(window).width() > 640)
			{
			
				$(".horizontal-scroll").mousewheel(function(event, delta)
				{
				if(this.scrollLeft%$(window).width() == 0)
					this.scrollLeft -= $(window).width() * delta;
				
				if(this.scrollLeft == 0)
				$(".2").delay(500).slideDown(500);
				
				
				if(this.scrollLeft == $(window).width())
				$(".3").delay(500).slideDown(500);
			
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
				});
			}
				
			});
